import React from 'react';
import { Menu, MenuItem, } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const NavBar = () => (
  <Menu>
    <NavLink to="/">
      <MenuItem>
        Home
      </MenuItem>
    </NavLink>
    <NavLink to="/user/info">
      <MenuItem>
        User Info
      </MenuItem>
    </NavLink>
    <NavLink to="/user/hobbies">
      <MenuItem>
        Hobbies
      </MenuItem>
    </NavLink>
  </Menu>
  
)

export default NavBar;