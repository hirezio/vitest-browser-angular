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