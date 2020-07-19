import React, { useEffect } from 'react'
import * as S from './MarketsStyle'

const Markets = (props: any) => {
    const markets = [
        {
            name: "한민 시장",
            id: 1,
            address: "대전 광역시 유성구 유성대로 740번길",
            distance: 1.2
        },
        {
            name: "대전 중앙 시장",
            id: 2,
            address: "대전광역시 동구 대전로 783",
            distance: 0.9
        },
        {
            name: "땡땡땡 시장",
            id: 3,
            address: "여기가 어디냐면요 여기가 어디냐면요",
            distance: 1.4
        }
    ]

    useEffect(() => {
        const getMarkets = async (userData: string) => {
            console.log(userData)
            const res = await fetch(`http://angelhack-2020-seoul-sos.ap-northeast-2.elasticbeanstalk.com/markets?address_contain=${userData}`)
            const result = await res.json()
            console.log(result)
        }


        const userData = props.history.location.state.data;
        console.log(userData)
        getMarkets(userData);


        // TODO: 해당 data로 API 요청 필요
    }, [props])



    return (
        <>
            <img className="header" src="/images/header_img.png"></img>
            <S.Wrapper>
                <S.Title>우리집으로 배달 할<br />시장을 선택해 주세요</S.Title>
            </S.Wrapper>
            <S.Hr />
            <S.MarketListWrapper>
                {markets.map(market => {
                    return (
                        <S.MarketWrapper onClick={() => props.history.push('/market/', { data: market.id })}>
                            <S.MarketTitleWrapper>
                                <S.MarketTitle>{market.name}</S.MarketTitle>
                                <S.MarketDistance>{market.distance}km</S.MarketDistance>
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