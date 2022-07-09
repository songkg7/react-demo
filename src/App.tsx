import React from 'react';
import './App.css';

interface HeaderProps {
    title: string,
    onChangeMode: (event: React.MouseEvent<HTMLElement>) => void
}

function Header({title, onChangeMode}: HeaderProps) {
    return (
        <header>
            <h1><a href="/" onClick={function (event) {
                event.preventDefault()
                onChangeMode(event)
            }}>{title}</a></h1>
        </header>
    );
}

interface Topic {
    id: number,
    title: string,
    body: string
}

interface TopicProps {
    topics: Topic[]
    onChangeMode: (id: number) => void
}

function Nav({topics, onChangeMode}: TopicProps) {
    return (
        <nav>
            <ol>
                {topics.map(item => {
                    return (
                        <li key={item.id}>
                            <a href={'/read/' + item.id} onClick={() => {
                                onChangeMode(item.id)
                            }}>{item.title}</a>
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}

interface ArticleProps {
    title: string,
    body: string
}

function Article({title, body}: ArticleProps) {
    return (
        <article>
            <h2>{title}</h2>
            {body}
        </article>
    )
}

function App() {
    const topics: Topic[] = [
        {id: 1, title: 'html', body: 'html is ...'},
        {id: 2, title: 'css', body: 'css is ...'},
        {id: 3, title: 'javascript', body: 'javascript is ...'},
    ]
    return (
        <div className="App">
            <Header title="REACT" onChangeMode={function () {
                alert('Header');
            }}></Header>
            <Nav topics={topics} onChangeMode={function (id: number) {
                alert(id)
            }}></Nav>
            <Article title="Welcome" body="Hello, WEB"></Article>
        </div>
    );
}

export default App;
