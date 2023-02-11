import { Route, Routes } from 'react-router';
import { Homepage, Therapy } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/therapy' element={<Therapy />} />
    </Routes>
  );
}

export default App;
