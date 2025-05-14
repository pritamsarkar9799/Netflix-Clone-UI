// import React, { useRef, useEffect } from 'react'
// import "./Navbar.css"
// import logo from '../../assets/logo.png'
// import search_icon from '../../assets/search_icon.svg'
// import bell_icon from '../../assets/bell_icon.svg'
// import profile_img from '../../assets/profile_img.png'
// import caret_icon from '../../assets/caret_icon.svg'
// import { logout } from '../../firebase'

// const Navbar = () => {

//   const navRef = useRef();

//   useEffect(() => {
//     window.addEventListener('scroll', () => {
//       if (window.scrollY >= 80) {
//         navRef.current.classList.add('nav-dark')
//       } else {
//         navRef.current.classList.remove('nav-dark')

//       }
//     })
//   }, [])

//   return (
//     <div ref={navRef} className='navbar'>
//       <div className="navbar-left">
//         <img src={logo} alt="" />
//         <ul>
//           <li>Home</li>
//           <li>TV Shows</li>
//           <li>Movies</li>
//           <li>New & Popular</li>
//           <li>My List</li>
//           <li>Browse By Languages</li>
//         </ul>
//       </div>
//       <div className="navbar-right">
//         <img src={search_icon} alt="" className="icons" />
//         <p>Children</p>
//         <img src={bell_icon} alt="" className="icons" />
//         <div className="navbar-profile">
//           <img src={profile_img} alt="" className="profile" />
//           <img src={caret_icon} alt="" />
//           <div className="dropdown">
//             <p onClick={() => { logout() }}>Sign Out of Netflix</p>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++Break++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

import React, { useRef, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';
import { logout } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/userSlice';

const Navbar = () => {
  const navRef = useRef();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    });
  }, []);

  const handleLogout = () => {
    logout();
    dispatch(logoutUser());
  };

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Netflix" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="Search" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="Notifications" className="icons" />
        <div className="navbar-profile">
          <img src={profile_img} alt="Profile" className="profile" />
          <img src={caret_icon} alt="Dropdown" />
          <div className="dropdown">
            <p onClick={handleLogout}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
