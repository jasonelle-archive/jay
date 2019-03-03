import {h, render, Jason, Head} from '../jason';

const Hello = () => (
    <Jason>
        <Head title="My App" description="Hello" icon="file://icon.png"/>
    </Jason>
);

const output = render(<Hello/>);
export default output;