import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Header } from './components/header/Header';
import { Homepage } from './pages/homepage/Homepage';
import { Footer } from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
