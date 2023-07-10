
import classnames from "classnames"

function Button({children, size, variant, className, onClick, ...rest}) {

    let sizeClass = size && `button-${size}`
    let variantClass = variant && `button-${variant}`
    const allClasses = {sizeClass, variantClass, className}
    return (
        <button className={allClasses} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button