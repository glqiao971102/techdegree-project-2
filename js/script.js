
// the list_item variable is to get the className which is student-item from the index.html
const list_item = document.getElementsByClassName('student-item');
const number_of_item = 10;

//the showPage is to show the 1st page and hide other page which the list length is more than 10
function showPage(list, page) {

   const startIndex = (page * number_of_item) - number_of_item //the result will be in the 1st page is 0 index
   const endIndex = page * number_of_item // the result will be 10

   //the for loop is to loop all the list_item 
   //it is to show if the index is between 1 to 10, else the other which is more than 10 will be hide on the web
   for(let i = 0; i < list_item.length; i ++){
      if( i >= startIndex && i <= endIndex){

         list_item[i].style.display = 'block';

      }else {

         list_item[i].style.display = 'none';

      }

   }

}
//call the showPage function
showPage(list_item, 1)



//this function is to append the page link on the bottom of web page
const appendPageLinks = studentList => {

//from 58 - 81 is to create the div,ul, li base on the given format
//the for loop is to add all the tag a a class name which is call active, this active will needed for the click event
/*<!-- pagination HTML to create dynamically -->
      <div class="pagination">
        <ul>
          <li>
            <a class="active" href="#">1</a>
          </li>
           <li>
            <a href="#">2</a>
          </li>
           <li>
            <a href="#">3</a>
          </li>
           <li>
            <a href="#">4</a>
          </li>
           <li>
            <a href="#">5</a>
          </li>
        </ul>
      </div>
      <!-- end pagination -->*/
   const eachPage = Math.ceil(studentList.length/number_of_item);
   const paginationDiv = document.createElement('div')
   paginationDiv.className = 'pagination' 
   const mainDiv = document.querySelector('.page')
   mainDiv.appendChild(paginationDiv)
   const ul = document.createElement('ul');
   paginationDiv.appendChild(ul)

   
   
      for (let i = 0; i < eachPage; i++){

         if (i != eachPage) {
            let li = document.createElement("li");
            ul.appendChild(li);
            const a = document.createElement("a");
            a.href = "#";
            a.textContent = i + 1;
            if (i === 0) {
              a.className = 'active';
            }
            li.appendChild(a);
          }
      }
  


      //select all the a which is the 
      //this part is for generate click event button, it is use to only show the  10 people in the target page number
      //for example 1st page is only show 1-10 people, the second page is 11-20....
      const targetA = document.querySelectorAll("a");

      for (let i = 0; i < targetA.length; i++) {
         targetA[i].addEventListener("click", e => {
          //find the current button and page that has active class name and remove it
            if (e.target.className === "active") {
              e.target.classList.remove("active");
            }
         // add active class name, when click the other page number. Only the targeted page will be show using the showPage function! 
           else {
               
            let pageNumber = targetA[i].innerHTML;
            e.target.className = "active";
            showPage(studentList, pageNumber);
            
          }
        });
      }
      };


//call the appendPageLinks function     
appendPageLinks(list_item);



/*
Thanks @sradms0 on slack channel for helping me when facing difficulties, especially in the appendPageLinks function. I also research other students' projects on related github to solve the problem

https://github.com/SirBuitrago/TechDegree-Project2-List-Filter-and-Pagination/blob/master/js/script.js

*/