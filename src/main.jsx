import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// "Wrapping the App component with the Provider component to enable 
// Redux Toolkit state management throughout the entire application."
import { Provider } from 'react-redux'
import store from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
