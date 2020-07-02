import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nevndin2020 from "../components/image-nevndin2020"
import KTfolk from "../components/image-ktfolk"
import downloadFile from "../downloads/kt-folk-i-foroyum.pdf"

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
      Í nevndini í KT-felagnum 2020-21 eru: Fróði Magnussen frá Formula, Ulla
      Joensen (forkvinna) frá Elektron, Gudny Langaard frá Nema, Snæbjørn
      Jacobsen frá Stýr, Jan Ziskasen frá Føroya Tele og Ólavur Ellefsen frá
      Nemlia og Tøkni.
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
        At keypa føroyskt KT minkar váðan í øllum liðum bæði tá tað kemur til
        pengar, tíð, góðsku og trygd
      </li>
    </ol>
    <h2>Kanningin KT-fólk í Føroyum 2018</h2>
    <p>
      KT er ein sjálvsagdur partur av okkara nútíðar samfelag og verður ein enn
      meiri sjálvsagdur partur av framtíðar samfelagnum og ein grundleggjandi
      fortreyt fyri allari vinnuligari og samfelagsligari menning. Tí vil
      KT-felagið, sum er vinnugreinafelag hjá KT-vinnuni, vera við til at
      tryggja, at KT-vinnan er í støðugari menning, og harvið eisini tryggja
      framtíð Føroya. Í hesum sambandi hevur KT-felagið sett í verk kanning fyri
      at fáa hagtøl um KT-fólk í Føroyum.
    </p>
    <a href={downloadFile} >
      <KTfolk />
    </a>
    <p>
      <a href={downloadFile}>Kanningin kann takast niður her</a>.
    </p>
    <p>
      Kanningin vísur, at tað eru 627 ársverk innan KT í Føroyum. Har afturat
      eru 68 ársverk við fólkum, sum arbeiða í KT vinnuni, men sum tó ikki kunnu
      roknast sum beinleiðis KT-fólk. Úrslitið er hægri, enn KT-felagið hevði
      mett undan kanningini.
    </p>
    <p>
      Við úrslitinum kann vísast á, at tað finst ein góð breidd í førleikum hjá
      føroyskum KT starvsfólkum. KT starvsfólk í Føroyum arbeiða við at greina,
      menna, sniðgeva og selja KT, og tí megna tey at lofta flestu KT-uppgávum.
    </p>
    <p>
      Kanningin vísur, at 2,3% av samlaðu arbeiðsfjøldini í Føroyum starvast
      innan KT. Hetta er nakað lágt, um hugsað verður um londini rundanum okkum.
    </p>
    <p>
      Samanborið við miðal fyri OECD londini, sum er 3,7%, so vildi talið verið
      992 ársverk í Føroyum. Hetta sigur ikki, at okkum manglar ársverk, men er
      ein ábending um, at vit hava fá KT-fólk í vinnuni í mun til londini
      rundanum okkum.
    </p>
    <p>
      Tølini hjá OECD eru grundaði á arbeiðsvirkin í aldrinum frá 15 til 64 ár.
    </p>
    <p>
      Útfrá kanningini sæst eisini, at tað eru nógv smá umhvørvi, tað vil siga
      fá ársverk hjá teimum flestu og tískil fáir persónar, og so eru tað nøkur
      fá stór umhvørvi.
    </p>
  </Layout>
)

export default IndexPage
