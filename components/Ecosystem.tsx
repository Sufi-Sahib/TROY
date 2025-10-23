import React from 'react';

const EcosystemCard: React.FC<{ iconUrl: string; title: string; description: string; }> = ({ iconUrl, title, description }) => (
    <div className="text-center backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-14 h-full">
        <div className="mb-12 transition-transform duration-300 hover:-translate-y-1.5">
            <img src={iconUrl} alt={`${title} icon`} className="mx-auto w-20 h-20" />
        </div>
        <div>
            <h3 className="text-2xl font-semibold text-white mb-5 tracking-tight">{title}</h3>
            <p className="text-gray-400 text-base leading-relaxed">
                {description}
            </p>
        </div>
    </div>
);

export const Ecosystem: React.FC = () => (
    <section className="py-24 md:py-32 px-4 bg-cover bg-center">
        <div className="container max-w-[1330px] mx-auto">
             <div className="text-center mb-20 wow fadeInUp" data-wow-delay=".2s">
                <span className="text-base font-semibold uppercase text-[#64FFDA] mb-3 inline-block">why choose us</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-white">The Titan Royale Ecosystem</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="wow fadeInUp" data-wow-delay=".2s">
                    <EcosystemCard
                        iconUrl="https://assets.codepen.io/383755/secure-icon.svg"
                        title="Audited & Secure"
                        description="The TROY smart contract is fully audited, and our liquidity is locked to protect our holders. Your investment is secure with us."
                    />
                </div>
                <div className="wow fadeInUp" data-wow-delay=".4s">
                    <EcosystemCard
                        iconUrl="https://assets.codepen.io/383755/decentralized-icon.svg"
                        title="True Decentralization"
                        description="TROY is a community-driven project. Token holders can vote on key decisions, shaping the future of the entire ecosystem."
                    />
                </div>
                <div className="wow fadeInUp" data-wow-delay=".6s">
                    <EcosystemCard
                        iconUrl="https://assets.codepen.io/383755/speed-icon.svg"
                        title="Built for Speed on BSC"
                        description="Leveraging the Binance Smart Chain, TROY transactions are fast, efficient, and low-cost, perfect for gaming and DeFi applications."
                    />
                </div>
            </div>
        </div>
    </section>
);