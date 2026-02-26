import React from 'react';
import { Grid, Statistic } from 'semantic-ui-react';

const DashStatistics = (props) => {
  let completedInsights = props.insights.filter(function (i) {
    return i.completion_status === 'completed';
  }).length;

  return (
    <Grid.Column width={8}>
      <Statistic size="huge">
        <Statistic.Value>{props.pages.length || 0}</Statistic.Value>
        <Statistic.Label>Pages in Your Account</Statistic.Label>
      </Statistic>
      <Statistic size="huge">
        <Statistic.Value>
          {completedInsights} / {props.insights.length}
        </Statistic.Value>
        <Statistic.Label>Completed of Total Insights</Statistic.Label>
      </Statistic>
    </Grid.Column>
  );
};

export default DashStatistics;
