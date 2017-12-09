import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Image } from 'semantic-ui-react'
import Pickaxe from '../assets/pickaxe.png'

class NavBar extends React.Component {
	state = {
		activeItem: ''
	}

	handleItemClick = (e, { name }) => {
		this.setState({
			activeItem: name
		})
	}

	render(){
		const { activeItem } = this.state

		return (
      <Menu pointing inverted borderless className="fixed" size="huge">
        <Menu.Item>
          <Image src={Pickaxe} height="30px" />
        </Menu.Item>        
        <Menu.Item 
        	as={Link} 
        	to="/" 
        	name='Purposeful SEO' 
        	active={activeItem === 'Purposeful SEO'} 
        	onClick={this.handleItemClick} 
      	/>
        <Menu.Item 
        	as={Link} 
        	to="/about" 
        	name='About Us' 
        	active={activeItem === 'About Us'} 
        	onClick={this.handleItemClick} 
      	/>
      </Menu>
		)
	}
}

export default NavBar