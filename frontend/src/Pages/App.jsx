import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Home from './Home';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<Home />} />
      <Route path='/route1' element={<Home />} />
      <Route path='/route2' element={<Home />} />
    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router}/>
      
    </>
  );
}

export default App;