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
		case 'CREATE_AND_RUN_CRAWL_ON_PAGE':
			return Object.assign(
				{}, state, {
					pages: state.pages.map(page => {
						if(page.id === action.payload.id) {
							return Object.assign({}, page, {...action.payload})
						}
						return page
					})
				} 
			)
		default:
			return state;
	}

}