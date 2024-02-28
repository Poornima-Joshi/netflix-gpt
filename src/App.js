import { Provider } from 'react-redux';
import './App.scss';
import Body from './components/container/Body';
import appStore from './utils/appStore';

function App() {
  return (
    <Provider store={appStore}>
     <Body/>
    </Provider>
  );
}

export default App;
