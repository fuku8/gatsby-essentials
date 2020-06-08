import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"

export default function NotFound() {
    return [
        <Layout>
            <Seo pagetitle="Page not found" />
            <h1 style={{ padding:"20vh 0", textAlign: "center" }}>お探しのページが見つかりませんでした。</h1>
        </Layout>
    ]
}