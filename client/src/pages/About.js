import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About us - GadgetNest"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            GadgetNest is an e-commerce platform specializing in mobile devices and accessories. It provides customers with a convenient online shopping experience to purchase mobile phones and accessories. The platform likely offers a wide range of mobile brands and models and accessories, allowing users to compare features and prices easily. GadgetNest likely ensures secure payment methods and efficient delivery services to enhance customer satisfaction. Overall, it aims to be a go-to destination for individuals looking to buy mobile phones and accessories online.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
