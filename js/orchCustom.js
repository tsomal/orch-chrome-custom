$(document).ready(function() {
  addChecklistCheckbox();
  fixHub();
});


function addChecklistCheckbox() {
  var clickFn = function(event) {
    if ($(this).is(':checked')) {
          var body = $('#pull_request_body');

          //TODO: Externalize this information
          var desc = 'Description of changes for this pull request : \n\t\n\n';
          var reviewers = "Reviewer(s): @dmhenry @rbmueller @jpgrant @tsomal @jmagas @guowendai @sturose";

          var checklist = ['Checklist : ',
                            '1) Update CROS design document if impacted', 
                            '2) Update README.md if impacted',                          
                            '3) Make sure Javadocs are updated',                          
                            '4) Add JUnit tests if needed',                          
                            '5) Ran all JUnit tests locally',                          
                          ].join('\n');
         
          body.val(desc.concat(reviewers).concat('\n\n').concat(checklist).concat("\n"));

    } else {
        // Do nothing. Preserve content in text area
    }
  };
  addOneCCheckbox('review-checklist', 'Review Checklist', clickFn, false);
}

function addOneCCheckbox(id, labelInner, clickFn, checked) {
  var checkedStr = checked ? 'checked' : '';
  var checkbox = $('<input type="checkbox"/>');
  var label    = $('<label id="' + id + '-label" for="' + id + '" class="orch-label"><strong>' + labelInner + '</strong></label>');

  $('.composer-meta').append(checkbox, label);
  checkbox.on('click', clickFn);
}

function fixHub() {
  $('#username01').val("e9002z");
}