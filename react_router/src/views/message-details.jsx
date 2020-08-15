import React, {Component} from 'react'

const messageDetails = [
    { id: 1, title: "Message001", content: "AAA" },
    { id: 3, title: "Message003", content: "BBB" },
    { id: 5, title: "Message005", content: "CCC" },
];

export default  function MessageDetail(props) {
    // 得到参数中的id
    const { id } = props.match.params;
    // 返回第一个为true的
    const md = messageDetails.find((md) => md.id === id * 1);
    return (
        <ul>
            <li>ID: {md.id}</li>
            <li>TITLE: {md.title}</li>
            <li>CONTENT: {md.content}</li>
        </ul>
    );
}