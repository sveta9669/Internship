import './App.css';
import AppRouters from './routes/AppRoutes'
import AuthProvider from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <AppRouters />
    </AuthProvider>
  );
}

export default App;
