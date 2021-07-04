import * as React from "react";
import styled from "styled-components";

interface ITextAreaProps {
  placeholder: string;
  value: string;
  onInput?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  fz?: string;
}
interface ITextAreaElement {
  fz: string;
}

const TextArea: React.FunctionComponent<ITextAreaProps> = (props) => {
  return (
    <TextAreaElement
      className="rounded py-3 px-6"
      placeholder={props.placeholder}
      value={props.value}
      onInput={props.onInput}
      fz={props.fz || ""}
    />
  );
};

const TextAreaElement = styled.textarea`
  font-size: ${(props: ITextAreaElement) => (props.fz ? props.fz : "1.25rem")};
  outline-color: #b3d7f4;
  border: 1px solid rgba(0, 0, 0, 0.15);
  min-height: 200px;
`;

export default TextArea;
