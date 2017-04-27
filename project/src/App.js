import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import SearchArtists from './SearchArtists'
import SingleArtist from './SingleArtist'

/*let counter = 0;
setInterval(function(){
  console.log(counter);
  counter++;
})*/

/*axios.get(API_URL, {params: params}).then(response => {
    this.setState({stateVar: response.data});
});*/

export default class App extends Component {

    constructor() {
        super();
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Menu/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/artists" component={SearchArtists}/>
                    <Route path="/artist/:id" component={SingleArtist}/>
                </div>
            </BrowserRouter>
        );
    }
}

function Menu(props) {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/artists">Artists</Link>
            </li>
        </ul>
    )
}