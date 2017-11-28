import UsersApi from '../adaptors/users-api.js'

export function getAUser(params) {
	return function(dispatch) {
		return UsersApi.createOrFetchUser(params)
			.then(user => {
				dispatch(addUser(user))
		})
	}
}

export function addUser(user) {
	return {
		type: 'USER_LOG_IN',
		payload: user
	}
}
