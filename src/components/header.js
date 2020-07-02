import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import KTfelagidLogo from "./image-kt-logo"
import TopMenu from "./topmenu.js"
import BurgerMenu from "./burgermenu.js"

const Header = ({ siteTitle }) => (
  <HeaderStyle>
    <HeaderContainer id="outer-container">
      <TopBackground>
        <BurgerMenu />
      </TopBackground>
      <LeftContainer>
        <Link to="/">
          <KTfelagidLogo />
        </Link>
      </LeftContainer>
      <RightContainer>
        <TopMenu />
      </RightContainer>
    </HeaderContainer>
  </HeaderStyle>
)

const HeaderStyle = styled.header`
  margin: 0 0 1.45rem 0;
  background-color: rgb(33, 25, 80);
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 100vw;
  padding: 28px;
`

const LeftContainer = styled.div`
  @media (max-width: 768px) {
    margin-left: 65px;
  }
`

const RightContainer = styled.div``

const TopBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 90px;
  width: 100vw;
  z-index: 20;
  @media (min-width: 768px) {
    display: none;
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
