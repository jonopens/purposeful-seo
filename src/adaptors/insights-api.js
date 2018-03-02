import { jwt } from '../utilities/token.js'

export default class InsightsApi {

  static updateInsight(id) {
    return fetch(`http://localhost:5000/insights/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt()}`
      }
    }).then(res => res.json());
  }
}
