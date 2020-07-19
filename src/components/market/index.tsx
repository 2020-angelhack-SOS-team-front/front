import React, { useEffect } from "react";
import styled from "styled-components";
import {
  Mobile,
  Header,
  Select,
  CustomLink,
  Link,
  ListBox,
  Main,
  TitleRight,
  TitleLeft,
} from "./MarketStyle";
import { NavLink } from "react-router-dom";
/* 
우측 상단에서 시장에 있는 ‘가게별’ 리스트업 / ‘품목별’ 리스트업 두 개의 버튼 중 하나를 선택 하면 그에 맞게 하단의 화면이 보여짐
    ‘가게별’ 리스트업 일 때 (DB, API 필요)
    (required) 가게 이름
    (required) 가게 이미지
    (optional) 가게 소개
    (required) 가게에서 파는 물건 리스트
    품명, 가격
‘품목별' 리스트업 일 때 (DB, API 필요)
    채소류, 생선류… (마켓컬리 같은 곳에 있는 분류 가져오면 될 듯)
    특정 품목을 클릭하면, 디테일한 상품 리스트가 보여짐(ex. 생선류를 선택했다면 고등어, 갈치, 삼치…. 등)
    특정 상품을 클릭했다면, 해당 상품을 파는 가게들의 리스트가 보여짐
        특정 가게가 보여짐
결국 유저가 어떤 상품을 ‘장바구니’에 담을 때는 항상 가게의 페이지임(like 배달의 민족)

*/

/* 
    헤더(가게별 버튼 + 품목별 버튼) 
    메인()
*/

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    color: #333333;
    margin-right: 4px;
  }
`;

const Img = styled.img`
  width: 32px;
  margin-right: 8px;
`;

const Search = styled.span`
  cursor: pointer;
  margin-right: 14px;
`;

const SearchWrap = () => {
  return (
    <Search>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.3187 18.0273L13.232 11.9406C14.1766 10.7195 14.6875 9.22656 14.6875 7.65625C14.6875 5.77656 13.9539 4.01406 12.6273 2.68516C11.3008 1.35625 9.53359 0.625 7.65625 0.625C5.77891 0.625 4.01172 1.35859 2.68516 2.68516C1.35625 4.01172 0.625 5.77656 0.625 7.65625C0.625 9.53359 1.35859 11.3008 2.68516 12.6273C4.01172 13.9562 5.77656 14.6875 7.65625 14.6875C9.22656 14.6875 10.7172 14.1766 11.9383 13.2344L18.025 19.3187C18.0428 19.3366 18.064 19.3508 18.0874 19.3604C18.1107 19.3701 18.1357 19.3751 18.1609 19.3751C18.1862 19.3751 18.2112 19.3701 18.2345 19.3604C18.2578 19.3508 18.279 19.3366 18.2969 19.3187L19.3187 18.2992C19.3366 18.2814 19.3508 18.2602 19.3604 18.2369C19.3701 18.2135 19.3751 18.1885 19.3751 18.1633C19.3751 18.138 19.3701 18.113 19.3604 18.0897C19.3508 18.0664 19.3366 18.0452 19.3187 18.0273ZM11.3688 11.3688C10.375 12.3602 9.05781 12.9062 7.65625 12.9062C6.25469 12.9062 4.9375 12.3602 3.94375 11.3688C2.95234 10.375 2.40625 9.05781 2.40625 7.65625C2.40625 6.25469 2.95234 4.93516 3.94375 3.94375C4.9375 2.95234 6.25469 2.40625 7.65625 2.40625C9.05781 2.40625 10.3773 2.95 11.3688 3.94375C12.3602 4.9375 12.9062 6.25469 12.9062 7.65625C12.9062 9.05781 12.3602 10.3773 11.3688 11.3688Z"
          fill="#333333"
        />
      </svg>
    </Search>
  );
};

const Cart = styled.span`
  cursor: pointer;
`;

const CartWrap = () => {
  return (
    <Cart>
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 6.99991H17.58L13.868 0.503906L12.132 1.49591L15.277 6.99991H4.72299L7.86899 1.49591L6.13199 0.503906L2.41999 6.99991H0.999988C0.846284 7.00008 0.694685 7.03564 0.55694 7.10384C0.419195 7.17204 0.299006 7.27104 0.205689 7.39318C0.112372 7.51531 0.0484344 7.65729 0.0188319 7.80812C-0.0107706 7.95894 -0.00524234 8.11456 0.0349878 8.26291L2.83399 18.5269C2.95034 18.9497 3.2021 19.3227 3.55069 19.5887C3.89928 19.8548 4.32547 19.9992 4.76399 19.9999H15.237C16.135 19.9999 16.929 19.3949 17.167 18.5249L19.966 8.26191C20.0067 8.11351 20.0125 7.95771 19.9831 7.80668C19.9536 7.65565 19.8896 7.51348 19.796 7.39129C19.7025 7.2691 19.582 7.17019 19.4439 7.1023C19.3058 7.0344 19.1539 6.99936 19 6.99991ZM15.236 17.9999V18.9999V17.9999H4.76399L2.30999 8.99991H17.69L15.236 17.9999Z"
          fill="#333333"
        />
      </svg>
    </Cart>
  );
};

const Market = (props: any) => {

  useEffect(() => {
    console.log(props.history.location.state.data)
    // TODO: 해당 data로 API 요청 필요
  }, [props])

  return (
    <div>
      <Mobile />
      <Header>
        <TitleLeft>
          <Title>
            <Img src="/images/logo.png" alt="로고" />
            <span className="title">대전 중앙시장</span>
            <NavLink to="/address">
              <svg
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L7 7L12 2"
                  stroke="#333333"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </NavLink>
          </Title>
        </TitleLeft>
        <TitleRight>
          <SearchWrap />
          <CartWrap />
        </TitleRight>
      </Header>
      <Select>
        <CustomLink exact to="/market/" activeClassName="active">
          <Link>가게별</Link>
        </CustomLink>
        <CustomLink exact to="/market/category" activeClassName="active">
          <Link>품목별</Link>
        </CustomLink>
      </Select>
      <Main>
        <ListBox />
      </Main>
    </div>
  );
};

export default Market;
