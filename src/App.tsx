import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CustomProvider } from 'rsuite';

import { Home } from './pages/Home';

function App() {
  return (
    <CustomProvider theme="dark">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </CustomProvider>
  );
}

export default App;
