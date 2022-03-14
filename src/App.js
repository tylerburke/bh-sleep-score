import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import SleepScore from './SleepScore';
import makeServer from './apiServer';

makeServer();

const App = () => {
  return <SleepScore />;
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
