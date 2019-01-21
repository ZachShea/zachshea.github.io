import React from 'react';
import NavBar from './NavBar.js';
import NavMenu from './NavMenu.js';

class NavViewController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {menuIsOpen: false};
    }

    setMenuIsOpen = (isOpen) => {
        this.setState({menuIsOpen: isOpen})
    }

    render() { 
        return this.state.menuIsOpen ? 
            (<NavMenu closeMenu={() => this.setMenuIsOpen(false)}/>) : 
            (<NavBar openMenu={() => this.setMenuIsOpen(true)}/>); 
    }
}

export default NavViewController;