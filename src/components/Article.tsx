import React from "react";

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

export default Article;
