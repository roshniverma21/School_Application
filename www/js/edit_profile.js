{ addpopup();
var data = {dateOfBirth:"02-10-2019",
            state:"Haryana",
            city:"Gohana",
            zipCode:"ABC456",
            street:"Faltu Street",
            firstName:"Aditya",
            lastName:"Bhardwaj",
            email:"abc@xyz.com",
            phone:"9654025864"};

  var student_edit_profile='';
       
           student_edit_profile += '<tr class="name1"><td class="name"> First Name </td><td>' +student.firstName+'</td></tr>';
           student_edit_profile += '<tr><td class="name"> Last Name</td><td>' +student.lastName+'</td></tr>';
           student_edit_profile += '<tr><td class="name"> Date Of Birth </td><td>' +student.dateOfBirth+'</td></tr>';
           student_edit_profile += '<tr><td class="name"> E-mail</td><td>' +student.email+'</td></tr>';
           student_edit_profile += '<tr><td class="name"> Phone Number</td><td>' +student.phone+'</td></tr>';
           student_edit_profile += '<tr><td class="name"> State </td><td>' +student.state+'</td></tr>';
           student_edit_profile += '<tr><td class="name"> City </td><td>' +student.city+'</td></tr>';  
           student_edit_profile += '<tr><td class="name"> Street </td><td>' +student.street+'</td></tr>';
           student_edit_profile += '<tr><td class="name"> Zipcode </td><td>' +student.zipCode+'</td></tr>';
           
        
           $('#profile_edit_table').append(student_edit_profile);
setTimeout(function() {
    removepopup();
  }, 3000);
}