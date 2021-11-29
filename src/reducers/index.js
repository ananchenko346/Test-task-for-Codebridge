const initialState = {
  articles: [],
  filteredArticles: [],
  search: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ARTICLES_FETCHED':
      return {
        ...state,
        articles: action.payload,
      };
    case 'ARTICLES_FILTERED':
      return {
        ...state,
        filteredArticles: action.payload
      };
    case 'SET_SEARCH':
      return {
        ...state,
        search: action.payload
      };
    default: return state;
  }
}

export default reducer;