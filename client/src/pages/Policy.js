import React from 'react'
import Layout from '../components/Layout/Layout'

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-5 ">
          <img
            src="/images/contact.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <p>	&#9830; We may collect personal information such as your name, email address, shipping address, and payment details when you create an account or make a purchase on our app.</p>
          <p>	&#9830; We also gather non-personal information such as device information, IP address, and usage data to improve our services and user experience.</p>
          <p>	&#9830; Your information is used to process orders, provide customer support, and personalize your shopping experience.</p>
          <p>	&#9830; We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.</p>
          <p>	&#9830; We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page</p>
        </div>
      </div>
    </Layout>
  )
}

export default Policy
