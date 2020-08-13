import React from "react"
import styled from "styled-components"
import { AiOutlineTwitter } from "react-icons/ai"
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaSkype,
  FaBloggerB,
} from "react-icons/fa"

const Footer = () => {
  return (
    <StyledFooter>
      <div className="background"></div>
      <section>
        <article>
          <img
            src="./assets/Logo.png"
            alt="logo-image"
            className="footer-logo"
          />
          <div>
            <h3>Location</h3>
            <p>PO Box 16122 Collins Street West Victoria 80007 Australia</p>
          </div>
          <div>
            <h3>Opening Hours</h3>
            <p>MON - FRI 9 AM TO 10 PM</p>
          </div>
          <div>
            <h3>Location</h3>
            <p>MON - FRI 2 PM TO 06 PM</p>
          </div>
        </article>
        <article>
          <h2>Recent Posts</h2>
          <div className="recent-post-box">
            <img
              src="./assets/content-img/recent_post1.jpg"
              alt="recent-post-cover"
            />
            <div className="recent-post-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                quidem?
              </p>
              <p>
                <span>April 17, 2018</span>
              </p>
            </div>
          </div>
          <div className="recent-post-box">
            <img
              src="./assets/content-img/recent_post2.jpg"
              alt="recent-post-cover"
            />
            <div className="recent-post-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                quidem?
              </p>
              <p>
                <span>April 17, 2018</span>
              </p>
            </div>
          </div>
        </article>
        <article>
          <h2>Recent Posts</h2>
          <div className="recent-post-box">
            <AiOutlineTwitter />
            <div className="recent-post-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                quidem?
              </p>
              <p>
                <span>5 Hour Ago</span>
              </p>
            </div>
          </div>
          <div className="recent-post-box">
            <AiOutlineTwitter />
            <div className="recent-post-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                quidem?
              </p>
              <p>
                <span>5 Hour Ago</span>
              </p>
            </div>
          </div>
        </article>
      </section>
      <section className="footer-info">
        <p>Stay Connect With Us Night Club</p>
        <ul>
          <li>
            <a href="https://facebook.com/">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://google.com/">
              <FaGooglePlusG />
            </a>
          </li>
          <li>
            <a href="https://skype.com/">
              <FaSkype />
            </a>
          </li>
          <li>
            <a href="https://blogger.com/">
              <FaBloggerB />
            </a>
          </li>
        </ul>
        <p>
          CopyRight @ {new Date().getFullYear()} NightClub psd template all
          right
        </p>
      </section>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  color: ${props => props.theme.colors.white};
  font-weight: 300;
  height: 100vh;
  position: relative;
  padding-top: 20vh;

  .background {
    height: 100vh;
    width: 100%;
    max-width: 100%;
    background: url("./assets/bg/footerbg.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(0.1) saturate(1);
    position: absolute;
    top: 0;
    left: 0;
  }

  section {
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  article {
    display: flex;
    width: 320px;
    flex-direction: column;
    justify-content: space-between;

    h3 {
      color: ${props => props.theme.colors.accent};
      margin-bottom: 5px;
      font-weight: 300;
    }

    h2 {
      color: ${props => props.theme.colors.accent};
      font-weight: 300;
    }

    .footer-logo {
      max-width: 150px;
    }

    :nth-child(1) {
      > * {
        margin-bottom: 10px;
      }
    }

    .recent-post-box {
      display: flex;
      border-bottom: #80808061 1px solid;
      padding: 30px 0;
      height: 150px;
      justify-content: space-between;

      img {
        filter: saturate(0.7);
      }

      &:hover {
        cursor: pointer;

        img {
          filter: saturate(1.3);
        }
      }

      svg {
        font-size: 40px;
        fill: ${props => props.theme.colors.accent};
      }

      .recent-post-text {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 10px;
        font-size: 0.9rem;
        padding: 0 10px;

        span {
          color: ${props => props.theme.colors.accent};
        }
      }
    }
  }

  .footer-info {
    align-items: center;
    margin-top: 20vh;
    margin-bottom: 10vh;

    ul {
      display: flex;
      justify-content: space-between;
    }

    li a {
      border: 3px solid #fff;
      font-size: 20px;
      padding: 10px;
      display: flex;
      align-items: center;

      margin: 0 10px;

      &:hover {
        border: 3px solid ${props => props.theme.colors.accent};
      }
    }
  }
`

export default Footer
