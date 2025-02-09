

// example 1 
document.getElementById('changeTextButton')
.addEventListener('click',function(){
    let paragraph = document.getElementById('myParagraph');
    paragraph.textContent = "The paragraph should be changed";
})

// example2 

document.getElementById('highlightFirstCity')
.addEventListener('click',function(){
    let citylist = document.getElementById('citiesList')
    citylist.firstElementChild.classList.add("highlight")
})

// example3 

document.getElementById('changeOrder')
.addEventListener('click',function(){
    document.getElementById('cofeeType')
    cofeeType.textContent = "espresso"
    cofeeType.style.backgroundColor = "brown"
})


 
// example 4 

document.getElementById('addNewItem')
.addEventListener('click',function(){
    let newItem = document.createElement('li')
    newItem.textContent = "Eggs"
    document.getElementById('Shopping list').appendChild(newItem)
})

// example 5 


document.getElementById('removeLastTask')
.addEventListener('click',function(){
   let tasklist =  document.getElementById('tasklist')
   tasklist.lastElementChild.remove();
})



// example 6 

document.getElementById('ClickMeButton')
.addEventListener('click',function(){
    alert("hey");
    
})


// example 7 

document.getElementById("tealist")
.addEventListener('click',function(event){
    if(event.target && event.target.matches(".teaItem")){
      alert("you selected: " + event.target.textContent);  
    }

})

// example 8 

document.getElementById("Feedback-form")
.addEventListener('submit', function(event){
    event.preventDefault();
    let feedback = document.getElementById("feedback-input").value
    console.log(feedback);
    document.getElementById("feedbackDisplay").textContent =`feedback is: ${feedback}`


})




// exmaple 9: 

document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('domStatus').textContent = "Dom fully loaded"
})


// example 10 

document.getElementById('toogleHiglight')
.addEventListener('click',function(){
    let x = document.getElementById('descriptionText')
    x.classList.toggle('highlight');

})