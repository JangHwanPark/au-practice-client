import React, { useState } from 'react';

export default function LoginForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(username, password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <section>
                <label htmlFor="username">아이디</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </section>
            <section>
                <label htmlFor="password">비밀번호</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </section>
            <div>
                <button type="submit">로그인</button>
            </div>
        </form>
    );
}