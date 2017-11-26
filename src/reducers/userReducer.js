export default function userReducer(state = {}, action) {

	switch(action.type) {
		case 'ADD_USER':
			console.log("inside user reducer", action.payload)
			return Object.assign({}, state, action.payload)
		case 'REMOVE_USER':
			console.log('YOU DID NOTHING YOU FOOL')
			return state
		default:
			return state
	}
}