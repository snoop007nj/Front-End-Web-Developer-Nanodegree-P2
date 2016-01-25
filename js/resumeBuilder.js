/*
This is empty on purpose! Your code to build the resume will go here.
 */

'use strict';

var $header = $("#header");
var data = '%data%';


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
		var formattedName = HTMLheaderName.replace(data, bio.name);
		var formattedRole = HTMLheaderRole.replace(data, bio.role);
		$header.prepend(formattedRole);
		$header.prepend(formattedName);


		//-----contact
		var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
		var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
		var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
		$("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

		var formattedWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
		var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
		$header.append(formattedBioPic, formattedWelcomeMsg);


		//-----skills
		if (bio.skills.length) {
			$header.append(HTMLskillsStart);

		    for (var skill in bio.skills) {
		    	var thisSkill = bio.skills[skill];

		    	var formattedSkill = HTMLskills.replace(data, thisSkill);
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
		for (var job in work.jobs) {
			var thisJob = work.jobs[job];

			$("#workExperience").append(HTMLworkStart);

			//-----company + position
			var formattedEmployer = HTMLworkEmployer.replace(data, thisJob.employer)
				.replace("#", work.jobs[job].url);
			var formattedTitle = HTMLworkTitle.replace(data, thisJob.title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;

			//-----date
			var formattedDates = HTMLworkDates.replace(data, thisJob.dates);

			//-----location
			var formattedLocation = HTMLworkLocation.replace(data, thisJob.location);

			//-----description
			var formattedDesciption = HTMLworkDescription.replace(data, thisJob.description);
			
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
			"images": [
				"images/Screen Shot.png"
			],
			"url": "https://github.com/snoop007nj/Front-End-Web-Developer-Nanodegree-P1"
		}
	],
	"display": function() {
		for (var item in projects.projects) {
			var thisProject = projects.projects[item];

			$("#projects").append(HTMLprojectStart);

			//-----title
			var formattedTitle = HTMLprojectTitle.replace(data, thisProject.title)
				.replace("#", projects.projects[item].url);

			//-----date
			var formattedDate = HTMLworkDates.replace(data, thisProject.dates);

			//-----location
			var formattedLocation = HTMLworkLocation.replace(data, thisProject.location);

			//-----description
			var formattedDescription = HTMLworkDescription.replace(data, thisProject.description);

			$(".project-entry:last").append(formattedTitle, formattedDate, formattedLocation, formattedDescription);

			//-----image
			for (var img = 0, len = thisProject.images.length; img < len; img++) {
				var formattedImage = HTMLprojectImage.replace(data, projects.projects[item].images[img]);
				$(".project-entry:last").append(formattedImage);
			}
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
			"dates": 2015,
			"majors": ["Computer Science"],
			"location": "Balimore, MD, US",
			"url": "https://www.cs.jhu.edu",
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"date": 2016,
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	],
	"display": function() {
		for (var item in education.schools) {
			var thisSchool = education.schools[item];

			$("#education").append(HTMLschoolStart);

			//-----school + degree
			var formattedSchool = HTMLschoolName.replace(data, thisSchool.name)
				.replace("#", education.schools[item].url);
			var formattedDegree = HTMLschoolDegree.replace(data, thisSchool.degree);
			var formattedSchoolDegree = formattedSchool + formattedDegree;

			//-----dates
			var formattedDates = HTMLworkDates.replace(data, thisSchool.dates);

			//-----location
			var formattedLocation = HTMLschoolLocation.replace(data, thisSchool.location);

			$(".education-entry:last").append(formattedSchoolDegree, formattedDates, formattedLocation);

			//-----majors
			for (var major = 0, len = thisSchool.majors.length; major < len; major++) {
				var formattedMajor = HTMLschoolMajor.replace(data, thisSchool.majors[major]);
				$(".education-entry:last").append(formattedMajor);
			}
		}

		for (var itemOnline in education.onlineCourses) {
			$("#education:last").append(HTMLonlineClasses);

			//-----title + school
			var formattedTitle = HTMLonlineTitle.replace(data, education.onlineCourses[itemOnline].title)
				.replace("#", education.onlineCourses[itemOnline].url);
			var formattedOnlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[itemOnline].school);
			var formattedOnlineSchoolDegree = formattedTitle + formattedOnlineSchool;

			//-----dates
			var formattedOnlineDates = HTMLonlineDates.replace(data, education.onlineCourses[itemOnline].date);

			$("h3:last").append(formattedOnlineSchoolDegree, formattedOnlineDates);
		}		
	}
};

education.display();
//----------EDUCATION----------//


$("#mapDiv").append(googleMap);