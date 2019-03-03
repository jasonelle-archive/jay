import {h, render, Jason, Head, HeadStyles, Style} from '../jason';

const myStyle = 'my_style';

const Hello = () => (
    <Jason>
        <Head title="My App" description="Hello" icon="file://icon.png">
            <HeadStyles>
                <Style className={myStyle} font="Verdana"/>
            </HeadStyles>
        </Head>
    </Jason>
);

// It's important to return the rendered component
// in order to transform the result to json
const output = render(<Hello/>);
export default output;