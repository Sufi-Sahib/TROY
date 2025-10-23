import React from 'react';
import { SubtitleIcon, RightArrowIcon } from './Icons';

const ButtonIcon: React.FC = () => (
     <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.05" fillRule="evenodd" clipRule="evenodd" d="M31 2H11C8.87497 2 6.92196 2.73648 5.38228 3.96813L14.6712 13.2571C16.3951 11.8464 18.5987 11 21 11C23.4013 11 25.6048 11.8464 27.3287 13.257L36.6177 3.96809C35.078 2.73647 33.125 2 31 2ZM25.9056 14.6801C24.5509 13.6271 22.8487 13 21 13C19.1513 13 17.449 13.6271 16.0943 14.6802L21 19.5858L25.9056 14.6801ZM13.257 14.6713L3.96807 5.38235C2.73646 6.92201 2 8.875 2 11V31C2 33.125 2.73647 35.078 3.96809 36.6177L13.257 27.3287C11.8464 25.6048 11 23.4013 11 21C11 18.5987 11.8464 16.3952 13.257 14.6713ZM14.6801 25.9056C13.6271 24.5509 13 22.8487 13 21C13 19.1513 13.6271 17.4491 14.6801 16.0944L19.5857 21L14.6801 25.9056ZM14.6713 28.7429L5.3823 38.0319C6.92197 39.2635 8.87498 40 11 40H31C33.125 40 35.078 39.2635 36.6176 38.0319L27.3287 28.743C25.6048 30.1536 23.4013 31 21 31C18.5987 31 16.3951 30.1536 14.6713 28.7429ZM25.9056 27.3199C24.5509 28.3729 22.8487 29 21 29C19.1513 29 17.449 28.3729 16.0943 27.3198L21 22.4142L25.9056 27.3199ZM27.3198 25.9057L22.4142 21L27.3198 16.0943C28.3729 17.449 29 19.1513 29 21C29 22.8487 28.3729 24.551 27.3198 25.9057ZM28.7429 27.3288C30.1536 25.6049 31 23.4013 31 21C31 18.5987 30.1536 16.3951 28.7429 14.6713L38.0319 5.3823C39.2635 6.92197 40 8.87498 40 11V31C40 33.125 39.2635 35.078 38.0319 36.6177L28.7429 27.3288ZM11 0C4.92487 0 0 4.92487 0 11V31C0 37.0751 4.92487 42 11 42H31C37.0751 42 42 37.0751 42 31V11C42 4.92487 37.0751 0 31 0H11Z" fill="currentColor" />
        <path d="M31.8345 9.15516C32.6312 8.68648 33.6623 9.34263 33.4749 10.28L30.1004 30.5269C30.0066 31.2768 29.2099 31.6986 28.5537 31.4174L22.7421 28.9334L19.7426 32.5891C19.0864 33.3858 17.7741 32.964 17.7741 31.8392V28.0429L29.0224 14.3106C29.2568 14.0294 28.8818 13.7013 28.6475 13.9357L15.1964 25.7932L10.1815 23.6842C9.33791 23.3561 9.24418 22.1376 10.0878 21.6689L31.8345 9.15516Z" fill="currentColor" />
    </svg>
);


export const Community: React.FC = () => (
    <section className="px-4 pb-24 md:pb-32 overflow-hidden" id="contact">
        <div className="container max-w-[1330px] mx-auto">
             <div className="bg-gradient-to-b from-[#0A192F] to-[#020C1B] rounded-2xl p-8 sm:p-16 lg:p-28 relative wow fadeInUp" data-wow-delay=".2s">
                 <img src="https://picsum.photos/seed/shape1/270/270" alt="shape" className="absolute -left-20 top-20 hidden lg:block alltuchtopdown -z-10" />
                 <img src="https://picsum.photos/seed/shape2/256/270" alt="shape" className="absolute -right-12 bottom-20 hidden lg:block -z-10" />
                <div className="max-w-2xl mx-auto text-center">
                    <div className="mb-12">
                         <span className="flex items-center gap-4 text-white uppercase font-semibold mb-3 justify-center">
                            <SubtitleIcon className="text-[#64FFDA]"/>
                            get in touch
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-white">Join the Titan Royale Community!</h2>
                    </div>
                    <form className="space-y-8 text-left">
                        <div className="grid sm:grid-cols-2 gap-8">
                            <div>
                                <label htmlFor="name" className="block text-base text-white font-semibold mb-4">Full name</label>
                                <input type="text" id="name" placeholder="Enter you name" className="w-full h-14 bg-white/5 border border-transparent focus:border-[#64FFDA] rounded-lg px-5 text-white transition-colors duration-300 outline-none" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-base text-white font-semibold mb-4">Email address</label>
                                <input type="email" id="email" placeholder="Enter you email" className="w-full h-14 bg-white/5 border border-transparent focus:border-[#64FFDA] rounded-lg px-5 text-white transition-colors duration-300 outline-none" />
                            </div>
                        </div>
                        <div>
                             <label htmlFor="message" className="block text-base text-white font-semibold mb-4">Message</label>
                             <textarea id="message" placeholder="Enter you message....." className="w-full h-40 bg-white/5 border border-transparent focus:border-[#64FFDA] rounded-lg p-5 text-white transition-colors duration-300 outline-none resize-none"></textarea>
                        </div>
                        <div className="text-center">
                             <button type="submit" className="tg-btn tg-btn-two inline-flex items-center">
                                <RightArrowIcon />
                                <span className="flex items-center gap-2.5">
                                   <ButtonIcon />
                                    submit now
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
);