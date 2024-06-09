import React from 'react';

export default function GridLayout({children}) {
    return (
        <div className="container window">
            {children}
        </div>
    );
}