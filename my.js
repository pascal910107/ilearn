let num = 0;

function run() {
  auto = setInterval(autoShow, 3000);
}
function autoShow() {
  $(".manual-label").removeClass("active");
  $('input[name="radio"]').prop("checked", false);
  if (num < $(".manual-label").length - 1) {
    num++;
  } else {
    num = 0;
  }
  $(".manual-label").eq(num).addClass("active");
  $('input[name="radio"]').eq(num).prop("checked", true);
}
function stoprun() {
  clearInterval(auto);
}

$(() => {
  run();
  $("#username").focus(function () {
    $(this).css("transition", "box-shadow 0.2s,border-color 0.2s");
    $(this).css("box-shadow", "0 0 10px -2px #99000F");
    $(this).css("border-color", "#99000F");
    // this.style.transition = 'box-shadow 0.2s,border-color 0.2s';
    // this.style.boxShadow = '0 0 10px -2px #99000F';
    // this.style.borderColor = '#99000F';
  });
  $("#username").blur(function () {
    this.style.boxShadow = "";
    this.style.borderColor = "rgb(204, 204, 204)";
  });
  $("#passward").focus(function () {
    this.style.transition = "box-shadow 0.2s,border-color 0.2s";
    this.style.boxShadow = "0 0 10px -2px #99000F";
    this.style.borderColor = "#99000F";
  });
  $("#passward").blur(function () {
    this.style.boxShadow = "";
    this.style.borderColor = "rgb(204, 204, 204)";
  });
  $(".submit").mouseover(function () {
    this.style.backgroundColor = "green";
  });
  $(".submit").mouseout(function () {
    this.style.backgroundColor = "";
  });

  $(".submit").click(function () {
    // alert($("#passward").val());
    // alert($("#username").val());
    // "https://ilearn2.fcu.edu.tw/" + ehHbRGIxwLoRgSc8m1PcUUPQ9dXp1BkU;
    this.style.backgroundColor = "";
  });

  $(".nav")
    .children()
    .each(function () {
      $(this).mouseover(function () {
        $(this).children().eq(1).css("display", "block");
      });
      $(this).mouseout(function () {
        $(this).children().eq(1).css("display", "none");
      });
      $(this)
        .children()
        .eq(0)
        .mouseover(function () {
          $(this).css("background-color", "white");
          $(this).css("color", "#99000F");

          $(this)
            .parent()
            .children()
            .eq(1)
            .children()
            .each(function () {
              $(this).mouseover(function () {
                $(this).css("background-color", "#943b21");
                $(this).children().eq(0).css("color", "white");
              });
              $(this).mouseout(function () {
                $(this).css("background-color", "white");
                $(this).children().eq(0).css("color", "#943b21");
              });
            });
        });
      $(this)
        .children()
        .eq(0)
        .mouseout(function () {
          $(this).css("backgroundColor", "#99000F");
          $(this).css("color", "white");
        });
    });

  $(".slider").mouseover(function () {
    $("#prev").removeClass("prevbig").addClass("prev");
    $("#next").removeClass("nextbig").addClass("next");
    stoprun();
  });

  $(".slider").mouseout(function () {
    $("#prev").addClass("prev prevbig");
    $("#next").addClass("next nextbig");
    run();
  });

  $("#prev").mouseover(function () {
    this.style.backgroundImage = 'url("./img/213212_f137_icon (1).png")';
  });
  $("#prev").mouseout(function () {
    this.style.backgroundImage = 'url("./img/213212_f137_icon.png")';
  });
  $("#next").mouseover(function () {
    this.style.backgroundImage = 'url("./img/213212_f137_icon (1) - 複製.png")';
  });
  $("#next").mouseout(function () {
    this.style.backgroundImage = 'url("./img/213212_f137_icon - 複製.png")';
  });

  $(".manual-label").click(function () {
    stoprun();
    $(".manual-label").removeClass("active");
    $('input[name="radio"]').prop("checked", false);
    $(this).addClass("active");
    num = $(".manual-label").index(this);
    $('input[name="radio"]').eq(num).prop("checked", true);
  });

  $("#prev").click(function () {
    stoprun();
    next.style.backgroundImage = 'url("./img/213212_f137_icon - 複製.png")';
    this.style.backgroundImage = 'url("./img/213212_f137_icon (2).png")';
    if (num == 0) {
      num = 15;
    } else {
      num = num - 1;
    }
    $(".manual-label").removeClass("active");
    $('input[name="radio"]').each(function () {
      if ($(this).prop("checked") == true) {
        $(this).prop("checked", false);
        num = $('input[name="radio"]').index(this) - 1;
        if (num == -1) {
          num = $('input[name="radio"]').length - 1;
        }
        return false;
      }
    });
    $(".manual-label").eq(num).addClass("active");
    $('input[name="radio"]').eq(num).prop("checked", true);
  });
  $("#next").click(function () {
    stoprun();
    prev.style.backgroundImage = 'url("./img/213212_f137_icon.png")';
    this.style.backgroundImage = 'url("./img/213212_f137_icon (2) - 複製.png")';
    if (num == 15) {
      num = 0;
    } else {
      num = num + 1;
    }
    $(".manual-label").removeClass("active");
    $('input[name="radio"]').each(function () {
      if ($(this).prop("checked") == true) {
        $(this).prop("checked", false);
        num = $('input[name="radio"]').index(this) + 1;
        if (num == 16) {
          num = 0;
        }
        return false;
      }
    });
    $(".manual-label").eq(num).addClass("active");
    $('input[name="radio"]').eq(num).prop("checked", true);
  });

  window.addEventListener("scroll", function () {
    let scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
      scrollTop = document.documentElement.scrollTop;
    } else if (document.body) {
      scrollTop = document.body.scrollTop;
    }
    if (scrollTop) {
      document.querySelector("#navbar").className = "navbar-active";
    } else {
      document.querySelector("#navbar").className = "navbar";
    }
  });
});
