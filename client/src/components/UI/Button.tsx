import * as React from "react";
import styled from "styled-components";
import cn from "classnames";

interface IButtonProps {
  disabled?: boolean;
  className: string;
  onClick?: any;
}

const Button: React.FunctionComponent<IButtonProps> = (props) => {
  return (
    <ButtonElement
      disabled={props.disabled}
      className={cn("py-3 px-6 rounded", { [props.className!]: props.className })}
      onClick={props.onClick}
    >
      {props.children}
    </ButtonElement>
  );
};

const ButtonElement = styled.button`
  background: var(--green-color);
  color: white;
  font-size: 1.25rem;
  &:disabled {
    opacity: 0.65;
  }
`;

export default Button;
