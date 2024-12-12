
const Modal = ({ child, state }) => {
    return (
        <div className={`${state ? 'fixed' : 'hidden'} top-0 left-0 w-full h-full bg-transparent z-20`}>
            
            { child }
        </div>
    )
}

export default Modal