import React, {useEffect} from 'react'
import styled from 'styled-components'
import Aos from 'aos'
import "aos/dist/aos.css"
import {StatsData} from '../data/StatsData'

const Stats = () => {

    useEffect(() => {
        Aos.init({})
    }, [] )

    return (
        <StatsContainer>
            <Heading
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
            >Why choose us?</Heading>
            <Wrapper>
                {StatsData.map((item, index) => {
                    return (
                        <StatsBox key={index}
                            data-aos="fade-right"
                            data-aos-delay="150"
                            data-aos-duration="1000"
                        >
                            <Icon>{item.icon}</Icon>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                        </StatsBox>
                    )
                })}
            </Wrapper>
        </StatsContainer>
    )
}


export default Stats

const StatsContainer = styled.div`
    width: 100%;
    background: #fff;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem calc((100vw - 1300px) / 2);
`
const Heading = styled.h1`
    text-align: start;
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin-bottom: 3rem;
    padding: 0 2rem;
`
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;

    @media screen and (max-width: 768px) {
        grid-template-coloumns: 1fr;
    }

    @media screen and (max-width: 500px) {
        grid-template-coloumns: 1fr;
    }
`

const StatsBox = styled.div`
    height: 100%;
    width: 100%;
    padding: 2rem;
`

const Icon = styled.div`
    font-size: 3rem;
    margin-bottom: 1rem;
`
const Title = styled.p`
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    margin-bottom: 0.5rem;
`

const Description = styled.p``