export default (value: string) => {
  const doesMatch = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^!&*+=]).*$/.test(
    value
  );

  if (!doesMatch) {
    return "VALIDATION_ERROR";
  }

  return undefined;
};
