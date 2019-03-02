import {h} from 'preact';
import render from 'preact-render-to-json';
import {Jason} from '../jason';

const Root = () => (
    <Jason/>
);

const output = render(<Root/>);
export default output;