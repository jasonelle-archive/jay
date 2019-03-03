
const getChildName = (child) => {
    if(child)
    {
        if(child.nodeName)
        {
            if(child.nodeName.name)
            {
                return child.nodeName.name.toString().toLowerCase();
            }

            return child.nodeName.toString().toLowerCase();
        }

        return child.toString().toLowerCase();
    }

    return '';
};

const helpers = {
    get : {
        child : {
            name : getChildName
        }
    }
};

export default helpers;