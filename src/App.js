import './App.css';
import ProtectedRoute from './components/ProtectedRoute';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstView from './views/FirstView';
import FirstComponent from './components/FirstComponent';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ProtectedRoute>
            <FirstView />
          </ProtectedRoute>} />

          <Route path="/login" element={<FirstComponent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
