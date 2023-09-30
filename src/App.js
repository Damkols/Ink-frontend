import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Post from "./pages/Post";
import Header from "./components/Header";

function App() {
 const router = createBrowserRouter([
  {
   path: "/",
   element: <Home />,
  },
  {
   path: "/campaign/:id",
   element: <Post />,
  },
 ]);
 return (
  <div className="App">
   <Header />
   <main className="mt-10">
    <RouterProvider router={router} />
   </main>
   <ToastContainer />
  </div>
 );
}

export default App;
