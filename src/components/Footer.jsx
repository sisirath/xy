import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" style={{ paddingTop: 'var(--spacing-xl)', borderTop: '1px solid var(--color-border)' }}>
            <div className="container" style={{ paddingBottom: 'var(--spacing-xl)' }}>
                <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>
                        How can we assist your organization?
                    </h2>

                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'var(--spacing-md)' }}>
                        <input
                            type="email"
                            placeholder="Enter your corporate email"
                            style={{
                                padding: '1rem',
                                border: '1px solid var(--color-border)',
                                fontSize: '1rem',
                                fontFamily: 'var(--font-sans)',
                                outline: 'none'
                            }}
                        />
                        <button
                            type="submit"
                            style={{
                                padding: '1rem',
                                backgroundColor: 'var(--color-text)',
                                color: 'var(--color-bg)',
                                fontSize: '1rem',
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase'
                            }}
                        >
                            Start Conversation
                        </button>
                    </form>
                </div>
            </div>

            <div style={{ backgroundColor: 'var(--color-text)', color: 'white', padding: 'var(--spacing-md) 0' }}>
                <div className="container footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', opacity: 0.8 }}>
                    <div>
                        &copy; {new Date().getFullYear()} XY Intelligence. All rights reserved.
                    </div>
                    <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
                        Inspired by the legacy of Madhava
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
