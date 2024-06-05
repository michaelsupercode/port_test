/* eslint-disable react/no-unescaped-entities */
import PropTypes from "prop-types";
import Nav from "./Nav";
import "./Header.scss";
import Button from "../button/Button";
import In from "../../assets/svg/In";
// import XING from '../../assets/svg/XING';
import GitHub from "../../assets/svg/GitHub";

const Header = ({ chosenLightModus }) => {
  return (
    <div>
      <header className="headerContainer">
        <Nav chosenLightModus={chosenLightModus} />
        <h4>
          Praktikum gesucht!! <span></span>
        </h4>
        <h4>certified fullstack developer</h4>
        <p>
          IT enthusiast / autodidact ('86) with extensive amateurish experience
          ('01) in web design html | css | coding, completed several
          FreeCodeCamp courses - wordpress affectionate ('11) - self-taught
          JavaScript-rookie, focused on [beloved] backend servers, highly
          skilled in remote work, extensive experience in self-hosted webspace (DNS)
          and <del>Microsoft Azure, AWS</del> cloud architecture and most cases of hosting
          anywhere
        </p>
        <div className="buttonContainer">
          <a href="">
            <Button />
          </a>
        </div>
        <div className="verify">
          <a target="blank" href="https://github.com/michaelsupercode">
            <GitHub />
          </a>
          <a target="blank" href="">
            <In />
          </a>
        </div>
      </header>
    </div>
  );
};

// Definieren der PropTypes für die Header-Komponente
Header.propTypes = {
  chosenLightModus: PropTypes.func.isRequired,
};

export default Header;
