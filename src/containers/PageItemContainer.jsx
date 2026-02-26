import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Segment,
  Grid,
  Divider,
  Header,
  Icon,
  Container,
  Tab,
} from 'semantic-ui-react';

import CommentSection from '../components/CommentSection.jsx';
import PageLoader from '../components/PageLoader.jsx';
import TabNgramItemGrid from '../components/TabNgramItemGrid.jsx';
import TabSEODataTable from '../components/TabSEODataTable.jsx';
import TabPageItemBody from '../components/TabPageItemBody.jsx';
import TabPageInsightsTable from '../components/TabPageInsightsTable.jsx';
import { filterUnigrams, filterBigrams } from '../utilities/ngrams';
import { fetchPage } from '../store';

export default function PageItemContainer() {
  const dispatch = useDispatch();
  const thisPageId = +window.location.pathname.split('/')[4];
  const parentSiteId = +window.location.pathname.split('/')[2];
  const thisPage = useSelector((state) =>
    state.pages.find((page) => thisPageId === page.id)
  );
  const parentSite = useSelector((state) =>
    state.sites.find((site) => parentSiteId === site.id)
  );
  const pageInsights = useSelector((state) =>
    state.insights.filter((insight) => insight.page_id === thisPageId)
  );
  const pageComments = useSelector((state) =>
    state.comments.filter((comm) => comm.page_id === thisPageId)
  );

  useEffect(() => {
    if (thisPage) {
      dispatch(fetchPage(thisPage.id));
    }
  }, [dispatch, thisPage?.id]);

  if (!thisPage) {
    return (
      <Container style={{ marginTop: '7em' }}>
        <PageLoader />
      </Container>
    );
  }

  const panes = [
    {
      menuItem: 'Page Insights',
      render: () => <TabPageInsightsTable insights={pageInsights} />,
    },
    {
      menuItem: 'Essential SEO Data',
      render: () => (
        <TabSEODataTable
          pageData={thisPage}
          siteData={parentSite}
        />
      ),
    },
    {
      menuItem: 'Term Usage Frequency in Document',
      render: () => (
        <TabNgramItemGrid
          unigrams={filterUnigrams(thisPage.body_text || '').slice(0, 12)}
          bigrams={filterBigrams(thisPage.body_text || '').slice(0, 12)}
        />
      ),
    },
    {
      menuItem: 'Captured Page Text',
      render: () => (
        <TabPageItemBody bodyText={thisPage.body_text} />
      ),
    },
  ];

  return (
    <Segment>
      <Grid padded relaxed style={{ marginTop: '7em' }}>
        <Divider hidden />
        <Header as="h1" style={{ marginTop: '2em' }}>
          <Icon name="file text outline" />
          {thisPage.title}
        </Header>
      </Grid>
      <Tab
        style={{ marginTop: '2em' }}
        menu={{ pointing: true }}
        panes={panes}
      />
      <CommentSection comments={pageComments} page_id={thisPage.id} />
    </Segment>
  );
}
