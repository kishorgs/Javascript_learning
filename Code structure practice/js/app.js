import { titleInputElement, descriptionInputElement, appContainer, createTaskFormSubmitButton, createTaskFormResetButton } from "./ui/ui.js";
import { saveTasks } from "./storage.js";

createTaskFormSubmitButton.addEventListener('click', () => {
    saveTasks({
        title : titleInputElement.value,
        description : descriptionInputElement.value
    })
})

appContainer.append(titleInputElement, descriptionInputElement, createTaskFormSubmitButton, createTaskFormResetButton);

document.body.append(appContainer);