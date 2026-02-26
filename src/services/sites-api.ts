import { jwt } from '../utilities/token';
import type { Site } from '../types';

export default class SitesApi {
  static createSite(params: Partial<Site> & { name?: string; url?: string }): Promise<Site> {
    return fetch('http://localhost:5000/sites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${jwt()}`,
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  }

  static removeSite(id: number): Promise<unknown> {
    return fetch(`http://localhost:5000/sites/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${jwt()}`,
      },
    }).then((res) => res.json());
  }

  static updateSite(params: Partial<Site> & { id: number }): Promise<unknown> {
    return fetch(`http://localhost:5000/sites/${params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${jwt()}`,
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  }
}
