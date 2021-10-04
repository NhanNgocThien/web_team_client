import React from 'react'
import './Header.scss';
import HeaderLogo from '../../images/logo-b-light.svg';

const Header: React.FC = () => {
    return (
        <header className="desktop-header d-flex align-item-start flex-column">
            <div className='site-logo'>
                <img src={HeaderLogo} alt="" />
            </div>
            <nav>
                <ul className="vertical-menu scrollspy">
                    <li>
                        <a href="#">
                            <i className="icon-home"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="icon-user-following"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="icon-briefcase"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="icon-graduation"></i>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="icon-layers"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="icon-note"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="icon-bubbles"></i>
                        </a>
                    </li>
                </ul>
            </nav>
            <div></div>
        </header>
    )
}

export default Header;
