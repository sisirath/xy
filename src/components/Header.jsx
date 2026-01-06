import React from 'react';

const Logo = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Abstract X and Y interplay - Minimalist Architectural Style */}
        <rect x="5" y="5" width="30" height="30" stroke="var(--color-text)" strokeWidth="1" strokeOpacity="0.3" />
        <path d="M10 30L30 10" stroke="var(--color-text)" strokeWidth="1.5" />
        <path d="M20 20L30 30" stroke="var(--color-text)" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="2" fill="var(--color-text)" />
    </svg>
);

const Header = () => {
    return (
        <header style={{ borderBottom: '1px solid var(--color-border)' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
                <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
                    <Logo />
                    <span style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        letterSpacing: '-0.02em',
                        color: 'var(--color-text)'
                    }}>
                        XY Intelligence
                    </span>
                </a>
                <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <a href="#services" className="uppercase-tracking">Services</a>
                    <a href="#cases" className="uppercase-tracking">Case Studies</a>
                    <a href="#about" className="uppercase-tracking">About</a>
                    <a href="#contact"
                        style={{
                            border: '1px solid var(--color-text)',
                            padding: '0.5rem 1.5rem',
                            fontSize: '0.8rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-text)'; e.currentTarget.style.color = 'var(--color-bg)'; }}
                        onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--color-text)'; }}
                    >
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
