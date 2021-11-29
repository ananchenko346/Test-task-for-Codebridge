import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import moment from 'moment';
import Typography from '@mui/material/Typography';
import Highlighter from 'react-highlight-words';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './card-item.scss';

const CardItem = (props) => {
  const { search } = useSelector(state => state);
  const { item } = props;

  const highlightedTitle = (title, search) => {
    if (!search) return title;

    const keywords = search.split(' ');

    return <Highlighter searchWords={keywords} textToHighlight={title} />;
  };

  const highlightedDescription = (description, search) => {
    if (!search) return description;

    const keywords = search.split(' ');

    return <Highlighter searchWords={keywords} textToHighlight={description} />;
  };

  const title = highlightedTitle(item.title, search);
  const description = highlightedDescription(item.description, search);

  return (
    <div className="card-item">
      <Card className="card-item__inner" sx={{ maxWidth: 400 }}>
       <CardMedia
          component="img"
          height="217"
          image={item.image}
          alt="image"
        />
        <CardContent className="card-item__content">
          <div>
            <div className="card-item__date">
              {moment(item.date).format('MMMM Do, YYYY')}
            </div>
            <Typography className="card-item__title" variant="h5" component="div">
              {title}
            </Typography>
          </div>
          <div>
            <Typography className="card-item__description">
              {description}
            </Typography>
            <Link className="card-item__link" to={`/${item.id}`}>
              Read more
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CardItem;