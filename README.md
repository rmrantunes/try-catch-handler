# Try-Catch Handler

Catch unhandled errors with error handler functions.

## Ususal

```js
function parse(text) {
  try {
    return JSON.parse(text)
  } catch (error) {
    console.error(error.message)
  }
}
```

## With handler:
### `tryCatch<T, E>(fn: () => T): [E | null, T | null]`

```js
import { tryCatch } from "try-catch-handler"

function parse(text) {
  return JSON.parse(text)
}

const [error, result] = tryCatch(parse)
```

<!-- ## Ususal async


## `asyncTryCatch<T, E>(asyncFn: () => Promise<T>): Promise<[E | null, T | null]>` -->

