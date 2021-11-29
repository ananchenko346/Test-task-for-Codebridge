import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { articlesFetched } from '../../actions';
import useSpaceflightService from '../../services/spaceflight-service';
import CardItem from '../card-item/card-item';
import './card-list.scss';

const CardList = () => {
  const { articles, filteredArticles, search } = useSelector(state => state);
  const dispatch = useDispatch();
  const { getArticles } = useSpaceflightService();

  useEffect(() => {
    (async () => {
      dispatch(articlesFetched(await getArticles()));
    })();

    //eslint-disable-next-line
  }, []);

  const renderArticles = (items) => {
    return items.map((item) => {
      return (
        <Grid key={item.id} item md={4}>
          <CardItem item={item} />
        </Grid>
      );
    });
  };

  const elements = (!search.length && !filteredArticles.length) ? renderArticles(articles) : renderArticles(filteredArticles);

  return (
    <div className="card-list">
      <div className="card-list__results">Results: {elements.length}</div>
      <Grid container spacing={9}>
        {elements}
      </Grid>
    </div>
  )
}

export default CardList;
