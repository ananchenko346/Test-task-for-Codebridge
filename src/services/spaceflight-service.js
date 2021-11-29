import Fuse from 'fuse.js';
import { useHttp } from '../hooks/http-hook';

const useSpaceflightService = () => {
  const { request } = useHttp();

  const _apiBase = 'https://api.spaceflightnewsapi.net/v3/articles';

  const getArticles = async () => {
    const data = await request(`${_apiBase}?_limit=50`);
    return data.map(_transformArticle);
  }

  const getArticle = async (id) => {
    const data = await request(`${_apiBase}/${id}`);
    return _transformArticle(data);
  }

  const filterArticles = (search, articles) => {
    const options = {
      includeScore: true,
      includeMatches: true,
      ignoreLocation: true,
      keys: [
        'title',
        { name: 'description', weight: 2 }
      ],
    };

    const fuse = new Fuse(articles, options);
    const res = fuse.search(search);

    return res.map(({ item }) => item);
  };

  const _transformArticle = (article) => {
    return {
      id: article.id,
      title: article.title,
      date: article.publishedAt,
      image: article.imageUrl,
      description: (article.summary.length > 100) ? `${article.summary.slice(0, 100)}...` : article.summary,
      content: article.summary
    }
  }

  return { getArticles, getArticle, filterArticles };
}

export default useSpaceflightService;