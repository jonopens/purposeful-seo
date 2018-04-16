import PagesApi from '../adaptors/pages-api.js'

export function createPage(newPage) {
	return function(dispatch) {
		return PagesApi.addPage(newPage)
			.then(page => {
				dispatch(addPage(page))
			})
	}
}

export function addPage(page) {
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

export function removePage(id) {
	return {
		type: 'REMOVE_PAGE',
		payload: id
	}
}

export function fetchPage(id) {
	return function(dispatch) {
		return PagesApi.getPage(id)
			.then(page => {
				dispatch(getPageDetails(page))
			})
	}
}

export function getPageDetails(page) {
	return {
		type: 'GET_PAGE',
		payload: page
	}
}

export function startPageScraper(pageId) {
	return function(dispatch) {
		return PagesApi.crawlPage(pageId)
			.then(page => {
				dispatch(scrapePage(page))
			})
	}
}

export function scrapePage(page){
	return {
		type: 'SCRAPE_PAGE',
		payload: page
	}
}
