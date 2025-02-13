import React from 'react'
import { Marker } from './Marker';



export default function Button({ children, href, icon, containerClassname, onClick, markerFill }) {
    const Inner = () => (
        <>
            <span className="relative flex flex-row-reverse items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
                <span className="absolute -right-[5.5px]">
                    <Marker markerFill={markerFill} />
                </span>

                {icon && (
                    <img
                        src={icon}
                        alt="circle"
                        className="size-10 mr-5 object-contain z-10"
                    />
                )}

                <span className="relative z-2 font-poppins base-bold text-[#2EF2FF] uppercase">
                    {children}
                </span>
            </span>

            <span className="glow-before glow-after" />
        </>
    );


    return href ? (
        <a href={href} className={`relative p-0.5 g5 rounded-2xl shadow-500 group ${containerClassname}`}>
            <Inner />
        </a>
    ) : (
        <button onClick={onClick} href={href} className={`relative p-0.5 g5 rounded-2xl shadow-500 group ${containerClassname}`}>
            <Inner />
        </button>
    )
}
