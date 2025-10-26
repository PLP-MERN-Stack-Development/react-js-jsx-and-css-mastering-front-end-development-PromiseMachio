import React from "react"
import Header from './components/Header'
import NewSidebar from './components/NewSidebar';
import Layout from "./components/Layout"

export default function App() {
  return (
    <Layout>
      <Header />
      <NewSidebar />
      {/* routes / pages */}
    </Layout>
  )
}

