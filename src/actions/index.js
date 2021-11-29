export const articlesFetched = (articles) => {
  return {
    type: 'ARTICLES_FETCHED',
    payload: articles
  }
};

export const articlesFiltered = (filteredArticles) => {
  return {
    type: 'ARTICLES_FILTERED',
    payload: filteredArticles
  }
};

export const setSearch = (search) => {
  return {
    type: 'SET_SEARCH',
    payload: search
  }
};