import InsightsApi from '../services/insights-api.js';

export function editInsight(insightData) {
  return function (dispatch) {
    return InsightsApi.updateInsight(insightData).then((insight) => {
      dispatch(updateInsight(insight));
    });
  };
}

export function updateInsight(insight) {
  return {
    type: 'UPDATE_INSIGHT',
    payload: insight,
  };
}
