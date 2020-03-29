import React from "react";

import Layout from "../layout/index";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="container">
      <h1>
        DWI NUGROHO
      </h1>
      <p>
        Frontend Engineer at <a href="//arkademy.com" target="_blank" rel="noopener noreferrer"> Arkademy</a>
      </p>
      <p>
        I'm web developer specializing in modern JavaScript. I build things with code, make digital products to improve how humans living their life.
      </p>
    </section>
    <section className="container" style={{marginTop: '100px'}}>
      <h3>
        Latest Articles
      </h3>
    </section>
  </Layout>
);

export default IndexPage;
