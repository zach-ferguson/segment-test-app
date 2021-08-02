
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Topics from './pages/Topics';
import People from './pages/People';
import { createBrowserHistory } from "history";
import analytics from '@segment/analytics.js-core';


function App() {

  return (
    <div className="App">
      <div>
        <Router>
        <nav>
          <ul>
            <li>
              <Link to="/segment-test-app/">Home</Link>
            </li>
            <li>
              <Link to="/segment-test-app/people">People</Link>
            </li>
            <li>
              <Link to="/segment-test-app/topics">Topics</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/segment-test-app/people">
            <People analytics={analytics}/>
          </Route>
          <Route path="/segment-test-app/topics">
            <Topics />
          </Route>
          <Route path="/segment-test-app/">
            <Home />
          </Route>
        </Switch>
        </Router>
        </div>
    </div>
    );
  }

export default App;
