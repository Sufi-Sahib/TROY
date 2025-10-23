import React from 'react';
import { SubtitleIcon, TelegramIcon, YoutubeIcon } from './Icons';

interface TeamMember {
    imgSrc: string;
    role: string;
    name: string;
}

const TeamMemberCard: React.FC<TeamMember> = ({ imgSrc, role, name }) => (
    <div className="group">
        <div className="rounded-2xl overflow-hidden mb-10">
            <img src={imgSrc} alt={name} className="w-full transition-transform duration-300 group-hover:scale-110" />
        </div>
        <div className="flex justify-between items-end">
            <div>
                <span className="block uppercase tracking-tight text-[#9e9e9e] mb-4">{role}</span>
                <h3 className="text-2xl font-semibold text-white tracking-tight">{name}</h3>
            </div>
            <div className="flex items-center gap-5 mb-1.5">
                <a href="#" className="text-white hover:text-[#64FFDA]"><TelegramIcon className="w-5 h-5"/></a>
                <a href="#" className="text-white hover:text-[#CD201F]"><YoutubeIcon className="w-5 h-5"/></a>
            </div>
        </div>
    </div>
);

export const Team: React.FC = () => {
    const teamMembers: TeamMember[] = [
        { imgSrc: 'https://picsum.photos/seed/team1/400/400', role: 'founder', name: 'Javier C. Emerson' },
        { imgSrc: 'https://picsum.photos/seed/team2/400/400', role: 'CEO', name: 'Diego H. Redmond' },
        { imgSrc: 'https://picsum.photos/seed/team3/400/400', role: 'Head advisor', name: 'Julian T. Beaumont' },
    ];

    return (
        <section className="py-24 md:py-32 bg-cover bg-top px-4" style={{backgroundImage: "url('https://picsum.photos/seed/team-bg/1920/1080')"}}>
            <div className="container max-w-[1330px] mx-auto">
                <div className="text-center mx-auto mb-20 max-w-xl wow fadeInUp" data-wow-delay=".2s">
                    <span className="flex items-center gap-4 text-white uppercase font-semibold mb-3 justify-center">
                        <SubtitleIcon className="text-[#64FFDA]" />
                        our advisors
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white">The Minds Behind Titan Royale</h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div className="wow fadeInUp" data-wow-delay={`${0.2 + index * 0.2}s`} key={member.name}>
                          <TeamMemberCard {...member} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};