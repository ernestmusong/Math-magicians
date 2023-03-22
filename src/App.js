import { Switch, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <>
      <Switch>
        <Route>
          <Calculator />
        </Route>
      </Switch>
    </>
  );
}

export default App;
