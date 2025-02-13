import React from 'react'

export default function TestimonialItem({ item, containerClassName }) {
    return (
        <div className={`relative px-14 pb-14 pt-11 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-screen after:bg-[#0C1838] after:content-[''] max-md:px-0 max-md:pt-11 after:max-md:-right-4 ${containerClassName}`}>
            <blockquote className="h6 mb-8 text-[#EAEDFF]">{item.comment}</blockquote>

            <div className="flex items-center max-xl:-mr-5">
                <div className="mr-4 size-20 shrink-0 rounded-full border-2 border-[#0C1838] p-1.5">
                    <img
                        src={item.avatarUrl}
                        alt={item.name}
                        className='size-full object-cover'
                    />
                </div>
                <div className="">
                    <h4 className='body-2 mb-0.5 text-[#2EF2FF]'>{item.name}</h4>
                    <p className="small-compact uppercase text-[#334679]">{item.role}</p>
                </div>
            </div>
        </div>
    )
}
