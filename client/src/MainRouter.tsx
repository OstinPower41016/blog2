import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Header from "./components/Header";
import Home from "./views/Home";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import { getUser } from "./api/users";
import SettingsUser from "./views/SettingsUser";
import Profile from "./views/Profile";
import NewArticle from "./views/NewArticle";

interface IMainRouterProps {}

const MainRouter: React.FunctionComponent<IMainRouterProps> = (props) => {
  const [user, setUser] = React.useState<any>();
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (localStorage.getItem("auth")) {
      getUser().then((res) => {
        setUser(res);
      });
    }
  }, [pathname]);

  return (
    <>
      <Header username={user?.username} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/editor" component={NewArticle} />
        <Route path="/settings" render={() => <SettingsUser user={user} />} />
        <Route path={`/profile/${user?.username}`} render={() => <Profile user={user} />} />
      </Switch>
    </>
  );
};

export default MainRouter;
