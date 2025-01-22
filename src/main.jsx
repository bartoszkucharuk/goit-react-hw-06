import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import persistedStoreConfig from './redux/store.js';
import { Provider } from 'react-redux'; // Provider to STORE
import { PersistGate } from 'redux-persist/integration/react'; // PersistGate to PERSISTOR

const { store, persistor } = persistedStoreConfig(); //use consts from store.js

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
