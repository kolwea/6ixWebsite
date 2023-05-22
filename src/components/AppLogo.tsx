import React from "react";

export const AppLogo = ({ scale }: { scale?: number }) => {
    const xScale = scale ? 46 * scale : 46
    const yScale = scale ? 87 * scale : 87
    
    return (
        <svg width={xScale} height={yScale} viewBox="0 0 46 87" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_202_691)">
                <path d="M7 16.0409L14.4444 7.81143C19.6571 2.04896 28.725 2.10843 33.8617 7.93878V7.93878C38.0009 12.637 38.208 19.6167 34.3546 24.552L24.2245 37.5263M24.2245 37.5263L12.9217 52.976C9.38991 57.8035 9.36458 64.3552 12.8589 69.2099V69.2099C18.4165 76.931 29.9318 76.8587 35.3926 69.0689V69.0689C38.7534 64.2748 38.7291 57.8831 35.3317 53.1149L24.2245 37.5263Z" stroke="#ECECEC" strokeWidth="7" shapeRendering="crispEdges" />
            </g>
            <defs>
                <filter id="filter0_d_202_691" x="0.404419" y="0.0275269" width="44.9922" height="86.4287" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_202_691" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_202_691" result="shape" />
                </filter>
            </defs>
        </svg>
    )
} 