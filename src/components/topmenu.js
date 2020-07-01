import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Content = () => (
  <UnorderedStyle>
    <ListItemStyle>
      <LinkStyle to="/">Heim</LinkStyle>
    </ListItemStyle>
    <ListItemStyle>
      <LinkStyle to="/umfelagid" activeClassName="active">
        Um felagið
      </LinkStyle>
    </ListItemStyle>
    <ListItemStyle>
      <LinkStyle to="/log" activeClassName="active">Lóg</LinkStyle>
    </ListItemStyle>
    <ListItemStyle>
      <LinkStyle to="/limir" activeClassName="active">Limir</LinkStyle>
    </ListItemStyle>
  </UnorderedStyle>
)

const UnorderedStyle = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  list-style: none;
  margin: 10px 0;
  padding: 22px 20px 0 0;
  font-size: 0.9rem;
  font-weight: 700;
  height: 80px;
  width: 100vw;
  @media (max-width: 768px) {
    display: none;
  }
`

const ListItemStyle = styled.li`
  display: block;
  align-content: center;
`

const LinkStyle = styled(Link)`
  padding: 13px 19.5px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  &:hover {
    color: rgba(255, 255, 255, 1.0);
    text-decoration: none;
  }
  &.active {
    color: rgba(255, 255, 255, 1.0);
    background-color: rgb(0, 214, 161);
    border-radius: 4px;
  }
`

export default Content
