import Table from "./table"

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  // const [number] = useState("4")
    // var number = prompt("enter number: print table")

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" exact={true} element={<h1 style={{'text-align': 'center'}}>Enter table number </h1>} />
          <Route path="/:table_number" exact={true} element={<Table />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;