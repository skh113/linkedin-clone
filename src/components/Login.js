import React from "react";
import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="" />
        </a>
        <div>
          <Join>Join Now!</Join>
          <SignIn>
            <a href="http://localhost:3000/home">Sign in</a>
          </SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Wellcome to your professional community</h1>
          <img src="/images/login-hero.svg" alt="" />
        </Hero>
        <Google>
          <img src="/images/google.svg" alt="" />
          Sign in with Google
        </Google>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
`;
const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 10px 0;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  cursor: pointer;
  font-size: 1.125rem;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  transition: 300ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    color: rgba(0, 0, 0, 0.9);
  }
`;

const SignIn = styled.a`
  cursor: pointer;
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  padding: 10px 24px;
  transition: 300ms;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 40px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);

  a {
    text-decoration: none;
    color: #0a66c2;
  }

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    border-radius: 8px;
  }
`;

const Section = styled.div`
  display: flex;
  align-content: flex-start;
  min-height: 700px;
  padding-bottom: 130px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
    justify-content: center;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding: 0 10px 20px;
    width: 55%;
    font-size: 3rem;
    color: #2977c9;
    font-weight: 200;
    line-height: 60px;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 22px;
      width: 100%;
      line-height: 2;
    }
  }

  img {
    /* z-index: -1; */
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Google = styled.button`
  cursor: pointer;
  margin-top: 70px;
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 35%;
  border-radius: 28px;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.3);
  border: none;
  font-size: 1rem;
  vertical-align: middle;
  transition: 300ms;
  color: rgba(0, 0, 0, 0.6);

  &:hover {
    color: black;
    background-color: rgba(207, 207, 207, 0.125);
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.125);
  }

  @media (max-width: 768px) {
    margin-top: 30px;
    width: 80%;
  }
`;

export default Login;
