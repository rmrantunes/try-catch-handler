# Try-Catch Handler

Catch unhandled errors with error handler functions.

## `asyncTryCatch<T, E>(asyncFn: () => Promise<T>): Promise<[E | null, T | null]>`

### Error:

The fist element of the returned array will catch all the unhandled async errors.

```ts
import { asyncTryCatch } from "try-catch-handler";
import axios from "axios";

const [error, user] = await asyncTryCatch(async () => {
  const USERNAME = "__not-a-user";

  const { data } = await axios.get(`https://api.github.com/users/${USERNAME}`);
  // GitHub Not Found Response:
  if (data.message) {
    // throw it as an Error
    throw new Error("Not Found");
  }
  return data;
});

console.log(error); // Not found
console.log(user); // null
```

### Success:

The fulfilled result will be the second element of the returned array.

```ts
import { asyncTryCatch } from "try-catch-handler";
import axios from "axios";

const [error, user] = await asyncTryCatch(async () => {
  const USERNAME = "rmrantunes";

  const { data } = await axios.get(`https://api.github.com/users/${USERNAME}`);
  if (data.message) {
    throw new Error("Not Found");
  }
  return data;
});

console.log(error); // null
console.log(user?.login); // rmrantunes
```
