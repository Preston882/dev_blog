import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.siteTitle
       
        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO title="About" />
                <h1>About the Author</h1>
                <Link to="/">Home</Link>
                <p>Welcome to My Dev Blog!</p>
                <p>
                    A little about me:</p>
                   <p>      I was originally born in Pennsylvania ;however, I moved to Tennessee when I was about two years old.
                </p>
            </Layout>
        )
    }
}

export default NotFoundPage

export const pageQuery = graphql`
    query {
        site {
            siteMetadata{
                title
            }
        }
    }
`