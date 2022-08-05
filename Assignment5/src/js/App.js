 import {Routes, Route} from 'react-router-dom'
import WebPage from "../Components/WebPage";
import Contact from '../Components/Contact'


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<WebPage />}/>
          <Route path="contact" element={<Contact />}/>
        </Routes>
    </div>
  );
}

export default App;
