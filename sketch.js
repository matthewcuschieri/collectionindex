$(function () {
  $("#wordone").on("click", function () {
    $("#contentone").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    $("#spacing").toggle();
  });
});
$(function () {
  $("#rowtwo").on("click", function () {
    $("#contenttwo").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    $("#spacing").toggle();
  });
});
$(function () {
  $("#rowthree").on("click", function () {
    $("#contentthree").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    $("#spacing").toggle();
  });
});
$(function () {
  $("#rowfour").on("click", function () {
    $("#contentfour").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    $("#spacing").toggle();
  });
});
$(function () {
  $("#catone").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "//dl.dropbox.com/s/931244iox7i0fpk/working-with-espresso.mp4";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});

$(function () {
  $("#cattwo").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});
