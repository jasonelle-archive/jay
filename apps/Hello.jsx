import {
  render,
  Jason,
  Head,
  Styles,
  Style,
  Actions,
  Action,
  Options
} from 'jason';

const myStyle = 'verdanaFont';
const helloAction = 'sayHello';

const Hello = () => (
  <Jason>
    <Head title="My App" description="Hello" icon="file://icon.png">
      <Styles>
        <Style className={myStyle} font="Verdana" />
      </Styles>
      <Actions>
        <Action className={helloAction} type="$util.banner">
          <Options title="Hello" description="World" />
        </Action>
      </Actions>
    </Head>
  </Jason>
);

export default render(<Hello />);
