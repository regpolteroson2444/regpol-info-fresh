import React from "react";
import Layout from "../components/Layouts";
import Helmet from "react-helmet";
import scrollTo from "gatsby-plugin-smoothscroll";

import styles from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import BottomLogo from "../images/regpolLogo/TopLogo.png";

const StyledSection = styles.section`
height: 92vh;
max-width: inherit;
position: relative;
margin-top: -5px;
.BckImage{
  height: 100%;
  position: absolute;
  top: 5px;
  z-index: -10;
  filter: brightness(65%);
}
.C2A {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute; 
  top: 30%;
}

.littleImage {
  position: absolute;
  top: 65%;
  left: 5%;
  padding: 15px;
  z-index: 20;
  width: 250px;
}
@media only screen and (max-height: 550px) {
  .littleImage{
    top: 70%;
  }
}


.littleImage p {
  color: white;
  padding: 5px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
}


.C2A p {
  font-size: 40px;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  color: white;
  position: relative;
  margin: 30px;
  padding: 25px;
}
.C2A p::before {
  content: '';
  width: 110%;
height: 3px;
background-color: white;
position: absolute;
top: 0;
left: -5%;
}
.C2A p::after {
  content: '';
  width: 80%;
height: 3px;
background-color: white;
position: absolute;
bottom: 0;
left: 10%;
}

.C2A button {
  font-size: 25px;
  padding:13px;
  border-radius: 10px;
  background: transparent;
  border: 2px solid white;
  color: white;
  cursor: pointer;
  outline: none;
  transition: all .2s ease-in;
}
.C2A button:hover{
  transform: scale(1.1);
}

@media only screen and (max-width: 1450px) {
  .littleImage {
    width: 220px;
  }
}
@media only screen and (max-width: 1350px) {
  .C2A p {
    font-size: 35px;
  }
  .C2A button {
    font-size: 20px;
  }
}
@media only screen and (max-width: 1150px) {
  .C2A p {
    font-size: 30px;
    margin: 25px;
  }
  .C2A button {
    font-size: 15px;
  }
  .littleImage {
    width: 200px;
    top: 70%;
  }
}
@media only screen and (max-width: 850px){
  .C2A p {
    font-size: 25px;
    padding: 15px;
  }
  .C2A button {
    font-size: 14px;
  }
  .littleImage {
    width:160px;
    top: 75%;
  }
  .littleImage p {
    font-size: 12px;
  }
}
@media only screen and (max-width: 600px) {
  .C2A p {
    font-size: 20px;
    margin: 15px;
  }
  .C2A button {
    font-size: 12px;
  }
}
@media only screen and (max-width: 450px) {
  .C2A p {
    font-size: 15px;
    padding: 10px;
    line-height: 20px;
    letter-spacing: 1px;
  }
  .C2A p::before{
    width: 105%;
    left: -3%;
  }
  .C2A p::after {
    width: 70%;
    left: 15%;
  }
  .C2A  button {
    font-size: 12px;
    padding: 10px;
    letter-spacing: 1px;
  }
  @media only screen and (max-width: 320px) {
    .C2A p {
      font-size: 12px;
    }
    .C2A p::before {
      width: 100%;
      left: 0;
    }
    .littleImage {
      width: 130px;
    }
    .littleImage p {
      font-size: 10px;
    }
  }

 
}
`;
const StyledArticle = styles.article`
width: 80%;
margin: 20px auto;
.articleLogo {
  font-size: 25px;
  width: 80%;
  margin: 0 auto 0 0px;
}

.articleLogo p {
  text-align: left;
  margin-bottom: 10px;
}


.articleLogo img {
  background: var(--mainRed);
  width: 70%;
  height: 70%;
  color: black;
}

@media only screen and (min-width: 450px) {
  .articleLogo img{
    height: 50%;
    width: 50%;
  }
}

@media only screen and (min-width: 750px) {
  .articleLogo img {
    height: 35%;
    width: 35%;
  }
}
@media only screen and (min-width: 1100px) {
  .articleLogo img {
    height: 25%;
    width: 25%;
  }
}

.articleDescription p {
  line-height: 25px;
  letter-spacing: 1px;
  margin-top: 25px;
}
@media only screen and (min-width: 1050px) {
  .articleLogo {
    font-size: 30px;
  }
}
@media only screen and (min-width: 1250px) {
  .articleDescription p {
    line-height: 35px;
  }

}
@media only screen and (min-width: 1550px) {
  .articleDescription p {
    line-height: 42px;
    font-size: 20px;
  }
  .articleLogo img {
    width: 20%;
    height: 20%;
  }
}
`;
const data = graphql`
  query MyQuery {
    allImageSharp {
      nodes {
        gatsbyImageData
        fluid {
          originalName
        }
      }
    }
  }
`;

