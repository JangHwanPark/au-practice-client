import React from 'react';
import '98.css'; // 98.css를 가져옵니다.

export default function Section({ title, data, className }) {
    return (
        <section className={`window ${className}`} style={{margin: '20px'}}>
            <div className="title-bar">
                <div className="title-bar-text">{title}</div>
                <div className="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close"></button>
                </div>
            </div>
            <div className="window-body">
                <ul className="tree-view">
                    {data.map(item => (
                        <li key={item.id} className="tree-item">
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer">
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}