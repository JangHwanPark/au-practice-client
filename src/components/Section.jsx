import React from 'react';

export default function Section({ title, data }) {
    return (
        <section>
            <h3>{title}</h3>
            {data.map(item => (
                <div key={item.id}>
                    <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer">
                        {item.title}
                    </a>
                </div>
            ))}
        </section>
    );
}