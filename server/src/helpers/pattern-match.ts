export default (value: string, pattern: RegExp): boolean => {
    return pattern.test(value);
};
