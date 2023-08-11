import { useEffect, useState } from 'react'

import './App.css'
import { GetSelectedTheme, ToggleTheme } from './_redux/actions/GlobalAction';
import { useDispatch, useSelector } from 'react-redux';

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
    <>
      <h2>React JS Theme</h2>
      <div className='dark_mode'>
        <input
          className='dark_mode_input'
          type='checkbox'
          id='dark-mood-toggle'
          onChange={changeTheme}
          defaultChecked={theme === 'dark'}
        />
        <label className='dark_mode_label' htmlFor='dark-mood-toggle'>
          Theme
        </label>
      </div>
      {/* <button onClick={() => toggleTheme(!isDarkTheme)}>Light Mood</button> */}
    </>
  )
}

export default App
