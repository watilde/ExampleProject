import React from 'react';
import { Provider } from 'react-redux';
import App from './views/App';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from './state/store';

const { store, persistor } = configureStore();

export default class AppContainer extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    );
  }
}
