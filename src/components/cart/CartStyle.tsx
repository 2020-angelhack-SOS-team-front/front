import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column; 
    align-items: center;
`

export const TitleOuterWrapper = styled.div`
  width: 100%;
  height: 96px;
  background-color: white;
  position: relative;
  border-bottom: 1px solid gray;
`

export const TitleWrapper = styled.div`
  display: flex;
  position: absolute; 
  bottom: 10px;
  left: 10px;
  width: 100px;
  justify-content: space-around;
`

export const BackIcon = styled.img`
  width: 18px;
  height: 18px;
`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
`

export const CartOuterWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #E5E5E5;
`