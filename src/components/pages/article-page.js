import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import useSpaceflightService from '../../services/spaceflight-service';
import './article-page.scss';

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const { getArticle } = useSpaceflightService();

  useEffect(() => {
    (async () => {
      setArticle(await getArticle(id));
    })();

    //eslint-disable-next-line
  }, []);

  if (!article) return null;

  return (
    <div className="article">
      <div className="article__bg" style={{ backgroundImage: `url(${article.image})` }}></div>
      <Container className="article__container" maxWidth={false}>
        <div className="article__content">
          <Typography className="article__title" variant="h1">
            {article.title}
          </Typography>
          <Typography className="article__text" variant="p">
            {article.content}
          </Typography>
        </div>
        <Link className="article__home-link" to="/">
          Back to homepage
        </Link>
      </Container>
    </div>
  )
}

export default ArticlePage;