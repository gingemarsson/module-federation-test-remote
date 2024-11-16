
export const fetcher = <T>(url: string) =>
        fetch(url)
            .then((response) => getResponseContentOrError<T[]>(response));

export const getResponseContentOrError = async <T>(res: Response): Promise<T> => {
    if (res.status !== 200) {
        throw Error(`Error ${res.status}: ${JSON.parse(await res.text()).message}`);
    }
    return res.json();
};