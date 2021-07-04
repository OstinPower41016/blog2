import * as React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import TitleForm from "../TitleForm";
import Input from "../UI/Input";
import Button from "../UI/Button";
import FormWrapper from "../layouts/FormWrapper";
import TextArea from "../UI/TextArea";
import { useValuesForm } from "../../hooks/use/ValuesForm";
import { IValuesForm, changeUserSettings } from "../../api/users";

interface ISettingsFormProps {
  user: any;
}

const SettingsForm: React.FunctionComponent<ISettingsFormProps> = (props) => {
  const { username = "", email = "", bio = "", image = "" } = props.user;
  const [values, onInputHandler, onSubmitHandler] = useValuesForm<IValuesForm>(
    {
      username,
      email,
      password: "",
      bio,
      image,
    },
    changeUserSettings,
  );
  const history = useHistory();
  const onButtonLogoutHandler = () => {
    localStorage.removeItem("auth");
    history.push("/");
  };

  return (
    <FormWrapper>
      <TitleForm noSubTitle>Your Setting</TitleForm>
      <Input
        placeholder="URL to profile picture"
        type="url"
        value={values.image}
        onInput={(e) => onInputHandler(e, "image")}
      />
      <Input
        placeholder="Username"
        value={values.username}
        onInput={(e) => onInputHandler(e, "username")}
      />
      <TextArea
        placeholder="Short bio about you"
        value={values.bio}
        onInput={(e) => onInputHandler(e, "bio")}
      ></TextArea>
      <Input
        placeholder="Email"
        type="email"
        value={values.email}
        onInput={(e) => onInputHandler(e, "email")}
      />
      <Input
        placeholder="New Password"
        type="password"
        value={values.password}
        onInput={(e) => onInputHandler(e, "password")}
      />
      <Button className="self-end" onClick={onSubmitHandler}>
        Update Settings
      </Button>
      <Divider className="my-2" />
      <ButtonLogout className="py-2 px-4 w-4/12 rounded" onClick={onButtonLogoutHandler}>
        Or click here to logout
      </ButtonLogout>
    </FormWrapper>
  );
};

const Divider = styled.span`
  width: 100%;
  height: 1px;
  background: var(--main-color);
`;

const ButtonLogout = styled.button`
  border: 1px solid var(--error-color);
  background: transparent;
  color: var(--error-color);
  translate: 0.3s;
  &:hover {
    color: white;
    background: var(--error-color);
  }
`;

export default SettingsForm;
