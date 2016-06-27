/**
 * Created by Alex
 */

"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Router, Route, IndexRoute} from 'react-router';
import WeUI from '../src/index';
import 'weui';

const tab_list = {
    sale: ""
}

class Sale extends React.Component {
    render() {
        <div></div>
    }
}

class Storage extends React.Component {
    render() {
        <div></div>
    }
}

class Buy extends React.Component {
    render() {
        <div></div>
    }
}

class Stat extends React.Component {
    render() {
        <div></div>
    }
}

class Setting extends React.Component {
    render() {
        <div></div>
    }
}


class App extends React.Component {

    state = {
        tab: "sale"
    };

    render() {
        return (
            <ReactCSSTransitionGroup
                component="div"
                transitionName="page"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
                style={{height: '100%'}}
            >
                <Tab>
                    <NavBar>
                        <NavBarItem active={this.state.tab == "sale"} onClick={e=>this.setState({tab:"sale"})}>销售</NavBarItem>
                        <NavBarItem active={this.state.tab == "storage"} onClick={e=>this.setState({tab:"storage"})}>库存</NavBarItem>
                        <NavBarItem active={this.state.tab == "buy"} onClick={e=>this.setState({tab:"buy"})}>进货</NavBarItem>
                        <NavBarItem active={this.state.tab == "stat"} onClick={e=>this.setState({tab:"stat"})}>统计</NavBarItem>
                        <NavBarItem active={this.state.tab == "setting"} onClick={e=>this.setState({tab:"setting"})}>设置</NavBarItem>
                    </NavBar>
                    <TabBody>
                        {
                            
                        }
                        <div style={{display: this.state.tab == "sale" ? null : 'none'}}></div>
                    </TabBody>
                </Tab>
                {React.cloneElement(this.props.children, {
                    key: this.props.location.pathname
                })}
            </ReactCSSTransitionGroup>
        );
    }
}

ReactDOM.render((
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Sale}/>
            <Route path="storage" component={Storage}/>
            <Route path="buy" component={Buy}/>
            <Route path="stat" component={Stat}/>
            <Route path="setting" component={Setting}/>
        </Route>
    </Router>
), document.getElementById('container'));
