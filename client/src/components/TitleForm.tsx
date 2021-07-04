import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface ITitleFormProps {
  subtitle?: string;
  to?: string;
  noSubTitle?: boolean;
}

const TitleForm: React.FunctionComponent<ITitleFormProps> = (props) => {
  return (
    <div className="text-center mt-6">
      <Title>{props.children}</Title>
      {!props.noSubTitle && <SubTitle to={props.to!}>{props.subtitle}</SubTitle>}
    </div>
  );
};

const Title = styled.p`
  font-size: 2.5rem;
  font-weigth: 500;
`;

const SubTitle = styled(Link)`
  color: var(--green-color);
`;

export default TitleForm;
