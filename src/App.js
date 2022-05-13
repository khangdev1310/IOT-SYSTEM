import SideBar from './components/SideBar'
import MainRoutes from './MainRoutes'

function App() {
  return (
    <div className="App ">
      <div className="flex">
        <div className="w-[15%]">
          <SideBar />
        </div>
        <div className="w-[85%]">

            {/* Header */}
          
          <MainRoutes />
        </div>
      </div>
    </div>
  )
}

export default App
