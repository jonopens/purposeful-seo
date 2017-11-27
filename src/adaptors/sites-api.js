export default class SitesApi {

  static createSite(params) {
    return fetch("http://localhost:3000/api/v1/sites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }

  static removeSite(params) {
    return fetch("http://localhost:3000/api/v1/sites", {
      method: "DESTROY",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
}