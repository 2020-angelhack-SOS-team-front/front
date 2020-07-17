import React from 'react'
import * as S from './HomeStyle'
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps { }

const Home = ({ history }: Props) => {
    return (
        <S.Wrapper>
            <S.Btn onClick={() => history.push('/address')}>주소 입력하러 가기</S.Btn>
        </S.Wrapper>
    )
}

export default Home