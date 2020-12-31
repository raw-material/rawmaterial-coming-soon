import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Countdown from "../components/Countdown"

const IndexPage = () => (
  <Layout>
    <SEO title="RawMaterial" />
    <h1
      style={{
        textAlign: "center",
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        border: 0,
      }}
    >
      RawMaterial
    </h1>
    <div style={{ margin: `5rem auto`, maxWidth: 600 }}>
      <Image />
    </div>
    <div style={{ margin: `5rem 0` }}>
      <p
        style={{
          textAlign: "center",
          color: "#f5ff0f",
          textTransform: "uppercase",
          fontSize: "2rem",
          marginTop: "3rem",
        }}
      >
        Coming soon
      </p>
    </div>
    <div style={{ margin: `5rem 0` }}>
      <Countdown />
    </div>
  </Layout>
)

export default IndexPage
