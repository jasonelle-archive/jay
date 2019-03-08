import Action from '../Action/Action';

const name = '$pull';
const Pull = ({ type, children }) => (
  <Action className={name} type={type}>
    {children}
  </Action>
);

export default Pull;
