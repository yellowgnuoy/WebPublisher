$("#headerButton").click(function () {
  var scrollHeight = $(document).height();
  var scrollPosition = $(window).height() + $(window).scrollTop();

  // Check if user is at the bottom of the page
  if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
    $("html").animate({ scrollTop: 0 }, "slow");
  }
});
