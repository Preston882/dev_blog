import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { withStyles } from "@material-ui/core/styles"
import { Button } from "@material-ui/core/"

export default ({ data }) => {
  const siteTitle = data.site.siteMetadata.siteTitle

  const StyledButton = withStyles({
    root: {
      background: "linear-gradient(45deg, #19CBA8 30%, #197ACB 90%)",
      borderRadius: 3,
      border: 0,
      color: "white",
      height: 48,
      padding: "0 20px",
      boxShadow: "0 3px 5px 2px rgba(25, 122, 203, .3)",
    },
    label: {
      textTransform: "capitalize",
    },
  })(Button)

  return (
    <Layout location="/about" title={siteTitle}>
      <SEO title="About" />
      <h1>About the Author</h1>
      <Link to="/">
        <StyledButton>Home</StyledButton>
      </Link>
      <p>Welcome to My Dev Blog!</p>
      <p>A little about me:</p>
      <p>
        I was originally born in Pennsylvania, however, I moved to Tennessee at
        an early age. Here I began my coding career. As a young child I always
        loved to take things apart and see how long it would take for me to put
        them back together exactly how it was. When I was 10 years old I built
        and programmed a robot from an arcade game that my grandmother had given
        me. At this time, being a young child I liked playing video games. Here,
        I was introduced to 'ROBLOX' where I began scripting in the LUA
        language. This opened a new portal of creativity due to the fact of,
        when I coded something I could actively see what it was that was being
        written out. Since this opportunity was given to me I have never been
        more excited to explore the possibilities with coding. I am very eager
        to learn as much as I possibly can while also using what I know to
        strengthen the community. Throughout this time I have thought of
        multiple paths and end results, which include, Achieving a Master's
        Degree in Computer Science at East Tennessee State University, landing a
        job in the Technological industry, and creating a software that will
        better the worldwide programming environment.
      </p>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
