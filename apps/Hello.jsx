import {
  render,
  Jason,
  Head,
  Styles,
  Style,
  Actions,
  Action,
  Options,
  Success,
  Error
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
          <Success type="$util.banner">
            <Options title="Another" description="Message" />
          </Success>
          <Error type="$util.banner">
            <Options title="Something bad" description="May happened" />
          </Error>
        </Action>
      </Actions>
    </Head>
  </Jason>
);

export default render(<Hello />);
