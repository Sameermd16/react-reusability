import MenuButton from "./MenuButton";
import MenuDropdown from "./MenuDropdown"
import { useState } from "react"


function Menu({children,...props}) {

    const [menu, setMenu] = useState(false)
    function toggle() {
        setMenu((prevMenu) => {
            return !prevMenu
        })
    }

    return (
       <div className="menu">
        {children}
       </div>
    )
}

export default Menu