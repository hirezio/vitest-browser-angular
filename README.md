# vitest-browser-angular

Mount Angular components in VItest Browser Mode. 

## Installation

```sh
pnpm add -D vitest-browser-angular
```

## Setup Test Environment with Zone.js

```ts
// vitest.config.ts

export default defineConfig({
  test: {
    globals: true,

    // 👇 This is what you need to add
    setupFiles: ['vitest-browser-angular/setup-zones'],

    browser: {
      enabled: true,
      provider: 'playwright',
      instances: [{ browser: 'chromium' }],
    },
  },
});
```

## Setup Test Environment with Zoneless

TBD

## Usage

```ts

import { test, expect } from 'vitest-browser-angular';

@Component({
  template: '<h1>{{ title }}</h1>',
})
export class HelloWorldComponent {
  title = 'Hello World';
}


test('mount', async ({ mount }) => {
  const { component } = await mount(HelloWorldComponent);
  await expect.element(component).toHaveTextContent('Hello World');
});
```

## Extending Vitest Context

If you want to extend the library's test context (fixtures) like this:

```ts
import { test as testBase } from 'vitest-browser-angular'

export const test = testBase.extend(...)
```

Make sure you add `vitest-browser-angular` to the `types` array in your `tsconfig.json`

If it doesn't work, you probably forgot to add `@vitest/browser` to the `types` array as well.


## Contributing

Want to contribute? Yayy! 🎉

Please read and follow our [Contributing Guidelines](CONTRIBUTING.md) to learn what are the right steps to take before contributing your time, effort and code.

Thanks 🙏

<br/>

## Code Of Conduct

Be kind to each other and please read our [code of conduct](CODE_OF_CONDUCT.md).

<br/>


## Credits

This project is inspired by the following projects:

[vitest-browser-vue](https://github.com/vitest-dev/vitest-browser-vue)
[angular-testing-library](https://github.com/testing-library/angular-testing-library)

## License

MIT
