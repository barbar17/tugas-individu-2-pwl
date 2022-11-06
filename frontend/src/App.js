import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div class="container">
      <h1 class="mt-4 text-center">
        Personnel Management
      </h1>
      <Outlet />
    </div>
  );
}

export default App;
