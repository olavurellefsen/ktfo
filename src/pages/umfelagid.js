import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nevndin2020 from "../components/image-nevndin2020"

const IndexPage = () => (
  <Layout>
    <SEO title="Heim" />
    <h1>Um felagið</h1>
    <p>
      KT-felagið er limafelag hjá føroyskum KT fyritøkum og húsast í
      Vinnuhúsinum. Skrivari og samskipari er Marius Thomassen.
    </p>
    <p>
      <i>
        OKKARA HJARTAMÁL ER AT FØROYSKA KT-VINNAN SKAL GERAST EITT SJÁLVSAGT
        FYRSTA VAL, TÁ KT-VERKÆTLANIR VERÐA ÍVERKSETTAR. HVØRKI MEIRA ELLA
        MINNI.
      </i>
    </p>
    <Nevndin2020 />
    <p>
      Í nevndini í KT-felagnum 2020-21 eru: Fróði Magnussen frá Formula, Ulla Joensen
      (forkvinna) frá Elektron, Gudny Langaard frá Nema, Snæbjørn Jacobsen frá
      Stýr, Jan Ziskasen frá Føroya Tele og Ólavur Ellefsen frá Nemlia og Tøkni.
    </p>
    <h2>Grundarlagið undir framtíðini</h2>
    <p>
      Stabbagrót er innskotið basalt, sum í fyrndini spríkti millum
      basaltfláirnar og stadnaði í vøkrum og hugtakandi formatiónum.
      Stabbagrótið er partur av upphavi Føroya og ein grundleggjandi partur av
      undirgrundini, við sínum fjalda ríkidømi.{" "}
    </p>
    <p>
      KT er ein sjálvsagdur partur av okkara nútíðar samfelag. KT verður ein enn
      meiri sjálvsagdur partur av framtíðar samfelagnum og ein grundleggjandi
      fortreyt fyri allari vinnuligari og samfelagsligari menning.
    </p>
    <p>
      Tí er umráðandi at vit tryggja okkara framtíð við eini sterkari føroyskari
      KT vinnu.
    </p>
    <h2>8 góðar orsøkir at velja føroysKT</h2>
    <p>
      Nógvar góðar orsøkir eru til at hava eina sterka føroyska KT vinnu. Bæði
      tá tað kemur til arbeiðspláss, nýhugsan, samfelagsliga og vinnuliga
      menning:
    </p>
    <ol>
      <li>Prísstøðið er lægri enn í teimum londunum vit samanbera okkum við</li>
      <li>Føroyingar eru kendir fyri at vera fleksiblari arbeiðskraft</li>
      <li>
        Føroyskir KT veitarar eru fysiskt og mentalt tætt upp á føroyska
        vinnulívið
      </li>
      <li>Vit skapa loysnir við støði í tí føroyska tørvinum</li>
      <li>Menna og tiltrekkja førleikar</li>
      <li>Skapa fortreytir fyri vøkstri og útflutningi</li>
      <li>Skapa fortreytir fyri útbúgving og gransking</li>
      <li>
        At keypa føroyskt KT minkar vágan í øllum liðum bæði tá tað kemur til
        pengar, tíð, góðsku og trygd
      </li>
    </ol>
  </Layout>
)

export default IndexPage
