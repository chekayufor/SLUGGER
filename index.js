
const slugger = (...val)=> {
    return val.join(' ').split(' ').join('-');
} 

module.exports = slugger;