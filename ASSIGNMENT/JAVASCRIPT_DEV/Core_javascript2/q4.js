
// adding, updating, deleting, and displaying the student information 

const student = [
    {
    id:1, firstName: "sumit", lastName: "kumar", grade: "A"
    },

    {
        id:1, firstName: "rahul", lastName: "kumar", grade: "A"
    },


    {
        id:1, firstName: "gaurav", lastName: "kumar", grade: "A"
    },


{
    id:1, firstName: "krishna", lastName: "kumar", grade: "A"
},

]


// adding the students information 



// updating the students information 


// deleting the students information 

student.pop(); 

// displaying the student information (it deletes only last items)
// how can i do this if i want to delete some middle object. 

console.log(student);



console.log(student.name);




// create a function to add a new students to the array

function AddStudents(){
    student.push({id:2,firstName:"Abhishek", lastName:"kumar",grade: "A"});
}
console.log(AddStudents());

// create a function based on the students information based on their id 


// create a function to delete a student based on their id 



// create a function to show the list of all students 


// create a function to find all students who have a specified grade 


// create a function to calculate the average age of all array using the array method 

