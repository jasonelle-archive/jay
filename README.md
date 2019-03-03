# 🕶️ Jay

*Jay* is a simple boilerplate and *JSX* components that will 
help you to convert *JSX* to *Jasonette JSON*.

## Example

Convert *JSX* code

```jsx

<Jason>
    <Head title="My App" description="Hello" icon="file://icon.png">
        <HeadStyles>
            <Style className="my_style" font="Verdana"/>
        </HeadStyles>
    </Head>
</Jason>

```

To *Json*

```json

{
    "$jason": {
        "head": {
            "icon": "file://icon.png",
            "description": "Hello",
            "title": "My App",
            "styles": {
                "my_style": {
                    "font": "Verdana"
                }
            }
        }
    }
}

```

## Why?

*Json* is great for data. Not so great for programming. So *Jasonelle Team* 
created *Jay* in order to have the best of both worlds.

- *JSX* Powered By [PreactJS](https://preactjs.com/).

- Use already known tools such as [Babel JS](https://babeljs.io/), [Webpack JS](https://webpack.js.org/), [ESLint](https://eslint.org/), [Prettier](https://prettier.io/).

- Syntax Highlinting in Code Editors like [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=blanu.vscode-styled-jsx).

- Reduce Human Error.

## How

Basically this is the process that is executed when you build with *Jay*.

> *JSX* -> *Babel* -> *Preact* -> *Webpack* -> *Node* -> *Jay* -> `dist/app.json`

## Install

You need [NodeJS](https://nodejs.org/en/) installed in your system.

- $ `git clone https://github.com/jasonelle/jay`
- $ `cd jay`
- $ `rm -rf .git && git init`
- $ `npm install`

## Configure

- Create your Apps in `apps/`
- Go to `index.js` and import your Apps
- $ `npm run jay`
- Profit.

### Example 

```js

import Jay from './jay';

import Main from './apps/Main';
import Hello from './apps/Hello';

const apps = {
    'index' : Main,
    'hello' : Hello
};

Jay(apps);

```

- $ `npm run jay`
- Your apps will be in `dist/` directory.

They will be named like this:

```
hello.json
index.json
```

