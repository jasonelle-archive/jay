/* eslint-disable no-param-reassign */

const h = (element, props, ...children) => {
  // function from https://github.com/developit/jsxobj
  let obj = { name: element, ...props };

  // invoke any functions, passing the object through them
  if (typeof element === 'function') {
    obj = element(obj);
  }

  [].concat(...children).forEach(child => {
    // if the child is an object with a name property,
    // collapse it into the current object for MAGIC
    const { name } = child;
    if (name) {
      obj[name] = child;

      // delete the child name in order to merge the values
      delete child.name;
    } else {
      obj.value = child;
    }
  });

  return obj;
};

const parseTree = item => {
  const element = {
    name: '',
    children: [],
    props: {}
  };

  Object.keys(item).forEach(key => {
    const value = item[key];

    if (key === 'type') {
      element.name = value;
    }

    if (key === 'children') {
      element.children = value;
    }

    if (key === 'props' || key === 'attrs' || key === 'attributes') {
      element.props = value;
    }
  });

  if (element.children) {
    element.children = element.children.map(child => parseTree(child));
  }

  return h(element.name, element.props, element.children);
};

const transform = leafs => {
  const tree = {
    type: 'root',
    children: [leafs]
  };

  const jason = parseTree(tree);

  // delete the root leaf so only $jason is left
  if (jason.name) {
    delete jason.name;
  }

  return jason;
};

export default transform;
