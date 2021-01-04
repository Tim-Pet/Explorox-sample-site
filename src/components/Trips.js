import React, {useEffect} from 'react'
import styled from 'styled-components'
import Aos from 'aos'
import "aos/dist/aos.css"
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import {Button} from './button'
import {ImLocation} from 'react-icons/im'

const Trips = ({heading}) => {

    useEffect(() => {
        Aos.init({})
    }, [] )

    const data = useStaticQuery(graphql`
    query TripsQuery{
        allTripsJson {
          edges {
            node {
              alt
              button
              name
              img {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }    
    `)

    function getTrips(data) {
        const tripsArray = []
        data.allTripsJson.edges.forEach((item, index) => {tripsArray.push(
            <ProductCard key={index} 
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="1000"
            >
                <ProductImg fluid={item.node.img.childImageSharp.fluid} alt={item.node.alt}/>
                <ProductInfo>
                    <TextWrap>
                        <ImLocation />
                        <ProductTitle>{item.node.name}</ProductTitle>
                    </TextWrap>
                    <Button to="/trips" primary="true" round="true" 
                        css={`
                            position: absolute; 
                            top: 420px; 
                            font-size: 14px
                        `}
                    >{item.node.button}</Button>
                </ProductInfo>
            </ProductCard>
        )})
        return tripsArray
    }

    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>{getTrips(data)}</ProductWrapper>
        </ProductsContainer>
    )
}

export default Trips

const ProductsContainer = styled.div`
    padding: 5rem calc((100vw - 1300px) / 2);
    color: #ffffff;
`
const ProductsHeading = styled.div`
    font-size: clamp(1.8rem, 5vw, 4rem);
    text-align: center;
    margin: 5rem 0;
    color: #000;
    font-weight: 600;
    letter-spacing: 0.3vw
`

const ProductWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    justify-items: center;
    padding: 0 2rem;

    @media screen and (max-width: 1200px){
        grid-template-columns: 1fr 1fr
    }

    @media screen and (max-width: 860px){
        grid-template-columns: 1fr;
    }
`
const ProductCard = styled.div`
    line-height: 2;
    width: 100%;
    height: 500px;
    position: relative;
    border-radius: 10px;
    transition: 0.2s ease;
`
const ProductImg = styled(Img)`
    height: 100%;
    max-width: 100%;
    position: relative;
    border-radius: 10px;
    filter: brightness(70%);
    transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
        filter: brightness(100%);
    }
`

const ProductInfo = styled.div`
    display: flex;
    flex-direction: coloumn;
    align-items: flex-start;
    padding: 0 2rem;

    @media screen and (max-width: 280px){
        padding: 0 1rem;
    }
`

const TextWrap = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 375px;
`

const ProductTitle = styled.div`
    font-weight: 400;
    font-size: 1rem;
    margin-left: 0.5rem;
`