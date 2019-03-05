import { render, Jason } from 'jason';

// This is the bare minimum needed in order to render an app.
// It's important to return the rendered component
// in order to transform the result to json.
// Only call this function in the JSX that will be
// passed to the index.js file in root.
export default render(<Jason />);
