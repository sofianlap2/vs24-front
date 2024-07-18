import React, { useEffect, useState } from "react";
import { FaBars, FaAngleDown } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  Nav,
  NavBtn,
  NavBtnLink,
  NavDropDown,
 
} from "./NavbarElement"; // Make sure to import your styled components
import { animateScroll as scroll } from "react-scroll";
import LanguageSelector from "../../admin/outils/LanguageSelector";
import { Trans } from "react-i18next";
import { color } from "../../../assets/vendor/chart.js/helpers";
import { Button } from "bootstrap";
import img1 from '../../../images/VS.png';
 
const lngs = {
  fr: { nativeName: "" },
  en: { nativeName: "" },
};
 
const Navbar = ({ toggle, setShowDemandeClients,setShowDemandePubs }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [logoSrc, setLogoSrc] = useState(img1);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown
 
  const changeNav = () => {
   
    if (window.scrollY >= 80) {
      setScrollNav(true);
      setLogoSrc("/src/images/LN.png");
    } else {
      setScrollNav(false);
      setLogoSrc("/src/images/LN.png");
    }
  };
 
 /* useEffect( () => {
   window.addEventListener("scroll", changeNav);
    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);*/
 
  const toggleHome = () => {
    scroll.scrollToTop();
  };
 
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
 
  const handleShowDemandeClients = () => {
    setShowDemandeClients(true);
    setDropdownOpen(false); // Close dropdown
  };
 
  const handleShowDemandePubs = () => {
    setShowDemandePubs(true);
    setDropdownOpen(false); // Close dropdown
  };
  return (
    <>
        <Trans>
          <Nav scrollNav={scrollNav}>
            <NavbarContainer>
              <NavLogo  to="/" onClick={toggleHome}>
              <a >
                <img
                  src={logoSrc}
                  height={logoSrc.includes("RemoteHub") ? "80" : "60"}

                  alt="RemoteHub Logo"
                  loading="lazy"
                 
                  style={{
                    marginBottom: logoSrc.includes("RemoteHub")
                      ? "10px"
                      : "10px",
                  }}
                />
              </a>
              </NavLogo>
              <MobileIcon onClick={toggle}>
                <FaBars />
              </MobileIcon>
              <NavMenu>
              <NavItem>
                  <NavLinks
                    to="about"
                   
                  >
                    Accueil
                  </NavLinks>
                </NavItem>
 
                <NavItem>
                  <NavLinks
                    to="valeurs"
                   
                   
                  >
                    Valeurs
                  </NavLinks>
                </NavItem>
                {/* <NavItem>
                  <NavLinks
                    to="produits"
                   
                   
                  >
                    Activité
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to="temoineages"
                   
                  >
                    Partenaires
                  </NavLinks>
                </NavItem> */}
                <NavItem>
                  <NavLinks
                    to="footer"
                   
                  >
                    Contact
                  </NavLinks>
                </NavItem>
                {/* <NavItem>
                  <NavLinks
                    to="actualite"
                   
                  >
                    Blog
                  </NavLinks>
                </NavItem> */}
                <NavBtn>
                  <NavBtnLink to="/signin" exact >
                    Se Connecter
                  </NavBtnLink>
                </NavBtn>
            <NavDropDown className="col-sm-2">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      color: scrollNav ? "#fff" : "#000",
                    }}
                  >
                    <FaAngleDown
                      onClick={toggleDropdown}
                      style={{
                        cursor: "pointer",
                        color: scrollNav ? "#0000" : "#000",
                        gap: "10px"
                      }}
                    />
                    <p style={{ marginTop: "15px", fontWeight: "bold",fontFamily:"Constantia" ,
 }}>
                      Joignez
                    </p>
                  </div>
                  {dropdownOpen && (
                    <div
                      style={{
                        position: "absolute",
                        top: "5vh",
                        left: 1250,
                        background: "transparent",
                        borderRadius: "5px",
                        zIndex: 0,
                      }}
                    >
                      <ul style={{ margin: 0, padding: 0 }}>
                        <li style={{ color: "transparent" }}>
                       
                          <button onClick={handleShowDemandeClients}style={{background:'transparent',border:'none',color:scrollNav ? "#00000" : "#000",fontWeight: "500",fontFamily:"Constantia"}}> Client</button>
                        </li>
                        <li style={{ color: "transparent" }}>
                        <button onClick={handleShowDemandePubs}style={{background:'transparent',border:'none',color:scrollNav ? "#00000" : "#000",fontWeight: "500",fontFamily:"Constantia"}}> Publicitaire</button>
 
                        </li>
                      </ul>
                    </div>
                  )}
                </NavDropDown>
              </NavMenu>
            </NavbarContainer>
          </Nav>
        </Trans>
        {/*</></IconContext.Provider>*/}
    </>
  );
};
 
export default Navbar;