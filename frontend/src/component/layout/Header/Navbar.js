import React, { useState } from 'react'
import './Navbar.css'
import { RiMenu2Line, RiCloseLine, RiShoppingCart2Line, RiSearchLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';





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

    const { isAuthenticated } = useSelector((state) => state.user);



    return (

        <div className='navbar'>

            {/* ----------------------------------For Desktop Mobiles---------------------------------------- */}
            < div className='navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine color='rgb(235, 64, 52)' size={60} onClick={() => setToggleMenu(false)} />
                    : <RiMenu2Line color='rgb(235, 64, 52)' size={60} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='navbar-menu-container scale-up-center'>
                        <div className='navbar-menu-container-links'>
                            <Menu />
                            <div className='navbar-cart-search-menu'>
                                <Link className="navbar-non-menu-buttons" to='/Cart' >
                                    <RiShoppingCart2Line color='rgb(235, 64, 52)' size={35} />
                                </Link>

                                <Link className="navbar-non-menu-buttons" to='/Search' >
                                    <RiSearchLine color='rgb(235, 64, 52)' size={30} />
                                </Link>

                            </div>
                            <div className='navbar-menu-container-links-sign'>
                                {
                                    isAuthenticated
                                        ? <div></div>
                                        : <button type='button'><Link className="navbar-signup-button" to='/login' >Login / Sign up</Link></button>
                                }

                            </div>
                        </div>
                    </div>
                )}

            </div>
            {/* ----------------------------------For Tablets-------------------------------------------- */}

            <div className='navbar-cart-search-non-menu'>

                <Link className="navbar-non-menu-buttons" to='/Search' >
                    <RiSearchLine color='rgb(235, 64, 52)' size={50} />
                </Link>

                <Link style={{ paddingRight: "40px" }} className="navbar-non-menu-buttons" to='/Cart' >
                    <RiShoppingCart2Line color='rgb(235, 64, 52)' size={55} />
                </Link>

            </div>

            {/* ----------------------------------For Desktop & Laptop----------------------------------- */}

            <div className='navbar-container'>

                <div className='navbar-links'>

                    <div className='navbar-links-container'>
                        <Menu />

                    </div>
                    <Link className="navbar-non-menu-buttons" to='/Search' >
                        <RiSearchLine color='white' size={30} />
                    </Link>

                </div>

                <div style={{ paddingRight: "40px" }} className='navbar-sign'>
                    {
                        isAuthenticated
                            ? <div></div>
                            : <button type='button'><Link className="navbar-signup-button" to='/login' >Login / Sign up</Link></button>
                    }

                </div>

                <div className='navbar-container-cart-search-non-menu'>

                    <Link className="navbar-non-menu-buttons" to='/Cart' >
                        <RiShoppingCart2Line color='white' size={45} />
                    </Link>

                </div>


            </div>






        </div>

    )
}

export default Navbar
