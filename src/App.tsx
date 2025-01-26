import { Provider } from 'react-redux';
import AppRoutes from './routes'
import store from './store'; 
import { ToastContainer, toast } from 'react-toastify';

const App = () => {

  return (
    <Provider store={store}>
      <div className="bg-lightFaintGray dark:bg-[#101010] h-screen">
        <AppRoutes />
      </div>
      
      <ToastContainer />
    </Provider>
  )
}
export default App;