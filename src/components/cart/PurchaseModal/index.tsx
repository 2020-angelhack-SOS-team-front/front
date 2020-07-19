import React, { useEffect } from 'react'
import * as S from './PurchaseModalStyle'
import { Link } from 'react-router-dom'

interface PurchaseModalProps {
  finalPrice: number
}

const PurchaseModal = ({ finalPrice }: PurchaseModalProps) => {
  const date = new Date().toISOString().slice(0, 10);
  const time = new Date(Date.now()).toLocaleTimeString();


  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [])

  return (
    <S.Background>
      <S.Wrapper>
        <S.Title>결제 완료</S.Title>
        <S.SubTitle>결제가 완료되었습니다.</S.SubTitle>
        <S.Hr />
        <S.MarketImg src={"/images/purchase_market_img.png"} />
        <S.FinalPrice>{finalPrice.toLocaleString()}원</S.FinalPrice>
        <S.PurchaseDateWrapper>
          <S.DateValue>결제 일시</S.DateValue>
          <S.DateValue>{date.concat(` ${time}`)}</S.DateValue>
        </S.PurchaseDateWrapper>
        <Link to="/">
          <S.ExitBtn>확인</S.ExitBtn>
        </Link>
      </S.Wrapper>
    </S.Background>
  )
}

export default PurchaseModal