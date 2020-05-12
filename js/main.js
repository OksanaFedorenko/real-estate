$(document).ready(function () {


  // tabs
  $("[data-tab-nav]").on("click", function () {
    let that = $(this);
    let tabs = $(".intro__tab-content > div");
    $(".intro__tab-menu li").removeClass("active");
    $(that).addClass("active");
    $(tabs).removeClass("active");
    $("[" + $(that).attr("data-tab-nav") + "]").addClass("active");
  });
  
});