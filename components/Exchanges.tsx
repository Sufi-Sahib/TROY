import React, { useState } from 'react';
import { SubtitleIcon } from './Icons';

const FaqItem: React.FC<{ title: string; content: React.ReactNode; isOpen: boolean; onClick: () => void }> = ({ title, content, isOpen, onClick }) => (
    <div className="border-b border-white/10 last:border-b-0">
        <h2>
            <button
                type="button"
                className="flex items-center justify-between w-full py-8 text-left text-xl font-semibold text-white"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span className="pl-16 relative">
                    <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 transition-all duration-300 ${isOpen ? 'bg-[#64FFDA]' : ''}`}></span>
                     <span className={`absolute left-1 top-[calc(50%-19px)] w-10 h-10 rounded-full flex items-center justify-center bg-[#0A192F] shadow-[inset_0_3px_6px_0_rgba(100,255,218,0.2),_0_16px_24px_0_rgba(0,0,0,0.25),_0_4px_4px_0_rgba(0,0,0,0.25)] transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                     </span>
                    {title}
                </span>
            </button>
        </h2>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
            <div className="pl-16 pb-10 text-gray-400">
                {content}
            </div>
        </div>
    </div>
);


export const Exchanges: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        { title: "What is Titan Royale (TROY)?", content: "Titan Royale (TROY) is a utility-driven digital token on the Binance Smart Chain (BSC), powering a diverse ecosystem of DeFi applications and online gaming. It features a fixed supply to prevent inflation and focuses on real-world utility." },
        { title: "What is the total supply of TROY tokens?", content: "The maximum and total supply of TROY is fixed at 888,888,888 tokens. No new tokens can ever be created, making TROY a deflationary asset." },
        { title: "What can I use TROY tokens for?", content: <div className="space-y-2"> <p>TROY has multiple uses:</p> <ul className="list-disc pl-5 space-y-1"><li>Staking & Insurance: Earn passive income and access our 'Stake-to-Insure' program.</li><li>Collateral for Loans: Borrow TROY against other BSC assets.</li><li>Gaming Currency: Use TROY for betting, in-game items, and winnings.</li><li>Governance: Vote on key project decisions.</li></ul></div> },
        { title: "How are the tokens distributed?", content: <div className="space-y-2"><p>The token distribution is transparent:</p><ul className="list-disc pl-5 space-y-1"><li>60% (533,333,333 TROY): Public Circulation for liquidity, staking, and community incentives.</li><li>40% (355,555,555 TROY): Owner Reserve for development and partnerships.</li></ul></div>},
        { title: "Where can I trade TROY?", content: "Initially, TROY will be listed on PancakeSwap. We plan to secure listings on major centralized exchanges like KuCoin and Binance as we grow." },
        { title: "How is my investment secured?", content: "The TROY smart contract will be audited by a reputable third-party firm. A significant portion of initial liquidity will be locked to protect investors." },
        { title: "What are the roadmap goals?", content: "Key phases include launching our native staking platform, the 'Stake-to-Insure' and lending protocols, and developing our own DEX to be the central hub of the TROY ecosystem." },
    ];
    
    return (
        <section className="py-24 md:py-32 px-4" id="faq">
            <div className="container max-w-[1330px] mx-auto">
                <div className="text-center mx-auto mb-20 max-w-2xl wow fadeInUp" data-wow-delay=".2s">
                     <span className="flex items-center gap-4 text-white uppercase font-semibold mb-3 justify-center">
                        <SubtitleIcon className="text-[#64FFDA]" />
                        frequently asked questions
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white">Let's answer your questions</h2>
                </div>

                <div className="max-w-4xl mx-auto wow fadeInUp" data-wow-delay=".4s">
                    {faqData.map((item, index) => (
                        <FaqItem
                            key={index}
                            title={item.title}
                            content={item.content}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>

                <div className="mt-24 text-center wow fadeInUp" data-wow-delay=".2s">
                     <div className="mb-8">
                        <h3 className="text-3xl font-bold text-white">Find TROY on These Exchanges</h3>
                        <p className="mt-4 text-gray-400">Our token is available on multiple exchanges.</p>
                    </div>
                    <div className="flex items-center justify-center flex-wrap gap-5">
                        <a href="#" className="relative group transition-transform duration-300 hover:-translate-y-1.5 w-[88px] h-[88px] bg-[#0A192F] rounded-full flex items-center justify-center border-2 border-transparent hover:border-[#64FFDA]">
                           <img src="https://picsum.photos/seed/exchange1/32/32" alt="icon" />
                        </a>
                        <a href="#" className="relative group transition-transform duration-300 hover:-translate-y-1.5 w-[88px] h-[88px] bg-[#0A192F] rounded-full flex items-center justify-center border-2 border-transparent hover:border-[#64FFDA]">
                           <img src="https://picsum.photos/seed/exchange2/32/32" alt="icon" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};