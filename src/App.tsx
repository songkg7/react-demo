import React from 'react';
import './App.css';
import {useState} from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Article from "./components/Article";
import Create from "./components/Create";

function App() {
    const [id, setId] = useState(0);
    const [nextId, setNextId] = useState(4);
    const [topics, setTopics] = useState([
        {id: 1, title: 'html', body: 'html is ...'},
        {id: 2, title: 'css', body: 'css is ...'},
        {id: 3, title: 'javascript', body: 'javascript is ...'},
    ]);

    const [mode, setMode] = useState('WELCOME');
    let content: JSX.Element = <Article title={'WELCOME'} body={'HELLO, WEB'}></Article>;
    if (mode === 'READ') {
        let title = '', body = '';
        for (let i = 0; i < topics.length; i++) {
            if (topics[i].id === id) {
                title = topics[i].title;
                body = topics[i].body;
            }
        }
        content = <Article title={title} body={body}></Article>;
    } else if (mode === 'CREATE') {
        content = <Create onCreate={(title: string, body: string) => {
            const newTopic = {id: nextId, title: title, body: body};
            const newTopics = [...topics];
            newTopics.push(newTopic);
            setTopics(newTopics); // object type 은 복제한 데이터를 상태로 관리해야 한다.
            setNextId(nextId + 1); // 원시 데이터는 상태 관리를 위해 복제할 필요가 없다.
            setMode('READ');
            setId(nextId)
        }}></Create>
    }

    return (
        <div className="App">
            <Header title="REACT" onChangeMode={() => {
                setMode('WELCOME')
            }}></Header>
            <Nav topics={topics} onChangeMode={id => {
                setId(id)
                setMode('READ')
            }}></Nav>
            {content}
            <a href="/create" onClick={event => {
                event.preventDefault()
                setMode('CREATE')
            }}>Create</a>
        </div>
    );
}

export default App;
