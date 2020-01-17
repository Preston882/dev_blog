---
title: First Developer Blog Post
date: "2020-01-15T22:12:03.284Z"
description: "This Page is a beginning page for the developer and what he has learned so far within class"
---
Welcome to my First ever Developer Blog!

All of the knowledge I have learned throughout this project has been from Dobyns-Bennett Highschool in the class 'Game Programming & Logic II'

Throughout my time in this class I have learned how to edit cool things like this:

```javascript
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          }
        }
      }
  `)
```
To learn a little bit about me Click [Here](../about/)

