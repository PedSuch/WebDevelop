import React from 'react';

import { Link } from 'react-router-dom';
import '../../styles/header.scss';

const Header = () => (
  <>
    <header>
    <Link to="/">Home</Link>
    <nav>
      <Link to="/mainpage">Enter Site</Link>
    </nav>
    <hr />
  </header>

</>
);

export default Header;
