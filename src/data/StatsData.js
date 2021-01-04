import React from 'react'
import {GiEarthAmerica} from 'react-icons/gi'
import {MdAirplanemodeActive, MdTimer} from 'react-icons/md'
import {FaMoneyCheck} from 'react-icons/fa'

export const StatsData = [
    {
        icon: (<GiEarthAmerica css={`color: #047bf1`}/>),
        title: "Over 100 Destinations",
        desc: "Travel to over 100 unique places"
    },
    {
        icon: (<MdAirplanemodeActive css={`color: #f3a82e`}/>),
        title: "20 different Airlines",
        desc: "Travel only with our best Airlines"
    },
    {
        icon: (<MdTimer css={`color: #f34f2e`}/>),
        title: "Fastest Support",
        desc: "It takes you only one flight to reach your dream"
    },
    {
        icon: (<FaMoneyCheck css={`color: #3af576`}/>),
        title: "Save Money",
        desc: "We only recommend what is best for you. "
    },

]

