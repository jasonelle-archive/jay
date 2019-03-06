import * as Jay from 'jason';

const { render, Jason } = Jay;
const { Head, Styles, Actions } = Jay.Head;
const { Style, Action, Options } = Jay.Common;

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
          <Action.Success type="$util.banner">
            <Options title="Another" description="Message" />
          </Action.Success>
          <Action.Error type="$util.banner">
            <Options title="Something bad" description="May happened" />
          </Action.Error>
        </Action>
      </Actions>
    </Head>
  </Jason>
);

export default render(<Hello />);
