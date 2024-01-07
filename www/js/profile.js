var student;
//$(document).ready(function(){
function populateProfile(){
    addpopup();
       var data = {"dateOfBirth":"02-10-2019",
                    "state":"Haryana",
                    "city":"Gohana",
                    "zipCode":"ABC456",
                    "street":"abc Street",
                    "firstName":"abc",
                    "lastName":"cde",
                    "email":"abc@xyz.com",
                    "phone":"9654025864"};
    student=data;
       var student_profile='';
       
           student_profile += '<tr class="name1"><td class="name"> First Name </td><td>' +data.firstName+'</td></tr>';
           student_profile += '<tr><td class="name"> Last Name</td><td>' +data.lastName+'</td></tr>';
           student_profile += '<tr><td class="name"> Date Of Birth </td><td>' +data.dateOfBirth+'</td></tr>';
           student_profile += '<tr><td class="name"> E-mail</td><td>' +data.email+'</td></tr>';
           student_profile += '<tr><td class="name"> Phone Number</td><td>' +data.phone+'</td></tr>';
           student_profile += '<tr><td class="name"> State </td><td>' +data.state+'</td></tr>';
           student_profile += '<tr><td class="name"> City </td><td>' +data.city+'</td></tr>';  
           student_profile += '<tr><td class="name"> Street </td><td>' +data.street+'</td></tr>';
           student_profile += '<tr><td class="name"> Zipcode </td><td>' +data.zipCode+'</td></tr>';
           
        
           $('#profile_table').append(student_profile);
           
setTimeout(function() {
    removepopup();
  }, 3000);
    

}