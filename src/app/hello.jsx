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

const output = render(<Hello/>);
export default output;