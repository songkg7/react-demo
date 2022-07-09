import React from 'react';
import './App.css';

function Header({title}: { title: string }) {
    return (
        <header>
            <h1><a href="/">{title}</a></h1>
        </header>
    )
}

interface Topic {
    id: number,
    title: string,
    body: string
}

interface TopicProps {
    topics: Topic[]
}

function Nav({topics}: TopicProps) {
    const lis: any[] = []
    topics.forEach((value, index) => {
        lis.push(<li key={index}><a href={'/read/' + index}>{value.title}</a></li>)
    })
    return (
        <nav>
            <ol>
                {lis}
            </ol>
        </nav>
    )
}

interface Article {
    title: String,
    body: String
}

function Article(article: Article) {
    return (
        <article>
            <h2>{article.title}</h2>
            {article.body}
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
            <Header title="REACT"></Header>
            <Nav topics={topics}></Nav>
            <Article title="Welcome" body="Hello, WEB"></Article>
        </div>
    );
}

export default App;
