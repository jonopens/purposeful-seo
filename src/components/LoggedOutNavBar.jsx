import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react';
import Pickaxe from '../assets/pickaxe.png';

export default function LoggedOutNavBar() {
  const [activeItem, setActiveItem] = useState('');

  return (
    <Menu pointing inverted borderless className="fixed" size="huge">
      <Menu.Item>
        <Image src={Pickaxe} height="30px" />
      </Menu.Item>
      <Menu.Item
        as={Link}
        to="/"
        name="Purposeful SEO"
        active={activeItem === 'Purposeful SEO'}
        onClick={(e, { name }) => setActiveItem(name)}
      />
      <Menu.Item
        as={Link}
        to="/about"
        name="About Us"
        active={activeItem === 'About Us'}
        onClick={(e, { name }) => setActiveItem(name)}
      />
    </Menu>
  );
}
