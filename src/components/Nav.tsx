import React from "react";

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
                            <a id={item.id.toString()} href={'/read/' + item.id} onClick={event => {
                                event.preventDefault()
                                onChangeMode(item.id)
                            }}>{item.title}</a>
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}

export default Nav;
