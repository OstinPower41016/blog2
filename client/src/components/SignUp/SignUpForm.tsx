import * as React from "react";

import TitleForm from "../TitleForm";
import Input from "../UI/Input";
import FormWrapper from "../layouts/FormWrapper";
import Button from "../UI/Button";
import { useValuesForm } from "../../hooks/use/ValuesForm";
import { ReactInputEvent } from "../../types";
import { checkInputsOnEmpty } from "../utils/Form";
import { createUser } from "../../api/users";

interface ISignUpFormProps {}
interface IValuesForm {
  username: string;
  email: string;
  password: string;
}

const SignUpForm: React.FunctionComponent<ISignUpFormProps> = (props) => {
  const [values, onInputHandler, onSubmitHandler] = useValuesForm<IValuesForm>(
    { username: "", email: "", password: "" },
    createUser,
  );
  const isDisabled = checkInputsOnEmpty<IValuesForm>(values);

  return (
    <>
      <TitleForm subtitle="Have an account?" to="/signin">
        Sign up
      </TitleForm>
      <FormWrapper>
        <Input
          placeholder="Username"
          onInput={(e) => onInputHandler(e, "username")}
          value={values.username!}
        />
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
          Sign up
        </Button>
      </FormWrapper>
    </>
  );
};

export default SignUpForm;
