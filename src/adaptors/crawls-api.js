export default class CrawlsApi {
  static createCrawl(params) {
    return fetch("http://localhost:3000/api/v1/crawls", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
      	page_id: params
      })
    }).then(res => res.json());
  }
}