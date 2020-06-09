import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"

export default function NotFound({ location }) {
    return [
        <Layout>
            <Seo pagetitle="Page not found" pagepath={location.pathname} />
            <h1 style={{ padding:"20vh 0", textAlign: "center" }}>お探しのページが見つかりませんでした。</h1>
        </Layout>
    ]
}