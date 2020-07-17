import React, { useState, useEffect } from 'react'
import * as S from './AddressStyle'

// user가 주소를 입력하고 '확인' 버튼을 누르면
// 다음 페이지로 넘길 때, OO시 OO구를 넘기고
// markets 페이지에서 요청하기
// 지금은 api 요청할 부분만 떼어냈는데, 유저가 주소 입력한거 전역 context로 가지고 있어야 할 듯

const Address = () => {
    const [address, setAddress] = useState<string>("")
    const searchAddress = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();

        new (window as any).daum.Postcode({
            oncomplete: (data: any) => {
                setAddress(data.sigungu)
            }
        }).open()
    }

    useEffect(() => {
        const script = document.createElement("script")
        script.src =
            "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        document.body.appendChild(script)
    }, [])

    console.log(address)

    return (
        <S.Wrapper>
            <input></input>
            <button onClick={searchAddress}>주소 검색</button>
            <input></input>
        </S.Wrapper>
    )
}

export default Address