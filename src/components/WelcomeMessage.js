import React from 'react'
import { Message } from 'semantic-ui-react'

const WelcomeMessage = () => {
	return(
		<Message
    	info
    	header='Thanks for signing up for Purposeful SEO!'
    	content={
				<span>Do you have feedback or have you discovered an egregious bug that you simply cannot keep to yourself? We understand. Please reach out to our dedicated customer service staff on Twitter <a href="https://twitter.com/jonopens">@jonopens</a>.</span>
			}
  	/>
	)
}

export default WelcomeMessage
