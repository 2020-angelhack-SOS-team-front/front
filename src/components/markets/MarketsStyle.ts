import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column; 
    align-items: center;
    padding: 0 25px;
`

export const Title = styled.h1`
    font-size: 24px;
    line-height: 36px;
    font-weight: bold;
    margin-top: 60px;
    width: 100%;
`

export const ContentWrapper = styled.div`
    width: 100%;
`

export const Hr = styled.hr`
    width: 100%;
    height: 1px;
    margin: 0;
    margin-top: 15px;
    color: #E0E0E0;
`

export const MarketListWrapper = styled.div`
    overflow-y: auto;
`

export const MarketWrapper = styled.div`
    border-bottom: 1px solid #E0E0E0;
    padding: 10px 12px;
`

export const MarketTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const MarketTitle = styled.p`
    margin: 0;
    padding: 0;
    color: #333333;
    font-size: 16px;
    line-height: 24px;
`

export const MarketDistance = styled.p`
    margin: 0;
    padding: 0;
    color: #333333;
    font-size: 16px;
    line-height: 24px;
`

export const MarketAddress = styled.p`
    margin: 0;
    padding: 0;
    color: #828282;
    font-size: 14px;
    line-height: 21px;
`