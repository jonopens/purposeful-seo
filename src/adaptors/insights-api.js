export default class InsightsApi {

  static jwt() {
    return localStorage.getItem("jwt")
  }

  static getInsight(id) {
    return fetch(`http://localhost:5000/insights/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.jwt()}`
      }
    }).then(res => res.json());
  }
}