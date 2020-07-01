import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import imageForoysKT from "../images/foroyskt.gif"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Heim" />
    <MainContainer>
      <LeftContainer>
        <img src={imageForoysKT} alt="FøroysKT" />
      </LeftContainer>
      <RightContainer>
        <br />
        <h1>Nú er at halda fast í talgildingini av Føroyum</h1>
        <p>
          <i>
            KT-felagið ynskir Talgildu Føroyum til lukku við nýligu
            verksetingini av talgilda Samleikanum og Vanganum. Tað verður
            spennandi at síggja, hvussu hesar loysnir verða móttiknar av
            føroyingum og hvat næsta talgilda stigið verður.
          </i>
        </p>
        <p>
          Nú Talgildu Føroyar hava verksett Heldina, Samleikan og Vangan, er
          avgerandi, at politiska skipanin heldur fast í ætlanini at talgilda
          Føroyar og leggur lunnar undir víðari menning av talgildum loysnum til
          føroyingar. Talgildu Føroyar hevur í sínum verkætlanum valt at brúka
          føroyskar veitarar, og tað fegnast vit um.
        </p>
        <p><LinkStyle href="https://www.industry.fo/ti%C3%B0indi?Action=1&NewsId=2679&PID=11933">Les meiri...</LinkStyle></p>
        <br/>
        <hr />
        <p>15. juni 2020: <LinkStyle href="https://www.industry.fo/ti%C3%B0indi?Action=1&NewsId=2669&PID=11933">Ulla heldur fram sum forkvinna</LinkStyle></p>
        <p>16. des 2019: <LinkStyle href="https://www.industry.fo/ti%C3%B0indi?Action=1&NewsId=2517&PID=11933">Og vinnarin er...</LinkStyle></p>
        <p>9. des 2019: <LinkStyle href="https://www.industry.fo/ti%C3%B0indi?Action=1&NewsId=2513&PID=11933">Fleiri enn 300 næmingar forrita hesa vikuna</LinkStyle></p>
        <p>25. nov 2019: <LinkStyle href="https://www.industry.fo/ti%C3%B0indi?Action=1&NewsId=2505&PID=11933">#Rita1tíma verður í næstu viku</LinkStyle></p>
        <p>2. sep 2019: <LinkStyle href="https://www.industry.fo/ti%C3%B0indi?Action=1&NewsId=2444&PID=11933">KT-felagið vil útbúgva fleiri KT-fólk</LinkStyle></p>
        <p><LinkStyle href="https://www.industry.fo/ti%C3%B0indi/kt-og-samskifti">Fleiri tíðindi...</LinkStyle></p>
      </RightContainer>
    </MainContainer>
  </Layout>
)

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftContainer = styled.div`
  flex: 1;
`

const RightContainer = styled.div`
  flex: 1;
  padding: 0 0 0 30px;
`

const LinkStyle = styled.a`
  text-decoration: none;
`

export default IndexPage
