import { asyncTryCatch } from "..";

const __user__ = {
  name: "John",
  surname: "Stark",
};

type User = typeof __user__;

function getUser() {
  return new Promise<User>((resolve) => {
    resolve(__user__);
  });
}

function getUserError() {
  return new Promise<User>((_, reject) => {
    reject("Not found");
  });
}

describe("asyncTryCatch", () => {
  it("should resolve the promise and return user", async () => {
    const [error, user] = await asyncTryCatch(getUser);

    expect(error).toBeNull();
    expect(user).not.toBeNull();
    expect(user).toEqual(__user__);
  });

  it("should reject the promise and catch `Not found`", async () => {
    const [error, user] = await asyncTryCatch<User, string>(getUserError);

    expect(error).not.toBeNull();
    expect(error).toBe("Not found");
    expect(user).toBeNull();
  });
});
