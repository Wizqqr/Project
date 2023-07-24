
import './App.css';
import Navbar from './pages/Navbar';
import Main from './components/Main/Main'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import image1 from './components/pictures/num 1.jpg'
import image2 from './components/pictures/num 2.png'
import image3 from './components/pictures/num3.jpg'
import image4 from './components/pictures/num 4.jpg'

// const products=[
//   {
//     image:image1
//   },
//   {
//     image:image2
//   },
//   {
//     image:image3
//   },
//   {
//     image:image4
//   }
// ]
function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
     </Router>
     {/* {
          products.map(products=>{
            <Main
            image={products.image}
            />
          })
        } */}
    </div>
  );
}

export default App;
