//YOU NEED TO INSTALL fs-extra PACKAGE TO RUN THIS CODE
import fs from 'fs/promises';
import fsn from 'fs';
import fse from 'fs-extra';


console.log("Current directory "+ process.cwd());
let files = await fs.readdir(process.cwd());
console.log(files);



for (const item of files) {
    let sourcePath = item;
    let ext = item.split('.')[1];
    let destinationPath = `${ext}\\${item}`;

   

    if (item.split('.').length==2 && ext != "json" && ext != "js") {





        if (fsn.existsSync(ext)) {
            
            fse.move(sourcePath, destinationPath, (err) => {
                if (err) { return console.log(err); }
               
                console.log(item+` File successfully moved!!`);
            });
        }
        else {
            await fs.mkdir(ext);
            console.log(ext +` folder created successfully !!`);
            fse.move(sourcePath, destinationPath,  (err) => {
                if (err) { return console.log(err); }
               
                console.log(item+` File successfully moved!!`);
            });
            
        }




        
    }
    else if (item.split('.').length ==1) {
        console.log(`This is a folder, skipping: ${item}`);
        
        continue;
    }
    else {
        console.log(`Continue `+ item);
       
        continue;
    }
}