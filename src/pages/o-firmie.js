import React from "react";
import Layout from "../components/Layouts";
import Helmet from "react-helmet";
import styles from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
const StyledAside = styles.aside`
  width: 95%;
  margin: 20px auto;
  padding: 15px;
  @media only screen and (min-width: 1100px) {
    width: 90%;
  }

  .topDesc {
    font-weight: bold;
    line-height: 25px;
    margin-bottom: 15px;
    font-size: 17px;
  }
  .bottomDesc {
    font-size: 18px;
  
    letter-spacing: 1px;
    line-height: 28px;
  }
  @media only screen and (min-width: 410px) {
      .topDesc {
        font-size: 19px;
      }
  }
  @media only screen and (min-width: 550px) {
    .topDesc {
      font-size: 20px;
    }
  }
  @media only screen and (min-width: 900px) {
    .topDesc {
      font-size: 22px;
      line-height: 30px;
    }
    .bottomDesc {
      font-size: 20px;
      line-height: 38px;
    }
  }
  @media only screen and (min-width: 1200px) {
    .topDesc {
      text-align: center;
    }
  }

  @media only screen and (min-width:1600px) {


    .bottomDesc {
      line-height: 40px;
      font-size: 25px;
    }
    .topDesc {
      font-size: 28px;
      line-height: 35px;
      text-align: left;
    }
  }

  .aboutImages {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin: 20px;
    padding: 20px;
  }
  .aboutImages img {
    border-radius: 20px;
  }

  @media only screen and (min-width: 1000px) {
    .aboutImages {
      grid-template-columns: repeat(4, 1fr);
      padding: 30px;
      gap: 50px;
    }
  }

`;
const getImages = graphql`
  query aboutImages {
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

const About = () => {
  const data = useStaticQuery(getImages);

  const images = data.allImageSharp.nodes.filter((item) => {
    switch (item.fluid.originalName) {
      case "rzetelnafirmalogo.jpg":
        return item;
      case "premiumpartnerlogo.jpg":
        return item;
      case "sklep1.jpeg":
        return item;
      case "sklep2.jpeg":
        return item;
      default:
        return null;
    }
  });

  return (
    <Layout>
      <Helmet>
        <meta
          name="description"
          content="Kleje przemys??owe, uszczelniacze, silikony"
        />
        <meta
          name="keywords"
          content="Regpol Henkel Loctite Teroson Bonderite"
        />
        <link rel="canonical" href="https://www.regpol.info/"></link>
      </Helmet>
      <StyledAside>
        <div className="topDesc">
          <p>
            Biuro Handlowe Regpol Bydgoszcz Sp. z o.o. jako Autoryzowany
            Dystrybutor Firmy Loctite wsp????pracuje od 1992r. Od 1999 roku
            r??wnie?? jako Autoryzowany Dystrybutor marki Teroson.
          </p>
        </div>
        <hr />
        <br />
        <div className="bottomDesc">
          <p>
            Jeste??my ma???? rodzinn?? firm?? handlowo us??ugow?? oferuj??c?? najwy??szej
            jako??ci produkty chemii technicznej takie jak{" "}
            <strong>Loctite Teroson.</strong>
            Naszym zadaniem jest nie tylko sprzeda?? produktu. Rozwi??zujemy
            problemy naszych klient??w oraz sprzedajemy ca??e aplikacje. Klientami
            <strong> Biura Handlowego Regpol Bydgoszcz Sp. z o.o.</strong> s??
            nie tylko serwisy motoryzacyjne. Obs??ugujemy r??wnie?? ma??e warsztaty
            samochodowe i w szerokim zakresie zak??ady przemys??owe. Jeste??my
            za??og?? cztero osobow?? doskonale wyszkolon?? technicznie i pr????nie
            dzia??aj??c?? , co znajduje uznanie naszych klient??w . ??wiadczymy
            r??wnie?? us??ugi w zakresie doradztwa technicznego. Firma posiada
            certyfikat KRD , co pomaga w uzyskaniu wiarygodno??ci firmy. Za
            ca??okszta??t firmy odpowiada w??a??ciciel{" "}
            <strong>Aleksandra Chuda.</strong>
          </p>
        </div>

        <div className="aboutImages">
          {images.map((item) => (
            <GatsbyImage
              image={item.gatsbyImageData}
              alt="cos tam"
              key={item.fluid.originalName}
            ></GatsbyImage>
          ))}
        </div>
      </StyledAside>
    </Layout>
  );
};

export default About;
