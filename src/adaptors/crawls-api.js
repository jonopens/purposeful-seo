export default class CrawlsApi {

  static jwt() {
    return localStorage.getItem("jwt")
  }

  static createCrawl(params) {
    return fetch("http://localhost:5000/crawls", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${this.jwt()}`
      },
      body: JSON.stringify({
      	page_id: params
      })
    }).then(res => res.json());
  }
}