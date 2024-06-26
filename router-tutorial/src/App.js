// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Info from './components/Info';
import Board from './components/Board';
import BoardContent from './components/BoardContent';
import Profiles from './components/Profiles';
import MyPage from './components/MyPage';

function App() {
  return (
    <>    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/mypage' element={<MyPage />} />

      <Route path='/user' element={<User />} />
      <Route path='/user/:username' Component={User} />

      <Route path='/info' element={<Info />} />
       <Route path='/info/:num' element={<Info />} />

              {/* 라우트 중첩 */}
      <Route path='/board' element={<Board />} >
        <Route path=':num' element={<BoardContent />} />
      </Route>

      <div>
        <h1>HTTP 401</h1>
        <h2>{pathname} - 이 페이지는 존재하지 않습니다. </h2>
      </div>

      {/*<Route path='/profiles' element={<Profiles />} >
        <Route path=':username' element={<User />} />
      </Route>*/}

      <Route path='/profiles/*' element={<Profiles />} 
      
      />

    </Routes>
  </>
  );
}

export default App;
