import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const NotFoundPage = () => <Layout>
    <section className="error-page">
        <div className="page-center">
            <span>404</span>
            <h3>Sorry, this page cannot be found!</h3>
            <Link to="/" className="btn">
                Return Home
            </Link>
        </div>
    </section>
</Layout>

export default NotFoundPage
