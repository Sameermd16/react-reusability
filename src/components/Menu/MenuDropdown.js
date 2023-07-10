

function MenuDropdown({children,...props}) {
    console.log(props)
    return (
        <div className="menu-dropdown">
            {props.dropdownItems.map((item) => {
                return (
                    <p>{item}</p>
                )
            })}
        </div>
    )
}

export default MenuDropdown