import { Provider } from 'react-redux';
import AppRoutes from './routes'
import store from './store'; 
import { ToastContainer, toast } from 'react-toastify';

const App = () => {

  return (
    <Provider store={store}>
      <AppRoutes />
      <ToastContainer />
    </Provider>
  )
}
export default App;