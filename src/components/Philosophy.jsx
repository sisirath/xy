import React from 'react';

const Philosophy = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        marginBottom: 'var(--spacing-md)',
                        fontFamily: 'var(--font-serif)'
                    }}>
                        Our Philosophy
                    </h2>
                    <div style={{ width: '60px', height: '1px', backgroundColor: 'var(--color-text)', margin: '0 auto var(--spacing-md)' }}></div>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--color-text)',
                        lineHeight: 1.8,
                        fontFamily: 'var(--font-serif)',
                        fontStyle: 'italic'
                    }}>
                        "At XY Intelligence, our consulting practice is fueled by a deeper quest. We believe the same intelligence required to solve the world’s oldest mathematical mysteries is the key to unlocking hidden value in your data. We merge the visionary tradition of Kerala mathematics with the speed of modern AI."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
