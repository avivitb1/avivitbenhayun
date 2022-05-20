   
      function msgprint() {  
        alert("You are Successfully Called the JavaScript function");  
     }  
     function myFunction() {
       document.getElementById("demo").innerHTML = "Paragraph changed.";
     }
     function exampleFunction() {
        alert('You triggered an alert!');
    }
    window.onload = function(){

      const activePage = window.location.pathname;
      console.log(activePage);
      
       document.querySelectorAll('a').forEach(link => {    
        if(link.href.includes(`${activePage}`)){
          link.classList.add('active');
        }
      });
      
      }