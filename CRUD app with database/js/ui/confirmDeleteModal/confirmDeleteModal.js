import { createElement } from "../../utility.js";

const confirmDeleteModal = (taskId, onConfirmCallBack, onCancelCallback) => {
    const confirmDeleteContainer = createElement('div', {id : 'confirmDeleteContainer', className : 'confirmDeleteContainer'});

    const message = createElement('p', {text : 'Are you sure you want to delete this task?'});

    const buttonsContainer = createElement('div', {className : 'buttonsContainer'});    

    const confirmButton = createElement('button', {text : 'Confirm'});

    const cancelButton = createElement('button', {text : 'Cancel'});

    confirmButton.addEventListener('click', () => {
        onConfirmCallBack(taskId);
    });

    cancelButton.addEventListener('click', () => {
        onCancelCallback();
    }); 

    buttonsContainer.append(confirmButton, cancelButton);

    confirmDeleteContainer.append(message, buttonsContainer);

    return confirmDeleteContainer;

}

export {confirmDeleteModal};