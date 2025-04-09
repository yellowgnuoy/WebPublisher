function createHoverEffect(selector, animationClass) {
  $(selector).hover(
    function (e) {
      const $el = $(this);
      const offset = $el.offset();
      const x = e.pageX - offset.left;
      const y = e.pageY - offset.top;
      const height = $el.innerHeight();
      const width = $el.innerWidth();

      const top = y > height ? height : y;
      const left = x > width ? width : x;

      $(`${selector} span`)
        .fadeIn(300)
        .css({
          display: "block",
          top: `${top}px`,
          left: `${left}px`,
        });

      setTimeout(function () {
        $(`${selector} span`).addClass(animationClass);
      });
    },
    function () {
      $(`${selector} span`).hide().removeClass(animationClass);
    }
  );
}

// 각각 버튼에 hover 효과 적용
createHoverEffect("a.btn2", "btn2Ani"); // Github
createHoverEffect("a.btn3", "btn3Ani"); // Blog
createHoverEffect("a.btn4", "btn4Ani"); // Mail
