import type { EnvironmentProviders, Provider, Type } from "@angular/core";
import {
  type ComponentFixture,
  ɵgetCleanupHook as getCleanupHook,
  TestBed,
} from "@angular/core/testing";
import { provideRouter, Router, Routes } from "@angular/router";
import { RouterTestingHarness } from "@angular/router/testing";
import { type BrowserPage, type Locator, page } from "@vitest/browser/context";

import { test as baseTest } from "vitest";

export * from "vitest";

interface RoutingConfig {
  routes: Routes;
  initialRoute?: string;
}

interface MountConfig {
  withRouting?: RoutingConfig | boolean;
  providers?: Array<Provider | EnvironmentProviders>;
  imports?: unknown[];
}

export interface MountResult<T> {
  fixture: ComponentFixture<T>;
  component: Locator;
  componentClassInstance: T;
  routerHarness?: RouterTestingHarness;
  router?: Router;
}

export type MountFn = <T>(
  component: Type<T>,
  config?: MountConfig,
) => Promise<MountResult<T>>;

page.extend({
  [Symbol.for("vitest:component-cleanup")]: getCleanupHook(false),
});

export const test = baseTest.extend<{
  page: BrowserPage;
  mount: MountFn;
}>({
  page: async ({}, use) => {
    await use(page);
  },
  mount: async ({ page }, use) => {
    await use(async <T>(componentClass: Type<T>, config?: MountConfig) => {
      const imports = [componentClass, ...(config?.imports || [])];
      const providers = [...(config?.providers || [])];
      const mountResult: Partial<MountResult<T>> = {};

      if (config?.withRouting) {
        const routes =
          typeof config.withRouting === "boolean"
            ? []
            : config.withRouting.routes;
        providers.push(provideRouter(routes));
      }

      TestBed.configureTestingModule({
        imports,
        providers,
      });

      if (config?.withRouting) {
        const routerHarness = await RouterTestingHarness.create(
          typeof config.withRouting === "boolean"
            ? undefined
            : config.withRouting.initialRoute,
        );
        mountResult.routerHarness = routerHarness;
        mountResult.router = TestBed.inject(Router);
      }
      const fixture = TestBed.createComponent(componentClass);
      fixture.autoDetectChanges();
      await fixture.whenStable();

      const component = page.elementLocator(fixture.nativeElement);

      return {
        ...mountResult,
        fixture,
        componentClassInstance: fixture.componentInstance,
        component,
      };
    });
  },
});
