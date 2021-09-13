import { useState } from 'react'
import Modal from './Modal'
import Backdrop from './Backdrop'

const Todo = (props) => {
    const [showModal, setShowModal] = useState(false)

    const deleteHandler = () => {
        setShowModal(true)
    }

    const hideModalHandler = () => {
        setShowModal(false)
    }

    return (
        <div>
            <div className="card">
                <h2>{props.title}</h2>
                <div className="actions">
                    <span> A Span</span>
                    <button className="btn" onClick={deleteHandler}>
                        Delete
                    </button>
                </div>
            </div>
            {showModal && <Modal onCancel={hideModalHandler} onConfirm={hideModalHandler} />}
            {showModal && <Backdrop onClose={hideModalHandler} />}
        </div>
    )
}

export default Todo
