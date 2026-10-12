
/* ---------- 🤎 스크롤 시 헤더 ---------- */
const header = document.querySelector('header');

let lastScrollY = window.scrollY;

window.addEventListener('scroll', function () {

    const currentScrollY = window.scrollY;

    /* 맨 위 */
    if (currentScrollY <= 30) {

        header.classList.remove('header_show');
        header.classList.remove('header_hide');
        header.classList.add('header_top');

        lastScrollY = currentScrollY;
        return;
    }

    /* 아래로 스크롤 */
    if (currentScrollY > lastScrollY) {

        header.classList.remove('header_show');
        header.classList.remove('header_top');
        header.classList.add('header_hide');

    }

    /* 위로 스크롤 */
    else {

        header.classList.remove('header_hide');
        header.classList.remove('header_top');
        header.classList.add('header_show');

    }

    lastScrollY = currentScrollY;
});

/* 🤍이벤트 / 당첨자 버튼 */
$(function () {

  // 당첨자 발표 클릭
  $(".best_btn").click(function () {

    // 주황색 바 오른쪽 이동
    $(".tab").addClass("best_active");

    // 이벤트 배너 숨기기
    $(".mini_banner_wrap1").hide();

    // 당첨자 배너 보이기
    $(".mini_banner_wrap2").css("display", "flex");

  });

  // 이벤트 클릭
  $(".event_btn").click(function () {

    // 주황색 바 왼쪽 이동
    $(".tab").removeClass("best_active");

    // 당첨자 배너 숨기기
    $(".mini_banner_wrap2").hide();

    // 이벤트 배너 보이기
    $(".mini_banner_wrap1").css("display", "flex");

  });

});