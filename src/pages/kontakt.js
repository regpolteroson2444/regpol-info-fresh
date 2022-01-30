import React from "react";
import Layout from "../components/Layouts";
import Helmet from "react-helmet";
import styles from "styled-components";
import Myform from "../components/ContactForm";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const ContactPageStyling = styles.div`

  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
 
@media only screen and (min-width: 1300px) {
  height: 75vh
}
@media only screen and (max-height: 665px) {
  height: 85vh
}
@media only screen and (max-height: 610px) {
  height: 89vh
}
@media only screen and (max-height: 570px) {
  height: 95vh;
}
@media only screen and (max-height: 540px) {
  height: 100vh;
}
@media only screen and (max-height: 510px) {
  height: 115vh;
}
@media only screen and (max-height: 475px) {
  height: 125vh;
}

`;
const StyledContactName = styles.p`
  text-align: center;
  color: white;
  font-size: 25px;
  letter-spacing: 2px;
  font-weight: bold;
  padding-top: 30px;
  margin-bottom: 20px;

  @media only screen and (min-width: 1100px) {
    font-size: 30px;
  }
`;

const Contact = (props) => {
  const bcgImage = useStaticQuery(fetchBcgImage);

  const image = bcgImage.allImageSharp.nodes.filter(
    (item) => item.fluid.originalName === "websiteBackground.png"
  );

  return (
    <Layout>
      <Helmet>
        <meta
          name="description"
          content="Kleje przemysłowe, uszczelniacze, silikony"
        />
        <meta
          name="keywords"
          content="Regpol Henkel Loctite Teroson Bonderite"
        />
        <link rel="canonical" href="https://www.regpol.info/"></link>
      </Helmet>
      <div
        className="shadowBox"
        style={{
          height: "100%",
          width: "100%",
          padding: "20px 0px",
          backgroundColor: "#153243",
          opacity: ".8",
        }}
      >
        <GatsbyImage
          alt="bcg-image"
          image={image[0].gatsbyImageData}
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            opacity: ".5",
            zIndex: "-1",
            height: "100%",
          }}
        ></GatsbyImage>
        <StyledContactName>
          SKONTAKTUJ<br></br>SIĘ Z NAMI
        </StyledContactName>
        <ContactPageStyling>
          <Myform />
        </ContactPageStyling>
      </div>
    </Layout>
  );
};

export default Contact;

const fetchBcgImage = graphql`
  query bcgImage {
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
