/**
 * Created by Alex
 * npm install weui react-weui --save
 */

"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Router, Route, IndexRoute} from 'react-router';
import WeUI from 'react-weui';
import 'weui';
import './page.less';

const tab_list = {
    sale: ""
}

class Page extends React.Component {
    render() {
        const {title, subTitle, spacing, className, children} = this.props;

        return (
            <section className={`page ${className}`}>
                <div className="hd">
                    <h1 className="title">{title}</h1>
                    <p className="sub_title">{subTitle}</p>
                </div>
                <div className={`bd ${spacing ? 'spacing' : ''}`}>
                    {children}
                </div>
            </section>
        );
    }
};

class Home extends React.Component {
    render() {
        return (
            <Page className="panel" title="首页">
                <Panel access>
                    <PanelHeader>
                        操作
                    </PanelHeader>
                    <PanelBody>
                        <MediaBox href="#sale">
                            <MediaBoxBody>
                                <MediaBoxTitle>销售</MediaBoxTitle>
                                <MediaBoxDescription>
                                    增加一笔销售。
                                </MediaBoxDescription>
                            </MediaBoxBody>
                        </MediaBox>
                        <MediaBox href="#storage">
                            <MediaBoxBody>
                                <MediaBoxTitle>库存</MediaBoxTitle>
                                <MediaBoxDescription>
                                    查看每种商品的库存状况。
                                </MediaBoxDescription>
                            </MediaBoxBody>
                        </MediaBox>
                        <MediaBox href="#buy">
                            <MediaBoxBody>
                                <MediaBoxTitle>进货</MediaBoxTitle>
                                <MediaBoxDescription>
                                    进货的时候使用。
                                </MediaBoxDescription>
                            </MediaBoxBody>
                        </MediaBox>
                        <MediaBox href="#stat">
                            <MediaBoxBody>
                                <MediaBoxTitle>统计</MediaBoxTitle>
                                <MediaBoxDescription>
                                    统计最近的销售业绩。
                                </MediaBoxDescription>
                            </MediaBoxBody>
                        </MediaBox>
                    </PanelBody>
                    <PanelFooter href="javascript:void(0)">
                        退出
                    </PanelFooter>
                </Panel>
            </Page>
        );
    }
}

class Sale extends React.Component {
    render() {
        return (
            <Page className="" title="销售">
            </Page>
        )
    }
}

class Storage extends React.Component {
    render() {
        return (
            <Page className="" title="">
            </Page>
        )
    }
}

class Buy extends React.Component {
    render() {
        return (
            <Page className="" title="">
            </Page>
        )
    }
}

class Stat extends React.Component {
    render() {
        return (
            <Page className="" title="">
            </Page>
        )
    }
}

class Setting extends React.Component {
    render() {
        return (
            <Page className="" title="">
            </Page>
        )
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
            <IndexRoute component={Home}/>
            <Route path="sale" component={Sale}/>
            <Route path="storage" component={Storage}/>
            <Route path="buy" component={Buy}/>
            <Route path="stat" component={Stat}/>
            <Route path="setting" component={Setting}/>
        </Route>
    </Router>
), document.getElementById('container'));
