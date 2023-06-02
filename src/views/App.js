import TuanAnh from './TuanAnh.jpg';
import './App.scss';
import ListTodo from './Todos/Todo';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Nav from './Nav/Nav';
import About from './About/about';
import Home from './Home/home';
import ListUser from './Users/ListUser';
import Detail from './Users/DetailUser';
import Test from './Test/Test';
// import router 
import {
  BrowserRouter ,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <header className="App-header">
      <Nav/>
        {/* <img src={TuanAnh} className="App-logo" alt="logo" /> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <Switch>
          <Route path="/" exact >
            <Home/>
          </Route>
          <Route path="/todo" >
            <ListTodo />
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route exact path="/user">
            <ListUser/>
          </Route>
          <Route path="/user/:id">
            <Detail/>
          </Route>
          <Route path="/test">
            <Test/>
          </Route>
        </Switch>
      </header> 
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
      {/* Same as */}

    </div>
    </BrowserRouter>
    
  );
}

export default App;
