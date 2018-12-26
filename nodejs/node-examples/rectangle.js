


module.exports = (x,y,callback) => {
    console.log("Inside module");
    if (x <=0 && y<=0){
        setTimeout(() => callback(new Error("Dimensions should be greater than zero"), null)
        , 2000);
        //console.log("Dimensions should be greater than zero");
    }else{
        console.log("Inside else X : "+x+" y : "+y);
        setTimeout(() =>
         callback( null, {
            perimeter : () => (2*(x+y)),
            area : () => (x*y)
         })
        , 2000);
    }
}

/*
exports.perimeter = (x,y) => (2*(x+y))
exports.area = (x,y) => (x*y)
*/

