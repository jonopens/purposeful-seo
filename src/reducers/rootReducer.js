export default function rootReducer(
	state = {loggedIn: false, user: {}, sites: [], pages: [], insights: [], comments: []}, 
	action
) {
	switch(action.type) {
		case 'LOGIN_USER': {
			localStorage.setItem("jwt", action.payload["jwt"])
			let newState = Object.assign(
				{}, state, { loggedIn: true }
			)
			return newState
		}
		case 'SIGN_UP_USER': {
			let { username, password_digest, email, id, sites, pages, comments } = action.payload
			const signUpState = Object.assign({}, state, {
				user: {username, password_digest, email, id}, 
				sites: [...sites], 
				pages: [...pages], 
				comments: [...comments],
			})
			return signUpState
		}
		case 'SET_CURRENT_USER': {
			let { username, password_digest, email, id, sites, pages, comments } = action.payload
			const currUserState = Object.assign({}, state, {
				loggedIn: true,
				user: {username, password_digest, email, id}, 
				sites: [...sites], 
				pages: [...pages], 
				comments: [...comments],
			})
			console.log("SET CURRENT USER", currUserState)
			return currUserState
		}
		case 'LOG_OUT':
			localStorage.clear("jwt")
			return Object.assign(
				{}, state, { loggedIn: false }
			)
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