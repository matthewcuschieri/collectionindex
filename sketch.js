$(function () {
  $("#wordone").on("click", function () {
    $("#contentone").toggle();
    $("#spacing").toggle();
    $("#contenttwo").css("display", "none");
    $("#contentthree").css("display", "none");
    $("#contentfour").css("display", "none");
    $("#contentfive").css("display", "none");
    $("#contentsix").css("display", "none");
    $("#contentseven").css("display", "none");
    $("#contenteight").css("display", "none");
  });
});
$(function () {
  $("#wordtwo").on("click", function () {
    $("#contentone").css("display", "none");

    $("#contentthree").css("display", "none");
    $("#contentfour").css("display", "none");
    $("#contentfive").css("display", "none");
    $("#contentsix").css("display", "none");
    $("#contentseven").css("display", "none");
    $("#contenteight").css("display", "none");
    $("#contenttwo").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    $("#spacing").toggle();
  });
});
$(function () {
  $("#wordthree").on("click", function () {
    $("#contentone").css("display", "none");
    $("#contenttwo").css("display", "none");

    $("#contentfour").css("display", "none");
    $("#contentfive").css("display", "none");
    $("#contentsix").css("display", "none");
    $("#contentseven").css("display", "none");
    $("#contenteight").css("display", "none");
    $("#contentthree").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    $("#spacing").toggle();
  });
});
$(function () {
  $("#wordfour").on("click", function () {
    $("#contentone").css("display", "none");
    $("#contenttwo").css("display", "none");
    $("#contentthree").css("display", "none");

    $("#contentfive").css("display", "none");
    $("#contentsix").css("display", "none");
    $("#contentseven").css("display", "none");
    $("#contenteight").css("display", "none");
    $("#contentfour").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    $("#spacing").toggle();
  });
});
$(function () {
  $("#wordfive").on("click", function () {
    $("#contentone").css("display", "none");
    $("#contenttwo").css("display", "none");
    $("#contentthree").css("display", "none");
    $("#contentfour").css("display", "none");

    $("#contentsix").css("display", "none");
    $("#contentseven").css("display", "none");
    $("#contenteight").css("display", "none");
    $("#contentfive").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    $("#spacing").toggle();
  });
});
$(function () {
  $("#wordsix").on("click", function () {
    $("#contentone").css("display", "none");
    $("#contenttwo").css("display", "none");
    $("#contentthree").css("display", "none");
    $("#contentfour").css("display", "none");
    $("#contentfive").css("display", "none");

    $("#contentseven").css("display", "none");
    $("#contenteight").css("display", "none");
    $("#contentsix").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    $("#spacing").toggle();
  });
});
$(function () {
  $("#wordseven").on("click", function () {
    $("#contentone").css("display", "none");
    $("#contenttwo").css("display", "none");
    $("#contentthree").css("display", "none");
    $("#contentfour").css("display", "none");
    $("#contentfive").css("display", "none");
    $("#contentsix").css("display", "none");

    $("#contenteight").css("display", "none");
    $("#contentseven").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    $("#spacing").toggle();
  });
});
$(function () {
  $("#wordeight").on("click", function () {
    $("#contentone").css("display", "none");
    $("#contenttwo").css("display", "none");
    $("#contentthree").css("display", "none");
    $("#contentfour").css("display", "none");
    $("#contentfive").css("display", "none");
    $("#contentsix").css("display", "none");
    $("#contentseven").css("display", "none");

    $("#contenteight").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    $("#spacing").toggle();
  });
});

//row 1//

