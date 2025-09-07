import { expect, test } from '../src';
import { HelloWorldComponent } from './hello-world.component';

test('mount', async ({ mount }) => {
  const { component } = await mount(HelloWorldComponent);
  await expect.element(component).toHaveTextContent('Hello World');
});
