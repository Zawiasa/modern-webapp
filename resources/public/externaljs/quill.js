
var quill;

  function initQuill(param) {
    quill = new Quill(param, {
        theme: 'snow',
        modules: {
            toolbar: true
          }
      });
              }

  function getQuill(){
    var tartalom = quill.container.firstChild.innerHTML;
    var elso = "<div id=\"bio\">"
    var vegso = "</div>"
    var finalcontent = elso.concat(tartalom, vegso);
    return finalcontent;
  }

  function populateQuill(param){
    quill.clipboard.dangerouslyPasteHTML(0, param);
  }

  function setTextQuill(){
    quill.setText('');
  }
