import React from 'react'
import { Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import HeadingBlock from '../components/HeadingBlock.js'
import HomeValueProp from '../components/HomeValueProp.js'
import HomeGridBreak from '../components/HomeGridBreak.js'
import { resetLastMessage } from '../actions/commonActions.js'

class Home extends React.Component {
	state = {
		loginModalOpen: false,
		signupModalOpen: false
		// statusModalOpen: false,
	}

	// statusModalTimer = () => {
	// 	if(!!this.props.lastMessage.msg) {
	// 		this.setState({
	// 			statusModalOpen: true
	// 		})
	// 		this.setTimeout(this.handleStatusModalClose, 3000)
	// 	}
	// }

	// handleStatusModalClose = () => {
	// 	this.setState({
	// 		statusModalOpen: false
	// 	})
	// 	this.props.resetLastMessage()
	// }

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
		// this.statusModalTimer()
		this.setState({
			signupModalOpen: false
		})

	}

	render() {
		console.log(this.props)

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
			<Segment style={{padding: 0, border: 0}}>
				<HeadingBlock 
          modalProps={userModalProps}
        />
			  <HomeValueProp />
        <HomeGridBreak />
		  </Segment>
		)
	}
}

function mapStateToProps(state) {
	return {
		lastMessage: state.lastMessage
	}
}

function mapDispatchToProps(dispatch) {
	return {
		resetLastMessage: () => {
			dispatch(resetLastMessage())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)