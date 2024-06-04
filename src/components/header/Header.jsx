import PropTypes from 'prop-types';
import Nav from './Nav';
import './Header.scss';
import Button from '../button/Button';
import In from '../../assets/svg/In';
// import XING from '../../assets/svg/XING';
import GitHub from '../../assets/svg/GitHub';

const Header = ({ chosenLightModus }) => {
  return (
    <div>
      <header className="headerContainer">
        <Nav chosenLightModus={chosenLightModus} />
        <h4>
          Praktikant gesucht?? <span></span>
        </h4>
        <h4>certified Fullstack Developer</h4>
        <p>
          Hallo, ich bin und
          wäre da.. 
          
        </p>
        <div className="buttonContainer">
          <a href="">
            <Button />
          </a>
        </div>
        <div class="verify">
        <a
        target='blank'
        href="https://github.com/"><GitHub/></a>
        <a
          href=""
          target="blank"
        >
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
