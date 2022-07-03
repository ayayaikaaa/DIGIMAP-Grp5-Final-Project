$(document).ready(function () {
    $('#file').on('change', function (){
        const file = $('#file').prop('files')[0];
        console.log(file);
        if (file) {
            $('#prev').attr('src', URL.createObjectURL(file));
            $("#bUpload").attr("disabled", false);
        }
    });

    $('#title').on('keyup', function () {
        $('#uploadTitle').text($('#title').val());
    });

    $('#desc').on('keyup', function () {
        $('#uploadDesc').text($('#desc').val());
    });
});