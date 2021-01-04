import React, {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import styled from 'styled-components'
import Img from 'gatsby-image'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { FaRegLightbulb } from 'react-icons/fa'
import { graphql, useStaticQuery } from 'gatsby'

const Testimonials = () => {

    useEffect(() => {
        Aos.init({})
    }, [] )

    const data = useStaticQuery(graphql`
        query {
            allFile(filter: {ext: {regex: "/(jpg)|(jpeg)|(png)/"}, 
            name: {in: ["testimonial-1", "testimonial-2"]}}) {
            edges {
                node {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
                }
            }
            }
        }
    `)

    return (
        <div>
            <TestimonialsContainer>
                <TopLine
                    data-aos="fade-right"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                >
                    Testimonials
                </TopLine>
                <Description
                    data-aos="fade-right"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                >
                    What peeps are seing
                </Description>
                <ContentWrapper>
                    <ColoumnOne>
                        <Testimonial
                            data-aos="fade-right"
                            data-aos-delay="150"
                            data-aos-duration="1200"
                        >
                            <IoMdCheckmarkCircleOutline 
                                css={`
                                    color: #3fffa8;
                                    font-size: 2rem;
                                    margin-bottom: 1rem;
                                `}
                            />
                            <h3>Sean Micheals</h3>
                            <p>"My best Experience, wfnkjanfisdnfi vidsbfdi f ifndsijfh sadifj fnsdiuf sfsuidfnskdjf fnasipf "</p>
                        </Testimonial>
                        <Testimonial
                            data-aos="fade-right"
                            data-aos-delay="200"
                            data-aos-duration="1200"
                        >
                            <FaRegLightbulb 
                                css={`
                                    color: #f9b19b;
                                    font-size: 2rem;
                                    margin-bottom: 1rem;
                                `}
                            />
                            <h3>Lauren Micheals</h3>
                            <p>"My best Experience, wfnkjanfisdnfi vidsbfdi f ifndsijfh sadifj fnsdiuf sfsuidfnskdjf fnasipf "</p>
                        </Testimonial>
                    </ColoumnOne>
                    <ColoumnTwo
                        data-aos="fade-down"
                        data-aos-delay="200"
                        data-aos-duration="1200"
                    >
                    {data.allFile.edges.map((image, key) => (
                        <Images kex={key} fluid={image.node.childImageSharp.fluid} />
                    ))}
                    </ColoumnTwo>
                </ContentWrapper>
            </TestimonialsContainer>
        </div>
    )
}

export default Testimonials

const TestimonialsContainer = styled.div`
    width: 100%;
    background: #fcfcfc;
    color: #000;
    padding: 5rem calc((100vw - 1300px) / 2);
    height: 100%;
`

const TopLine = styled.p`
    color: #077bf1;
    font-size: 1rem;
    padding-left: 2rem;
    margin-bottom: 0.75rem;
`

const Description = styled.p`
    text-align: start;
    padding-left: 2rem;
    margin-bottom: 4rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: bold;
`

const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;

    @media screen and (max-width: 768px){
        grid-template-coloumns: 1fr;
    }
`

const ColoumnOne = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;

`

const Testimonial = styled.div`
    padding-top: 1rem;
    padding-right: 2rem;

    h3 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-style: italic;
    }

    p {
        color: #3b3b3b;

    }
`

const ColoumnTwo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    grid-gap: 10px;

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`

const Images = styled(Img)`
    border-radius: 10px;
    height: 100%;
`