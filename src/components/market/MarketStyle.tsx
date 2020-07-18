import styled from "styled-components";
import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";

export const Mobile = () => {
  return (
    <img className="header" src="/images/header_img.png" alt="핸드폰 이미지" />
  );
};

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 42px;
  padding: 10px 24px;
`;

export const TitleLeft = styled.div``;

export const TitleRight = styled.div``;

export const Select = styled.div`
  padding: 0 24px;
`;

export const CustomLink = styled(NavLink)`
  display: inline-block;
  color: inherit;
  text-decoration: inherit;
  font-weight: bold;
  font-size: 16px;
  color: #bdbdbd;
  letter-spacing: -2%;
  border-bottom: 2px solid none;
  margin-right: 22px;
  &.active {
    color: #333333;
    border-bottom: 2px solid #333333;
  }
`;

export const Link = styled.span`
  display: inline-block;
  padding: 9px;
`;

export const Main = styled.div`
  padding: 16px 24px;
  background: #e5e5e5;
`;

export const ListBox = () => {
  return (
    <Switch>
      <Route exact path="/market/" component={CardList} />
      <Route path="/market/category">2</Route>
    </Switch>
  );
};

export const CardList = () => {
  return (
    <>
      <CardWrap />
      <CardWrap />
      <CardWrap />
      <CardWrap />
      <CardWrap />
      <CardWrap />
      <CardWrap />
    </>
  );
};

const Img = styled.img`
  width: 100%;
`;

const Card = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  .content {
    padding: 12px 20px;
    .active {
      font-size: 8px;
      color: #2a8a67;
      margin-bottom: 4px;
    }
    .name {
      font-size: 16px;
      font-weight: bold;
      color: #333333;
      margin-bottom: 4px;
    }
    .info {
      font-size: 12px;
      color: #333333;
    }
  }
  .img-wrap {
    position: relative;
    .item {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 4px 12px;
      background: rgba(20, 20, 20, 0.8);
      font-size: 10px;
      color: #e0e0e0;
    }
  }
`;

export const CardWrap = () => {
  return (
    <Card>
      <div className="content">
        <div className="active">영업중</div>
        <div className="name">만물상회</div>
        <div className="info">그릇, 혼수 용품들을 취급 판매 점포</div>
      </div>
      <div className="img-wrap">
        <Img src="/images/card.jpeg" alt="이미지" />
        <div className="item">판매 물품: #자기, #토기, #침구류</div>
      </div>
    </Card>
  );
};
