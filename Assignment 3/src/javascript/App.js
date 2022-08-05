import Header from './components/Header';
import Footer from './components/Footer';
import Article from './components/Article';
import Section from './components/Section';
import 'C:/Users/kevin/ReactProjects/react1/src/css/index.css'

function App() {
  return (
    <div className="App">
      <Header title='head'/>
      <Section title='section'/>
      <Article title='article'/>
      <Footer title='foot'/>
    </div>
  );
}

export default App;
