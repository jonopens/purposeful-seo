import CrawlsApi from '../adaptors/crawls-api.js'

export function createAndStartCrawl(pageId) {
	return function(dispatch) {
		return CrawlsApi.createCrawl(pageId)
			.then(page => {
				dispatch(createAndRunCrawl(page))
			})
	}
}

export function createAndRunCrawl(page){
	console.log("createandruncrawl page obj", page)
	return {
		type: 'CREATE_AND_RUN_CRAWL_ON_PAGE',
		payload: page
	}
}