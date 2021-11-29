import Container from '@mui/material/Container';
import SearchPanel from '../search-panel/search-panel';
import CardList from '../card-list/card-list';

const MainPage = () => {
  return (
    <>
      <Container className="container" maxWidth={false}>
        <SearchPanel />
        <CardList />
      </Container>
    </>
  )
}

export default MainPage;