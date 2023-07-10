
import Button from '../Button/Button.js'

function MenuButton({children, onClick}) {
    return (
        <Button onClick={onClick}>{children}</Button>
    )
}

export default MenuButton