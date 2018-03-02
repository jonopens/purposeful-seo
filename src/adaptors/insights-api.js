import { jwt } from '../utilities/token.js'

export default class InsightsApi {

  static updateInsight(params) {
    return fetch(`http://localhost:5000/insights/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${jwt()}`
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
}
