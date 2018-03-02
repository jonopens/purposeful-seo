export default function rootReducer(
	state = {loggedIn: false, loading: false, loadedSites: false, falselastMessage: {}, user: {}, sites: [], pages: [], insights: [], comments: []},
	action
) {
	
	switch(action.type) {

		case 'LOGIN_USER': {

			localStorage.setItem("jwt", action.payload["jwt"])
			return Object.assign(
				{}, state, { loggedIn: true }
			)
		}
		case 'SIGN_UP_USER': {

			return Object.assign(
				{}, state, {
					lastMessage: {
						msg: action.payload.msg,
						status: action.payload.status,
						isPositive: (action.payload.status === 200 ? true : false)
					}
				}
			)
		}
		case 'SET_CURRENT_USER': {

			let { username, password_digest, email, id, sites, pages, comments, insights } = action.payload
			const currUserState = Object.assign({}, state, {
				loggedIn: true,
				loading: true,
				user: { username, password_digest, email, id },
				sites: [...sites],
				comments: [...comments],
				pages: [...pages],
				insights: [...insights]
			})

			return currUserState
		}
		case 'USER_LOADED':

			return Object.assign(
				{}, state, {loadedSites: true, loading: false}
			)
		case 'LOG_OUT':

			localStorage.clear("jwt")
			return Object.assign(
				{}, { loggedIn: false, loadedSites: false }
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
		case 'GET_PAGE':

			return Object.assign(
				{}, state, {
					pages: state.pages.map(page => {
						if(page.id === action.payload.id) {
							let newPage = Object.assign(
								{}, page, {
									insights: [...action.payload.insights]
								}
							)
							console.log("what is newPage", newPage)
							return newPage
						}
						return page
					})
				}
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
		case 'RESET_MESSAGE':

			return Object.assign(
				{}, state, { lastMessage: {} }
			)
		default:
			return state;
	}

}
