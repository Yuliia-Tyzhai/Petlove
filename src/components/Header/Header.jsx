import React from 'react';
import Logo from '../Logo/Logo';
// import Nav from '../Nav/Nav';
// import AuthNav from '../AuthNav/AuthNav';
// import UserNav from '../UserNav/UserNav';
// import { useSelector } from 'react-redux';

const Header = () => {
  // const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <header>
      <Logo />
      {/* <Nav />
      {isAuthenticated ? <UserNav /> : <AuthNav />} */}
    </header>
  );
};

export default Header;
