import React, {useState} from "react";

interface UpdateProps {
    onUpdate: (title: string, body: string) => void;
    title: string;
    body: string;
}

function Update({onUpdate, title, body}: UpdateProps) {
    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            title: { value: string };
            body: { value: string };
        }
        const title = target.title.value;
        const body = target.body.value;
        onUpdate(title, body);
    }

    const [stateTitle, setTitle] = useState(title);
    const [stateBody, setBody] = useState(body);

    return (
        <article>
            <h2>Update</h2>
            <form onSubmit={handleSubmit}>
                <p>
                    <input type="text"
                           name="title"
                           placeholder="title"
                           value={stateTitle}
                           onChange={event => setTitle(event.target.value)}/>
                </p>
                <p>
                    <textarea name="body"
                              placeholder="body"
                              value={stateBody}
                              onChange={event => setBody(event.target.value)}></textarea>
                </p>
                <p>
                    <input type="submit" value="Update"/>
                </p>
            </form>
        </article>
    )
}

export default Update;
