import styled from "styled-components";
import React, { useState, useEffect, useContext } from "react";
import { Switch, Route, NavLink, useParams } from "react-router-dom";
import UserDataContext from "./../../store/UserData";

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
  min-height: calc(100vh - 130px);
  padding: 16px 24px;
  background: #e5e5e5;
`;

export const ListBox = () => {
  return (
    <Switch>
      <Route exact path="/market/" component={CardList} />
      <Route exact path="/market/category/" component={CategoryList} />
      <Route exact path="/market/category/:categoryId" component={List} />
    </Switch>
  );
};

interface Card {
  _id: string;
  description: string;
  image: string;
  name: string;
}

export const CardList = () => {
  const context = useContext(UserDataContext);
  console.log(context);
  return (
    <Main>
      {context.data.storeInfo.store.map((s: Card) => (
        <CardWrap
          key={s._id}
          description={s.description}
          image={s.image}
          name={s.name}
        />
      ))}
    </Main>
  );
};

const Img = styled.img`
  width: 100%;
  vertical-align: middle;
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

interface CardProps {
  description: string;
  image: string;
  name: string;
}

export const CardWrap = ({ description, image, name }: CardProps) => {
  return (
    <Card>
      <div className="content">
        <div className="active">영업중</div>
        <div className="name">{name}</div>
        <div className="info">{description}</div>
      </div>
      <div className="img-wrap">
        <Img src={image} alt="이미지" />
        <div className="item">판매 물품: #자기, #토기, #침구류</div>
      </div>
    </Card>
  );
};

export const Main2 = styled.div`
  min-height: calc(100vh - 130px);
  padding: 16px 0;
  background: #e5e5e5;
`;

export const Item = styled.li`
  background: white;
  height: 60px;
  font-size: 16px;
  line-height: 24px;
  padding: 18px 32px;
  &:not(:last-child) {
    border-bottom: 1px solid #e0e0e0;
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
`;

export const Category = () => {
  return (
    <ul>
      <Item>
        <NavLink to="/market/category/과일·견과·쌀">과일·견과·쌀</NavLink>
      </Item>
      <Item>
        <NavLink to="/market/category/수산·해선·건어물">
          수산·해선·건어물
        </NavLink>
      </Item>
      <Item>
        <NavLink to="/market/category/국·반찬·메인요리">
          국·반찬·메인요리
        </NavLink>
      </Item>
      <Item>
        <NavLink to="/market/category/면·양념·오일">면·양념·오일</NavLink>
      </Item>
      <Item>
        <NavLink to="/market/category/음료·우유·떡·간식">
          음료·우유·떡·간식
        </NavLink>
      </Item>
      <Item>
        <NavLink to="/market/category/생활용품">생활용품</NavLink>
      </Item>
      <Item>
        <NavLink to="/market/category/특산품">특산품</NavLink>
      </Item>
      <Item>
        <NavLink to="/market/category/뷰티·바디케어">뷰티·바디케어</NavLink>
      </Item>
    </ul>
  );
};

export const CategoryList = () => {
  return (
    <Main2>
      <Category />
    </Main2>
  );
};

export const CategoryBox = styled(Item)`
  border: 1px solid #e0e0e0;
`;

export const Main3 = styled(Main)`
  min-height: calc(100vh - 190px);
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Food = styled.div`
  width: 148px;
  background: #ffffff;
  border-radius: 8px;
  &:nth-child(odd) {
    margin-right: 16px;
    margin-bottom: 16px;
  }
  .image {
    position: relative;
    vertical-align: middle;
    span {
      position: absolute;
      top: 5px;
      right: 5px;
    }
  }
  .content {
    padding: 5px 10px 12px 10px;
  }
  .store {
    font-size: 10px;
    line-height: 15px;
    letter-spacing: -0.02em;
    color: #828282;
  }
  .name {
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.02em;
    color: #333333;
  }
  .price {
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: #333333;
  }
`;

export const CartIconBg = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  background: #2a8a67;
  cursor: pointer;
`;

interface CartProps {
  onCart: () => void;
}

export const CartIcon = ({ onCart }: CartProps) => {
  return (
    <CartIconBg onClick={onCart}>
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 7.00003H17.58L13.868 0.504028L12.132 1.49603L15.277 7.00003H4.72302L7.86902 1.49603L6.13202 0.504028L2.42002 7.00003H1.00002C0.846315 7.0002 0.694715 7.03576 0.55697 7.10396C0.419226 7.17216 0.299037 7.27116 0.20572 7.3933C0.112403 7.51543 0.0484649 7.65741 0.0188624 7.80824C-0.0107401 7.95907 -0.00521182 8.11468 0.0350183 8.26303L2.83402 18.527C2.95037 18.9498 3.20213 19.3228 3.55072 19.5889C3.89931 19.8549 4.3255 19.9993 4.76402 20H15.237C16.135 20 16.929 19.395 17.167 18.525L19.966 8.26203C20.0067 8.11363 20.0126 7.95783 19.9831 7.8068C19.9536 7.65577 19.8896 7.51361 19.7961 7.39141C19.7025 7.26922 19.582 7.17031 19.4439 7.10242C19.3058 7.03452 19.1539 6.99948 19 7.00003ZM15.236 18V19V18H4.76402L2.31002 9.00003H17.69L15.236 18Z"
          fill="white"
        />
      </svg>
    </CartIconBg>
  );
};

export const Confirm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 10px;
  z-index: 1;
  width: 312px;
  height: 56px;
  background: #333333;
  border-radius: 100px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

export const List = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [isCart, setCart] = useState<boolean>(false);
  const context = useContext(UserDataContext);
  let id = 0;
  const onCart = (product: any) => () => {
    console.log(product);
    console.log({ ...context.data, cart: [...context.data.cart, product] });
    context.setCart({ ...context.data, cart: [...context.data.cart, product] });
    setCart(!isCart);
    id = setTimeout(() => {
      setCart(false);
      console.log(context);
    }, 1000);
  };
  useEffect(() => {
    return () => {
      clearTimeout(id);
    };
  }, [id]);
  const obj: { [x: string]: string } = {
    채소: "vegetable",
    "과일·견과·쌀": "fruit_nut_rice",
    "수산·해선·건어물": "seafood",
    "국·반찬·메인요리": "soup_side_main",
    "면·양념·오일": "myeon_spice_oil",
    생활용품: "lifestyle",
    특산품: "special",
  };
  const product = context.data.storeInfo.product.filter(
    (p: any) => p.type === obj[`${categoryId}`]
  );
  return (
    <>
      <CategoryBox as="div">{categoryId}</CategoryBox>
      <Main3>
        {product &&
          product.map((p: any) => (
            <Food key={p._id}>
              <div className="image">
                <Img src={p.image} alt="음식" />
                <CartIcon onCart={onCart(p)} />
              </div>
              <div className="content">
                <div className="store">{p.store.name}</div>
                <div className="name">{p.name}</div>
                <div className="price">{p.price}원</div>
              </div>
            </Food>
          ))}
        {isCart && <Confirm>장바구니에 상품을 담았습니다</Confirm>}
      </Main3>
    </>
  );
};
