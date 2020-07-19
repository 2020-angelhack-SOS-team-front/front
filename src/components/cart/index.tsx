import React, { useContext } from 'react'
import * as S from './CartStyle'
import UserDataContext from '../../store/UserData'
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps { }

const Cart = ({ history }: Props) => {
    // TODO: userData 에서 cart와 배송지 정보 가져오기
    const context = useContext(UserDataContext)
    const { data: shipInfo } = context

    console.log(shipInfo)


    return (
        <>
            <img className="header" src="/images/header_img.png"></img>
            <S.Wrapper>
                <S.TitleOuterWrapper>
                    <S.TitleWrapper>
                        <S.BackIcon src="/images/left-arrow-icon.png" onClick={() => history.goBack()}></S.BackIcon>
                        <S.Title>장바구니</S.Title>
                    </S.TitleWrapper>
                </S.TitleOuterWrapper>
                <S.CartOuterWrapper>
                    <S.CartWrapper>
                        <S.ShipInfoWrapper>
                            <S.LocationIcon src="/images/location_icon.png" />
                            <S.ShipTitle>현재 배송지</S.ShipTitle>
                        </S.ShipInfoWrapper>
                        <S.ShipContent>{shipInfo.address.concat(shipInfo.detailAddress)}</S.ShipContent>
                    </S.CartWrapper>
                    <S.CartWrapper></S.CartWrapper>
                    <S.CartWrapper></S.CartWrapper>
                    <S.CartWrapper></S.CartWrapper>
                    <S.CartWrapper></S.CartWrapper>
                </S.CartOuterWrapper>
                <S.PurchaseInfo>
                    <S.PurchaseRow>
                        <S.PurchaseVal>상품 금액</S.PurchaseVal>
                        <S.PurchaseVal>{"13, 650"}원</S.PurchaseVal>
                    </S.PurchaseRow>
                    <S.PurchaseRow>
                        <S.PurchaseVal>배송비</S.PurchaseVal>
                        <S.PurchaseVal>{"3, 000"}원</S.PurchaseVal>
                    </S.PurchaseRow>
                    <S.Hr />
                    <S.PurchaseRow>
                        <S.PurchaseVal>결제 금액</S.PurchaseVal>
                        <S.PurchaseVal>{"16, 650"}원</S.PurchaseVal>
                    </S.PurchaseRow>
                    <S.PurchaseBtn>16,650원 주문하기</S.PurchaseBtn>
                </S.PurchaseInfo>
            </S.Wrapper>
        </>
    )
}

export default Cart