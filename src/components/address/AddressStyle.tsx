import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 100vh;
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

export const FindAddressWrapper = styled.div`
    display: flex;
    width: 100%;
    margin-top: 20px; 
`

export const FindAddressBtn = styled.button`
`

export const FIndAddressImg = styled.img`
    width: 18px;
    height: 18px;
`

export const FindAddressInput = styled.input`
    width: 100%;
    border: 0;

    ::placeholder {
        font-size: 14px;
        line-height: 21px;
        color: #BDBDBD;
    }
`

export const DetailAddressInput = styled.input`
    width: 100%;
    height: 48px;
    border: 1px solid #BDBDBD;
    border-radius: 2px;
    margin: 25px 0;
    padding: 5px 10px;

    ::placeholder {
        font-size: 14px;
        line-height: 21px;
        color: #BDBDBD;
    }
`

export const IframeWrapper = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;

  overflow: hidden;
  z-index: 10;
  border: 1.2px solid #bdbdbd;
  width: 100%;
  min-width: 100%;
  height: 100%;
  min-height: 100%;

  -webkit-overflow-scrolling: touch;
`

export const SubmitBtn = styled.button`
    width: 100%;
    height: 52px;
    font-size: 16px;
    font-weight: bold;
    background-color: #2A8A67;
    color: white;
    border-radius: 8px;
`

export const Hr = styled.hr`
    width: 100%;
    height: 1px;
    margin: 0;
    margin-top: 15px;
    color: #E0E0E0;
`