let imgDropzone = new Dropzone("#img-upload");

imgDropzone.on("addedfile", file => {
  console.log(`File added: ${file.name}`);
});

Dropzone.options.imgUpload = {
    paramName: "file",
    maxFilesize: 2, // MB
    accept: function(file, done) {
      if (file.name == "") {
        done("No Image Detected");
      }
      else { done(); }
    }
};
