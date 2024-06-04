/* eslint-disable react/prop-types */
import Dark from '../../assets/svg/Dark';
import './Nav.scss'

const Nav = ({ chosenLightModus }) => {

        const toggleLightMode = () => {
            chosenLightModus(state => !state)
    };
    
    return(
        <nav className='navbar'>
            <a href="#">michael_hanel</a>
            <ul>
                <div onClick={toggleLightMode}>
                <Dark/>
                </div>
            </ul>
        </nav>
    );
}


export default Nav;