import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import MessageDetail from "./message-details";

export default class Message extends Component {
    state = {
        messages:[]
    }
    ShowDetail = (id) => {
        //加入点 在历史记录中
        this.props.history.push(`/home/message/${id}`)
    }

    ShowDetail2 = (id) => {
        this.props.history.replace(`/home/message/${id}`)
    }

    back = () => {
        this.props.history.goBack()
    }

    forward = () => {
        this.props.history.goForward()
    }
    // 模拟发送ajax 请求
    componentDidMount(){
        setTimeout(()=>{
        const messages = [
                { id: 1, title: "message001" },
                { id: 3, title: "message003" },
                { id: 5, title: "message005" }
            ]
            this.setState({ messages });
        }
        ,1000)
    }
    render() {
        // current router 
        const path = this.props.match.path
        return (
            <div>
                <ul>
                    {this.state.messages.map((m, index) => (
                        <li key={index}>
                            <Link to={`${path}/${m.id}`}>{m.title}</Link>
                                &nbsp;&nbsp;&nbsp;
                                <button onClick={() => this.ShowDetail(m.id)}>push</button>&nbsp;
                                <button onClick={() => this.ShowDetail2(m.id)}>replace</button>
                        </li>
                    ))}
                </ul>
                <p>
                    <button onClick={this.back}>Backward</button>&nbsp;
                    <button onClick={this.forward}>Forward</button>&nbsp;
                </p>
                {/* :id 占位符 也是标记名称 跟上面的相对应 */}
                <Route path={`${path}/:id`} component={MessageDetail}></Route>
            </div>
            );
    }
}
