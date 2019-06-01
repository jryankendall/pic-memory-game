/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';

class Nav extends Component {
    render() {
        return (
        <nav className="blue">
            <div className="nav-wrapper">
              <a href="#" className="center brand-logo">Memory Game</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
              </ul>
            </div>
        </nav>
        )
    }
}

export default Nav;