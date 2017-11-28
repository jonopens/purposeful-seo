export default function siteReducer(state = {}, action) {
	switch(action.type) {
		case 'LOG_IN':
		console.log("inside siteReducer login", state)
		console.log("action.payload, actionpayloadsites", action.payload, action.payload.sites)
			return Object.assign(
				{}, state, {sites: action.payload.sites}
			)
		case 'ADD_SITE':
			return Object.assign(
				{}, state, state.sites.concat(action.payload)
			)
		case 'REMOVE_SITE':
			console.log("state in remove_site case", state)
			console.log("payload in remove_site case", action.paylaod)
			const reducedSites = state.sites.filter(site => site.id !== action.payload)
			console.log(reducedSites)
			return Object.assign(
				{}, state, reducedSites
			)
		default:
			return state
	}
}