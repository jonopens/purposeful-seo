export default function siteReducer(state = {}, action) {

	switch(action.type) {
		case 'ADD_SITE':
			return Object.assign({}, state, {user: action.payload})
		case 'REMOVE_SITE':
			console.log('YOU DID NOTHING YOU FOOL')
			return state
		default:
			return state
	}
}