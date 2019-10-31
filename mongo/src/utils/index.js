const token = require('./token');
function formatData({code=1,msg="success",data=[]}={}){
    if(code===0){
        msg="fail"
    }
    return {
        code,
        msg,
        data
    }
}

module.exports = {
    formatData,
    token
}