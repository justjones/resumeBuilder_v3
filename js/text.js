
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