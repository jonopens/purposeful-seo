export default function siteReducer(state = {}, action) {
	console.log("state in siteReducer", state)
	switch(action.type) {
		case 'ADD_SITE':
			return Object.assign(
				{}, state, state.sites.concat(action.payload)
			)
		case 'REMOVE_SITE':
		console.log("state in remove_site case", state)
			const reducedSites = state.sites.filter(site => site.id !== action.payload)
			return Object.assign(
				{}, state, reducedSites
			)
		default:
			return state
	}
}