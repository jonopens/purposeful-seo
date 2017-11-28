export default function rootReducer(
	state = {user: {}, sites: [], pages: [], insights: [], crawls: [], comments: []}, 
	action
) {
	switch(action.type) {
		case 'USER_LOG_IN':
			let { name, password_digest, email, id, sites, pages, comments } = action.payload
			const newState = Object.assign({}, state, {
				user: {name, password_digest, email, id}, 
				sites: [...sites], 
				pages: [...pages], 
				comments: [...comments]
			})
			return newState

		case 'FETCHED_SITES':
			return state;

		case 'ADD_SITE':
			return Object.assign(
				{}, state, state.sites.concat(action.payload)
			)

		case 'REMOVE_SITE':
			console.log('got here - payload', action.payload)
			const reducedSites = state.sites.filter(site => site.id !== action.payload)
			console.log()
			return Object.assign(
				{}, state, reducedSites
			)

		case 'ADD_PAGE':
			return state;
		default:
			return state;
	}

}