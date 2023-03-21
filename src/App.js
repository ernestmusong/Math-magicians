import Home from './Home';
import './App.css';
import { Switch,Route} from "react-router-dom";
 
function App() {
  return (
    <>
      <Switch>
         <Route exact path="/">
            <Home/>
          </Route>
      </Switch>    
    </>
  );
}

export default App;
