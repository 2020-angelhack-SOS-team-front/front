import React, { useEffect } from 'react'
import * as S from './MarketsStyle'

const Markets = (props: any) => {
    useEffect(() => {
        console.log(props.history.location.state.data)
        // TODO: 해당 data로 API 요청 필요
    }, [props])

    return (
        <>
            <img className="header" src="/images/header_img.png"></img>
            <S.Wrapper>
                <S.Title>우리집으로 배달 할<br />시장을 선택해 주세요</S.Title>
            </S.Wrapper>
        </>
    )
}

export default Markets