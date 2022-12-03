function createManagerCard(name, id, email, officeNum){
    
    return `<div class="col-sm-2 card-control">
    <div class="card">
        <h5 class="card-header bg-gradient text-center" id = 'cardHead'>
            ${name} <br> 
            -Manager-
        </h5>
        <div class="card-body">
                        
            <p class="card-text">ID: ${id}</p>
            <p class="card-text">Email: ${email}</p>
            <p class="card-text">Office Number: ${officeNum}</p>
                        
        </div>
    </div>
</div>
`;

}
function createEngineerCard(name, id, email, github){
    return `<div class="col-sm-2 card-control">
    <div class="card">
        <h5 class="card-header bg-gradient text-center" id = 'cardHead'>
            ${name} <br> 
            -Engineer-
        </h5>
        <div class="card-body">
            
            <p class="card-text">ID: ${id}</p>
            <p class="card-text">Email: ${email}</p>
            <p class="card-text">Github: ${github}</p>
            
        </div>
    </div>
</div>
`;

}
function createInternCard(name, id, email, school){
    return `<div class="col-sm-2 card-control">
    <div class="card">
        <h5 class="card-header bg-gradient text-center" id = 'cardHead'>
            ${name} <br> 
            -Intern-
        </h5>
        <div class="card-body">
            
            <p class="card-text">ID: ${id}</p>
            <p class="card-text">Email: ${email}</p>
            <p class="card-text">School: ${school}</p>
            
        </div>
    </div>
</div>
`;

}

function generateHtml(managers, engineers, interns){

    var group1 = '';
    var group2 = '';
    var group3 = '';

    managers.forEach(manager => {

        group1 = group1.concat(' ', createManagerCard(manager.name, manager.id, manager.email, manager.getOfficeNumber()));        
    })
    
    engineers.forEach(engineer => {
       group2 = group2.concat(createEngineerCard(engineer.name, engineer.id, engineer.email, engineer.getGithub()));
        
    })
    
    interns.forEach(intern => {
       group3 = group3.concat(createInternCard(intern.name, intern.id, intern.email, intern.getSchool()));
        
    })
   
return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> ${managers[0].name}'s Team</title>

    <link href="./style.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet">



</head>

<body>
    <div class="d-flex justify-content-center bg-gradient rounded-bottom" id="title">My Team</div>

    <div class=".container-fluid" id = 'fullBody'>

        <div class="card-group justify-content-center">
            
            ${group1}

            ${group2}
            
            ${group3}




        </div>


    </div>


    
</body>

</html>`;
}



module.exports = generateHtml;