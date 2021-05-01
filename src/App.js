import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import WordTracking from './pages/WordTracking';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/words">
          <WordTracking />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
