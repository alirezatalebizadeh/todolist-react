import React from 'react'
import { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";


export default function FaqItem({ item, index }) {
    const [activeId, setActiveId] = useState(null);
    const active = activeId === item.id;

    return (
        <div className='relative z-2 mb-16'>
            <div className="group relative flex cursor-pointer items-start justify-between gap-5 px-7"
                onClick={() => {
                    setActiveId(activeId === item.id ? null : item.id);
                }}
            >
                <div className={`faq-ico relative flex size-12 items-center justify-center rounded-full border-2 border-[#0C1838] shadow-400 
                                 transition-all duration-500 group-hover:border-[#1959AD] ${active && "before:bg-[#2EF2FF] after:rotate-0 after:bg-[#2EF2FF]"} g4 size-11/12 rounded-full shadow-300`}>
                    {!active ? (<FaPlus size={18} />) : (<FaMinus size={18} />)}
                </div>
                <div className="flex-1">
                    <div className="small-compact mb-1.5 text-[#C8EA80] max-lg:hidden">
                        {index < 9 ? "0" : ""}
                        {index+1}
                    </div>
                    <div className={`h6 text-[#EAEDFF] transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center ${active && "max-lg:text-[#2EF2FF]"}`}>
                        {item.question}
                    </div>
                </div>

            </div>

            {activeId === item.id && (
                <div className="body-3 px-7 py-3.5">{item.answer}</div>
            )}
            <div
                className={`g5 -bottom-7 -top-7 left-0 right-0 -z-1 rounded-3xl opacity-0 transition-opacity duration-500 absolute ${active && "opacity-100"}`}>
                <div className="g4 absolute inset-0.5 -z-1 rounded-3xl" />
                <div className="absolute left-8 top-0 h-0.5 w-40 bg-[#2EF2FF]" />
            </div>
        </div>
    )
}
