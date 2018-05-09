import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './index.css';
import logo from './logo.svg';
import App from './routes/App';
import List from './routes/List';
import Content from './routes/Content';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(( <BrowserRouter>
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul className="nav navbar-nav">
            <li><Link to="/">首页</Link></li>
            <li><Link to="/list">列表</Link></li>
        </ul>
        <Route exact path='/' component={App}/>
        <Route path='/list' component={List}></Route>
        <Route path='/content:id' component={Content}></Route>
    </div>
</BrowserRouter>), document.getElementById('root'));
registerServiceWorker();
