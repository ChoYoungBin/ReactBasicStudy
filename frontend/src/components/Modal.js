const Modal = (props) => {
    const cancelHandler = () => {
        props.onCancel()
    }
    const confirmHandler = () => {
        props.onConfirm()
    }
    return (
        <div className="modal">
            <p> Are you sure ?</p>
            <button onClick={cancelHandler} className="btn btn--alt">
                Cancel
            </button>
            <button className="btn" onClick={confirmHandler}>
                Confirm
            </button>
        </div>
    )
}

export default Modal
