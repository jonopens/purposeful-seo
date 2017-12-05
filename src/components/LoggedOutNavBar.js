import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class NavBar extends React.Component {
	constructor(){
		super()

		this.state = {
			activeItem: ''
		}
	}

	handleItemClick = (e, { name }) => {
		this.setState({
			activeItem: name
		})
	}

	render(){
		const { activeItem } = this.state

		return (
      <Menu pointing inverted className="fixed" size="huge">
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