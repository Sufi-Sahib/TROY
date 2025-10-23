import React from 'react';

export const LogoIcon: React.FC = () => (
    <svg width="115" height="40" viewBox="0 0 115 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 0 L 37.32 10 L 37.32 30 L 20 40 L 2.68 30 L 2.68 10 Z" stroke="#64FFDA" strokeWidth="2" fill="none" />
        <path d="M14 13 H 26 V 16 H 21.5 V 28 H 18.5 V 16 H 14 V 13 Z" fill="#64FFDA" />
        <text x="48" y="27" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="600" fill="white">TROY</text>
    </svg>
);


export const RightArrowIcon: React.FC = () => (
    <svg width="8" height="22" viewBox="0 0 8 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M2 0H0V4V18V22H2V16.25L7.13991 11.7526C7.59524 11.3542 7.59524 10.6458 7.13991 10.2474L2 5.75V0Z" fill="currentColor" />
    </svg>
);

export const SubtitleIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M2 0H0V1V15V16H2V13.25L7.13991 8.75258C7.59524 8.35417 7.59524 7.64584 7.13991 7.24742L2 2.75V0Z" fill="currentColor"></path>
    </svg>
);

export const UpArrowIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
    </svg>
);

export const TelegramIcon: React.FC<{className?: string}> = ({className}) => (
     <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.25 0.25C12.5 0.25 16 3.75 16 8C16 12.2812 12.5 15.75 8.25 15.75C3.96875 15.75 0.5 12.2812 0.5 8C0.5 3.75 3.96875 0.25 8.25 0.25ZM11.8125 5.53125C11.8438 5.4375 11.8438 5.34375 11.8125 5.21875C11.8125 5.15625 11.75 5.0625 11.7188 5.03125C11.625 4.9375 11.4688 4.9375 11.4062 4.9375C11.125 4.9375 10.6562 5.09375 8.5 6C7.75 6.3125 6.25 6.9375 4 7.9375C3.625 8.09375 3.4375 8.21875 3.40625 8.375C3.375 8.625 3.78125 8.71875 4.25 8.875C4.65625 9 5.1875 9.15625 5.46875 9.15625C5.71875 9.15625 6 9.0625 6.3125 8.84375C8.40625 7.40625 9.5 6.6875 9.5625 6.6875C9.625 6.6875 9.6875 6.65625 9.71875 6.6875C9.78125 6.75 9.78125 6.8125 9.75 6.84375C9.71875 7 7.75 8.8125 7.625 8.9375C7.1875 9.375 6.6875 9.65625 7.46875 10.1562C8.125 10.5938 8.5 10.875 9.1875 11.3125C9.625 11.5938 9.96875 11.9375 10.4062 11.9062C10.625 11.875 10.8438 11.6875 10.9375 11.0938C11.2188 9.75 11.7188 6.75 11.8125 5.53125Z" fill="currentColor"></path></svg>
);

export const YoutubeIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.1562 1.90625C17.5312 3.21875 17.5312 6.03125 17.5312 6.03125C17.5312 6.03125 17.5312 8.8125 17.1562 10.1562C16.9688 10.9062 16.375 11.4688 15.6562 11.6562C14.3125 12 9 12 9 12C9 12 3.65625 12 2.3125 11.6562C1.59375 11.4688 1 10.9062 0.8125 10.1562C0.4375 8.8125 0.4375 6.03125 0.4375 6.03125C0.4375 6.03125 0.4375 3.21875 0.8125 1.90625C1 1.15625 1.59375 0.5625 2.3125 0.375C3.65625 0 9 0 9 0C9 0 14.3125 0 15.6562 0.375C16.375 0.5625 16.9688 1.15625 17.1562 1.90625ZM7.25 8.5625L11.6875 6.03125L7.25 3.5V8.5625Z" fill="currentColor"></path></svg>
);

export const FacebookIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
    </svg>
);

export const TwitterIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
    </svg>
);

export const LinkedinIcon: React.FC<{className?: string}> = ({className}) => (
     <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
    </svg>
);