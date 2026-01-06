import React, { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';

const Hero = () => {
    // State to control whether the modal is in the DOM
    const [isOpen, setIsOpen] = useState(false);
    // State to control the animation phase (entering vs exiting)
    const [isClosing, setIsClosing] = useState(false);

    const openModal = () => {
        setIsOpen(true);
        setIsClosing(false);
    };

    const closeModal = () => {
        setIsClosing(true);
        // Wait for animation to finish before removing from DOM
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, 600); // Match animation duration
    };

    return (
        <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* Abstract Background Element - Glass/Concrete feel */}
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '50%',
                height: '100%',
                background: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
                opacity: 0.8,
                zIndex: -1,
                // Abstract shape
                clipPath: 'polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '800px' }}>
                    <h1 style={{
                        fontSize: '4rem',
                        marginBottom: 'var(--spacing-md)',
                        color: 'var(--color-text)',
                        lineHeight: 1.1
                    }}>
                        Precision Intelligence for the <br />
                        <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Modern Enterprise.</span>
                    </h1>

                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--color-text-light)',
                        marginBottom: 'var(--spacing-lg)',
                        maxWidth: '600px',
                        lineHeight: 1.8
                    }}>
                        We apply advanced mathematical rigor and cutting-edge AI to optimize decision-making, drive efficiency, and generate measurable returns.
                    </p>

                    <div style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap' }}>
                        <button style={{
                            backgroundColor: 'var(--color-text)',
                            color: 'var(--color-bg)',
                            padding: '1rem 2rem',
                            fontSize: '0.9rem',
                            letterSpacing: '0.05em',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            border: 'none'
                        }}>
                            SCHEDULE A CONSULTATION
                            <ArrowRight size={16} />
                        </button>

                        <button
                            onClick={openModal}
                            style={{
                                border: '1px solid var(--color-text)',
                                backgroundColor: 'transparent',
                                padding: '1rem 2rem',
                                fontSize: '0.9rem',
                                letterSpacing: '0.05em',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)'; }}
                            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                        >
                            READ THE FOUNDER'S NOTE
                        </button>
                    </div>
                </div>
            </div>

            {/* Founder's Note Modal */}
            {isOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    zIndex: 9999,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    animation: isClosing ? 'fadeOut 0.6s forwards' : 'fadeIn 0.3s ease-out forwards'
                }}
                    onClick={closeModal}
                >
                    <style>
                        {`
              @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
              @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
              
              @keyframes unfold { 
                0% { transform: scaleY(0.01) scaleX(0); opacity: 0; }
                50% { transform: scaleY(0.01) scaleX(1); opacity: 1; }
                100% { transform: scaleY(1) scaleX(1); opacity: 1; }
              }
              
              @keyframes fold { 
                0% { transform: scaleY(1) scaleX(1); opacity: 1; }
                50% { transform: scaleY(0.01) scaleX(1); opacity: 1; }
                100% { transform: scaleY(0.01) scaleX(0); opacity: 0; }
              }
            `}
                    </style>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            backgroundColor: '#FFFFFF',
                            padding: 'var(--spacing-xl)',
                            maxWidth: '800px',
                            width: '90%',
                            position: 'relative',
                            boxShadow: '0 40px 80px -20px rgba(0, 0, 0, 0.15)',
                            border: '1px solid var(--color-border)',
                            transformOrigin: 'center center',
                            animation: isClosing
                                ? 'fold 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                                : 'unfold 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                        }}>
                        <button
                            onClick={closeModal}
                            style={{
                                position: 'absolute',
                                top: '1.5rem',
                                right: '1.5rem',
                                padding: '0.5rem',
                                cursor: 'pointer',
                                color: 'var(--color-text)',
                                border: '1px solid transparent',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.2s',
                                background: 'transparent'
                            }}
                            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#f0f0f0'; }}
                            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                        >
                            <X size={24} />
                        </button>

                        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-text-light)', marginBottom: '1rem' }}>
                                XY Intelligence
                            </div>
                            <h3 style={{
                                fontFamily: 'var(--font-serif)',
                                fontSize: '2.5rem',
                                color: 'var(--color-text)'
                            }}>
                                Founder's Note
                            </h3>
                        </div>

                        <div style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '1.35rem',
                            lineHeight: 1.8,
                            color: 'var(--color-text)',
                            textAlign: 'center',
                            fontStyle: 'italic',
                            maxWidth: '90%',
                            margin: '0 auto'
                        }}>
                            "At XY Intelligence, our consulting practice is fueled by a deeper quest. We believe the same intelligence required to solve the world’s oldest mathematical mysteries is the key to unlocking hidden value in your data. We merge the visionary tradition of Kerala mathematics with the speed of modern AI."
                        </div>

                        <div style={{ marginTop: 'var(--spacing-lg)', textAlign: 'center', borderTop: '1px solid var(--color-border)', paddingTop: 'var(--spacing-md)', width: '50%', margin: 'var(--spacing-lg) auto 0' }}>
                            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--color-text-light)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                                Rithiwk • Founder, XY
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Hero;