export default function Home() {
  const imagesData = useStaticQuery(data);

  const loctiteLogo = imagesData.allImageSharp.nodes.filter(
    (item) => item.fluid.originalName === "loctiteterosonlogo.jpg"
  );

  const backgroundImage = imagesData.allImageSharp.nodes.filter(
    (item) => item.fluid.originalName === "websiteBackground.png"
  );

  return (
    <Layout>
      <Helmet>
        <title>
          Kleje przemysłowe, uszczelniacze, silikony | Regpol Bydgoszcz
        </title>
        <meta
          name="description"
          content="Kleje przemysłowe, uszczelniacze, silikony"
        />
        <meta
          name="keywords"
          content="Regpol Henkel Loctite Teroson Bonderite"
        />
        <link rel="canonical" href="https://www.regpol.info/"></link>
        <meta
          name="google-site-verification"
          content="jx9uaxSdtiJpL1U6Cfiriax_dbwuhtEaYITcNooU_Z4"
        />

        <script type="application/ld+json">{`
        {
          "@context": "http://schema.org",
          "@type": "LocalBusiness",
          "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bydgoszcz",
          "addressRegion": "Kujawsko-Pomorskie",
          "streetAddress": " Lecha Kaczyńskiego"
          },
          "name": "Regpol",
          "telephone": "52 345 38 75"
        }
    `}</script>
      </Helmet>
      <>
        <StyledSection>
          <div className="C2A">
            <p>
              Technologie które sprostają <br /> największym wyzwaniom
            </p>
            <button onClick={() => scrollTo("#HomePageArticle")}>
              Zobacz Więcej
            </button>
          </div>
          <div className="littleImage">
            <p>Autoryzowany Dystrybutor</p>
            <GatsbyImage
            image={loctiteLogo[0].gatsbyImageData}
            alt="logo loctite teroson"
          />
        </div>
        <GatsbyImage
          className="BckImage"
          image={backgroundImage[0].gatsbyImageData}
          alt="background image"
        />
        </StyledSection>
        <StyledArticle id="HomePageArticle">
          <div className="articleLogo">
            <p>BIURO HANDLOWE</p>
            <img alt="regpol logo" src={BottomLogo}></img>
          </div>
          <div class="articleDescription" style={{ marginTop: "30px" }}>
            <h1 style={{ marginTop: "30px", fontSize: "30px" }}>
            Wysokiej jakości kleje i smary przemysłowe: Teroson, Loctite, Bonderite, Technomelt, Molykote. 
            </h1>
            <p style={{ textAlign: "justify" }}>
            Witamy wszystkich bardzo serdecznie. Miło, że odwiedziliście Państwo naszą stronę. Firma Biuro Handlowe REGPOL Bydgoszcz Sp. z o.o. istnieje już od 1992 roku. Jesteśmy autoryzowanym przedstawicielem i Premium Partnerem firmy HENKEL. W naszej ofercie znajdziecie Państwo wszystko to, czego potrzebujecie. Proponujemy m.in. najwyższej jakości rozwiązania dla przemysłu i motoryzacji; kleje przemysłowe Loctite i Teroson, zabezpieczenia gwintów, kleje błyskawiczne, kleje do mocowania współosiowego, masy klejąco uszczelniające, kompozyty polimerowe, środki smarne, masy wygłuszające, klej do aluminium, aktywatory, a także wiele innych produktów. Są one bardzo często stosowane w motoryzacji i przemyśle. Jeżeli chodzi o oferowane przez nas kleje, to stanowią one gwarancję trwałego połączenia. Posiadamy całą gamę produktów Loctite i Teroson, cechujące się odmiennym zastosowaniem i działaniem, które posiadają wszelkie dopuszczenia i certyfikaty uznawane na całym świecie. Dzięki naszym produktom niemożliwe staje się możliwe, świetnie radzimy sobie z trudno sklejanymi materiałami takimi jak polipropylen, polietylen, teflon i guma silikonowa. 
            </p>
            <h2 style={{marginTop: "30px"}}>Kleje Loctite oraz Teroson</h2>
            <p style={{ textAlign: "justify" }}>W ofercie naszego sklepu znajdują się m.in. takie produkty jak Loctite 243 oraz Teroson MS 939. Kleje przemysłowe, a także motoryzacyjne stanowią główną bazę środków chemicznych podczas napraw, renowacji i konserwacji. Kleje i smary nie bez powodu cieszą się tak dużą popularnością, są niezwykle skuteczne i wydajne. Gwarantujemy, że zarówno one, jak i wybrane z asortymentu kleje przemysłowe, kleje błyskawiczne, cyjanoakrylowe Loctite będą spełniać najwyższe oczekiwania. Funkcjonujemy po to, aby zapewnić Państwu komfortowy i bezpieczny zakup jakościowych produktów – a klej do zabezpieczeń połączeń gwintowych  Loctite 243 oraz wysokiej lepkości Teroson MS 939 bez wątpienia do nich należą!</p>
            <p style={{ textAlign: "justify" }}><strong>Nasze hasło przewodnie brzmi „Technologie które sprostają największym oczekiwaniom”</strong></p>
            <p style={{ textAlign: "justify" }}>W naszym bogatym asortymencie posiadamy nie tylko produkty Loctite czy Teroson. Kleje te oczywiście cieszą się niesłabnącym zainteresowaniem naszych klientów, co napawa nas ogromną radością, ale oprócz nich dysponujemy również innym, wysokiej jakości towarem. Nasze doświadczenie, zdobyte po tylu latach obcowania z marką HENKEL, pozwala służyć Państwu wszelką pomocą w zakresie doboru odpowiedniego produktu oraz rozwiązania najbardziej nietypowych problemów, z którymi można się spotkać, np. w sferze zawodowej. Zachęcamy do skorzystania z naszej oferty.</p>
           
          </div>
        </StyledArticle>
      </>
    </Layout>
  );
}
