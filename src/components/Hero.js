import React, {useEffect} from 'react'
import styled from 'styled-components'
import Aos from 'aos'
import "aos/dist/aos.css"
import { Button } from './Button'
import Video from '../assets/videos/travel.mp4'

const Hero = () => {

    useEffect(() => {
        Aos.init({})
    }, [] )

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src={Video} type="video/mp4" autoPlay muted loop playsInline />
            </HeroBg>
            <HeroContent>
                <HeroItem>
                    <HeroH1
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    >Fantastic Destinations</HeroH1>
                    <HeroP
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    >Life your dream</HeroP>
                    <Button 
                    primary="true" 
                    big="true" 
                    round="true" 
                    to="/trips"
                    data-aos="fade-in"
                    data-aos-duration="350"
                    data-aos-delay="1000"
                    >Travel now</Button>
                </HeroItem>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    color: #ffffff;
    align-items: center;
    height: 100vh;
    padding: 0 1rem;
    position: relative;
    margin-top: -80px;

    ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        height: 100%;
        width: 100%;
        background: 
            linear-gradient(
                180deg, 
                rgba(0,0,0,0.2) 0%,
                rgba(0,0,0,0.3) 100%
                ), 
            linear-gradient(
                180deg, 
                rgba(0,0,0,0.2) 0%, 
                transparent 100%
            )
        ;
    }
`

const HeroBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`
const HeroContent = styled.div`
    z-index: 3;
    height: calc(100vh-80px);
    max-height:100%;
    padding: 0rem calc((100vw - 1300px) / 2);
`
const HeroItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    max-height: 100%;
    padding: 0;
    color: #ffffff;
    line-height: 1.1;
    font-weight: bold;
`
const HeroH1 = styled.h1`
    font-size: clamp(1.5rem, 6vw, 4rem);
    margin-bottom: 1.5rem;
    letter-spacing: 0.4vw;
    padding: 0 1rem;
`
const HeroP = styled.p`
    font-size: clamp(1rem, 3vw, 3rem);
    margin-bottom: 2rem;
    font-weight: 400;
`