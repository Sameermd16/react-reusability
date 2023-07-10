import { IoPersonSharp } from "react-icons/io5"

function Avatar({...props}) {

    if(props.src) {
        return (
            <div className="avatar">
                <img src={props.src} />
            </div>
        )
    }else if(props.children) {
       return (
        <div className="avatar avatar-letters">
            {props.children}
        </div>
       )
    }else {
        return (
            <div className="avatar avatar-icon">
                <IoPersonSharp />
            </div>
        )
    }
}

export default Avatar