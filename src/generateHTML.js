// Generate Team Card HTML / Bootstrap code
function generateTeamCards(teamArray) {
    let compiledCards = [];
    
    for(let i = 0; i < teamArray.length; i++){
        let miscInfo;
        switch(teamArray[i].getRole()){
            case 'Engineer': miscInfo = `Github: <a href="https://www.github.com/${teamArray[i].getGithub()}" target="_blank" rel="noopener noreferrer">@${teamArray[i].getGithub()}</a>`;
            break;
    
            case 'Intern': miscInfo = `School: ${teamArray[i].getSchool()}`;
            break;
    
            case 'Manager': miscInfo = `Office Number: ${teamArray[i].officeNumber}`;
            break;
    
            default: console.log("Something Broke in Team Cards!");
        }
        compiledCards.push(`
        <div class="card shadow mx-2 my-3" style="width: 18rem;"> 
        <img src="./assets/images/${teamArray[i].getRole()}.svg" alt="${teamArray[i].getRole()} svg graphic">
            <ul class="list-group">
                <li class="list-group-item h2 font-weight-bold text-center text-white bg-dark">${teamArray[i].getName()}</li>
                <li class="list-group-item">ID: ${teamArray[i].id}</li>
                <li class="list-group-item">Email: <a href = "mailto: ${teamArray[i].email}">${teamArray[i].email}</a> </li>
                <li class="list-group-item">${miscInfo}</li>
            </ul>
        </div>`)
    }
    return compiledCards.join('');
}

// Generate overall HTML and insert Generated Team Cards 
function generateHTMLCode(teamArray) {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">
            <link rel="icon" type="image/x-icon" href="./assets/images/favicon.ico">
            <title>My Team Roster</title>
        </head>
        
        <body>
            <main>
                <section class="py-5 text-center container-fluid bg-primary">
                    <div class="row py-lg-5">
                        <div class="col-lg-6 col-md-8 mx-auto">
                            <h1 class="fw-bold text-light">Your Team Roster</h1>
                            <p class="lead text-light">Welcome Manager! Below is your current Roster!</p>
                        </div>
                    </div>
                </section>
                <section class="container">
                    <div class="container-fluid row py-5 justify-content-center">
                    ${generateTeamCards(teamArray)}
                    </div>
                </section>
            </main>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
        </body>
    </html>
    `
}

// Export generateHTMLCode function for use elsewhere
module.exports = generateHTMLCode;