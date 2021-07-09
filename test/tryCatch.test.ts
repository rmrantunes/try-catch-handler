import { tryCatch } from "..";

const __user__ = {
  name: "John",
  surname: "Stark",
};

describe("tryCatch", () => {
  it("should catch the error JSON.parse", () => {
    const [error1] = tryCatch(() => {
      JSON.parse("truee");
    });

    expect(error1?.message).toBe("Unexpected token e in JSON at position 4");
  });

  it("should return the result from JSON.parse", () => {
    const [, result1] = tryCatch(() => {
      return JSON.parse("true");
    });

    const [, result2] = tryCatch(() => {
      return JSON.parse(JSON.stringify(__user__));
    });

    expect(result1).toBe(true);
    expect(result2).toEqual(__user__);
  });

  it("should catch from `trow new Error`", () => {
    const [error1] = tryCatch(() => {
      throw new Error("Oh, something went wrong");
    });

    expect(error1?.message).toBe("Oh, something went wrong");
  });

  it("should result be a Promise, not the resolved value", () => {
    const [, result] = tryCatch<Promise<string>>(() => {
      return new Promise((resolve) => {
        resolve("value");
      });
    });

    expect(result?.constructor).toEqual(Promise);
    expect(result).not.toBe("value");
  });
});
