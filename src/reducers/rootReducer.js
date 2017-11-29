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
				{}, state, {sites: state.sites.concat(action.payload)}
			)
		case 'ADD_PAGE':
			debugger
			return Object.assign(
				{}, state, {pages: state.pages.concat([action.payload])}
			)
		case 'REMOVE_SITE':
			const reducedSites = state.sites.filter(site => site.id !== action.payload)
			return Object.assign(
				{}, state, {sites: reducedSites}
			)
		case 'REMOVE_USER':
			return state
		default:
			return state;
	}

}