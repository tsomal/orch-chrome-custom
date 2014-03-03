$(document).ready(function() {
  addChecklistCheckbox();
  fixHub();
});


function addChecklistCheckbox() {
  var clickFn = function(event) {
    if ($(this).is(':checked')) {
          var body = $('#pull_request_body');

          //TODO: Externalize this information
          var desc = 'Description of changes made for this pull request : \n\n';
          var myString = ['Checklist : ',
                          '\n\n\t 1) CROS design document impacted?', 
                          '\n\t    >> ',
                          '\n \t  2) README.md impacted?',
                          '\n\t    >> ',
                          '\n \t  3) Javadocs updated?',
                          '\n\t    >> ',
                          '\n \t  4) JUnit tests needed?',
                          '\n\t    >> ',
                          '\n \t  5) Ran all JUnit tests locally?',
                          '\n\t    >> \n'  
                          ].join('');

          // var reviewers = [ 'Reviewers :',
          //                   '\n\t @dmhenry @rbmueller @jpgrant @tsomal @jmagas @guowendai @sturose'
          //              ].join('');   
          var reviewers = " @dmhenry @rbmueller @jpgrant @tsomal @jmagas @guowendai @sturose";          
          body.val(desc.concat(myString).concat("\n").concat(reviewers));

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