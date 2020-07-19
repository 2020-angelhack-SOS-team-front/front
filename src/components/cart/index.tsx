import React, { useState, useContext } from 'react'
import * as S from './CartStyle'
import UserDataContext from '../../store/UserData'
import { RouteComponentProps } from 'react-router-dom';
import PurchaseModal from './PurchaseModal'

interface Props extends RouteComponentProps { }

// TODO: userData 에서 cart와 배송지 정보 가져오기
const Cart = ({ history }: Props) => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const context = useContext(UserDataContext)
    const { data: shipInfo } = context

    const itemsPrice = 13650
    const finalPrice = itemsPrice + 3000

    const dummyData = {
        img: `/images/dummy_img.png`,
        storeName: `만물 정육점`,
        itemName: `계란 한판`,
        itemPrice: 4900
    }

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
                    <S.ShipOuterWrapper>
                        <S.ShipInfoWrapper>
                            <S.LocationIcon src="/images/location_icon.png" />
                            <S.ShipTitle>현재 배송지</S.ShipTitle>
                        </S.ShipInfoWrapper>
                        <S.ShipContent>{shipInfo.address.concat(shipInfo.detailAddress)}</S.ShipContent>
                    </S.ShipOuterWrapper>
                    <S.CartWrapper>
                        <S.ItemImg src={dummyData.img} />
                        <S.TextWrapper>
                            <S.StoreName>{dummyData.storeName}</S.StoreName>
                            <S.ItemName>{dummyData.itemName}</S.ItemName>
                            <S.ItemPrice>{dummyData.itemPrice.toLocaleString()}원</S.ItemPrice>
                        </S.TextWrapper>
                    </S.CartWrapper>

                </S.CartOuterWrapper>
                <S.PurchaseInfo>
                    <S.PurchaseRow>
                        <S.PurchaseVal>상품 금액</S.PurchaseVal>
                        <S.PurchaseVal>{itemsPrice.toLocaleString()}원</S.PurchaseVal>
                    </S.PurchaseRow>
                    <S.PurchaseRow>
                        <S.PurchaseVal>배송비</S.PurchaseVal>
                        <S.PurchaseVal>3,000원</S.PurchaseVal>
                    </S.PurchaseRow>
                    <S.Hr />
                    <S.PurchaseRow>
                        <S.PurchaseVal>결제 금액</S.PurchaseVal>
                        <S.PurchaseVal>{finalPrice.toLocaleString()}원</S.PurchaseVal>
                    </S.PurchaseRow>
                    <S.PurchaseBtn onClick={() => setIsOpenModal(true)}>{finalPrice.toLocaleString()}원 주문하기</S.PurchaseBtn>
                </S.PurchaseInfo>
                {isOpenModal && <PurchaseModal finalPrice={finalPrice} />}
            </S.Wrapper>
        </>
    )
}

export default Cart