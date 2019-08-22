
const slugger = (val)=> {
    let str = val.toString();
    return str.split(' ').join('-');
} 

module.exports = slugger;