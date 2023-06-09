'use client'
import React from "react";

export const AppLogo = ({ scale }: { scale?: number }) => {
    const xScale = scale ? 78 * scale : 78
    const yScale = scale ? 97 * scale : 97
    
    return (
<svg width={xScale} height={yScale} viewBox="0 0 78 97" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_224_1447)">
<path d="M39.919 12.0071C46.0575 3.98176 59.1718 4.00108 65.2814 12.0445C68.8958 16.8031 68.8958 23.0858 65.2814 27.8444L52.6301 44.5001M52.6301 44.5001L39.9647 61.1745C36.3588 65.9218 36.3588 72.1897 39.9647 76.937C46.0719 84.9773 59.1884 84.9773 65.2955 76.937C68.9015 72.1897 68.9015 65.9218 65.2955 61.1745L52.6301 44.5001ZM38.0809 76.9929C31.9425 85.0183 18.8282 84.9989 12.7186 76.9555C9.10415 72.1969 9.10415 65.9142 12.7186 61.1556L25.3699 44.4999M25.3699 44.4999L38.0353 27.8255C41.6412 23.0782 41.6412 16.8103 38.0353 12.063C31.9281 4.02271 18.8116 4.02272 12.7045 12.063C9.09852 16.8103 9.09852 23.0782 12.7044 27.8255L25.3699 44.4999Z" stroke="#333333" strokeWidth="12" shapeRendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_d_224_1447" x="0" y="0" width="78" height="97" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_224_1447"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_224_1447" result="shape"/>
</filter>
</defs>
</svg>
    )
} 