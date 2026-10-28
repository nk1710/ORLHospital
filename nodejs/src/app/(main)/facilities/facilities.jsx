'use client'

import { useState } from 'react'

export default function FacilityImage({
    src,
    alt,
    className,
    fallback = "/images/dhirendra kushwah.webp",
    ...props
}) {
    const [imgSrc, setImgSrc] = useState(src)

    return (
        <img
            src={imgSrc || fallback}
            alt={alt || "ENT Care Facilities - Dr. (Prof.) Dhirendra Singh Kushwah"}
            className={className}
            onError={() => {
                if (imgSrc !== fallback) {
                    setImgSrc(fallback)
                }
            }}
            loading="lazy"
            {...props}
        />
    )
}
