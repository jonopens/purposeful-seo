export default function rootReducer(
  state = {
    loggedIn: false,
    loading: false,
    loadedSites: false,
    lastMessage: {},
    user: {},
    sites: [],
    pages: [],
    insights: [],
    comments: [],
  },
  action
) {
  switch (action.type) {
    case 'LOGIN_USER': {
      localStorage.setItem('jwt', action.payload['jwt']);
      return Object.assign({}, state, { loggedIn: true });
    }

    case 'SIGN_UP_USER': {
      return Object.assign({}, state, {
        lastMessage: {
          msg: action.payload.msg,
          status: action.payload.status,
          isPositive: action.payload.status === 200 ? true : false,
        },
      });
    }

    case 'SET_CURRENT_USER': {
      let {
        username,
        password_digest,
        email,
        id,
        sites,
        pages,
        comments,
        insights,
      } = action.payload;
      const currUserState = Object.assign({}, state, {
        loggedIn: true,
        loading: true,
        user: { username, password_digest, email, id },
        sites: [...sites],
        comments: [...comments],
        pages: [...pages],
        insights: [...insights],
      });

      return currUserState;
    }

    case 'USER_LOADED':
      return Object.assign({}, state, { loadedSites: true, loading: false });

    case 'LOG_OUT':
      localStorage.clear('jwt');
      return Object.assign({}, { loggedIn: false, loadedSites: false });

    case 'ADD_SITE':
      return Object.assign({}, state, {
        sites: state.sites.concat(action.payload),
      });

    case 'REMOVE_SITE':
      const reducedSites = state.sites.filter(
        (site) => site.id !== action.payload
      );
      return Object.assign({}, state, { sites: reducedSites });

    case 'UPDATE_SITE':
      // no features
      return state;

    case 'ADD_PAGE':
      return Object.assign({}, state, {
        pages: state.pages.concat(action.payload),
      });

    case 'REMOVE_PAGE':
      const filteredPages = state.pages.filter(
        (page) => page.id !== action.payload
      );
      const filteredInsights = state.insights.filter(
        (insight) => insight.page_id !== action.payload
      );
      return Object.assign({}, state, {
        pages: filteredPages,
        insights: filteredInsights,
      });

    case 'GET_PAGE':
      return Object.assign({}, state, {
        pages: state.pages.map((page) => {
          if (page.id === action.payload.id) {
            return Object.assign({}, page, {
              insights: [...action.payload.insights],
            });
          }
          return page;
        }),
      });

    case 'SCRAPE_PAGE':
      return Object.assign({}, state, {
        pages: state.pages.map((page) => {
          if (page.id === action.payload.id) {
            return Object.assign({}, page, { ...action.payload });
          }
          return page;
        }),
        insights: state.insights.concat(action.payload.insights),
      });

    case 'UPDATE_INSIGHT':
      return Object.assign({}, state, {
        insights: state.insights.map((i) => {
          if (i.id === action.payload.id) {
            return Object.assign({}, i, { ...action.payload });
          }
          return i;
        }),
      });

    case 'ADD_COMMENT':
      return Object.assign({}, state, {
        comments: state.comments.concat(action.payload),
      });

    case 'RESET_MESSAGE':
      return Object.assign({}, state, { lastMessage: {} });

    default:
      return state;
  }
}
