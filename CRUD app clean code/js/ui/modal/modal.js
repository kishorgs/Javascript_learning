import { createElement } from "../../utility.js";

export function modal(options = {}, ...children){
    try{
        const { id, className = "dialog", closeOnOutside = true } = options;

        const dialog = createElement('dialog', { id : 'dialog', className : 'dialog'}, ...children);

        function open(){
            if (!dialog.isConnected){
                document.body.append(dialog);
            }
            dialog.showModal();
        }

        function close(){
            dialog.close();
            dialog.remove();
        }

        if(closeOnOutside){
            dialog.addEventListener('click',(event)=>{
                if(event.target === dialog){
                    close();
                }
            });
        }

        return {
            element: dialog,
            open,
            close

        }
    }catch(error){
        console.log('Error opening modal ', error);
    }
}