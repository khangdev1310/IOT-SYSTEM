import Header from './components/Header'
import SideBar from './components/SideBar'
import MainRoutes from './MainRoutes'

function App() {
  return (
    <div className="App ">
      <div className="flex">
        <div
          className="w-[15%]"
          style={{
            borderRight: '1px solid #ececec1',
          }}
        >
          <SideBar />
        </div>
        <div className="w-[85%] h-full relative">
          {/* Header */}
          <Header />

          <div className="bg-pray-950 h-screen">
            <MainRoutes />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
