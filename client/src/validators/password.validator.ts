export default (value: string) => {
  const doesMatch = /^(?=.{6,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^!&*+=]).*$/.test(
    value
  );

  if (!doesMatch) {
    return "VALIDATION_ERROR";
  }

  return undefined;
};
