import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 275px; 
    height: 380px;
    display: flex;
    flex-direction: column; 
    align-items: center;
    position: fixed; 
    top: 19%;
    left: 12%;
    background-color: white;
    z-index: 1;
    padding: 18px 25px 15px 25px;
`

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #333333;
  opacity: 0.9; 
`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #333333;
`

export const SubTitle = styled.h2`
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #828282;
`
export const Hr = styled.hr`
    width: 100%;
    border-top: 1px dashed #000000;
    margin-top: 15px;
`

export const MarketImg = styled.img`
  width: 80px;
  height: 80px;
  margin: 20px 0;
`

export const FinalPrice = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  color: #2A8A67;
`

export const PurchaseDateWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 25px 0;
`

export const DateValue = styled.span`
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
`

export const ExitBtn = styled.button`
  width: 227px;
  height: 52px;
  background: #2A8A67;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: white;
`