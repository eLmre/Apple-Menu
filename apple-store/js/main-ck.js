$(document).ready(function() {
    function i(e, t, n) {
        if ($(window).width() < 1025) {
            e.detach();
            t.detach();
            n.insertAfter("body div.all-content-wrap")
        } else {
            e.appendTo($("header ul").eq(0));
            t.insertAfter("body div.all-content-wrap");
            n.detach()
        }
    }

    function o(e, t) {
        e.removeClass("moves-left");
        t.removeClass("moves-left");
        $("body").removeClass("is-fixed")
    }

    function u(e, t) {
        e.addClass("moves-left");
        t.addClass("moves-left");
        $("body").addClass("is-fixed")
    }

    function M(e, t) {
        var n = 0 - $(window).scrollTop() * t + "px";
        e.css({
            backgroundPosition: "50% " + n
        })
    }

    function F(e, t, n) {
        if (n == "Next") {
            e.eq(t - 2).removeClass("acc-item-1").addClass("acc-item-moves-left");
            e.eq(t - 1).removeClass("acc-item-2").addClass("acc-item-1");
            e.eq(t).removeClass("acc-item-3").addClass("acc-item-2");
            e.eq(t + 1).removeClass("acc-item-4").addClass("acc-item-3");
            e.eq(t + 2).removeClass("acc-item-hidden").addClass("acc-item-4")
        } else {
            e.eq(t - 1).removeClass("acc-item-moves-left").addClass("acc-item-1");
            e.eq(t).removeClass("acc-item-1").addClass("acc-item-2");
            e.eq(t + 1).removeClass("acc-item-2").addClass("acc-item-3");
            e.eq(t + 2).removeClass("acc-item-3").addClass("acc-item-4");
            e.eq(t + 3).removeClass("acc-item-4").addClass("acc-item-hidden")
        }
    }

    function I(e, t, n, r) {
        if (n === 1) {
            e.eq(1).show();
            t.eq(1).show();
            e.eq(0).hide();
            t.eq(0).hide()
        } else if (n >= r) {
            e.eq(1).hide();
            t.eq(1).hide();
            e.eq(0).show();
            t.eq(0).show()
        } else if (n > 1 && n < r) {
            e.show();
            t.show()
        }
    }

    function q(e) {
        $(window).width() > 1024 ? n = 4 : $(window).width() > 768 && $(window).width() <= 1024 ? n = 3 : $(window).width() > 480 && $(window).width() <= 768 ? n = 2 : n = 1;
        return n
    }

    function et(e, t, n, r, i) {
        var s = e.find("circle"),
            o = e.find("path");
        o.eq(0).attr({
            "stroke-dasharray": t + " " + t,
            "stroke-dashoffset": "-" + t
        }).css("opacity", 0);
        o.eq(1).attr({
            "stroke-dasharray": n + " " + n,
            "stroke-dashoffset": n
        }).css("opacity", 0);
        o.eq(2).attr({
            "stroke-dasharray": n + " " + n,
            "stroke-dashoffset": n
        }).css("opacity", 0);
        s.css("opacity", 0);
        i()
    }

    function tt(e, t, n, r) {
        var i = e.find("circle"),
            s = e.find("path");
        s.eq(0).attr({
            "stroke-dasharray": t + " " + t,
            "stroke-dashoffset": "-" + t
        }).css("opacity", 0);
        s.eq(1).attr({
            "stroke-dasharray": n + " " + n,
            "stroke-dashoffset": n
        }).css("opacity", 0);
        i.css("opacity", 0);
        r()
    }

    function nt(e, t, n, r) {
        var i = e.find("path");
        i.eq(0).attr({
            "stroke-dasharray": n + " " + n,
            "stroke-dashoffset": "-" + n
        }).css("opacity", 0);
        i.eq(1).attr({
            "stroke-dasharray": t + " " + t,
            "stroke-dashoffset": t
        }).css("opacity", 0);
        e.find("circle").css("opacity", 0);
        e.find("line").attr({
            x1: "22"
        }).css("opacity", 0);
        r()
    }

    function rt(e, t, n, r, i, s) {
        var o = e.find("path"),
            u = e.find("line");
        o.eq(0).attr({
            "stroke-dasharray": t + " " + t,
            "stroke-dashoffset": "-" + t
        }).css("opacity", 0);
        o.eq(1).attr({

            "stroke-dasharray": n + " " + n,
            "stroke-dashoffset": n
        }).css("opacity", 0);
        o.eq(2).attr({
            "stroke-dasharray": r + " " + r,
            "stroke-dashoffset": r
        }).css("opacity", 0);
        o.eq(3).attr({
            "stroke-dasharray": i + " " + i,
            "stroke-dashoffset": i
        }).css("opacity", 0);
        u.eq(0).attr({
            y1: "41"
        }).css("opacity", 0);
        u.eq(1).attr({
            x1: "59.1"
        }).css("opacity", 0);
        u.eq(2).attr({
            x1: "45"
        }).css("opacity", 0);
        u.eq(3).attr({
            y2: "41"
        }).css("opacity", 0);
        s()
    }

    function it(e, t, n, r) {
        e.css("opacity", "1");
        t == "y1" && ot(e, {
            y1: n
        }, r);
        t == "y2" && ot(e, {
            y2: n
        }, r);
        t == "x1" && ot(e, {
            x1: n
        }, r);
        t == "x2" && ot(e, {
            x2: n
        }, r)
    }

    function st(e, t, n, r) {
        e.delay(t).css("opacity", "1").animate({
            "stroke-dashoffset": 0
        }, n, r)
    }

    function ot(e, t, n) {
        var r = {},
            i = 20,
            s = Math.floor(n / i),
            o = s;
        $.each(t, function(t, n) {
            r[t] = e.attr(t)
        });
        (function u() {
            $.each(t, function(t, n) {
                var i = (n - r[t]) / s;
                e.attr(t, function(e, t) {
                    return +t + i
                })
            });
            --o ? setTimeout(u, i) : e.attr(t)
        })()
    }
    var e = $("header ul").eq(0).children("li:not(:first)"),
        t = $("nav#categories"),
        r = $("div.nav-container-mobile");
    i(e, t, r);
    $(window).on("resize", function() {
        i(e, t, r)
    });
    var s = r.find("a.has-submenu");
    $("a.hamburger-menu").on("click", function(e) {
        $("div.all-content-wrap").hasClass("moves-left") ? o($("div.all-content-wrap"), $("header")) : u($("div.all-content-wrap"), $("header"))
    });
    $(".all-content-wrap").on("click", function(e) {
        $(e.target).is("a.hamburger-menu") || o($("div.all-content-wrap"), $("header"))
    });
    s.on("click", function() {
        $(this).next("ul.mobile-submenu").toggleClass("is-visible");
        s.toggleClass("is-open")
    });
    var a = e.eq(0).find("li").eq(0).children("a");
    a.on("click", function() {
        t.fadeToggle(200);
        a.toggleClass("is-clicked");
        if (f.is(":visible")) {
            f.fadeOut(200);
            l.removeClass("is-open")
        }
    });
    var f = $("div.search-big"),
        l = e.eq(1).find("li").eq(2).children("a");
    l.on("click", function() {
        f.fadeToggle(200).children("input").focus();
        l.toggleClass("is-open");
        if (t.is(":visible")) {
            t.fadeOut(200);
            a.removeClass("is-clicked")
        }
    });
    $(window).on("resize", function() {
        if ($(window).width() < 1025) {
            t.fadeOut(200);
            f.fadeOut(200);
            a.removeClass("is-clicked");
            l.removeClass("is-open")
        } else {
            $("header").removeClass("moves-left");
            $("div.all-content-wrap").removeClass("moves-left");
            $("body").removeClass("is-fixed")
        }
    });
    $(document).on("click", function(e) {
        var n = e.target ? $(e.target) : $(e.srcElement);
        if (n.parents("header").length == 0 && n.parents("nav#categories").length == 0 && !n.is("input")) {
            t.fadeOut(200);
            a.removeClass("is-clicked");
            f.fadeOut(200);
            l.removeClass("is-open")
        }
    });
    var c = $("section#account"),
        h = e.eq(1).find("li").eq(0).children("a"),
        p = r.find("li").eq(1),
        d = c.find("div.modal-close a");
    h.on("click", function() {
        c.fadeIn(200);
        $("body").addClass("no-scroll")
    });
    p.on("click", function() {
        c.fadeIn(200);
        $("body").addClass("no-scroll")
    });
    d.on("click", function() {
        c.fadeOut(200);
        $("body").removeClass("no-scroll")
    });
    var v = $("section#cart"),
        m = e.eq(1).find("li").eq(1).children("a"),
        g = r.find("li").eq(2),
        y = v.find("div.modal-close a");
    m.on("click", function() {
        v.fadeIn(200);
        $("body").addClass("no-scroll")
    });
    g.on("click", function() {
        v.fadeIn(200);
        $("body").addClass("no-scroll")
    });
    y.on("click", function() {
        v.fadeOut(200);
        $("body").removeClass("no-scroll")
    });

    
});