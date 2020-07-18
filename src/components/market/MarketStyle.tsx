import styled from "styled-components";
import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";

export const Mobile = () => {
  return (
    <img className="header" src="/images/header_img.png" alt="핸드폰 이미지" />
  );
};

export const Header = styled.div`
  margin-top: 42px;
`;

export const Select = styled.div`
  padding: 24px;
`;

export const CustomLink = styled(NavLink)`
  color: inherit;
  text-decoration: inherit;
  font-weight: bold;
  font-size: 16px;
  color: #bdbdbd;
  letter-spacing: -2%;
  border-bottom: 2px solid #bdbdbd;
  &.active {
    color: #333333;
    border-bottom: 2px solid #333333;
  }
`;

export const ListBox = () => {
  return (
    <Switch>
      <Route exact path="/">
        1
      </Route>
      <Route path="/category">2</Route>
    </Switch>
  );
};
