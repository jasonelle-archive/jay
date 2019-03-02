import {h} from 'preact';
import validations from '../validations';

const Head = ({title, description, icon, offline, children}) => {
    let props = {};
    let value = null;

    if(title) {
        value = title.toString();
        validations.string.not.empty(value);
        props = {title:value};
    }

    if(description) {
        value = description.toString();
        validations.string.not.empty(value);
        props = {description:value, ...props};
    }

    if(icon) {
        value = icon.toString();
        validations.string.not.empty(value);
        validations.string.is.url(value);
        props = {icon:value, ...props};
    }

    if(offline) {
        props = {...props, offline:"true"};
    }

    return <head {...props}>{children}</head>
};

export default Head;