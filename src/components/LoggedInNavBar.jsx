import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { logOutUser } from '../store';

import Pickaxe from '../assets/pickaxe.png';

export default function LoggedInNavBar() {
  const [activeItem, setActiveItem] = useState('');
  const dispatch = useDispatch();

  return (
    <Menu borderless pointing inverted className="fixed" size="huge">
      <Menu.Item>
        <Image src={Pickaxe} height="30px" />
      </Menu.Item>
      <Menu.Item
        as={Link}
        to="/dashboard"
        name="dashboard"
        active={activeItem === 'dashboard'}
        onClick={(e, { name }) => setActiveItem(name)}
      />
      <Menu.Item
        as={Link}
        to="/sites"
        name="sites"
        active={activeItem === 'sites'}
        onClick={(e, { name }) => setActiveItem(name)}
      />
      <Menu.Item
        as={Link}
        to="/insights"
        name="insights"
        active={activeItem === 'insights'}
        onClick={(e, { name }) => setActiveItem(name)}
      />
      <Menu.Menu position="right">
        <Menu.Item
          name="logout"
          active={activeItem === 'logout'}
          onClick={() => dispatch(logOutUser())}
        />
      </Menu.Menu>
    </Menu>
  );
}
