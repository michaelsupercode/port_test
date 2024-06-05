/* eslint-disable react/prop-types */
import Dark from '../../assets/svg/Dark';
import './Nav.scss'

const Nav = ({ chosenLightModus }) => {

        const toggleLightMode = () => {
            chosenLightModus(state => !state)
    };
    
    return(
        <nav className='navbar'>
            <h3>michael_hanel</h3>
            <ul>
                <div onClick={toggleLightMode}>
                <Dark/>
                </div>
            </ul>
        </nav>
    );
}


export default Nav;