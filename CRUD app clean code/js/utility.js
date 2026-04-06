export function createElement(tag, options = {}, ...children){
    const element = document.createElement(tag);

    const {
        id,
        className,
        text,
        html,
        attributes = {},
        styles = {},
        events = {}
    } = options;


    if (id) element.id = id;
    if (className) element.className = className;
    if (text) element.textContent = text;
    if (html) element.innerHTML = html;

    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
    });

    Object.entries(styles).forEach(([key, value]) =>{
        element.style[key] = value; 
    });

    Object.entries(events).forEach(([event, handler]) => {
        element.addEventListener(event, handler);
    });

    children.flat().forEach(child => {
        if(child instanceof Node) element.appendChild(child);
        else  element.appendChild(document.createTextNode(child));
    });

    return element;
}