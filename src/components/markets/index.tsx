import React, { useState, useEffect } from 'react'
import * as S from './MarketsStyle'
import UserDataContext from '../../store/UserData'

interface MarketType {
    _id: string
    name: string
    address: string
}

const Markets = (props: any) => {
    const [markets, setMarkets] = useState<MarketType[]>([])

    useEffect(() => {
        const getMarkets = async (userData: string) => {
            console.log(userData)
            const res = await fetch(`http://angelhack-2020-seoul-sos.ap-northeast-2.elasticbeanstalk.com/markets?address_contain=${userData}`)
            const result = await res.json()
            setMarkets(result.data)
        }
        const userData = props.history.location.state.data;
        getMarkets(userData);
    }, [props])

    return (
        <>
            <img className="header" src="/images/header_img.png"></img>
            <S.Wrapper>
                <S.Title>우리집으로 배달 할<br />시장을 선택해 주세요</S.Title>
            </S.Wrapper>
            <S.Hr />
            <S.MarketListWrapper>
                {markets?.map((market: MarketType) => {
                    return (
                        <S.MarketWrapper onClick={() => props.history.push('/market/', { id: market._id, name: market.name })}>
                            <S.MarketTitleWrapper>
                                <S.MarketTitle>{market.name}</S.MarketTitle>
                                <S.MarketDistance>{(Math.random() * (5)).toFixed(2)}km</S.MarketDistance>
                            </S.MarketTitleWrapper>
                            <S.MarketAddress>{market.address}</S.MarketAddress>
                        </S.MarketWrapper>
                    )
                })}
            </S.MarketListWrapper>
        </>
    )
}

export default Markets