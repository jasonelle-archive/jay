import { render, Jason } from 'jason';

// This is the bare minimum needed in order to render an app.
// It's important to return the rendered component
// to transform the result into JSON.
// Only call this function in the JSX that will be
// passed to the index.js file in root directory.
export default render(<Jason />);
