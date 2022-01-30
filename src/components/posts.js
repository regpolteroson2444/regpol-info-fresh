import React from "react";
import styles from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

import PdfIcon from "../images/pdfIcon/Icon metro-file-pdf.svg";
import CameraIcon from "../images/camera-icon.svg";

const StyledProductList = styles.section`
.product {
  text-align: center;
  width: 100%;
  margin: 20px auto 10px 0px;
}
@media only screen and (min-width:1200px) {
  .product {
    padding: 0px 10px;
  }
}
.productLook {
  width: 190px;
  margin: 0 auto;

}
.productImage {
  height: 293px;
  width: 100%;
  border: 1px solid #e92828;
}

.productPicture {
  width: 100%;
  height: 100%;
}
.productTitle {
  text-align: center;
  background-color: #e92828;
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 17px;
  padding: 8px;
}
.productInfo {
  margin-top: 20px;
}

.productDescription p {
  letter-spacing: 1px;
  line-height: 20px;
  text-align: left;
}




.productCapacity {
  font-weight: bold;
  margin: 10px 0;
}
.productCard {
  cursor: pointer;
  display:flex;
  align-items:center;
  width: max-content;
  margin: 0 auto;
  gap: 20px;
}
.productCard a {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: black;
}
.productCard img {
  margin-right: 8px;
  width: 25px;
  height: 40px;
}
.productSpace {
  background-color: #153243;
  border: none;
  padding: 1px;
  
  margin: 20px auto;
}


@media only screen and (min-width: 720px) {
  .product {
    display: flex;
  }
  .productInfo {
    width: 65%;
    margin: 15px;
  }
  .productDescription p {
    letter-spacing: 1px;
    line-height: 20px;
    font-size: 15px;
  }
}
@media only screen and (min-width: 720px) {
  .productSpace {
    display: none;
  }
}
@media only screen and (min-width:1100px) {
  width: 95%;
}
@media only screen and (min-width:1200px) {
  .productDescription p {
    line-height: 22px;
    font-size: 18px;
  }
}
@media only screen and (min-width: 1300px) {
  width: 100%;
  .productInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .productDescription  {
    flex: 2;
  }
 @media only screen and (min-width: 1550px) {
   .productInfo {
     width: 70%
   }
   .productDescription p {
     line-height: 25px;
     font-size: 19px;
   }
 }
}
@media only screen and (min-width: 1630px) {
  .productInfo {
    width: 78%;
  }
  .productDescription p {
    line-height: 30px;
  }
  .product {
   
    margin-left: 30px;
  }
}
`;

const posts = ({ posts }) => {
  return (
    <StyledProductList>
      {posts.map((post) => {
        const { id, title, capacity, info, tds, recording, image } = post;

        return (
          <div key={id} className="product">
            <div className="productLook">
              <div className="productTitle">{title}</div>
              <div className="productImage">
                <GatsbyImage
                  className="productPicture"
                  image={image.gatsbyImageData}
                  alt="zdjecie produktu"
                ></GatsbyImage>
              </div>
            </div>
            <div className="productInfo">
              <div className="productDescription">
                {info.info === "..." || info.info === ".." ? (
                  ""
                ) : (
                  <p>{info.info}</p>
                )}
              </div>
              <div className="productCapacity">
                {capacity === null ? "" : <p>Pojemności: {capacity}</p>}
              </div>
              <div className="productCard">
                {tds === "brak karty" ? (
                  ""
                ) : (
                  <a target="_blank" rel="noreferrer" href={tds}>
                    <img src={PdfIcon} alt="Pdf Icon"></img>
                    <p>Karta Techniczna</p>
                  </a>
                )}
                {recording ? (
                  <a target="_blank" rel="noreferrer" href={recording}>
                    <img src={CameraIcon} alt="Camera Icon"></img>
                    <p>Zobacz filmik</p>
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="productSpace"></div>
          </div>
        );
      })}
    </StyledProductList>
  );
};

export default posts;
