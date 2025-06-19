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


export default App;
