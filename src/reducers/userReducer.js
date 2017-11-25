export default function userReducer(state = {
	user: {},
}, action) {

	switch(action.type) {
		case 'ADD_USER':
			return Object.assign({}, state, {user: action.payload})
		case 'REMOVE_USER':
			console.log('YOU DID NOTHING YOU FOOL')
			return state
		default:
			return state
	}
}