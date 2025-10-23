import React from 'react';
import { SubtitleIcon } from './Icons';

const roadmapData = [
  { date: 'Phase 1: Foundation (Q4 2025)', items: ['Token Creation & Audit', 'Initial DEX Listing'] },
  { date: 'Phase 2: Growth (Q1 2026)', items: ['Community Launch', 'Staking Platform Live'] },
  { date: 'Phase 3: Integration (Q2 2026)', items: ['Stake-to-Insure Protocol', 'Collateralized Lending'] },
  { date: 'Phase 4: Expansion (Q3 2026)', items: ['Governance Launch', 'Strategic Partnerships'] },
  { date: 'Phase 5: Native DEX (Q4 2026)', items: ['Titan Royale DEX Launch', 'Yield Farming Programs'] },
];

export const Roadmap: React.FC = () => (
    <section className="py-24 md:py-32 relative overflow-hidden" id="roadmap">
        <div className="container max-w-[1330px] mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="relative h-96 lg:h-full flex items-center justify-center lg:sticky lg:top-24 wow fadeInLeft" data-wow-delay=".2s">
                     <div className="relative w-full max-w-md text-center">
                        <span className="flex items-center gap-4 text-white uppercase font-semibold mb-3 justify-center lg:justify-start">
                            <SubtitleIcon className="text-[#64FFDA]" />
                            roadmap
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center lg:text-left">Our Roadmap to a Decentralized Future.</h2>
                        <img src="https://assets.codepen.io/383755/crypto-plexus-2.png" alt="Roadmap 3D Object" className="w-full relative z-10 alltuchtopdown" />
                     </div>
                </div>

                <div>
                    <div className="relative">
                        <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-1 bg-[#262626] -translate-x-1/2">
                            <div className="absolute top-0 left-0 w-full h-2/5 bg-gradient-to-b from-[#64FFDA] to-[#0A192F]"></div>
                        </div>

                        <div className="space-y-16">
                           {roadmapData.map((item, index) => {
                                const isOddDesktop = index % 2 !== 0;
                                return (
                                    <div key={index} className={`relative flex items-center lg:block wow fadeInUp`} data-wow-delay={`${0.3 + index * 0.2}s`}>
                                        <div className="hidden lg:block absolute left-1/2 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#64FFDA] ring-4 ring-[#0C0C0C]"></div>
                                        <div className="block lg:hidden absolute left-0 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#64FFDA] ring-4 ring-[#0C0C0C]"></div>

                                        <div className={`w-full lg:w-1/2 ${isOddDesktop ? 'lg:ml-auto lg:pl-12 lg:text-left' : 'lg:pr-12 lg:text-right'} pl-10 lg:pl-0`}>
                                              <p className="text-sm font-semibold uppercase text-[#64FFDA] mb-2">{item.date}</p>
                                              {item.items.map((text, i) => (
                                                  <h4 key={i} className="text-xl font-bold text-white leading-relaxed">{text}</h4>
                                              ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);