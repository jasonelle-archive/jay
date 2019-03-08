import Error from '../../Error';
import type from './type';
// This is a common pattern to return a Error action with a $reload type
// So this component helps saving time.
const ErrorTypeReload = ({ children }) => <Error type={type}>{children}</Error>;

export default ErrorTypeReload;
