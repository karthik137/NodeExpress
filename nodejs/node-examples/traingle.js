var areaOfTriangle = function area(base, height, callback){
    console.log("Area of triangle");

    if( base <=0 && height <=0){
        setTimeout( () => 
        callback(new Error("Dimensions should be greater than 0"), null)
        , 2000);
    }else{
        setTimeout( () => 
        callback( null, () => {
            var a =  0.5 * base * height;
            return a;
        })
        , 2000);
    }
}

exports.areaOfTriangle = areaOfTriangle;