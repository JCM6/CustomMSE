webpackJsonp([8], {
    638: function(e, t, n) {
        n(639),
        n(640),
        n(641),
        n(642),
        n(643),
        n(644),
        n(645),
        e.exports = n(646)
    },
    639: function(e, t, n) {
        (function(e) {
            !function(e, t, n, i) {
                function o(t, n) {
                    this.element = e(t),
                    this.settings = e.extend({}, S, n),
                    this._defaults = S,
                    this._name = T,
                    this.init()
                }
                function a(e) {
                    e.element.trigger("change")
                }
                function s(t) {
                    t.element.find("option").each(function(n, i) {
                        var o = e(i);
                        void 0 === o.data("original-index") && o.data("original-index", t.elementCount++),
                        void 0 === o.data("_selected") && o.data("_selected", !1)
                    })
                }
                function l(t, n, i) {
                    t.element.find("option").each(function(o, a) {
                        var s = e(a);
                        s.data("original-index") === n && (s.prop("selected", i),
                        i ? (s.attr("data-sortindex", t.sortIndex),
                        t.sortIndex++) : s.removeAttr("data-sortindex"))
                    })
                }
                function r(e, t) {
                    return e.replace(/\{(\d+)\}/g, function(e, n) {
                        return void 0 !== t[n] ? t[n] : e
                    })
                }
                function c(e) {
                    if (e.settings.infoText) {
                        var t = e.elements.select1.find("option").length
                          , n = e.elements.select2.find("option").length
                          , i = e.element.find("option").length - e.selectedElements
                          , o = e.selectedElements
                          , a = "";
                        a = 0 === i ? e.settings.infoTextEmpty : t === i ? r(e.settings.infoText, [t, i]) : r(e.settings.infoTextFiltered, [t, i]),
                        e.elements.info1.html(a),
                        e.elements.box1.toggleClass("filtered", !(t === i || 0 === i)),
                        a = 0 === o ? e.settings.infoTextEmpty : n === o ? r(e.settings.infoText, [n, o]) : r(e.settings.infoTextFiltered, [n, o]),
                        e.elements.info2.html(a),
                        e.elements.box2.toggleClass("filtered", !(n === o || 0 === o))
                    }
                }
                function d(t) {
                    t.selectedElements = 0,
                    t.elements.select1.empty(),
                    t.elements.select2.empty(),
                    t.element.find("option").each(function(n, i) {
                        var o = e(i);
                        o.prop("selected") ? (t.selectedElements++,
                        t.elements.select2.append(o.clone(!0).prop("selected", o.data("_selected")))) : t.elements.select1.append(o.clone(!0).prop("selected", o.data("_selected")))
                    }),
                    t.settings.showFilterInputs && (u(t, 1),
                    u(t, 2)),
                    c(t)
                }
                function u(t, n) {
                    if (t.settings.showFilterInputs) {
                        h(t, n),
                        t.elements["select" + n].empty().scrollTop(0);
                        var i = new RegExp(e.trim(t.elements["filterInput" + n].val()),"gi")
                          , o = t.element.find("option")
                          , a = t.element;
                        a = 1 === n ? o.not(":selected") : a.find("option:selected"),
                        a.each(function(a, s) {
                            var l = e(s)
                              , r = !0;
                            (s.text.match(i) || t.settings.filterOnValues && l.attr("value").match(i)) && (r = !1,
                            t.elements["select" + n].append(l.clone(!0).prop("selected", l.data("_selected")))),
                            o.eq(l.data("original-index")).data("filtered" + n, r)
                        }),
                        c(t)
                    }
                }
                function h(t, n) {
                    var i = t.element.find("option");
                    t.elements["select" + n].find("option").each(function(t, n) {
                        var o = e(n);
                        i.eq(o.data("original-index")).data("_selected", o.prop("selected"))
                    })
                }
                function f(e) {
                    var t = e.children("option");
                    t.sort(function(e, t) {
                        var n = parseInt(e.getAttribute("data-sortindex"))
                          , i = parseInt(t.getAttribute("data-sortindex"));
                        return n > i ? 1 : n < i ? -1 : 0
                    }),
                    t.detach().appendTo(e)
                }
                function m(t) {
                    t.find("option").sort(function(t, n) {
                        return e(t).data("original-index") > e(n).data("original-index") ? 1 : -1
                    }).appendTo(t)
                }
                function p(e) {
                    e.elements.select1.find("option").each(function() {
                        e.element.find("option").data("_selected", !1)
                    })
                }
                function v(t) {
                    "all" !== t.settings.preserveSelectionOnMove || t.settings.moveOnSelect ? "moved" !== t.settings.preserveSelectionOnMove || t.settings.moveOnSelect || h(t, 1) : (h(t, 1),
                    h(t, 2)),
                    t.elements.select1.find("option:selected").each(function(n, i) {
                        var o = e(i);
                        o.data("filtered1") || l(t, o.data("original-index"), !0)
                    }),
                    d(t),
                    a(t),
                    t.settings.sortByInputOrder ? f(t.elements.select2) : m(t.elements.select2)
                }
                function g(t) {
                    "all" !== t.settings.preserveSelectionOnMove || t.settings.moveOnSelect ? "moved" !== t.settings.preserveSelectionOnMove || t.settings.moveOnSelect || h(t, 2) : (h(t, 1),
                    h(t, 2)),
                    t.elements.select2.find("option:selected").each(function(n, i) {
                        var o = e(i);
                        o.data("filtered2") || l(t, o.data("original-index"), !1)
                    }),
                    d(t),
                    a(t),
                    m(t.elements.select1),
                    t.settings.sortByInputOrder && f(t.elements.select2)
                }
                function b(t) {
                    "all" !== t.settings.preserveSelectionOnMove || t.settings.moveOnSelect ? "moved" !== t.settings.preserveSelectionOnMove || t.settings.moveOnSelect || h(t, 1) : (h(t, 1),
                    h(t, 2)),
                    t.element.find("option").each(function(n, i) {
                        var o = e(i);
                        o.data("filtered1") || (o.prop("selected", !0),
                        o.attr("data-sortindex", t.sortIndex),
                        t.sortIndex++)
                    }),
                    d(t),
                    a(t)
                }
                function x(t) {
                    "all" !== t.settings.preserveSelectionOnMove || t.settings.moveOnSelect ? "moved" !== t.settings.preserveSelectionOnMove || t.settings.moveOnSelect || h(t, 2) : (h(t, 1),
                    h(t, 2)),
                    t.element.find("option").each(function(t, n) {
                        var i = e(n);
                        i.data("filtered2") || (i.prop("selected", !1),
                        i.removeAttr("data-sortindex"))
                    }),
                    d(t),
                    a(t)
                }
                function y(e) {
                    e.elements.form.submit(function(t) {
                        e.elements.filterInput1.is(":focus") ? (t.preventDefault(),
                        e.elements.filterInput1.focusout()) : e.elements.filterInput2.is(":focus") && (t.preventDefault(),
                        e.elements.filterInput2.focusout())
                    }),
                    e.element.on("bootstrapDualListbox.refresh", function(t, n) {
                        e.refresh(n)
                    }),
                    e.elements.filterClear1.on("click", function() {
                        e.setNonSelectedFilter("", !0)
                    }),
                    e.elements.filterClear2.on("click", function() {
                        e.setSelectedFilter("", !0)
                    }),
                    !1 === e.settings.eventMoveOverride && e.elements.moveButton.on("click", function() {
                        v(e)
                    }),
                    !1 === e.settings.eventMoveAllOverride && e.elements.moveAllButton.on("click", function() {
                        b(e)
                    }),
                    !1 === e.settings.eventRemoveOverride && e.elements.removeButton.on("click", function() {
                        g(e)
                    }),
                    !1 === e.settings.eventRemoveAllOverride && e.elements.removeAllButton.on("click", function() {
                        x(e)
                    }),
                    e.elements.filterInput1.on("change keyup", function() {
                        u(e, 1)
                    }),
                    e.elements.filterInput2.on("change keyup", function() {
                        u(e, 2)
                    })
                }
                var T = "bootstrapDualListbox"
                  , S = {
                    bootstrap2Compatible: !1,
                    filterTextClear: "show all",
                    filterPlaceHolder: "Filter",
                    moveSelectedLabel: "Move selected",
                    moveAllLabel: "Move all",
                    removeSelectedLabel: "Remove selected",
                    removeAllLabel: "Remove all",
                    moveOnSelect: !0,
                    preserveSelectionOnMove: !1,
                    selectedListLabel: !1,
                    nonSelectedListLabel: !1,
                    helperSelectNamePostfix: "_helper",
                    selectorMinimalHeight: 100,
                    showFilterInputs: !0,
                    nonSelectedFilter: "",
                    selectedFilter: "",
                    infoText: "Showing all {0}",
                    infoTextFiltered: '<span class="label label-warning">Filtered</span> {0} from {1}',
                    infoTextEmpty: "Empty list",
                    filterOnValues: !1,
                    sortByInputOrder: !1,
                    eventMoveOverride: !1,
                    eventMoveAllOverride: !1,
                    eventRemoveOverride: !1,
                    eventRemoveAllOverride: !1
                }
                  , k = /android/i.test(navigator.userAgent.toLowerCase());
                o.prototype = {
                    init: function() {
                        this.container = e('<div class="bootstrap-duallistbox-container"> <div class="box1">   <label></label>   <span class="info-container">     <span class="info"></span>     <button type="button" class="btn clear1 pull-right"></button>   </span>   <input class="filter" type="text">   <div class="btn-group buttons">     <button type="button" class="btn moveall">       <i></i>       <i></i>     </button>     <button type="button" class="btn move">       <i></i>     </button>   </div>   <select multiple="multiple"></select> </div> <div class="box2">   <label></label>   <span class="info-container">     <span class="info"></span>     <button type="button" class="btn clear2 pull-right"></button>   </span>   <input class="filter" type="text">   <div class="btn-group buttons">     <button type="button" class="btn remove">       <i></i>     </button>     <button type="button" class="btn removeall">       <i></i>       <i></i>     </button>   </div>   <select multiple="multiple"></select> </div></div>').insertBefore(this.element),
                        this.elements = {
                            originalSelect: this.element,
                            box1: e(".box1", this.container),
                            box2: e(".box2", this.container),
                            filterInput1: e(".box1 .filter", this.container),
                            filterInput2: e(".box2 .filter", this.container),
                            filterClear1: e(".box1 .clear1", this.container),
                            filterClear2: e(".box2 .clear2", this.container),
                            label1: e(".box1 > label", this.container),
                            label2: e(".box2 > label", this.container),
                            info1: e(".box1 .info", this.container),
                            info2: e(".box2 .info", this.container),
                            select1: e(".box1 select", this.container),
                            select2: e(".box2 select", this.container),
                            moveButton: e(".box1 .move", this.container),
                            removeButton: e(".box2 .remove", this.container),
                            moveAllButton: e(".box1 .moveall", this.container),
                            removeAllButton: e(".box2 .removeall", this.container),
                            form: e(e(".box1 .filter", this.container)[0].form)
                        },
                        this.originalSelectName = this.element.attr("name") || "";
                        var t = "bootstrap-duallistbox-nonselected-list_" + this.originalSelectName
                          , n = "bootstrap-duallistbox-selected-list_" + this.originalSelectName;
                        return this.elements.select1.attr("id", t),
                        this.elements.select2.attr("id", n),
                        this.elements.label1.attr("for", t),
                        this.elements.label2.attr("for", n),
                        this.selectedElements = 0,
                        this.sortIndex = 0,
                        this.elementCount = 0,
                        this.setBootstrap2Compatible(this.settings.bootstrap2Compatible),
                        this.setFilterTextClear(this.settings.filterTextClear),
                        this.setFilterPlaceHolder(this.settings.filterPlaceHolder),
                        this.setMoveSelectedLabel(this.settings.moveSelectedLabel),
                        this.setMoveAllLabel(this.settings.moveAllLabel),
                        this.setRemoveSelectedLabel(this.settings.removeSelectedLabel),
                        this.setRemoveAllLabel(this.settings.removeAllLabel),
                        this.setMoveOnSelect(this.settings.moveOnSelect),
                        this.setPreserveSelectionOnMove(this.settings.preserveSelectionOnMove),
                        this.setSelectedListLabel(this.settings.selectedListLabel),
                        this.setNonSelectedListLabel(this.settings.nonSelectedListLabel),
                        this.setHelperSelectNamePostfix(this.settings.helperSelectNamePostfix),
                        this.setSelectOrMinimalHeight(this.settings.selectorMinimalHeight),
                        s(this),
                        this.setShowFilterInputs(this.settings.showFilterInputs),
                        this.setNonSelectedFilter(this.settings.nonSelectedFilter),
                        this.setSelectedFilter(this.settings.selectedFilter),
                        this.setInfoText(this.settings.infoText),
                        this.setInfoTextFiltered(this.settings.infoTextFiltered),
                        this.setInfoTextEmpty(this.settings.infoTextEmpty),
                        this.setFilterOnValues(this.settings.filterOnValues),
                        this.setSortByInputOrder(this.settings.sortByInputOrder),
                        this.setEventMoveOverride(this.settings.eventMoveOverride),
                        this.setEventMoveAllOverride(this.settings.eventMoveAllOverride),
                        this.setEventRemoveOverride(this.settings.eventRemoveOverride),
                        this.setEventRemoveAllOverride(this.settings.eventRemoveAllOverride),
                        this.element.hide(),
                        y(this),
                        d(this),
                        this.element
                    },
                    setBootstrap2Compatible: function(e, t) {
                        return this.settings.bootstrap2Compatible = e,
                        e ? (this.container.removeClass("row").addClass("row-fluid bs2compatible"),
                        this.container.find(".box1, .box2").removeClass("col-md-6").addClass("span6"),
                        this.container.find(".clear1, .clear2").removeClass("btn-default btn-xs").addClass("btn-mini"),
                        this.container.find("input, select").removeClass("form-control"),
                        this.container.find(".btn").removeClass("btn-default"),
                        this.container.find(".moveall > i, .move > i").removeClass("glyphicon glyphicon-arrow-right").addClass("icon-arrow-right"),
                        this.container.find(".removeall > i, .remove > i").removeClass("glyphicon glyphicon-arrow-left").addClass("icon-arrow-left")) : (this.container.removeClass("row-fluid bs2compatible").addClass("row"),
                        this.container.find(".box1, .box2").removeClass("span6").addClass("col-md-6"),
                        this.container.find(".clear1, .clear2").removeClass("btn-mini").addClass("btn-default btn-xs"),
                        this.container.find("input, select").addClass("form-control"),
                        this.container.find(".btn").addClass("btn-default"),
                        this.container.find(".moveall > i, .move > i").removeClass("icon-arrow-right").addClass("glyphicon glyphicon-arrow-right"),
                        this.container.find(".removeall > i, .remove > i").removeClass("icon-arrow-left").addClass("glyphicon glyphicon-arrow-left")),
                        t && d(this),
                        this.element
                    },
                    setFilterTextClear: function(e, t) {
                        return this.settings.filterTextClear = e,
                        this.elements.filterClear1.html(e),
                        this.elements.filterClear2.html(e),
                        t && d(this),
                        this.element
                    },
                    setFilterPlaceHolder: function(e, t) {
                        return this.settings.filterPlaceHolder = e,
                        this.elements.filterInput1.attr("placeholder", e),
                        this.elements.filterInput2.attr("placeholder", e),
                        t && d(this),
                        this.element
                    },
                    setMoveSelectedLabel: function(e, t) {
                        return this.settings.moveSelectedLabel = e,
                        this.elements.moveButton.attr("title", e),
                        t && d(this),
                        this.element
                    },
                    setMoveAllLabel: function(e, t) {
                        return this.settings.moveAllLabel = e,
                        this.elements.moveAllButton.attr("title", e),
                        t && d(this),
                        this.element
                    },
                    setRemoveSelectedLabel: function(e, t) {
                        return this.settings.removeSelectedLabel = e,
                        this.elements.removeButton.attr("title", e),
                        t && d(this),
                        this.element
                    },
                    setRemoveAllLabel: function(e, t) {
                        return this.settings.removeAllLabel = e,
                        this.elements.removeAllButton.attr("title", e),
                        t && d(this),
                        this.element
                    },
                    setMoveOnSelect: function(e, t) {
                        if (k && (e = !0),
                        this.settings.moveOnSelect = e,
                        this.settings.moveOnSelect) {
                            this.container.addClass("moveonselect");
                            var n = this;
                            this.elements.select1.on("change", function() {
                                v(n)
                            }),
                            this.elements.select2.on("change", function() {
                                g(n)
                            })
                        } else
                            this.container.removeClass("moveonselect"),
                            this.elements.select1.off("change"),
                            this.elements.select2.off("change");
                        return t && d(this),
                        this.element
                    },
                    setPreserveSelectionOnMove: function(e, t) {
                        return k && (e = !1),
                        this.settings.preserveSelectionOnMove = e,
                        t && d(this),
                        this.element
                    },
                    setSelectedListLabel: function(e, t) {
                        return this.settings.selectedListLabel = e,
                        e ? this.elements.label2.show().html(e) : this.elements.label2.hide().html(e),
                        t && d(this),
                        this.element
                    },
                    setNonSelectedListLabel: function(e, t) {
                        return this.settings.nonSelectedListLabel = e,
                        e ? this.elements.label1.show().html(e) : this.elements.label1.hide().html(e),
                        t && d(this),
                        this.element
                    },
                    setHelperSelectNamePostfix: function(e, t) {
                        return this.settings.helperSelectNamePostfix = e,
                        e ? (this.elements.select1.attr("name", this.originalSelectName + e + "1"),
                        this.elements.select2.attr("name", this.originalSelectName + e + "2")) : (this.elements.select1.removeAttr("name"),
                        this.elements.select2.removeAttr("name")),
                        t && d(this),
                        this.element
                    },
                    setSelectOrMinimalHeight: function(e, t) {
                        this.settings.selectorMinimalHeight = e;
                        var n = this.element.height();
                        return this.element.height() < e && (n = e),
                        this.elements.select1.height(n),
                        this.elements.select2.height(n),
                        t && d(this),
                        this.element
                    },
                    setShowFilterInputs: function(e, t) {
                        return e ? (this.elements.filterInput1.show(),
                        this.elements.filterInput2.show()) : (this.setNonSelectedFilter(""),
                        this.setSelectedFilter(""),
                        d(this),
                        this.elements.filterInput1.hide(),
                        this.elements.filterInput2.hide()),
                        this.settings.showFilterInputs = e,
                        t && d(this),
                        this.element
                    },
                    setNonSelectedFilter: function(e, t) {
                        if (this.settings.showFilterInputs)
                            return this.settings.nonSelectedFilter = e,
                            this.elements.filterInput1.val(e),
                            t && d(this),
                            this.element
                    },
                    setSelectedFilter: function(e, t) {
                        if (this.settings.showFilterInputs)
                            return this.settings.selectedFilter = e,
                            this.elements.filterInput2.val(e),
                            t && d(this),
                            this.element
                    },
                    setInfoText: function(e, t) {
                        return this.settings.infoText = e,
                        t && d(this),
                        this.element
                    },
                    setInfoTextFiltered: function(e, t) {
                        return this.settings.infoTextFiltered = e,
                        t && d(this),
                        this.element
                    },
                    setInfoTextEmpty: function(e, t) {
                        return this.settings.infoTextEmpty = e,
                        t && d(this),
                        this.element
                    },
                    setFilterOnValues: function(e, t) {
                        return this.settings.filterOnValues = e,
                        t && d(this),
                        this.element
                    },
                    setSortByInputOrder: function(e, t) {
                        return this.settings.sortByInputOrder = e,
                        t && d(this),
                        this.element
                    },
                    setEventMoveOverride: function(e, t) {
                        return this.settings.eventMoveOverride = e,
                        t && d(this),
                        this.element
                    },
                    setEventMoveAllOverride: function(e, t) {
                        return this.settings.eventMoveAllOverride = e,
                        t && d(this),
                        this.element
                    },
                    setEventRemoveOverride: function(e, t) {
                        return this.settings.eventRemoveOverride = e,
                        t && d(this),
                        this.element
                    },
                    setEventRemoveAllOverride: function(e, t) {
                        return this.settings.eventRemoveAllOverride = e,
                        t && d(this),
                        this.element
                    },
                    getContainer: function() {
                        return this.container
                    },
                    refresh: function(e) {
                        s(this),
                        e ? p(this) : (h(this, 1),
                        h(this, 2)),
                        d(this)
                    },
                    destroy: function() {
                        return this.container.remove(),
                        this.element.show(),
                        e.data(this, "plugin_" + T, null),
                        this.element
                    }
                },
                e.fn[T] = function(t) {
                    var n = arguments;
                    if (void 0 === t || "object" == typeof t)
                        return this.each(function() {
                            e(this).is("select") ? e.data(this, "plugin_" + T) || e.data(this, "plugin_" + T, new o(this,t)) : e(this).find("select").each(function(n, i) {
                                e(i).bootstrapDualListbox(t)
                            })
                        });
                    if ("string" == typeof t && "_" !== t[0] && "init" !== t) {
                        var i;
                        return this.each(function() {
                            var a = e.data(this, "plugin_" + T);
                            a instanceof o && "function" == typeof a[t] && (i = a[t].apply(a, Array.prototype.slice.call(n, 1)))
                        }),
                        void 0 !== i ? i : this
                    }
                }
            }(e, window, document)
        }
        ).call(t, n(10))
    },
    640: function(e, t) {},
    641: function(e, t, n) {
        (function(e) {
            !function(e) {
                function t(t) {
                    if ("string" == typeof t.data && (t.data = {
                        keys: t.data
                    }),
                    t.data && t.data.keys && "string" == typeof t.data.keys) {
                        var n = t.handler
                          , i = t.data.keys.toLowerCase().split(" ");
                        t.handler = function(t) {
                            if (this === t.target || !(e.hotkeys.options.filterInputAcceptingElements && e.hotkeys.textInputTypes.test(t.target.nodeName) || e.hotkeys.options.filterContentEditable && e(t.target).attr("contenteditable") || e.hotkeys.options.filterTextInputs && e.inArray(t.target.type, e.hotkeys.textAcceptingInputTypes) > -1)) {
                                var o = "keypress" !== t.type && e.hotkeys.specialKeys[t.which]
                                  , a = String.fromCharCode(t.which).toLowerCase()
                                  , s = ""
                                  , l = {};
                                e.each(["alt", "ctrl", "shift"], function(e, n) {
                                    t[n + "Key"] && o !== n && (s += n + "+")
                                }),
                                t.metaKey && !t.ctrlKey && "meta" !== o && (s += "meta+"),
                                t.metaKey && "meta" !== o && s.indexOf("alt+ctrl+shift+") > -1 && (s = s.replace("alt+ctrl+shift+", "hyper+")),
                                o ? l[s + o] = !0 : (l[s + a] = !0,
                                l[s + e.hotkeys.shiftNums[a]] = !0,
                                "shift+" === s && (l[e.hotkeys.shiftNums[a]] = !0));
                                for (var r = 0, c = i.length; r < c; r++)
                                    if (l[i[r]])
                                        return n.apply(this, arguments)
                            }
                        }
                    }
                }
                e.hotkeys = {
                    version: "0.2.0",
                    specialKeys: {
                        8: "backspace",
                        9: "tab",
                        10: "return",
                        13: "return",
                        16: "shift",
                        17: "ctrl",
                        18: "alt",
                        19: "pause",
                        20: "capslock",
                        27: "esc",
                        32: "space",
                        33: "pageup",
                        34: "pagedown",
                        35: "end",
                        36: "home",
                        37: "left",
                        38: "up",
                        39: "right",
                        40: "down",
                        45: "insert",
                        46: "del",
                        59: ";",
                        61: "=",
                        96: "0",
                        97: "1",
                        98: "2",
                        99: "3",
                        100: "4",
                        101: "5",
                        102: "6",
                        103: "7",
                        104: "8",
                        105: "9",
                        106: "*",
                        107: "+",
                        109: "-",
                        110: ".",
                        111: "/",
                        112: "f1",
                        113: "f2",
                        114: "f3",
                        115: "f4",
                        116: "f5",
                        117: "f6",
                        118: "f7",
                        119: "f8",
                        120: "f9",
                        121: "f10",
                        122: "f11",
                        123: "f12",
                        144: "numlock",
                        145: "scroll",
                        173: "-",
                        186: ";",
                        187: "=",
                        188: ",",
                        189: "-",
                        190: ".",
                        191: "/",
                        192: "`",
                        219: "[",
                        220: "\\",
                        221: "]",
                        222: "'"
                    },
                    shiftNums: {
                        "`": "~",
                        1: "!",
                        2: "@",
                        3: "#",
                        4: "$",
                        5: "%",
                        6: "^",
                        7: "&",
                        8: "*",
                        9: "(",
                        0: ")",
                        "-": "_",
                        "=": "+",
                        ";": ": ",
                        "'": '"',
                        ",": "<",
                        ".": ">",
                        "/": "?",
                        "\\": "|"
                    },
                    textAcceptingInputTypes: ["text", "password", "number", "email", "url", "range", "date", "month", "week", "time", "datetime", "datetime-local", "search", "color", "tel"],
                    textInputTypes: /textarea|input|select/i,
                    options: {
                        filterInputAcceptingElements: !0,
                        filterTextInputs: !0,
                        filterContentEditable: !0
                    }
                },
                e.each(["keydown", "keyup", "keypress"], function() {
                    e.event.special[this] = {
                        add: t
                    }
                })
            }(e || this.jQuery || window.jQuery)
        }
        ).call(t, n(10))
    },
    642: function(e, t, n) {
        (function(e) {
            /*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
            !function(e) {
                function t(e, t) {
                    if (!(e.originalEvent.touches.length > 1)) {
                        e.preventDefault();
                        var n = e.originalEvent.changedTouches[0]
                          , i = document.createEvent("MouseEvents");
                        i.initMouseEvent(t, !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null),
                        e.target.dispatchEvent(i)
                    }
                }
                if (e.support.touch = "ontouchend"in document,
                e.support.touch) {
                    var n, i = e.ui.mouse.prototype, o = i._mouseInit, a = i._mouseDestroy;
                    i._touchStart = function(e) {
                        var i = this;
                        !n && i._mouseCapture(e.originalEvent.changedTouches[0]) && (n = !0,
                        i._touchMoved = !1,
                        t(e, "mouseover"),
                        t(e, "mousemove"),
                        t(e, "mousedown"))
                    }
                    ,
                    i._touchMove = function(e) {
                        n && (this._touchMoved = !0,
                        t(e, "mousemove"))
                    }
                    ,
                    i._touchEnd = function(e) {
                        n && (t(e, "mouseup"),
                        t(e, "mouseout"),
                        this._touchMoved || t(e, "click"),
                        n = !1)
                    }
                    ,
                    i._mouseInit = function() {
                        var t = this;
                        t.element.bind({
                            touchstart: e.proxy(t, "_touchStart"),
                            touchmove: e.proxy(t, "_touchMove"),
                            touchend: e.proxy(t, "_touchEnd")
                        }),
                        o.call(t)
                    }
                    ,
                    i._mouseDestroy = function() {
                        var t = this;
                        t.element.unbind({
                            touchstart: e.proxy(t, "_touchStart"),
                            touchmove: e.proxy(t, "_touchMove"),
                            touchend: e.proxy(t, "_touchEnd")
                        }),
                        a.call(t)
                    }
                }
            }(e)
        }
        ).call(t, n(10))
    },
    643: function(e, t) {},
    644: function(e, t, n) {
        (function(e) {
            /**
 * jQuery Longclick Event
 * ======================
 * Press & hold mouse button "long click" special event for jQuery 1.4.x
 *
 * @license Longclick Event
 * Copyright (c) 2010 Petr Vostrel (http://petr.vostrel.cz/)
 * Modified in 2014 by Pascal GANAYE (https://github.com/paganaye/Longclick/)
 * Modified in 2015 by (C)VIOLONIX inc. sendel2000@gmail.com
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Version: 0.4.0-c
 * Updated: 2015-2-6
 */
            !function(t) {
                function n(e) {
                    return t.each("touchstart touchend touchcancel".split(/ /), function(n, i) {
                        e.addEventListener(i, function(n) {
                            t(e).trigger(i)
                        }, !1)
                    }),
                    t(e)
                }
                function i(n) {
                    function i() {
                        t(o).data(b, !0).data(g, null),
                        n.type = s,
                        (e.event.dispatch || e.event.handle).apply(o, a)
                    }
                    if (!t(this).data(g)) {
                        var o = this
                          , a = arguments;
                        t(this).data(b, !1).data(g, setTimeout(i, t(this).data(v) || t.longclick.duration))
                    }
                }
                function o(e) {
                    var n = t(this).data(g);
                    n && t(this).data(g, clearTimeout(n) || null),
                    t(this).data(b, !1)
                }
                function a(e) {
                    if (t(this).data(b))
                        return e.stopImmediatePropagation() || !1
                }
                t.fn.longclick = function() {
                    var e = arguments[0]
                      , n = arguments[1]
                      , i = t(this).data(v, n || null);
                    return e ? i.bind(s, e) : i.trigger(s)
                }
                ,
                t.fn.longclick_state = function() {
                    return t(this).data(b)
                }
                ,
                t.longclick = {
                    duration: 500
                },
                t.event.special.longclick = {
                    setup: function(e, s) {
                        /iphone|ipad|ipod/i.test(navigator.userAgent) ? n(this).bind(f, i).bind([m, p].join(" "), o).bind(c, a).css({
                            WebkitUserSelect: "none"
                        }) : t(this).bind(r, i).bind([d, u, h].join(" "), o).bind(c, a)
                    },
                    teardown: function(e) {
                        t(this).unbind(l)
                    }
                };
                var s = "longclick"
                  , l = "." + s
                  , r = "mousedown" + l
                  , c = "click" + l
                  , d = "mouseup" + l
                  , u = "mouseout" + l
                  , h = "contextmenu" + l
                  , f = "touchstart" + l
                  , m = "touchend" + l
                  , p = "touchcancel" + l
                  , v = "duration" + l
                  , g = "timer" + l
                  , b = "fired" + l
            }(e)
        }
        ).call(t, n(10))
    },
    645: function(e, t, n) {
        (function(e, t) {
            PLAYTEST = function(n) {
                function i(e, t, n, i) {
                    o(e, t, n),
                    i || e.css({
                        position: "relative",
                        top: "",
                        left: ""
                    }),
                    e.removeClass("hidden"),
                    n ? e.prependTo(t) : e.appendTo(t),
                    i && (e.css({
                        position: "absolute"
                    }),
                    e.offset(i)),
                    r()
                }
                function o(t, n, i) {
                    var o = t.parent();
                    t.detach(),
                    !o.is(".stack") || n.is(o) && i ? o.is(f) && a(o) : (e(t.find(".face-down")).addClass("hidden"),
                    o.children().first().removeClass("hidden"))
                }
                function a(t) {
                    t.children().not(".ui-draggable-dragging").each(function(n) {
                        var i = t.offset();
                        i.top += 20 * n,
                        i.left += 15 * n,
                        e(this).css({
                            position: "absolute",
                            "z-index": n
                        }),
                        e(this).offset(i)
                    })
                }
                function s() {
                    var t = e(m).children().not(".ui-draggable-dragging");
                    if (n.getOpt("fixedHand") && t.length) {
                        var i = t.first()
                          , o = e(m).width()
                          , a = i.width()
                          , s = i.outerWidth()
                          , l = o / t.length;
                        t.each(function(t) {
                            if (l > s || 0 === t)
                                e(this).css({
                                    position: "relative",
                                    left: 0,
                                    "z-index": 0
                                });
                            else {
                                e(this).css({
                                    position: "absolute"
                                });
                                var n = (a + s) * t / 2 - (s - l) * t;
                                e(this).css({
                                    left: n + "px",
                                    "z-index": t
                                })
                            }
                        })
                    }
                }
                function l(t) {
                    t.draggable({
                        revert: "invalid",
                        zIndex: 1e3,
                        delay: 100,
                        stack: ".draggable",
                        start: function() {
                            e(this).css({
                                opacity: .3
                            }),
                            e(this).popover("disable")
                        },
                        stop: function() {
                            e(this).css({
                                opacity: 1
                            }),
                            e(this).popover("enable")
                        },
                        helper: "clone"
                    }).popover({
                        html: !0,
                        trigger: "hover",
                        delay: {
                            show: 400,
                            hide: 100
                        },
                        placement: "auto",
                        container: "body",
                        content: function() {
                            return '<img class="playtest-popover" src="' + this.dataset.image + '" />'
                        }
                    }).click(function(t) {
                        if (e(this).parent(u).length)
                            n.draw();
                        else {
                            if (!e(this).parent(m).length)
                                return;
                            n.moveTo(e(this), e(h))
                        }
                        return t.stopPropagation(),
                        t.stopImmediatePropagation(),
                        !1
                    }).toggleClass("small", n.getOpt("smallCards"))
                }
                function r() {
                    setTimeout(function() {
                        e(".droppable, " + h).each(function() {
                            var t = e(this).find(".draggable")
                              , n = "#" + e(this).attr("id") + "-title";
                            e(n + " span").text(t.length)
                        })
                    }, 10)
                }
                function c(i, o) {
                    var a = e(p).html()
                      , s = t.compile(a);
                    return i.map(function(t, i) {
                        var a = {
                            card: t,
                            faceDown: o,
                            hidden: 0 !== i,
                            mediaRoot: n.mediaRoot
                        }
                          , l = s(a);
                        return e(l).data(t)
                    })
                }
                function d(n) {
                    var i = e(v).html()
                      , o = t.compile(i);
                    return n.map(function(t, n) {
                        var i = {
                            card: t
                        }
                          , a = o(i);
                        return e(a).data(t)
                    })
                }
                n = {};
                var u = "#library"
                  , h = "#battlefield"
                  , f = "#battlefield .battlefield-cell"
                  , m = "#hand"
                  , p = "#draw-card-template"
                  , v = "#draw-ct-template";
                n.init = function(t) {
                    n.mediaRoot = t,
                    n.getOpt("snap") ? e(f).droppable({
                        tolerance: "intersect",
                        greedy: !0,
                        hoverClass: "card-over",
                        over: function() {
                            e(h).addClass("card-over")
                        },
                        out: function() {
                            e(f + ".card-over").length || e(h).removeClass("card-over")
                        },
                        drop: function(t, i) {
                            e(h).removeClass("card-over"),
                            n.getOpt("dontPile") && e(this).children().length ? i.draggable.parent(f).length ? (n.moveTo(e(this).children().first(), i.draggable.parent(f)),
                            n.moveTo(i.draggable, e(this))) : n.moveTo(i.draggable, e(h)) : n.moveTo(i.draggable, e(this))
                        }
                    }) : e(h).droppable({
                        hoverClass: "card-over",
                        tolerance: "fit",
                        drop: function(t, i) {
                            n.moveTo(i.draggable, e(h), !1, i.offset)
                        }
                    }),
                    e(m).droppable({
                        hoverClass: "card-over",
                        drop: function(t, i) {
                            if (!n.canMove(i.draggable, e(m)))
                                return void i.draggable.remove();
                            var o, a, l;
                            e(m).children().not(".ui-draggable-dragging").each(function(t) {
                                var n = Math.abs(i.offset.left - e(this).offset().left)
                                  , s = Math.abs(i.offset.top - e(this).offset().top);
                                (!o || n < o || n === o && s < a) && (o = n,
                                a = s,
                                l = t)
                            }),
                            n.moveTo(i.draggable, e(m)),
                            e(m).children().length > 1 && (i.draggable.detach(),
                            e(m).children().eq(l).before(i.draggable),
                            s())
                        }
                    }),
                    e(u).droppable({
                        hoverClass: "card-over",
                        drop: function(t, i) {
                            i.draggable.parent(u).length || n.moveTo(i.draggable, e(u), !0)
                        }
                    }).addClass("stack")
                }
                ,
                n.load = function(t) {
                    e(".draggable").remove(),
                    e(u).append(c(t, !0)),
                    l(e(".draggable")),
                    e(".draggable").each(function() {
                        n.moveTo(e(this), e(u))
                    }),
                    n.shuffle()
                }
                ,
                n.draw = function(t) {
                    (!t || t < 1) && (t = 1);
                    for (var i = 0; i < t; i++)
                        n.moveTo(e(u).children().first(), e(m))
                }
                ,
                n.drawByName = function(t) {
                    var i = e(u).find('[data-original-title="' + t + '"]').first();
                    n.moveTo(i, e(m))
                }
                ,
                n.createStack = function(t) {
                    e(t).droppable({
                        hoverClass: "card-over",
                        drop: function(t, i) {
                            n.moveTo(i.draggable, e(this), !0)
                        }
                    }).addClass("stack")
                }
                ,
                n.reset = function() {
                    e(".extra-card").remove(),
                    e(".draggable").each(function() {
                        n.moveTo(e(this), e(u), !0)
                    }),
                    n.shuffle()
                }
                ,
                n.shuffle = function() {
                    e(u).children().addClass("hidden"),
                    e(u).children().randomize().randomize().randomize(),
                    e(u).children().first().removeClass("hidden"),
                    r()
                }
                ,
                n.roll = function(e) {
                    return Math.floor(Math.random() * e) + 1
                }
                ,
                n.createExtraCard = function(e) {
                    var t = c([e])[0];
                    return t.addClass("extra-card"),
                    l(t),
                    t
                }
                ,
                n.createExtraToken = function(e) {
                    var t = d([e])[0];
                    return t.addClass("extra-card"),
                    l(t),
                    t
                }
                ,
                n.pickCell = function(t) {
                    return e(f).sort(function(t, n) {
                        return e(t).children().length - e(n).children().length
                    }).first()
                }
                ;
                var g = {
                    snap: !1,
                    fixedHand: !0,
                    dontPile: !1,
                    smallCards: !1
                };
                return localStorage.playtester = localStorage.playtester || {},
                n.getOpt = function(e, t) {
                    return void 0 !== localStorage["playtester." + e] ? "true" === localStorage["playtester." + e] : void 0 !== g[e] ? g[e] : t
                }
                ,
                n.setOpt = function(e, t) {
                    localStorage["playtester." + e] = t
                }
                ,
                n.canMove = function(e, t) {
                    return !0
                }
                ,
                n.moveTo = function(t, o, l, r) {
                    if (e(".draggable").popover("hide"),
                    0 == n.canMove(t, o))
                        return void t.remove();
                    var c = t.parent();
                    o.is(".stack") && l ? o.children().first().addClass("hidden") : o.is(h) && !r && (o = n.pickCell(t)),
                    i(t, o, l, r),
                    o.is(f) ? a(o) : o.is(u) && (t.find(".face-down").removeClass("hidden"),
                    !l && o.children().length && t.addClass("hidden")),
                    s(),
                    n.postMove(t, c, o)
                }
                ,
                n.postMove = e.noop,
                n
            }(),
            e.fn.randomize = function(t) {
                return (t ? this.find(t) : this).parent().each(function() {
                    e(this).children(t).sort(function() {
                        return Math.random() - .5
                    }).detach().appendTo(this)
                }),
                this
            }
        }
        ).call(t, n(10), n(379))
    },
    646: function(e, t, n) {
        (function(e) {
            TAPPED_PLAYTEST = function(t) {
                function n() {
                    "none" === e(".visible-xs").css("display") ? e(".visible-xs").remove() : e(".hidden-xs").remove(),
                    t.mulligans = 0,
                    e("#mulligan").click(function() {
                        confirm("Are you sure you want to mulligan?") && (e("#hand").children().each(function() {
                            PLAYTEST.moveTo(e(this), e("#library"))
                        }),
                        t.mulligans += 1,
                        PLAYTEST.shuffle(),
                        PLAYTEST.draw(t.STARTING_HAND - t.mulligans))
                    }),
                    t.turn = 1,
                    e("#next-turn").click(function() {
                        PLAYTEST.getOpt("autoUntap", !0) && e(".draggable").removeClass("tapped"),
                        e("#turn").text(++t.turn),
                        PLAYTEST.getOpt("autoDraw", !0) && PLAYTEST.draw(1)
                    }),
                    t.START_LIFE = t.isCommander ? 40 : 20,
                    e("#life-counter .global-counter").text(t.START_LIFE),
                    e("#life2-counter .global-counter").text(t.START_LIFE),
                    e("#poison-counter .global-counter").text(0),
                    e("#energy-counter .global-counter").text(0),
                    t.setupGlobalCounter("life", t.START_LIFE, 100),
                    t.setupGlobalCounter("life2", t.START_LIFE, 100),
                    t.setupGlobalCounter("poison", 0, 10),
                    t.setupGlobalCounter("energy", 0, 100),
                    e(".dropdown").on("shown.bs.dropdown", function() {
                        e(this).find(".dropdown-menu li.selected a").focus()
                    }),
                    e("#untap").click(function() {
                        e(".draggable").removeClass("tapped")
                    }),
                    e("#shuffle").click(function() {
                        PLAYTEST.shuffle()
                    }),
                    e("#hide-hand").click(u),
                    e("#dice").click(function() {
                        var e = [2, 4, 6, 8, 10, 12, 20, 100].map(function(e) {
                            return PLAYTEST.roll(e) + "/" + e
                        }).join(", ");
                        alert("Your dice rolled:\n" + e)
                    }),
                    e("#restart").click(function() {
                        confirm("Are you sure you want to restart?") && i()
                    });
                    var n = e(".tutor");
                    e.fn.select2.amd.require(["select2/data/array", "select2/utils"], function(t, i) {
                        function o(e, t) {
                            o.__super__.constructor.call(this, e, t)
                        }
                        i.Extend(o, t),
                        o.prototype.query = function(t, n) {
                            var i = []
                              , o = []
                              , a = t.term ? t.term.toLowerCase() : "";
                            e("#library").children().map(function() {
                                return e(this).data("name")
                            }).sort().each(function(e, t) {
                                o[o.length - 1] !== t && t.toLowerCase().indexOf(a) > -1 && o.push(t)
                            }),
                            e(o).each(function() {
                                i.push({
                                    id: this.valueOf(),
                                    text: this.valueOf()
                                })
                            }),
                            n({
                                results: i
                            })
                        }
                        ,
                        n.select2({
                            dataAdapter: o,
                            placeholder: "Tutor card",
                            width: "100%",
                            allowClear: !0
                        })
                    }),
                    n.on("select2:select", function(e) {
                        "" != e.params.data.text && PLAYTEST.drawByName(e.params.data.text),
                        n.val(null).trigger("change")
                    }),
                    ["library", "hand", "graveyard", "exiled"].forEach(function(t) {
                        e("#" + t + "-title a").click(function() {
                            e("#" + t + "-list").empty(),
                            e("#" + t).children().each(function() {
                                var n = e(this)
                                  , i = n.data("name")
                                  , o = e('<li><a href="javascript:void(0)">' + i + "</a></li>");
                                o.find("a").click(function() {
                                    y(n)
                                }),
                                e("#" + t + "-list").append(o)
                            })
                        })
                    })
                }
                function i() {
                    t.turn = 1,
                    e("#turn").text(t.turn),
                    e("#life-counter .global-counter").text(t.START_LIFE),
                    e("#life2-counter .global-counter").text(t.START_LIFE),
                    e("#poison-counter .global-counter").text(0),
                    t.mulligans = 0,
                    PLAYTEST.reset(),
                    t.isCommander && a(),
                    PLAYTEST.draw(t.STARTING_HAND)
                }
                function o() {
                    PLAYTEST.createStack("#command"),
                    e("#command").droppable("option", "accept", ".commander"),
                    a(),
                    e("#commander").click(function() {
                        PLAYTEST.moveTo(e(".commander"), e("#command"))
                    })
                }
                function a() {
                    e.each(t.data.commanders, function(t, n) {
                        var i = PLAYTEST.createExtraCard(n);
                        PLAYTEST.moveTo(i, e("#command")),
                        i.addClass("commander"),
                        c(i)
                    })
                }
                function s() {
                    if (!t.data.tokens.length)
                        return void e("#token").parent().remove();
                    t.addToken = function(n) {
                        var i = PLAYTEST.createExtraCard(t.data.tokens[n]);
                        PLAYTEST.moveTo(i, e("#battlefield")),
                        i.addClass("token"),
                        c(i)
                    }
                    ;
                    for (var n = 0; n < t.data.tokens.length; n++) {
                        var i = t.data.tokens[n].name;
                        if (void 0 !== t.data.tokens[n].pt)
                            var i = i + " (" + t.data.tokens[n].pt + ")";
                        var o = e('<li><a href="javascript:TAPPED_PLAYTEST.addToken(' + n + ')">' + i + "</a></li>");
                        e("#token-list").append(o)
                    }
                }
                function l() {
                    e(document).on("click", "#ct-add", function() {
                        var t = e("#ct-type").val() ? e("#ct-type").val() : "Token"
                          , n = e("#ct-power").val()
                          , i = e("#ct-toughness").val()
                          , o = Math.min(parseInt(e("#ct-qty").val() ? e("#ct-qty").val() : 1, 10));
                        data = {
                            type: t
                        },
                        n && (data.power = parseInt(n)),
                        i && (data.toughness = parseInt(i));
                        for (var a = 0; a < o; a++) {
                            var s = PLAYTEST.createExtraToken(data);
                            e(s).popover("destroy"),
                            PLAYTEST.moveTo(s, e("#battlefield")),
                            s.addClass("token"),
                            c(s)
                        }
                        r(),
                        e("#custom-token-modal").modal("toggle")
                    }),
                    e(document).on("click", "#ct-clear", function() {
                        r()
                    })
                }
                function r() {
                    e("#ct-form input").each(function() {
                        e(this).val("")
                    })
                }
                function c(t) {
                    t.click(function(t, n) {
                        var i = (e("#card-detail").data("bs.modal") || {}).isShown;
                        e(this).parents("#battlefield").length && !i && e(this).toggleClass("tapped")
                    }),
                    t.longclick(function() {
                        e(".ui-draggable-dragging").length || y(e(this))
                    })
                }
                function d(e) {
                    var n = (e.data("pt") || "0/0").split("/")
                      , i = m(e) - parseInt(n[0])
                      , o = p(e) - parseInt(n[1])
                      , a = e.data("transform")
                      , s = {};
                    ["name", "pt", "edition", "quantity", "type", "image_path"].forEach(function(t) {
                        s[t] = e.data(t),
                        e.data(t, a[t])
                    }),
                    e.data("transform", s),
                    e.attr("data-image", t.data.media_root + e.data("image_path")),
                    e.attr("data-original-title", e.data("name")),
                    e.css({
                        "background-image": "url(" + t.data.media_root + e.data("image_path") + ")"
                    }),
                    n = (e.data("pt") || "0/0").split("/"),
                    e.data("power", parseInt(n[0]) + i),
                    e.data("toughness", parseInt(n[1]) + o),
                    e.toggleClass("transform")
                }
                function u() {
                    e("#hand .face-down").removeClass("hidden"),
                    e("#hide-hand").text("Show").off().click(h)
                }
                function h() {
                    e("#hand .face-down").addClass("hidden"),
                    e("#hide-hand").text("Hide").off().click(u)
                }
                function f() {
                    e("#hand").children().length && 0 === e("#hand .face-down.hidden").length ? e("#hide-hand").text("Show").off().click(h) : e("#hide-hand").text("Hide").off().click(u)
                }
                function m(e) {
                    var t = e.data("pt")
                      , n = e.data("power");
                    return void 0 === n && t && (n = t.split("/")[0]),
                    parseInt(n || "0")
                }
                function p(e) {
                    var t = e.data("pt")
                      , n = e.data("toughness");
                    return void 0 === n && t && (n = t.split("/")[1]),
                    parseInt(n || "0")
                }
                function v(e) {
                    var t = e.data("counters");
                    return parseInt(t || "0")
                }
                function g(e) {
                    var t = v(e)
                      , n = m(e)
                      , i = p(e);
                    e.find(".counter").text(t ? t + "c" : "");
                    var o = "";
                    (n || i) && (o = (n || "0") + "/" + (i || "0")),
                    e.find(".power-toughness").text(o)
                }
                function b(e, t) {
                    e.removeData("counters"),
                    e.removeData("power"),
                    e.removeData("toughness"),
                    t && e.removeData("notes")
                }
                function x(t) {
                    e("#power").val(m(t)),
                    e("#toughness").val(p(t)),
                    e("#counters").val(v(t)),
                    e("#notes").val(t.data("notes"))
                }
                function y(n) {
                    var i = n.data().name ? n.data().name : n.data().type
                      , o = n.data().edition ? n.data().edition : "";
                    if (e("#card-detail .name").text(i),
                    e("#card-detail .tla").text(o),
                    n.data().image_path) {
                        var a = t.data.media_root + n.data().image_path;
                        e("#card-detail .image").attr("src", a),
                        e("#card-detail .image").show()
                    } else
                        e("#card-detail .image").hide();
                    T(n),
                    x(n),
                    ["power", "toughness", "counters", "notes"].forEach(function(t) {
                        e("#" + t).off().change(function() {
                            n.data(t, e(this).val())
                        })
                    }),
                    e("#card-detail").on("hide.bs.modal", function() {
                        g(n)
                    }),
                    e("#card-detail").modal()
                }
                function T(t) {
                    function n(e, n) {
                        n = k[e](t) + n,
                        t.data(e, Math.max(0, n))
                    }
                    if (e(".move-to-button").each(function() {
                        var n = e(this).data("moveTo")
                          , i = e(this).data("top");
                        e(this).off().click(function() {
                            ("#command" !== n || t.hasClass("commander")) && (PLAYTEST.moveTo(t, e(n), i),
                            e("#card-detail").modal("hide"))
                        }),
                        t.parents(n).length ? "#library" !== n && e(this).addClass("hidden") : e(this).removeClass("hidden"),
                        "#command" === n && e(this).toggleClass("hidden", !t.is(".commander"))
                    }),
                    e("#modal-tap").text(t.hasClass("tapped") ? "Untap" : "Tap"),
                    e("#modal-tap").off().click(function() {
                        t.parents("#battlefield").length && (t.toggleClass("tapped"),
                        e("#card-detail").modal("hide"))
                    }),
                    e("#modal-tap").toggleClass("disabled", !t.parents("#battlefield").length),
                    t.data("transform"))
                        e("#modal-facedown").text("Transform"),
                        e("#modal-facedown").off().click(function() {
                            d(t),
                            g(t),
                            e("#card-detail").modal("hide")
                        });
                    else {
                        var i = t.find(".face-down").first();
                        e("#modal-facedown").off().click(function() {
                            i.toggleClass("hidden"),
                            f(),
                            e("#card-detail").modal("hide")
                        })
                    }
                    e("#add-counter").off().click(function() {
                        n("power", 1),
                        n("toughness", 1),
                        n("counters", 1),
                        x(t)
                    }),
                    e("#rm-counter").off().click(function() {
                        n("power", -1),
                        n("toughness", -1),
                        n("counters", -1),
                        x(t)
                    }),
                    e("#add-counter").toggleClass("disabled", !t.parents("#battlefield").length),
                    e("#rm-counter").toggleClass("disabled", !t.parents("#battlefield").length)
                }
                function S() {
                    function n(e) {
                        return e.edition ? " (" + e.edition + ")" : ""
                    }
                    function o() {
                        e("#edit-board-select").empty(),
                        e.each(t.data.cards, function(t, i) {
                            e("#edit-board-select").append(e("<option>", {
                                value: "cards-" + t,
                                text: i.name + n(i)
                            }))
                        }),
                        e.each(t.data.sideboard, function(t, i) {
                            e("#edit-board-select").append(e("<option>", {
                                value: "sideboard-" + t,
                                selected: !0,
                                text: i.name + n(i)
                            }))
                        })
                    }
                    o(),
                    e("#edit-board-select").bootstrapDualListbox({
                        selectedListLabel: "Side board",
                        nonSelectedListLabel: "Main board",
                        moveOnSelect: !1,
                        selectorMinimalHeight: 200
                    }),
                    e("#update-board").click(function() {
                        var n = [];
                        e("#edit-board-select option").not(":selected").each(function(e, i) {
                            var o = i.value.split("-")
                              , e = parseInt(o[1]);
                            "sideboard" === o[0] ? n.push(t.data.sideboard[e]) : n.push(t.data.cards[e])
                        }),
                        PLAYTEST.load(n),
                        c(e(".draggable")),
                        i()
                    }),
                    e("#reset-boards").click(function() {
                        o(),
                        e("#edit-board-select").bootstrapDualListbox("refresh")
                    })
                }
                t = {},
                PLAYTEST.canMove = function(t, n) {
                    return !t.hasClass("token") || "battlefield" == e(n).attr("id")
                }
                ,
                PLAYTEST.postMove = function(t, n) {
                    t.parents("#battlefield").length ? (n.is("#battlefield, .battlefield-cell") || t.find(".face-down").addClass("hidden"),
                    g(t)) : (t.removeClass("tapped"),
                    t.parent("#library").length || t.find(".face-down").addClass("hidden"),
                    t.hasClass("transform") && d(t),
                    b(t, t.parent("#library").length)),
                    n.is("#library") && t.parent("#hand").length && "Show" === e("#hide-hand").text() && t.find(".face-down").removeClass("hidden"),
                    f()
                }
                ,
                t.init = function(i, a, r) {
                    function d(e, t) {
                        return -1 !== e.indexOf(t, e.length - t.length)
                    }
                    t.data = a,
                    t.STARTING_HAND = i,
                    t.isCommander = r,
                    PLAYTEST.init(a.media_root),
                    PLAYTEST.load(a.cards),
                    PLAYTEST.draw(i),
                    PLAYTEST.createStack("#graveyard"),
                    PLAYTEST.createStack("#exiled"),
                    c(e(".draggable")),
                    n(),
                    r && o(),
                    s(),
                    l(),
                    t.hotkeySetup(),
                    t.settingsSetup(),
                    S(),
                    PLAYTEST.pickCell = function(t) {
                        var n = e(".battlefield-cell").toArray()
                          , i = t.data("type");
                        if (d(i, "Land"))
                            n = n.slice(6).concat(n.slice(0, 6));
                        else if (d(i, "Enchantment") || d(i, "Artifact")) {
                            var o = n.slice(0, 6)
                              , a = n.slice(6);
                            n = o.reverse().concat(a.reverse())
                        }
                        var s = n.slice()
                          , l = n.sort(function(t, n) {
                            var i = e(t).children().length - e(n).children().length;
                            return i || (i = s.indexOf(t) - s.indexOf(n)),
                            i
                        });
                        return e(l[0])
                    }
                }
                ,
                t.setupGlobalCounter = function(t, n, i) {
                    var o = "#" + t + "-counter";
                    e(o + " .global-counter").text(n),
                    e(o).click(function() {
                        var n = parseInt(e(o + " .global-counter").text());
                        e("#" + t + "-list").empty();
                        for (var a = 0; a <= i; a++) {
                            var s = a - n
                              , l = a;
                            s < 0 ? l += " : " + s : s > 0 && (l += " : +" + s);
                            var r = e('<li><a href="javascript:void(0)">' + l + "</a></li>");
                            a === n && r.addClass("selected"),
                            r.click(function(t) {
                                return function() {
                                    e(o + " .global-counter").text(t)
                                }
                            }(a)),
                            e("#" + t + "-list").append(r)
                        }
                    })
                }
                ,
                t.hotkeySetup = function() {
                    e(document).bind("keydown", "l", function() {
                        var t = parseInt(e("#life-counter .global-counter").text());
                        t < 100 && e("#life-counter .global-counter").text(++t)
                    }),
                    e(document).bind("keydown", "shift+l", function() {
                        var t = parseInt(e("#life-counter .global-counter").text());
                        t > 0 && e("#life-counter .global-counter").text(--t)
                    }),
                    e(document).bind("keydown", "p", function() {
                        var t = parseInt(e("#poison-counter .global-counter").text());
                        t < 10 && e("#poison-counter .global-counter").text(++t)
                    }),
                    e(document).bind("keydown", "shift+p", function() {
                        var t = parseInt(e("#poison-counter .global-counter").text());
                        t > 0 && e("#poison-counter .global-counter").text(--t)
                    }),
                    e("[hotkey]").not("#card-detail [hotkey]").each(function() {
                        var t = e(this);
                        e(document).bind("keydown", t.attr("hotkey"), function() {
                            t.trigger("click")
                        })
                    }),
                    e(document).bind("keydown", "d", function() {
                        PLAYTEST.draw()
                    }),
                    window.onkeydown = function(e) {
                        32 == e.keyCode && e.target == document.body && e.preventDefault()
                    }
                    ,
                    e(document).bind("keydown", "space", function() {
                        var t = e(".draggable:hover");
                        t && y(t)
                    }),
                    e(document).bind("keydown", "esc", function() {
                        e(".modal").modal("hide")
                    }),
                    e("#card-detail [hotkey]").each(function() {
                        var t = e(this);
                        e(document).bind("keydown." + t.attr("hotkey"), t.attr("hotkey"), function() {
                            var n = e(".draggable:hover");
                            n.length && (T(n),
                            t.trigger("click"))
                        })
                    });
                    var t = {
                        power: {
                            key: "q",
                            get: m
                        },
                        toughness: {
                            key: "w",
                            get: p
                        },
                        counters: {
                            key: "e",
                            get: v
                        }
                    };
                    Object.keys(t).forEach(function(n) {
                        e(document).bind("keydown", t[n].key, function() {
                            var i = e(".draggable:hover");
                            if (i) {
                                var o = t[n].get(i) + 1;
                                i.data(n, o),
                                g(i)
                            }
                        }),
                        e(document).bind("keydown", "shift+" + t[n].key, function() {
                            var i = e(".draggable:hover");
                            if (i) {
                                var o = t[n].get(i) - 1;
                                i.data(n, Math.max(o, 0)),
                                g(i)
                            }
                        })
                    })
                }
                ,
                t.settingsSetup = function() {
                    var t = ["snap", "fixedHand", "autoDraw", "autoUntap", "smallCards"]
                      , n = !1;
                    t.forEach(function(t) {
                        e("#opt-" + t).prop("checked", PLAYTEST.getOpt(t, !0)),
                        e("#opt-" + t).change(function() {
                            PLAYTEST.setOpt(t, e(this).is(":checked")),
                            n = !0
                        })
                    }),
                    e("#settings-modal").on("hide.bs.modal", function() {
                        n && (n = !1,
                        alert("Please refresh the page for the new settings to work."))
                    })
                }
                ;
                var k = {
                    counters: v,
                    power: m,
                    toughness: p
                };
                return t.addCounter = function(t, n) {
                    e("#battlefield").find(".draggable").each(function() {
                        var i = e(this);
                        if (v(i) || m(i) || p(i) || i.data("pt")) {
                            var o = k[t](i) + n;
                            i.data(t, Math.max(o, 0)),
                            g(i)
                        }
                    })
                }
                ,
                t
            }()
        }
        ).call(t, n(10))
    }
}, [638]);
