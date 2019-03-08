import Action from '../Action/Action';

const name = '$foreground';
const Foreground = ({ type, children }) => (
  <Action className={name} type={type}>
    {children}
  </Action>
);

export default Foreground;
