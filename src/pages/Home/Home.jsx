import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Featured from '../../components/featured/feature'
import PropertyList from '../../components/PropertyList/PropertyList'
import Feature from '../../components/featured/feature'
import FeatureProperty from '../../components/FeatureProperty/featureProperty'
import MailList from '../../components/MailList/MailList'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div className="home">
        <Navbar />
        <Header />
    <div className="homeContainer">
      <Featured />
      <h1>Browse by Property type</h1>
      <PropertyList />
      <h1>Home guest Love</h1>
      <FeatureProperty />
      <MailList />
      <Footer />
    </div>
    </div>
  )
}

export default Home
