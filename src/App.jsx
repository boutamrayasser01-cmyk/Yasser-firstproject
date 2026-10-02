import Header from "./Header.jsx"
import Aside from "./Side.jsx"
import Content from "./content.jsx"
function App() {
  return (
 <>
    <Header/>
    
    <div className="flex">
      <Aside />
      <Content/>
    </div>

 </>
  )
};

export default App