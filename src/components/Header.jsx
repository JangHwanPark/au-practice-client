import React from 'react';
import LoginForm from "./LoginForm";

export default function Header({ isLoggedIn, username, onLogin }) {
    return (
        <header className="App-header">
            <h2>컴퓨터 정보학과 실습 서버</h2>
            {!isLoggedIn ? (
                <LoginForm onLogin={onLogin} />
            ) : (
                <p>{username}님 환영합니다!</p>
            )}
        </header>
    );
}