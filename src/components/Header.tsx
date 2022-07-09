import React from "react";

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

export default Header;
