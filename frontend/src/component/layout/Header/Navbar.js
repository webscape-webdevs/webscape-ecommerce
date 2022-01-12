import React, { useState } from 'react'
import './Navbar.css'
import { RiMenu2Line, RiCloseLine, RiShoppingCart2Line, RiSearchLine } from 'react-icons/ri';


const Menu = () => (
    <>
        <p><a className="navbar-buttons" href='/' >Home</a> </p>
        <p><a className="navbar-buttons" href='/products'>Products</a></p>
        <p><a className="navbar-buttons" href='/contact'>Contact Us</a> </p>
        <p><a className="navbar-buttons" href='/about'>About Us</a></p>

    </>

)

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (

        <div className='navbar'>

            < div className='navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine color='red' size={60} onClick={() => setToggleMenu(false)} />
                    : <RiMenu2Line color='red' size={60} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='navbar-menu-container scale-up-center'>
                        <div className='navbar-menu-container-links'>
                            <Menu />
                            <div className='navbar-cart-search-menu'>
                                <a className="navbar-non-menu-buttons" href='/Cart' >
                                    <RiShoppingCart2Line color='red' size={35} />
                                </a>

                                <a className="navbar-non-menu-buttons" href='/Search' >
                                    <RiSearchLine color='red' size={30} />
                                </a>

                            </div>
                            <div className='navbar-menu-container-links-sign'>

                                <button type='button'><a className="navbar-signup-button" href='/login' >Login / Sign up</a></button>
                            </div>
                        </div>
                    </div>
                )}

            </div>

            <div className='navbar-cart-search-non-menu'>
                <a className="navbar-non-menu-buttons" href='/Cart' >
                    <RiShoppingCart2Line color='red' size={55} />
                </a>

                <a className="navbar-non-menu-buttons" href='/Search' >
                    <RiSearchLine color='red' size={50} />
                </a>

            </div>

        </div>

    )
}

export default Navbar
