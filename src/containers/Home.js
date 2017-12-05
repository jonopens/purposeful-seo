import React from 'react'
import { Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import HeadingBlock from '../components/HeadingBlock.js'
import HomeValueProp from '../components/HomeValueProp.js'
import HomeGridBreak from '../components/HomeGridBreak.js'

class Home extends React.Component {

	constructor(){
		super()

		this.state = {
			loginModalOpen: false,
			signupModalOpen: false
		}
	}

	handleLoginModalOpen = () => {
		this.setState({
			loginModalOpen: true
		})
	}

	handleLoginModalClose = () => {
		this.setState({
			loginModalOpen: false
		})
	}

	handleSignupModalOpen = () => {
		this.setState({
			signupModalOpen: true
		})
	}

	handleSignupModalClose = () => {
		this.setState({
			signupModalOpen: false
		})
	}

	render() {
    // restructure props as object for ease of further passing
    const userModalProps = {
      login: {
        loginModalOpen: this.state.loginModalOpen,
        handleLoginModalOpen: this.handleLoginModalOpen,
        handleLoginModalClose: this.handleLoginModalClose
      },
      signup: {
        signupModalOpen: this.state.signupModalOpen,
        handleSignupModalOpen: this.handleSignupModalOpen,
        handleSignupModalClose: this.handleSignupModalClose
      } 
    }

		return(
			<Segment style={{padding: 0}}>
				<HeadingBlock 
          modalProps={userModalProps}
        />
			  <HomeValueProp />
        <HomeGridBreak />
		  </Segment>
		)
	}
}


export default connect()(Home)