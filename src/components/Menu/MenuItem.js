import Menu from "./Menu"


function MenuItem({children, ...props}) {
    return (
        <div className="menu-item">
            {children}
        </div>
    )
}

export default MenuItem