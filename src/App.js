import { Toaster } from 'react-hot-toast';
import {RouterProvider} from 'react-router-dom'
import { router } from './Router/Router';
function App() {
  return (
    <RouterProvider router={router}>
      <Toaster/>
    </RouterProvider>
  );
}

export default App;
