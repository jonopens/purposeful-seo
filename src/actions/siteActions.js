import SitesApi from '../adaptors/sites-api.js'

export function createSite(site) {
	return function(dispatch) {
		return SitesApi.createSite(site)
			.then(s => {
				dispatch(addSite(s))
		})
	}
}

export function addSite(site){
	return {
		type: 'ADD_SITE',
		payload: site
	}
}

export function removeSite(id){
	return {
		type: 'REMOVE_SITE',
		payload: id
	}
}		