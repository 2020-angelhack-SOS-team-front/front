import React from "react";
import { Mobile, Header, Select, CustomLink } from "./MarketStyle";
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

const Market = () => {
  return (
    <div>
      <Mobile />
      <Header>123</Header>
      <Select>
        <CustomLink exact to="/market/" activeClassName="active">
          가계별
        </CustomLink>
        <CustomLink exact to="/market/category" activeClassName="active">
          품목별
        </CustomLink>
      </Select>
    </div>
  );
};

export default Market;
