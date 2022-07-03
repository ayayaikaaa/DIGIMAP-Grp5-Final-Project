import Dropzone from "dropzone";

let myDropzone = Dropzone({
  paramName: "file",
  maxFilesize: 2, // MB
  accept: function(file, done) {
    if (file.name == "") {
      done("Error: No File Detected");
    }
    else { done(); }
  }
});

$("div#dropzone").dropzone({});

