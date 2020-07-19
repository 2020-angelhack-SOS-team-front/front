import React from 'react'
import * as S from './CartStyle'

const Cart = () => {
    // TODO: userData 에서 card 정보 가져오기
    return (
        <>
            <img className="header" src="/images/header_img.png"></img>
            <S.Wrapper>
                <S.TitleOuterWrapper>
                    <S.TitleWrapper>
                        <S.BackIcon src="/images/left-arrow-icon.png"></S.BackIcon>
                        <S.Title>장바구니</S.Title>
                    </S.TitleWrapper>
                </S.TitleOuterWrapper>
                <S.CartOuterWrapper>
                    랄라
                </S.CartOuterWrapper>
            </S.Wrapper>
        </>
    )
}

export default Cart