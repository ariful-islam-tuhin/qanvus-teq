import logo from './logo.svg';
import './App.css';
import Header from './Common/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './HomePage/Home/Home';
import Footer from './Common/Footer/Footer';
import NotFound from './Component/NotFound/NotFound';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivetRoute from './Component/PrivetRoute/PrivetRoute';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>        
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivetRoute path='/dashboard'>
              <Dashboard></Dashboard>             
            </PrivetRoute>        
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>

    </div>
  );
}

export default App;
