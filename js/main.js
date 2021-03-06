/* * SAPHIR - The Coming Soon Template
 *
 * This is a premium product available exclusively at this address https://themeforest.net/user/madeon08/portfolio
 *
 * The demo files are minified/crypted for copyright reasons, you will find them, expanded, commented and coded accurately in your download pack.
 *
 * Thanks for your support!
 *
 */
$(window).on("load", function () {
  "use strict";
  $(".brand-logo, #fp-nav, .main-content, footer").addClass("before-loading"),
    setTimeout(function () {
      $(".loader").addClass("loaded");
    }, 2600),
    setTimeout(function () {
      $("#loading").addClass("loaded");
    }, 2800),
    setTimeout(function () {
      $(".brand-logo").removeClass("before-loading").addClass("loaded");
    }, 3e3),
    setTimeout(function () {
      $("#fp-nav, .main-content")
        .removeClass("before-loading")
        .addClass("loaded");
    }, 3200),
    setTimeout(function () {
      $("footer").removeClass("before-loading").addClass("loaded");
    }, 3400),
    setTimeout(function () {
      $("#loading").remove(), $(".brand-logo, footer").addClass("after-load");
    }, 3600),
    setTimeout(function () {
      $("#fp-nav").addClass("notransition");
    }, 4800);
}),
  $(document).ready(function () {
    "use strict";
    function o() {
      $("[data-words]").attr("data-words", function (o, e) {
        for (
          var t = $(this), n = e.split("|"), a = n.length, s = 0, d = 0;
          d < a;
          d++
        )
          t.append($("<span/>", { text: n[d] }));
        (n = t.find("span").hide()),
          (function o() {
            t.animate({ width: n.eq(s).width() }),
              n.stop().fadeOut().eq(s).fadeIn().delay(750).show(0, o),
              (s = ++s % a);
          })();
      });
    }
    $("#fullpage").fullpage(),
      $(".main-content")
        .find("*")
        .filter(
          ":not(.ask-to-scroll, .arrow, .arrow span, #first-text, #second-text, .link_in_text, small, .submit span, .block-item a)"
        )
        .addClass("animate-element"),
      $("#small-screen-menu").on("click", function () {
        $("#fullpage, #fp-nav, .brand-logo, footer").toggleClass("menu-opened"),
          $("body, html").toggleClass("modal-open"),
          $(this).toggleClass("open").toggleClass("custom-menu");
      }),
      $(window).on("load resize", function () {
        $(this).width() < 1201
          ? $("#fp-nav").addClass("transition-desktop-mobile")
          : $(this).height() < 750
          ? $("#fp-nav").addClass("transition-desktop-mobile")
          : $("#fp-nav").removeClass("transition-desktop-mobile"),
          $(this).width() < 481
            ? $(".brand-logo").prependTo("#section0 .fp-tableCell")
            : $(".brand-logo").prependTo("body");
      }),
      o(),
      $("#notifyMe").notifyMe();
  });
