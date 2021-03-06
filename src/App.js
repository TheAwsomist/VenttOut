import './App.css';
import LoginPage from './Components/LoginPage';
import Navbar from './Components/Navbar';
import SignupPage from './Components/SignupPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Layout from './Components/Layout';
import {NewsFeedCard, ProfileCard} from './Components/Cards';
import NewsFeed from './Components/NewsFeed';
import ProfilePage from './Components/ProfilePage';
import { Filters } from './Components/Button';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={SignupPage}/>
          <Route path="/login" component={LoginPage}/>
          <Layout>
            <Route path="/NewsFeed" component={NewsFeed}/>
            <Route path="/ProfilePage" component={ProfilePage}/>
          </Layout>
        </Switch>
      </Router>
      {/* <Filters/> */}
    </>
    )
}

export default App;
