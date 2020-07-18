import React from 'react'
import * as S from './HomeStyle'
import { RouteComponentProps } from 'react-router-dom';


interface Props extends RouteComponentProps { }

const Home = ({ history }: Props) => {
    return (
        <S.Wrapper>
            <S.Img src={"/images/main_page_img.png"} />
            <S.Title>우리 동네 시장 배달</S.Title>
            <S.SubTitle>가까운 우리 동네 시장에서 다양한 <br />상품들을 쉽고 빠르게 배달해 보세요!</S.SubTitle>
            <S.Btn onClick={() => history.push('/address')}>우리 동네 등록하고 시장 둘러보기</S.Btn>
        </S.Wrapper >
    )
}

export default Home

