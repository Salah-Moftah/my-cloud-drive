import { Navbar, SidePanel, RightSidebar, Sidebar } from "@/components";


export default function RootLayout({ children }) {
  return (
    <main className="main-layout">
      <Navbar />
      <Sidebar />
      {children}
      <RightSidebar />
      <SidePanel />
    </main>
  );
}
