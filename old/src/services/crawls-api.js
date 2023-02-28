import { jwt } from '../utilities/token.js';

export default class CrawlsApi {
  static createCrawl(params) {
    return fetch('http://localhost:5000/crawls', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${jwt()}`,
      },
      body: JSON.stringify({
        page_id: params,
      }),
    }).then((res) => res.json());
  }
}
