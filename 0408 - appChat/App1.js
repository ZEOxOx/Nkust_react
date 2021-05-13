import React from 'react';

class FormatDate extends React.Component {
    render() {
        const date = new Date();
        return date.toLocaleDateString();
    }
}

class Avatar extends React.Component {
    render() {
        const author ={
            name: 'Hello Kitty',
            avatarUrl: 'https://placekitten.com/g/64/64',
        };
        return (
            <img
                className="Avatar"
                src={author.avatarUrl}
                alt={author.name}
            />
        );
    }
}

class UserInfo extends React.Component {
    render() {
        const name = 'Hello Kitty'
        return (
            <div className="UserInfo">
                <Avatar />
                <div className="UserInfo-name">{name}</div>
            </div>
        );
    }
}

class Comment extends React.Component {
    render() {
        const text = 'I hope you enjoy learning React!'
        return (
            <div className="Comment">
                <UserInfo  />
                <div className="Comment-text">{text}</div>
                <div className="Comment-date">
                    <FormatDate />
                </div>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <Comment />
        );
    }
}

export default App;