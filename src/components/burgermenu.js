import React from "react"
import { elastic as Menu } from "react-burger-menu"

const BurgerMenu = () => (
  <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
    <a id="heim" className="menu-item" href="/">
      Heim
    </a>
    <a id="umfelagid" className="menu-item" href="/umfelagid">
      Um felagið
    </a>
    <a id="log" className="menu-item" href="/log">
      Lóg{" "}
    </a>
    <a id="limir" className="menu-item" href="/limir">
      Limir
    </a>
  </Menu>
)

export default BurgerMenu
