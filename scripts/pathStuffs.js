const fs = require('fs');

module.exports = {
    pathExist:(currentPath) => {
        if(currentPath == undefined){
            console.log("Invalid or non existing path");
            return false;
        } else {
            return true;
        }
    },
    
    readPath: () => {
        fs.readdir('directory', (err, data) => {
            if (err) throw err;
            console.log(data);
        });  
    }

};
