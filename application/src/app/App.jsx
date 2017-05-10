import React from "react";
import {render} from "react-dom";

//Components
import Root from "./components/root/Root.jsx";
import Home from "./components/pages/home/Home.jsx";
import Suggestion from './components/pages/suggestion/Suggestion.jsx';
import Account from './components/pages/account/Account.jsx';
import Inspiration from "./components/pages/inspiration/Inspiration.jsx";
import Detail from './components/pages/detail/Detail.jsx';
import SuggestionsList from './components/pages/suggestion/SuggestionsList.jsx';
import {Router, Route, browserHistory, IndexRoute} from "react-router";

class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Root}>
                    <IndexRoute component={Home}/>
                    <Route path="inspiration" component={Inspiration} ignoreScrollBehavior/>
                    <Route path="inspiration/detail/:productId" component={Detail}/>
		                <Route path="suggestion" component={Suggestion}/>
                    <Route path="account" component={Account}/>
                    <Route path="suggestion-list" component={SuggestionsList}/>
                </Route>
            </Router>
        );
    }
}

render(<App/>, window.document.getElementById("app"));
