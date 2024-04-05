import TrashIcon from "../../resources/images/trash.svg";


const DeleteButton = ({deleteFunction, item}) => {

    function handleDelete(item) {

        let text = "Are you sure you want to delete?";
        // eslint-disable-next-line no-restricted-globals
        if (confirm(text) === true) {
            deleteFunction(item.id).then(() => window.location.reload())
        }
    }

    return (
        <button className="delete" onClick={() => handleDelete(item)}>
            <img className="action-icon" src={TrashIcon} alt=""/>
        </button>
    )
}

export default DeleteButton;