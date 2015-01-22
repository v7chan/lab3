'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
    $(".jumbotron h1").text("Javascript is connected");
		$(this).text("EXPERIENCE!");
    $(".jumbotron p").toggleClass("active");
	});

	$('a').click(projectClick);

  $('#submitBtn').click(updateProject);
  $(".project img").hide();
  $(".project-description").hide();
}

function projectClick(e) {
  e.preventDefault();
  var containingProject = $(this).parent();

  if ($(containingProject).hasClass("shown")) {
    $(containingProject).removeClass("shown");
    $(containingProject).find("img").hide();
    $(containingProject).find('.project-description').hide();
  }
  else {
    $(containingProject).addClass("shown");
    $(containingProject).find("img").show();
    $(containingProject).find('.project-description').show();
  }
}

// function projectClick(e) {
//   e.preventDefault();
//   // $(this).css("background-color", "#7fff00");

//   var projectTitle = $(this).find("p").text();
//   var jumbotronHeader = $(".jumbotron h1");
//   jumbotronHeader.text(projectTitle);

//   var containingProject = $(this).closest(".project");
//   var description = $(containingProject).find(".project-description");

//   if (description.length == 0) {
//     $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
//   }
//   else {
//     $(".project-description").hide();
//   }
// }

function updateProject(e) {
  var projectID = $('#project').val();

  $(projectID).animate({
    width: $('#width').val()
  });

  var newText = $('#description').val();
  $(projectID + " .project-description").text(newText);
}