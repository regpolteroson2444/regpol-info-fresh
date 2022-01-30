import React from "react";
import { Link } from "gatsby";
import "../styles/header.css";
import PhoneIcon from "../images/socialIcons/Icon awesome-phone-square-alt.svg";
import MailIcon from "../images/socialIcons/Icon ionic-ios-mail.svg";
import LocationIcon from "../images/socialIcons/Icon material-location-on.svg";
import { useState } from "react";
import styles from "styled-components";
import TopLogo from "../images/regpolLogo/TopLogo.png";
const NavigationStyle = styles.ul`
width: 45%;
display: flex;
justify-content: space-around;
list-style: none;
margin-right: -10px;
z-index: 1000;

a {
text-decoration: none;
color: var(--mainWhite);
font-weight: bold;
letter-spacing: 1px;
font-size: 17px;
padding-bottom: 4px;
position: relative;
}
@media only screen and (max-width: 1300px) {
margin-right: 10px;
}

a::after {
  content: '';
  width: 0%;
  height: 3px;
  background-color: white;
  position: absolute;
  bottom: -3px;
  left: 0;
  border-radius: 10px;
  transition: all .3s ease-in-out;
}
 a:hover::after {
  width: 100%;
}
.activeNavLink {
  border-bottom: 3px solid white;
}

@media only screen and (max-width: 1100px) {
  visibility: hidden;
display: flex;
margin-right: 0px;
position: absolute;
right: 0;
top: 8vh;
background-color: var(--mainBlue);
height: 92vh;
flex-direction: column;
text-align: center;
justify-content: space-around;

 a{ font-size: 25px;}
}

@media only screen and (max-width: 800px) {
width: 100vw;
}
`;
const TestNav = styles.ul`
width: 45%;
display: flex;
justify-content: space-around;
list-style: none;
margin-right: -10px;
z-index: 1000;
opacity: .9;
.activeMobileLink {
  border-bottom: 2px solid white;
}
a {
text-decoration: none;
color: var(--mainWhite);
font-weight: bold;
letter-spacing: 1px;
font-size: 17px;
}
@media only screen and (max-width: 1300px) {
margin-right: 10px;
}

@media only screen and (max-width: 1100px) {
  visibility: visible;
display: flex;
margin-right: 0px;
position: absolute;
right: 0;
top: 8vh;
background-color: var(--mainBlue);
height: 92vh;
flex-direction: column;
text-align: center;
justify-content: space-around;

 a{ font-size: 25px;}
}

@media only screen and (max-width: 800px) {
width: 100vw;
}`;
const BurgerStyle = styles.button`

display: none;


@media only screen and (max-width: 1100px) {
display: block;
margin-right: 20px;
cursor: pointer;
background: transparent;
border: none;
outline: none;


span {
  display: block;
  margin: 9px;
  height: 3px;
  width: 30px;
  background-color: white;
}

}
`;

const Navbar = () => {
  const [burger, setBurger] = useState(false);

  return (
    <header>
      <div className="topMenu">
        <div>
          <a href="tel:+523 453 875">
            <img src={PhoneIcon} alt="Phone Icon" />
            (+48) 52 345 38 75
          </a>
        </div>
        <div>
          <a href="mailto:biuro.regpol@gmail.com">
            <img src={MailIcon} alt="Mail Icon" />
            biuro.regpol@gmail.com
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/place/Biuro+Handlowe+REGPOL+Bydgoszcz+Sp.+z+o.o./@53.1087196,18.0504164,17z/data=!3m1!4b1!4m5!3m4!1s0x4703146536e36153:0x71a39fb99e612484!8m2!3d53.1087196!4d18.0526051"
          >
            <img src={LocationIcon} alt="Location Icon" />
            Al. Prezydenta Lecha Kaczyńskiego 38
          </a>
        </div>
      </div>

      <div className="bottomMenu">
        <div className="logo">
          <img alt="regpol logo" src={TopLogo}></img>
        </div>
        <div className="openingHours">
          Godziny Otwarcia
          <br />
          Poniedziałek-Piątek: 8:00 - 16:00
        </div>
        {burger ? (
          <TestNav>
            {" "}
            <li>
              <Link activeClassName="activeMobileLink" to="/">
                Strona Główna
              </Link>
            </li>
            <li>
              <Link activeClassName="activeMobileLink" to="/o-firmie">
                O Firmie
              </Link>
            </li>
            <li>
              <Link activeClassName="activeMobileLink" to="/produkty">
                Nasze Produkty
              </Link>
            </li>
            <li>
              <Link activeClassName="activeMobileLink" to="/kontakt">
                Kontakt
              </Link>
            </li>
          </TestNav>
        ) : (
          <NavigationStyle>
            <li>
              <Link activeClassName="activeNavLink" to="/">
                Strona Główna
              </Link>
            </li>
            <li>
              <Link activeClassName="activeNavLink" to="/o-firmie">
                O Firmie
              </Link>
            </li>
            <li>
              <Link activeClassName="activeNavLink" to="/produkty">
                Nasze Produkty
              </Link>
            </li>
            <li>
              <Link activeClassName="activeNavLink" to="/kontakt">
                Kontakt
              </Link>
            </li>
          </NavigationStyle>
        )}

        {
          <BurgerStyle onClick={() => setBurger(!burger)}>
            <span></span>
            <span></span>
            <span></span>
          </BurgerStyle>
        }
      </div>
    </header>
  );
};

export default Navbar;
