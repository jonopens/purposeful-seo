import UsersApi from '../adaptors/users-api.js'

export default function getAUser(params) {
	return function(dispatch) {
		return UsersApi.createOrFetchUser(params)
			.then(user => {
				dispatch(addUser(user))
		})
	}
}

export function addUser(user) {
	console.log("user in add user", user)
	return {
		type: 'LOG_IN',
		payload: user
	}
}
