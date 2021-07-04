import styled from "styled-components";
import cn from "classnames";

const FormWrapper: React.FC<{ className?: string }> = (props) => {
  return (
    <FormWrapperElement
      className={cn("mt-4 mx-auto w-6/12 flex flex-col", { [props.className!]: props.className })}
    >
      {props.children}
    </FormWrapperElement>
  );
};

const FormWrapperElement = styled.div`
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

export default FormWrapper;
