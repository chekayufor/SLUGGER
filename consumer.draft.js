const Slugger = require('./index');
const marker = require('@ajar/marker')

let rez = Slugger('hello my friend');
marker.blue(rez);
rez = Slugger('1 37 65', 'he she it');
marker.red(rez);