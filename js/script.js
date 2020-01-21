/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const list_item = document.getElementsByClassName('student-item');
const number_of_item = 10;

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
function showPage(list, page) {

   const startIndex = (page * number_of_item) - number_of_item
   const endIndex = page * number_of_item

   for(let i = 0; i < list_item.length; i ++){
      if( i >= startIndex && i <= endIndex){

         list_item[i].style.display = 'block';

      }else {

         list_item[i].style.display = 'none';

      }

   }

}
showPage(list_item, 1)



/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/


   /*
  
   
   5. Add an event listener to each a tag. When they are clicked
   call the showPage function to display the appropriate page
   6. Loop over pagination links to remove active class from all links
   7. Add the active class to the link that was just clicked. You can identify that
   clicked link using event.target
   */

const appendPageLinks = studentList => {

   const eachPage = Math.ceil(studentList.length/number_of_item);
   const paginationDiv = document.createElement('div')
   paginationDiv.className = 'pagination' 
   const mainDiv = document.querySelector('.page')
   mainDiv.appendChild(paginationDiv)
   const ul = document.createElement('ul');
   paginationDiv.appendChild(ul)

      for (let i = 0; i < eachPage.length; i++){

         let li = document.createElement('li')
         const a = document.createElement('a')
         a.href = '#'
         a.textContent = i + 1;
         a.className = 'active'
         ul.appendChild(li)
         li.appendChild(a)


         
      }
  
const allA = document.querySelectorAll("a");

for (let i = 0; i < allA.length; i++) {
   allA[i].addEventListener("click", e => {
    //find the current button that has active class name and remove it
      if (e.target.className === "active") {
        e.target.classList.remove("active");
      }
   // add active class name
     else {
      e.target.className = "active";
      
    }
  });
}
};



appendPageLinks(list_item);



