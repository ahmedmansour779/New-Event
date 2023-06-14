import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { IconWrapper, Image, ImageWrapper, OurProgramsWrapper, OurProgramsWrapperup } from './style'

export default function OurProgramsComponent({
    imag,
    alt,
    time,
    roomNumper,
    title,
    name,
    description }) {
    return (
        <OurProgramsWrapper>
            <ImageWrapper>
                <Image src={imag} alt={alt} />
            </ImageWrapper>
            <OurProgramsWrapperup>
                <IconWrapper>
                    <div>
                        <FontAwesomeIcon
                            size='xs'
                            icon={faClock} /> {time}
                    </div>
                    <div>
                        <FontAwesomeIcon
                            size='xs'
                            icon={faMapMarkerAlt} /> {roomNumper}
                    </div>
                </IconWrapper>
                <h2>{name}</h2>
                <span>{title}</span>
                <p>{description}</p>
            </OurProgramsWrapperup>
        </OurProgramsWrapper>
    )
}
