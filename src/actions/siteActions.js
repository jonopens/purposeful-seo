import SitesApi from '../adaptors/sites-api.js'

export function createSite(site) {
	return function(dispatch) {
		return SitesApi.createSite(site)
			.then(user => {
				dispatch(addSite(user))
		})
	}
}

export function addSite(site){
	console.log("INSIDE THE ADD SITE ACTION CREATOR")
	return {
		type: 'ADD_SITE',
		payload: site
	}
}

export function removeSite(id){
	console.log("INSIDE THE ADD SITE ACTION CREATOR")
	return {
		type: 'REMOVE_SITE',
		payload: id
	}
}		