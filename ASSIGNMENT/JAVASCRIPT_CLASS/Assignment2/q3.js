// 3. Create a Map to store contact information (name, age, email, location) and implement a function to
// retrieve contact details by name.



// retrival of an array using map 

// let contact_information = [
//     {
//         name:"sumit",
//         age:21,
//         email:"sumitkum803202@gmail.com",
//         location:"patna"
//     },
//     {
//         name:"rahul",
//         age:21,
//         email:"sumitkumdfkl@gmail.com",
//         location:"bihar"
//     }
// ]

// // function to retrieve contact details by name 


//     contact_information.map((name)=>{
//         if(contact_information.name == "sumit"){
//             console.log("hehe you have done it");
//         }
//     })

//     contact_information








    // to learn there are two way one is set and map here we have to create only map not don't use the method of an array.
    // and another one is methods of an array i.e = map, filter,reduce, forEach 
    // all are well known for traversing of an array. 








    // 3. Create a Map to store contact information (name, age, email, location) 
    // and implement a function to retrieve contact details by name.

    // const information = new Map();
    // information.set("name","sumit")
    // information.set("age",21);
    // information.set("email",'abc@gmail.com');
    // information.set("location:","bihar");
    // information.set("contact",1234567890)
    // // now i have to create a function to retreive contact details by name.
    // x = information;
    // console.log(x);
    // console.log(x.contact);

    // function Details(){


    // }

    // Details(sumit);





// different approach 

// if i convert this map into object and then after that i find the 
// contact details 

const information = new Map();
information.set("name","sumit")
information.set("age",21);
information.set("email",'abc@gmail.com');
information.set("location:","bihar");
information.set("contact",1234567890)

// converting map into object 

const obj = Object.fromEntries(information);
console.log(obj);

console.log(obj.contact);

function Details(){
    if(obj.name == "sumit"){
        console.log("your contact details is:")
        console.log(obj.contact);
    }
}
Details("rahul")

