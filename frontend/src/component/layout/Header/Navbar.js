import React, { useState } from 'react'
import './Navbar.css'
import { RiMenu2Line, RiCloseLine, RiShoppingCart2Line, RiSearchLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';


const Menu = () => (
    <>
        <p><Link className="navbar-buttons" to='/' >Home</Link> </p>
        <p><Link className="navbar-buttons" to='/products'>Products</Link></p>
        <p><Link className="navbar-buttons" to='/contact'>Contact Us</Link> </p>
        <p><Link className="navbar-buttons" to='/about'>About Us</Link></p>

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
                                <Link className="navbar-non-menu-buttons" to='/Cart' >
                                    <RiShoppingCart2Line color='red' size={35} />
                                </Link>

                                <Link className="navbar-non-menu-buttons" to='/Search' >
                                    <RiSearchLine color='red' size={30} />
                                </Link>

                            </div>
                            <div className='navbar-menu-container-links-sign'>

                                <button type='button'><Link className="navbar-signup-button" to='/login' >Login / Sign up</Link></button>
                            </div>
                        </div>
                    </div>
                )}

            </div>

            <div className='navbar-cart-search-non-menu'>
                <Link className="navbar-non-menu-buttons" to='/Cart' >
                    <RiShoppingCart2Line color='red' size={55} />
                </Link>

                <Link className="navbar-non-menu-buttons" to='/Search' >
                    <RiSearchLine color='red' size={50} />
                </Link>

            </div>

        </div>

    )
}

export default Navbar
