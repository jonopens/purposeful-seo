export default class PagesApi {

	static addPage(params) {
		return fetch("http://localhost:3000/api/v1/pages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(params)
		}).then(res => res.json());
	}
}