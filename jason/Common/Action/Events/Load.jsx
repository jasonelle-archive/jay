import Action from '../Action/Action';

const name = '$load';
const Load = ({ type, children }) => (
  <Action className={name} type={type}>
    {children}
  </Action>
);

export default Load;
