# Try-Catch Handler

Catch unhandled errors with error handler functions.

## `asyncTryCatch<T, E>(asyncFn: () => Promise<T>): Promise<[E | null, T | null]>`

### Error:

The fist element of the returned array will catch all the unhandled async errors.

```js
import { asyncTryCatch } from "try-catch-handler";
import axios from "axios";

async function getUserError(login: string) {
  return await asyncTryCatch(async () => {
    const { data } = await axios.get(`https://api.github.com/users/${login}`);
    // GitHub Not Found Response:
    if (data.message) {
      // throw it as an Error
      throw new Error("Not Found");
    }
    return data;
  });
}

const [error, user] = await getUserError("__not-a-user");
console.log(error); // Not found
console.log(user); // null
```

### Success:

The fulfilled result will be the second element of the returned array.

```js
import { asyncTryCatch } from "try-catch-handler";
import axios from "axios";

async function getUser(login: string) {
  return await asyncTryCatch(async () => {
    const { data } = await axios.get(`https://api.github.com/users/${login}`);
    if (data.message) {
      throw new Error("Not Found");
    }
    return data;
  });
}

const [error, user] = await getUser("rmrantunes");
console.log(error); // null
console.log(user.login); // rmrantunes
```
