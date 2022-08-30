import React from "react";
import styled from "styled-components";

const Main = (props) => {
  return (
    <Container>
      <ShareBox>
        <div>
          <img src="/images/user.svg" alt="user" />
          <button>Share a post</button>
        </div>
        <div>
          <button>
            <img src="/images/image-icon.svg" alt="linkedin-img-icon" />
            <span>Photo</span>
          </button>
          <button>
            <img src="/images/video-icon.svg" alt="video-icon" />
            <span>Video</span>
          </button>
          <button>
            <img src="/images/event-icon.svg" alt="event-icon" />
            <span>Event</span>
          </button>
          <button>
            <img src="/images/article-icon.svg" alt="article-icon" />
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>
      <div>
        <Article>
          <SharedActor>
            <a href="/home">
              <img src="/images/user.svg" alt="user" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img src="/images/dots-icon.svg" alt="dots" />
            </button>
          </SharedActor>
          <Description>Description</Description>
          <SharedImg>
            <a href="/image">
              <img src="/images/post-image.jpg" alt="post" />
            </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                <img src="images/Linkedin-Like.png" alt="Like" />
                <img src="images/Linkedin-Celebrate.png" alt="Celebrate" />
                <img src="images/Linkedin-Love.png" alt="Love" />
                <img src="images/Linkedin-Insightful.png" alt="Insightful" />
                <img src="images/Linkedin-Support.png" alt="Support" />
                <img src="images/Linkedin-Curious.png" alt="Curious" />
                <span>100</span>
              </button>
            </li>
            <li>
              <a href="/">2 comments</a>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <img src="images/like.svg" alt="like" />
              <span>like</span>
            </button>
            <button>
              <img src="images/comment.svg" alt="comment" />
              <span>comments</span>
            </button>
            <button>
              <img src="images/share.svg" alt="share" />
              <span>share</span>
            </button>
            <button>
              <img src="images/send.svg" alt="send" />
              <span>send</span>
            </button>
          </SocialActions>
        </Article>
      </div>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;

  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }

    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
      }
    }

    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      padding: 8px 0;

      button {
        cursor: pointer;
      }
      img {
        width: 36px;
        margin-right: 4px;
      }
      span {
        color: #70b5f9;
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;

  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;

    img {
      width: 48px;
      height: 48px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;

      span {
        text-align: left;

        &:first-child {
          font-size: 14px;
          font-weight: 900;
          color: black;
        }

        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  font-size: 16px;
  text-align: left;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;

  li {
    margin-right: 5px;
    font-size: 12px;

    button {
      display: flex;
    }
  }

  img {
    width: 24px;
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;

  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;
  }

  span {
    margin-left: 8px;
  }

  img {
    color: #0a66c2;
  }
`;

export default Main;
