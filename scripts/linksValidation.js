'use strict';
const http = require('http');
const https = require('https');
const colors = require('colors');

//Request url validation
const validateUrl = (link) => {
    //console.log(link);
    if (link.includes('https')) {
        https.get(link, (res) => {
            const { statusCode } = res;
            if (statusCode == 200) {
                console.log('StatCode '.green + colors.green(statusCode) + '  ' + '✔ '.green + ' OK '.bold.bgGreen + '\t||  ' + link);
            } else {
                console.log('StatCode '.red + colors.red(statusCode) +  '  ' + '✖ '.red + ' FAIL '.bold.bgRed + '\t||  '.red + colors.red(link));
            }
        });
    } else {
        http.get(link, (res) => {
            const { statusCode } = res;
            if (statusCode == 200) {
                console.log('StatCode '.green + colors.green(statusCode) +  '  '  + '✔ '.green + ' OK '.bold.bgGreen + '\t||  ' + link);
            } else {
                console.log('StatCode '.red + colors.red(statusCode) +  '  '  + '✖ '.red + ' FAIL '.bold.bgRed + '\t||  '.red + colors.red(link));
            }
        });
    }
};
//validateUrl();

module.exports = {
    validateUrl,
};