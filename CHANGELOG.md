# vitest-browser-angular

## 0.0.3

### Patch Changes

- Changed API to match other vitest browser mode libs (by [@shairez](https://github.com/shairez) in [`5959be0`](https://github.com/hirezio/vitest-browser-angular/commit/5959be0bdac2a624db5a47d753c012e81058230e))
  `mount` is now `render` and you import it instead of having it as a fixture/context.

  (You can always create your own by extending the `test` function and having the render function injected instead of imported)

## 0.0.2

### Patch Changes

- ✨ withRouting is now also a boolean (by [@shairez](https://github.com/shairez) in [`3a6364b`](https://github.com/hirezio/vitest-browser-angular/commit/3a6364b0c2bb41d098a8a7d64b33fb740c68fa05))

## 0.0.1

### Patch Changes

- component now returns a locator of the component native element (by [@shairez](https://github.com/shairez) in [`f6b6c26`](https://github.com/hirezio/vitest-browser-angular/commit/f6b6c26438de0dfaf554c2b5d7f9ef844f803a75))
