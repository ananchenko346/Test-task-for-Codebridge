import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { articlesFiltered, setSearch } from '../../actions';
import useSpaceflightService from '../../services/spaceflight-service';
import './search-panel.scss';

const SearchPanel = () => {
  const { articles } = useSelector(state => state);
  const dispatch = useDispatch();
  const { filterArticles } = useSpaceflightService();

const onChange = (e) => {
  const search = e.target.value;
  const filteredArticles = filterArticles(search, articles);

  dispatch(setSearch(search));
  dispatch(articlesFiltered(filteredArticles));
  };

  return (
    <div className="search-panel">
      <form>
        <div className="search-field">
          <InputLabel className="search-field__label" htmlFor="search-filter">
            Filter by keywords
          </InputLabel>
          <TextField className="search-field__input" id="search-filter" variant="outlined" onChange={onChange} />
        </div>
      </form>
    </div>
  )
}

export default SearchPanel;