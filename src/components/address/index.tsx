import React, { useState, useEffect, useRef, useContext } from 'react'
import * as S from './AddressStyle'
import UserDataContext from '../../store/UserData'
import { RouteComponentProps } from 'react-router-dom';

// user가 주소를 입력하고 '확인' 버튼을 누르면
// 다음 페이지로 넘길 때, OO시 OO구를 넘기고
// markets 페이지에서 요청하기
interface Props extends RouteComponentProps { }

const Address = ({ history }: Props) => {
    const [sendData, setSendData] = useState<string>("")
    const value = useContext(UserDataContext)
    const iframeRef = useRef<HTMLIFrameElement>(null)

    const searchAddress = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();

        new (window as any).daum.Postcode({
            oncomplete: (data: any) => {
                value.setData("address", data.address)
                setSendData(data.sigungu)
                if (iframeRef.current) iframeRef.current.style.display = "none"
            },
            width: "100%",
            height: "100%",
            maxSuggestItems: 5
        }).embed(iframeRef.current)

        if (iframeRef.current) iframeRef.current.style.display = "block"
    }

    const enterDetailAddress = (e: React.ChangeEvent<HTMLInputElement>) => value.setData("detailAddress", e.target.value)

    useEffect(() => {
        const script = document.createElement("script")
        script.src =
            "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        document.body.appendChild(script)
    }, [])

    return (
        <>
            <img className="header" src="/images/header_img.png"></img>
            <S.Wrapper>
                <S.Title>배달받고 싶은 주소를<br />입력하세요</S.Title>
                <S.FindAddressWrapper onClick={searchAddress}>
                    <S.FindAddressBtn>
                        <S.FIndAddressImg src="/images/magnifying_glass_img.png" />
                    </S.FindAddressBtn>
                    <S.FindAddressInput placeholder="주소 찾기" value={value.data.address}></S.FindAddressInput>
                </S.FindAddressWrapper>
                <S.DetailAddressInput placeholder="상세 주소를 입력하세요(선택)" onChange={enterDetailAddress} value={value.data.detailAddress} />
                <S.SubmitBtn onClick={() => history.push('/markets', { data: sendData })}>우리집 등록 완료</S.SubmitBtn>
                <S.IframeWrapper ref={iframeRef}></S.IframeWrapper>
            </S.Wrapper>
        </>
    )
}

export default Address