import v8n from 'v8n';
import url from 'url';

const header = 'Validation Error:';

const arrayContains = (value, items) => {
    if(!items.includes(value)) {
        throw `${header} ${value} not in ${JSON.stringify(items)}`;
    }
};

const stringIsNotEmpty = (string) => {
    try {
        v8n().string().not.empty().check(string);
    } catch(err) {
        throw `${header} ${string} is not a valid non empty string.`;
    }
};

const stringIsUrl = (string) => {
    try {
        const Url = new URL(string);
    } catch(err) {
        throw `${header} ${string} is not a valid url.`;
    }
};

const validations = {
    string: {
        not : {
            empty: stringIsNotEmpty
        },
        is : {
            url : stringIsUrl
        }
    },
    array: {
        contains: arrayContains
    }
};

export default validations;