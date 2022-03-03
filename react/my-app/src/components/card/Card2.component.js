import React from "react";
import styled, { css } from "styled-components";

/**
 *
 * const StyledCard = styled.tag(h1, h2, div, span, strong, a,p, section, article,...)``
 * CSS-in-JS:
 */

const StyledCard = styled.div`
  position: relative;
  .card-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }
  .card-content {
    width: calc(100% - 100px);
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    background-color: #fff;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
    bottom: 0;
    .card-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 3px;
      .card-user {
        display: flex;
        align-items: center;
        column-gap: 12px;
        .user-avatar {
          width: 30px;
          height: 30px;
          border-radius: 100rem;
          object-fit: cover;
          flex-shrink: 0;
        }
        .user-name {
          font-weight: 300px;
          font-size: 16px;
          color: #333333;
        }
      }
      .card-meta {
        display: flex;
        align-items: center;
        column-gap: 12px;
      }
    }
    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .card-title {
      font-size: 18px;
      font-weight: 500;
      color: ${(props) => props.theme.colors.blue};
    }
    .card-amount {
      font-size: ${(props) => props.fontSize || "18px"};
      font-weight: bold;
      ${(props) =>
        props.secondary &&
        css`
          background: linear-gradient(86.88deg, #20e3b2 1.38%, #2cccff 64.35%);
        `};
      ${(props) =>
        !props.secondary &&
        css`
          background: linear-gradient(
            86.88deg,
            #7d6aff 1.38%,
            #ffb86c 64.35%,
            #fc2872 119.91%
          );
        `};
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
    }
  }
`;

function Card2(props) {
  return (
    <StyledCard secondary={props.secondary}>
      <div className="card-image">
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1200x900&vertical=top"
          alt=""
        />
      </div>
      <div className="card-content">
        <div className="card-top">
          <div className="card-user">
            <img
              className="user-avatar"
              src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1200x900&vertical=top"
              alt=""
            />
            <span className="user-name">@zndrson</span>
          </div>
          <div className="card-meta">
            <img src="/icon-heart.svg" alt="heart" />
            256
          </div>
        </div>

        <div className="card-footer">
          <h3 className="card-title">Cosmic Perspective</h3>
          <spa class="card-amount">12,000 PSL</spa>
        </div>
      </div>
    </StyledCard>
  );
}
export default Card2;
