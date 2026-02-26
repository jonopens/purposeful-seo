import { jwt } from '../utilities/token';
import type { Insight } from '../types';

export default class InsightsApi {
  static updateInsight(params: Partial<Insight> & { id: number }): Promise<Insight> {
    return fetch(`http://localhost:5000/insights/${params.id}`, {
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
