interface Payload {
	[p: string]: FormDataEntryValue;
}

export const mockFetch = (data: Payload, shouldFail = false, delay = 1000): Promise<Payload> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			shouldFail ? reject(new Error('Mock server error')) : resolve(data);
		}, delay);
	});
};
