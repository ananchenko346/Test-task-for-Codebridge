import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/main-page';
import ArticlePage from '../pages/article-page';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif'
  },
  spacing: 5
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:id" element={<ArticlePage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
