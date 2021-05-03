import WordTracking from 'pages/WordTracking';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
