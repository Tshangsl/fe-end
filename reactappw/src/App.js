import React from 'react'
import './App.css';
import { Route, Link } from 'react-router-dom'

import Home from './components/Home/Home'
import Course from './components/Course/Course'
import About from './components/About/About'
import Details from './components/Details/Details'



function App() {
  return (
    <div className="App">
      <Link to='/'>首页</Link>|
      <Link to='/course'>课程</Link>|
      <Link to={{
        pathname:'/about',
        search:'?id'
      }}>关于我们</Link>|

      <Route path="/" exact component={Home} />
      <Route path="/course" component={Course} />
      {/* url传参 */}
      <Route path="/course/:id" component={Details} />
      <Route path="/about" component={About} />
      
      {/* <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/course" component={Course} />
        <Route path="/about" component={About} />
        <Route path="/course/:id/:name" component={Details} />
      </Switch> */}
    </div>
  );
}

export default App;
