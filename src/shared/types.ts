export interface ErrorInput<T = string | undefined> {
	[key: string]: T;
}
export type HandlerMethod<T> = (event: T) => void;
