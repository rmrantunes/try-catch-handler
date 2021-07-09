declare type AsyncFunction<T> = (...args: any[]) => Promise<T>;
/**
 * @warning If you are `not` working with `Promises / asynchronism`, better use `tryCatch`
 * @param asyncFn asynchronous function that returns `Promise<T>`
 * @returns a tuple `Promise<[error, result]>`
 */
export declare function asyncTryCatch<T, E extends Error | string = Error>(asyncFn: AsyncFunction<T>): Promise<[E | null, T | null]>;
declare type SyncFunction<T> = (...args: any[]) => T;
/**
 * @warning If you are working with `Promises / asynchronism`, better use `asyncTryCatch`
 * @param fn synchronous function that returns type `T`
 * @returns a tuple `[error, result]`
 */
export declare function tryCatch<T, E extends Error | string = Error>(fn: SyncFunction<T>): [E | null, T | null];
export {};
