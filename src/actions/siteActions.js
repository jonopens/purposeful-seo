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
	return {
		type: 'ADD_SITE',
		payload: site
	}
}

export function destroySite(id) {
	return function(dispatch) {
		return SitesApi.removeSite(id)
			.then(delSite => {
				dispatch(removeSite(delSite.id))
			})
	}
}

export function removeSite(id){
	return {
		type: 'REMOVE_SITE',
		payload: id
	}
}		