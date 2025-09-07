# vitest-browser-angular

Mount Angular components in VItest Browser Mode. 

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