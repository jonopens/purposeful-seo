import { jwt } from '../utilities/token';

export default class CrawlsApi {
  static createCrawl(pageId: number): Promise<unknown> {
    return fetch('http://localhost:5000/crawls', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${jwt()}`,
      },
      body: JSON.stringify({
        page_id: pageId,
      }),
    }).then((res) => res.json());
  }
}
