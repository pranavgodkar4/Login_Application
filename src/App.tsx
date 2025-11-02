import React from "react"
import Layout from "./Component/Layout/Layout.tsx";
import { BrowserRouter } from "react-router-dom";
import { AppRoute } from "./Router.tsx";

const App: React.FC = () => {
  return (

    <BrowserRouter>
    <Layout>
    <AppRoute />
    </Layout>
    </BrowserRouter>

  )
}

export default App
