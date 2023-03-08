import NavBar from "@/Components/Parts/NavBar"
import Footer from "@/Components/Parts/Footer"

const AppLayout = ({ children }) => {
  return (
    <div className={`relative bg-gray-100 pb-4 dark:bg-gray-900 text-gray-700 dark:text-gray-300 min-h-screen bg-dotted-gray-300 dark:bg-dotted-primary-600/40 bg-dotted-spacing-8`}>
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

export default AppLayout
