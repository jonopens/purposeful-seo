import PagesApi from '../adaptors/pages-api.js'

export function createPage(newPage) {
	return function(dispatch) {
		return PagesApi.createPage(newPage)
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