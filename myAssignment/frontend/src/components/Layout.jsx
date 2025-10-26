import React from "react"
import { SidebarProvider } from "./ui/sidebar"
import Header from "./Header"
import NewSidebar from "./NewSidebar"

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <Header />
      <div className="layout-grid">
        <NewSidebar />
        <main>{children}</main>
      </div>
    </SidebarProvider>
  )
}