export default function siteReducer(state = {}, action) {

	switch(action.type) {
		case 'ADD_SITE':
			return Object.assign({}, state, action.payload)
		case 'REMOVE_SITE':
			return state
		default:
			return state
	}
}