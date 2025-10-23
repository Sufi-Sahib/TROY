import React, { useState, useEffect } from 'react';
import { RightArrowIcon } from './Icons';

const CountdownUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center text-center">
        <span className="w-24 h-24 md:w-20 md:h-20 flex items-center justify-center bg-gradient-to-b from-[#0A192F] to-[#020c1b] rounded-full border border-[#64FFDA]/20 text-4xl md:text-3xl font-semibold text-white mb-2">{value.toString().padStart(2, '0')}</span>
        <span className="text-base text-gray-400 capitalize">{label}</span>
    </div>
);

const SaleInfoRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <li className="flex items-center justify-between gap-1 text-white uppercase text-base font-semibold border-b border-white/10 pb-4 mb-4">
        <span className="font-normal text-[#CCD6F6]">{label}</span>
        {value}
    </li>
);


const PurchaseTokenIcon: React.FC = () => (
     <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.05" fillRule="evenodd" clipRule="evenodd" d="M31 2H11C8.87497 2 6.92196 2.73648 5.38228 3.96813L14.6712 13.2571C16.3951 11.8464 18.5987 11 21 11C23.4013 11 25.6048 11.8464 27.3287 13.257L36.6177 3.96809C35.078 2.73647 33.125 2 31 2ZM25.9056 14.6801C24.5509 13.6271 22.8487 13 21 13C19.1513 13 17.449 13.6271 16.0943 14.6802L21 19.5858L25.9056 14.6801ZM13.257 14.6713L3.96807 5.38235C2.73646 6.92201 2 8.875 2 11V31C2 33.125 2.73647 35.078 3.96809 36.6177L13.257 27.3287C11.8464 25.6048 11 23.4013 11 21C11 18.5987 11.8464 16.3952 13.257 14.6713ZM14.6801 25.9056C13.6271 24.5509 13 22.8487 13 21C13 19.1513 13.6271 17.4491 14.6801 16.0944L19.5857 21L14.6801 25.9056ZM14.6713 28.7429L5.3823 38.0319C6.92197 39.2635 8.87498 40 11 40H31C33.125 40 35.078 39.2635 36.6176 38.0319L27.3287 28.743C25.6048 30.1536 23.4013 31 21 31C18.5987 31 16.3951 30.1536 14.6713 28.7429ZM25.9056 27.3199C24.5509 28.3729 22.8487 29 21 29C19.1513 29 17.449 28.3729 16.0943 27.3198L21 22.4142L25.9056 27.3199ZM27.3198 25.9057L22.4142 21L27.3198 16.0943C28.3729 17.449 29 19.1513 29 21C29 22.8487 28.3729 24.551 27.3198 25.9057ZM28.7429 27.3288C30.1536 25.6049 31 23.4013 31 21C31 18.5987 30.1536 16.3951 28.7429 14.6713L38.0319 5.3823C39.2635 6.92197 40 8.87498 40 11V31C40 33.125 39.2635 35.078 38.0319 36.6177L28.7429 27.3288ZM11 0C4.92487 0 0 4.92487 0 11V31C0 37.0751 4.92487 42 11 42H31C37.0751 42 42 37.0751 42 31V11C42 4.92487 37.0751 0 31 0H11Z" fill="currentColor" />
        <path d="M31.8345 9.15516C32.6312 8.68648 33.6623 9.34263 33.4749 10.28L30.1004 30.5269C30.0066 31.2768 29.2099 31.6986 28.5537 31.4174L22.7421 28.9334L19.7426 32.5891C19.0864 33.3858 17.7741 32.964 17.7741 31.8392V28.0429L29.0224 14.3106C29.2568 14.0294 28.8818 13.7013 28.6475 13.9357L15.1964 25.7932L10.1815 23.6842C9.33791 23.3561 9.24418 22.1376 10.0878 21.6689L31.8345 9.15516Z" fill="currentColor" />
    </svg>
);


export const TokenSale: React.FC = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date("2026-12-31T23:59:59") - +new Date();
        let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });
    
    const raised = 533333333;
    const total = 888888888;
    const progress = (raised / total) * 100;


    return (
        <section className="pb-24 md:pb-32 px-4">
            <div className="container max-w-[1330px] mx-auto">
                 <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="bg-[#0A192F] rounded-2xl p-6 sm:p-10 lg:p-14 wow fadeInLeft" data-wow-delay=".2s">
                        <h3 className="text-3xl font-semibold mb-8 text-white">TROY Token Sale</h3>
                        <div className="mb-12">
                             <div className="flex justify-between text-white uppercase font-semibold text-base mb-5">
                                <li><span>Raised</span> {raised.toLocaleString()}</li>
                                <li><span>Total Coin</span> {total.toLocaleString()}</li>
                            </div>
                            <div className="w-full bg-[#262626] h-1 relative rounded-full">
                                <div className="bg-[#64FFDA] h-1 absolute rounded-full" style={{ width: `${progress}%` }}>
                                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-3 bg-[#64FFDA] rounded-full"></span>
                                </div>
                            </div>
                            <ul className="flex justify-around mt-6 text-center">
                                <li className="uppercase text-[#64FFDA] font-semibold relative before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:-top-6 before:w-0.5 before:h-4 before:bg-[#262626]">
                                    <span>Soft Cap</span> 533,333,333
                                </li>
                                <li className="uppercase text-[#64FFDA] font-semibold relative before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:-top-6 before:w-0.5 before:h-4 before:bg-[#262626]">
                                    <span>Hard Cap</span> 75,000,000
                                </li>
                            </ul>
                        </div>
                        <div className="mb-12">
                            <h5 className="text-xl font-semibold text-center mb-10 text-white">Troy sale ends in:</h5>
                            <div className="flex justify-center gap-5">
                                <CountdownUnit value={timeLeft.days} label="Days" />
                                <CountdownUnit value={timeLeft.hours} label="Hours" />
                                <CountdownUnit value={timeLeft.minutes} label="Minute" />
                                <CountdownUnit value={timeLeft.seconds} label="Second" />
                            </div>
                        </div>
                         <div className="text-center">
                              <a href="#contact" className="tg-btn-two tg-btn inline-flex items-center">
                                <RightArrowIcon />
                                <span className="flex items-center gap-2.5">
                                   <PurchaseTokenIcon />
                                    register & buy token
                                </span>
                            </a>
                        </div>
                    </div>
                    {/* Right Column */}
                     <div className="bg-[#0A192F] rounded-2xl p-6 sm:p-10 lg:p-14 wow fadeInRight" data-wow-delay=".2s">
                        <h2 className="text-3xl font-semibold text-white mb-12">Sales information</h2>
                        <ul className="list-wrap">
                           <SaleInfoRow label="Public sale starts" value="December 01, 2025" />
                           <SaleInfoRow label="Sale ends" value="December 31, 2026" />
                           <SaleInfoRow label="Token supply" value="888,888,888" />
                           <SaleInfoRow label="T. allocated for ico" value="533,333,333" />
                           <SaleInfoRow label="Hard cap" value="533,333,333" />
                           <SaleInfoRow label="Soft cap" value="75,000,000" />
                           <SaleInfoRow label="Token value" value="1 BNB = 5000 TROY" />
                           <li className="flex items-center justify-between gap-1 text-[#64FFDA] uppercase text-base font-semibold">
                                <span className="font-normal text-[#CCD6F6]">Accepted</span>
                                BNB, USDT.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};