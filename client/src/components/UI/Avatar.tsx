import * as React from "react";
import styled from "styled-components";
import cn from "classnames";

interface IAvatarProps {
  src: string;
  className?: string;
  big?: boolean;
}

interface IAvatarElement {
  big: boolean;
}

const Avatar: React.FunctionComponent<IAvatarProps> = (props) => {
  return (
    <AvatarItem
      src={props.src}
      className={cn({ [props.className!]: props.className })}
      big={props.big}
    />
  );
};

const AvatarItem = styled.img`
  width: ${(props: IAvatarProps) => (props.big ? "100px" : "32px")};
  height: ${(props: IAvatarProps) => (props.big ? "100px" : "32px")};
  border-radius: ${(props: IAvatarProps) => (props.big ? "100px" : "32px")};
`;

export default Avatar;
