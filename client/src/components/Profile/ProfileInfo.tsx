import * as React from "react";
import styled from "styled-components";
import { AiOutlineSetting } from "react-icons/ai";

import Avatar from "../UI/Avatar";
import defaultAvatar from "../image/defaultAvatar.jpg";

interface IProfileInfoProps {
  user: any;
}

const ProfileInfo: React.FunctionComponent<IProfileInfoProps> = (props) => {
  const { username = "", bio = "", image = "" } = props.user;

  const img = Boolean(image) ? image : defaultAvatar;

  return (
    <UserInfo className="pt-8 pb-4">
      <div className="container text-center items-center flex flex-col w-8/12">
        <Avatar src={img} className="mb-4" big />
        <Title>{username}</Title>
        <SubTitle>{bio}</SubTitle>
        <Button className="flex items-center self-end py-2 rounded px-1">
          <AiOutlineSetting className="mr-2" />
          <p>Edit Profile Settings</p>
        </Button>
      </div>
    </UserInfo>
  );
};

const UserInfo = styled.div`
  background: #f3f3f3;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
`;
const SubTitle = styled.p`
  color: #aaa;
  font-weight: 300;
`;

const Button = styled.button`
  color: #999;
  border: 1px solid #999;
  font-size: 0.875rem;
`;

export default ProfileInfo;
