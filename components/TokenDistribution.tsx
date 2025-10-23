import React from 'react';

const ProgressBar: React.FC<{ title: string; value: string; percentage: number }> = ({ title, value, percentage }) => (
    <div className="mb-8 last:mb-0">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg md:text-xl font-normal text-white">{title} <span className="text-[#64FFDA] font-semibold">{value}</span></h3>
        </div>
        <div className="bg-[#262626] h-1 w-full rounded-full">
            <div className="bg-[#64FFDA] h-1 rounded-full" style={{ width: `${percentage}%` }}></div>
        </div>
    </div>
);

const PieChart: React.FC = () => {
    return (
        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            <div 
                className="w-full h-full rounded-full animate-spin-slow"
                style={{
                    background: `conic-gradient(
                        #64FFDA 0%, 
                        #64FFDA 60%, 
                        #0A192F 60%, 
                        #0A192F 100%
                    )`
                }}
            >
            </div>
            <div className="absolute inset-[15%] bg-[#141414] rounded-full flex items-center justify-center shadow-2xl">
                 <div className="w-[85%] h-[85%] bg-[#020C1B] rounded-full flex items-center justify-center shadow-inner">
                    <img src="https://assets.codepen.io/383755/troy-icon-simple.svg" alt="Token Icon" className="w-1/2 h-1/2 object-contain"/>
                 </div>
            </div>
        </div>
    );
};


export const TokenDistribution: React.FC = () => (
    <section className="bg-gradient-to-b from-[#000] via-[#101010] to-[#020C1B] relative py-24 md:py-32 px-4">
        <div className="container max-w-[1330px] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="flex items-center justify-center wow fadeInLeft" data-wow-delay=".2s">
                   <PieChart />
                </div>
                <div className="wow fadeInRight" data-wow-delay=".2s">
                    <div className="mb-12 text-center lg:text-left">
                        <span className="text-base font-semibold uppercase text-[#64FFDA] mb-3 inline-block">Tokenomics</span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-white">Token Distribution</h2>
                    </div>
                    <div>
                        <ProgressBar title="Public Circulation -" value="533,333,333" percentage={60} />
                        <ProgressBar title="Owner Reserve -" value="355,555,555" percentage={40} />
                    </div>
                     <div className="mt-12 flex justify-center lg:justify-start gap-x-8 gap-y-4 flex-wrap">
                        <div className="flex items-center gap-3">
                            <span className="w-4 h-4 rounded-sm bg-[#64FFDA]"></span>
                            <span className="text-white font-medium">Public Circulation (60%)</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-4 h-4 rounded-sm bg-[#0A192F]"></span>
                            <span className="text-white font-medium">Owner Reserve (40%)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);