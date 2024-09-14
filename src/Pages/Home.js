import React from "react";
import Navbar from "../Components/Navbar";
import Menu from "../Components/Menu";
import Banner from "../Components/Banner";
import Offer from '../Components/Offer';
import Organization from "../Components/Organization";
import Partner from "../Components/Partner";
import Testimony from "../Components/Testimony";
import News from "../Components/News";
import Footer from "../Components/Footer";
const Home=()=>{
    return(
        <>
        <Navbar />
        <Menu />
        <Banner />
        <Offer />
        <Organization />
        <Partner />
        <News />
        <Testimony />
        <Footer />
        </>
    );
}

export default Home;