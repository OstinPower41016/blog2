import * as React from "react";

import ProfileInfo from "../components/Profile/ProfileInfo";
import ProfileTab from "../components/Profile/ProfileTab";

interface IProfileProps {
  user: any;
}

const Profile: React.FunctionComponent<IProfileProps> = (props) => {
  return (
    <>
      <ProfileInfo user={props.user} />
      <div className="container w-8/12">
        <ProfileTab />
      </div>
    </>
  );
};

export default Profile;
