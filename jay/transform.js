// Transform Generated JSON to Jasonette JSON

const h = (name, props, ...children) => {
    // function from https://github.com/developit/jsxobj
    let obj = { name, ...props };

    // invoke any functions, passing the object through them
    if (typeof name === 'function') obj = name(obj);

    [].concat(...children).forEach(child => {
        // if the child is an object with a name property,
        // collapse it into the current object for MAGIC
        let { name } = child;
        if (name) {
            obj[name] = child;
            delete child.name;
        }
        else {
            obj.value = child;
        }
    });

    return obj;
};

const parseTree = (item) => {

    const element = {
        name: '',
        children: [],
        props: {}
    };

    Object.keys(item).forEach(key => {

        const value = item[key];

        if(key === 'type') {
            element.name = value;
            if(value === 'jason') {
                element.name = '$jason';
            }
        }

        if(key === 'children') {
            element.children = value;
        }

        if(key === 'props' || key === 'attrs') {
            element.props = value;
        }
    });

    if(element.children)
    {
        element.children = element.children.map(child => parseTree(child));
    }

    return h(element.name, element.props, element.children);
};

const transform = (leafs) => {

    const tree = {
        type: 'root',
        children: [leafs]
    };

    const jason = parseTree(tree);
    
    // delete the root leaf so only $jason is left
    if(jason.name)
    {
        delete jason.name;
    }

    return jason;
};

export default transform;