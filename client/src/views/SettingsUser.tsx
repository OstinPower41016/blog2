import * as React from "react";

import SettingsForm from "../components/SettingsUser/SettingsForm";

interface ISettingsProps {
  user: any;
}

const Settings: React.FunctionComponent<ISettingsProps> = (props) => {
  return (
    <div className="container">
      <SettingsForm user={props.user} />
    </div>
  );
};

export default Settings;
