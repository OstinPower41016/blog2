import * as React from "react";

import SignUpForm from "../components/SignUp/SignUpForm";

interface ISignupProps {}

const Signup: React.FunctionComponent<ISignupProps> = (props) => {
  return (
    <div className="container">
      <SignUpForm />
    </div>
  );
};

export default Signup;
