import type from './type';
import Error from '../../Error';

// This is a common pattern to return a Error action with a $render type
// So this component helps saving time.
const ErrorTypeRender = ({ children }) => <Error type={type}>{children}</Error>;

export default ErrorTypeRender;
