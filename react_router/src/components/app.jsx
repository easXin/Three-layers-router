import React, {Component} from 'react'
// 导航链接
import{Switch, Route,Redirect} from 'react-router-dom'

import About from "../views/about";
import Home from "../views/home";
import MyNavLink from '../components/my-nav-link';
export default class App extends Component{
    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header">
                            <h2>React Router Demo</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*导航路由组件链接  v1.0 添加自定义属性*/}
                            {/* <NavLink className="list-group-item" to="/about" activeClassName='activeClass'>About</NavLink>
                            <NavLink className="list-group-item" to="/home"  activeClassName='activeClass'>Home</NavLink> */}

                             {/*导航路由组件链接  v2.0 把自定义属性往外丢 */}
                            <MyNavLink className="list-group-item" to="/about">About</MyNavLink>
                            <MyNavLink className="list-group-item" to="/home">Home</MyNavLink>
                        </div>
                    </div>

                    <div className="col-xs-6">
                            <div className="panel">
                                <div className="panel-body">
                                    {/*可切换的路由组件*/}
                                    <Switch>
                                        {/* 前端路由组件设置   -> 地址 component 组件 */}
                                        <Route path="/about" component={About} />
                                        <Route path="/home" component={Home} />
                                        <Redirect to='/about'/>
                                    </Switch>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}