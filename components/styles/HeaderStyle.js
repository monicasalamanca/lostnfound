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
    }
  }
`;

export default Header;