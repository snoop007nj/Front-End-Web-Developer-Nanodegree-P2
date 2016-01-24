/*
This is empty on purpose! Your code to build the resume will go here.
 */

//name = "Duong Nguyen"
//$("#main").append(name);


//----------HEADER----------//
var bio = {
	"name": "Duong Nguyen",
	"role": "Software Developer",
	"contacts": {
		"mobile": "443-791-1382",
		"email": "duonnguyen@yahoo.com",
		"github": "https://github.com/snoop007nj/",
		"location": "Washington DC"
	},
	"welcomeMessage": "Mea Curriculum Vitae", 
	"skills": ["CSS", "HTML", "Java", "Javascript", "Python"],
	"biopic": "images/dc_horizon_1024x575.jpg",
	"display": function() {
		//-----name and role
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);


		//-----contact
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
		$("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(formattedBioPic, formattedWelcomeMsg);

		HTMLbioPic


		//-----skills
		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);

		    for (skill in bio.skills) {
		    	var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
				$("#skills").append(formattedSkill);	
		    }
		}	
	}
};

bio.display();
//----------HEADER----------//

//----------WORK EXPERIENCE----------//
var work = {
	"jobs": [
		{
			"employer": "General Dynamics Mission Systems",
			"title": "Software Developer",
			"location": "Hanover, MD",
			"dates": "Jan 2015 - Present",
			"description": "Analytics software development",
			"url": "https://www.gdmissionsystems.com"
		},
		{
			"employer": "Leidos",
			"title": "Software Developer",
			"location": "Columbia, MD",
			"dates": "March 2013 - Jan 2015",
			"description": "Analytics software development",
			"url": "https://www.leidos.com"
		},
		{
			"employer": "Ciena",
			"title": "Systems Engineer",
			"location": "Linthicum, MD",
			"dates": "May 2006 - March 2013",
			"description": "Telecom systems development",
			"url": "http://www.ciena.com"
		}
	],
	"display": function() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			//-----company + position
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer)
				.replace("#", work.jobs[job].url);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;

			//-----date
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);

			//-----location
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

			//-----description
			var formattedDesciption = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			
			$(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDesciption);		
		}
	}
};

work.display();
//----------WORK EXPERIENCE----------//


//----------PROJECT----------//
var projects = {
	"projects": [
		{
			"title": "PROJECT Build a Portfolio Site",
			"dates": "December 2015",
			"location": "Online",
			"description": "HTML/CSS.  Develop a responsive website that displays images, descriptions and links to each of the portfolio projects that will completed",
			"images": "images/Screen Shot.png",
			"url": "https://github.com/snoop007nj/Front-End-Web-Developer-Nanodegree-P1"
		}
	],
	"display": function() {
		for (item in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			//-----title
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[item].title)
				.replace("#", projects.projects[item].url);

			//-----date
			var formattedDate = HTMLworkDates.replace("%data%", projects.projects[item].dates);

			//-----location
			var formattedLocation = HTMLworkLocation.replace("%data%", projects.projects[item].location);

			//-----description
			var formattedDescription = HTMLworkDescription.replace("%data%", projects.projects[item].description);

			//-----image
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[item].images);			


			$(".project-entry:last").append(formattedTitle, formattedDate, formattedLocation, formattedDescription, formattedImage);

		}	
	}
};

projects.display();
//----------PROJECT----------//


//----------EDUCATION----------//
var education = {
	"schools": [
		{
			"name": "Johns Hopkins University",
			"degree": "Masters of Science",
			"dates": "May 2015",
			"major": "Computer Science",
			"location": "Balimore, MD, US",
			"url": "https://www.cs.jhu.edu",
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"dates": "June 2016 (expected)",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	],
	"display": function() {
		for (item in education.schools) {
			$("#education").append(HTMLschoolStart);

			//-----school + degree
			var formattedSchool = HTMLschoolName.replace("%data%", education.schools[item].name)
				.replace("#", education.schools[item].url);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[item].degree);
			var formattedSchoolDegree = formattedSchool + formattedDegree;

			//-----dates
			var formattedDates = HTMLworkDates.replace("%data%", education.schools[item].dates);

			//-----location
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[item].location);

			//-----major
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[item].major);

			$(".education-entry:last").append(formattedSchoolDegree, formattedDates, formattedLocation, formattedMajor);

		}

		for (item in education.onlineCourses) {
			$("#education:last").append(HTMLonlineClasses);

			//-----title + school
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[item].title)
				.replace("#", education.onlineCourses[item].url);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[item].school);
			var formattedSchoolDegree = formattedTitle + formattedSchool;

			//-----dates
			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[item].dates);

			$("h3:last").append(formattedSchoolDegree, formattedDates);
		}		
	}
};

education.display();
//----------EDUCATION----------//


// function locationizer(work_obj) {
// 	var locationArray = [];

// 	for (job in work_obj.jobs) {
// 		var newLocation = work_obj.jobs[job].location;
// 		locationArray.push(newLocation);
// 	}

// 	return locationArray;
// }

// console.log(locationizer(work));


//----------Internationalize Button----------//
// function inName(name) {
// 	if (typeof name == 'undefined') {
// 		return '';
// 	}

// 	name = name.trim().split(" ");
// 	console.log(name);
// 	name[1] = name[1].toUpperCase();
// 	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

//     console.log(name);
//     console.log($("name").text())

// 	return name[0] + " " + name[1];
// }

//console.log(inName(bio.name));

//$('#main').append(internationalizeButton);
//----------Internationalize Button----------//


$("#mapDiv").append(googleMap);