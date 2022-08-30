import React from "react";
import styled from "styled-components";

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="logo" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <img
            src="/images/search-icon.svg"
            className="search-icon"
            alt="search-icon"
          />
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a href="/home">
                <img src="/images/nav-home.svg" alt="home" />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a href="/jobs">
                <img src="/images/nav-jobs.svg" alt="Jobs" />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a href="/messages">
                <img src="/images/nav-messaging.svg" alt="Messaging" />
                <span>Messaging</span>
              </a>
            </NavList>
            <NavList>
              <a href="/network">
                <img src="/images/nav-network.svg" alt="Network" />
                <span>Network</span>
              </a>
            </NavList>
            <NavList>
              <a href="/notifications">
                <img src="/images/nav-notifications.svg" alt="Notifications" />
                <span>Notifications</span>
              </a>
            </NavList>
            <User>
              <a href="/user">
                <img src="/images/user.svg" alt="user" />
                <span>
                  Me
                  <img src="/images/down-icon.svg" alt="down" />
                </span>
              </a>
              <SignOut>
                <a href="/">Sign out</a>
              </SignOut>
            </User>
            <Work>
              <a href="/work">
                <img src="/images/nav-work.svg" alt="work" />
                <span>
                  Work
                  <img src="/images/down-icon.svg" alt="down" />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
  padding: 4px 0 0 0;
  @media (max-width: 768px) {
    padding: 6px 0;
  }
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;

const Search = styled.div`
  display: flex;
  opacity: 1;
  flex-grow: 1;
  position: relative;
  flex-direction: row;
  transition: 500ms;

  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 4px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 2;
      font-size: 16px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }

  .search-icon {
    width: 20px;
    margin-left: 12px;
    cursor: pointer;
  }
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  margin: 0 52px 0 0;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;

  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid black;
      bottom: 0;
      left: 0;
      position: absolute;
      transition: 250ms ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }

  @media (max-width: 768px) {
    margin: 10px 6px 0 0;
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 26px;
  }

  a {
    display: flex;
    align-items: center;
    background: transparent;
    flex-direction: column;
    font-size: 12px;
    justify-content: center;
    line-height: 2;
    min-height: 42px;
    min-width: 80px;
    position: relative;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: black;
        transition: 250ms;
      }
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: rgba(240, 240, 240, 0.6);
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition: 300ms;
  text-align: center;
  display: none;
  color: #0a66c2;

  @media (max-width: 768px) {
    top: -10px;
  }
`;

const User = styled(NavList)`
  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
    margin-left: 8px;

    img {
      width: 14px;
      padding-left: 4px;
    }
  }

  &:hover {
    ${SignOut} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const Work = styled(User)`
  border-left: 2px solid rgba(0, 0, 0, 0.08);
`;

export default Header;
