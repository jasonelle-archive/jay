import { h, render, Jason, Head, Styles, Style } from 'jason';

const myStyle = 'my_style';

const Hello = () => (
  <Jason>
    <Head title="My App" description="Hello" icon="file://icon.png">
      <Styles>
        <Style className={myStyle} font="Verdana" />
      </Styles>
    </Head>
  </Jason>
);

// It's important to return the rendered component
// in order to transform the result to json
const output = render(<Hello />);
export default output;
