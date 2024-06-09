import React from 'react';

export default function Section({ title, data }) {
    return (
        <section className="section">
            <h3 className="section-title">{title}</h3>
            <ul className="section-list">
                {data.map(item => (
                    <li key={item.id} className="item">
                        <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer">
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}