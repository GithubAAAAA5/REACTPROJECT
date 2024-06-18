import React from 'react';
import {createGlobalStyle} from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';

// 글로벌 스타일을 추가하고 싶을 때 사용하는 createGlobalStyle 이다.
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>   
        <TodoHead />
        <TodoList />
      </TodoTemplate>
    </>
  );
}

export default App;
