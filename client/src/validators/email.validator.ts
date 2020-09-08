import { VALIDATION_ERROR } from "../constants";

export default (value: string) => {
  const doesMatch = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  );

  if (!doesMatch) {
    return VALIDATION_ERROR;
  }

  return undefined;
};
