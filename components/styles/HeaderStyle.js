import styled from 'styled-components';

const Header = styled.div`
  background-color: #3ebcd8; /*#00B2BB;*/

  div.header-wrapper {
    border: 1px solid black;
    width: 1200px;
    padding: 10px;
    margin: 0 auto;

    .nav-bar {
      display: flex;
      justify-content: space-between;
      font-family: 'Big Shoulders Text', cursive;

      a.logo:first-child {
        line-height: 22px;
        font-weight: 600;
        font-size: 41px;
        text-decoration: none;
        color: #60605B;

        span {
          display:inline-block;
          background-color: #FBFAF2;;
          width: 30px;
          height: 30px;
          text-align:center;
          border-radius: 30px;
          color: #60605B;
        }
      }

      div { 
        height: 100%;
        display: block;
        vertical-align: bottom;
        line-height: 57px;

        a {
        font-family: 'Big Shoulders Text',cursive;
        font-weight: 600;
        text-decoration: none;
        font-size: 30px;
        color: #fff;
        margin-left: 25px;
        line-height: unset;
        vertical-align: middle;
        cursor: pointer;
        }
      }
    }

    .sub-bar {
      display: none;
    }
  }
`;

export default Header;