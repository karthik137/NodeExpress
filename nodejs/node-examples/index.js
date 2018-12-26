var rect = require('./rectangle');
//var square = require('./square');
/*
function solveRect(l,b){
    console.log("Solving for rectangle with l = "+l+" and b = "+b);
    
    if ( l <= 0 || b <= 0){
        console.log("Dimensions should be greater than Zero");
    }else{
        console.log("area of the rectangle is : "+rect.area(l,b));
        console.log("The perimeter of the rectangle is : "+rect.perimeter(l,b));
    }
}
*/

/*
function solveRect(l,b){
    console.log("Solving for rectangle with l = "+l+" and b = "+b);
    
    rect(l,b, (err, rectangle) => {
        if(err) {
            console.log("ERROR: ", err.message);
        }else{
            console.log("The area of rectangle of dimensions of l and b = "+rectangle.area());
            console.log("The perimeter of the rectangle is : "+rectangle.perimeter());
        }

    });
}
*/


function solveRect(l,b) {
    console.log("Solving for rectangle with l = "
                + l + " and b = " + b);
    rect(l,b, (err,rectangle) => {
        if (err) {
	        console.log("ERROR: ", err.message);
	    }
        else {
            console.log("The area of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.area());
            console.log("The perimeter of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.perimeter());
        }
    });
    console.log("This statement after the call to rect()");
};







/*
function solveSquare(a){
    console.log("Solving for square with side a = "+a);

    if( a <=0 ){
        console.log("Dimensions should be greater than zero");
    }else{
        console.log("The are  of square is : "+square.area(a));
    }
}
*/

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);


//solveSquare(10);