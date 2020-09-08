import React from "react";

import "./auth-screen.scss";

export interface AuthScreenProps {
  className?: string;
  children: React.ReactNode;
}

export const AuthScreen = (props: AuthScreenProps) => {
  const { children, ...rest } = props;

  return (
    <div {...rest} className="auth">
      <section className="auth__form">{children}</section>
      <div className="auth--secondary" />
    </div>
  );
};
