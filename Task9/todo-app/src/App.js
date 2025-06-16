import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css';
import './index.css';
import Todo from './components/todo/Todo';
import Music from './components/music/Music';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/:filter' element={<Todo />}></Route>
        <Route path='/music' element={<Music />}></Route>
        <Route path='*' element={<Todo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}


// function App() {
//   return (
//     <div className="bg-green-900 text-white p-6 text-2xl">
//       ✅ Tailwind is now working!
//     </div>
//   );
// }

export default App;
