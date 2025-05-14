// Datatypes

// Primitive Datatypes

    // i. Number
    let i;
    i = 0;
    console.log("Datatype od i : ", typeof i,"and the value is : ",i);

    i = "hello";
    console.log("Datatype of i : ",typeof i,"and the value is : ",i);

    i = true; 
    console.log("Datatype of i : ",typeof i,"and the value is : ",i);

    // iv. Undefined 
    let j;
    console.log("Datatype of i : ",typeof j,"and the value is : ",j);

    // v.null
    i = null 
    console.log("Datatype of i : ",typeof i,"and the value is : ",i);

    // vi. Symbol
    i = Symbol('abcabc');
    console.log("Datatype of i : ",typeof i,"and the value is : ",i);

// non-primitive datatypes

    // Objects >
        // these can be inbuilt or user-defined objects

        // Example of user defined objects
        let student = {
            first_name : 'Alice',
            age : 20
        };
        console.log("The student's name is : ",student.first_name);

// Operator
        // Arithmetic
        //  +, -, *, /, %, **(since 2016)
        
        // In javascript, to increment a variable, we dont need to do 
        // x = x + 1;
        // we can do either ++x or x++

        let x = 0;

        console.log(x++); // this is post increment, value updates after statement is run
        // Hence the output will be 0;
        console.log(x);
        console.log(++x);

        // Similarly post and pre decrement also exists
        // x--, --x

        // Now, just like python, string datatypes values when added using + symbol, 
        // gets concatenated.
        let a = "Cristiano";
        let b = "Ronaldo"; 
        let full_name = a + " " + b;

        console.log(full_name);

        // logical operators
        // and -> &&
        // or -> ||
        // not -> !

        // loose equality 


        // String interpolation in Javascript

        // To use multiple variables inside a string and build a dynamic string

        let fullname = 'Messi';
        let age = 30;

        let message = `${fullname} is ${age} years old.
                i'm happy he has started taking musuc lesson.
                        `
        console.log(message);