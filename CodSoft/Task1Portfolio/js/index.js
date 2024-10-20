// JS for Header Mobile Menu starts Here
let menuList = document.getElementById("menulist");
menuList.style.maxHeight = "0px";
let menuBtn = document.querySelector(".mob_menu");
function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "300px";
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i> ';

    }
    else {
        menuList.style.maxHeight = "0px";
        menuBtn.innerHTML = '<i class="fa-solid fa-bars" ></i>';
    }
}

// JS for Projects to show Dymanically for home page
    document.addEventListener('DOMContentLoaded', () => {
        fetch('../res/projects.json')
            .then(response => response.json())
            .then(data => {
                const containerProject = document.querySelector('.container_project2');
                const maxProjects = 4; // Limit to the first four projects
                data.slice(0, maxProjects).forEach(project2 => {
                    // Create a new project_box div
                    const projectBoxContainer = document.createElement('div');
                    projectBoxContainer.className = 'project_box';
                                    
                    // Create the elements for the project details
                    const projectImage = document.createElement('img');
                    projectImage.src = project2.image;
                    projectImage.alt = project2.title;

                    const projectTitle = document.createElement('h3');
                    projectTitle.textContent = `Project Title: ${project2.title}`;

                    const projectLanguages = document.createElement('h5');
                    projectLanguages.textContent = `Language Used: ${project2.languages}`;

                    const projectButton = document.createElement('button');
                    const projectLink = document.createElement('a');
                    projectLink.href = project2.liveLink;
                    projectLink.textContent = 'View Live Project →';
                    projectLink.target = '_blank';
                    projectButton.appendChild(projectLink);

                    // Append the elements to the project_box div
                    projectBoxContainer.appendChild(projectImage);
                    projectBoxContainer.appendChild(projectTitle);
                    projectBoxContainer.appendChild(projectLanguages);
                    projectBoxContainer.appendChild(projectButton);

                    // Append the project_box div to the container_project div
                    containerProject.appendChild(projectBoxContainer);
                });
            })
            .catch(error => console.error('Error fetching the projects:', error));
    });



// JS for Projects to show Dymanically
document.addEventListener('DOMContentLoaded', () => {
    fetch('../res/projects.json')
        .then(response => response.json())
        .then(data => {
            const containerProject = document.querySelector('.container_project1');
                data.forEach(project1 => {
                // Create a new project_box div
                const projectBoxContainer = document.createElement('div');
                projectBoxContainer.className = 'project_box';
            
                
                // Create the elements for the project details
                const projectImage = document.createElement('img');
                projectImage.src = project1.image;
                projectImage.alt = project1.title;

                const projectTitle = document.createElement('h3');
                projectTitle.textContent = `Project Title: ${project1.title}`;

                const projectLanguages = document.createElement('h5');
                projectLanguages.textContent = `Language Used: ${project1.languages}`;

                const projectButton = document.createElement('button');
                const projectLink = document.createElement('a');
                projectLink.href = "../"+project1.liveLink;
                projectLink.textContent = 'View Live Project →';
                projectLink.target = '_blank';
                projectButton.appendChild(projectLink);

                // Append the elements to the project_box div
                projectBoxContainer.appendChild(projectImage);
                projectBoxContainer.appendChild(projectTitle);
                projectBoxContainer.appendChild(projectLanguages);
                projectBoxContainer.appendChild(projectButton);

                // Append the project_box div to the container_project div
                containerProject.appendChild(projectBoxContainer);
            });
        })
        .catch(error => console.error('Error fetching the projects:', error));
});


// For Contact Form Validation

function sendEmail() {
    var fullName = document.getElementById('fullName').value;
    var emailAddress = document.getElementById('emailAddress').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    
    var mailtoLink = 'mailto:amitkumarbarik849@gmail.com?subject=' 
                     + encodeURIComponent(subject) 
                     + '&body=' + encodeURIComponent('Full Name: ' + fullName + '\n'
                                                   + 'Email Address: ' + emailAddress + '\n'
                                                   + 'Message: ' + message);

    window.location.href = mailtoLink;
}


// JS for PreLoader

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
      const preloader = document.querySelector('.preloader');
      preloader.style.opacity = '0'; // Fade out
      setTimeout(function() {
        preloader.style.visibility = 'hidden'; // Hide after fade-out
      }, 500); // Duration of the fade-out transition (same as the transition time)
    }, 2500); // Time in milliseconds (4000ms = 4s)
  });
  

