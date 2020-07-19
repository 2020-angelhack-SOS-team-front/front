import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
    align-items: center;
`

export const TitleOuterWrapper = styled.div`
  width: 100%;
  height: 96px;
  background-color: white;
  position: relative;
  border-bottom: 1px solid #E0E0E0;
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
  padding: 15px 0;
  padding-bottom: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`

export const CartWrapper = styled.div`
  width: 327px;
  height: 105px;
  background-color: white;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 15px;
`

export const ShipInfoWrapper = styled.div`
  display: flex;
  margin-bottom: 5px;
`

export const LocationIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 5px;
`

export const ShipTitle = styled.h2`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
`

export const ShipContent = styled.p`
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #333333;

`

export const PurchaseInfo = styled.div`
  width: 100%;
  height: 200px;
  background-color: white;
  position: fixed;
  bottom: 0;
  border-radius: 8px 8px 0 0;
  border-top: 1px solid #E0E0E0;
  padding: 12px 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const Hr = styled.hr`
    width: 100%;
    height: 1px;
    margin: 5px 0;
    color: #E0E0E0;
`

export const PurchaseRow = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PurchaseVal = styled.span`
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
`

export const PurchaseBtn = styled.button`
  width: 100%;
  height: 40px;
  background-color: #2A8A67;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
`
