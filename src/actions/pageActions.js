import PagesApi from '../adaptors/pages-api.js'

export function createPage(newPage) {
	return function(dispatch) {
		return PagesApi.addPage(newPage)
			.then(page => {
				dispatch(addPage(page))
		})
	}
}

export function addPage(page){
	return {
		type: 'ADD_PAGE',
		payload: page
	}
}

export function destroyPage(id) {
	return function(dispatch) {
		return PagesApi.removePage(id)
			.then(delPage => {
				dispatch(removePage(delPage.id))
			})
	}
}

export function removePage(id){
	return {
		type: 'REMOVE_PAGE',
		payload: id
	}
}		