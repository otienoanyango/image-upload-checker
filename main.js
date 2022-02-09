$(document).ready(function () {
    var _URL = window.URL || window.webkitURL;


    $("#alertbox").html("Uploaded");

    $("#image").change(function (e) {
        var file;
        $("#image_dims").hide();
        $("#image_size").hide()

        if ((file = this.files[0])) {
            const img = document.getElementById("uploadedImage");

            img.onload = function () {
                const size = Math.round((file.size / 1024).toFixed(2));
                $("#image_dims").html(`Dimensions: ${this.width} X ${this.height}`);
                $("#image_size").html(`Size: ${size} KB`);
                if (this.width < 500 || this.height < 500) {
                    $("#image_dims").addClass("text-danger");
                    $("#image_size").removeClass("text-success");

                } else {
                    $("#image_dims").addClass("text-success");
                    $("#image_size").removeClass("text-danger");
                }
                $("#image_dims").show()
                $("#image_size").show()
            };
            img.onerror = function () {
                alert("Uploaded file is not an image: " + file.type);
            };
            img.src = _URL.createObjectURL(file);
            $("#uploadedImage").show();
        }

    });
})