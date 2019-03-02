import fs from 'fs';
import path from 'path';
import transform from './transform';

const build = (items, directory = null) => {
    
    if(!directory) {
        directory = path.normalize('./dist');
    }

    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory);
    }

    Object.keys(items).forEach(key => {
        
        const item = items[key];
        const jason = transform(item);
        const json = JSON.stringify(jason);
        
        const name = `${directory}/${key}.json`;
        const file = path.normalize(name);

        fs.open(file, 'w', (err) => {
            
            if(err) {
                throw err;
            }

            fs.writeFile(file, json, (err) => {
                if(err) {
                    return console.error(err);
                }

                console.log(`Created File ${file}`);
            });
        });
    });
};

export default build;