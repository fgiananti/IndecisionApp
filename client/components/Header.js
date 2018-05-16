import React from 'react';


const Header = (props) => (
  <div>
    <h1>{props.title}</h1>
    <h2>{props.subtitle}</h2>
  </div>
);

Header.defaultProps = {
  title: 'some default'
}

export default Header;
