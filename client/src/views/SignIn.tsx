import * as React from "react";

import SignInForm from "../components/SignIn/SignInForm";

interface ISignInProps {}

const SignIn: React.FunctionComponent<ISignInProps> = (props) => {
  return (
    <div className="container">
      <SignInForm />
    </div>
  );
};

export default SignIn;
