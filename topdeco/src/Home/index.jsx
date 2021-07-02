import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { Ellipse } from './ellipse'

export const HomeWindow = () => {

    return (
    <HomePlaceholder>
        <Ellipse/>
        <HomePlace>
            <Logo>
                <Title>
                    TOPDECO
                </Title>
                <Link to="/admin">
                    <Admin>
                        Admin
                    </Admin>
                </Link>
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
                <ContactInput placeholder="name@company.com" type="text"/>
                <Submit>Submit</Submit>
            </ContactPlaceholder>
        </HomePlace>
        <SponsorPlace>
            <Sponsors src={require('./assets/sponsors.png')}>
            </Sponsors>
        </SponsorPlace>
        <KeysTitle>Key benefits of using task<br/>management software</KeysTitle>
        <KeysDesc>There are many variations of passages of Lorem Ipsum<br/>
                    available, but the majority have suffered alteration in some<br/>
                    form, by injected humour,</KeysDesc>
        <WhyusTitle>Why do you need <br/>Top Deco</WhyusTitle>
        <WhyusDesc>Do you waste time organizing sticky notes, searching your email<br/>
                 and apps for to-dos, and figuring out what to work on first?<br/>
                 Then you need one solution to prioritize your tasks, <br/>
                 manage your time, and meet your deadlines.</WhyusDesc>
        <SeemlessTitle>Seamless Team Workflow & Efficient Task Management</SeemlessTitle>
        <SeemlessDesc>Do you waste time organizing sticky notes, searching your email and apps for to-dos, and figuring out what to work on first? Then you need one solution to prioritize your tasks, manage your time, and meet your deadlines.</SeemlessDesc>
        <FooterTitle>Get better work done</FooterTitle>
        <FooterDesc>See why millions of people across 195 countries use TopDeco.</FooterDesc>
        <FooterInput placeholder="name@company.com" type="text"/>
        <FooterSubmit>Submit</FooterSubmit>
    </HomePlaceholder>
    );
}

const HomePlaceholder = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
	height: 5310.00px;
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-font-smoothing: antialiased;
	overflow: hidden;
	-ms-overflow-style: none;
`;

const HomePlace = styled.div`
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-font-smoothing: antialiased;
	overflow: hidden;
	-ms-overflow-style: none;
`;

const Logo = styled.div`
    padding-top: 2%;
    width: 100%;
`;

const Title = styled.p`
    position: relative;
    font-family: monoton;
    font-weight: 500;
    font-size: 34px;
    margin-left: 10%;
`;

const Admin = styled.button`
    position: absolute;
    text-align: center;
    align-items: right;
    background-color: transparent;
    color: white;
    border: 3px solid grey;
    font-size: large;
    outline: none;
    width: 147.00px;
	height: 58.00px;
	left: 1643.00px;
	top: 56.00px;
    border-radius: 300px;
    &:hover {
        border: 3px solid white;
    }
`;

const DescPlaceholder = styled.div`
    padding-top: 12%;
    width: 40%;
    z-index: 2;
    //background-color: red;
`;

const DescTitle = styled.h1`
    font-family: monoton;
    font-size: 80px;
    font-weight: 100;
    margin-left: 20%;
    z-index: 3;
`;

const Desc = styled.p`
    font-size: 20px;
    font-weight: 500;
    margin-left: 20%;
    color: #80808096;
    z-index: 3;
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

const SponsorPlace = styled.div`
    height: auto;
    width: 100%;
    overflow: hidden;
`;

const Sponsors = styled.img`
    margin-left: 7%;
    margin-top: 110px;
`;

const KeysTitle = styled.h1`
    margin-top: 400px;
    width: 100%;
    text-align: center;
    height: auto;
    position: relative;
    font-size: 50px;
`;

const KeysDesc = styled.p`
    font-size: 20px;
    margin-top: 50px;
    text-align: center;
    font-weight: 500;
    color: #80808096;
    z-index: 3;
`;

const WhyusTitle = styled.h1`
    position: relative;
    margin-top: 400px;
    margin-right: 100px;
    text-align: right;
    height: auto;
    position: relative;
    font-size: 50px;
`;

const WhyusDesc = styled.p`
    position: relative;
    font-size: 20px;
    margin-top: 50px;
    margin-right: 100px;
    text-align: right;
    font-weight: 500;
    color: #80808096;
    z-index: 3;
`;

const SeemlessTitle = styled.h1`
    position: relative;
    margin-top: 600px;
    margin-left: 350px;
    margin-right: 1000px;
    height: auto;
    position: relative;
    font-size: 50px;
`;

const SeemlessDesc = styled.p`
    position: relative;
    font-size: 20px;
    margin-top: 50px;
    margin-right: 1000px;
    margin-left: 350px;
    font-weight: 500;
    color: #80808096;
    z-index: 3;
`;

const FooterTitle = styled.h1`
    position: absolute;
    text-align: center;
    font-size: 50px;
    left: 567.00px;
	top: 4827.50px;
    width: 787.00px;
	height: 72.00px;
`;

const FooterDesc = styled.p`
	font-size: 27.00px;
    position: absolute;
    text-align: center;
    width: 552.00px;
	height: 75.00px;
	left: 681.00px;
	top: 4907.50px;
`;

const FooterInput = styled.input`
    position: absolute;
    border-radius: 300px;
    border: 3px solid #c2c2c2;
    color: #80808096;
    text-align: center;
    font-size: large;
    outline: none;
    width: 400.00px;
	height: 75.00px;
	left: 580.00px;
	top: 5100.50px;
    ::placeholder {
        color: #97979761;
    }
`;

const FooterSubmit = styled.button`
    position: absolute;
    text-align: center;
    margin-left: 4%;
    background-color: #ff475e;
    color: white;
    border: 3px solid #ff475e;
    font-size: large;
    outline: none;
    border-radius: 300px;
    box-shadow: 0px 20px 30px #ff475c7a;
    width: 260.00px;
	height: 75.00px;
	left: 1000.00px;
	top: 5100.50px;
`;