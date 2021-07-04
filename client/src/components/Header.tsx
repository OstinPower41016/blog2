import * as React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { useLocation } from "react-router-dom";

interface IHeaderProps {
  username?: string;
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const { pathname } = useLocation();
  let isAuthorizated = React.useRef(false);

  const signAuthorizated = () => {
    isAuthorizated.current = Boolean(localStorage.getItem("auth"));
  };

  React.useMemo(signAuthorizated, [pathname === "/"]);

  return (
    <header className="container">
      <nav className="flex justify-between items-center py-2 px-4">
        <NavLink to="/">
          <Brand className="text-2xl">conduit</Brand>
        </NavLink>
        <LinkWrapper className="flex items-center">
          <Link exact activeClassName="active" to="/">
            Home
          </Link>
          {!isAuthorizated.current && (
            <>
              <Link activeClassName="active" to="/signin">
                Sign in
              </Link>
              <Link activeClassName="active" to="/signup">
                Sign up
              </Link>
            </>
          )}
          {isAuthorizated.current && (
            <>
              <Link activeClassName="active" className="flex items-center" to="/editor">
                <FaRegEdit className="mr-1" />
                <span>New Article</span>
              </Link>
              <Link activeClassName="active" className="flex items-center" to="/settings">
                <AiOutlineSetting className="mr-1" />
                <span>Settings</span>
              </Link>
              <Link activeClassName="active" to={`/profile/${props.username}`}>
                {props.username}
              </Link>
            </>
          )}
        </LinkWrapper>
      </nav>
    </header>
  );
};

const Brand = styled.div`
  color: var(--green-color);
  font-family: "Titillium Web";

  font-weight: 700;
`;

const LinkWrapper = styled.div`
  > *:not(:last-child) {
    margin-right: 1rem;
  }
  .active {
    color: black;
  }
`;

const Link = styled(NavLink)`
  color: var(--main-color);
  transition: 0.3s;
  &:hover {
    color: var(--main-color-hover);
  }
  .active {
    color: var(--main-color-hover);
    background: black;
  }
`;

export default Header;
