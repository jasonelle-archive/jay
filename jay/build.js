/* eslint-disable no-console */
import fs from "fs-extra";
import path from "path";
import colors from "colors";
import transform from "./transform";

const build = (items, dir = null) => {
  let directory = dir;

  if (!directory) {
    directory = path.normalize("./dist");
  }

  if (fs.existsSync(directory)) {
    fs.removeSync(directory);
  }

  fs.mkdirSync(directory);

  Object.keys(items).forEach(key => {
    const item = items[key];
    const jason = transform(item);
    const json = JSON.stringify(jason);

    const name = `${directory}/${key}.json`;
    const file = path.normalize(name);

    fs.open(file, "w", err => {
      if (err) {
        throw err;
      }

      fs.writeFile(file, json, er => {
        if (er) {
          return console.error(er);
        }
        console.log(`Created File ${colors.green(file)}`);
        return file;
      });
    });
  });
};

export default build;
