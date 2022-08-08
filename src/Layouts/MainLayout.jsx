import React from 'react';
import styled from "styled-components"
import {Outlet} from "react-router-dom";

const StyledMainLayout = styled.div`
  .header {
    width: 100%;
    height: 50px;
    background-color: ${props => props.theme.navbarBackgroundColor};
  }
  
  .content {
    width: 100%;
    height: calc(100vh - 70px);
    overflow: auto;
    background-color: ${props => props.theme.basicBackGroundColor};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }
  
  .footer {
    width: 100%;
    height: 20px;
    background-color: ${props => props.theme.navbarBackgroundColor};
  }
`

const MainLayout = (props) => {
  return (
    <StyledMainLayout>
      <header className={"header"}>
      </header>
      <main className={"content"}>
        {props.children}
          <Outlet/>
      </main>
      <footer className={"footer"}>
      </footer>
    </StyledMainLayout>
  );
}

export default MainLayout;