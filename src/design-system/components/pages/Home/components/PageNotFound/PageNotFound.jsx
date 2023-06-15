import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import { PNFWrapper } from './style'

export default function PageNotFound() {
    return (
        <>
            <NavBar />
            <PNFWrapper>
                <h1>NEW <span>EVENT</span></h1>
                <p>page not found 404</p>
            </PNFWrapper>
            <Footer />
        </>
    )
}
