import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <Link to="/" className="header-title">
        TeamPick πββοΈ
      </Link>
      <div className="header-user-container">
        <NavLink to="/login" activeClassName="selected">
          λ‘κ·ΈμΈ
        </NavLink>
        <NavLink to="/register" activeClassName="selected">
          νμκ°μ
        </NavLink>
      </div>
      {/* <div className="header-user-container">
        <span>κ³μ μ λ³΄</span>
        <Link to="#" onClick={logoutHandler}>
          λ‘κ·Έμμ
        </Link>
      </div> */}
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8rem;
  margin-bottom: 3rem;
  background-color: #5eaca0;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 35%);

  .header-title {
    color: white;
    font-size: 3rem;
    font-weight: bold;
    margin-left: 6rem;
  }

  .header-user-container {
    font-size: 2rem;
    font-weight: bold;
    margin-right: 6rem;

    a {
      color: white;
      margin-left: 3rem;
      transition: color 0.3s;

      :hover {
        color: #384d58;
      }
    }

    .selected {
      color: #384d58;
    }
  }
`;

export default Header;
