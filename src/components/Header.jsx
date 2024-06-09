import React from 'react';
import LoginForm from "./LoginForm";

export default function Header({ isLoggedIn, username, onLogin }) {
    return (
        <header className="header grid-item span-12">
            <h2 className="header-title">컴퓨터 정보학과 실습 서버</h2>
            {!isLoggedIn ? (
                <LoginForm onLogin={onLogin} />
            ) : (
                <p>{username}님 환영합니다!</p>
            )}
        </header>
    );
}