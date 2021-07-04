import * as React from "react";
import styled from "styled-components";

import { ReactInputEvent } from "../../types";

interface IInputProps {
  type?: string;
  placeholder: string;
  onInput?: (e: ReactInputEvent) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value: string;
  fz?: string;
}

interface IInputElement {
  fz: string;
}

const Input: React.FunctionComponent<IInputProps> = (props) => {
  return (
    <InputElement
      className="rounded py-3 px-6"
      type={props.type || "text"}
      placeholder={props.placeholder}
      onInput={props.onInput as (e: React.ChangeEvent<HTMLInputElement>) => void}
      onKeyPress={props.onKeyPress}
      value={props.value}
      fz={props.fz || ""}
    />
  );
};

const InputElement = styled.input`
  font-size: ${(props: IInputElement) => (props.fz ? props.fz : "1.25rem")};
  outline-color: #b3d7f4;
  border: 1px solid rgba(0, 0, 0, 0.15);
`;

export default Input;
