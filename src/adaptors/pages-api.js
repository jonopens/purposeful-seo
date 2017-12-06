export default class PagesApi {

  static jwt() {
    return localStorage.getItem("jwt")
  }

  static getPage(id) {
    return fetch(`http://localhost:5000/pages/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.jwt()}`
      }
    }).then(res => res.json());    
  }

	static addPage(params) {
		return fetch("http://localhost:5000/pages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${this.jwt()}`
      },
      body: JSON.stringify(params)
		}).then(res => res.json());
	}

  static removePage(id) {
    return fetch(`http://localhost:5000/pages/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${this.jwt()}`
      }
    }).then(res => res.json());
  }

  static updatePage(params) {
    return fetch("http://localhost:5000/pages", {
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