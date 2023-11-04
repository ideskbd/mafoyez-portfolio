import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GetSelectedTheme, ToggleTheme } from './_redux/actions/globalAction';
import { useDispatch, useSelector } from 'react-redux';
import routes from './router/route';

function App() {

  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.global);

  const changeTheme = (e) => {
    dispatch(ToggleTheme(e.target.checked))
  }

  useEffect(() => {
    dispatch(GetSelectedTheme())
  }, [dispatch])


  return (
    <BrowserRouter>
      <Routes>
        {
          routes.map((route, index) => (
            <Route
              key={index}
              exact={true}
              path={route.path}
              name={route.name}
              element={<route.element />}
            />
          ))
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App
