var bio = {
	"name" : "Lori Jones",
	"role" : "     ~ Front End Web developer",
	"contacts" : {
		"mobile" : "941-462-0683",
		"email" : "firstdiem@gmail.com",
		"github" : "justjones",
		"twitter" : "@justjonesweb",
		"location" : "Chattanooga"
	},
	"welcomeMessage" : "Hello, I am a Web Developer from Chattanooga, TN",
	"skills" : ["Javascript", "CSS", "HTML", "Graphic Design", "jQuery", "Adobe CS 6"],
	"bioPic" : "images/me.jpg"
}

function displayBio(){

	var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
	var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedHeaderRole);
	$("#header").prepend(formattedHeaderName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);

	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGitHub);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedPicture);
		$("#header").append(formattedWelcomeMsg);

		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedGitHub);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedLocation);

		if(bio.skills){
			$("#header").append(HTMLskillsStart);
			for(i in bio.skills){
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(formattedSkill);
			}
		}

}

displayBio();

var education = {
	"schools" : [
		{
			"name" : "University of Phoenix",
			"location" : "Pheonix, AZ, US",
			"degree" : "BS",
			"major" : ["Information Technology And Communication"],
			"dates" : "2009-2011",
			"url" : "http://phoenix.edu"
		},
		{	"name" : "University College of Denver",
			"location" : "Denver, CO, US",
			"degree" : "Masters",
			"major" : ["Web Development"],
			"dates" : "2014-2016",
			"url" : "http://du.edu"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front End Development Nano Degree",
			"school" : "Udacity",
			"date" : "2015",
			"url" : "http://udacity.com"
		},
		{
			"title" : "Wireframing With HTML5 & CSS3",
			"school" : "Udemy",
			"date" : "2014",			
			"url" : "http://udemy.com"
		}
	]
}

function displayEducation(){
	for (school in education.schools){
		//create new div for schools
		$("#education").append(HTMLschoolStart);
		//concat school and title
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolTitle = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedSchoolTitle);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
	}
}
displayEducation();

var work = {
	"jobs": [
		{
			"employer" : "Amazon",
			"title" : "Packer, ICQA, Sort",
			"location" : "Chattnooga, TN",
			"dates" : "2014-current",
			"description" : "Inspecting and preparing products for shipment."
		},
		{
			"employer" : "Manatee Memorial Hospital",
			"title" : "IS Helpdesk Support",
			"location" : "Bradenton, FL",
			"dates" : "2013 - 2014",
			"description" : "Responsible for providing technical assistance and support related to computer systems, hardware, or software. Responds to queries, runs diagnostic programs, isolates problem, and determines and implements solution."
		},
		{
			"employer" : "Gould and Lamb",
			"title" : "Cost Analyst",
			"location" : "Bradenton, FL",
			"dates" : "2006-2012",
			"description" : "Project total cost over life expectancy for medical care and/or any care that the claimant may need as a result of injury. Including any surgical procedures projected as needed. Responsible for the use of correct Current Procedural Terminology (CPT) and International Classification of Diseases (ICD) codes on all reports of past and future treatments. Researched and coded all medical procedures relevant on per case basis. Researched, priced, and compared equipment, and services (medical and non-medical) that claimant would need on an ongoing basis."
		}
	]
}
function displayWork(){
for (job in work.jobs){
	//create new div for work experience
	$("#workExperience").append(HTMLworkStart);
    //concat employer and title
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;    
    $(".work-entry:last").append(formattedEmployerTitle);

    //format employment dates
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    //format job description
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
    
	}
}
displayWork();

var projects = {
	"projects" : [
		{
			"title" : "Sample Project 1",
			"dates" : "2015",
			"description" : "Shankle venison kevin pancetta. Beef picanha cupim pork kielbasa bresaola tenderloin andouille shoulder capicola sausage ham pork belly short loin. Jerky turducken porchetta, boudin shankle flank spare ribs. T-bone doner jerky pig strip steak frankfurter ham hock ground round, cow brisket tri-tip. Hamburger flank corned beef chuck, ham hock tenderloin leberkas pork belly biltong. Ribeye jowl meatball tri-tip.",
			"images" : ["http://placehold.it/150x150", "http://placehold.it/150x150"]
		}
	]
}

function displayProjects(){
	for (var project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0){
			for (var images_object in projects.projects[project].images){

			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[images_object]);
			$(".project-entry:last").append(formattedImage);
				
			}
		}
	}
}
displayProjects();


/*function locationizer(work_obj){
	var locationArray = [];

	for (job in work_obj.jobs){
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}
console.log(locationizer(work));*/

var charEscape = function(_html){
	var newHTML = _html;

	newHTML = _html.replace(/</g, "&lt;");
	newHTML = newHTML.replace(/>/g, "&gt;");

	return newHTML;
};
$("#mapDiv").append(googleMap);