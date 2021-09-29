import React , {useState, useEffect} from 'react'
import { Link , useHistory , useLocation } from 'react-router-dom';
import { FiMenu, FiX} from 'react-icons/fi'
import logo from "../../assets/logo.svg";
import logowhite from "../../assets/logowhite.svg";
import './theNavbar.css'

const TheNavbar = () => {
       const [click , setClick] = useState(false);
       const [largeScreen , setLargeScreen] = useState(true);
       const [navbarScroll , setNavbarScroll] = useState(false);

       const handleClick = () => setClick(!click);
       const closeMobileView = () => setClick(false);

       const history = useHistory();
       const {pathname} = useLocation();

       const showLargeScreen = () => {
              window.innerWidth <= 960 ? setLargeScreen(false)  :  setLargeScreen(true);
       }

       const activateNavbarBackgroundOnScroll = ()=> {
              if(window.innerWidth > 960){ window.scrollY >= 70 ? setNavbarScroll(true) : setNavbarScroll(false)}
       }

       window.addEventListener('resize', showLargeScreen);
        window.addEventListener('scroll', activateNavbarBackgroundOnScroll);
       
       useEffect(() => {
              showLargeScreen()
       }, [largeScreen,  navbarScroll])

       return (
              <nav className =   'theNav' >
                     <div className={navbarScroll ?  'theNav-container scroll' : 'theNav-container' }>
                                   { largeScreen ? 
                                   <Link 
                                   className = "logo" to = "/" 
                                   onClick = {closeMobileView}>
                                          <img src = {logo}  alt="Semicolon  Logo"/>
                                   </Link> : 
                                   <Link 
                                   className = "logo" to = "/" 
                                   onClick = {() => closeMobileView()}>
                                          <img  src = {logo} alt="Semicolon  Logo"/>
                                   </Link> 
                                   }

                                         {/* Only shows On MobileScreen */}

                                         {!largeScreen &&
                                   <div className="toggler" onClick = {handleClick}>
                                          {click ? <FiX color =  "#0692C4" fontSize='4rem'  /> : <FiMenu color =  "#0692C4"  fontSize='4rem' />}
                                   </div>}

                                   {/* <div className = {`theNavmenu ${click ?  "mobile" : ""}`}> */}
                                   <div className = {click ? 'theNavMenu mobile' : 'theNavMenu'}>
                                          <div className= 'first-nav'>
                                                 <ul>
                                                        {!largeScreen &&
                                                        <li className= {`nav-item  ${pathname === "/about" && "text-primary"}`} >
                                                               <Link className = "nav-link"  to = '/' 
                                                               onClick = {() => closeMobileView()}>
                                                               Home
                                                               </Link>
                                                        </li>
                                                        }
                                                        <li className= {`nav-item  ${pathname === "/about" && "text-primary"}`} >
                                                               <Link className = "nav-link"  to = '/about' 
                                                               onClick = {() => closeMobileView()}>
                                                               About Us
                                                               </Link>
                                                        </li>

                                                        <li className= {`nav-item   ${pathname === "/swit" && "text-primary"}`} >
                                                               <Link className = "nav-link"  to = '/swit' 
                                                               onClick = {() => closeMobileView()}>
                                                               Savings
                                                               </Link>
                                                        </li>


                                                        <li className= {`nav-item  ${pathname === "/start-ups" && "text-primary"}`} 
                                                        onClick = {() => history.push("/start-ups")}>
                                                               <Link className = "nav-link"  to = '/start-ups' 
                                                               onClick = {closeMobileView}>
                                                               Account
                                                               </Link>
                                                        </li>

                                                        {largeScreen && <li className= {`nav-item   ${pathname === "/blog" && "text-primary"}`}>
                                                               <Link className = "nav-link"  to = '/blog' 
                                                               onClick = {closeMobileView}>
                                                               Dashboard
                                                               </Link>
                                                        </li>}
                                                        <li className= {`nav-item for-company  ${pathname=== "/for-company" && "text-primary"}`} 
                                                               onClick = {() => history.push("/for-company")}>
                                                               <Link className = "nav-link"  to = '/for-company' 
                                                               onClick = {closeMobileView}>
                                                               Sign Up
                                                               </Link>
                                                        </li>
                                                 </ul>
                                          </div>
                                   </div>
                            </div>
                     </nav>
       )
}

export default TheNavbar
