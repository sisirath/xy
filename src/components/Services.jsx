import React from 'react';
import { BarChart2, Cpu, Zap } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
    <div style={{ padding: 'var(--spacing-md)', borderTop: '1px solid var(--color-border)' }}>
        <div style={{ marginBottom: 'var(--spacing-md)', color: 'var(--color-text)' }}>
            <Icon size={32} strokeWidth={1} />
        </div>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: 'var(--spacing-sm)' }}>
            {title}
        </h3>
        <p style={{ color: 'var(--color-text-light)', fontSize: '1rem', lineHeight: 1.6 }}>
            {description}
        </p>
    </div>
);

const Services = () => {
    return (
        <section id="services" className="section">
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
                    <ServiceCard
                        icon={BarChart2}
                        title="Strategic Analytics"
                        description="Transform raw data into predictive insights that guide high-stakes decision-making."
                    />
                    <ServiceCard
                        icon={Cpu}
                        title="AI Implementation"
                        description="Deploying custom machine learning architectures tailored to your operational scale."
                    />
                    <ServiceCard
                        icon={Zap} // Using Zap as abstract for algorithmic speed/optimization
                        title="Algorithmic Optimization"
                        description="Refining existing processes through the same mathematical precision used in theoretical research."
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;
