import { useState } from 'react';
import './App.css';
// import Avatar from './components/Avatar'
import Menu from './components/Menu/Menu.js';
import MenuButton from './components/Menu/MenuButton';
import MenuDropdown from './components/Menu/MenuDropdown';
import MenuItem from './components/Menu/MenuItem';

function App() {

  const sports = ["Tennis", "basketball", "baseball", "volleyball"]
  const [open, setOpen] = useState(false)

  function toggle() {
    setOpen((prevOpen) => {
      return !prevOpen
    })
  }

  return (
    <Menu>
      <MenuButton onClick={toggle}>any category</MenuButton>
      <MenuDropdown>
        {sports.map((sport) => {
          return (
            <MenuItem key={sport}>{sport}</MenuItem>
          )
        })}
      </MenuDropdown>
    </Menu>
    
    );
  }
  
  export default App;
  
  {/* <Avatar src="my-pic.jpg"/>
  <br />
  <Avatar>SM</Avatar>
  <br />
  <Avatar /> */}