import React from 'react'
import styled from 'styled-components'

export const HomeWindow = () => {

    return (
    <HomePlaceholder>
        <Logo>
            <Title>
                TOPDECO
            </Title>
        </Logo>
        <DescPlaceholder>
            <DescTitle>
                Furniture<br/>Company
            </DescTitle>
            <Desc>
                There are many variations of passages of Lorem Ipsum<br/>
                available, but the majority have suffered alteration in some<br/>
                form, by injected humour,
            </Desc>
        </DescPlaceholder>
        <ContactPlaceholder>
            <ContactInput placeholder="Name@company.com" type="text"/>
            <Submit>Submit</Submit>
        </ContactPlaceholder>
    </HomePlaceholder>
    );
}

const HomePlaceholder = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url("./bg.png");
    background-size: cover;
    background-repeat: no-repeat;
`;

const Logo = styled.div`
    padding-top: 2%;
    width: 40%;
`;

const Title = styled.p`
    position: relative;
    font-family: monoton;
    font-weight: 500;
    font-size: 34px;
    margin-left: 20%;
`;

const DescPlaceholder = styled.div`
    padding-top: 12%;
    width: 40%;
    //background-color: red;
`;

const DescTitle = styled.h1`
    font-family: monoton;
    font-size: 80px;
    font-weight: 100;
    margin-left: 20%;
`;

const Desc = styled.p`
    font-size: 20px;
    font-weight: 500;
    margin-left: 20%;
    color: #80808096;
`;

const ContactPlaceholder = styled.div`
    margin-top: 4%;
    width: 40%;
    height: 8%;
    //background-color: red;
`;

const ContactInput = styled.input`
    position: relative;
    height: 80%;
    width: 50%;
    margin-left: 20%;
    border-radius: 300px;
    border: 3px solid #c2c2c2;
    color: #80808096;
    text-align: center;
    font-size: large;
    outline: none;
    ::placeholder {
        color: #97979761;
    }
`;

const Submit = styled.button`
    position: relative;
    text-align: center;
    margin-left: 4%;
    height: 80%;
    width: 23%;
    background-color: #ff475e;
    color: white;
    border: 3px solid #ff475e;
    font-size: large;
    outline: none;
    border-radius: 300px;
    box-shadow: 0px 20px 30px #ff475c7a;
`;