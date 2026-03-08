import React from 'react';
import '/Header.css';

class Header extends React.Component {
  constructor(props) { 
  super(props);
  }

render(){
  return (<div className="container Header">
    <div className="header">Web Application</div>
    <div className="gradient"></div>
  </div>);
        }
}
export default Header;
