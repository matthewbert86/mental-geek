import React from 'react'
import Layout from '../components/Layout'
const NewsLetter = () => {
  return <Layout>
    <section className="newsletter-page">
      <div className="page-center">
        <h2>Subscribe to Mental Geek</h2>
        <h4>Get new updates, subscriber only stories, early access to the social app, and more....</h4>
        <form
          className="contact-form"
          name="testing-contact"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          action="/success"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="testing-contact" />

          <input type="text" name="name" placeholder="Name" className="form-control" />
          <input type="email" name="email" placeholder="email" className="form-control" />
          <button type="submit" className="btn form-control submit-btn">Subscribe</button>
        </form>
      </div>
    </section>
  </Layout>
}

export default NewsLetter
