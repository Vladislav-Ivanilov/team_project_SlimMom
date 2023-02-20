import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from '@mui/material';
import theme from 'styles/theme';
import GlobalStyle from'./styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
