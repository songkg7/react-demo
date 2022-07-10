import React from "react";

interface CreateProps {
    onCreate: (title: string, body: string) => void
}

function Create({onCreate}: CreateProps) {
    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            title: { value: string };
            body: { value: string };
        }
        const title = target.title.value;
        const body = target.body.value;
        onCreate(title, body);
    }

    return (
        <article>
            <h2>Create</h2>
            <form onSubmit={handleSubmit}>
                <p>
                    <input type="text" name="title" placeholder="title"/>
                </p>
                <p>
                    <textarea name="body" placeholder="body"></textarea>
                </p>
                <p>
                    <input type="submit" value="Create"/>
                </p>
            </form>
        </article>
    )
}

export default Create;
