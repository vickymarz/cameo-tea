import { Route, Routes } from 'react-router';
import { Homepage } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
    </Routes>
  );
}

export default App;
