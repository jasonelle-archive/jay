import {h} from 'preact';
import validations from './validations';

const Jason = ({children}) => {

    const context = '$jason';
    const validChildren = ['head', 'body'];
    
    validations.children.are.valid(children, validChildren, context);
    
    return <jason>{children}</jason>
};

export default Jason;