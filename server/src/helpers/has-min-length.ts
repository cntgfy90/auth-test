export default (value: string, minLength: number): boolean => {
    return value.length >= minLength;
};