$(function () {
  $("#one").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Hummeln.webm";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});

$(function () {
  $("#two").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "https://upload.wikimedia.org/wikipedia/commons/1/1e/Navigating_a_Tree_in_the_Park_in_Spring.webm";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});
$(function () {
  $("#three").on("click", function () {
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
  $("#four").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "https://upload.wikimedia.org/wikipedia/commons/c/c1/Interior_of_the_Old_Library%2C_Trinity_College%2C_Dublin.webm";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});

//row two//
$(function () {
  $("#oneA").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "https://upload.wikimedia.org/wikipedia/commons/e/e6/Airplane_Seat_View_1_2013-07-02.ogv";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});

$(function () {
  $("#twoA").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "https://upload.wikimedia.org/wikipedia/commons/0/0a/Penguin_Island_Ferry_Gnangarra.webm";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});
$(function () {
  $("#threeA").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "https://upload.wikimedia.org/wikipedia/commons/f/f5/Snow_cannon_pagla_boden.webm";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});
$(function () {
  $("#fourA").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "https://upload.wikimedia.org/wikipedia/commons/c/c4/Luxembourg-Pfaffenthal-elevator-035ESD.webm";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});
//row three//
$(function () {
  $("#oneB").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "https://upload.wikimedia.org/wikipedia/commons/3/31/Spinning_hardboiled_egg_01.ogv";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});

$(function () {
  $("#twoB").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "https://upload.wikimedia.org/wikipedia/commons/c/cf/Cloth_Simulation.ogv";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});
$(function () {
  $("#threeB").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Tippe_top_on_a_plate_slow_motion.webm";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});
$(function () {
  $("#fourB").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "https://upload.wikimedia.org/wikipedia/commons/0/01/Saganaki_at_the_Parthenon_Restaurant_in_Chicago.MOV.webm";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});
//row four//
$(function () {
  $("#oneC").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "https://upload.wikimedia.org/wikipedia/commons/transcoded/0/06/Pythagoras_cup_video.ogv/Pythagoras_cup_video.ogv.1080p.vp9.webm";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});

$(function () {
  $("#twoC").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "vhttps://upload.wikimedia.org/wikipedia/commons/f/f8/Candles%2Bcamera_dolly.ogv";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});
$(function () {
  $("#threeC").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "https://upload.wikimedia.org/wikipedia/commons/c/cd/Table_football.ogv";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});
$(function () {
  $("#fourC").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "https://upload.wikimedia.org/wikipedia/commons/8/87/American_Robin_in_bird_bath.webm";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});

//row five//
$(function () {
  $("#oneD").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "https://upload.wikimedia.org/wikipedia/commons/2/29/Fernsehturm_Stuttgart_Befeuerung.ogv";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});

$(function () {
  $("#twoD").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Wolf_Point_West.webm";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});
$(function () {
  $("#threeD").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "https://upload.wikimedia.org/wikipedia/commons/1/1c/Lighthouse_light.webm";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});
$(function () {
  $("#fourD").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "https://upload.wikimedia.org/wikipedia/commons/0/02/%E5%AD%90%E3%81%A9%E3%82%82%E5%90%91%E3%81%91iPad%E8%A1%9D%E6%92%83%E5%90%B8%E5%8F%8E%E3%82%AF%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%B1%E3%83%BC%E3%82%B9_%E3%82%B1%E3%82%AC%E3%81%95%E3%81%9B%E3%81%AB%E3%81%8F%E3%81%84%E4%B8%B8%E3%81%BF%E3%81%AE%E3%81%82%E3%82%8B%E5%BD%A2%E7%8A%B6_Apple_9.7%E3%82%A4%E3%83%B3%E3%83%81iPad_2017%E7%94%A8_PDA-IPAD1005BK-BL-R.webm";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});

//row six//
$(function () {
  $("#oneE").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "https://upload.wikimedia.org/wikipedia/commons/b/b7/Dusting_Furniture_%28TESDA%29.webm";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});

$(function () {
  $("#twoE").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Common_house_gecko_licking_on_top_of_table.webm";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});
$(function () {
  $("#threeE").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikimania_2019%2C_coin_exchange.ogv";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});
$(function () {
  $("#fourE").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Scheppach_Basato_5-4_band_saw.webm";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});

//row seven//
$(function () {
  $("#oneF").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "https://upload.wikimedia.org/wikipedia/commons/4/48/New_Jersey_Turnpike_time-lapse.webm";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});

$(function () {
  $("#twoF").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "https://upload.wikimedia.org/wikipedia/commons/c/c2/Kingda_Ka_at_Six_Flags_Great_Adventure%2C_New_Jersey.webm";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});
$(function () {
  $("#threeF").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/ID_Basketball_ACT_State_Team.ogv";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});
$(function () {
  $("#fourF").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "https://upload.wikimedia.org/wikipedia/commons/c/cd/Cross_Bronx_Expressway_time-lapse.webm";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});

//row eight//
$(function () {
  $("#oneG").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/New_York_City_Subway_-_Train_of_R46_cars.webm";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});

$(function () {
  $("#twoG").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Time_Lapse_of_New_York_City.ogv";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});
$(function () {
  $("#threeG").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "https://upload.wikimedia.org/wikipedia/commons/6/61/De_%27Harlem_Globetrotters%27_in_Scheveningen_Weeknummer_58-27_-_Open_Beelden_-_11508.ogv";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});
$(function () {
  $("#fourG").on("click", function () {
    $("#popup").toggle();
    // $("#content").toggle();
    // $("#c").toggle();
    var videoFile =
      "https://upload.wikimedia.org/wikipedia/commons/e/e6/The_evolution_of_the_desk_by_the_harvard_innovation_lab.webm";
    var video = $("#change video")[0];
    video.src = videoFile;
    video.load();
    video.play();
  });
});
