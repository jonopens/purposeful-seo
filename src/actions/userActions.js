import UsersApi from '../adaptors/users-api.js'

export function getCurrentUser(token) {
	return function(dispatch) {
		return UsersApi.getThisUser(token)
			.then(user => {
				dispatch(currentUser(user))
		}).then(dispatch(doneLoadingUser()))
	}
}

export function currentUser(user) {
	return {
		type: 'SET_CURRENT_USER',
		payload: user
	}
}

export function loginUser(params) {
	return function(dispatch) {
		return UsersApi.loginUser(params)
			.then(user => {
				dispatch(login(user))
		})
	}
}

export function login(token) {
	return {
		type: 'LOGIN_USER',
		payload: token
	}
}

export function signUpUser(params) {
	return function(dispatch) {
		return UsersApi.signUpUser(params)
			.then(user => {
				dispatch(signUp(user))
		})
	}
}

export function signUp(user) {
	return {
		type: 'SIGN_UP_USER',
		payload: user
	}
}

export function logOutUser() {
	return function(dispatch) {
		dispatch(logOut())
	}
}

export function logOut() {
	return {
		type: 'LOG_OUT'
	}
}

export function doneLoadingUser() {
	return {
		type: 'USER_LOADED'
	}
}
