export default function rootReducer(
	state = {user: {}, sites: [], pages: [], insights: [], comments: []}, 
	action
) {
	switch(action.type) {
		case 'USER_LOG_IN':
			let { name, password_digest, email, id, sites, pages, comments } = action.payload
			const newState = Object.assign({}, state, {
				user: {name, password_digest, email, id}, 
				sites: [...sites], 
				pages: [...pages], 
				comments: [...comments],
			})
			return newState
		case 'ADD_SITE':
			return Object.assign(
				{}, state, {sites: state.sites.concat(action.payload)}
			)
		case 'REMOVE_SITE':
			const reducedSites = state.sites.filter(site => site.id !== action.payload)
			return Object.assign(
				{}, state, {sites: reducedSites}
			)
		case 'UPDATE_SITE':
			return state;
		case 'ADD_PAGE':
			return Object.assign(
				{}, state, {pages: state.pages.concat(action.payload)}
			)
		case 'REMOVE_PAGE':
			const reducedPages = state.pages.filter(page => page.id !== action.payload)
			return Object.assign(
				{}, state, {pages: reducedPages}
			)
		case 'UPDATE_PAGE':
			return state;
		// case 'REMOVE_USER':
		// 	return state
		default:
			return state;
	}

}