export default class SitesApi {

  static jwt() {
    return localStorage.getItem("jwt")
  }

  static createSite(params) {
    return fetch("http://localhost:5000/sites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${this.jwt()}`
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }

  static removeSite(id) {
    return fetch(`http://localhost:5000/sites/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${this.jwt()}`
      }
    }).then(res => res.json());
  }

  static updateSite(params) {
    return fetch(`http://localhost:5000/sites/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${this.jwt()}`
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
}