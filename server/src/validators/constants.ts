export const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const passwordPattern = /^(?=.{6,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^!&*+=]).*$/;

export const EMAIL_FORMAT_ERROR = 'Incorrect email format';
export const PASSWORD_FORMAT_ERROR = 'Incorrect password format';
