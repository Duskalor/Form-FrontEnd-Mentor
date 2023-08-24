import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RatedContext } from './context/RatedContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RatedContext>
    <App />
  </RatedContext>
);
