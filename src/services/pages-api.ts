import { jwt } from '../utilities/token';
import type { Page } from '../types';

export default class PagesApi {
  static getPage(id: number): Promise<Page> {
    return fetch(`http://localhost:5000/pages/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt()}`,
      },
    }).then((res) => res.json());
  }

  static addPage(params: Partial<Page>): Promise<Page> {
    return fetch('http://localhost:5000/pages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${jwt()}`,
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  }

  static updatePage(params: Partial<Page> & { id: number }): Promise<unknown> {
    return fetch(`http://localhost:5000/pages/${params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${jwt()}`,
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  }

  static removePage(id: number): Promise<unknown> {
    return fetch(`http://localhost:5000/pages/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${jwt()}`,
      },
    }).then((res) => res.json());
  }

  static crawlPage(id: number): Promise<unknown> {
    return fetch(`http://localhost:5000/pages/${id}/crawl`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${jwt()}`,
      },
      body: JSON.stringify({ id }),
    }).then((res) => res.json());
  }
}
