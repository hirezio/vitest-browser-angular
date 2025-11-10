---
'vitest-browser-angular': patch
---

Changed API to match other vitest browser mode libs
`mount` is now `render` and you import it instead of having it as a fixture/context.

(You can always create your own by extending the `test` function and having the render function injected instead of imported)
