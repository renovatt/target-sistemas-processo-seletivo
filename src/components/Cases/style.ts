import styled from "styled-components";

export const Header = styled.header``

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const Input = styled.input`
    width: 10rem;
    height: 2rem;
    border-radius: .4rem;
    border: 1px solid #ccc;
    margin: .4rem;
    padding: .4rem
`

export const Fibonacci = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #101010;
    width: 35rem;
    height: 10rem;
    border-radius: .4rem;
    color: #fff;
    margin: .4rem;
`
export const DailyBilling = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #101010;
    width: 35rem;
    height: 10rem;
    border-radius: .4rem;
    color: #fff;
    margin: .4rem;
    padding: .4rem;
`

export const DailyBillingContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-top: .4rem;
`

export const BillingForState = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #101010;
    width: 35rem;
    height: 10rem;
    border-radius: .4rem;
    color: #fff;
    margin: .4rem;
    padding: .4rem;
`
export const StringReverse = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #101010;
    width: 35rem;
    height: 10rem;
    border-radius: .4rem;
    color: #fff;
    margin: .4rem;
    padding: .4rem;
`

export const Form = styled.form``
export const Title = styled.h3`
    margin-bottom: .4rem;
`
export const Subtitle = styled.h4``

export const Text = styled.p`
    font-size: .8rem;
`

export const Button = styled.button`
    width: 10rem;
    height: 2rem;
    border-radius: .4rem;
    outline: none;
    border: 1px solid #ccc;
    font-weight: bold;

    &:hover{
        cursor: pointer;
        transition: all .3s;
        color: #fff;
        background-color: #101010;
    }
`