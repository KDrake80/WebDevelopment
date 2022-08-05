 import {Routes, Route} from 'react-router-dom'
import WebPage from "../Components/WebPage";
import Contact from '../Components/Contact'
import Support from '../Components/Support';
import Experience from '../Components/Experience';


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<WebPage />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="about" element={<Support />}/>
          <Route path="exp" element={<Experience />}/>
        </Routes>
    </div>
  );
}

export default App;
