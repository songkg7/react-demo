import React from 'react';
import './App.css';
import {useState} from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Article from "./components/Article";

function App() {
    const topics = [
        {id: 1, title: 'html', body: 'html is ...'},
        {id: 2, title: 'css', body: 'css is ...'},
        {id: 3, title: 'javascript', body: 'javascript is ...'},
    ]

    const [mode, setMode] = useState('WELCOME')
    let content: JSX.Element = <Article title={'WELCOME'} body={'HELLO, WEB'}></Article>
    if (mode === 'READ') {
        content = <Article title={'Read'} body={'HELLO, Read'}></Article>
    }

    return (
        <div className="App">
            <Header title="REACT" onChangeMode={() => {
                setMode('WELCOME')
            }}></Header>
            <Nav topics={topics} onChangeMode={() => {
                setMode('READ')
            }}></Nav>
            {content}
        </div>
    );
}

export default App;
