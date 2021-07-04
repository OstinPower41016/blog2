import * as React from "react";
import { useHistory } from "react-router-dom";

import TitleForm from "../TitleForm";
import Input from "../UI/Input";
import FormWrapper from "../layouts/FormWrapper";
import Button from "../UI/Button";
import { useValuesForm } from "../../hooks/use/ValuesForm";
import { checkInputsOnEmpty } from "../utils/Form";
import { login } from "../../api/users";

interface ISignInFormProps {}
interface IValuesForm {
  email: string;
  password: string;
}

const SignInForm: React.FunctionComponent<ISignInFormProps> = (props) => {
  const [values, onInputHandler, onSubmitHandler] = useValuesForm<IValuesForm>(
    { email: "", password: "" },
    login,
  );
  const isDisabled = checkInputsOnEmpty<IValuesForm>(values);

  return (
    <>
      <TitleForm subtitle="Need an account?" to="/signup">
        Sign in
      </TitleForm>
      <FormWrapper>
        <Input
          placeholder="Email"
          type="email"
          onInput={(e) => onInputHandler(e, "email")}
          value={values.email}
        />
        <Input
          placeholder="Password"
          type="password"
          onInput={(e) => onInputHandler(e, "password")}
          value={values.password}
        />
        <Button className="self-end" disabled={isDisabled} onClick={onSubmitHandler}>
          Sign in
        </Button>
      </FormWrapper>
    </>
  );
};

export default SignInForm;
