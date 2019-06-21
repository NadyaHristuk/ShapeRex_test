/*!
 * Chart.js v2.8.0
 * https://www.chartjs.org
 * (c) 2019 Chart.js Contributors
 * Released under the MIT License
 */
!function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e(function () {
    try {
      return require("moment");
    } catch (t) {}
  }()) : "function" == typeof define && define.amd ? define(["require"], function (t) {
    return e(function () {
      try {
        return t("moment");
      } catch (t) {}
    }());
  }) : t.Chart = e(t.moment);
}(this, function (t) {
  "use strict";

  t = t && t.hasOwnProperty("default") ? t.default : t;
  var e = {
    rgb2hsl: i,
    rgb2hsv: n,
    rgb2hwb: a,
    rgb2cmyk: o,
    rgb2keyword: s,
    rgb2xyz: l,
    rgb2lab: d,
    rgb2lch: function (t) {
      return x(d(t));
    },
    hsl2rgb: u,
    hsl2hsv: function (t) {
      var e = t[0],
          i = t[1] / 100,
          n = t[2] / 100;
      if (0 === n) return [0, 0, 0];
      return [e, 100 * (2 * (i *= (n *= 2) <= 1 ? n : 2 - n) / (n + i)), 100 * ((n + i) / 2)];
    },
    hsl2hwb: function (t) {
      return a(u(t));
    },
    hsl2cmyk: function (t) {
      return o(u(t));
    },
    hsl2keyword: function (t) {
      return s(u(t));
    },
    hsv2rgb: h,
    hsv2hsl: function (t) {
      var e,
          i,
          n = t[0],
          a = t[1] / 100,
          o = t[2] / 100;
      return e = a * o, [n, 100 * (e = (e /= (i = (2 - a) * o) <= 1 ? i : 2 - i) || 0), 100 * (i /= 2)];
    },
    hsv2hwb: function (t) {
      return a(h(t));
    },
    hsv2cmyk: function (t) {
      return o(h(t));
    },
    hsv2keyword: function (t) {
      return s(h(t));
    },
    hwb2rgb: c,
    hwb2hsl: function (t) {
      return i(c(t));
    },
    hwb2hsv: function (t) {
      return n(c(t));
    },
    hwb2cmyk: function (t) {
      return o(c(t));
    },
    hwb2keyword: function (t) {
      return s(c(t));
    },
    cmyk2rgb: f,
    cmyk2hsl: function (t) {
      return i(f(t));
    },
    cmyk2hsv: function (t) {
      return n(f(t));
    },
    cmyk2hwb: function (t) {
      return a(f(t));
    },
    cmyk2keyword: function (t) {
      return s(f(t));
    },
    keyword2rgb: w,
    keyword2hsl: function (t) {
      return i(w(t));
    },
    keyword2hsv: function (t) {
      return n(w(t));
    },
    keyword2hwb: function (t) {
      return a(w(t));
    },
    keyword2cmyk: function (t) {
      return o(w(t));
    },
    keyword2lab: function (t) {
      return d(w(t));
    },
    keyword2xyz: function (t) {
      return l(w(t));
    },
    xyz2rgb: p,
    xyz2lab: m,
    xyz2lch: function (t) {
      return x(m(t));
    },
    lab2xyz: v,
    lab2rgb: y,
    lab2lch: x,
    lch2lab: k,
    lch2xyz: function (t) {
      return v(k(t));
    },
    lch2rgb: function (t) {
      return y(k(t));
    }
  };

  function i(t) {
    var e,
        i,
        n = t[0] / 255,
        a = t[1] / 255,
        o = t[2] / 255,
        r = Math.min(n, a, o),
        s = Math.max(n, a, o),
        l = s - r;
    return s == r ? e = 0 : n == s ? e = (a - o) / l : a == s ? e = 2 + (o - n) / l : o == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), i = (r + s) / 2, [e, 100 * (s == r ? 0 : i <= .5 ? l / (s + r) : l / (2 - s - r)), 100 * i];
  }

  function n(t) {
    var e,
        i,
        n = t[0],
        a = t[1],
        o = t[2],
        r = Math.min(n, a, o),
        s = Math.max(n, a, o),
        l = s - r;
    return i = 0 == s ? 0 : l / s * 1e3 / 10, s == r ? e = 0 : n == s ? e = (a - o) / l : a == s ? e = 2 + (o - n) / l : o == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, i, s / 255 * 1e3 / 10];
  }

  function a(t) {
    var e = t[0],
        n = t[1],
        a = t[2];
    return [i(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(n, a))), 100 * (a = 1 - 1 / 255 * Math.max(e, Math.max(n, a)))];
  }

  function o(t) {
    var e,
        i = t[0] / 255,
        n = t[1] / 255,
        a = t[2] / 255;
    return [100 * ((1 - i - (e = Math.min(1 - i, 1 - n, 1 - a))) / (1 - e) || 0), 100 * ((1 - n - e) / (1 - e) || 0), 100 * ((1 - a - e) / (1 - e) || 0), 100 * e];
  }

  function s(t) {
    return _[JSON.stringify(t)];
  }

  function l(t) {
    var e = t[0] / 255,
        i = t[1] / 255,
        n = t[2] / 255;
    return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92) + .1805 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * e + .7152 * i + .0722 * n), 100 * (.0193 * e + .1192 * i + .9505 * n)];
  }

  function d(t) {
    var e = l(t),
        i = e[0],
        n = e[1],
        a = e[2];
    return n /= 100, a /= 108.883, i = (i /= 95.047) > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (i - n), 200 * (n - (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))];
  }

  function u(t) {
    var e,
        i,
        n,
        a,
        o,
        r = t[0] / 360,
        s = t[1] / 100,
        l = t[2] / 100;
    if (0 == s) return [o = 255 * l, o, o];
    e = 2 * l - (i = l < .5 ? l * (1 + s) : l + s - l * s), a = [0, 0, 0];

    for (var d = 0; d < 3; d++) (n = r + 1 / 3 * -(d - 1)) < 0 && n++, n > 1 && n--, o = 6 * n < 1 ? e + 6 * (i - e) * n : 2 * n < 1 ? i : 3 * n < 2 ? e + (i - e) * (2 / 3 - n) * 6 : e, a[d] = 255 * o;

    return a;
  }

  function h(t) {
    var e = t[0] / 60,
        i = t[1] / 100,
        n = t[2] / 100,
        a = Math.floor(e) % 6,
        o = e - Math.floor(e),
        r = 255 * n * (1 - i),
        s = 255 * n * (1 - i * o),
        l = 255 * n * (1 - i * (1 - o));
    n *= 255;

    switch (a) {
      case 0:
        return [n, l, r];

      case 1:
        return [s, n, r];

      case 2:
        return [r, n, l];

      case 3:
        return [r, s, n];

      case 4:
        return [l, r, n];

      case 5:
        return [n, r, s];
    }
  }

  function c(t) {
    var e,
        i,
        n,
        a,
        o = t[0] / 360,
        s = t[1] / 100,
        l = t[2] / 100,
        d = s + l;

    switch (d > 1 && (s /= d, l /= d), n = 6 * o - (e = Math.floor(6 * o)), 0 != (1 & e) && (n = 1 - n), a = s + n * ((i = 1 - l) - s), e) {
      default:
      case 6:
      case 0:
        r = i, g = a, b = s;
        break;

      case 1:
        r = a, g = i, b = s;
        break;

      case 2:
        r = s, g = i, b = a;
        break;

      case 3:
        r = s, g = a, b = i;
        break;

      case 4:
        r = a, g = s, b = i;
        break;

      case 5:
        r = i, g = s, b = a;
    }

    return [255 * r, 255 * g, 255 * b];
  }

  function f(t) {
    var e = t[0] / 100,
        i = t[1] / 100,
        n = t[2] / 100,
        a = t[3] / 100;
    return [255 * (1 - Math.min(1, e * (1 - a) + a)), 255 * (1 - Math.min(1, i * (1 - a) + a)), 255 * (1 - Math.min(1, n * (1 - a) + a))];
  }

  function p(t) {
    var e,
        i,
        n,
        a = t[0] / 100,
        o = t[1] / 100,
        r = t[2] / 100;
    return i = -.9689 * a + 1.8758 * o + .0415 * r, n = .0557 * a + -.204 * o + 1.057 * r, e = (e = 3.2406 * a + -1.5372 * o + -.4986 * r) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (i = Math.min(Math.max(0, i), 1)), 255 * (n = Math.min(Math.max(0, n), 1))];
  }

  function m(t) {
    var e = t[0],
        i = t[1],
        n = t[2];
    return i /= 100, n /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (e - i), 200 * (i - (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))];
  }

  function v(t) {
    var e,
        i,
        n,
        a,
        o = t[0],
        r = t[1],
        s = t[2];
    return o <= 8 ? a = (i = 100 * o / 903.3) / 100 * 7.787 + 16 / 116 : (i = 100 * Math.pow((o + 16) / 116, 3), a = Math.pow(i / 100, 1 / 3)), [e = e / 95.047 <= .008856 ? e = 95.047 * (r / 500 + a - 16 / 116) / 7.787 : 95.047 * Math.pow(r / 500 + a, 3), i, n = n / 108.883 <= .008859 ? n = 108.883 * (a - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(a - s / 200, 3)];
  }

  function x(t) {
    var e,
        i = t[0],
        n = t[1],
        a = t[2];
    return (e = 360 * Math.atan2(a, n) / 2 / Math.PI) < 0 && (e += 360), [i, Math.sqrt(n * n + a * a), e];
  }

  function y(t) {
    return p(v(t));
  }

  function k(t) {
    var e,
        i = t[0],
        n = t[1];
    return e = t[2] / 360 * 2 * Math.PI, [i, n * Math.cos(e), n * Math.sin(e)];
  }

  function w(t) {
    return M[t];
  }

  var M = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  },
      _ = {};

  for (var C in M) _[JSON.stringify(M[C])] = C;

  var S = function () {
    return new T();
  };

  for (var P in e) {
    S[P + "Raw"] = function (t) {
      return function (i) {
        return "number" == typeof i && (i = Array.prototype.slice.call(arguments)), e[t](i);
      };
    }(P);

    var I = /(\w+)2(\w+)/.exec(P),
        A = I[1],
        D = I[2];

    (S[A] = S[A] || {})[D] = S[P] = function (t) {
      return function (i) {
        "number" == typeof i && (i = Array.prototype.slice.call(arguments));
        var n = e[t](i);
        if ("string" == typeof n || void 0 === n) return n;

        for (var a = 0; a < n.length; a++) n[a] = Math.round(n[a]);

        return n;
      };
    }(P);
  }

  var T = function () {
    this.convs = {};
  };

  T.prototype.routeSpace = function (t, e) {
    var i = e[0];
    return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i));
  }, T.prototype.setValues = function (t, e) {
    return this.space = t, this.convs = {}, this.convs[t] = e, this;
  }, T.prototype.getValues = function (t) {
    var e = this.convs[t];

    if (!e) {
      var i = this.space,
          n = this.convs[i];
      e = S[i][t](n), this.convs[t] = e;
    }

    return e;
  }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (t) {
    T.prototype[t] = function (e) {
      return this.routeSpace(t, arguments);
    };
  });
  var F = S,
      L = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  },
      R = {
    getRgba: O,
    getHsla: z,
    getRgb: function (t) {
      var e = O(t);
      return e && e.slice(0, 3);
    },
    getHsl: function (t) {
      var e = z(t);
      return e && e.slice(0, 3);
    },
    getHwb: B,
    getAlpha: function (t) {
      var e = O(t);
      if (e) return e[3];
      if (e = z(t)) return e[3];
      if (e = B(t)) return e[3];
    },
    hexString: function (t, e) {
      var e = void 0 !== e && 3 === t.length ? e : t[3];
      return "#" + H(t[0]) + H(t[1]) + H(t[2]) + (e >= 0 && e < 1 ? H(Math.round(255 * e)) : "");
    },
    rgbString: function (t, e) {
      if (e < 1 || t[3] && t[3] < 1) return N(t, e);
      return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
    },
    rgbaString: N,
    percentString: function (t, e) {
      if (e < 1 || t[3] && t[3] < 1) return W(t, e);
      var i = Math.round(t[0] / 255 * 100),
          n = Math.round(t[1] / 255 * 100),
          a = Math.round(t[2] / 255 * 100);
      return "rgb(" + i + "%, " + n + "%, " + a + "%)";
    },
    percentaString: W,
    hslString: function (t, e) {
      if (e < 1 || t[3] && t[3] < 1) return V(t, e);
      return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)";
    },
    hslaString: V,
    hwbString: function (t, e) {
      void 0 === e && (e = void 0 !== t[3] ? t[3] : 1);
      return "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")";
    },
    keyword: function (t) {
      return j[t.slice(0, 3)];
    }
  };

  function O(t) {
    if (t) {
      var e = [0, 0, 0],
          i = 1,
          n = t.match(/^#([a-fA-F0-9]{3,4})$/i),
          a = "";

      if (n) {
        a = (n = n[1])[3];

        for (var o = 0; o < e.length; o++) e[o] = parseInt(n[o] + n[o], 16);

        a && (i = Math.round(parseInt(a + a, 16) / 255 * 100) / 100);
      } else if (n = t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) {
        a = n[2], n = n[1];

        for (o = 0; o < e.length; o++) e[o] = parseInt(n.slice(2 * o, 2 * o + 2), 16);

        a && (i = Math.round(parseInt(a, 16) / 255 * 100) / 100);
      } else if (n = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
        for (o = 0; o < e.length; o++) e[o] = parseInt(n[o + 1]);

        i = parseFloat(n[4]);
      } else if (n = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
        for (o = 0; o < e.length; o++) e[o] = Math.round(2.55 * parseFloat(n[o + 1]));

        i = parseFloat(n[4]);
      } else if (n = t.match(/(\w+)/)) {
        if ("transparent" == n[1]) return [0, 0, 0, 0];
        if (!(e = L[n[1]])) return;
      }

      for (o = 0; o < e.length; o++) e[o] = E(e[o], 0, 255);

      return i = i || 0 == i ? E(i, 0, 1) : 1, e[3] = i, e;
    }
  }

  function z(t) {
    if (t) {
      var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);

      if (e) {
        var i = parseFloat(e[4]);
        return [E(parseInt(e[1]), 0, 360), E(parseFloat(e[2]), 0, 100), E(parseFloat(e[3]), 0, 100), E(isNaN(i) ? 1 : i, 0, 1)];
      }
    }
  }

  function B(t) {
    if (t) {
      var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);

      if (e) {
        var i = parseFloat(e[4]);
        return [E(parseInt(e[1]), 0, 360), E(parseFloat(e[2]), 0, 100), E(parseFloat(e[3]), 0, 100), E(isNaN(i) ? 1 : i, 0, 1)];
      }
    }
  }

  function N(t, e) {
    return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")";
  }

  function W(t, e) {
    return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")";
  }

  function V(t, e) {
    return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")";
  }

  function E(t, e, i) {
    return Math.min(Math.max(e, t), i);
  }

  function H(t) {
    var e = t.toString(16).toUpperCase();
    return e.length < 2 ? "0" + e : e;
  }

  var j = {};

  for (var q in L) j[L[q]] = q;

  var Y = function (t) {
    return t instanceof Y ? t : this instanceof Y ? (this.valid = !1, this.values = {
      rgb: [0, 0, 0],
      hsl: [0, 0, 0],
      hsv: [0, 0, 0],
      hwb: [0, 0, 0],
      cmyk: [0, 0, 0, 0],
      alpha: 1
    }, void ("string" == typeof t ? (e = R.getRgba(t)) ? this.setValues("rgb", e) : (e = R.getHsla(t)) ? this.setValues("hsl", e) : (e = R.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new Y(t);
    var e;
  };

  Y.prototype = {
    isValid: function () {
      return this.valid;
    },
    rgb: function () {
      return this.setSpace("rgb", arguments);
    },
    hsl: function () {
      return this.setSpace("hsl", arguments);
    },
    hsv: function () {
      return this.setSpace("hsv", arguments);
    },
    hwb: function () {
      return this.setSpace("hwb", arguments);
    },
    cmyk: function () {
      return this.setSpace("cmyk", arguments);
    },
    rgbArray: function () {
      return this.values.rgb;
    },
    hslArray: function () {
      return this.values.hsl;
    },
    hsvArray: function () {
      return this.values.hsv;
    },
    hwbArray: function () {
      var t = this.values;
      return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb;
    },
    cmykArray: function () {
      return this.values.cmyk;
    },
    rgbaArray: function () {
      var t = this.values;
      return t.rgb.concat([t.alpha]);
    },
    hslaArray: function () {
      var t = this.values;
      return t.hsl.concat([t.alpha]);
    },
    alpha: function (t) {
      return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this);
    },
    red: function (t) {
      return this.setChannel("rgb", 0, t);
    },
    green: function (t) {
      return this.setChannel("rgb", 1, t);
    },
    blue: function (t) {
      return this.setChannel("rgb", 2, t);
    },
    hue: function (t) {
      return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t);
    },
    saturation: function (t) {
      return this.setChannel("hsl", 1, t);
    },
    lightness: function (t) {
      return this.setChannel("hsl", 2, t);
    },
    saturationv: function (t) {
      return this.setChannel("hsv", 1, t);
    },
    whiteness: function (t) {
      return this.setChannel("hwb", 1, t);
    },
    blackness: function (t) {
      return this.setChannel("hwb", 2, t);
    },
    value: function (t) {
      return this.setChannel("hsv", 2, t);
    },
    cyan: function (t) {
      return this.setChannel("cmyk", 0, t);
    },
    magenta: function (t) {
      return this.setChannel("cmyk", 1, t);
    },
    yellow: function (t) {
      return this.setChannel("cmyk", 2, t);
    },
    black: function (t) {
      return this.setChannel("cmyk", 3, t);
    },
    hexString: function () {
      return R.hexString(this.values.rgb);
    },
    rgbString: function () {
      return R.rgbString(this.values.rgb, this.values.alpha);
    },
    rgbaString: function () {
      return R.rgbaString(this.values.rgb, this.values.alpha);
    },
    percentString: function () {
      return R.percentString(this.values.rgb, this.values.alpha);
    },
    hslString: function () {
      return R.hslString(this.values.hsl, this.values.alpha);
    },
    hslaString: function () {
      return R.hslaString(this.values.hsl, this.values.alpha);
    },
    hwbString: function () {
      return R.hwbString(this.values.hwb, this.values.alpha);
    },
    keyword: function () {
      return R.keyword(this.values.rgb, this.values.alpha);
    },
    rgbNumber: function () {
      var t = this.values.rgb;
      return t[0] << 16 | t[1] << 8 | t[2];
    },
    luminosity: function () {
      for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
        var n = t[i] / 255;
        e[i] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4);
      }

      return .2126 * e[0] + .7152 * e[1] + .0722 * e[2];
    },
    contrast: function (t) {
      var e = this.luminosity(),
          i = t.luminosity();
      return e > i ? (e + .05) / (i + .05) : (i + .05) / (e + .05);
    },
    level: function (t) {
      var e = this.contrast(t);
      return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "";
    },
    dark: function () {
      var t = this.values.rgb;
      return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128;
    },
    light: function () {
      return !this.dark();
    },
    negate: function () {
      for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];

      return this.setValues("rgb", t), this;
    },
    lighten: function (t) {
      var e = this.values.hsl;
      return e[2] += e[2] * t, this.setValues("hsl", e), this;
    },
    darken: function (t) {
      var e = this.values.hsl;
      return e[2] -= e[2] * t, this.setValues("hsl", e), this;
    },
    saturate: function (t) {
      var e = this.values.hsl;
      return e[1] += e[1] * t, this.setValues("hsl", e), this;
    },
    desaturate: function (t) {
      var e = this.values.hsl;
      return e[1] -= e[1] * t, this.setValues("hsl", e), this;
    },
    whiten: function (t) {
      var e = this.values.hwb;
      return e[1] += e[1] * t, this.setValues("hwb", e), this;
    },
    blacken: function (t) {
      var e = this.values.hwb;
      return e[2] += e[2] * t, this.setValues("hwb", e), this;
    },
    greyscale: function () {
      var t = this.values.rgb,
          e = .3 * t[0] + .59 * t[1] + .11 * t[2];
      return this.setValues("rgb", [e, e, e]), this;
    },
    clearer: function (t) {
      var e = this.values.alpha;
      return this.setValues("alpha", e - e * t), this;
    },
    opaquer: function (t) {
      var e = this.values.alpha;
      return this.setValues("alpha", e + e * t), this;
    },
    rotate: function (t) {
      var e = this.values.hsl,
          i = (e[0] + t) % 360;
      return e[0] = i < 0 ? 360 + i : i, this.setValues("hsl", e), this;
    },
    mix: function (t, e) {
      var i = t,
          n = void 0 === e ? .5 : e,
          a = 2 * n - 1,
          o = this.alpha() - i.alpha(),
          r = ((a * o == -1 ? a : (a + o) / (1 + a * o)) + 1) / 2,
          s = 1 - r;
      return this.rgb(r * this.red() + s * i.red(), r * this.green() + s * i.green(), r * this.blue() + s * i.blue()).alpha(this.alpha() * n + i.alpha() * (1 - n));
    },
    toJSON: function () {
      return this.rgb();
    },
    clone: function () {
      var t,
          e,
          i = new Y(),
          n = this.values,
          a = i.values;

      for (var o in n) n.hasOwnProperty(o) && (t = n[o], "[object Array]" === (e = {}.toString.call(t)) ? a[o] = t.slice(0) : "[object Number]" === e ? a[o] = t : console.error("unexpected color value:", t));

      return i;
    }
  }, Y.prototype.spaces = {
    rgb: ["red", "green", "blue"],
    hsl: ["hue", "saturation", "lightness"],
    hsv: ["hue", "saturation", "value"],
    hwb: ["hue", "whiteness", "blackness"],
    cmyk: ["cyan", "magenta", "yellow", "black"]
  }, Y.prototype.maxes = {
    rgb: [255, 255, 255],
    hsl: [360, 100, 100],
    hsv: [360, 100, 100],
    hwb: [360, 100, 100],
    cmyk: [100, 100, 100, 100]
  }, Y.prototype.getValues = function (t) {
    for (var e = this.values, i = {}, n = 0; n < t.length; n++) i[t.charAt(n)] = e[t][n];

    return 1 !== e.alpha && (i.a = e.alpha), i;
  }, Y.prototype.setValues = function (t, e) {
    var i,
        n,
        a = this.values,
        o = this.spaces,
        r = this.maxes,
        s = 1;
    if (this.valid = !0, "alpha" === t) s = e;else if (e.length) a[t] = e.slice(0, t.length), s = e[t.length];else if (void 0 !== e[t.charAt(0)]) {
      for (i = 0; i < t.length; i++) a[t][i] = e[t.charAt(i)];

      s = e.a;
    } else if (void 0 !== e[o[t][0]]) {
      var l = o[t];

      for (i = 0; i < t.length; i++) a[t][i] = e[l[i]];

      s = e.alpha;
    }
    if (a.alpha = Math.max(0, Math.min(1, void 0 === s ? a.alpha : s)), "alpha" === t) return !1;

    for (i = 0; i < t.length; i++) n = Math.max(0, Math.min(r[t][i], a[t][i])), a[t][i] = Math.round(n);

    for (var d in o) d !== t && (a[d] = F[t][d](a[t]));

    return !0;
  }, Y.prototype.setSpace = function (t, e) {
    var i = e[0];
    return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this);
  }, Y.prototype.setChannel = function (t, e, i) {
    var n = this.values[t];
    return void 0 === i ? n[e] : i === n[e] ? this : (n[e] = i, this.setValues(t, n), this);
  }, "undefined" != typeof window && (window.Color = Y);
  var U,
      X = Y,
      K = {
    noop: function () {},
    uid: (U = 0, function () {
      return U++;
    }),
    isNullOrUndef: function (t) {
      return null == t;
    },
    isArray: function (t) {
      if (Array.isArray && Array.isArray(t)) return !0;
      var e = Object.prototype.toString.call(t);
      return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6);
    },
    isObject: function (t) {
      return null !== t && "[object Object]" === Object.prototype.toString.call(t);
    },
    isFinite: function (t) {
      return ("number" == typeof t || t instanceof Number) && isFinite(t);
    },
    valueOrDefault: function (t, e) {
      return void 0 === t ? e : t;
    },
    valueAtIndexOrDefault: function (t, e, i) {
      return K.valueOrDefault(K.isArray(t) ? t[e] : t, i);
    },
    callback: function (t, e, i) {
      if (t && "function" == typeof t.call) return t.apply(i, e);
    },
    each: function (t, e, i, n) {
      var a, o, r;
      if (K.isArray(t)) {
        if (o = t.length, n) for (a = o - 1; a >= 0; a--) e.call(i, t[a], a);else for (a = 0; a < o; a++) e.call(i, t[a], a);
      } else if (K.isObject(t)) for (o = (r = Object.keys(t)).length, a = 0; a < o; a++) e.call(i, t[r[a]], r[a]);
    },
    arrayEquals: function (t, e) {
      var i, n, a, o;
      if (!t || !e || t.length !== e.length) return !1;

      for (i = 0, n = t.length; i < n; ++i) if (a = t[i], o = e[i], a instanceof Array && o instanceof Array) {
        if (!K.arrayEquals(a, o)) return !1;
      } else if (a !== o) return !1;

      return !0;
    },
    clone: function (t) {
      if (K.isArray(t)) return t.map(K.clone);

      if (K.isObject(t)) {
        for (var e = {}, i = Object.keys(t), n = i.length, a = 0; a < n; ++a) e[i[a]] = K.clone(t[i[a]]);

        return e;
      }

      return t;
    },
    _merger: function (t, e, i, n) {
      var a = e[t],
          o = i[t];
      K.isObject(a) && K.isObject(o) ? K.merge(a, o, n) : e[t] = K.clone(o);
    },
    _mergerIf: function (t, e, i) {
      var n = e[t],
          a = i[t];
      K.isObject(n) && K.isObject(a) ? K.mergeIf(n, a) : e.hasOwnProperty(t) || (e[t] = K.clone(a));
    },
    merge: function (t, e, i) {
      var n,
          a,
          o,
          r,
          s,
          l = K.isArray(e) ? e : [e],
          d = l.length;
      if (!K.isObject(t)) return t;

      for (n = (i = i || {}).merger || K._merger, a = 0; a < d; ++a) if (e = l[a], K.isObject(e)) for (s = 0, r = (o = Object.keys(e)).length; s < r; ++s) n(o[s], t, e, i);

      return t;
    },
    mergeIf: function (t, e) {
      return K.merge(t, e, {
        merger: K._mergerIf
      });
    },
    extend: function (t) {
      for (var e = function (e, i) {
        t[i] = e;
      }, i = 1, n = arguments.length; i < n; ++i) K.each(arguments[i], e);

      return t;
    },
    inherits: function (t) {
      var e = this,
          i = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
        return e.apply(this, arguments);
      },
          n = function () {
        this.constructor = i;
      };

      return n.prototype = e.prototype, i.prototype = new n(), i.extend = K.inherits, t && K.extend(i.prototype, t), i.__super__ = e.prototype, i;
    }
  },
      G = K;
  K.callCallback = K.callback, K.indexOf = function (t, e, i) {
    return Array.prototype.indexOf.call(t, e, i);
  }, K.getValueOrDefault = K.valueOrDefault, K.getValueAtIndexOrDefault = K.valueAtIndexOrDefault;
  var Z = {
    linear: function (t) {
      return t;
    },
    easeInQuad: function (t) {
      return t * t;
    },
    easeOutQuad: function (t) {
      return -t * (t - 2);
    },
    easeInOutQuad: function (t) {
      return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
    },
    easeInCubic: function (t) {
      return t * t * t;
    },
    easeOutCubic: function (t) {
      return (t -= 1) * t * t + 1;
    },
    easeInOutCubic: function (t) {
      return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
    },
    easeInQuart: function (t) {
      return t * t * t * t;
    },
    easeOutQuart: function (t) {
      return -((t -= 1) * t * t * t - 1);
    },
    easeInOutQuart: function (t) {
      return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
    },
    easeInQuint: function (t) {
      return t * t * t * t * t;
    },
    easeOutQuint: function (t) {
      return (t -= 1) * t * t * t * t + 1;
    },
    easeInOutQuint: function (t) {
      return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
    },
    easeInSine: function (t) {
      return 1 - Math.cos(t * (Math.PI / 2));
    },
    easeOutSine: function (t) {
      return Math.sin(t * (Math.PI / 2));
    },
    easeInOutSine: function (t) {
      return -.5 * (Math.cos(Math.PI * t) - 1);
    },
    easeInExpo: function (t) {
      return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
    },
    easeOutExpo: function (t) {
      return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
    },
    easeInOutExpo: function (t) {
      return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t));
    },
    easeInCirc: function (t) {
      return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
    },
    easeOutCirc: function (t) {
      return Math.sqrt(1 - (t -= 1) * t);
    },
    easeInOutCirc: function (t) {
      return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    },
    easeInElastic: function (t) {
      var e = 1.70158,
          i = 0,
          n = 1;
      return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i));
    },
    easeOutElastic: function (t) {
      var e = 1.70158,
          i = 0,
          n = 1;
      return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / i) + 1);
    },
    easeInOutElastic: function (t) {
      var e = 1.70158,
          i = 0,
          n = 1;
      return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = .45), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), t < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * .5 + 1);
    },
    easeInBack: function (t) {
      var e = 1.70158;
      return t * t * ((e + 1) * t - e);
    },
    easeOutBack: function (t) {
      var e = 1.70158;
      return (t -= 1) * t * ((e + 1) * t + e) + 1;
    },
    easeInOutBack: function (t) {
      var e = 1.70158;
      return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
    },
    easeInBounce: function (t) {
      return 1 - Z.easeOutBounce(1 - t);
    },
    easeOutBounce: function (t) {
      return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
    },
    easeInOutBounce: function (t) {
      return t < .5 ? .5 * Z.easeInBounce(2 * t) : .5 * Z.easeOutBounce(2 * t - 1) + .5;
    }
  },
      $ = {
    effects: Z
  };
  G.easingEffects = Z;
  var J = Math.PI,
      Q = J / 180,
      tt = 2 * J,
      et = J / 2,
      it = J / 4,
      nt = 2 * J / 3,
      at = {
    clear: function (t) {
      t.ctx.clearRect(0, 0, t.width, t.height);
    },
    roundedRect: function (t, e, i, n, a, o) {
      if (o) {
        var r = Math.min(o, a / 2, n / 2),
            s = e + r,
            l = i + r,
            d = e + n - r,
            u = i + a - r;
        t.moveTo(e, l), s < d && l < u ? (t.arc(s, l, r, -J, -et), t.arc(d, l, r, -et, 0), t.arc(d, u, r, 0, et), t.arc(s, u, r, et, J)) : s < d ? (t.moveTo(s, i), t.arc(d, l, r, -et, et), t.arc(s, l, r, et, J + et)) : l < u ? (t.arc(s, l, r, -J, 0), t.arc(s, u, r, 0, J)) : t.arc(s, l, r, -J, J), t.closePath(), t.moveTo(e, i);
      } else t.rect(e, i, n, a);
    },
    drawPoint: function (t, e, i, n, a, o) {
      var r,
          s,
          l,
          d,
          u,
          h = (o || 0) * Q;

      if (!e || "object" != typeof e || "[object HTMLImageElement]" !== (r = e.toString()) && "[object HTMLCanvasElement]" !== r) {
        if (!(isNaN(i) || i <= 0)) {
          switch (t.beginPath(), e) {
            default:
              t.arc(n, a, i, 0, tt), t.closePath();
              break;

            case "triangle":
              t.moveTo(n + Math.sin(h) * i, a - Math.cos(h) * i), h += nt, t.lineTo(n + Math.sin(h) * i, a - Math.cos(h) * i), h += nt, t.lineTo(n + Math.sin(h) * i, a - Math.cos(h) * i), t.closePath();
              break;

            case "rectRounded":
              d = i - (u = .516 * i), s = Math.cos(h + it) * d, l = Math.sin(h + it) * d, t.arc(n - s, a - l, u, h - J, h - et), t.arc(n + l, a - s, u, h - et, h), t.arc(n + s, a + l, u, h, h + et), t.arc(n - l, a + s, u, h + et, h + J), t.closePath();
              break;

            case "rect":
              if (!o) {
                d = Math.SQRT1_2 * i, t.rect(n - d, a - d, 2 * d, 2 * d);
                break;
              }

              h += it;

            case "rectRot":
              s = Math.cos(h) * i, l = Math.sin(h) * i, t.moveTo(n - s, a - l), t.lineTo(n + l, a - s), t.lineTo(n + s, a + l), t.lineTo(n - l, a + s), t.closePath();
              break;

            case "crossRot":
              h += it;

            case "cross":
              s = Math.cos(h) * i, l = Math.sin(h) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l), t.moveTo(n + l, a - s), t.lineTo(n - l, a + s);
              break;

            case "star":
              s = Math.cos(h) * i, l = Math.sin(h) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l), t.moveTo(n + l, a - s), t.lineTo(n - l, a + s), h += it, s = Math.cos(h) * i, l = Math.sin(h) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l), t.moveTo(n + l, a - s), t.lineTo(n - l, a + s);
              break;

            case "line":
              s = Math.cos(h) * i, l = Math.sin(h) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l);
              break;

            case "dash":
              t.moveTo(n, a), t.lineTo(n + Math.cos(h) * i, a + Math.sin(h) * i);
          }

          t.fill(), t.stroke();
        }
      } else t.drawImage(e, n - e.width / 2, a - e.height / 2, e.width, e.height);
    },
    _isPointInArea: function (t, e) {
      return t.x > e.left - 1e-6 && t.x < e.right + 1e-6 && t.y > e.top - 1e-6 && t.y < e.bottom + 1e-6;
    },
    clipArea: function (t, e) {
      t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
    },
    unclipArea: function (t) {
      t.restore();
    },
    lineTo: function (t, e, i, n) {
      var a = i.steppedLine;

      if (a) {
        if ("middle" === a) {
          var o = (e.x + i.x) / 2;
          t.lineTo(o, n ? i.y : e.y), t.lineTo(o, n ? e.y : i.y);
        } else "after" === a && !n || "after" !== a && n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);

        t.lineTo(i.x, i.y);
      } else i.tension ? t.bezierCurveTo(n ? e.controlPointPreviousX : e.controlPointNextX, n ? e.controlPointPreviousY : e.controlPointNextY, n ? i.controlPointNextX : i.controlPointPreviousX, n ? i.controlPointNextY : i.controlPointPreviousY, i.x, i.y) : t.lineTo(i.x, i.y);
    }
  },
      ot = at;
  G.clear = at.clear, G.drawRoundedRectangle = function (t) {
    t.beginPath(), at.roundedRect.apply(at, arguments);
  };
  var rt = {
    _set: function (t, e) {
      return G.merge(this[t] || (this[t] = {}), e);
    }
  };

  rt._set("global", {
    defaultColor: "rgba(0,0,0,0.1)",
    defaultFontColor: "#666",
    defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    defaultFontSize: 12,
    defaultFontStyle: "normal",
    defaultLineHeight: 1.2,
    showLines: !0
  });

  var st = rt,
      lt = G.valueOrDefault;
  var dt = {
    toLineHeight: function (t, e) {
      var i = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
      if (!i || "normal" === i[1]) return 1.2 * e;

      switch (t = +i[2], i[3]) {
        case "px":
          return t;

        case "%":
          t /= 100;
      }

      return e * t;
    },
    toPadding: function (t) {
      var e, i, n, a;
      return G.isObject(t) ? (e = +t.top || 0, i = +t.right || 0, n = +t.bottom || 0, a = +t.left || 0) : e = i = n = a = +t || 0, {
        top: e,
        right: i,
        bottom: n,
        left: a,
        height: e + n,
        width: a + i
      };
    },
    _parseFont: function (t) {
      var e = st.global,
          i = lt(t.fontSize, e.defaultFontSize),
          n = {
        family: lt(t.fontFamily, e.defaultFontFamily),
        lineHeight: G.options.toLineHeight(lt(t.lineHeight, e.defaultLineHeight), i),
        size: i,
        style: lt(t.fontStyle, e.defaultFontStyle),
        weight: null,
        string: ""
      };
      return n.string = function (t) {
        return !t || G.isNullOrUndef(t.size) || G.isNullOrUndef(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family;
      }(n), n;
    },
    resolve: function (t, e, i) {
      var n, a, o;

      for (n = 0, a = t.length; n < a; ++n) if (void 0 !== (o = t[n]) && (void 0 !== e && "function" == typeof o && (o = o(e)), void 0 !== i && G.isArray(o) && (o = o[i]), void 0 !== o)) return o;
    }
  },
      ut = G,
      ht = $,
      ct = ot,
      ft = dt;
  ut.easing = ht, ut.canvas = ct, ut.options = ft;

  var gt = function (t) {
    ut.extend(this, t), this.initialize.apply(this, arguments);
  };

  ut.extend(gt.prototype, {
    initialize: function () {
      this.hidden = !1;
    },
    pivot: function () {
      var t = this;
      return t._view || (t._view = ut.clone(t._model)), t._start = {}, t;
    },
    transition: function (t) {
      var e = this,
          i = e._model,
          n = e._start,
          a = e._view;
      return i && 1 !== t ? (a || (a = e._view = {}), n || (n = e._start = {}), function (t, e, i, n) {
        var a,
            o,
            r,
            s,
            l,
            d,
            u,
            h,
            c,
            f = Object.keys(i);

        for (a = 0, o = f.length; a < o; ++a) if (d = i[r = f[a]], e.hasOwnProperty(r) || (e[r] = d), (s = e[r]) !== d && "_" !== r[0]) {
          if (t.hasOwnProperty(r) || (t[r] = s), (u = typeof d) == typeof (l = t[r])) if ("string" === u) {
            if ((h = X(l)).valid && (c = X(d)).valid) {
              e[r] = c.mix(h, n).rgbString();
              continue;
            }
          } else if (ut.isFinite(l) && ut.isFinite(d)) {
            e[r] = l + (d - l) * n;
            continue;
          }
          e[r] = d;
        }
      }(n, a, i, t), e) : (e._view = i, e._start = null, e);
    },
    tooltipPosition: function () {
      return {
        x: this._model.x,
        y: this._model.y
      };
    },
    hasValue: function () {
      return ut.isNumber(this._model.x) && ut.isNumber(this._model.y);
    }
  }), gt.extend = ut.inherits;
  var pt = gt,
      mt = pt.extend({
    chart: null,
    currentStep: 0,
    numSteps: 60,
    easing: "",
    render: null,
    onAnimationProgress: null,
    onAnimationComplete: null
  }),
      vt = mt;
  Object.defineProperty(mt.prototype, "animationObject", {
    get: function () {
      return this;
    }
  }), Object.defineProperty(mt.prototype, "chartInstance", {
    get: function () {
      return this.chart;
    },
    set: function (t) {
      this.chart = t;
    }
  }), st._set("global", {
    animation: {
      duration: 1e3,
      easing: "easeOutQuart",
      onProgress: ut.noop,
      onComplete: ut.noop
    }
  });
  var bt = {
    animations: [],
    request: null,
    addAnimation: function (t, e, i, n) {
      var a,
          o,
          r = this.animations;

      for (e.chart = t, e.startTime = Date.now(), e.duration = i, n || (t.animating = !0), a = 0, o = r.length; a < o; ++a) if (r[a].chart === t) return void (r[a] = e);

      r.push(e), 1 === r.length && this.requestAnimationFrame();
    },
    cancelAnimation: function (t) {
      var e = ut.findIndex(this.animations, function (e) {
        return e.chart === t;
      });
      -1 !== e && (this.animations.splice(e, 1), t.animating = !1);
    },
    requestAnimationFrame: function () {
      var t = this;
      null === t.request && (t.request = ut.requestAnimFrame.call(window, function () {
        t.request = null, t.startDigest();
      }));
    },
    startDigest: function () {
      this.advance(), this.animations.length > 0 && this.requestAnimationFrame();
    },
    advance: function () {
      for (var t, e, i, n, a = this.animations, o = 0; o < a.length;) e = (t = a[o]).chart, i = t.numSteps, n = Math.floor((Date.now() - t.startTime) / t.duration * i) + 1, t.currentStep = Math.min(n, i), ut.callback(t.render, [e, t], e), ut.callback(t.onAnimationProgress, [t], e), t.currentStep >= i ? (ut.callback(t.onAnimationComplete, [t], e), e.animating = !1, a.splice(o, 1)) : ++o;
    }
  },
      xt = ut.options.resolve,
      yt = ["push", "pop", "shift", "splice", "unshift"];

  function kt(t, e) {
    var i = t._chartjs;

    if (i) {
      var n = i.listeners,
          a = n.indexOf(e);
      -1 !== a && n.splice(a, 1), n.length > 0 || (yt.forEach(function (e) {
        delete t[e];
      }), delete t._chartjs);
    }
  }

  var wt = function (t, e) {
    this.initialize(t, e);
  };

  ut.extend(wt.prototype, {
    datasetElementType: null,
    dataElementType: null,
    initialize: function (t, e) {
      this.chart = t, this.index = e, this.linkScales(), this.addElements();
    },
    updateIndex: function (t) {
      this.index = t;
    },
    linkScales: function () {
      var t = this,
          e = t.getMeta(),
          i = t.getDataset();
      null !== e.xAxisID && e.xAxisID in t.chart.scales || (e.xAxisID = i.xAxisID || t.chart.options.scales.xAxes[0].id), null !== e.yAxisID && e.yAxisID in t.chart.scales || (e.yAxisID = i.yAxisID || t.chart.options.scales.yAxes[0].id);
    },
    getDataset: function () {
      return this.chart.data.datasets[this.index];
    },
    getMeta: function () {
      return this.chart.getDatasetMeta(this.index);
    },
    getScaleForId: function (t) {
      return this.chart.scales[t];
    },
    _getValueScaleId: function () {
      return this.getMeta().yAxisID;
    },
    _getIndexScaleId: function () {
      return this.getMeta().xAxisID;
    },
    _getValueScale: function () {
      return this.getScaleForId(this._getValueScaleId());
    },
    _getIndexScale: function () {
      return this.getScaleForId(this._getIndexScaleId());
    },
    reset: function () {
      this.update(!0);
    },
    destroy: function () {
      this._data && kt(this._data, this);
    },
    createMetaDataset: function () {
      var t = this.datasetElementType;
      return t && new t({
        _chart: this.chart,
        _datasetIndex: this.index
      });
    },
    createMetaData: function (t) {
      var e = this.dataElementType;
      return e && new e({
        _chart: this.chart,
        _datasetIndex: this.index,
        _index: t
      });
    },
    addElements: function () {
      var t,
          e,
          i = this.getMeta(),
          n = this.getDataset().data || [],
          a = i.data;

      for (t = 0, e = n.length; t < e; ++t) a[t] = a[t] || this.createMetaData(t);

      i.dataset = i.dataset || this.createMetaDataset();
    },
    addElementAndReset: function (t) {
      var e = this.createMetaData(t);
      this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0);
    },
    buildOrUpdateElements: function () {
      var t,
          e,
          i = this,
          n = i.getDataset(),
          a = n.data || (n.data = []);
      i._data !== a && (i._data && kt(i._data, i), a && Object.isExtensible(a) && (e = i, (t = a)._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
        configurable: !0,
        enumerable: !1,
        value: {
          listeners: [e]
        }
      }), yt.forEach(function (e) {
        var i = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
            n = t[e];
        Object.defineProperty(t, e, {
          configurable: !0,
          enumerable: !1,
          value: function () {
            var e = Array.prototype.slice.call(arguments),
                a = n.apply(this, e);
            return ut.each(t._chartjs.listeners, function (t) {
              "function" == typeof t[i] && t[i].apply(t, e);
            }), a;
          }
        });
      }))), i._data = a), i.resyncElements();
    },
    update: ut.noop,
    transition: function (t) {
      for (var e = this.getMeta(), i = e.data || [], n = i.length, a = 0; a < n; ++a) i[a].transition(t);

      e.dataset && e.dataset.transition(t);
    },
    draw: function () {
      var t = this.getMeta(),
          e = t.data || [],
          i = e.length,
          n = 0;

      for (t.dataset && t.dataset.draw(); n < i; ++n) e[n].draw();
    },
    removeHoverStyle: function (t) {
      ut.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle;
    },
    setHoverStyle: function (t) {
      var e = this.chart.data.datasets[t._datasetIndex],
          i = t._index,
          n = t.custom || {},
          a = t._model,
          o = ut.getHoverColor;
      t.$previousStyle = {
        backgroundColor: a.backgroundColor,
        borderColor: a.borderColor,
        borderWidth: a.borderWidth
      }, a.backgroundColor = xt([n.hoverBackgroundColor, e.hoverBackgroundColor, o(a.backgroundColor)], void 0, i), a.borderColor = xt([n.hoverBorderColor, e.hoverBorderColor, o(a.borderColor)], void 0, i), a.borderWidth = xt([n.hoverBorderWidth, e.hoverBorderWidth, a.borderWidth], void 0, i);
    },
    resyncElements: function () {
      var t = this.getMeta(),
          e = this.getDataset().data,
          i = t.data.length,
          n = e.length;
      n < i ? t.data.splice(n, i - n) : n > i && this.insertElements(i, n - i);
    },
    insertElements: function (t, e) {
      for (var i = 0; i < e; ++i) this.addElementAndReset(t + i);
    },
    onDataPush: function () {
      var t = arguments.length;
      this.insertElements(this.getDataset().data.length - t, t);
    },
    onDataPop: function () {
      this.getMeta().data.pop();
    },
    onDataShift: function () {
      this.getMeta().data.shift();
    },
    onDataSplice: function (t, e) {
      this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2);
    },
    onDataUnshift: function () {
      this.insertElements(0, arguments.length);
    }
  }), wt.extend = ut.inherits;
  var Mt = wt;

  st._set("global", {
    elements: {
      arc: {
        backgroundColor: st.global.defaultColor,
        borderColor: "#fff",
        borderWidth: 2,
        borderAlign: "center"
      }
    }
  });

  var _t = pt.extend({
    inLabelRange: function (t) {
      var e = this._view;
      return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2);
    },
    inRange: function (t, e) {
      var i = this._view;

      if (i) {
        for (var n = ut.getAngleFromPoint(i, {
          x: t,
          y: e
        }), a = n.angle, o = n.distance, r = i.startAngle, s = i.endAngle; s < r;) s += 2 * Math.PI;

        for (; a > s;) a -= 2 * Math.PI;

        for (; a < r;) a += 2 * Math.PI;

        var l = a >= r && a <= s,
            d = o >= i.innerRadius && o <= i.outerRadius;
        return l && d;
      }

      return !1;
    },
    getCenterPoint: function () {
      var t = this._view,
          e = (t.startAngle + t.endAngle) / 2,
          i = (t.innerRadius + t.outerRadius) / 2;
      return {
        x: t.x + Math.cos(e) * i,
        y: t.y + Math.sin(e) * i
      };
    },
    getArea: function () {
      var t = this._view;
      return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2));
    },
    tooltipPosition: function () {
      var t = this._view,
          e = t.startAngle + (t.endAngle - t.startAngle) / 2,
          i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
      return {
        x: t.x + Math.cos(e) * i,
        y: t.y + Math.sin(e) * i
      };
    },
    draw: function () {
      var t,
          e = this._chart.ctx,
          i = this._view,
          n = i.startAngle,
          a = i.endAngle,
          o = "inner" === i.borderAlign ? .33 : 0;
      e.save(), e.beginPath(), e.arc(i.x, i.y, Math.max(i.outerRadius - o, 0), n, a), e.arc(i.x, i.y, i.innerRadius, a, n, !0), e.closePath(), e.fillStyle = i.backgroundColor, e.fill(), i.borderWidth && ("inner" === i.borderAlign ? (e.beginPath(), t = o / i.outerRadius, e.arc(i.x, i.y, i.outerRadius, n - t, a + t), i.innerRadius > o ? (t = o / i.innerRadius, e.arc(i.x, i.y, i.innerRadius - o, a + t, n - t, !0)) : e.arc(i.x, i.y, o, a + Math.PI / 2, n - Math.PI / 2), e.closePath(), e.clip(), e.beginPath(), e.arc(i.x, i.y, i.outerRadius, n, a), e.arc(i.x, i.y, i.innerRadius, a, n, !0), e.closePath(), e.lineWidth = 2 * i.borderWidth, e.lineJoin = "round") : (e.lineWidth = i.borderWidth, e.lineJoin = "bevel"), e.strokeStyle = i.borderColor, e.stroke()), e.restore();
    }
  }),
      Ct = ut.valueOrDefault,
      St = st.global.defaultColor;

  st._set("global", {
    elements: {
      line: {
        tension: .4,
        backgroundColor: St,
        borderWidth: 3,
        borderColor: St,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        capBezierPoints: !0,
        fill: !0
      }
    }
  });

  var Pt = pt.extend({
    draw: function () {
      var t,
          e,
          i,
          n,
          a = this._view,
          o = this._chart.ctx,
          r = a.spanGaps,
          s = this._children.slice(),
          l = st.global,
          d = l.elements.line,
          u = -1;

      for (this._loop && s.length && s.push(s[0]), o.save(), o.lineCap = a.borderCapStyle || d.borderCapStyle, o.setLineDash && o.setLineDash(a.borderDash || d.borderDash), o.lineDashOffset = Ct(a.borderDashOffset, d.borderDashOffset), o.lineJoin = a.borderJoinStyle || d.borderJoinStyle, o.lineWidth = Ct(a.borderWidth, d.borderWidth), o.strokeStyle = a.borderColor || l.defaultColor, o.beginPath(), u = -1, t = 0; t < s.length; ++t) e = s[t], i = ut.previousItem(s, t), n = e._view, 0 === t ? n.skip || (o.moveTo(n.x, n.y), u = t) : (i = -1 === u ? i : s[u], n.skip || (u !== t - 1 && !r || -1 === u ? o.moveTo(n.x, n.y) : ut.canvas.lineTo(o, i._view, e._view), u = t));

      o.stroke(), o.restore();
    }
  }),
      It = ut.valueOrDefault,
      At = st.global.defaultColor;

  function Dt(t) {
    var e = this._view;
    return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius;
  }

  st._set("global", {
    elements: {
      point: {
        radius: 3,
        pointStyle: "circle",
        backgroundColor: At,
        borderColor: At,
        borderWidth: 1,
        hitRadius: 1,
        hoverRadius: 4,
        hoverBorderWidth: 1
      }
    }
  });

  var Tt = pt.extend({
    inRange: function (t, e) {
      var i = this._view;
      return !!i && Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2);
    },
    inLabelRange: Dt,
    inXRange: Dt,
    inYRange: function (t) {
      var e = this._view;
      return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius;
    },
    getCenterPoint: function () {
      var t = this._view;
      return {
        x: t.x,
        y: t.y
      };
    },
    getArea: function () {
      return Math.PI * Math.pow(this._view.radius, 2);
    },
    tooltipPosition: function () {
      var t = this._view;
      return {
        x: t.x,
        y: t.y,
        padding: t.radius + t.borderWidth
      };
    },
    draw: function (t) {
      var e = this._view,
          i = this._chart.ctx,
          n = e.pointStyle,
          a = e.rotation,
          o = e.radius,
          r = e.x,
          s = e.y,
          l = st.global,
          d = l.defaultColor;
      e.skip || (void 0 === t || ut.canvas._isPointInArea(e, t)) && (i.strokeStyle = e.borderColor || d, i.lineWidth = It(e.borderWidth, l.elements.point.borderWidth), i.fillStyle = e.backgroundColor || d, ut.canvas.drawPoint(i, n, o, r, s, a));
    }
  }),
      Ft = st.global.defaultColor;

  function Lt(t) {
    return t && void 0 !== t.width;
  }

  function Rt(t) {
    var e, i, n, a, o;
    return Lt(t) ? (o = t.width / 2, e = t.x - o, i = t.x + o, n = Math.min(t.y, t.base), a = Math.max(t.y, t.base)) : (o = t.height / 2, e = Math.min(t.x, t.base), i = Math.max(t.x, t.base), n = t.y - o, a = t.y + o), {
      left: e,
      top: n,
      right: i,
      bottom: a
    };
  }

  function Ot(t, e, i) {
    return t === e ? i : t === i ? e : t;
  }

  function zt(t, e, i) {
    var n,
        a,
        o,
        r,
        s = t.borderWidth,
        l = function (t) {
      var e = t.borderSkipped,
          i = {};
      return e ? (t.horizontal ? t.base > t.x && (e = Ot(e, "left", "right")) : t.base < t.y && (e = Ot(e, "bottom", "top")), i[e] = !0, i) : i;
    }(t);

    return ut.isObject(s) ? (n = +s.top || 0, a = +s.right || 0, o = +s.bottom || 0, r = +s.left || 0) : n = a = o = r = +s || 0, {
      t: l.top || n < 0 ? 0 : n > i ? i : n,
      r: l.right || a < 0 ? 0 : a > e ? e : a,
      b: l.bottom || o < 0 ? 0 : o > i ? i : o,
      l: l.left || r < 0 ? 0 : r > e ? e : r
    };
  }

  function Bt(t, e, i) {
    var n = null === e,
        a = null === i,
        o = !(!t || n && a) && Rt(t);
    return o && (n || e >= o.left && e <= o.right) && (a || i >= o.top && i <= o.bottom);
  }

  st._set("global", {
    elements: {
      rectangle: {
        backgroundColor: Ft,
        borderColor: Ft,
        borderSkipped: "bottom",
        borderWidth: 0
      }
    }
  });

  var Nt = pt.extend({
    draw: function () {
      var t = this._chart.ctx,
          e = this._view,
          i = function (t) {
        var e = Rt(t),
            i = e.right - e.left,
            n = e.bottom - e.top,
            a = zt(t, i / 2, n / 2);
        return {
          outer: {
            x: e.left,
            y: e.top,
            w: i,
            h: n
          },
          inner: {
            x: e.left + a.l,
            y: e.top + a.t,
            w: i - a.l - a.r,
            h: n - a.t - a.b
          }
        };
      }(e),
          n = i.outer,
          a = i.inner;

      t.fillStyle = e.backgroundColor, t.fillRect(n.x, n.y, n.w, n.h), n.w === a.w && n.h === a.h || (t.save(), t.beginPath(), t.rect(n.x, n.y, n.w, n.h), t.clip(), t.fillStyle = e.borderColor, t.rect(a.x, a.y, a.w, a.h), t.fill("evenodd"), t.restore());
    },
    height: function () {
      var t = this._view;
      return t.base - t.y;
    },
    inRange: function (t, e) {
      return Bt(this._view, t, e);
    },
    inLabelRange: function (t, e) {
      var i = this._view;
      return Lt(i) ? Bt(i, t, null) : Bt(i, null, e);
    },
    inXRange: function (t) {
      return Bt(this._view, t, null);
    },
    inYRange: function (t) {
      return Bt(this._view, null, t);
    },
    getCenterPoint: function () {
      var t,
          e,
          i = this._view;
      return Lt(i) ? (t = i.x, e = (i.y + i.base) / 2) : (t = (i.x + i.base) / 2, e = i.y), {
        x: t,
        y: e
      };
    },
    getArea: function () {
      var t = this._view;
      return Lt(t) ? t.width * Math.abs(t.y - t.base) : t.height * Math.abs(t.x - t.base);
    },
    tooltipPosition: function () {
      var t = this._view;
      return {
        x: t.x,
        y: t.y
      };
    }
  }),
      Wt = {},
      Vt = _t,
      Et = Pt,
      Ht = Tt,
      jt = Nt;
  Wt.Arc = Vt, Wt.Line = Et, Wt.Point = Ht, Wt.Rectangle = jt;
  var qt = ut.options.resolve;

  st._set("bar", {
    hover: {
      mode: "label"
    },
    scales: {
      xAxes: [{
        type: "category",
        categoryPercentage: .8,
        barPercentage: .9,
        offset: !0,
        gridLines: {
          offsetGridLines: !0
        }
      }],
      yAxes: [{
        type: "linear"
      }]
    }
  });

  var Yt = Mt.extend({
    dataElementType: Wt.Rectangle,
    initialize: function () {
      var t;
      Mt.prototype.initialize.apply(this, arguments), (t = this.getMeta()).stack = this.getDataset().stack, t.bar = !0;
    },
    update: function (t) {
      var e,
          i,
          n = this.getMeta().data;

      for (this._ruler = this.getRuler(), e = 0, i = n.length; e < i; ++e) this.updateElement(n[e], e, t);
    },
    updateElement: function (t, e, i) {
      var n = this,
          a = n.getMeta(),
          o = n.getDataset(),
          r = n._resolveElementOptions(t, e);

      t._xScale = n.getScaleForId(a.xAxisID), t._yScale = n.getScaleForId(a.yAxisID), t._datasetIndex = n.index, t._index = e, t._model = {
        backgroundColor: r.backgroundColor,
        borderColor: r.borderColor,
        borderSkipped: r.borderSkipped,
        borderWidth: r.borderWidth,
        datasetLabel: o.label,
        label: n.chart.data.labels[e]
      }, n._updateElementGeometry(t, e, i), t.pivot();
    },
    _updateElementGeometry: function (t, e, i) {
      var n = this,
          a = t._model,
          o = n._getValueScale(),
          r = o.getBasePixel(),
          s = o.isHorizontal(),
          l = n._ruler || n.getRuler(),
          d = n.calculateBarValuePixels(n.index, e),
          u = n.calculateBarIndexPixels(n.index, e, l);

      a.horizontal = s, a.base = i ? r : d.base, a.x = s ? i ? r : d.head : u.center, a.y = s ? u.center : i ? r : d.head, a.height = s ? u.size : void 0, a.width = s ? void 0 : u.size;
    },
    _getStacks: function (t) {
      var e,
          i,
          n = this.chart,
          a = this._getIndexScale().options.stacked,
          o = void 0 === t ? n.data.datasets.length : t + 1,
          r = [];

      for (e = 0; e < o; ++e) (i = n.getDatasetMeta(e)).bar && n.isDatasetVisible(e) && (!1 === a || !0 === a && -1 === r.indexOf(i.stack) || void 0 === a && (void 0 === i.stack || -1 === r.indexOf(i.stack))) && r.push(i.stack);

      return r;
    },
    getStackCount: function () {
      return this._getStacks().length;
    },
    getStackIndex: function (t, e) {
      var i = this._getStacks(t),
          n = void 0 !== e ? i.indexOf(e) : -1;

      return -1 === n ? i.length - 1 : n;
    },
    getRuler: function () {
      var t,
          e,
          i = this._getIndexScale(),
          n = this.getStackCount(),
          a = this.index,
          o = i.isHorizontal(),
          r = o ? i.left : i.top,
          s = r + (o ? i.width : i.height),
          l = [];

      for (t = 0, e = this.getMeta().data.length; t < e; ++t) l.push(i.getPixelForValue(null, t, a));

      return {
        min: ut.isNullOrUndef(i.options.barThickness) ? function (t, e) {
          var i,
              n,
              a,
              o,
              r = t.isHorizontal() ? t.width : t.height,
              s = t.getTicks();

          for (a = 1, o = e.length; a < o; ++a) r = Math.min(r, Math.abs(e[a] - e[a - 1]));

          for (a = 0, o = s.length; a < o; ++a) n = t.getPixelForTick(a), r = a > 0 ? Math.min(r, n - i) : r, i = n;

          return r;
        }(i, l) : -1,
        pixels: l,
        start: r,
        end: s,
        stackCount: n,
        scale: i
      };
    },
    calculateBarValuePixels: function (t, e) {
      var i,
          n,
          a,
          o,
          r,
          s,
          l = this.chart,
          d = this.getMeta(),
          u = this._getValueScale(),
          h = u.isHorizontal(),
          c = l.data.datasets,
          f = +u.getRightValue(c[t].data[e]),
          g = u.options.minBarLength,
          p = u.options.stacked,
          m = d.stack,
          v = 0;

      if (p || void 0 === p && void 0 !== m) for (i = 0; i < t; ++i) (n = l.getDatasetMeta(i)).bar && n.stack === m && n.controller._getValueScaleId() === u.id && l.isDatasetVisible(i) && (a = +u.getRightValue(c[i].data[e]), (f < 0 && a < 0 || f >= 0 && a > 0) && (v += a));
      return o = u.getPixelForValue(v), s = (r = u.getPixelForValue(v + f)) - o, void 0 !== g && Math.abs(s) < g && (s = g, r = f >= 0 && !h || f < 0 && h ? o - g : o + g), {
        size: s,
        base: o,
        head: r,
        center: r + s / 2
      };
    },
    calculateBarIndexPixels: function (t, e, i) {
      var n = i.scale.options,
          a = "flex" === n.barThickness ? function (t, e, i) {
        var n,
            a = e.pixels,
            o = a[t],
            r = t > 0 ? a[t - 1] : null,
            s = t < a.length - 1 ? a[t + 1] : null,
            l = i.categoryPercentage;
        return null === r && (r = o - (null === s ? e.end - e.start : s - o)), null === s && (s = o + o - r), n = o - (o - Math.min(r, s)) / 2 * l, {
          chunk: Math.abs(s - r) / 2 * l / e.stackCount,
          ratio: i.barPercentage,
          start: n
        };
      }(e, i, n) : function (t, e, i) {
        var n,
            a,
            o = i.barThickness,
            r = e.stackCount,
            s = e.pixels[t];
        return ut.isNullOrUndef(o) ? (n = e.min * i.categoryPercentage, a = i.barPercentage) : (n = o * r, a = 1), {
          chunk: n / r,
          ratio: a,
          start: s - n / 2
        };
      }(e, i, n),
          o = this.getStackIndex(t, this.getMeta().stack),
          r = a.start + a.chunk * o + a.chunk / 2,
          s = Math.min(ut.valueOrDefault(n.maxBarThickness, 1 / 0), a.chunk * a.ratio);
      return {
        base: r - s / 2,
        head: r + s / 2,
        center: r,
        size: s
      };
    },
    draw: function () {
      var t = this.chart,
          e = this._getValueScale(),
          i = this.getMeta().data,
          n = this.getDataset(),
          a = i.length,
          o = 0;

      for (ut.canvas.clipArea(t.ctx, t.chartArea); o < a; ++o) isNaN(e.getRightValue(n.data[o])) || i[o].draw();

      ut.canvas.unclipArea(t.ctx);
    },
    _resolveElementOptions: function (t, e) {
      var i,
          n,
          a,
          o = this.chart,
          r = o.data.datasets[this.index],
          s = t.custom || {},
          l = o.options.elements.rectangle,
          d = {},
          u = {
        chart: o,
        dataIndex: e,
        dataset: r,
        datasetIndex: this.index
      },
          h = ["backgroundColor", "borderColor", "borderSkipped", "borderWidth"];

      for (i = 0, n = h.length; i < n; ++i) d[a = h[i]] = qt([s[a], r[a], l[a]], u, e);

      return d;
    }
  }),
      Ut = ut.valueOrDefault,
      Xt = ut.options.resolve;

  st._set("bubble", {
    hover: {
      mode: "single"
    },
    scales: {
      xAxes: [{
        type: "linear",
        position: "bottom",
        id: "x-axis-0"
      }],
      yAxes: [{
        type: "linear",
        position: "left",
        id: "y-axis-0"
      }]
    },
    tooltips: {
      callbacks: {
        title: function () {
          return "";
        },
        label: function (t, e) {
          var i = e.datasets[t.datasetIndex].label || "",
              n = e.datasets[t.datasetIndex].data[t.index];
          return i + ": (" + t.xLabel + ", " + t.yLabel + ", " + n.r + ")";
        }
      }
    }
  });

  var Kt = Mt.extend({
    dataElementType: Wt.Point,
    update: function (t) {
      var e = this,
          i = e.getMeta().data;
      ut.each(i, function (i, n) {
        e.updateElement(i, n, t);
      });
    },
    updateElement: function (t, e, i) {
      var n = this,
          a = n.getMeta(),
          o = t.custom || {},
          r = n.getScaleForId(a.xAxisID),
          s = n.getScaleForId(a.yAxisID),
          l = n._resolveElementOptions(t, e),
          d = n.getDataset().data[e],
          u = n.index,
          h = i ? r.getPixelForDecimal(.5) : r.getPixelForValue("object" == typeof d ? d : NaN, e, u),
          c = i ? s.getBasePixel() : s.getPixelForValue(d, e, u);

      t._xScale = r, t._yScale = s, t._options = l, t._datasetIndex = u, t._index = e, t._model = {
        backgroundColor: l.backgroundColor,
        borderColor: l.borderColor,
        borderWidth: l.borderWidth,
        hitRadius: l.hitRadius,
        pointStyle: l.pointStyle,
        rotation: l.rotation,
        radius: i ? 0 : l.radius,
        skip: o.skip || isNaN(h) || isNaN(c),
        x: h,
        y: c
      }, t.pivot();
    },
    setHoverStyle: function (t) {
      var e = t._model,
          i = t._options,
          n = ut.getHoverColor;
      t.$previousStyle = {
        backgroundColor: e.backgroundColor,
        borderColor: e.borderColor,
        borderWidth: e.borderWidth,
        radius: e.radius
      }, e.backgroundColor = Ut(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = Ut(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = Ut(i.hoverBorderWidth, i.borderWidth), e.radius = i.radius + i.hoverRadius;
    },
    _resolveElementOptions: function (t, e) {
      var i,
          n,
          a,
          o = this.chart,
          r = o.data.datasets[this.index],
          s = t.custom || {},
          l = o.options.elements.point,
          d = r.data[e],
          u = {},
          h = {
        chart: o,
        dataIndex: e,
        dataset: r,
        datasetIndex: this.index
      },
          c = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"];

      for (i = 0, n = c.length; i < n; ++i) u[a = c[i]] = Xt([s[a], r[a], l[a]], h, e);

      return u.radius = Xt([s.radius, d ? d.r : void 0, r.radius, l.radius], h, e), u;
    }
  }),
      Gt = ut.options.resolve,
      Zt = ut.valueOrDefault;

  st._set("doughnut", {
    animation: {
      animateRotate: !0,
      animateScale: !1
    },
    hover: {
      mode: "single"
    },
    legendCallback: function (t) {
      var e = [];
      e.push('<ul class="' + t.id + '-legend">');
      var i = t.data,
          n = i.datasets,
          a = i.labels;
      if (n.length) for (var o = 0; o < n[0].data.length; ++o) e.push('<li><span style="background-color:' + n[0].backgroundColor[o] + '"></span>'), a[o] && e.push(a[o]), e.push("</li>");
      return e.push("</ul>"), e.join("");
    },
    legend: {
      labels: {
        generateLabels: function (t) {
          var e = t.data;
          return e.labels.length && e.datasets.length ? e.labels.map(function (i, n) {
            var a = t.getDatasetMeta(0),
                o = e.datasets[0],
                r = a.data[n],
                s = r && r.custom || {},
                l = t.options.elements.arc;
            return {
              text: i,
              fillStyle: Gt([s.backgroundColor, o.backgroundColor, l.backgroundColor], void 0, n),
              strokeStyle: Gt([s.borderColor, o.borderColor, l.borderColor], void 0, n),
              lineWidth: Gt([s.borderWidth, o.borderWidth, l.borderWidth], void 0, n),
              hidden: isNaN(o.data[n]) || a.data[n].hidden,
              index: n
            };
          }) : [];
        }
      },
      onClick: function (t, e) {
        var i,
            n,
            a,
            o = e.index,
            r = this.chart;

        for (i = 0, n = (r.data.datasets || []).length; i < n; ++i) (a = r.getDatasetMeta(i)).data[o] && (a.data[o].hidden = !a.data[o].hidden);

        r.update();
      }
    },
    cutoutPercentage: 50,
    rotation: -.5 * Math.PI,
    circumference: 2 * Math.PI,
    tooltips: {
      callbacks: {
        title: function () {
          return "";
        },
        label: function (t, e) {
          var i = e.labels[t.index],
              n = ": " + e.datasets[t.datasetIndex].data[t.index];
          return ut.isArray(i) ? (i = i.slice())[0] += n : i += n, i;
        }
      }
    }
  });

  var $t = Mt.extend({
    dataElementType: Wt.Arc,
    linkScales: ut.noop,
    getRingIndex: function (t) {
      for (var e = 0, i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && ++e;

      return e;
    },
    update: function (t) {
      var e,
          i,
          n = this,
          a = n.chart,
          o = a.chartArea,
          r = a.options,
          s = o.right - o.left,
          l = o.bottom - o.top,
          d = Math.min(s, l),
          u = {
        x: 0,
        y: 0
      },
          h = n.getMeta(),
          c = h.data,
          f = r.cutoutPercentage,
          g = r.circumference,
          p = n._getRingWeight(n.index);

      if (g < 2 * Math.PI) {
        var m = r.rotation % (2 * Math.PI),
            v = (m += 2 * Math.PI * (m >= Math.PI ? -1 : m < -Math.PI ? 1 : 0)) + g,
            b = {
          x: Math.cos(m),
          y: Math.sin(m)
        },
            x = {
          x: Math.cos(v),
          y: Math.sin(v)
        },
            y = m <= 0 && v >= 0 || m <= 2 * Math.PI && 2 * Math.PI <= v,
            k = m <= .5 * Math.PI && .5 * Math.PI <= v || m <= 2.5 * Math.PI && 2.5 * Math.PI <= v,
            w = m <= -Math.PI && -Math.PI <= v || m <= Math.PI && Math.PI <= v,
            M = m <= .5 * -Math.PI && .5 * -Math.PI <= v || m <= 1.5 * Math.PI && 1.5 * Math.PI <= v,
            _ = f / 100,
            C = {
          x: w ? -1 : Math.min(b.x * (b.x < 0 ? 1 : _), x.x * (x.x < 0 ? 1 : _)),
          y: M ? -1 : Math.min(b.y * (b.y < 0 ? 1 : _), x.y * (x.y < 0 ? 1 : _))
        },
            S = {
          x: y ? 1 : Math.max(b.x * (b.x > 0 ? 1 : _), x.x * (x.x > 0 ? 1 : _)),
          y: k ? 1 : Math.max(b.y * (b.y > 0 ? 1 : _), x.y * (x.y > 0 ? 1 : _))
        },
            P = {
          width: .5 * (S.x - C.x),
          height: .5 * (S.y - C.y)
        };

        d = Math.min(s / P.width, l / P.height), u = {
          x: -.5 * (S.x + C.x),
          y: -.5 * (S.y + C.y)
        };
      }

      for (e = 0, i = c.length; e < i; ++e) c[e]._options = n._resolveElementOptions(c[e], e);

      for (a.borderWidth = n.getMaxBorderWidth(), a.outerRadius = Math.max((d - a.borderWidth) / 2, 0), a.innerRadius = Math.max(f ? a.outerRadius / 100 * f : 0, 0), a.radiusLength = (a.outerRadius - a.innerRadius) / (n._getVisibleDatasetWeightTotal() || 1), a.offsetX = u.x * a.outerRadius, a.offsetY = u.y * a.outerRadius, h.total = n.calculateTotal(), n.outerRadius = a.outerRadius - a.radiusLength * n._getRingWeightOffset(n.index), n.innerRadius = Math.max(n.outerRadius - a.radiusLength * p, 0), e = 0, i = c.length; e < i; ++e) n.updateElement(c[e], e, t);
    },
    updateElement: function (t, e, i) {
      var n = this,
          a = n.chart,
          o = a.chartArea,
          r = a.options,
          s = r.animation,
          l = (o.left + o.right) / 2,
          d = (o.top + o.bottom) / 2,
          u = r.rotation,
          h = r.rotation,
          c = n.getDataset(),
          f = i && s.animateRotate ? 0 : t.hidden ? 0 : n.calculateCircumference(c.data[e]) * (r.circumference / (2 * Math.PI)),
          g = i && s.animateScale ? 0 : n.innerRadius,
          p = i && s.animateScale ? 0 : n.outerRadius,
          m = t._options || {};
      ut.extend(t, {
        _datasetIndex: n.index,
        _index: e,
        _model: {
          backgroundColor: m.backgroundColor,
          borderColor: m.borderColor,
          borderWidth: m.borderWidth,
          borderAlign: m.borderAlign,
          x: l + a.offsetX,
          y: d + a.offsetY,
          startAngle: u,
          endAngle: h,
          circumference: f,
          outerRadius: p,
          innerRadius: g,
          label: ut.valueAtIndexOrDefault(c.label, e, a.data.labels[e])
        }
      });
      var v = t._model;
      i && s.animateRotate || (v.startAngle = 0 === e ? r.rotation : n.getMeta().data[e - 1]._model.endAngle, v.endAngle = v.startAngle + v.circumference), t.pivot();
    },
    calculateTotal: function () {
      var t,
          e = this.getDataset(),
          i = this.getMeta(),
          n = 0;
      return ut.each(i.data, function (i, a) {
        t = e.data[a], isNaN(t) || i.hidden || (n += Math.abs(t));
      }), n;
    },
    calculateCircumference: function (t) {
      var e = this.getMeta().total;
      return e > 0 && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0;
    },
    getMaxBorderWidth: function (t) {
      var e,
          i,
          n,
          a,
          o,
          r,
          s,
          l,
          d = 0,
          u = this.chart;
      if (!t) for (e = 0, i = u.data.datasets.length; e < i; ++e) if (u.isDatasetVisible(e)) {
        t = (n = u.getDatasetMeta(e)).data, e !== this.index && (o = n.controller);
        break;
      }
      if (!t) return 0;

      for (e = 0, i = t.length; e < i; ++e) a = t[e], "inner" !== (r = o ? o._resolveElementOptions(a, e) : a._options).borderAlign && (s = r.borderWidth, d = (l = r.hoverBorderWidth) > (d = s > d ? s : d) ? l : d);

      return d;
    },
    setHoverStyle: function (t) {
      var e = t._model,
          i = t._options,
          n = ut.getHoverColor;
      t.$previousStyle = {
        backgroundColor: e.backgroundColor,
        borderColor: e.borderColor,
        borderWidth: e.borderWidth
      }, e.backgroundColor = Zt(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = Zt(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = Zt(i.hoverBorderWidth, i.borderWidth);
    },
    _resolveElementOptions: function (t, e) {
      var i,
          n,
          a,
          o = this.chart,
          r = this.getDataset(),
          s = t.custom || {},
          l = o.options.elements.arc,
          d = {},
          u = {
        chart: o,
        dataIndex: e,
        dataset: r,
        datasetIndex: this.index
      },
          h = ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"];

      for (i = 0, n = h.length; i < n; ++i) d[a = h[i]] = Gt([s[a], r[a], l[a]], u, e);

      return d;
    },
    _getRingWeightOffset: function (t) {
      for (var e = 0, i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));

      return e;
    },
    _getRingWeight: function (t) {
      return Math.max(Zt(this.chart.data.datasets[t].weight, 1), 0);
    },
    _getVisibleDatasetWeightTotal: function () {
      return this._getRingWeightOffset(this.chart.data.datasets.length);
    }
  });

  st._set("horizontalBar", {
    hover: {
      mode: "index",
      axis: "y"
    },
    scales: {
      xAxes: [{
        type: "linear",
        position: "bottom"
      }],
      yAxes: [{
        type: "category",
        position: "left",
        categoryPercentage: .8,
        barPercentage: .9,
        offset: !0,
        gridLines: {
          offsetGridLines: !0
        }
      }]
    },
    elements: {
      rectangle: {
        borderSkipped: "left"
      }
    },
    tooltips: {
      mode: "index",
      axis: "y"
    }
  });

  var Jt = Yt.extend({
    _getValueScaleId: function () {
      return this.getMeta().xAxisID;
    },
    _getIndexScaleId: function () {
      return this.getMeta().yAxisID;
    }
  }),
      Qt = ut.valueOrDefault,
      te = ut.options.resolve,
      ee = ut.canvas._isPointInArea;

  function ie(t, e) {
    return Qt(t.showLine, e.showLines);
  }

  st._set("line", {
    showLines: !0,
    spanGaps: !1,
    hover: {
      mode: "label"
    },
    scales: {
      xAxes: [{
        type: "category",
        id: "x-axis-0"
      }],
      yAxes: [{
        type: "linear",
        id: "y-axis-0"
      }]
    }
  });

  var ne = Mt.extend({
    datasetElementType: Wt.Line,
    dataElementType: Wt.Point,
    update: function (t) {
      var e,
          i,
          n = this,
          a = n.getMeta(),
          o = a.dataset,
          r = a.data || [],
          s = n.getScaleForId(a.yAxisID),
          l = n.getDataset(),
          d = ie(l, n.chart.options);

      for (d && (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), o._scale = s, o._datasetIndex = n.index, o._children = r, o._model = n._resolveLineOptions(o), o.pivot()), e = 0, i = r.length; e < i; ++e) n.updateElement(r[e], e, t);

      for (d && 0 !== o._model.tension && n.updateBezierControlPoints(), e = 0, i = r.length; e < i; ++e) r[e].pivot();
    },
    updateElement: function (t, e, i) {
      var n,
          a,
          o = this,
          r = o.getMeta(),
          s = t.custom || {},
          l = o.getDataset(),
          d = o.index,
          u = l.data[e],
          h = o.getScaleForId(r.yAxisID),
          c = o.getScaleForId(r.xAxisID),
          f = r.dataset._model,
          g = o._resolvePointOptions(t, e);

      n = c.getPixelForValue("object" == typeof u ? u : NaN, e, d), a = i ? h.getBasePixel() : o.calculatePointY(u, e, d), t._xScale = c, t._yScale = h, t._options = g, t._datasetIndex = d, t._index = e, t._model = {
        x: n,
        y: a,
        skip: s.skip || isNaN(n) || isNaN(a),
        radius: g.radius,
        pointStyle: g.pointStyle,
        rotation: g.rotation,
        backgroundColor: g.backgroundColor,
        borderColor: g.borderColor,
        borderWidth: g.borderWidth,
        tension: Qt(s.tension, f ? f.tension : 0),
        steppedLine: !!f && f.steppedLine,
        hitRadius: g.hitRadius
      };
    },
    _resolvePointOptions: function (t, e) {
      var i,
          n,
          a,
          o = this.chart,
          r = o.data.datasets[this.index],
          s = t.custom || {},
          l = o.options.elements.point,
          d = {},
          u = {
        chart: o,
        dataIndex: e,
        dataset: r,
        datasetIndex: this.index
      },
          h = {
        backgroundColor: "pointBackgroundColor",
        borderColor: "pointBorderColor",
        borderWidth: "pointBorderWidth",
        hitRadius: "pointHitRadius",
        hoverBackgroundColor: "pointHoverBackgroundColor",
        hoverBorderColor: "pointHoverBorderColor",
        hoverBorderWidth: "pointHoverBorderWidth",
        hoverRadius: "pointHoverRadius",
        pointStyle: "pointStyle",
        radius: "pointRadius",
        rotation: "pointRotation"
      },
          c = Object.keys(h);

      for (i = 0, n = c.length; i < n; ++i) d[a = c[i]] = te([s[a], r[h[a]], r[a], l[a]], u, e);

      return d;
    },
    _resolveLineOptions: function (t) {
      var e,
          i,
          n,
          a = this.chart,
          o = a.data.datasets[this.index],
          r = t.custom || {},
          s = a.options,
          l = s.elements.line,
          d = {},
          u = ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill", "cubicInterpolationMode"];

      for (e = 0, i = u.length; e < i; ++e) d[n = u[e]] = te([r[n], o[n], l[n]]);

      return d.spanGaps = Qt(o.spanGaps, s.spanGaps), d.tension = Qt(o.lineTension, l.tension), d.steppedLine = te([r.steppedLine, o.steppedLine, l.stepped]), d;
    },
    calculatePointY: function (t, e, i) {
      var n,
          a,
          o,
          r = this.chart,
          s = this.getMeta(),
          l = this.getScaleForId(s.yAxisID),
          d = 0,
          u = 0;

      if (l.options.stacked) {
        for (n = 0; n < i; n++) if (a = r.data.datasets[n], "line" === (o = r.getDatasetMeta(n)).type && o.yAxisID === l.id && r.isDatasetVisible(n)) {
          var h = Number(l.getRightValue(a.data[e]));
          h < 0 ? u += h || 0 : d += h || 0;
        }

        var c = Number(l.getRightValue(t));
        return c < 0 ? l.getPixelForValue(u + c) : l.getPixelForValue(d + c);
      }

      return l.getPixelForValue(t);
    },
    updateBezierControlPoints: function () {
      var t,
          e,
          i,
          n,
          a = this.chart,
          o = this.getMeta(),
          r = o.dataset._model,
          s = a.chartArea,
          l = o.data || [];

      function d(t, e, i) {
        return Math.max(Math.min(t, i), e);
      }

      if (r.spanGaps && (l = l.filter(function (t) {
        return !t._model.skip;
      })), "monotone" === r.cubicInterpolationMode) ut.splineCurveMonotone(l);else for (t = 0, e = l.length; t < e; ++t) i = l[t]._model, n = ut.splineCurve(ut.previousItem(l, t)._model, i, ut.nextItem(l, t)._model, r.tension), i.controlPointPreviousX = n.previous.x, i.controlPointPreviousY = n.previous.y, i.controlPointNextX = n.next.x, i.controlPointNextY = n.next.y;
      if (a.options.elements.line.capBezierPoints) for (t = 0, e = l.length; t < e; ++t) i = l[t]._model, ee(i, s) && (t > 0 && ee(l[t - 1]._model, s) && (i.controlPointPreviousX = d(i.controlPointPreviousX, s.left, s.right), i.controlPointPreviousY = d(i.controlPointPreviousY, s.top, s.bottom)), t < l.length - 1 && ee(l[t + 1]._model, s) && (i.controlPointNextX = d(i.controlPointNextX, s.left, s.right), i.controlPointNextY = d(i.controlPointNextY, s.top, s.bottom)));
    },
    draw: function () {
      var t,
          e = this.chart,
          i = this.getMeta(),
          n = i.data || [],
          a = e.chartArea,
          o = n.length,
          r = 0;

      for (ie(this.getDataset(), e.options) && (t = (i.dataset._model.borderWidth || 0) / 2, ut.canvas.clipArea(e.ctx, {
        left: a.left,
        right: a.right,
        top: a.top - t,
        bottom: a.bottom + t
      }), i.dataset.draw(), ut.canvas.unclipArea(e.ctx)); r < o; ++r) n[r].draw(a);
    },
    setHoverStyle: function (t) {
      var e = t._model,
          i = t._options,
          n = ut.getHoverColor;
      t.$previousStyle = {
        backgroundColor: e.backgroundColor,
        borderColor: e.borderColor,
        borderWidth: e.borderWidth,
        radius: e.radius
      }, e.backgroundColor = Qt(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = Qt(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = Qt(i.hoverBorderWidth, i.borderWidth), e.radius = Qt(i.hoverRadius, i.radius);
    }
  }),
      ae = ut.options.resolve;

  st._set("polarArea", {
    scale: {
      type: "radialLinear",
      angleLines: {
        display: !1
      },
      gridLines: {
        circular: !0
      },
      pointLabels: {
        display: !1
      },
      ticks: {
        beginAtZero: !0
      }
    },
    animation: {
      animateRotate: !0,
      animateScale: !0
    },
    startAngle: -.5 * Math.PI,
    legendCallback: function (t) {
      var e = [];
      e.push('<ul class="' + t.id + '-legend">');
      var i = t.data,
          n = i.datasets,
          a = i.labels;
      if (n.length) for (var o = 0; o < n[0].data.length; ++o) e.push('<li><span style="background-color:' + n[0].backgroundColor[o] + '"></span>'), a[o] && e.push(a[o]), e.push("</li>");
      return e.push("</ul>"), e.join("");
    },
    legend: {
      labels: {
        generateLabels: function (t) {
          var e = t.data;
          return e.labels.length && e.datasets.length ? e.labels.map(function (i, n) {
            var a = t.getDatasetMeta(0),
                o = e.datasets[0],
                r = a.data[n].custom || {},
                s = t.options.elements.arc;
            return {
              text: i,
              fillStyle: ae([r.backgroundColor, o.backgroundColor, s.backgroundColor], void 0, n),
              strokeStyle: ae([r.borderColor, o.borderColor, s.borderColor], void 0, n),
              lineWidth: ae([r.borderWidth, o.borderWidth, s.borderWidth], void 0, n),
              hidden: isNaN(o.data[n]) || a.data[n].hidden,
              index: n
            };
          }) : [];
        }
      },
      onClick: function (t, e) {
        var i,
            n,
            a,
            o = e.index,
            r = this.chart;

        for (i = 0, n = (r.data.datasets || []).length; i < n; ++i) (a = r.getDatasetMeta(i)).data[o].hidden = !a.data[o].hidden;

        r.update();
      }
    },
    tooltips: {
      callbacks: {
        title: function () {
          return "";
        },
        label: function (t, e) {
          return e.labels[t.index] + ": " + t.yLabel;
        }
      }
    }
  });

  var oe = Mt.extend({
    dataElementType: Wt.Arc,
    linkScales: ut.noop,
    update: function (t) {
      var e,
          i,
          n,
          a = this,
          o = a.getDataset(),
          r = a.getMeta(),
          s = a.chart.options.startAngle || 0,
          l = a._starts = [],
          d = a._angles = [],
          u = r.data;

      for (a._updateRadius(), r.count = a.countVisibleElements(), e = 0, i = o.data.length; e < i; e++) l[e] = s, n = a._computeAngle(e), d[e] = n, s += n;

      for (e = 0, i = u.length; e < i; ++e) u[e]._options = a._resolveElementOptions(u[e], e), a.updateElement(u[e], e, t);
    },
    _updateRadius: function () {
      var t = this,
          e = t.chart,
          i = e.chartArea,
          n = e.options,
          a = Math.min(i.right - i.left, i.bottom - i.top);
      e.outerRadius = Math.max(a / 2, 0), e.innerRadius = Math.max(n.cutoutPercentage ? e.outerRadius / 100 * n.cutoutPercentage : 1, 0), e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(), t.outerRadius = e.outerRadius - e.radiusLength * t.index, t.innerRadius = t.outerRadius - e.radiusLength;
    },
    updateElement: function (t, e, i) {
      var n = this,
          a = n.chart,
          o = n.getDataset(),
          r = a.options,
          s = r.animation,
          l = a.scale,
          d = a.data.labels,
          u = l.xCenter,
          h = l.yCenter,
          c = r.startAngle,
          f = t.hidden ? 0 : l.getDistanceFromCenterForValue(o.data[e]),
          g = n._starts[e],
          p = g + (t.hidden ? 0 : n._angles[e]),
          m = s.animateScale ? 0 : l.getDistanceFromCenterForValue(o.data[e]),
          v = t._options || {};
      ut.extend(t, {
        _datasetIndex: n.index,
        _index: e,
        _scale: l,
        _model: {
          backgroundColor: v.backgroundColor,
          borderColor: v.borderColor,
          borderWidth: v.borderWidth,
          borderAlign: v.borderAlign,
          x: u,
          y: h,
          innerRadius: 0,
          outerRadius: i ? m : f,
          startAngle: i && s.animateRotate ? c : g,
          endAngle: i && s.animateRotate ? c : p,
          label: ut.valueAtIndexOrDefault(d, e, d[e])
        }
      }), t.pivot();
    },
    countVisibleElements: function () {
      var t = this.getDataset(),
          e = this.getMeta(),
          i = 0;
      return ut.each(e.data, function (e, n) {
        isNaN(t.data[n]) || e.hidden || i++;
      }), i;
    },
    setHoverStyle: function (t) {
      var e = t._model,
          i = t._options,
          n = ut.getHoverColor,
          a = ut.valueOrDefault;
      t.$previousStyle = {
        backgroundColor: e.backgroundColor,
        borderColor: e.borderColor,
        borderWidth: e.borderWidth
      }, e.backgroundColor = a(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = a(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = a(i.hoverBorderWidth, i.borderWidth);
    },
    _resolveElementOptions: function (t, e) {
      var i,
          n,
          a,
          o = this.chart,
          r = this.getDataset(),
          s = t.custom || {},
          l = o.options.elements.arc,
          d = {},
          u = {
        chart: o,
        dataIndex: e,
        dataset: r,
        datasetIndex: this.index
      },
          h = ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"];

      for (i = 0, n = h.length; i < n; ++i) d[a = h[i]] = ae([s[a], r[a], l[a]], u, e);

      return d;
    },
    _computeAngle: function (t) {
      var e = this,
          i = this.getMeta().count,
          n = e.getDataset(),
          a = e.getMeta();
      if (isNaN(n.data[t]) || a.data[t].hidden) return 0;
      var o = {
        chart: e.chart,
        dataIndex: t,
        dataset: n,
        datasetIndex: e.index
      };
      return ae([e.chart.options.elements.arc.angle, 2 * Math.PI / i], o, t);
    }
  });
  st._set("pie", ut.clone(st.doughnut)), st._set("pie", {
    cutoutPercentage: 0
  });
  var re = $t,
      se = ut.valueOrDefault,
      le = ut.options.resolve;

  st._set("radar", {
    scale: {
      type: "radialLinear"
    },
    elements: {
      line: {
        tension: 0
      }
    }
  });

  var de = Mt.extend({
    datasetElementType: Wt.Line,
    dataElementType: Wt.Point,
    linkScales: ut.noop,
    update: function (t) {
      var e,
          i,
          n = this,
          a = n.getMeta(),
          o = a.dataset,
          r = a.data || [],
          s = n.chart.scale,
          l = n.getDataset();

      for (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), o._scale = s, o._datasetIndex = n.index, o._children = r, o._loop = !0, o._model = n._resolveLineOptions(o), o.pivot(), e = 0, i = r.length; e < i; ++e) n.updateElement(r[e], e, t);

      for (n.updateBezierControlPoints(), e = 0, i = r.length; e < i; ++e) r[e].pivot();
    },
    updateElement: function (t, e, i) {
      var n = this,
          a = t.custom || {},
          o = n.getDataset(),
          r = n.chart.scale,
          s = r.getPointPositionForValue(e, o.data[e]),
          l = n._resolvePointOptions(t, e),
          d = n.getMeta().dataset._model,
          u = i ? r.xCenter : s.x,
          h = i ? r.yCenter : s.y;

      t._scale = r, t._options = l, t._datasetIndex = n.index, t._index = e, t._model = {
        x: u,
        y: h,
        skip: a.skip || isNaN(u) || isNaN(h),
        radius: l.radius,
        pointStyle: l.pointStyle,
        rotation: l.rotation,
        backgroundColor: l.backgroundColor,
        borderColor: l.borderColor,
        borderWidth: l.borderWidth,
        tension: se(a.tension, d ? d.tension : 0),
        hitRadius: l.hitRadius
      };
    },
    _resolvePointOptions: function (t, e) {
      var i,
          n,
          a,
          o = this.chart,
          r = o.data.datasets[this.index],
          s = t.custom || {},
          l = o.options.elements.point,
          d = {},
          u = {
        chart: o,
        dataIndex: e,
        dataset: r,
        datasetIndex: this.index
      },
          h = {
        backgroundColor: "pointBackgroundColor",
        borderColor: "pointBorderColor",
        borderWidth: "pointBorderWidth",
        hitRadius: "pointHitRadius",
        hoverBackgroundColor: "pointHoverBackgroundColor",
        hoverBorderColor: "pointHoverBorderColor",
        hoverBorderWidth: "pointHoverBorderWidth",
        hoverRadius: "pointHoverRadius",
        pointStyle: "pointStyle",
        radius: "pointRadius",
        rotation: "pointRotation"
      },
          c = Object.keys(h);

      for (i = 0, n = c.length; i < n; ++i) d[a = c[i]] = le([s[a], r[h[a]], r[a], l[a]], u, e);

      return d;
    },
    _resolveLineOptions: function (t) {
      var e,
          i,
          n,
          a = this.chart,
          o = a.data.datasets[this.index],
          r = t.custom || {},
          s = a.options.elements.line,
          l = {},
          d = ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"];

      for (e = 0, i = d.length; e < i; ++e) l[n = d[e]] = le([r[n], o[n], s[n]]);

      return l.tension = se(o.lineTension, s.tension), l;
    },
    updateBezierControlPoints: function () {
      var t,
          e,
          i,
          n,
          a = this.getMeta(),
          o = this.chart.chartArea,
          r = a.data || [];

      function s(t, e, i) {
        return Math.max(Math.min(t, i), e);
      }

      for (t = 0, e = r.length; t < e; ++t) i = r[t]._model, n = ut.splineCurve(ut.previousItem(r, t, !0)._model, i, ut.nextItem(r, t, !0)._model, i.tension), i.controlPointPreviousX = s(n.previous.x, o.left, o.right), i.controlPointPreviousY = s(n.previous.y, o.top, o.bottom), i.controlPointNextX = s(n.next.x, o.left, o.right), i.controlPointNextY = s(n.next.y, o.top, o.bottom);
    },
    setHoverStyle: function (t) {
      var e = t._model,
          i = t._options,
          n = ut.getHoverColor;
      t.$previousStyle = {
        backgroundColor: e.backgroundColor,
        borderColor: e.borderColor,
        borderWidth: e.borderWidth,
        radius: e.radius
      }, e.backgroundColor = se(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = se(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = se(i.hoverBorderWidth, i.borderWidth), e.radius = se(i.hoverRadius, i.radius);
    }
  });

  st._set("scatter", {
    hover: {
      mode: "single"
    },
    scales: {
      xAxes: [{
        id: "x-axis-1",
        type: "linear",
        position: "bottom"
      }],
      yAxes: [{
        id: "y-axis-1",
        type: "linear",
        position: "left"
      }]
    },
    showLines: !1,
    tooltips: {
      callbacks: {
        title: function () {
          return "";
        },
        label: function (t) {
          return "(" + t.xLabel + ", " + t.yLabel + ")";
        }
      }
    }
  });

  var ue = {
    bar: Yt,
    bubble: Kt,
    doughnut: $t,
    horizontalBar: Jt,
    line: ne,
    polarArea: oe,
    pie: re,
    radar: de,
    scatter: ne
  };

  function he(t, e) {
    return t.native ? {
      x: t.x,
      y: t.y
    } : ut.getRelativePosition(t, e);
  }

  function ce(t, e) {
    var i, n, a, o, r;

    for (n = 0, o = t.data.datasets.length; n < o; ++n) if (t.isDatasetVisible(n)) for (a = 0, r = (i = t.getDatasetMeta(n)).data.length; a < r; ++a) {
      var s = i.data[a];
      s._view.skip || e(s);
    }
  }

  function fe(t, e) {
    var i = [];
    return ce(t, function (t) {
      t.inRange(e.x, e.y) && i.push(t);
    }), i;
  }

  function ge(t, e, i, n) {
    var a = Number.POSITIVE_INFINITY,
        o = [];
    return ce(t, function (t) {
      if (!i || t.inRange(e.x, e.y)) {
        var r = t.getCenterPoint(),
            s = n(e, r);
        s < a ? (o = [t], a = s) : s === a && o.push(t);
      }
    }), o;
  }

  function pe(t) {
    var e = -1 !== t.indexOf("x"),
        i = -1 !== t.indexOf("y");
    return function (t, n) {
      var a = e ? Math.abs(t.x - n.x) : 0,
          o = i ? Math.abs(t.y - n.y) : 0;
      return Math.sqrt(Math.pow(a, 2) + Math.pow(o, 2));
    };
  }

  function me(t, e, i) {
    var n = he(e, t);
    i.axis = i.axis || "x";
    var a = pe(i.axis),
        o = i.intersect ? fe(t, n) : ge(t, n, !1, a),
        r = [];
    return o.length ? (t.data.datasets.forEach(function (e, i) {
      if (t.isDatasetVisible(i)) {
        var n = t.getDatasetMeta(i).data[o[0]._index];

        n && !n._view.skip && r.push(n);
      }
    }), r) : [];
  }

  var ve = {
    modes: {
      single: function (t, e) {
        var i = he(e, t),
            n = [];
        return ce(t, function (t) {
          if (t.inRange(i.x, i.y)) return n.push(t), n;
        }), n.slice(0, 1);
      },
      label: me,
      index: me,
      dataset: function (t, e, i) {
        var n = he(e, t);
        i.axis = i.axis || "xy";
        var a = pe(i.axis),
            o = i.intersect ? fe(t, n) : ge(t, n, !1, a);
        return o.length > 0 && (o = t.getDatasetMeta(o[0]._datasetIndex).data), o;
      },
      "x-axis": function (t, e) {
        return me(t, e, {
          intersect: !1
        });
      },
      point: function (t, e) {
        return fe(t, he(e, t));
      },
      nearest: function (t, e, i) {
        var n = he(e, t);
        i.axis = i.axis || "xy";
        var a = pe(i.axis);
        return ge(t, n, i.intersect, a);
      },
      x: function (t, e, i) {
        var n = he(e, t),
            a = [],
            o = !1;
        return ce(t, function (t) {
          t.inXRange(n.x) && a.push(t), t.inRange(n.x, n.y) && (o = !0);
        }), i.intersect && !o && (a = []), a;
      },
      y: function (t, e, i) {
        var n = he(e, t),
            a = [],
            o = !1;
        return ce(t, function (t) {
          t.inYRange(n.y) && a.push(t), t.inRange(n.x, n.y) && (o = !0);
        }), i.intersect && !o && (a = []), a;
      }
    }
  };

  function be(t, e) {
    return ut.where(t, function (t) {
      return t.position === e;
    });
  }

  function xe(t, e) {
    t.forEach(function (t, e) {
      return t._tmpIndex_ = e, t;
    }), t.sort(function (t, i) {
      var n = e ? i : t,
          a = e ? t : i;
      return n.weight === a.weight ? n._tmpIndex_ - a._tmpIndex_ : n.weight - a.weight;
    }), t.forEach(function (t) {
      delete t._tmpIndex_;
    });
  }

  function ye(t, e) {
    ut.each(t, function (t) {
      e[t.position] += t.isHorizontal() ? t.height : t.width;
    });
  }

  st._set("global", {
    layout: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    }
  });

  var ke = {
    defaults: {},
    addBox: function (t, e) {
      t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e);
    },
    removeBox: function (t, e) {
      var i = t.boxes ? t.boxes.indexOf(e) : -1;
      -1 !== i && t.boxes.splice(i, 1);
    },
    configure: function (t, e, i) {
      for (var n, a = ["fullWidth", "position", "weight"], o = a.length, r = 0; r < o; ++r) n = a[r], i.hasOwnProperty(n) && (e[n] = i[n]);
    },
    update: function (t, e, i) {
      if (t) {
        var n = t.options.layout || {},
            a = ut.options.toPadding(n.padding),
            o = a.left,
            r = a.right,
            s = a.top,
            l = a.bottom,
            d = be(t.boxes, "left"),
            u = be(t.boxes, "right"),
            h = be(t.boxes, "top"),
            c = be(t.boxes, "bottom"),
            f = be(t.boxes, "chartArea");
        xe(d, !0), xe(u, !1), xe(h, !0), xe(c, !1);
        var g,
            p = d.concat(u),
            m = h.concat(c),
            v = p.concat(m),
            b = e - o - r,
            x = i - s - l,
            y = (e - b / 2) / p.length,
            k = b,
            w = x,
            M = {
          top: s,
          left: o,
          bottom: l,
          right: r
        },
            _ = [];
        ut.each(v, function (t) {
          var e,
              i = t.isHorizontal();
          i ? (e = t.update(t.fullWidth ? b : k, x / 2), w -= e.height) : (e = t.update(y, w), k -= e.width), _.push({
            horizontal: i,
            width: e.width,
            box: t
          });
        }), g = function (t) {
          var e = 0,
              i = 0,
              n = 0,
              a = 0;
          return ut.each(t, function (t) {
            if (t.getPadding) {
              var o = t.getPadding();
              e = Math.max(e, o.top), i = Math.max(i, o.left), n = Math.max(n, o.bottom), a = Math.max(a, o.right);
            }
          }), {
            top: e,
            left: i,
            bottom: n,
            right: a
          };
        }(v), ut.each(p, T), ye(p, M), ut.each(m, T), ye(m, M), ut.each(p, function (t) {
          var e = ut.findNextWhere(_, function (e) {
            return e.box === t;
          }),
              i = {
            left: 0,
            right: 0,
            top: M.top,
            bottom: M.bottom
          };
          e && t.update(e.width, w, i);
        }), ye(v, M = {
          top: s,
          left: o,
          bottom: l,
          right: r
        });
        var C = Math.max(g.left - M.left, 0);
        M.left += C, M.right += Math.max(g.right - M.right, 0);
        var S = Math.max(g.top - M.top, 0);
        M.top += S, M.bottom += Math.max(g.bottom - M.bottom, 0);
        var P = i - M.top - M.bottom,
            I = e - M.left - M.right;
        I === k && P === w || (ut.each(p, function (t) {
          t.height = P;
        }), ut.each(m, function (t) {
          t.fullWidth || (t.width = I);
        }), w = P, k = I);
        var A = o + C,
            D = s + S;
        ut.each(d.concat(h), F), A += k, D += w, ut.each(u, F), ut.each(c, F), t.chartArea = {
          left: M.left,
          top: M.top,
          right: M.left + k,
          bottom: M.top + w
        }, ut.each(f, function (e) {
          e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(k, w);
        });
      }

      function T(t) {
        var e = ut.findNextWhere(_, function (e) {
          return e.box === t;
        });
        if (e) if (e.horizontal) {
          var i = {
            left: Math.max(M.left, g.left),
            right: Math.max(M.right, g.right),
            top: 0,
            bottom: 0
          };
          t.update(t.fullWidth ? b : k, x / 2, i);
        } else t.update(e.width, w);
      }

      function F(t) {
        t.isHorizontal() ? (t.left = t.fullWidth ? o : M.left, t.right = t.fullWidth ? e - r : M.left + k, t.top = D, t.bottom = D + t.height, D = t.bottom) : (t.left = A, t.right = A + t.width, t.top = M.top, t.bottom = M.top + w, A = t.right);
      }
    }
  };
  var we,
      Me = (we = Object.freeze({
    default: "@keyframes chartjs-render-animation{from{opacity:.99}to{opacity:1}}.chartjs-render-monitor{animation:chartjs-render-animation 1ms}.chartjs-size-monitor,.chartjs-size-monitor-expand,.chartjs-size-monitor-shrink{position:absolute;direction:ltr;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1}.chartjs-size-monitor-expand>div{position:absolute;width:1000000px;height:1000000px;left:0;top:0}.chartjs-size-monitor-shrink>div{position:absolute;width:200%;height:200%;left:0;top:0}"
  })) && we.default || we,
      _e = "$chartjs",
      Ce = "chartjs-size-monitor",
      Se = "chartjs-render-monitor",
      Pe = "chartjs-render-animation",
      Ie = ["animationstart", "webkitAnimationStart"],
      Ae = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout"
  };

  function De(t, e) {
    var i = ut.getStyle(t, e),
        n = i && i.match(/^(\d+)(\.\d+)?px$/);
    return n ? Number(n[1]) : void 0;
  }

  var Te = !!function () {
    var t = !1;

    try {
      var e = Object.defineProperty({}, "passive", {
        get: function () {
          t = !0;
        }
      });
      window.addEventListener("e", null, e);
    } catch (t) {}

    return t;
  }() && {
    passive: !0
  };

  function Fe(t, e, i) {
    t.addEventListener(e, i, Te);
  }

  function Le(t, e, i) {
    t.removeEventListener(e, i, Te);
  }

  function Re(t, e, i, n, a) {
    return {
      type: t,
      chart: e,
      native: a || null,
      x: void 0 !== i ? i : null,
      y: void 0 !== n ? n : null
    };
  }

  function Oe(t) {
    var e = document.createElement("div");
    return e.className = t || "", e;
  }

  function ze(t, e, i) {
    var n,
        a,
        o,
        r,
        s = t[_e] || (t[_e] = {}),
        l = s.resizer = function (t) {
      var e = Oe(Ce),
          i = Oe(Ce + "-expand"),
          n = Oe(Ce + "-shrink");
      i.appendChild(Oe()), n.appendChild(Oe()), e.appendChild(i), e.appendChild(n), e._reset = function () {
        i.scrollLeft = 1e6, i.scrollTop = 1e6, n.scrollLeft = 1e6, n.scrollTop = 1e6;
      };

      var a = function () {
        e._reset(), t();
      };

      return Fe(i, "scroll", a.bind(i, "expand")), Fe(n, "scroll", a.bind(n, "shrink")), e;
    }((n = function () {
      if (s.resizer) {
        var n = i.options.maintainAspectRatio && t.parentNode,
            a = n ? n.clientWidth : 0;
        e(Re("resize", i)), n && n.clientWidth < a && i.canvas && e(Re("resize", i));
      }
    }, o = !1, r = [], function () {
      r = Array.prototype.slice.call(arguments), a = a || this, o || (o = !0, ut.requestAnimFrame.call(window, function () {
        o = !1, n.apply(a, r);
      }));
    }));

    !function (t, e) {
      var i = t[_e] || (t[_e] = {}),
          n = i.renderProxy = function (t) {
        t.animationName === Pe && e();
      };

      ut.each(Ie, function (e) {
        Fe(t, e, n);
      }), i.reflow = !!t.offsetParent, t.classList.add(Se);
    }(t, function () {
      if (s.resizer) {
        var e = t.parentNode;
        e && e !== l.parentNode && e.insertBefore(l, e.firstChild), l._reset();
      }
    });
  }

  function Be(t) {
    var e = t[_e] || {},
        i = e.resizer;
    delete e.resizer, function (t) {
      var e = t[_e] || {},
          i = e.renderProxy;
      i && (ut.each(Ie, function (e) {
        Le(t, e, i);
      }), delete e.renderProxy), t.classList.remove(Se);
    }(t), i && i.parentNode && i.parentNode.removeChild(i);
  }

  var Ne = {
    disableCSSInjection: !1,
    _enabled: "undefined" != typeof window && "undefined" != typeof document,
    _ensureLoaded: function () {
      var t, e, i;
      this._loaded || (this._loaded = !0, this.disableCSSInjection || (e = Me, i = (t = this)._style || document.createElement("style"), t._style || (t._style = i, e = "/* Chart.js */\n" + e, i.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(i)), i.appendChild(document.createTextNode(e))));
    },
    acquireContext: function (t, e) {
      "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
      var i = t && t.getContext && t.getContext("2d");
      return this._ensureLoaded(), i && i.canvas === t ? (function (t, e) {
        var i = t.style,
            n = t.getAttribute("height"),
            a = t.getAttribute("width");

        if (t[_e] = {
          initial: {
            height: n,
            width: a,
            style: {
              display: i.display,
              height: i.height,
              width: i.width
            }
          }
        }, i.display = i.display || "block", null === a || "" === a) {
          var o = De(t, "width");
          void 0 !== o && (t.width = o);
        }

        if (null === n || "" === n) if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);else {
          var r = De(t, "height");
          void 0 !== o && (t.height = r);
        }
      }(t, e), i) : null;
    },
    releaseContext: function (t) {
      var e = t.canvas;

      if (e[_e]) {
        var i = e[_e].initial;
        ["height", "width"].forEach(function (t) {
          var n = i[t];
          ut.isNullOrUndef(n) ? e.removeAttribute(t) : e.setAttribute(t, n);
        }), ut.each(i.style || {}, function (t, i) {
          e.style[i] = t;
        }), e.width = e.width, delete e[_e];
      }
    },
    addEventListener: function (t, e, i) {
      var n = t.canvas;

      if ("resize" !== e) {
        var a = i[_e] || (i[_e] = {});
        Fe(n, e, (a.proxies || (a.proxies = {}))[t.id + "_" + e] = function (e) {
          i(function (t, e) {
            var i = Ae[t.type] || t.type,
                n = ut.getRelativePosition(t, e);
            return Re(i, e, n.x, n.y, t);
          }(e, t));
        });
      } else ze(n, i, t);
    },
    removeEventListener: function (t, e, i) {
      var n = t.canvas;

      if ("resize" !== e) {
        var a = ((i[_e] || {}).proxies || {})[t.id + "_" + e];
        a && Le(n, e, a);
      } else Be(n);
    }
  };
  ut.addEvent = Fe, ut.removeEvent = Le;
  var We = Ne._enabled ? Ne : {
    acquireContext: function (t) {
      return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null;
    }
  },
      Ve = ut.extend({
    initialize: function () {},
    acquireContext: function () {},
    releaseContext: function () {},
    addEventListener: function () {},
    removeEventListener: function () {}
  }, We);

  st._set("global", {
    plugins: {}
  });

  var Ee = {
    _plugins: [],
    _cacheId: 0,
    register: function (t) {
      var e = this._plugins;
      [].concat(t).forEach(function (t) {
        -1 === e.indexOf(t) && e.push(t);
      }), this._cacheId++;
    },
    unregister: function (t) {
      var e = this._plugins;
      [].concat(t).forEach(function (t) {
        var i = e.indexOf(t);
        -1 !== i && e.splice(i, 1);
      }), this._cacheId++;
    },
    clear: function () {
      this._plugins = [], this._cacheId++;
    },
    count: function () {
      return this._plugins.length;
    },
    getAll: function () {
      return this._plugins;
    },
    notify: function (t, e, i) {
      var n,
          a,
          o,
          r,
          s,
          l = this.descriptors(t),
          d = l.length;

      for (n = 0; n < d; ++n) if ("function" == typeof (s = (o = (a = l[n]).plugin)[e]) && ((r = [t].concat(i || [])).push(a.options), !1 === s.apply(o, r))) return !1;

      return !0;
    },
    descriptors: function (t) {
      var e = t.$plugins || (t.$plugins = {});
      if (e.id === this._cacheId) return e.descriptors;
      var i = [],
          n = [],
          a = t && t.config || {},
          o = a.options && a.options.plugins || {};
      return this._plugins.concat(a.plugins || []).forEach(function (t) {
        if (-1 === i.indexOf(t)) {
          var e = t.id,
              a = o[e];
          !1 !== a && (!0 === a && (a = ut.clone(st.global.plugins[e])), i.push(t), n.push({
            plugin: t,
            options: a || {}
          }));
        }
      }), e.descriptors = n, e.id = this._cacheId, n;
    },
    _invalidate: function (t) {
      delete t.$plugins;
    }
  },
      He = {
    constructors: {},
    defaults: {},
    registerScaleType: function (t, e, i) {
      this.constructors[t] = e, this.defaults[t] = ut.clone(i);
    },
    getScaleConstructor: function (t) {
      return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0;
    },
    getScaleDefaults: function (t) {
      return this.defaults.hasOwnProperty(t) ? ut.merge({}, [st.scale, this.defaults[t]]) : {};
    },
    updateScaleDefaults: function (t, e) {
      this.defaults.hasOwnProperty(t) && (this.defaults[t] = ut.extend(this.defaults[t], e));
    },
    addScalesToLayout: function (t) {
      ut.each(t.scales, function (e) {
        e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, ke.addBox(t, e);
      });
    }
  },
      je = ut.valueOrDefault;

  st._set("global", {
    tooltips: {
      enabled: !0,
      custom: null,
      mode: "nearest",
      position: "average",
      intersect: !0,
      backgroundColor: "rgba(0,0,0,0.8)",
      titleFontStyle: "bold",
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleFontColor: "#fff",
      titleAlign: "left",
      bodySpacing: 2,
      bodyFontColor: "#fff",
      bodyAlign: "left",
      footerFontStyle: "bold",
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFontColor: "#fff",
      footerAlign: "left",
      yPadding: 6,
      xPadding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      multiKeyBackground: "#fff",
      displayColors: !0,
      borderColor: "rgba(0,0,0,0)",
      borderWidth: 0,
      callbacks: {
        beforeTitle: ut.noop,
        title: function (t, e) {
          var i = "",
              n = e.labels,
              a = n ? n.length : 0;

          if (t.length > 0) {
            var o = t[0];
            o.label ? i = o.label : o.xLabel ? i = o.xLabel : a > 0 && o.index < a && (i = n[o.index]);
          }

          return i;
        },
        afterTitle: ut.noop,
        beforeBody: ut.noop,
        beforeLabel: ut.noop,
        label: function (t, e) {
          var i = e.datasets[t.datasetIndex].label || "";
          return i && (i += ": "), ut.isNullOrUndef(t.value) ? i += t.yLabel : i += t.value, i;
        },
        labelColor: function (t, e) {
          var i = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;

          return {
            borderColor: i.borderColor,
            backgroundColor: i.backgroundColor
          };
        },
        labelTextColor: function () {
          return this._options.bodyFontColor;
        },
        afterLabel: ut.noop,
        afterBody: ut.noop,
        beforeFooter: ut.noop,
        footer: ut.noop,
        afterFooter: ut.noop
      }
    }
  });

  var qe = {
    average: function (t) {
      if (!t.length) return !1;
      var e,
          i,
          n = 0,
          a = 0,
          o = 0;

      for (e = 0, i = t.length; e < i; ++e) {
        var r = t[e];

        if (r && r.hasValue()) {
          var s = r.tooltipPosition();
          n += s.x, a += s.y, ++o;
        }
      }

      return {
        x: n / o,
        y: a / o
      };
    },
    nearest: function (t, e) {
      var i,
          n,
          a,
          o = e.x,
          r = e.y,
          s = Number.POSITIVE_INFINITY;

      for (i = 0, n = t.length; i < n; ++i) {
        var l = t[i];

        if (l && l.hasValue()) {
          var d = l.getCenterPoint(),
              u = ut.distanceBetweenPoints(e, d);
          u < s && (s = u, a = l);
        }
      }

      if (a) {
        var h = a.tooltipPosition();
        o = h.x, r = h.y;
      }

      return {
        x: o,
        y: r
      };
    }
  };

  function Ye(t, e) {
    return e && (ut.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
  }

  function Ue(t) {
    return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t;
  }

  function Xe(t) {
    var e = st.global;
    return {
      xPadding: t.xPadding,
      yPadding: t.yPadding,
      xAlign: t.xAlign,
      yAlign: t.yAlign,
      bodyFontColor: t.bodyFontColor,
      _bodyFontFamily: je(t.bodyFontFamily, e.defaultFontFamily),
      _bodyFontStyle: je(t.bodyFontStyle, e.defaultFontStyle),
      _bodyAlign: t.bodyAlign,
      bodyFontSize: je(t.bodyFontSize, e.defaultFontSize),
      bodySpacing: t.bodySpacing,
      titleFontColor: t.titleFontColor,
      _titleFontFamily: je(t.titleFontFamily, e.defaultFontFamily),
      _titleFontStyle: je(t.titleFontStyle, e.defaultFontStyle),
      titleFontSize: je(t.titleFontSize, e.defaultFontSize),
      _titleAlign: t.titleAlign,
      titleSpacing: t.titleSpacing,
      titleMarginBottom: t.titleMarginBottom,
      footerFontColor: t.footerFontColor,
      _footerFontFamily: je(t.footerFontFamily, e.defaultFontFamily),
      _footerFontStyle: je(t.footerFontStyle, e.defaultFontStyle),
      footerFontSize: je(t.footerFontSize, e.defaultFontSize),
      _footerAlign: t.footerAlign,
      footerSpacing: t.footerSpacing,
      footerMarginTop: t.footerMarginTop,
      caretSize: t.caretSize,
      cornerRadius: t.cornerRadius,
      backgroundColor: t.backgroundColor,
      opacity: 0,
      legendColorBackground: t.multiKeyBackground,
      displayColors: t.displayColors,
      borderColor: t.borderColor,
      borderWidth: t.borderWidth
    };
  }

  function Ke(t, e) {
    return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - t.xPadding : t.x + t.xPadding;
  }

  function Ge(t) {
    return Ye([], Ue(t));
  }

  var Ze = pt.extend({
    initialize: function () {
      this._model = Xe(this._options), this._lastActive = [];
    },
    getTitle: function () {
      var t = this._options.callbacks,
          e = t.beforeTitle.apply(this, arguments),
          i = t.title.apply(this, arguments),
          n = t.afterTitle.apply(this, arguments),
          a = [];
      return a = Ye(a, Ue(e)), a = Ye(a, Ue(i)), a = Ye(a, Ue(n));
    },
    getBeforeBody: function () {
      return Ge(this._options.callbacks.beforeBody.apply(this, arguments));
    },
    getBody: function (t, e) {
      var i = this,
          n = i._options.callbacks,
          a = [];
      return ut.each(t, function (t) {
        var o = {
          before: [],
          lines: [],
          after: []
        };
        Ye(o.before, Ue(n.beforeLabel.call(i, t, e))), Ye(o.lines, n.label.call(i, t, e)), Ye(o.after, Ue(n.afterLabel.call(i, t, e))), a.push(o);
      }), a;
    },
    getAfterBody: function () {
      return Ge(this._options.callbacks.afterBody.apply(this, arguments));
    },
    getFooter: function () {
      var t = this._options.callbacks,
          e = t.beforeFooter.apply(this, arguments),
          i = t.footer.apply(this, arguments),
          n = t.afterFooter.apply(this, arguments),
          a = [];
      return a = Ye(a, Ue(e)), a = Ye(a, Ue(i)), a = Ye(a, Ue(n));
    },
    update: function (t) {
      var e,
          i,
          n,
          a,
          o,
          r,
          s,
          l,
          d,
          u,
          h = this,
          c = h._options,
          f = h._model,
          g = h._model = Xe(c),
          p = h._active,
          m = h._data,
          v = {
        xAlign: f.xAlign,
        yAlign: f.yAlign
      },
          b = {
        x: f.x,
        y: f.y
      },
          x = {
        width: f.width,
        height: f.height
      },
          y = {
        x: f.caretX,
        y: f.caretY
      };

      if (p.length) {
        g.opacity = 1;
        var k = [],
            w = [];
        y = qe[c.position].call(h, p, h._eventPosition);
        var M = [];

        for (e = 0, i = p.length; e < i; ++e) M.push((n = p[e], a = void 0, o = void 0, r = void 0, s = void 0, l = void 0, d = void 0, u = void 0, a = n._xScale, o = n._yScale || n._scale, r = n._index, s = n._datasetIndex, l = n._chart.getDatasetMeta(s).controller, d = l._getIndexScale(), u = l._getValueScale(), {
          xLabel: a ? a.getLabelForIndex(r, s) : "",
          yLabel: o ? o.getLabelForIndex(r, s) : "",
          label: d ? "" + d.getLabelForIndex(r, s) : "",
          value: u ? "" + u.getLabelForIndex(r, s) : "",
          index: r,
          datasetIndex: s,
          x: n._model.x,
          y: n._model.y
        }));

        c.filter && (M = M.filter(function (t) {
          return c.filter(t, m);
        })), c.itemSort && (M = M.sort(function (t, e) {
          return c.itemSort(t, e, m);
        })), ut.each(M, function (t) {
          k.push(c.callbacks.labelColor.call(h, t, h._chart)), w.push(c.callbacks.labelTextColor.call(h, t, h._chart));
        }), g.title = h.getTitle(M, m), g.beforeBody = h.getBeforeBody(M, m), g.body = h.getBody(M, m), g.afterBody = h.getAfterBody(M, m), g.footer = h.getFooter(M, m), g.x = y.x, g.y = y.y, g.caretPadding = c.caretPadding, g.labelColors = k, g.labelTextColors = w, g.dataPoints = M, x = function (t, e) {
          var i = t._chart.ctx,
              n = 2 * e.yPadding,
              a = 0,
              o = e.body,
              r = o.reduce(function (t, e) {
            return t + e.before.length + e.lines.length + e.after.length;
          }, 0);
          r += e.beforeBody.length + e.afterBody.length;
          var s = e.title.length,
              l = e.footer.length,
              d = e.titleFontSize,
              u = e.bodyFontSize,
              h = e.footerFontSize;
          n += s * d, n += s ? (s - 1) * e.titleSpacing : 0, n += s ? e.titleMarginBottom : 0, n += r * u, n += r ? (r - 1) * e.bodySpacing : 0, n += l ? e.footerMarginTop : 0, n += l * h, n += l ? (l - 1) * e.footerSpacing : 0;

          var c = 0,
              f = function (t) {
            a = Math.max(a, i.measureText(t).width + c);
          };

          return i.font = ut.fontString(d, e._titleFontStyle, e._titleFontFamily), ut.each(e.title, f), i.font = ut.fontString(u, e._bodyFontStyle, e._bodyFontFamily), ut.each(e.beforeBody.concat(e.afterBody), f), c = e.displayColors ? u + 2 : 0, ut.each(o, function (t) {
            ut.each(t.before, f), ut.each(t.lines, f), ut.each(t.after, f);
          }), c = 0, i.font = ut.fontString(h, e._footerFontStyle, e._footerFontFamily), ut.each(e.footer, f), {
            width: a += 2 * e.xPadding,
            height: n
          };
        }(this, g), b = function (t, e, i, n) {
          var a = t.x,
              o = t.y,
              r = t.caretSize,
              s = t.caretPadding,
              l = t.cornerRadius,
              d = i.xAlign,
              u = i.yAlign,
              h = r + s,
              c = l + s;
          return "right" === d ? a -= e.width : "center" === d && ((a -= e.width / 2) + e.width > n.width && (a = n.width - e.width), a < 0 && (a = 0)), "top" === u ? o += h : o -= "bottom" === u ? e.height + h : e.height / 2, "center" === u ? "left" === d ? a += h : "right" === d && (a -= h) : "left" === d ? a -= c : "right" === d && (a += c), {
            x: a,
            y: o
          };
        }(g, x, v = function (t, e) {
          var i,
              n,
              a,
              o,
              r,
              s = t._model,
              l = t._chart,
              d = t._chart.chartArea,
              u = "center",
              h = "center";
          s.y < e.height ? h = "top" : s.y > l.height - e.height && (h = "bottom");
          var c = (d.left + d.right) / 2,
              f = (d.top + d.bottom) / 2;
          "center" === h ? (i = function (t) {
            return t <= c;
          }, n = function (t) {
            return t > c;
          }) : (i = function (t) {
            return t <= e.width / 2;
          }, n = function (t) {
            return t >= l.width - e.width / 2;
          }), a = function (t) {
            return t + e.width + s.caretSize + s.caretPadding > l.width;
          }, o = function (t) {
            return t - e.width - s.caretSize - s.caretPadding < 0;
          }, r = function (t) {
            return t <= f ? "top" : "bottom";
          }, i(s.x) ? (u = "left", a(s.x) && (u = "center", h = r(s.y))) : n(s.x) && (u = "right", o(s.x) && (u = "center", h = r(s.y)));
          var g = t._options;
          return {
            xAlign: g.xAlign ? g.xAlign : u,
            yAlign: g.yAlign ? g.yAlign : h
          };
        }(this, x), h._chart);
      } else g.opacity = 0;

      return g.xAlign = v.xAlign, g.yAlign = v.yAlign, g.x = b.x, g.y = b.y, g.width = x.width, g.height = x.height, g.caretX = y.x, g.caretY = y.y, h._model = g, t && c.custom && c.custom.call(h, g), h;
    },
    drawCaret: function (t, e) {
      var i = this._chart.ctx,
          n = this._view,
          a = this.getCaretPosition(t, e, n);
      i.lineTo(a.x1, a.y1), i.lineTo(a.x2, a.y2), i.lineTo(a.x3, a.y3);
    },
    getCaretPosition: function (t, e, i) {
      var n,
          a,
          o,
          r,
          s,
          l,
          d = i.caretSize,
          u = i.cornerRadius,
          h = i.xAlign,
          c = i.yAlign,
          f = t.x,
          g = t.y,
          p = e.width,
          m = e.height;
      if ("center" === c) s = g + m / 2, "left" === h ? (a = (n = f) - d, o = n, r = s + d, l = s - d) : (a = (n = f + p) + d, o = n, r = s - d, l = s + d);else if ("left" === h ? (n = (a = f + u + d) - d, o = a + d) : "right" === h ? (n = (a = f + p - u - d) - d, o = a + d) : (n = (a = i.caretX) - d, o = a + d), "top" === c) s = (r = g) - d, l = r;else {
        s = (r = g + m) + d, l = r;
        var v = o;
        o = n, n = v;
      }
      return {
        x1: n,
        x2: a,
        x3: o,
        y1: r,
        y2: s,
        y3: l
      };
    },
    drawTitle: function (t, e, i) {
      var n = e.title;

      if (n.length) {
        t.x = Ke(e, e._titleAlign), i.textAlign = e._titleAlign, i.textBaseline = "top";
        var a,
            o,
            r = e.titleFontSize,
            s = e.titleSpacing;

        for (i.fillStyle = e.titleFontColor, i.font = ut.fontString(r, e._titleFontStyle, e._titleFontFamily), a = 0, o = n.length; a < o; ++a) i.fillText(n[a], t.x, t.y), t.y += r + s, a + 1 === n.length && (t.y += e.titleMarginBottom - s);
      }
    },
    drawBody: function (t, e, i) {
      var n,
          a = e.bodyFontSize,
          o = e.bodySpacing,
          r = e._bodyAlign,
          s = e.body,
          l = e.displayColors,
          d = e.labelColors,
          u = 0,
          h = l ? Ke(e, "left") : 0;
      i.textAlign = r, i.textBaseline = "top", i.font = ut.fontString(a, e._bodyFontStyle, e._bodyFontFamily), t.x = Ke(e, r);

      var c = function (e) {
        i.fillText(e, t.x + u, t.y), t.y += a + o;
      };

      i.fillStyle = e.bodyFontColor, ut.each(e.beforeBody, c), u = l && "right" !== r ? "center" === r ? a / 2 + 1 : a + 2 : 0, ut.each(s, function (o, r) {
        n = e.labelTextColors[r], i.fillStyle = n, ut.each(o.before, c), ut.each(o.lines, function (o) {
          l && (i.fillStyle = e.legendColorBackground, i.fillRect(h, t.y, a, a), i.lineWidth = 1, i.strokeStyle = d[r].borderColor, i.strokeRect(h, t.y, a, a), i.fillStyle = d[r].backgroundColor, i.fillRect(h + 1, t.y + 1, a - 2, a - 2), i.fillStyle = n), c(o);
        }), ut.each(o.after, c);
      }), u = 0, ut.each(e.afterBody, c), t.y -= o;
    },
    drawFooter: function (t, e, i) {
      var n = e.footer;
      n.length && (t.x = Ke(e, e._footerAlign), t.y += e.footerMarginTop, i.textAlign = e._footerAlign, i.textBaseline = "top", i.fillStyle = e.footerFontColor, i.font = ut.fontString(e.footerFontSize, e._footerFontStyle, e._footerFontFamily), ut.each(n, function (n) {
        i.fillText(n, t.x, t.y), t.y += e.footerFontSize + e.footerSpacing;
      }));
    },
    drawBackground: function (t, e, i, n) {
      i.fillStyle = e.backgroundColor, i.strokeStyle = e.borderColor, i.lineWidth = e.borderWidth;
      var a = e.xAlign,
          o = e.yAlign,
          r = t.x,
          s = t.y,
          l = n.width,
          d = n.height,
          u = e.cornerRadius;
      i.beginPath(), i.moveTo(r + u, s), "top" === o && this.drawCaret(t, n), i.lineTo(r + l - u, s), i.quadraticCurveTo(r + l, s, r + l, s + u), "center" === o && "right" === a && this.drawCaret(t, n), i.lineTo(r + l, s + d - u), i.quadraticCurveTo(r + l, s + d, r + l - u, s + d), "bottom" === o && this.drawCaret(t, n), i.lineTo(r + u, s + d), i.quadraticCurveTo(r, s + d, r, s + d - u), "center" === o && "left" === a && this.drawCaret(t, n), i.lineTo(r, s + u), i.quadraticCurveTo(r, s, r + u, s), i.closePath(), i.fill(), e.borderWidth > 0 && i.stroke();
    },
    draw: function () {
      var t = this._chart.ctx,
          e = this._view;

      if (0 !== e.opacity) {
        var i = {
          width: e.width,
          height: e.height
        },
            n = {
          x: e.x,
          y: e.y
        },
            a = Math.abs(e.opacity < .001) ? 0 : e.opacity,
            o = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
        this._options.enabled && o && (t.save(), t.globalAlpha = a, this.drawBackground(n, e, t, i), n.y += e.yPadding, this.drawTitle(n, e, t), this.drawBody(n, e, t), this.drawFooter(n, e, t), t.restore());
      }
    },
    handleEvent: function (t) {
      var e,
          i = this,
          n = i._options;
      return i._lastActive = i._lastActive || [], "mouseout" === t.type ? i._active = [] : i._active = i._chart.getElementsAtEventForMode(t, n.mode, n), (e = !ut.arrayEquals(i._active, i._lastActive)) && (i._lastActive = i._active, (n.enabled || n.custom) && (i._eventPosition = {
        x: t.x,
        y: t.y
      }, i.update(!0), i.pivot())), e;
    }
  }),
      $e = qe,
      Je = Ze;
  Je.positioners = $e;
  var Qe = ut.valueOrDefault;

  function ti() {
    return ut.merge({}, [].slice.call(arguments), {
      merger: function (t, e, i, n) {
        if ("xAxes" === t || "yAxes" === t) {
          var a,
              o,
              r,
              s = i[t].length;

          for (e[t] || (e[t] = []), a = 0; a < s; ++a) r = i[t][a], o = Qe(r.type, "xAxes" === t ? "category" : "linear"), a >= e[t].length && e[t].push({}), !e[t][a].type || r.type && r.type !== e[t][a].type ? ut.merge(e[t][a], [He.getScaleDefaults(o), r]) : ut.merge(e[t][a], r);
        } else ut._merger(t, e, i, n);
      }
    });
  }

  function ei() {
    return ut.merge({}, [].slice.call(arguments), {
      merger: function (t, e, i, n) {
        var a = e[t] || {},
            o = i[t];
        "scales" === t ? e[t] = ti(a, o) : "scale" === t ? e[t] = ut.merge(a, [He.getScaleDefaults(o.type), o]) : ut._merger(t, e, i, n);
      }
    });
  }

  function ii(t) {
    return "top" === t || "bottom" === t;
  }

  st._set("global", {
    elements: {},
    events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
    hover: {
      onHover: null,
      mode: "nearest",
      intersect: !0,
      animationDuration: 400
    },
    onClick: null,
    maintainAspectRatio: !0,
    responsive: !0,
    responsiveAnimationDuration: 0
  });

  var ni = function (t, e) {
    return this.construct(t, e), this;
  };

  ut.extend(ni.prototype, {
    construct: function (t, e) {
      var i = this;

      e = function (t) {
        var e = (t = t || {}).data = t.data || {};
        return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = ei(st.global, st[t.type], t.options || {}), t;
      }(e);

      var n = Ve.acquireContext(t, e),
          a = n && n.canvas,
          o = a && a.height,
          r = a && a.width;
      i.id = ut.uid(), i.ctx = n, i.canvas = a, i.config = e, i.width = r, i.height = o, i.aspectRatio = o ? r / o : null, i.options = e.options, i._bufferedRender = !1, i.chart = i, i.controller = i, ni.instances[i.id] = i, Object.defineProperty(i, "data", {
        get: function () {
          return i.config.data;
        },
        set: function (t) {
          i.config.data = t;
        }
      }), n && a ? (i.initialize(), i.update()) : console.error("Failed to create chart: can't acquire context from the given item");
    },
    initialize: function () {
      var t = this;
      return Ee.notify(t, "beforeInit"), ut.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.initToolTip(), Ee.notify(t, "afterInit"), t;
    },
    clear: function () {
      return ut.canvas.clear(this), this;
    },
    stop: function () {
      return bt.cancelAnimation(this), this;
    },
    resize: function (t) {
      var e = this,
          i = e.options,
          n = e.canvas,
          a = i.maintainAspectRatio && e.aspectRatio || null,
          o = Math.max(0, Math.floor(ut.getMaximumWidth(n))),
          r = Math.max(0, Math.floor(a ? o / a : ut.getMaximumHeight(n)));

      if ((e.width !== o || e.height !== r) && (n.width = e.width = o, n.height = e.height = r, n.style.width = o + "px", n.style.height = r + "px", ut.retinaScale(e, i.devicePixelRatio), !t)) {
        var s = {
          width: o,
          height: r
        };
        Ee.notify(e, "resize", [s]), i.onResize && i.onResize(e, s), e.stop(), e.update({
          duration: i.responsiveAnimationDuration
        });
      }
    },
    ensureScalesHaveIDs: function () {
      var t = this.options,
          e = t.scales || {},
          i = t.scale;
      ut.each(e.xAxes, function (t, e) {
        t.id = t.id || "x-axis-" + e;
      }), ut.each(e.yAxes, function (t, e) {
        t.id = t.id || "y-axis-" + e;
      }), i && (i.id = i.id || "scale");
    },
    buildOrUpdateScales: function () {
      var t = this,
          e = t.options,
          i = t.scales || {},
          n = [],
          a = Object.keys(i).reduce(function (t, e) {
        return t[e] = !1, t;
      }, {});
      e.scales && (n = n.concat((e.scales.xAxes || []).map(function (t) {
        return {
          options: t,
          dtype: "category",
          dposition: "bottom"
        };
      }), (e.scales.yAxes || []).map(function (t) {
        return {
          options: t,
          dtype: "linear",
          dposition: "left"
        };
      }))), e.scale && n.push({
        options: e.scale,
        dtype: "radialLinear",
        isDefault: !0,
        dposition: "chartArea"
      }), ut.each(n, function (e) {
        var n = e.options,
            o = n.id,
            r = Qe(n.type, e.dtype);
        ii(n.position) !== ii(e.dposition) && (n.position = e.dposition), a[o] = !0;
        var s = null;
        if (o in i && i[o].type === r) (s = i[o]).options = n, s.ctx = t.ctx, s.chart = t;else {
          var l = He.getScaleConstructor(r);
          if (!l) return;
          s = new l({
            id: o,
            type: r,
            options: n,
            ctx: t.ctx,
            chart: t
          }), i[s.id] = s;
        }
        s.mergeTicksOptions(), e.isDefault && (t.scale = s);
      }), ut.each(a, function (t, e) {
        t || delete i[e];
      }), t.scales = i, He.addScalesToLayout(this);
    },
    buildOrUpdateControllers: function () {
      var t = this,
          e = [];
      return ut.each(t.data.datasets, function (i, n) {
        var a = t.getDatasetMeta(n),
            o = i.type || t.config.type;
        if (a.type && a.type !== o && (t.destroyDatasetMeta(n), a = t.getDatasetMeta(n)), a.type = o, a.controller) a.controller.updateIndex(n), a.controller.linkScales();else {
          var r = ue[a.type];
          if (void 0 === r) throw new Error('"' + a.type + '" is not a chart type.');
          a.controller = new r(t, n), e.push(a.controller);
        }
      }, t), e;
    },
    resetElements: function () {
      var t = this;
      ut.each(t.data.datasets, function (e, i) {
        t.getDatasetMeta(i).controller.reset();
      }, t);
    },
    reset: function () {
      this.resetElements(), this.tooltip.initialize();
    },
    update: function (t) {
      var e,
          i,
          n = this;

      if (t && "object" == typeof t || (t = {
        duration: t,
        lazy: arguments[1]
      }), i = (e = n).options, ut.each(e.scales, function (t) {
        ke.removeBox(e, t);
      }), i = ei(st.global, st[e.config.type], i), e.options = e.config.options = i, e.ensureScalesHaveIDs(), e.buildOrUpdateScales(), e.tooltip._options = i.tooltips, e.tooltip.initialize(), Ee._invalidate(n), !1 !== Ee.notify(n, "beforeUpdate")) {
        n.tooltip._data = n.data;
        var a = n.buildOrUpdateControllers();
        ut.each(n.data.datasets, function (t, e) {
          n.getDatasetMeta(e).controller.buildOrUpdateElements();
        }, n), n.updateLayout(), n.options.animation && n.options.animation.duration && ut.each(a, function (t) {
          t.reset();
        }), n.updateDatasets(), n.tooltip.initialize(), n.lastActive = [], Ee.notify(n, "afterUpdate"), n._bufferedRender ? n._bufferedRequest = {
          duration: t.duration,
          easing: t.easing,
          lazy: t.lazy
        } : n.render(t);
      }
    },
    updateLayout: function () {
      !1 !== Ee.notify(this, "beforeLayout") && (ke.update(this, this.width, this.height), Ee.notify(this, "afterScaleUpdate"), Ee.notify(this, "afterLayout"));
    },
    updateDatasets: function () {
      if (!1 !== Ee.notify(this, "beforeDatasetsUpdate")) {
        for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);

        Ee.notify(this, "afterDatasetsUpdate");
      }
    },
    updateDataset: function (t) {
      var e = this.getDatasetMeta(t),
          i = {
        meta: e,
        index: t
      };
      !1 !== Ee.notify(this, "beforeDatasetUpdate", [i]) && (e.controller.update(), Ee.notify(this, "afterDatasetUpdate", [i]));
    },
    render: function (t) {
      var e = this;
      t && "object" == typeof t || (t = {
        duration: t,
        lazy: arguments[1]
      });
      var i = e.options.animation,
          n = Qe(t.duration, i && i.duration),
          a = t.lazy;

      if (!1 !== Ee.notify(e, "beforeRender")) {
        var o = function (t) {
          Ee.notify(e, "afterRender"), ut.callback(i && i.onComplete, [t], e);
        };

        if (i && n) {
          var r = new vt({
            numSteps: n / 16.66,
            easing: t.easing || i.easing,
            render: function (t, e) {
              var i = ut.easing.effects[e.easing],
                  n = e.currentStep,
                  a = n / e.numSteps;
              t.draw(i(a), a, n);
            },
            onAnimationProgress: i.onProgress,
            onAnimationComplete: o
          });
          bt.addAnimation(e, r, n, a);
        } else e.draw(), o(new vt({
          numSteps: 0,
          chart: e
        }));

        return e;
      }
    },
    draw: function (t) {
      var e = this;
      e.clear(), ut.isNullOrUndef(t) && (t = 1), e.transition(t), e.width <= 0 || e.height <= 0 || !1 !== Ee.notify(e, "beforeDraw", [t]) && (ut.each(e.boxes, function (t) {
        t.draw(e.chartArea);
      }, e), e.drawDatasets(t), e._drawTooltip(t), Ee.notify(e, "afterDraw", [t]));
    },
    transition: function (t) {
      for (var e = 0, i = (this.data.datasets || []).length; e < i; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);

      this.tooltip.transition(t);
    },
    drawDatasets: function (t) {
      var e = this;

      if (!1 !== Ee.notify(e, "beforeDatasetsDraw", [t])) {
        for (var i = (e.data.datasets || []).length - 1; i >= 0; --i) e.isDatasetVisible(i) && e.drawDataset(i, t);

        Ee.notify(e, "afterDatasetsDraw", [t]);
      }
    },
    drawDataset: function (t, e) {
      var i = this.getDatasetMeta(t),
          n = {
        meta: i,
        index: t,
        easingValue: e
      };
      !1 !== Ee.notify(this, "beforeDatasetDraw", [n]) && (i.controller.draw(e), Ee.notify(this, "afterDatasetDraw", [n]));
    },
    _drawTooltip: function (t) {
      var e = this.tooltip,
          i = {
        tooltip: e,
        easingValue: t
      };
      !1 !== Ee.notify(this, "beforeTooltipDraw", [i]) && (e.draw(), Ee.notify(this, "afterTooltipDraw", [i]));
    },
    getElementAtEvent: function (t) {
      return ve.modes.single(this, t);
    },
    getElementsAtEvent: function (t) {
      return ve.modes.label(this, t, {
        intersect: !0
      });
    },
    getElementsAtXAxis: function (t) {
      return ve.modes["x-axis"](this, t, {
        intersect: !0
      });
    },
    getElementsAtEventForMode: function (t, e, i) {
      var n = ve.modes[e];
      return "function" == typeof n ? n(this, t, i) : [];
    },
    getDatasetAtEvent: function (t) {
      return ve.modes.dataset(this, t, {
        intersect: !0
      });
    },
    getDatasetMeta: function (t) {
      var e = this.data.datasets[t];
      e._meta || (e._meta = {});
      var i = e._meta[this.id];
      return i || (i = e._meta[this.id] = {
        type: null,
        data: [],
        dataset: null,
        controller: null,
        hidden: null,
        xAxisID: null,
        yAxisID: null
      }), i;
    },
    getVisibleDatasetCount: function () {
      for (var t = 0, e = 0, i = this.data.datasets.length; e < i; ++e) this.isDatasetVisible(e) && t++;

      return t;
    },
    isDatasetVisible: function (t) {
      var e = this.getDatasetMeta(t);
      return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden;
    },
    generateLegend: function () {
      return this.options.legendCallback(this);
    },
    destroyDatasetMeta: function (t) {
      var e = this.id,
          i = this.data.datasets[t],
          n = i._meta && i._meta[e];
      n && (n.controller.destroy(), delete i._meta[e]);
    },
    destroy: function () {
      var t,
          e,
          i = this,
          n = i.canvas;

      for (i.stop(), t = 0, e = i.data.datasets.length; t < e; ++t) i.destroyDatasetMeta(t);

      n && (i.unbindEvents(), ut.canvas.clear(i), Ve.releaseContext(i.ctx), i.canvas = null, i.ctx = null), Ee.notify(i, "destroy"), delete ni.instances[i.id];
    },
    toBase64Image: function () {
      return this.canvas.toDataURL.apply(this.canvas, arguments);
    },
    initToolTip: function () {
      var t = this;
      t.tooltip = new Je({
        _chart: t,
        _chartInstance: t,
        _data: t.data,
        _options: t.options.tooltips
      }, t);
    },
    bindEvents: function () {
      var t = this,
          e = t._listeners = {},
          i = function () {
        t.eventHandler.apply(t, arguments);
      };

      ut.each(t.options.events, function (n) {
        Ve.addEventListener(t, n, i), e[n] = i;
      }), t.options.responsive && (i = function () {
        t.resize();
      }, Ve.addEventListener(t, "resize", i), e.resize = i);
    },
    unbindEvents: function () {
      var t = this,
          e = t._listeners;
      e && (delete t._listeners, ut.each(e, function (e, i) {
        Ve.removeEventListener(t, i, e);
      }));
    },
    updateHoverStyle: function (t, e, i) {
      var n,
          a,
          o,
          r = i ? "setHoverStyle" : "removeHoverStyle";

      for (a = 0, o = t.length; a < o; ++a) (n = t[a]) && this.getDatasetMeta(n._datasetIndex).controller[r](n);
    },
    eventHandler: function (t) {
      var e = this,
          i = e.tooltip;

      if (!1 !== Ee.notify(e, "beforeEvent", [t])) {
        e._bufferedRender = !0, e._bufferedRequest = null;
        var n = e.handleEvent(t);
        i && (n = i._start ? i.handleEvent(t) : n | i.handleEvent(t)), Ee.notify(e, "afterEvent", [t]);
        var a = e._bufferedRequest;
        return a ? e.render(a) : n && !e.animating && (e.stop(), e.render({
          duration: e.options.hover.animationDuration,
          lazy: !0
        })), e._bufferedRender = !1, e._bufferedRequest = null, e;
      }
    },
    handleEvent: function (t) {
      var e,
          i = this,
          n = i.options || {},
          a = n.hover;
      return i.lastActive = i.lastActive || [], "mouseout" === t.type ? i.active = [] : i.active = i.getElementsAtEventForMode(t, a.mode, a), ut.callback(n.onHover || n.hover.onHover, [t.native, i.active], i), "mouseup" !== t.type && "click" !== t.type || n.onClick && n.onClick.call(i, t.native, i.active), i.lastActive.length && i.updateHoverStyle(i.lastActive, a.mode, !1), i.active.length && a.mode && i.updateHoverStyle(i.active, a.mode, !0), e = !ut.arrayEquals(i.active, i.lastActive), i.lastActive = i.active, e;
    }
  }), ni.instances = {};
  var ai = ni;
  ni.Controller = ni, ni.types = {}, ut.configMerge = ei, ut.scaleMerge = ti;

  function oi() {
    throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.");
  }

  function ri(t) {
    this.options = t || {};
  }

  ut.extend(ri.prototype, {
    formats: oi,
    parse: oi,
    format: oi,
    add: oi,
    diff: oi,
    startOf: oi,
    endOf: oi,
    _create: function (t) {
      return t;
    }
  }), ri.override = function (t) {
    ut.extend(ri.prototype, t);
  };
  var si = {
    _date: ri
  },
      li = {
    formatters: {
      values: function (t) {
        return ut.isArray(t) ? t : "" + t;
      },
      linear: function (t, e, i) {
        var n = i.length > 3 ? i[2] - i[1] : i[1] - i[0];
        Math.abs(n) > 1 && t !== Math.floor(t) && (n = t - Math.floor(t));
        var a = ut.log10(Math.abs(n)),
            o = "";
        if (0 !== t) {
          if (Math.max(Math.abs(i[0]), Math.abs(i[i.length - 1])) < 1e-4) {
            var r = ut.log10(Math.abs(t));
            o = t.toExponential(Math.floor(r) - Math.floor(a));
          } else {
            var s = -1 * Math.floor(a);
            s = Math.max(Math.min(s, 20), 0), o = t.toFixed(s);
          }
        } else o = "0";
        return o;
      },
      logarithmic: function (t, e, i) {
        var n = t / Math.pow(10, Math.floor(ut.log10(t)));
        return 0 === t ? "0" : 1 === n || 2 === n || 5 === n || 0 === e || e === i.length - 1 ? t.toExponential() : "";
      }
    }
  },
      di = ut.valueOrDefault,
      ui = ut.valueAtIndexOrDefault;

  function hi(t) {
    var e,
        i,
        n = [];

    for (e = 0, i = t.length; e < i; ++e) n.push(t[e].label);

    return n;
  }

  function ci(t, e, i) {
    return ut.isArray(e) ? ut.longestText(t, i, e) : t.measureText(e).width;
  }

  st._set("scale", {
    display: !0,
    position: "left",
    offset: !1,
    gridLines: {
      display: !0,
      color: "rgba(0, 0, 0, 0.1)",
      lineWidth: 1,
      drawBorder: !0,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickMarkLength: 10,
      zeroLineWidth: 1,
      zeroLineColor: "rgba(0,0,0,0.25)",
      zeroLineBorderDash: [],
      zeroLineBorderDashOffset: 0,
      offsetGridLines: !1,
      borderDash: [],
      borderDashOffset: 0
    },
    scaleLabel: {
      display: !1,
      labelString: "",
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      beginAtZero: !1,
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      padding: 0,
      reverse: !1,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 0,
      labelOffset: 0,
      callback: li.formatters.values,
      minor: {},
      major: {}
    }
  });

  var fi = pt.extend({
    getPadding: function () {
      return {
        left: this.paddingLeft || 0,
        top: this.paddingTop || 0,
        right: this.paddingRight || 0,
        bottom: this.paddingBottom || 0
      };
    },
    getTicks: function () {
      return this._ticks;
    },
    mergeTicksOptions: function () {
      var t = this.options.ticks;

      for (var e in !1 === t.minor && (t.minor = {
        display: !1
      }), !1 === t.major && (t.major = {
        display: !1
      }), t) "major" !== e && "minor" !== e && (void 0 === t.minor[e] && (t.minor[e] = t[e]), void 0 === t.major[e] && (t.major[e] = t[e]));
    },
    beforeUpdate: function () {
      ut.callback(this.options.beforeUpdate, [this]);
    },
    update: function (t, e, i) {
      var n,
          a,
          o,
          r,
          s,
          l,
          d = this;

      for (d.beforeUpdate(), d.maxWidth = t, d.maxHeight = e, d.margins = ut.extend({
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }, i), d._maxLabelLines = 0, d.longestLabelWidth = 0, d.longestTextCache = d.longestTextCache || {}, d.beforeSetDimensions(), d.setDimensions(), d.afterSetDimensions(), d.beforeDataLimits(), d.determineDataLimits(), d.afterDataLimits(), d.beforeBuildTicks(), s = d.buildTicks() || [], s = d.afterBuildTicks(s) || s, d.beforeTickToLabelConversion(), o = d.convertTicksToLabels(s) || d.ticks, d.afterTickToLabelConversion(), d.ticks = o, n = 0, a = o.length; n < a; ++n) r = o[n], (l = s[n]) ? l.label = r : s.push(l = {
        label: r,
        major: !1
      });

      return d._ticks = s, d.beforeCalculateTickRotation(), d.calculateTickRotation(), d.afterCalculateTickRotation(), d.beforeFit(), d.fit(), d.afterFit(), d.afterUpdate(), d.minSize;
    },
    afterUpdate: function () {
      ut.callback(this.options.afterUpdate, [this]);
    },
    beforeSetDimensions: function () {
      ut.callback(this.options.beforeSetDimensions, [this]);
    },
    setDimensions: function () {
      var t = this;
      t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0;
    },
    afterSetDimensions: function () {
      ut.callback(this.options.afterSetDimensions, [this]);
    },
    beforeDataLimits: function () {
      ut.callback(this.options.beforeDataLimits, [this]);
    },
    determineDataLimits: ut.noop,
    afterDataLimits: function () {
      ut.callback(this.options.afterDataLimits, [this]);
    },
    beforeBuildTicks: function () {
      ut.callback(this.options.beforeBuildTicks, [this]);
    },
    buildTicks: ut.noop,
    afterBuildTicks: function (t) {
      var e = this;
      return ut.isArray(t) && t.length ? ut.callback(e.options.afterBuildTicks, [e, t]) : (e.ticks = ut.callback(e.options.afterBuildTicks, [e, e.ticks]) || e.ticks, t);
    },
    beforeTickToLabelConversion: function () {
      ut.callback(this.options.beforeTickToLabelConversion, [this]);
    },
    convertTicksToLabels: function () {
      var t = this.options.ticks;
      this.ticks = this.ticks.map(t.userCallback || t.callback, this);
    },
    afterTickToLabelConversion: function () {
      ut.callback(this.options.afterTickToLabelConversion, [this]);
    },
    beforeCalculateTickRotation: function () {
      ut.callback(this.options.beforeCalculateTickRotation, [this]);
    },
    calculateTickRotation: function () {
      var t = this,
          e = t.ctx,
          i = t.options.ticks,
          n = hi(t._ticks),
          a = ut.options._parseFont(i);

      e.font = a.string;
      var o = i.minRotation || 0;
      if (n.length && t.options.display && t.isHorizontal()) for (var r, s = ut.longestText(e, a.string, n, t.longestTextCache), l = s, d = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; l > d && o < i.maxRotation;) {
        var u = ut.toRadians(o);

        if (r = Math.cos(u), Math.sin(u) * s > t.maxHeight) {
          o--;
          break;
        }

        o++, l = r * s;
      }
      t.labelRotation = o;
    },
    afterCalculateTickRotation: function () {
      ut.callback(this.options.afterCalculateTickRotation, [this]);
    },
    beforeFit: function () {
      ut.callback(this.options.beforeFit, [this]);
    },
    fit: function () {
      var t = this,
          e = t.minSize = {
        width: 0,
        height: 0
      },
          i = hi(t._ticks),
          n = t.options,
          a = n.ticks,
          o = n.scaleLabel,
          r = n.gridLines,
          s = t._isVisible(),
          l = n.position,
          d = t.isHorizontal(),
          u = ut.options._parseFont,
          h = u(a),
          c = n.gridLines.tickMarkLength;

      if (e.width = d ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : s && r.drawTicks ? c : 0, e.height = d ? s && r.drawTicks ? c : 0 : t.maxHeight, o.display && s) {
        var f = u(o),
            g = ut.options.toPadding(o.padding),
            p = f.lineHeight + g.height;
        d ? e.height += p : e.width += p;
      }

      if (a.display && s) {
        var m = ut.longestText(t.ctx, h.string, i, t.longestTextCache),
            v = ut.numberOfLabelLines(i),
            b = .5 * h.size,
            x = t.options.ticks.padding;

        if (t._maxLabelLines = v, t.longestLabelWidth = m, d) {
          var y = ut.toRadians(t.labelRotation),
              k = Math.cos(y),
              w = Math.sin(y) * m + h.lineHeight * v + b;
          e.height = Math.min(t.maxHeight, e.height + w + x), t.ctx.font = h.string;

          var M,
              _,
              C = ci(t.ctx, i[0], h.string),
              S = ci(t.ctx, i[i.length - 1], h.string),
              P = t.getPixelForTick(0) - t.left,
              I = t.right - t.getPixelForTick(i.length - 1);

          0 !== t.labelRotation ? (M = "bottom" === l ? k * C : k * b, _ = "bottom" === l ? k * b : k * S) : (M = C / 2, _ = S / 2), t.paddingLeft = Math.max(M - P, 0) + 3, t.paddingRight = Math.max(_ - I, 0) + 3;
        } else a.mirror ? m = 0 : m += x + b, e.width = Math.min(t.maxWidth, e.width + m), t.paddingTop = h.size / 2, t.paddingBottom = h.size / 2;
      }

      t.handleMargins(), t.width = e.width, t.height = e.height;
    },
    handleMargins: function () {
      var t = this;
      t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0));
    },
    afterFit: function () {
      ut.callback(this.options.afterFit, [this]);
    },
    isHorizontal: function () {
      return "top" === this.options.position || "bottom" === this.options.position;
    },
    isFullWidth: function () {
      return this.options.fullWidth;
    },
    getRightValue: function (t) {
      if (ut.isNullOrUndef(t)) return NaN;
      if (("number" == typeof t || t instanceof Number) && !isFinite(t)) return NaN;
      if (t) if (this.isHorizontal()) {
        if (void 0 !== t.x) return this.getRightValue(t.x);
      } else if (void 0 !== t.y) return this.getRightValue(t.y);
      return t;
    },
    getLabelForIndex: ut.noop,
    getPixelForValue: ut.noop,
    getValueForPixel: ut.noop,
    getPixelForTick: function (t) {
      var e = this,
          i = e.options.offset;

      if (e.isHorizontal()) {
        var n = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (i ? 0 : 1), 1),
            a = n * t + e.paddingLeft;
        i && (a += n / 2);
        var o = e.left + a;
        return o += e.isFullWidth() ? e.margins.left : 0;
      }

      var r = e.height - (e.paddingTop + e.paddingBottom);
      return e.top + t * (r / (e._ticks.length - 1));
    },
    getPixelForDecimal: function (t) {
      var e = this;

      if (e.isHorizontal()) {
        var i = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft,
            n = e.left + i;
        return n += e.isFullWidth() ? e.margins.left : 0;
      }

      return e.top + t * e.height;
    },
    getBasePixel: function () {
      return this.getPixelForValue(this.getBaseValue());
    },
    getBaseValue: function () {
      var t = this.min,
          e = this.max;
      return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
    },
    _autoSkip: function (t) {
      var e,
          i,
          n = this,
          a = n.isHorizontal(),
          o = n.options.ticks.minor,
          r = t.length,
          s = !1,
          l = o.maxTicksLimit,
          d = n._tickSize() * (r - 1),
          u = a ? n.width - (n.paddingLeft + n.paddingRight) : n.height - (n.paddingTop + n.PaddingBottom),
          h = [];

      for (d > u && (s = 1 + Math.floor(d / u)), r > l && (s = Math.max(s, 1 + Math.floor(r / l))), e = 0; e < r; e++) i = t[e], s > 1 && e % s > 0 && delete i.label, h.push(i);

      return h;
    },
    _tickSize: function () {
      var t = this,
          e = t.isHorizontal(),
          i = t.options.ticks.minor,
          n = ut.toRadians(t.labelRotation),
          a = Math.abs(Math.cos(n)),
          o = Math.abs(Math.sin(n)),
          r = i.autoSkipPadding || 0,
          s = t.longestLabelWidth + r || 0,
          l = ut.options._parseFont(i),
          d = t._maxLabelLines * l.lineHeight + r || 0;

      return e ? d * a > s * o ? s / a : d / o : d * o < s * a ? d / a : s / o;
    },
    _isVisible: function () {
      var t,
          e,
          i,
          n = this.chart,
          a = this.options.display;
      if ("auto" !== a) return !!a;

      for (t = 0, e = n.data.datasets.length; t < e; ++t) if (n.isDatasetVisible(t) && ((i = n.getDatasetMeta(t)).xAxisID === this.id || i.yAxisID === this.id)) return !0;

      return !1;
    },
    draw: function (t) {
      var e = this,
          i = e.options;

      if (e._isVisible()) {
        var n,
            a,
            o,
            r = e.chart,
            s = e.ctx,
            l = st.global.defaultFontColor,
            d = i.ticks.minor,
            u = i.ticks.major || d,
            h = i.gridLines,
            c = i.scaleLabel,
            f = i.position,
            g = 0 !== e.labelRotation,
            p = d.mirror,
            m = e.isHorizontal(),
            v = ut.options._parseFont,
            b = d.display && d.autoSkip ? e._autoSkip(e.getTicks()) : e.getTicks(),
            x = di(d.fontColor, l),
            y = v(d),
            k = y.lineHeight,
            w = di(u.fontColor, l),
            M = v(u),
            _ = d.padding,
            C = d.labelOffset,
            S = h.drawTicks ? h.tickMarkLength : 0,
            P = di(c.fontColor, l),
            I = v(c),
            A = ut.options.toPadding(c.padding),
            D = ut.toRadians(e.labelRotation),
            T = [],
            F = h.drawBorder ? ui(h.lineWidth, 0, 0) : 0,
            L = ut._alignPixel;
        "top" === f ? (n = L(r, e.bottom, F), a = e.bottom - S, o = n - F / 2) : "bottom" === f ? (n = L(r, e.top, F), a = n + F / 2, o = e.top + S) : "left" === f ? (n = L(r, e.right, F), a = e.right - S, o = n - F / 2) : (n = L(r, e.left, F), a = n + F / 2, o = e.left + S);

        if (ut.each(b, function (n, s) {
          if (!ut.isNullOrUndef(n.label)) {
            var l,
                d,
                u,
                c,
                v,
                b,
                x,
                y,
                w,
                M,
                P,
                I,
                A,
                R,
                O,
                z,
                B = n.label;
            s === e.zeroLineIndex && i.offset === h.offsetGridLines ? (l = h.zeroLineWidth, d = h.zeroLineColor, u = h.zeroLineBorderDash || [], c = h.zeroLineBorderDashOffset || 0) : (l = ui(h.lineWidth, s), d = ui(h.color, s), u = h.borderDash || [], c = h.borderDashOffset || 0);

            var N = ut.isArray(B) ? B.length : 1,
                W = function (t, e, i) {
              var n = t.getPixelForTick(e);
              return i && (1 === t.getTicks().length ? n -= t.isHorizontal() ? Math.max(n - t.left, t.right - n) : Math.max(n - t.top, t.bottom - n) : n -= 0 === e ? (t.getPixelForTick(1) - n) / 2 : (n - t.getPixelForTick(e - 1)) / 2), n;
            }(e, s, h.offsetGridLines);

            if (m) {
              var V = S + _;
              W < e.left - 1e-7 && (d = "rgba(0,0,0,0)"), v = x = w = P = L(r, W, l), b = a, y = o, A = e.getPixelForTick(s) + C, "top" === f ? (M = L(r, t.top, F) + F / 2, I = t.bottom, O = ((g ? 1 : .5) - N) * k, z = g ? "left" : "center", R = e.bottom - V) : (M = t.top, I = L(r, t.bottom, F) - F / 2, O = (g ? 0 : .5) * k, z = g ? "right" : "center", R = e.top + V);
            } else {
              var E = (p ? 0 : S) + _;
              W < e.top - 1e-7 && (d = "rgba(0,0,0,0)"), v = a, x = o, b = y = M = I = L(r, W, l), R = e.getPixelForTick(s) + C, O = (1 - N) * k / 2, "left" === f ? (w = L(r, t.left, F) + F / 2, P = t.right, z = p ? "left" : "right", A = e.right - E) : (w = t.left, P = L(r, t.right, F) - F / 2, z = p ? "right" : "left", A = e.left + E);
            }

            T.push({
              tx1: v,
              ty1: b,
              tx2: x,
              ty2: y,
              x1: w,
              y1: M,
              x2: P,
              y2: I,
              labelX: A,
              labelY: R,
              glWidth: l,
              glColor: d,
              glBorderDash: u,
              glBorderDashOffset: c,
              rotation: -1 * D,
              label: B,
              major: n.major,
              textOffset: O,
              textAlign: z
            });
          }
        }), ut.each(T, function (t) {
          var e = t.glWidth,
              i = t.glColor;

          if (h.display && e && i && (s.save(), s.lineWidth = e, s.strokeStyle = i, s.setLineDash && (s.setLineDash(t.glBorderDash), s.lineDashOffset = t.glBorderDashOffset), s.beginPath(), h.drawTicks && (s.moveTo(t.tx1, t.ty1), s.lineTo(t.tx2, t.ty2)), h.drawOnChartArea && (s.moveTo(t.x1, t.y1), s.lineTo(t.x2, t.y2)), s.stroke(), s.restore()), d.display) {
            s.save(), s.translate(t.labelX, t.labelY), s.rotate(t.rotation), s.font = t.major ? M.string : y.string, s.fillStyle = t.major ? w : x, s.textBaseline = "middle", s.textAlign = t.textAlign;
            var n = t.label,
                a = t.textOffset;
            if (ut.isArray(n)) for (var o = 0; o < n.length; ++o) s.fillText("" + n[o], 0, a), a += k;else s.fillText(n, 0, a);
            s.restore();
          }
        }), c.display) {
          var R,
              O,
              z = 0,
              B = I.lineHeight / 2;
          if (m) R = e.left + (e.right - e.left) / 2, O = "bottom" === f ? e.bottom - B - A.bottom : e.top + B + A.top;else {
            var N = "left" === f;
            R = N ? e.left + B + A.top : e.right - B - A.top, O = e.top + (e.bottom - e.top) / 2, z = N ? -.5 * Math.PI : .5 * Math.PI;
          }
          s.save(), s.translate(R, O), s.rotate(z), s.textAlign = "center", s.textBaseline = "middle", s.fillStyle = P, s.font = I.string, s.fillText(c.labelString, 0, 0), s.restore();
        }

        if (F) {
          var W,
              V,
              E,
              H,
              j = F,
              q = ui(h.lineWidth, b.length - 1, 0);
          m ? (W = L(r, e.left, j) - j / 2, V = L(r, e.right, q) + q / 2, E = H = n) : (E = L(r, e.top, j) - j / 2, H = L(r, e.bottom, q) + q / 2, W = V = n), s.lineWidth = F, s.strokeStyle = ui(h.color, 0), s.beginPath(), s.moveTo(W, E), s.lineTo(V, H), s.stroke();
        }
      }
    }
  }),
      gi = fi.extend({
    getLabels: function () {
      var t = this.chart.data;
      return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels;
    },
    determineDataLimits: function () {
      var t,
          e = this,
          i = e.getLabels();
      e.minIndex = 0, e.maxIndex = i.length - 1, void 0 !== e.options.ticks.min && (t = i.indexOf(e.options.ticks.min), e.minIndex = -1 !== t ? t : e.minIndex), void 0 !== e.options.ticks.max && (t = i.indexOf(e.options.ticks.max), e.maxIndex = -1 !== t ? t : e.maxIndex), e.min = i[e.minIndex], e.max = i[e.maxIndex];
    },
    buildTicks: function () {
      var t = this,
          e = t.getLabels();
      t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1);
    },
    getLabelForIndex: function (t, e) {
      var i = this,
          n = i.chart;
      return n.getDatasetMeta(e).controller._getValueScaleId() === i.id ? i.getRightValue(n.data.datasets[e].data[t]) : i.ticks[t - i.minIndex];
    },
    getPixelForValue: function (t, e) {
      var i,
          n = this,
          a = n.options.offset,
          o = Math.max(n.maxIndex + 1 - n.minIndex - (a ? 0 : 1), 1);

      if (null != t && (i = n.isHorizontal() ? t.x : t.y), void 0 !== i || void 0 !== t && isNaN(e)) {
        t = i || t;
        var r = n.getLabels().indexOf(t);
        e = -1 !== r ? r : e;
      }

      if (n.isHorizontal()) {
        var s = n.width / o,
            l = s * (e - n.minIndex);
        return a && (l += s / 2), n.left + l;
      }

      var d = n.height / o,
          u = d * (e - n.minIndex);
      return a && (u += d / 2), n.top + u;
    },
    getPixelForTick: function (t) {
      return this.getPixelForValue(this.ticks[t], t + this.minIndex, null);
    },
    getValueForPixel: function (t) {
      var e = this,
          i = e.options.offset,
          n = Math.max(e._ticks.length - (i ? 0 : 1), 1),
          a = e.isHorizontal(),
          o = (a ? e.width : e.height) / n;
      return t -= a ? e.left : e.top, i && (t -= o / 2), (t <= 0 ? 0 : Math.round(t / o)) + e.minIndex;
    },
    getBasePixel: function () {
      return this.bottom;
    }
  }),
      pi = {
    position: "bottom"
  };
  gi._defaults = pi;
  var mi = ut.noop,
      vi = ut.isNullOrUndef;
  var bi = fi.extend({
    getRightValue: function (t) {
      return "string" == typeof t ? +t : fi.prototype.getRightValue.call(this, t);
    },
    handleTickRangeOptions: function () {
      var t = this,
          e = t.options.ticks;

      if (e.beginAtZero) {
        var i = ut.sign(t.min),
            n = ut.sign(t.max);
        i < 0 && n < 0 ? t.max = 0 : i > 0 && n > 0 && (t.min = 0);
      }

      var a = void 0 !== e.min || void 0 !== e.suggestedMin,
          o = void 0 !== e.max || void 0 !== e.suggestedMax;
      void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), a !== o && t.min >= t.max && (a ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--);
    },
    getTickLimit: function () {
      var t,
          e = this.options.ticks,
          i = e.stepSize,
          n = e.maxTicksLimit;
      return i ? t = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1 : (t = this._computeTickLimit(), n = n || 11), n && (t = Math.min(n, t)), t;
    },
    _computeTickLimit: function () {
      return Number.POSITIVE_INFINITY;
    },
    handleDirectionalChanges: mi,
    buildTicks: function () {
      var t = this,
          e = t.options.ticks,
          i = t.getTickLimit(),
          n = {
        maxTicks: i = Math.max(2, i),
        min: e.min,
        max: e.max,
        precision: e.precision,
        stepSize: ut.valueOrDefault(e.fixedStepSize, e.stepSize)
      },
          a = t.ticks = function (t, e) {
        var i,
            n,
            a,
            o,
            r = [],
            s = t.stepSize,
            l = s || 1,
            d = t.maxTicks - 1,
            u = t.min,
            h = t.max,
            c = t.precision,
            f = e.min,
            g = e.max,
            p = ut.niceNum((g - f) / d / l) * l;
        if (p < 1e-14 && vi(u) && vi(h)) return [f, g];
        (o = Math.ceil(g / p) - Math.floor(f / p)) > d && (p = ut.niceNum(o * p / d / l) * l), s || vi(c) ? i = Math.pow(10, ut._decimalPlaces(p)) : (i = Math.pow(10, c), p = Math.ceil(p * i) / i), n = Math.floor(f / p) * p, a = Math.ceil(g / p) * p, s && (!vi(u) && ut.almostWhole(u / p, p / 1e3) && (n = u), !vi(h) && ut.almostWhole(h / p, p / 1e3) && (a = h)), o = (a - n) / p, o = ut.almostEquals(o, Math.round(o), p / 1e3) ? Math.round(o) : Math.ceil(o), n = Math.round(n * i) / i, a = Math.round(a * i) / i, r.push(vi(u) ? n : u);

        for (var m = 1; m < o; ++m) r.push(Math.round((n + m * p) * i) / i);

        return r.push(vi(h) ? a : h), r;
      }(n, t);

      t.handleDirectionalChanges(), t.max = ut.max(a), t.min = ut.min(a), e.reverse ? (a.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max);
    },
    convertTicksToLabels: function () {
      var t = this;
      t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), fi.prototype.convertTicksToLabels.call(t);
    }
  }),
      xi = {
    position: "left",
    ticks: {
      callback: li.formatters.linear
    }
  },
      yi = bi.extend({
    determineDataLimits: function () {
      var t = this,
          e = t.options,
          i = t.chart,
          n = i.data.datasets,
          a = t.isHorizontal();

      function o(e) {
        return a ? e.xAxisID === t.id : e.yAxisID === t.id;
      }

      t.min = null, t.max = null;
      var r = e.stacked;

      if (void 0 === r && ut.each(n, function (t, e) {
        if (!r) {
          var n = i.getDatasetMeta(e);
          i.isDatasetVisible(e) && o(n) && void 0 !== n.stack && (r = !0);
        }
      }), e.stacked || r) {
        var s = {};
        ut.each(n, function (n, a) {
          var r = i.getDatasetMeta(a),
              l = [r.type, void 0 === e.stacked && void 0 === r.stack ? a : "", r.stack].join(".");
          void 0 === s[l] && (s[l] = {
            positiveValues: [],
            negativeValues: []
          });
          var d = s[l].positiveValues,
              u = s[l].negativeValues;
          i.isDatasetVisible(a) && o(r) && ut.each(n.data, function (i, n) {
            var a = +t.getRightValue(i);
            isNaN(a) || r.data[n].hidden || (d[n] = d[n] || 0, u[n] = u[n] || 0, e.relativePoints ? d[n] = 100 : a < 0 ? u[n] += a : d[n] += a);
          });
        }), ut.each(s, function (e) {
          var i = e.positiveValues.concat(e.negativeValues),
              n = ut.min(i),
              a = ut.max(i);
          t.min = null === t.min ? n : Math.min(t.min, n), t.max = null === t.max ? a : Math.max(t.max, a);
        });
      } else ut.each(n, function (e, n) {
        var a = i.getDatasetMeta(n);
        i.isDatasetVisible(n) && o(a) && ut.each(e.data, function (e, i) {
          var n = +t.getRightValue(e);
          isNaN(n) || a.data[i].hidden || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n));
        });
      });

      t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0, t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1, this.handleTickRangeOptions();
    },
    _computeTickLimit: function () {
      var t;
      return this.isHorizontal() ? Math.ceil(this.width / 40) : (t = ut.options._parseFont(this.options.ticks), Math.ceil(this.height / t.lineHeight));
    },
    handleDirectionalChanges: function () {
      this.isHorizontal() || this.ticks.reverse();
    },
    getLabelForIndex: function (t, e) {
      return +this.getRightValue(this.chart.data.datasets[e].data[t]);
    },
    getPixelForValue: function (t) {
      var e = this,
          i = e.start,
          n = +e.getRightValue(t),
          a = e.end - i;
      return e.isHorizontal() ? e.left + e.width / a * (n - i) : e.bottom - e.height / a * (n - i);
    },
    getValueForPixel: function (t) {
      var e = this,
          i = e.isHorizontal(),
          n = i ? e.width : e.height,
          a = (i ? t - e.left : e.bottom - t) / n;
      return e.start + (e.end - e.start) * a;
    },
    getPixelForTick: function (t) {
      return this.getPixelForValue(this.ticksAsNumbers[t]);
    }
  }),
      ki = xi;
  yi._defaults = ki;
  var wi = ut.valueOrDefault;
  var Mi = {
    position: "left",
    ticks: {
      callback: li.formatters.logarithmic
    }
  };

  function _i(t, e) {
    return ut.isFinite(t) && t >= 0 ? t : e;
  }

  var Ci = fi.extend({
    determineDataLimits: function () {
      var t = this,
          e = t.options,
          i = t.chart,
          n = i.data.datasets,
          a = t.isHorizontal();

      function o(e) {
        return a ? e.xAxisID === t.id : e.yAxisID === t.id;
      }

      t.min = null, t.max = null, t.minNotZero = null;
      var r = e.stacked;

      if (void 0 === r && ut.each(n, function (t, e) {
        if (!r) {
          var n = i.getDatasetMeta(e);
          i.isDatasetVisible(e) && o(n) && void 0 !== n.stack && (r = !0);
        }
      }), e.stacked || r) {
        var s = {};
        ut.each(n, function (n, a) {
          var r = i.getDatasetMeta(a),
              l = [r.type, void 0 === e.stacked && void 0 === r.stack ? a : "", r.stack].join(".");
          i.isDatasetVisible(a) && o(r) && (void 0 === s[l] && (s[l] = []), ut.each(n.data, function (e, i) {
            var n = s[l],
                a = +t.getRightValue(e);
            isNaN(a) || r.data[i].hidden || a < 0 || (n[i] = n[i] || 0, n[i] += a);
          }));
        }), ut.each(s, function (e) {
          if (e.length > 0) {
            var i = ut.min(e),
                n = ut.max(e);
            t.min = null === t.min ? i : Math.min(t.min, i), t.max = null === t.max ? n : Math.max(t.max, n);
          }
        });
      } else ut.each(n, function (e, n) {
        var a = i.getDatasetMeta(n);
        i.isDatasetVisible(n) && o(a) && ut.each(e.data, function (e, i) {
          var n = +t.getRightValue(e);
          isNaN(n) || a.data[i].hidden || n < 0 || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n), 0 !== n && (null === t.minNotZero || n < t.minNotZero) && (t.minNotZero = n));
        });
      });

      this.handleTickRangeOptions();
    },
    handleTickRangeOptions: function () {
      var t = this,
          e = t.options.ticks;
      t.min = _i(e.min, t.min), t.max = _i(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(ut.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(ut.log10(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(ut.log10(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(ut.log10(t.min)) + 1) : 10), null === t.minNotZero && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(ut.log10(t.max))) : t.minNotZero = 1);
    },
    buildTicks: function () {
      var t = this,
          e = t.options.ticks,
          i = !t.isHorizontal(),
          n = {
        min: _i(e.min),
        max: _i(e.max)
      },
          a = t.ticks = function (t, e) {
        var i,
            n,
            a = [],
            o = wi(t.min, Math.pow(10, Math.floor(ut.log10(e.min)))),
            r = Math.floor(ut.log10(e.max)),
            s = Math.ceil(e.max / Math.pow(10, r));
        0 === o ? (i = Math.floor(ut.log10(e.minNotZero)), n = Math.floor(e.minNotZero / Math.pow(10, i)), a.push(o), o = n * Math.pow(10, i)) : (i = Math.floor(ut.log10(o)), n = Math.floor(o / Math.pow(10, i)));
        var l = i < 0 ? Math.pow(10, Math.abs(i)) : 1;

        do {
          a.push(o), 10 == ++n && (n = 1, l = ++i >= 0 ? 1 : l), o = Math.round(n * Math.pow(10, i) * l) / l;
        } while (i < r || i === r && n < s);

        var d = wi(t.max, o);
        return a.push(d), a;
      }(n, t);

      t.max = ut.max(a), t.min = ut.min(a), e.reverse ? (i = !i, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), i && a.reverse();
    },
    convertTicksToLabels: function () {
      this.tickValues = this.ticks.slice(), fi.prototype.convertTicksToLabels.call(this);
    },
    getLabelForIndex: function (t, e) {
      return +this.getRightValue(this.chart.data.datasets[e].data[t]);
    },
    getPixelForTick: function (t) {
      return this.getPixelForValue(this.tickValues[t]);
    },
    _getFirstTickValue: function (t) {
      var e = Math.floor(ut.log10(t));
      return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e);
    },
    getPixelForValue: function (t) {
      var e,
          i,
          n,
          a,
          o,
          r = this,
          s = r.options.ticks,
          l = s.reverse,
          d = ut.log10,
          u = r._getFirstTickValue(r.minNotZero),
          h = 0;

      return t = +r.getRightValue(t), l ? (n = r.end, a = r.start, o = -1) : (n = r.start, a = r.end, o = 1), r.isHorizontal() ? (e = r.width, i = l ? r.right : r.left) : (e = r.height, o *= -1, i = l ? r.top : r.bottom), t !== n && (0 === n && (e -= h = wi(s.fontSize, st.global.defaultFontSize), n = u), 0 !== t && (h += e / (d(a) - d(n)) * (d(t) - d(n))), i += o * h), i;
    },
    getValueForPixel: function (t) {
      var e,
          i,
          n,
          a,
          o = this,
          r = o.options.ticks,
          s = r.reverse,
          l = ut.log10,
          d = o._getFirstTickValue(o.minNotZero);

      if (s ? (i = o.end, n = o.start) : (i = o.start, n = o.end), o.isHorizontal() ? (e = o.width, a = s ? o.right - t : t - o.left) : (e = o.height, a = s ? t - o.top : o.bottom - t), a !== i) {
        if (0 === i) {
          var u = wi(r.fontSize, st.global.defaultFontSize);
          a -= u, e -= u, i = d;
        }

        a *= l(n) - l(i), a /= e, a = Math.pow(10, l(i) + a);
      }

      return a;
    }
  }),
      Si = Mi;
  Ci._defaults = Si;
  var Pi = ut.valueOrDefault,
      Ii = ut.valueAtIndexOrDefault,
      Ai = ut.options.resolve,
      Di = {
    display: !0,
    animate: !0,
    position: "chartArea",
    angleLines: {
      display: !0,
      color: "rgba(0, 0, 0, 0.1)",
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0
    },
    gridLines: {
      circular: !1
    },
    ticks: {
      showLabelBackdrop: !0,
      backdropColor: "rgba(255,255,255,0.75)",
      backdropPaddingY: 2,
      backdropPaddingX: 2,
      callback: li.formatters.linear
    },
    pointLabels: {
      display: !0,
      fontSize: 10,
      callback: function (t) {
        return t;
      }
    }
  };

  function Ti(t) {
    var e = t.options;
    return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0;
  }

  function Fi(t) {
    var e = t.ticks;
    return e.display && t.display ? Pi(e.fontSize, st.global.defaultFontSize) + 2 * e.backdropPaddingY : 0;
  }

  function Li(t, e, i, n, a) {
    return t === n || t === a ? {
      start: e - i / 2,
      end: e + i / 2
    } : t < n || t > a ? {
      start: e - i,
      end: e
    } : {
      start: e,
      end: e + i
    };
  }

  function Ri(t) {
    return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
  }

  function Oi(t, e, i, n) {
    var a,
        o,
        r = i.y + n / 2;
    if (ut.isArray(e)) for (a = 0, o = e.length; a < o; ++a) t.fillText(e[a], i.x, r), r += n;else t.fillText(e, i.x, r);
  }

  function zi(t, e, i) {
    90 === t || 270 === t ? i.y -= e.h / 2 : (t > 270 || t < 90) && (i.y -= e.h);
  }

  function Bi(t) {
    return ut.isNumber(t) ? t : 0;
  }

  var Ni = bi.extend({
    setDimensions: function () {
      var t = this;
      t.width = t.maxWidth, t.height = t.maxHeight, t.paddingTop = Fi(t.options) / 2, t.xCenter = Math.floor(t.width / 2), t.yCenter = Math.floor((t.height - t.paddingTop) / 2), t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2;
    },
    determineDataLimits: function () {
      var t = this,
          e = t.chart,
          i = Number.POSITIVE_INFINITY,
          n = Number.NEGATIVE_INFINITY;
      ut.each(e.data.datasets, function (a, o) {
        if (e.isDatasetVisible(o)) {
          var r = e.getDatasetMeta(o);
          ut.each(a.data, function (e, a) {
            var o = +t.getRightValue(e);
            isNaN(o) || r.data[a].hidden || (i = Math.min(o, i), n = Math.max(o, n));
          });
        }
      }), t.min = i === Number.POSITIVE_INFINITY ? 0 : i, t.max = n === Number.NEGATIVE_INFINITY ? 0 : n, t.handleTickRangeOptions();
    },
    _computeTickLimit: function () {
      return Math.ceil(this.drawingArea / Fi(this.options));
    },
    convertTicksToLabels: function () {
      var t = this;
      bi.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map(t.options.pointLabels.callback, t);
    },
    getLabelForIndex: function (t, e) {
      return +this.getRightValue(this.chart.data.datasets[e].data[t]);
    },
    fit: function () {
      var t = this.options;
      t.display && t.pointLabels.display ? function (t) {
        var e,
            i,
            n,
            a = ut.options._parseFont(t.options.pointLabels),
            o = {
          l: 0,
          r: t.width,
          t: 0,
          b: t.height - t.paddingTop
        },
            r = {};

        t.ctx.font = a.string, t._pointLabelSizes = [];
        var s,
            l,
            d,
            u = Ti(t);

        for (e = 0; e < u; e++) {
          n = t.getPointPosition(e, t.drawingArea + 5), s = t.ctx, l = a.lineHeight, d = t.pointLabels[e] || "", i = ut.isArray(d) ? {
            w: ut.longestText(s, s.font, d),
            h: d.length * l
          } : {
            w: s.measureText(d).width,
            h: l
          }, t._pointLabelSizes[e] = i;
          var h = t.getIndexAngle(e),
              c = ut.toDegrees(h) % 360,
              f = Li(c, n.x, i.w, 0, 180),
              g = Li(c, n.y, i.h, 90, 270);
          f.start < o.l && (o.l = f.start, r.l = h), f.end > o.r && (o.r = f.end, r.r = h), g.start < o.t && (o.t = g.start, r.t = h), g.end > o.b && (o.b = g.end, r.b = h);
        }

        t.setReductions(t.drawingArea, o, r);
      }(this) : this.setCenterPoint(0, 0, 0, 0);
    },
    setReductions: function (t, e, i) {
      var n = this,
          a = e.l / Math.sin(i.l),
          o = Math.max(e.r - n.width, 0) / Math.sin(i.r),
          r = -e.t / Math.cos(i.t),
          s = -Math.max(e.b - (n.height - n.paddingTop), 0) / Math.cos(i.b);
      a = Bi(a), o = Bi(o), r = Bi(r), s = Bi(s), n.drawingArea = Math.min(Math.floor(t - (a + o) / 2), Math.floor(t - (r + s) / 2)), n.setCenterPoint(a, o, r, s);
    },
    setCenterPoint: function (t, e, i, n) {
      var a = this,
          o = a.width - e - a.drawingArea,
          r = t + a.drawingArea,
          s = i + a.drawingArea,
          l = a.height - a.paddingTop - n - a.drawingArea;
      a.xCenter = Math.floor((r + o) / 2 + a.left), a.yCenter = Math.floor((s + l) / 2 + a.top + a.paddingTop);
    },
    getIndexAngle: function (t) {
      return t * (2 * Math.PI / Ti(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360;
    },
    getDistanceFromCenterForValue: function (t) {
      var e = this;
      if (null === t) return 0;
      var i = e.drawingArea / (e.max - e.min);
      return e.options.ticks.reverse ? (e.max - t) * i : (t - e.min) * i;
    },
    getPointPosition: function (t, e) {
      var i = this.getIndexAngle(t) - Math.PI / 2;
      return {
        x: Math.cos(i) * e + this.xCenter,
        y: Math.sin(i) * e + this.yCenter
      };
    },
    getPointPositionForValue: function (t, e) {
      return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
    },
    getBasePosition: function () {
      var t = this.min,
          e = this.max;
      return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0);
    },
    draw: function () {
      var t = this,
          e = t.options,
          i = e.gridLines,
          n = e.ticks;

      if (e.display) {
        var a = t.ctx,
            o = this.getIndexAngle(0),
            r = ut.options._parseFont(n);

        (e.angleLines.display || e.pointLabels.display) && function (t) {
          var e = t.ctx,
              i = t.options,
              n = i.angleLines,
              a = i.gridLines,
              o = i.pointLabels,
              r = Pi(n.lineWidth, a.lineWidth),
              s = Pi(n.color, a.color),
              l = Fi(i);
          e.save(), e.lineWidth = r, e.strokeStyle = s, e.setLineDash && (e.setLineDash(Ai([n.borderDash, a.borderDash, []])), e.lineDashOffset = Ai([n.borderDashOffset, a.borderDashOffset, 0]));

          var d = t.getDistanceFromCenterForValue(i.ticks.reverse ? t.min : t.max),
              u = ut.options._parseFont(o);

          e.font = u.string, e.textBaseline = "middle";

          for (var h = Ti(t) - 1; h >= 0; h--) {
            if (n.display && r && s) {
              var c = t.getPointPosition(h, d);
              e.beginPath(), e.moveTo(t.xCenter, t.yCenter), e.lineTo(c.x, c.y), e.stroke();
            }

            if (o.display) {
              var f = 0 === h ? l / 2 : 0,
                  g = t.getPointPosition(h, d + f + 5),
                  p = Ii(o.fontColor, h, st.global.defaultFontColor);
              e.fillStyle = p;
              var m = t.getIndexAngle(h),
                  v = ut.toDegrees(m);
              e.textAlign = Ri(v), zi(v, t._pointLabelSizes[h], g), Oi(e, t.pointLabels[h] || "", g, u.lineHeight);
            }
          }

          e.restore();
        }(t), ut.each(t.ticks, function (e, s) {
          if (s > 0 || n.reverse) {
            var l = t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]);

            if (i.display && 0 !== s && function (t, e, i, n) {
              var a,
                  o = t.ctx,
                  r = e.circular,
                  s = Ti(t),
                  l = Ii(e.color, n - 1),
                  d = Ii(e.lineWidth, n - 1);

              if ((r || s) && l && d) {
                if (o.save(), o.strokeStyle = l, o.lineWidth = d, o.setLineDash && (o.setLineDash(e.borderDash || []), o.lineDashOffset = e.borderDashOffset || 0), o.beginPath(), r) o.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI);else {
                  a = t.getPointPosition(0, i), o.moveTo(a.x, a.y);

                  for (var u = 1; u < s; u++) a = t.getPointPosition(u, i), o.lineTo(a.x, a.y);
                }
                o.closePath(), o.stroke(), o.restore();
              }
            }(t, i, l, s), n.display) {
              var d = Pi(n.fontColor, st.global.defaultFontColor);

              if (a.font = r.string, a.save(), a.translate(t.xCenter, t.yCenter), a.rotate(o), n.showLabelBackdrop) {
                var u = a.measureText(e).width;
                a.fillStyle = n.backdropColor, a.fillRect(-u / 2 - n.backdropPaddingX, -l - r.size / 2 - n.backdropPaddingY, u + 2 * n.backdropPaddingX, r.size + 2 * n.backdropPaddingY);
              }

              a.textAlign = "center", a.textBaseline = "middle", a.fillStyle = d, a.fillText(e, 0, -l), a.restore();
            }
          }
        });
      }
    }
  }),
      Wi = Di;
  Ni._defaults = Wi;
  var Vi = ut.valueOrDefault,
      Ei = Number.MIN_SAFE_INTEGER || -9007199254740991,
      Hi = Number.MAX_SAFE_INTEGER || 9007199254740991,
      ji = {
    millisecond: {
      common: !0,
      size: 1,
      steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
    },
    second: {
      common: !0,
      size: 1e3,
      steps: [1, 2, 5, 10, 15, 30]
    },
    minute: {
      common: !0,
      size: 6e4,
      steps: [1, 2, 5, 10, 15, 30]
    },
    hour: {
      common: !0,
      size: 36e5,
      steps: [1, 2, 3, 6, 12]
    },
    day: {
      common: !0,
      size: 864e5,
      steps: [1, 2, 5]
    },
    week: {
      common: !1,
      size: 6048e5,
      steps: [1, 2, 3, 4]
    },
    month: {
      common: !0,
      size: 2628e6,
      steps: [1, 2, 3]
    },
    quarter: {
      common: !1,
      size: 7884e6,
      steps: [1, 2, 3, 4]
    },
    year: {
      common: !0,
      size: 3154e7
    }
  },
      qi = Object.keys(ji);

  function Yi(t, e) {
    return t - e;
  }

  function Ui(t) {
    var e,
        i,
        n,
        a = {},
        o = [];

    for (e = 0, i = t.length; e < i; ++e) a[n = t[e]] || (a[n] = !0, o.push(n));

    return o;
  }

  function Xi(t, e, i, n) {
    var a = function (t, e, i) {
      for (var n, a, o, r = 0, s = t.length - 1; r >= 0 && r <= s;) {
        if (a = t[(n = r + s >> 1) - 1] || null, o = t[n], !a) return {
          lo: null,
          hi: o
        };
        if (o[e] < i) r = n + 1;else {
          if (!(a[e] > i)) return {
            lo: a,
            hi: o
          };
          s = n - 1;
        }
      }

      return {
        lo: o,
        hi: null
      };
    }(t, e, i),
        o = a.lo ? a.hi ? a.lo : t[t.length - 2] : t[0],
        r = a.lo ? a.hi ? a.hi : t[t.length - 1] : t[1],
        s = r[e] - o[e],
        l = s ? (i - o[e]) / s : 0,
        d = (r[n] - o[n]) * l;

    return o[n] + d;
  }

  function Ki(t, e) {
    var i = t._adapter,
        n = t.options.time,
        a = n.parser,
        o = a || n.format,
        r = e;
    return "function" == typeof a && (r = a(r)), ut.isFinite(r) || (r = "string" == typeof o ? i.parse(r, o) : i.parse(r)), null !== r ? +r : (a || "function" != typeof o || (r = o(e), ut.isFinite(r) || (r = i.parse(r))), r);
  }

  function Gi(t, e) {
    if (ut.isNullOrUndef(e)) return null;
    var i = t.options.time,
        n = Ki(t, t.getRightValue(e));
    return null === n ? n : (i.round && (n = +t._adapter.startOf(n, i.round)), n);
  }

  function Zi(t) {
    for (var e = qi.indexOf(t) + 1, i = qi.length; e < i; ++e) if (ji[qi[e]].common) return qi[e];
  }

  function $i(t, e, i, n) {
    var a,
        o = t._adapter,
        r = t.options,
        s = r.time,
        l = s.unit || function (t, e, i, n) {
      var a,
          o,
          r,
          s = qi.length;

      for (a = qi.indexOf(t); a < s - 1; ++a) if (r = (o = ji[qi[a]]).steps ? o.steps[o.steps.length - 1] : Hi, o.common && Math.ceil((i - e) / (r * o.size)) <= n) return qi[a];

      return qi[s - 1];
    }(s.minUnit, e, i, n),
        d = Zi(l),
        u = Vi(s.stepSize, s.unitStepSize),
        h = "week" === l && s.isoWeekday,
        c = r.ticks.major.enabled,
        f = ji[l],
        g = e,
        p = i,
        m = [];

    for (u || (u = function (t, e, i, n) {
      var a,
          o,
          r,
          s = e - t,
          l = ji[i],
          d = l.size,
          u = l.steps;
      if (!u) return Math.ceil(s / (n * d));

      for (a = 0, o = u.length; a < o && (r = u[a], !(Math.ceil(s / (d * r)) <= n)); ++a);

      return r;
    }(e, i, l, n)), h && (g = +o.startOf(g, "isoWeek", h), p = +o.startOf(p, "isoWeek", h)), g = +o.startOf(g, h ? "day" : l), (p = +o.startOf(p, h ? "day" : l)) < i && (p = +o.add(p, 1, l)), a = g, c && d && !h && !s.round && (a = +o.startOf(a, d), a = +o.add(a, ~~((g - a) / (f.size * u)) * u, l)); a < p; a = +o.add(a, u, l)) m.push(+a);

    return m.push(+a), m;
  }

  var Ji = fi.extend({
    initialize: function () {
      this.mergeTicksOptions(), fi.prototype.initialize.call(this);
    },
    update: function () {
      var t = this.options,
          e = t.time || (t.time = {}),
          i = this._adapter = new si._date(t.adapters.date);
      return e.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), ut.mergeIf(e.displayFormats, i.formats()), fi.prototype.update.apply(this, arguments);
    },
    getRightValue: function (t) {
      return t && void 0 !== t.t && (t = t.t), fi.prototype.getRightValue.call(this, t);
    },
    determineDataLimits: function () {
      var t,
          e,
          i,
          n,
          a,
          o,
          r = this,
          s = r.chart,
          l = r._adapter,
          d = r.options.time,
          u = d.unit || "day",
          h = Hi,
          c = Ei,
          f = [],
          g = [],
          p = [],
          m = s.data.labels || [];

      for (t = 0, i = m.length; t < i; ++t) p.push(Gi(r, m[t]));

      for (t = 0, i = (s.data.datasets || []).length; t < i; ++t) if (s.isDatasetVisible(t)) {
        if (a = s.data.datasets[t].data, ut.isObject(a[0])) for (g[t] = [], e = 0, n = a.length; e < n; ++e) o = Gi(r, a[e]), f.push(o), g[t][e] = o;else {
          for (e = 0, n = p.length; e < n; ++e) f.push(p[e]);

          g[t] = p.slice(0);
        }
      } else g[t] = [];

      p.length && (p = Ui(p).sort(Yi), h = Math.min(h, p[0]), c = Math.max(c, p[p.length - 1])), f.length && (f = Ui(f).sort(Yi), h = Math.min(h, f[0]), c = Math.max(c, f[f.length - 1])), h = Gi(r, d.min) || h, c = Gi(r, d.max) || c, h = h === Hi ? +l.startOf(Date.now(), u) : h, c = c === Ei ? +l.endOf(Date.now(), u) + 1 : c, r.min = Math.min(h, c), r.max = Math.max(h + 1, c), r._horizontal = r.isHorizontal(), r._table = [], r._timestamps = {
        data: f,
        datasets: g,
        labels: p
      };
    },
    buildTicks: function () {
      var t,
          e,
          i,
          n = this,
          a = n.min,
          o = n.max,
          r = n.options,
          s = r.time,
          l = [],
          d = [];

      switch (r.ticks.source) {
        case "data":
          l = n._timestamps.data;
          break;

        case "labels":
          l = n._timestamps.labels;
          break;

        case "auto":
        default:
          l = $i(n, a, o, n.getLabelCapacity(a));
      }

      for ("ticks" === r.bounds && l.length && (a = l[0], o = l[l.length - 1]), a = Gi(n, s.min) || a, o = Gi(n, s.max) || o, t = 0, e = l.length; t < e; ++t) (i = l[t]) >= a && i <= o && d.push(i);

      return n.min = a, n.max = o, n._unit = s.unit || function (t, e, i, n, a) {
        var o, r;

        for (o = qi.length - 1; o >= qi.indexOf(i); o--) if (r = qi[o], ji[r].common && t._adapter.diff(a, n, r) >= e.length) return r;

        return qi[i ? qi.indexOf(i) : 0];
      }(n, d, s.minUnit, n.min, n.max), n._majorUnit = Zi(n._unit), n._table = function (t, e, i, n) {
        if ("linear" === n || !t.length) return [{
          time: e,
          pos: 0
        }, {
          time: i,
          pos: 1
        }];
        var a,
            o,
            r,
            s,
            l,
            d = [],
            u = [e];

        for (a = 0, o = t.length; a < o; ++a) (s = t[a]) > e && s < i && u.push(s);

        for (u.push(i), a = 0, o = u.length; a < o; ++a) l = u[a + 1], r = u[a - 1], s = u[a], void 0 !== r && void 0 !== l && Math.round((l + r) / 2) === s || d.push({
          time: s,
          pos: a / (o - 1)
        });

        return d;
      }(n._timestamps.data, a, o, r.distribution), n._offsets = function (t, e, i, n, a) {
        var o,
            r,
            s = 0,
            l = 0;
        return a.offset && e.length && (a.time.min || (o = Xi(t, "time", e[0], "pos"), s = 1 === e.length ? 1 - o : (Xi(t, "time", e[1], "pos") - o) / 2), a.time.max || (r = Xi(t, "time", e[e.length - 1], "pos"), l = 1 === e.length ? r : (r - Xi(t, "time", e[e.length - 2], "pos")) / 2)), {
          start: s,
          end: l
        };
      }(n._table, d, 0, 0, r), r.ticks.reverse && d.reverse(), function (t, e, i) {
        var n,
            a,
            o,
            r,
            s = [];

        for (n = 0, a = e.length; n < a; ++n) o = e[n], r = !!i && o === +t._adapter.startOf(o, i), s.push({
          value: o,
          major: r
        });

        return s;
      }(n, d, n._majorUnit);
    },
    getLabelForIndex: function (t, e) {
      var i = this,
          n = i._adapter,
          a = i.chart.data,
          o = i.options.time,
          r = a.labels && t < a.labels.length ? a.labels[t] : "",
          s = a.datasets[e].data[t];
      return ut.isObject(s) && (r = i.getRightValue(s)), o.tooltipFormat ? n.format(Ki(i, r), o.tooltipFormat) : "string" == typeof r ? r : n.format(Ki(i, r), o.displayFormats.datetime);
    },
    tickFormatFunction: function (t, e, i, n) {
      var a = this._adapter,
          o = this.options,
          r = o.time.displayFormats,
          s = r[this._unit],
          l = this._majorUnit,
          d = r[l],
          u = +a.startOf(t, l),
          h = o.ticks.major,
          c = h.enabled && l && d && t === u,
          f = a.format(t, n || (c ? d : s)),
          g = c ? h : o.ticks.minor,
          p = Vi(g.callback, g.userCallback);
      return p ? p(f, e, i) : f;
    },
    convertTicksToLabels: function (t) {
      var e,
          i,
          n = [];

      for (e = 0, i = t.length; e < i; ++e) n.push(this.tickFormatFunction(t[e].value, e, t));

      return n;
    },
    getPixelForOffset: function (t) {
      var e = this,
          i = e.options.ticks.reverse,
          n = e._horizontal ? e.width : e.height,
          a = e._horizontal ? i ? e.right : e.left : i ? e.bottom : e.top,
          o = Xi(e._table, "time", t, "pos"),
          r = n * (e._offsets.start + o) / (e._offsets.start + 1 + e._offsets.end);
      return i ? a - r : a + r;
    },
    getPixelForValue: function (t, e, i) {
      var n = null;
      if (void 0 !== e && void 0 !== i && (n = this._timestamps.datasets[i][e]), null === n && (n = Gi(this, t)), null !== n) return this.getPixelForOffset(n);
    },
    getPixelForTick: function (t) {
      var e = this.getTicks();
      return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null;
    },
    getValueForPixel: function (t) {
      var e = this,
          i = e._horizontal ? e.width : e.height,
          n = e._horizontal ? e.left : e.top,
          a = (i ? (t - n) / i : 0) * (e._offsets.start + 1 + e._offsets.start) - e._offsets.end,
          o = Xi(e._table, "pos", a, "time");
      return e._adapter._create(o);
    },
    getLabelWidth: function (t) {
      var e = this.options.ticks,
          i = this.ctx.measureText(t).width,
          n = ut.toRadians(e.maxRotation),
          a = Math.cos(n),
          o = Math.sin(n);
      return i * a + Vi(e.fontSize, st.global.defaultFontSize) * o;
    },
    getLabelCapacity: function (t) {
      var e = this,
          i = e.options.time.displayFormats.millisecond,
          n = e.tickFormatFunction(t, 0, [], i),
          a = e.getLabelWidth(n),
          o = e.isHorizontal() ? e.width : e.height,
          r = Math.floor(o / a);
      return r > 0 ? r : 1;
    }
  }),
      Qi = {
    position: "bottom",
    distribution: "linear",
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      format: !1,
      unit: !1,
      round: !1,
      displayFormat: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {}
    },
    ticks: {
      autoSkip: !1,
      source: "auto",
      major: {
        enabled: !1
      }
    }
  };
  Ji._defaults = Qi;
  var tn = {
    category: gi,
    linear: yi,
    logarithmic: Ci,
    radialLinear: Ni,
    time: Ji
  },
      en = {
    datetime: "MMM D, YYYY, h:mm:ss a",
    millisecond: "h:mm:ss.SSS a",
    second: "h:mm:ss a",
    minute: "h:mm a",
    hour: "hA",
    day: "MMM D",
    week: "ll",
    month: "MMM YYYY",
    quarter: "[Q]Q - YYYY",
    year: "YYYY"
  };
  si._date.override("function" == typeof t ? {
    _id: "moment",
    formats: function () {
      return en;
    },
    parse: function (e, i) {
      return "string" == typeof e && "string" == typeof i ? e = t(e, i) : e instanceof t || (e = t(e)), e.isValid() ? e.valueOf() : null;
    },
    format: function (e, i) {
      return t(e).format(i);
    },
    add: function (e, i, n) {
      return t(e).add(i, n).valueOf();
    },
    diff: function (e, i, n) {
      return t.duration(t(e).diff(t(i))).as(n);
    },
    startOf: function (e, i, n) {
      return e = t(e), "isoWeek" === i ? e.isoWeekday(n).valueOf() : e.startOf(i).valueOf();
    },
    endOf: function (e, i) {
      return t(e).endOf(i).valueOf();
    },
    _create: function (e) {
      return t(e);
    }
  } : {}), st._set("global", {
    plugins: {
      filler: {
        propagate: !0
      }
    }
  });
  var nn = {
    dataset: function (t) {
      var e = t.fill,
          i = t.chart,
          n = i.getDatasetMeta(e),
          a = n && i.isDatasetVisible(e) && n.dataset._children || [],
          o = a.length || 0;
      return o ? function (t, e) {
        return e < o && a[e]._view || null;
      } : null;
    },
    boundary: function (t) {
      var e = t.boundary,
          i = e ? e.x : null,
          n = e ? e.y : null;
      return function (t) {
        return {
          x: null === i ? t.x : i,
          y: null === n ? t.y : n
        };
      };
    }
  };

  function an(t, e, i) {
    var n,
        a = t._model || {},
        o = a.fill;
    if (void 0 === o && (o = !!a.backgroundColor), !1 === o || null === o) return !1;
    if (!0 === o) return "origin";
    if (n = parseFloat(o, 10), isFinite(n) && Math.floor(n) === n) return "-" !== o[0] && "+" !== o[0] || (n = e + n), !(n === e || n < 0 || n >= i) && n;

    switch (o) {
      case "bottom":
        return "start";

      case "top":
        return "end";

      case "zero":
        return "origin";

      case "origin":
      case "start":
      case "end":
        return o;

      default:
        return !1;
    }
  }

  function on(t) {
    var e,
        i = t.el._model || {},
        n = t.el._scale || {},
        a = t.fill,
        o = null;
    if (isFinite(a)) return null;

    if ("start" === a ? o = void 0 === i.scaleBottom ? n.bottom : i.scaleBottom : "end" === a ? o = void 0 === i.scaleTop ? n.top : i.scaleTop : void 0 !== i.scaleZero ? o = i.scaleZero : n.getBasePosition ? o = n.getBasePosition() : n.getBasePixel && (o = n.getBasePixel()), null != o) {
      if (void 0 !== o.x && void 0 !== o.y) return o;
      if (ut.isFinite(o)) return {
        x: (e = n.isHorizontal()) ? o : null,
        y: e ? null : o
      };
    }

    return null;
  }

  function rn(t, e, i) {
    var n,
        a = t[e].fill,
        o = [e];
    if (!i) return a;

    for (; !1 !== a && -1 === o.indexOf(a);) {
      if (!isFinite(a)) return a;
      if (!(n = t[a])) return !1;
      if (n.visible) return a;
      o.push(a), a = n.fill;
    }

    return !1;
  }

  function sn(t) {
    var e = t.fill,
        i = "dataset";
    return !1 === e ? null : (isFinite(e) || (i = "boundary"), nn[i](t));
  }

  function ln(t) {
    return t && !t.skip;
  }

  function dn(t, e, i, n, a) {
    var o;

    if (n && a) {
      for (t.moveTo(e[0].x, e[0].y), o = 1; o < n; ++o) ut.canvas.lineTo(t, e[o - 1], e[o]);

      for (t.lineTo(i[a - 1].x, i[a - 1].y), o = a - 1; o > 0; --o) ut.canvas.lineTo(t, i[o], i[o - 1], !0);
    }
  }

  var un = {
    id: "filler",
    afterDatasetsUpdate: function (t, e) {
      var i,
          n,
          a,
          o,
          r = (t.data.datasets || []).length,
          s = e.propagate,
          l = [];

      for (n = 0; n < r; ++n) o = null, (a = (i = t.getDatasetMeta(n)).dataset) && a._model && a instanceof Wt.Line && (o = {
        visible: t.isDatasetVisible(n),
        fill: an(a, n, r),
        chart: t,
        el: a
      }), i.$filler = o, l.push(o);

      for (n = 0; n < r; ++n) (o = l[n]) && (o.fill = rn(l, n, s), o.boundary = on(o), o.mapper = sn(o));
    },
    beforeDatasetDraw: function (t, e) {
      var i = e.meta.$filler;

      if (i) {
        var n = t.ctx,
            a = i.el,
            o = a._view,
            r = a._children || [],
            s = i.mapper,
            l = o.backgroundColor || st.global.defaultColor;
        s && l && r.length && (ut.canvas.clipArea(n, t.chartArea), function (t, e, i, n, a, o) {
          var r,
              s,
              l,
              d,
              u,
              h,
              c,
              f = e.length,
              g = n.spanGaps,
              p = [],
              m = [],
              v = 0,
              b = 0;

          for (t.beginPath(), r = 0, s = f + !!o; r < s; ++r) u = i(d = e[l = r % f]._view, l, n), h = ln(d), c = ln(u), h && c ? (v = p.push(d), b = m.push(u)) : v && b && (g ? (h && p.push(d), c && m.push(u)) : (dn(t, p, m, v, b), v = b = 0, p = [], m = []));

          dn(t, p, m, v, b), t.closePath(), t.fillStyle = a, t.fill();
        }(n, r, s, o, l, a._loop), ut.canvas.unclipArea(n));
      }
    }
  },
      hn = ut.noop,
      cn = ut.valueOrDefault;

  function fn(t, e) {
    return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth;
  }

  st._set("global", {
    legend: {
      display: !0,
      position: "top",
      fullWidth: !0,
      reverse: !1,
      weight: 1e3,
      onClick: function (t, e) {
        var i = e.datasetIndex,
            n = this.chart,
            a = n.getDatasetMeta(i);
        a.hidden = null === a.hidden ? !n.data.datasets[i].hidden : null, n.update();
      },
      onHover: null,
      onLeave: null,
      labels: {
        boxWidth: 40,
        padding: 10,
        generateLabels: function (t) {
          var e = t.data;
          return ut.isArray(e.datasets) ? e.datasets.map(function (e, i) {
            return {
              text: e.label,
              fillStyle: ut.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
              hidden: !t.isDatasetVisible(i),
              lineCap: e.borderCapStyle,
              lineDash: e.borderDash,
              lineDashOffset: e.borderDashOffset,
              lineJoin: e.borderJoinStyle,
              lineWidth: e.borderWidth,
              strokeStyle: e.borderColor,
              pointStyle: e.pointStyle,
              datasetIndex: i
            };
          }, this) : [];
        }
      }
    },
    legendCallback: function (t) {
      var e = [];
      e.push('<ul class="' + t.id + '-legend">');

      for (var i = 0; i < t.data.datasets.length; i++) e.push('<li><span style="background-color:' + t.data.datasets[i].backgroundColor + '"></span>'), t.data.datasets[i].label && e.push(t.data.datasets[i].label), e.push("</li>");

      return e.push("</ul>"), e.join("");
    }
  });

  var gn = pt.extend({
    initialize: function (t) {
      ut.extend(this, t), this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1;
    },
    beforeUpdate: hn,
    update: function (t, e, i) {
      var n = this;
      return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize;
    },
    afterUpdate: hn,
    beforeSetDimensions: hn,
    setDimensions: function () {
      var t = this;
      t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
        width: 0,
        height: 0
      };
    },
    afterSetDimensions: hn,
    beforeBuildLabels: hn,
    buildLabels: function () {
      var t = this,
          e = t.options.labels || {},
          i = ut.callback(e.generateLabels, [t.chart], t) || [];
      e.filter && (i = i.filter(function (i) {
        return e.filter(i, t.chart.data);
      })), t.options.reverse && i.reverse(), t.legendItems = i;
    },
    afterBuildLabels: hn,
    beforeFit: hn,
    fit: function () {
      var t = this,
          e = t.options,
          i = e.labels,
          n = e.display,
          a = t.ctx,
          o = ut.options._parseFont(i),
          r = o.size,
          s = t.legendHitBoxes = [],
          l = t.minSize,
          d = t.isHorizontal();

      if (d ? (l.width = t.maxWidth, l.height = n ? 10 : 0) : (l.width = n ? 10 : 0, l.height = t.maxHeight), n) if (a.font = o.string, d) {
        var u = t.lineWidths = [0],
            h = 0;
        a.textAlign = "left", a.textBaseline = "top", ut.each(t.legendItems, function (t, e) {
          var n = fn(i, r) + r / 2 + a.measureText(t.text).width;
          (0 === e || u[u.length - 1] + n + i.padding > l.width) && (h += r + i.padding, u[u.length - (e > 0 ? 0 : 1)] = i.padding), s[e] = {
            left: 0,
            top: 0,
            width: n,
            height: r
          }, u[u.length - 1] += n + i.padding;
        }), l.height += h;
      } else {
        var c = i.padding,
            f = t.columnWidths = [],
            g = i.padding,
            p = 0,
            m = 0,
            v = r + c;
        ut.each(t.legendItems, function (t, e) {
          var n = fn(i, r) + r / 2 + a.measureText(t.text).width;
          e > 0 && m + v > l.height - c && (g += p + i.padding, f.push(p), p = 0, m = 0), p = Math.max(p, n), m += v, s[e] = {
            left: 0,
            top: 0,
            width: n,
            height: r
          };
        }), g += p, f.push(p), l.width += g;
      }
      t.width = l.width, t.height = l.height;
    },
    afterFit: hn,
    isHorizontal: function () {
      return "top" === this.options.position || "bottom" === this.options.position;
    },
    draw: function () {
      var t = this,
          e = t.options,
          i = e.labels,
          n = st.global,
          a = n.defaultColor,
          o = n.elements.line,
          r = t.width,
          s = t.lineWidths;

      if (e.display) {
        var l,
            d = t.ctx,
            u = cn(i.fontColor, n.defaultFontColor),
            h = ut.options._parseFont(i),
            c = h.size;

        d.textAlign = "left", d.textBaseline = "middle", d.lineWidth = .5, d.strokeStyle = u, d.fillStyle = u, d.font = h.string;
        var f = fn(i, c),
            g = t.legendHitBoxes,
            p = t.isHorizontal();
        l = p ? {
          x: t.left + (r - s[0]) / 2 + i.padding,
          y: t.top + i.padding,
          line: 0
        } : {
          x: t.left + i.padding,
          y: t.top + i.padding,
          line: 0
        };
        var m = c + i.padding;
        ut.each(t.legendItems, function (n, u) {
          var h = d.measureText(n.text).width,
              v = f + c / 2 + h,
              b = l.x,
              x = l.y;
          p ? u > 0 && b + v + i.padding > t.left + t.minSize.width && (x = l.y += m, l.line++, b = l.x = t.left + (r - s[l.line]) / 2 + i.padding) : u > 0 && x + m > t.top + t.minSize.height && (b = l.x = b + t.columnWidths[l.line] + i.padding, x = l.y = t.top + i.padding, l.line++), function (t, i, n) {
            if (!(isNaN(f) || f <= 0)) {
              d.save();
              var r = cn(n.lineWidth, o.borderWidth);

              if (d.fillStyle = cn(n.fillStyle, a), d.lineCap = cn(n.lineCap, o.borderCapStyle), d.lineDashOffset = cn(n.lineDashOffset, o.borderDashOffset), d.lineJoin = cn(n.lineJoin, o.borderJoinStyle), d.lineWidth = r, d.strokeStyle = cn(n.strokeStyle, a), d.setLineDash && d.setLineDash(cn(n.lineDash, o.borderDash)), e.labels && e.labels.usePointStyle) {
                var s = f * Math.SQRT2 / 2,
                    l = t + f / 2,
                    u = i + c / 2;
                ut.canvas.drawPoint(d, n.pointStyle, s, l, u);
              } else 0 !== r && d.strokeRect(t, i, f, c), d.fillRect(t, i, f, c);

              d.restore();
            }
          }(b, x, n), g[u].left = b, g[u].top = x, function (t, e, i, n) {
            var a = c / 2,
                o = f + a + t,
                r = e + a;
            d.fillText(i.text, o, r), i.hidden && (d.beginPath(), d.lineWidth = 2, d.moveTo(o, r), d.lineTo(o + n, r), d.stroke());
          }(b, x, n, h), p ? l.x += v + i.padding : l.y += m;
        });
      }
    },
    _getLegendItemAt: function (t, e) {
      var i,
          n,
          a,
          o = this;
      if (t >= o.left && t <= o.right && e >= o.top && e <= o.bottom) for (a = o.legendHitBoxes, i = 0; i < a.length; ++i) if (t >= (n = a[i]).left && t <= n.left + n.width && e >= n.top && e <= n.top + n.height) return o.legendItems[i];
      return null;
    },
    handleEvent: function (t) {
      var e,
          i = this,
          n = i.options,
          a = "mouseup" === t.type ? "click" : t.type;

      if ("mousemove" === a) {
        if (!n.onHover && !n.onLeave) return;
      } else {
        if ("click" !== a) return;
        if (!n.onClick) return;
      }

      e = i._getLegendItemAt(t.x, t.y), "click" === a ? e && n.onClick && n.onClick.call(i, t.native, e) : (n.onLeave && e !== i._hoveredItem && (i._hoveredItem && n.onLeave.call(i, t.native, i._hoveredItem), i._hoveredItem = e), n.onHover && e && n.onHover.call(i, t.native, e));
    }
  });

  function pn(t, e) {
    var i = new gn({
      ctx: t.ctx,
      options: e,
      chart: t
    });
    ke.configure(t, i, e), ke.addBox(t, i), t.legend = i;
  }

  var mn = {
    id: "legend",
    _element: gn,
    beforeInit: function (t) {
      var e = t.options.legend;
      e && pn(t, e);
    },
    beforeUpdate: function (t) {
      var e = t.options.legend,
          i = t.legend;
      e ? (ut.mergeIf(e, st.global.legend), i ? (ke.configure(t, i, e), i.options = e) : pn(t, e)) : i && (ke.removeBox(t, i), delete t.legend);
    },
    afterEvent: function (t, e) {
      var i = t.legend;
      i && i.handleEvent(e);
    }
  },
      vn = ut.noop;

  st._set("global", {
    title: {
      display: !1,
      fontStyle: "bold",
      fullWidth: !0,
      padding: 10,
      position: "top",
      text: "",
      weight: 2e3
    }
  });

  var bn = pt.extend({
    initialize: function (t) {
      ut.extend(this, t), this.legendHitBoxes = [];
    },
    beforeUpdate: vn,
    update: function (t, e, i) {
      var n = this;
      return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize;
    },
    afterUpdate: vn,
    beforeSetDimensions: vn,
    setDimensions: function () {
      var t = this;
      t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
        width: 0,
        height: 0
      };
    },
    afterSetDimensions: vn,
    beforeBuildLabels: vn,
    buildLabels: vn,
    afterBuildLabels: vn,
    beforeFit: vn,
    fit: function () {
      var t = this,
          e = t.options,
          i = e.display,
          n = t.minSize,
          a = ut.isArray(e.text) ? e.text.length : 1,
          o = ut.options._parseFont(e),
          r = i ? a * o.lineHeight + 2 * e.padding : 0;

      t.isHorizontal() ? (n.width = t.maxWidth, n.height = r) : (n.width = r, n.height = t.maxHeight), t.width = n.width, t.height = n.height;
    },
    afterFit: vn,
    isHorizontal: function () {
      var t = this.options.position;
      return "top" === t || "bottom" === t;
    },
    draw: function () {
      var t = this,
          e = t.ctx,
          i = t.options;

      if (i.display) {
        var n,
            a,
            o,
            r = ut.options._parseFont(i),
            s = r.lineHeight,
            l = s / 2 + i.padding,
            d = 0,
            u = t.top,
            h = t.left,
            c = t.bottom,
            f = t.right;

        e.fillStyle = ut.valueOrDefault(i.fontColor, st.global.defaultFontColor), e.font = r.string, t.isHorizontal() ? (a = h + (f - h) / 2, o = u + l, n = f - h) : (a = "left" === i.position ? h + l : f - l, o = u + (c - u) / 2, n = c - u, d = Math.PI * ("left" === i.position ? -.5 : .5)), e.save(), e.translate(a, o), e.rotate(d), e.textAlign = "center", e.textBaseline = "middle";
        var g = i.text;
        if (ut.isArray(g)) for (var p = 0, m = 0; m < g.length; ++m) e.fillText(g[m], 0, p, n), p += s;else e.fillText(g, 0, 0, n);
        e.restore();
      }
    }
  });

  function xn(t, e) {
    var i = new bn({
      ctx: t.ctx,
      options: e,
      chart: t
    });
    ke.configure(t, i, e), ke.addBox(t, i), t.titleBlock = i;
  }

  var yn = {},
      kn = un,
      wn = mn,
      Mn = {
    id: "title",
    _element: bn,
    beforeInit: function (t) {
      var e = t.options.title;
      e && xn(t, e);
    },
    beforeUpdate: function (t) {
      var e = t.options.title,
          i = t.titleBlock;
      e ? (ut.mergeIf(e, st.global.title), i ? (ke.configure(t, i, e), i.options = e) : xn(t, e)) : i && (ke.removeBox(t, i), delete t.titleBlock);
    }
  };

  for (var _n in yn.filler = kn, yn.legend = wn, yn.title = Mn, ai.helpers = ut, function () {
    function t(t, e, i) {
      var n;
      return "string" == typeof t ? (n = parseInt(t, 10), -1 !== t.indexOf("%") && (n = n / 100 * e.parentNode[i])) : n = t, n;
    }

    function e(t) {
      return null != t && "none" !== t;
    }

    function i(i, n, a) {
      var o = document.defaultView,
          r = ut._getParentNode(i),
          s = o.getComputedStyle(i)[n],
          l = o.getComputedStyle(r)[n],
          d = e(s),
          u = e(l),
          h = Number.POSITIVE_INFINITY;

      return d || u ? Math.min(d ? t(s, i, a) : h, u ? t(l, r, a) : h) : "none";
    }

    ut.where = function (t, e) {
      if (ut.isArray(t) && Array.prototype.filter) return t.filter(e);
      var i = [];
      return ut.each(t, function (t) {
        e(t) && i.push(t);
      }), i;
    }, ut.findIndex = Array.prototype.findIndex ? function (t, e, i) {
      return t.findIndex(e, i);
    } : function (t, e, i) {
      i = void 0 === i ? t : i;

      for (var n = 0, a = t.length; n < a; ++n) if (e.call(i, t[n], n, t)) return n;

      return -1;
    }, ut.findNextWhere = function (t, e, i) {
      ut.isNullOrUndef(i) && (i = -1);

      for (var n = i + 1; n < t.length; n++) {
        var a = t[n];
        if (e(a)) return a;
      }
    }, ut.findPreviousWhere = function (t, e, i) {
      ut.isNullOrUndef(i) && (i = t.length);

      for (var n = i - 1; n >= 0; n--) {
        var a = t[n];
        if (e(a)) return a;
      }
    }, ut.isNumber = function (t) {
      return !isNaN(parseFloat(t)) && isFinite(t);
    }, ut.almostEquals = function (t, e, i) {
      return Math.abs(t - e) < i;
    }, ut.almostWhole = function (t, e) {
      var i = Math.round(t);
      return i - e < t && i + e > t;
    }, ut.max = function (t) {
      return t.reduce(function (t, e) {
        return isNaN(e) ? t : Math.max(t, e);
      }, Number.NEGATIVE_INFINITY);
    }, ut.min = function (t) {
      return t.reduce(function (t, e) {
        return isNaN(e) ? t : Math.min(t, e);
      }, Number.POSITIVE_INFINITY);
    }, ut.sign = Math.sign ? function (t) {
      return Math.sign(t);
    } : function (t) {
      return 0 == (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1;
    }, ut.log10 = Math.log10 ? function (t) {
      return Math.log10(t);
    } : function (t) {
      var e = Math.log(t) * Math.LOG10E,
          i = Math.round(e);
      return t === Math.pow(10, i) ? i : e;
    }, ut.toRadians = function (t) {
      return t * (Math.PI / 180);
    }, ut.toDegrees = function (t) {
      return t * (180 / Math.PI);
    }, ut._decimalPlaces = function (t) {
      if (ut.isFinite(t)) {
        for (var e = 1, i = 0; Math.round(t * e) / e !== t;) e *= 10, i++;

        return i;
      }
    }, ut.getAngleFromPoint = function (t, e) {
      var i = e.x - t.x,
          n = e.y - t.y,
          a = Math.sqrt(i * i + n * n),
          o = Math.atan2(n, i);
      return o < -.5 * Math.PI && (o += 2 * Math.PI), {
        angle: o,
        distance: a
      };
    }, ut.distanceBetweenPoints = function (t, e) {
      return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
    }, ut.aliasPixel = function (t) {
      return t % 2 == 0 ? 0 : .5;
    }, ut._alignPixel = function (t, e, i) {
      var n = t.currentDevicePixelRatio,
          a = i / 2;
      return Math.round((e - a) * n) / n + a;
    }, ut.splineCurve = function (t, e, i, n) {
      var a = t.skip ? e : t,
          o = e,
          r = i.skip ? e : i,
          s = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)),
          l = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2)),
          d = s / (s + l),
          u = l / (s + l),
          h = n * (d = isNaN(d) ? 0 : d),
          c = n * (u = isNaN(u) ? 0 : u);
      return {
        previous: {
          x: o.x - h * (r.x - a.x),
          y: o.y - h * (r.y - a.y)
        },
        next: {
          x: o.x + c * (r.x - a.x),
          y: o.y + c * (r.y - a.y)
        }
      };
    }, ut.EPSILON = Number.EPSILON || 1e-14, ut.splineCurveMonotone = function (t) {
      var e,
          i,
          n,
          a,
          o,
          r,
          s,
          l,
          d,
          u = (t || []).map(function (t) {
        return {
          model: t._model,
          deltaK: 0,
          mK: 0
        };
      }),
          h = u.length;

      for (e = 0; e < h; ++e) if (!(n = u[e]).model.skip) {
        if (i = e > 0 ? u[e - 1] : null, (a = e < h - 1 ? u[e + 1] : null) && !a.model.skip) {
          var c = a.model.x - n.model.x;
          n.deltaK = 0 !== c ? (a.model.y - n.model.y) / c : 0;
        }

        !i || i.model.skip ? n.mK = n.deltaK : !a || a.model.skip ? n.mK = i.deltaK : this.sign(i.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (i.deltaK + n.deltaK) / 2;
      }

      for (e = 0; e < h - 1; ++e) n = u[e], a = u[e + 1], n.model.skip || a.model.skip || (ut.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = a.mK = 0 : (o = n.mK / n.deltaK, r = a.mK / n.deltaK, (l = Math.pow(o, 2) + Math.pow(r, 2)) <= 9 || (s = 3 / Math.sqrt(l), n.mK = o * s * n.deltaK, a.mK = r * s * n.deltaK)));

      for (e = 0; e < h; ++e) (n = u[e]).model.skip || (i = e > 0 ? u[e - 1] : null, a = e < h - 1 ? u[e + 1] : null, i && !i.model.skip && (d = (n.model.x - i.model.x) / 3, n.model.controlPointPreviousX = n.model.x - d, n.model.controlPointPreviousY = n.model.y - d * n.mK), a && !a.model.skip && (d = (a.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + d, n.model.controlPointNextY = n.model.y + d * n.mK));
    }, ut.nextItem = function (t, e, i) {
      return i ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1];
    }, ut.previousItem = function (t, e, i) {
      return i ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1];
    }, ut.niceNum = function (t, e) {
      var i = Math.floor(ut.log10(t)),
          n = t / Math.pow(10, i);
      return (e ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * Math.pow(10, i);
    }, ut.requestAnimFrame = "undefined" == typeof window ? function (t) {
      t();
    } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
      return window.setTimeout(t, 1e3 / 60);
    }, ut.getRelativePosition = function (t, e) {
      var i,
          n,
          a = t.originalEvent || t,
          o = t.target || t.srcElement,
          r = o.getBoundingClientRect(),
          s = a.touches;
      s && s.length > 0 ? (i = s[0].clientX, n = s[0].clientY) : (i = a.clientX, n = a.clientY);
      var l = parseFloat(ut.getStyle(o, "padding-left")),
          d = parseFloat(ut.getStyle(o, "padding-top")),
          u = parseFloat(ut.getStyle(o, "padding-right")),
          h = parseFloat(ut.getStyle(o, "padding-bottom")),
          c = r.right - r.left - l - u,
          f = r.bottom - r.top - d - h;
      return {
        x: i = Math.round((i - r.left - l) / c * o.width / e.currentDevicePixelRatio),
        y: n = Math.round((n - r.top - d) / f * o.height / e.currentDevicePixelRatio)
      };
    }, ut.getConstraintWidth = function (t) {
      return i(t, "max-width", "clientWidth");
    }, ut.getConstraintHeight = function (t) {
      return i(t, "max-height", "clientHeight");
    }, ut._calculatePadding = function (t, e, i) {
      return (e = ut.getStyle(t, e)).indexOf("%") > -1 ? i * parseInt(e, 10) / 100 : parseInt(e, 10);
    }, ut._getParentNode = function (t) {
      var e = t.parentNode;
      return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e;
    }, ut.getMaximumWidth = function (t) {
      var e = ut._getParentNode(t);

      if (!e) return t.clientWidth;

      var i = e.clientWidth,
          n = i - ut._calculatePadding(e, "padding-left", i) - ut._calculatePadding(e, "padding-right", i),
          a = ut.getConstraintWidth(t);

      return isNaN(a) ? n : Math.min(n, a);
    }, ut.getMaximumHeight = function (t) {
      var e = ut._getParentNode(t);

      if (!e) return t.clientHeight;

      var i = e.clientHeight,
          n = i - ut._calculatePadding(e, "padding-top", i) - ut._calculatePadding(e, "padding-bottom", i),
          a = ut.getConstraintHeight(t);

      return isNaN(a) ? n : Math.min(n, a);
    }, ut.getStyle = function (t, e) {
      return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
    }, ut.retinaScale = function (t, e) {
      var i = t.currentDevicePixelRatio = e || "undefined" != typeof window && window.devicePixelRatio || 1;

      if (1 !== i) {
        var n = t.canvas,
            a = t.height,
            o = t.width;
        n.height = a * i, n.width = o * i, t.ctx.scale(i, i), n.style.height || n.style.width || (n.style.height = a + "px", n.style.width = o + "px");
      }
    }, ut.fontString = function (t, e, i) {
      return e + " " + t + "px " + i;
    }, ut.longestText = function (t, e, i, n) {
      var a = (n = n || {}).data = n.data || {},
          o = n.garbageCollect = n.garbageCollect || [];
      n.font !== e && (a = n.data = {}, o = n.garbageCollect = [], n.font = e), t.font = e;
      var r = 0;
      ut.each(i, function (e) {
        null != e && !0 !== ut.isArray(e) ? r = ut.measureText(t, a, o, r, e) : ut.isArray(e) && ut.each(e, function (e) {
          null == e || ut.isArray(e) || (r = ut.measureText(t, a, o, r, e));
        });
      });
      var s = o.length / 2;

      if (s > i.length) {
        for (var l = 0; l < s; l++) delete a[o[l]];

        o.splice(0, s);
      }

      return r;
    }, ut.measureText = function (t, e, i, n, a) {
      var o = e[a];
      return o || (o = e[a] = t.measureText(a).width, i.push(a)), o > n && (n = o), n;
    }, ut.numberOfLabelLines = function (t) {
      var e = 1;
      return ut.each(t, function (t) {
        ut.isArray(t) && t.length > e && (e = t.length);
      }), e;
    }, ut.color = X ? function (t) {
      return t instanceof CanvasGradient && (t = st.global.defaultColor), X(t);
    } : function (t) {
      return console.error("Color.js not found!"), t;
    }, ut.getHoverColor = function (t) {
      return t instanceof CanvasPattern || t instanceof CanvasGradient ? t : ut.color(t).saturate(.5).darken(.1).rgbString();
    };
  }(), ai._adapters = si, ai.Animation = vt, ai.animationService = bt, ai.controllers = ue, ai.DatasetController = Mt, ai.defaults = st, ai.Element = pt, ai.elements = Wt, ai.Interaction = ve, ai.layouts = ke, ai.platform = Ve, ai.plugins = Ee, ai.Scale = fi, ai.scaleService = He, ai.Ticks = li, ai.Tooltip = Je, ai.helpers.each(tn, function (t, e) {
    ai.scaleService.registerScaleType(e, t, t._defaults);
  }), yn) yn.hasOwnProperty(_n) && ai.plugins.register(yn[_n]);

  ai.platform.initialize();
  var Cn = ai;
  return "undefined" != typeof window && (window.Chart = ai), ai.Chart = ai, ai.Legend = yn.legend._element, ai.Title = yn.title._element, ai.pluginService = ai.plugins, ai.PluginBase = ai.Element.extend({}), ai.canvasHelpers = ai.helpers.canvas, ai.layoutService = ai.layouts, ai.LinearScaleBase = bi, ai.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], function (t) {
    ai[t] = function (e, i) {
      return new ai(e, ai.helpers.merge(i || {}, {
        type: t.charAt(0).toLowerCase() + t.slice(1)
      }));
    };
  }), Cn;
});
/*
 * jsCalendar v1.4.4
 *
 *
 * MIT License
 *
 * Copyright (c) 2019 Grammatopoulos Athanasios-Vasileios
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */
var jsCalendar = function () {
  // Constructor
  function JsCalendar() {
    // No parameters
    if (arguments.length === 0) {
      // Do nothing
      return;
    } else {
      return this._construct(arguments);
    }
  } // Version


  JsCalendar.version = 'v1.4.4'; // Sub-Constructor

  JsCalendar.prototype._construct = function (args) {
    // Parse arguments
    args = this._parseArguments(args); // Set a target

    this._setTarget(args.target); // Init calendar


    this._init(args.options); // Init target


    this._initTarget(); // Set date


    this._setDate(args.date !== null ? args.date : this._target.dataset.hasOwnProperty('date') ? this._target.dataset.date : new Date()); // If invalid date


    if (!this._now) throw new Error('jsCalendar: Date is outside range.'); // Create

    this._create(); // Update


    this._update();
  }; // Languages


  JsCalendar.prototype.languages = {
    // Default English language
    en: {
      // Months Names
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      // Days Names
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      // Default handlers
      _dateStringParser: function (key, date) {
        return JsCalendar._defaultDateStringParser(key, date, this);
      },
      _dayStringParser: function (key, date) {
        return JsCalendar._defaultDayStringParser(key, date, this);
      }
    }
  }; // Init calendar

  JsCalendar.prototype._init = function (options) {
    // Init elements object
    this._elements = {}; // Events init

    this._events = {};
    this._events.date = [];
    this._events.month = [];
    this._events.day_render = [];
    this._events.date_render = [];
    this._events.month_render = []; // Dates variables

    this._now = null;
    this._date = null;
    this._selected = []; // Language object

    this.language = {}; // Parse options

    this._parseOptions(options);
  }; // Parse options


  JsCalendar.prototype._parseArguments = function (args) {
    // Arguments object
    var obj = {
      target: null,
      date: null,
      options: {}
    }; // If no arguments

    if (args.length === 0) {
      // Throw an error
      throw new Error('jsCalendar: No parameters were given.');
    } // Only 1 argument
    else if (args.length === 1) {
        // If target element
        if ( // If html element
        (typeof HTMLElement === 'object' ? args[0] instanceof HTMLElement : args[0]) && typeof args[0] === 'object' && args[0] !== null && args[0].nodeType === 1 && typeof args[0].nodeName === 'string' || // Or string
        typeof args[0] === 'string') {
          obj.target = args[0];
        } // Options argument
        else {
            // Init arguments
            obj.options = args[0]; // Get target

            if (typeof args[0].target !== 'undefined') {
              obj.target = args[0].target;
            } else {
              // Throw an error
              throw new Error('jsCalendar: Not target was given.');
            } // Get date


            if (typeof args[0].date !== 'undefined') {
              obj.date = args[0].date;
            }
          }
      } // Many arguments
      else {
          // First is target
          obj.target = args[0]; // If date

          if (args.length >= 2) {
            obj.date = args[1];
          } // If options


          if (args.length >= 3) {
            obj.options = args[2];
          }
        } // Return object


    return obj;
  }; // Default options


  JsCalendar.options = {
    language: 'en',
    zeroFill: false,
    monthFormat: 'month',
    dayFormat: 'DDD',
    firstDayOfTheWeek: 2,
    navigator: true,
    navigatorPosition: 'both',
    min: false,
    max: false,
    onMonthRender: false,
    onDayRender: false,
    onDateRender: false
  }; // Parse options

  JsCalendar.prototype._parseOptions = function (doptions) {
    // Options Object
    this._options = {}; // Input options object (dirty)

    var options = {}; // Load default and input options

    for (var item in JsCalendar.options) {
      // Default options
      if (JsCalendar.options.hasOwnProperty(item)) {
        this._options[item] = JsCalendar.options[item];
      } // Dynamic options


      if (doptions.hasOwnProperty(item)) {
        options[item] = doptions[item];
      } // Dataset options
      else if (this._target.dataset.hasOwnProperty(item)) {
          options[item] = this._target.dataset[item];
        }
    } // Check options


    if (typeof options.zeroFill !== 'undefined') {
      if (options.zeroFill === 'false' || !options.zeroFill) {
        this._options.zeroFill = false;
      } else {
        this._options.zeroFill = true;
      }
    }

    if (typeof options.monthFormat !== 'undefined') {
      this._options.monthFormat = options.monthFormat;
    }

    if (typeof options.dayFormat !== 'undefined') {
      this._options.dayFormat = options.dayFormat;
    }

    if (typeof options.navigator !== 'undefined') {
      if (options.navigator === 'false' || !options.navigator) {
        this._options.navigator = false;
      } else {
        this._options.navigator = true;
      }
    }

    if (typeof options.navigatorPosition !== 'undefined') {
      this._options.navigatorPosition = options.navigatorPosition;
    } // Language


    if (typeof options.language === 'string' && typeof this.languages[options.language] !== 'undefined') {
      this._options.language = options.language;
    } // Set language


    this.setLanguage(this._options.language); // Set first day of the week

    if (typeof options.fdotw !== 'undefined') {
      options.firstDayOfTheWeek = options.fdotw;
    }

    if (typeof options.firstDayOfTheWeek !== 'undefined') {
      // If day number
      if (typeof options.firstDayOfTheWeek === 'number') {
        // Range check (no need to check for bigger than 7 but I don't trust anyone)
        if (options.firstDayOfTheWeek >= 1 && options.firstDayOfTheWeek <= 7) {
          this._options.firstDayOfTheWeek = options.firstDayOfTheWeek;
        }
      } // If string


      if (typeof options.firstDayOfTheWeek === 'string') {
        // If day number
        if (options.firstDayOfTheWeek.match(/^[1-7]$/)) {
          this._options.firstDayOfTheWeek = parseInt(options.firstDayOfTheWeek, 10);
        } // else use it as a day name
        else {
            // So find day
            this._options.firstDayOfTheWeek = this.language.days.indexOf(options.firstDayOfTheWeek) + 1; // Range check (no need to check for bigger then 7 but I don't trust anyone)

            if (this._options.firstDayOfTheWeek < 1 || this._options.firstDayOfTheWeek > 7) {
              this._options.firstDayOfTheWeek = 1;
            }
          }
      }
    } // Set min calendar date


    if (typeof options.min !== 'undefined' && options.min !== 'false' && options.min !== false) {
      // Parse date
      this._options.min = tools.parseDate(options.min);
    } // Set max calendar date


    if (typeof options.max !== 'undefined' && options.max !== 'false' && options.max !== false) {
      // Parse date
      this._options.max = tools.parseDate(options.max);
    } // Set render handlers


    if (typeof options.onMonthRender !== 'undefined') {
      // Passed as function name string
      if (typeof options.onMonthRender === 'string' && typeof window[options.onMonthRender] === 'function') {
        this._on('month_render', window[options.onMonthRender]);
      } // Passed as function
      else if (typeof options.onMonthRender === 'function') {
          this._on('month_render', options.onMonthRender);
        }
    }

    if (typeof options.onDayRender !== 'undefined') {
      // Passed as function name string
      if (typeof options.onDayRender === 'string' && typeof window[options.onDayRender] === 'function') {
        this._on('day_render', window[options.onDayRender]);
      } // Passed as function
      else if (typeof options.onDayRender === 'function') {
          this._on('day_render', options.onDayRender);
        }
    }

    if (typeof options.onDateRender !== 'undefined') {
      // Passed as function name string
      if (typeof options.onDateRender === 'string' && typeof window[options.onDateRender] === 'function') {
        this._on('date_render', window[options.onDateRender]);
      } // Passed as function
      else if (typeof options.onDateRender === 'function') {
          this._on('date_render', options.onDateRender);
        }
    }
  }; // Set target


  JsCalendar.prototype._setTarget = function (element) {
    // Parse target
    var target = tools.getElement(element); // If target not found

    if (!target) {
      // Throw an error
      throw new Error('jsCalendar: Target was not found.');
    } else {
      // Save element
      this._target = target; // Link object to list

      var id = this._target.id;

      if (id && id.length > 0) {
        jsCalendarObjects['#' + id] = this;
      }
    }
  }; // Init target


  JsCalendar.prototype._initTarget = function () {
    // Add class
    if (this._target.className.length > 0) {
      this._target.className += ' ';
    }

    this._target.className += 'jsCalendar'; // Create table

    this._elements.table = document.createElement('table'); // Create table header

    this._elements.head = document.createElement('thead');

    this._elements.table.appendChild(this._elements.head); // Create table body


    this._elements.body = document.createElement('tbody');

    this._elements.table.appendChild(this._elements.body); // Insert on page


    this._target.appendChild(this._elements.table);
  }; // Check if date in range


  JsCalendar.prototype._isDateInRange = function (date) {
    // If no range
    if (this._options.min === false && this._options.max === false) {
      return true;
    } // Parse date


    date = tools.parseDate(date); // Check min

    if (this._options.min !== false && this._options.min.getTime() > date.getTime()) {
      return false;
    } // Check max


    if (this._options.max !== false && this._options.max.getTime() < date.getTime()) {
      return false;
    } // In range


    return true;
  }; // Set a Date


  JsCalendar.prototype._setDate = function (date) {
    // Parse date
    date = tools.parseDate(date); // Check date not in range

    if (!this._isDateInRange(date)) {
      return;
    } // Set data


    this._now = date;
    this._date = new Date(this._now.getFullYear(), this._now.getMonth(), 1);
  };

  JsCalendar.prototype.getDate = function () {
    return this._now;
  }; // Convert to date string


  JsCalendar.prototype._parseToDateString = function (date, format) {
    var lang = this.language;
    return format.replace(/(MONTH|month|MMM|mmm|mm|m|MM|M|DAY|day|DDD|ddd|dd|d|DD|D|YYYY|yyyy)/g, function (key) {
      return lang.dateStringParser(key, date);
    });
  }; // Get visible month


  JsCalendar.prototype._getVisibleMonth = function (date) {
    // For date
    if (typeof date === 'undefined') {
      // Get saved date
      date = this._date;
    } else {
      date = tools.parseDate(date);
    } // Get month's first day


    var first = new Date(date.getTime());
    first.setDate(1); // First day of the month index

    var firstDay = first.getDay() - (this._options.firstDayOfTheWeek - 1);

    if (firstDay < 0) {
      firstDay += 7;
    } // Get month's name


    var lang = this.language;

    var name = this._options.monthFormat.replace(/(MONTH|month|MMM|mmm|##|#|YYYY|yyyy)/g, function (key) {
      return lang.dateStringParser(key, first);
    }); // Get visible days


    var days = this._getVisibleDates(date);

    var daysInMonth = new Date(first.getYear() + 1900, first.getMonth() + 1, 0).getDate();
    var current = -1; // If this is the month

    if (first.getYear() === this._now.getYear() && first.getMonth() === this._now.getMonth()) {
      // Calculate current
      current = firstDay + this._now.getDate() - 1;
    } // Return object


    return {
      name: name,
      days: days,
      start: firstDay + 1,
      current: current,
      end: firstDay + daysInMonth
    };
  }; // Get visible dates


  JsCalendar.prototype._getVisibleDates = function (date) {
    // For date
    if (typeof date === 'undefined') {
      // Get saved date
      date = this._date;
    } else {
      date = tools.parseDate(date);
    } // Visible days array


    var dates = []; // Get first day of the month

    var first = new Date(date.getTime());
    first.setDate(1);
    first.setHours(0, 0, 0, 0); // Count days of previous month to show

    var previous = first.getDay() - (this._options.firstDayOfTheWeek - 1);

    if (previous < 0) {
      previous += 7;
    } // Set day to month's first


    var day = new Date(first.getTime()); // Previous month's days

    while (previous > 0) {
      // Calculate previous day
      day.setDate(day.getDate() - 1); // Add page on frond of the list

      dates.unshift(new Date(day.getTime())); // Previous

      previous--;
    } // Set day to month's first


    day = new Date(first.getTime()); // This month's days

    do {
      // Add page on back of the list
      dates.push(new Date(day.getTime())); // Calculate next day

      day.setDate(day.getDate() + 1); // Repeat until next month
    } while (day.getDate() !== 1); // Next month's days


    var next = 42 - dates.length; // Add days left

    while (next > 0) {
      // Add page on back of the list
      dates.push(new Date(day.getTime())); // Calculate next day

      day.setDate(day.getDate() + 1); // Next

      next--;
    } // Return days


    return dates;
  }; // Create calendar


  JsCalendar.prototype._create = function () {
    var i, j; // Save instance

    var that = this; // Set created flag

    this._elements.created = true; // Head rows

    this._elements.headRows = [];

    for (i = 0; i < 2; i++) {
      this._elements.headRows.push(document.createElement('tr'));

      this._elements.head.appendChild(this._elements.headRows[i]);
    } // Month row


    var title_header = document.createElement('th');
    title_header.setAttribute('colspan', 7);
    this._elements.headRows[0].className = 'jsCalendar-title-row';

    this._elements.headRows[0].appendChild(title_header);

    this._elements.headLeft = document.createElement('div');
    this._elements.headLeft.className = 'jsCalendar-title-left';
    title_header.appendChild(this._elements.headLeft);
    this._elements.month = document.createElement('div');
    this._elements.month.className = 'jsCalendar-title-name';
    title_header.appendChild(this._elements.month);
    this._elements.headRight = document.createElement('div');
    this._elements.headRight.className = 'jsCalendar-title-right';
    title_header.appendChild(this._elements.headRight); // Navigation

    if (this._options.navigator) {
      this._elements.navLeft = document.createElement('div');
      this._elements.navLeft.className = 'jsCalendar-nav-left';
      this._elements.navRight = document.createElement('div');
      this._elements.navRight.className = 'jsCalendar-nav-right';

      if (this._options.navigatorPosition === 'left') {
        this._elements.headLeft.appendChild(this._elements.navLeft);

        this._elements.headLeft.appendChild(this._elements.navRight);
      } else if (this._options.navigatorPosition === 'right') {
        this._elements.headRight.appendChild(this._elements.navLeft);

        this._elements.headRight.appendChild(this._elements.navRight);
      } else {
        this._elements.headLeft.appendChild(this._elements.navLeft);

        this._elements.headRight.appendChild(this._elements.navRight);
      } // Event listeners


      this._elements.navLeft.addEventListener('click', function (event) {
        that.previous();
        var date = new Date(that._date.getTime());
        date.setDate(1);

        that._eventFire('month', date, event);
      }, false);

      this._elements.navRight.addEventListener('click', function (event) {
        that.next();
        var date = new Date(that._date.getTime());
        date.setDate(1);

        that._eventFire('month', date, event);
      }, false);
    } // Days row


    this._elements.headRows[1].className = 'jsCalendar-week-days';
    title_header.className = 'jsCalendar-title';
    this._elements.days = [];

    for (i = 0; i < 7; i++) {
      this._elements.days.push(document.createElement('th'));

      this._elements.headRows[1].appendChild(this._elements.days[this._elements.days.length - 1]);
    } // Body rows


    this._elements.bodyRows = [];
    this._elements.bodyCols = []; // 6 rows

    for (i = 0; i < 6; i++) {
      this._elements.bodyRows.push(document.createElement('tr'));

      this._elements.body.appendChild(this._elements.bodyRows[i]); // 7 days


      for (j = 0; j < 7; j++) {
        this._elements.bodyCols.push(document.createElement('td'));

        this._elements.bodyRows[i].appendChild(this._elements.bodyCols[i * 7 + j]);

        this._elements.bodyCols[i * 7 + j].addEventListener('click', function (index) {
          return function (event) {
            that._eventFire('date', that._active[index], event);
          };
        }(i * 7 + j), false);
      }
    }
  }; // Select dates on calendar


  JsCalendar.prototype._selectDates = function (dates) {
    // Copy array instance
    dates = dates.slice(); // Parse dates

    for (var i = 0; i < dates.length; i++) {
      dates[i] = tools.parseDate(dates[i]);
      dates[i].setHours(0, 0, 0, 0);
      dates[i] = dates[i].getTime();
    } // Insert dates on array


    for (i = dates.length - 1; i >= 0; i--) {
      // If not already selected
      if (this._selected.indexOf(dates[i]) < 0) {
        this._selected.push(dates[i]);
      }
    }
  }; // Un-select dates on calendar


  JsCalendar.prototype._unselectDates = function (dates) {
    // Copy array instance
    dates = dates.slice(); // Parse dates

    for (var i = 0; i < dates.length; i++) {
      dates[i] = tools.parseDate(dates[i]);
      dates[i].setHours(0, 0, 0, 0);
      dates[i] = dates[i].getTime();
    } // Remove dates of the array


    var index;

    for (i = dates.length - 1; i >= 0; i--) {
      // If selected
      index = this._selected.indexOf(dates[i]);

      if (index >= 0) {
        this._selected.splice(index, 1);
      }
    }
  }; // Unselect all dates on calendar


  JsCalendar.prototype._unselectAllDates = function () {
    // While not empty
    while (this._selected.length) {
      this._selected.pop();
    }
  }; // Update calendar


  JsCalendar.prototype._update = function () {
    // Get month info
    var month = this._getVisibleMonth(this._date); // Save data


    this._active = month.days.slice(); // Update month name

    this._elements.month.textContent = month.name; // Check zeros filling

    var prefix = this._options.zeroFill ? '0' : ''; // Populate days

    var text;

    for (var i = month.days.length - 1; i >= 0; i--) {
      text = month.days[i].getDate();
      this._elements.bodyCols[i].textContent = text < 10 ? prefix + text : text; // If date is selected

      if (this._selected.indexOf(month.days[i].getTime()) >= 0) {
        this._elements.bodyCols[i].className = 'jsCalendar-selected';
      } else {
        this._elements.bodyCols[i].removeAttribute('class');
      }
    } // Previous month


    for (i = 0; i < month.start - 1; i++) {
      this._elements.bodyCols[i].className = 'jsCalendar-previous';
    } // Current day


    if (month.current >= 0) {
      if (this._elements.bodyCols[month.current].className.length > 0) {
        this._elements.bodyCols[month.current].className += ' jsCalendar-current';
      } else {
        this._elements.bodyCols[month.current].className = 'jsCalendar-current';
      }
    } // Next month


    for (i = month.end; i < month.days.length; i++) {
      this._elements.bodyCols[i].className = 'jsCalendar-next';
    } // Set days of the week locale


    for (i = 0; i < 7; i++) {
      var that = this;
      this._elements.days[i].textContent = this._options.dayFormat.replace(/(DAY|day|DDD|ddd|DD|dd|D)/g, function (key) {
        return that.language.dayStringParser(key, (i + that._options.firstDayOfTheWeek - 1) % 7);
      });
    } // Call render handlers


    var j;

    if (this._events.month_render.length > 0) {
      var date = month.days[month.start]; // Clear any style

      this._elements.month.removeAttribute('style'); // Call the render handlers


      for (j = 0; j < this._events.month_render.length; j++) {
        this._events.month_render[j].call(this, // Month index
        date.getMonth(), // Pass the html element
        this._elements.month, // Info about that month
        {
          start: new Date(date.getTime()),
          end: new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59, 999),
          numberOfDays: month.end - month.start + 1
        });
      }
    }

    if (this._events.day_render.length > 0) {
      for (i = 0; i < 7; i++) {
        // Clear any style
        this._elements.days[i].removeAttribute('style'); // Call the render handler


        for (j = 0; j < this._events.day_render.length; j++) {
          this._events.day_render[j].call(this, // Day index
          (i + this._options.firstDayOfTheWeek - 1) % 7, // Pass the html element
          this._elements.days[i], // Info about that day
          {
            position: i
          });
        }
      }
    }

    if (this._events.date_render.length > 0) {
      for (i = 0; i < month.days.length; i++) {
        // Clear any style
        this._elements.bodyCols[i].removeAttribute('style'); // Call the render handler


        for (j = 0; j < this._events.date_render.length; j++) {
          this._events.date_render[j].call(this, // Date should be clonned
          new Date(month.days[i].getTime()), // Pass the html element
          this._elements.bodyCols[i], // Info about that date
          {
            isCurrent: month.current == i,
            isSelected: this._selected.indexOf(month.days[i].getTime()) >= 0,
            isPreviousMonth: i < month.start,
            isCurrentMonth: month.start <= i && i <= month.end,
            isNextMonth: month.end < i,
            position: {
              x: i % 7,
              y: Math.floor(i / 7)
            }
          });
        }
      }
    }
  }; // Fire all event listeners


  JsCalendar.prototype._eventFire = function (name, date, event) {
    if (!this._events.hasOwnProperty(name)) return; // Search events

    for (var i = 0; i < this._events[name].length; i++) {
      (function (callback, instance) {
        // Call asynchronous
        setTimeout(function () {
          // Call callback
          callback.call(instance, event, new Date(date.getTime()));
        }, 0);
      })(this._events[name][i], this);
    }
  }; // Add a event listener
  // This method will be exposed on the future


  JsCalendar.prototype._on = function (name, callback) {
    // If callback is a function
    if (typeof callback === 'function') {
      // Add to the list
      this._events[name].push(callback);
    } // Not a function
    else {
        // Throw an error
        throw new Error('jsCalendar: Invalid callback function.');
      } // Return


    return this;
  }; // Add a event listeners


  JsCalendar.prototype.onDateClick = function (callback) {
    return this._on('date', callback);
  };

  JsCalendar.prototype.onMonthChange = function (callback) {
    return this._on('month', callback);
  };

  JsCalendar.prototype.onDayRender = function (callback) {
    return this._on('day_render', callback);
  };

  JsCalendar.prototype.onDateRender = function (callback) {
    return this._on('date_render', callback);
  };

  JsCalendar.prototype.onMonthRender = function (callback) {
    return this._on('month_render', callback);
  }; // Goto a date


  JsCalendar.prototype.set = function (date) {
    // Set new date
    this._setDate(date); // Refresh


    this.refresh(); // Return

    return this;
  }; // Set min date


  JsCalendar.prototype.min = function (date) {
    // If value
    if (date) {
      // Set min date
      this._options.min = tools.parseDate(date);
    } // Disable
    else {
        this._options.min = false;
      } // Refresh


    this.refresh(); // Return

    return this;
  }; // Set max date


  JsCalendar.prototype.max = function (date) {
    // If value
    if (date) {
      // Set max date
      this._options.max = tools.parseDate(date);
    } // Disable
    else {
        this._options.max = false;
      } // Refresh


    this.refresh(); // Return

    return this;
  }; // Refresh
  // Safe _update


  JsCalendar.prototype.refresh = function (date) {
    // If date provided
    if (typeof date !== 'undefined') {
      // If date is in range
      if (this._isDateInRange(date)) {
        this._date = tools.parseDate(date);
      }
    } // If calendar elements ready


    if (this._elements.created === true) {
      this._update();
    } // Return


    return this;
  }; // Next month


  JsCalendar.prototype.next = function (n) {
    // Next number
    if (typeof n !== 'number') {
      n = 1;
    } // Calculate date


    var date = new Date(this._date.getFullYear(), this._date.getMonth() + n, 1); // If date is not in range

    if (!this._isDateInRange(date)) {
      return this;
    } // Set date


    this._date = date;
    this.refresh(); // Return

    return this;
  }; // Next month


  JsCalendar.prototype.previous = function (n) {
    // Next number
    if (typeof n !== 'number') {
      n = 1;
    } // Calculate date (last day of previous month)


    var date = new Date(this._date.getFullYear(), this._date.getMonth() - n + 1, 0); // If date is not in range

    if (!this._isDateInRange(date)) {
      return this;
    } // Set date


    this._date = date;
    this.refresh(); // Return

    return this;
  }; // Goto a date


  JsCalendar.prototype.goto = function (date) {
    this.refresh(date); // Return

    return this;
  }; // Reset to the date


  JsCalendar.prototype.reset = function () {
    this.refresh(this._now); // Return

    return this;
  }; // Select dates


  JsCalendar.prototype.select = function (dates) {
    // If no arguments
    if (typeof dates === 'undefined') {
      // Return
      return this;
    } // If dates not array


    if (!(dates instanceof Array)) {
      // Lets make it an array
      dates = [dates];
    } // Select dates


    this._selectDates(dates); // Refresh


    this.refresh(); // Return

    return this;
  }; // Unselect dates


  JsCalendar.prototype.unselect = function (dates) {
    // If no arguments
    if (typeof dates === 'undefined') {
      // Return
      return this;
    } // If dates not array


    if (!(dates instanceof Array)) {
      // Lets make it an array
      dates = [dates];
    } // Unselect dates


    this._unselectDates(dates); // Refresh


    this.refresh(); // Return

    return this;
  }; // Unselect all dates


  JsCalendar.prototype.clearselect = function () {
    // Unselect all dates
    this._unselectAllDates(); // Refresh


    this.refresh(); // Return

    return this;
  }; // Unselect all dates (alias)


  JsCalendar.prototype.clearSelected = JsCalendar.prototype.clearselect; // Get selected dates

  JsCalendar.prototype.getSelected = function (options) {
    // Check if no options
    if (typeof options !== 'object') {
      options = {};
    } // Copy selected array


    var dates = this._selected.slice(); // Options - Sort array


    if (options.sort) {
      if (options.sort === true) {
        dates.sort();
      } else if (typeof options.sort === 'string') {
        if (options.sort.toLowerCase() === 'asc') {
          dates.sort();
        } else if (options.sort.toLowerCase() === 'desc') {
          dates.sort();
          dates.reverse();
        }
      }
    } // Options - Data type


    if (options.type && typeof options.type === 'string') {
      var i; // Convert to date object

      if (options.type.toLowerCase() === 'date') {
        for (i = dates.length - 1; i >= 0; i--) {
          dates[i] = new Date(dates[i]);
        }
      } // If not a timestamp - convert to custom format
      else if (options.type.toLowerCase() !== 'timestamp') {
          for (i = dates.length - 1; i >= 0; i--) {
            dates[i] = this._parseToDateString(new Date(dates[i]), options.type);
          }
        }
    } // Return dates


    return dates;
  }; // Check if date is selected


  JsCalendar.prototype.isSelected = function (date) {
    // If no arguments or null
    if (typeof date === 'undefined' || date === null) {
      // Return
      return false;
    } // Parse date


    date = tools.parseDate(date);
    date.setHours(0, 0, 0, 0);
    date = date.getTime(); // If selected

    if (this._selected.indexOf(date) >= 0) {
      return true;
    } // If not selected
    else {
        return false;
      }
  }; // Check if date is visible in calendar


  JsCalendar.prototype.isVisible = function (date) {
    // If no arguments or null
    if (typeof date === 'undefined' || date === null) {
      // Return
      return false;
    } // Parse date


    date = tools.parseDate(date);
    date.setHours(0, 0, 0, 0);
    date = date.getTime(); // Get visible dates

    var visible = this._getVisibleDates(); // Check if date is inside visible dates


    if (visible[0].getTime() <= date && visible[visible.length - 1].getTime() >= date) {
      return true;
    } // Not visible
    else {
        return false;
      }
  }; // Check if date is in active month


  JsCalendar.prototype.isInMonth = function (date) {
    // If no arguments or null
    if (typeof date === 'undefined' || date === null) {
      // Return
      return false;
    } // Parse date and get month


    var month = tools.parseDate(date);
    month.setHours(0, 0, 0, 0);
    month.setDate(1); // Parse active month date

    var active = tools.parseDate(this._date);
    active.setHours(0, 0, 0, 0);
    active.setDate(1); // If same month

    if (month.getTime() === active.getTime()) {
      return true;
    } // Other month
    else {
        return false;
      }
  }; // Set language


  JsCalendar.prototype.setLanguage = function (code) {
    // Check if language exist
    if (typeof code !== 'string') {
      // Throw an error
      throw new Error('jsCalendar: Invalid language code.');
    }

    if (typeof this.languages[code] === 'undefined') {
      // Throw an error
      throw new Error('jsCalendar: Language not found.');
    } // Change language


    this._options.language = code; // Set new language as active

    var language = this.languages[code];
    this.language.months = language.months;
    this.language.days = language.days;
    this.language.dateStringParser = language._dateStringParser;
    this.language.dayStringParser = language._dayStringParser; // Refresh calendar

    this.refresh(); // Return

    return this;
  }; // Static foo methods (well... not really static)
  // Auto init calendars


  JsCalendar.autoFind = function () {
    // Get all auto-calendars
    var calendars = document.getElementsByClassName('auto-jsCalendar'); // For each auto-calendar

    for (var i = 0; i < calendars.length; i++) {
      // If not loaded
      if (calendars[i].getAttribute('jsCalendar-loaded') !== 'true') {
        // Set as loaded
        calendars[i].setAttribute('jsCalendar-loaded', 'true'); // Create

        new JsCalendar({
          target: calendars[i]
        });
      }
    }
  }; // Tools


  var tools = JsCalendar.tools = {}; // Parse to javascript date object

  tools.parseDate = function (date, silent) {
    // If set now date
    if (typeof date === 'undefined' || date === null || date === 'now') {
      // Get date now
      date = new Date();
    } // If date is string
    else if (typeof date === 'string') {
        // Parse date string
        date = date.replace(/-/g, '/').match(/^(\d{1,2})\/(\d{1,2})\/(\d{4,4})$/i); // If match

        if (date !== null) {
          var month_index = parseInt(date[2], 10) - 1; // Parse date

          date = new Date(date[3], month_index, date[1]); // Check if date does not exist

          if (!date || date.getMonth() !== month_index) {
            // Throw an error
            if (!silent) throw new Error('jsCalendar: Date does not exist.');
            return null;
          }
        } // Can't parse string
        else {
            // Throw an error
            if (!silent) throw new Error('jsCalendar: Failed to parse date.');
            return null;
          }
      } // If it is a number
      else if (typeof date === 'number') {
          // Get time from timestamp
          date = new Date(date);
        } // If it not a date 
        else if (!(date instanceof Date)) {
            // Throw an error
            if (!silent) throw new Error('jsCalendar: Invalid date.');
            return null;
          } // Return date


    return new Date(date.getTime());
  };

  tools.stringToDate = tools.parseDate; // Date to string

  tools.dateToString = function (date, format, lang) {
    // Find lang
    var languages = JsCalendar.prototype.languages;

    if (!lang || !languages.hasOwnProperty(lang)) {
      lang = 'en';
    } // Call parser


    return JsCalendar.prototype._parseToDateString.apply({
      language: {
        months: languages[lang].months,
        days: languages[lang].days,
        dateStringParser: languages[lang]._dateStringParser,
        dayStringParser: languages[lang]._dayStringParser
      }
    }, [date, format]);
  }; // Get element


  tools.getElement = function (element) {
    // Check if not valid
    if (!element) {
      return null;
    } // If string


    if (typeof element === 'string') {
      // Get element by id
      if (element[0] === '#') {
        return document.getElementById(element.substring(1));
      } // Get element by class-name
      else if (element[0] === '.') {
          return document.getElementsByClassName(element.substring(1))[0];
        }
    } // or if it is HTML element (just a naive-simple check)
    else if (element.tagName && element.nodeName && element.ownerDocument && element.removeAttribute) {
        return element;
      } // Unknown


    return null;
  }; // Get a new object


  JsCalendar.new = function () {
    // Create new object
    var obj = new JsCalendar(); // Construct calendar

    obj._construct(arguments); // Return new object


    return obj;
  }; // Manage existing jsCalendar objects


  var jsCalendarObjects = {};

  JsCalendar.set = function (identifier, calendar) {
    if (calendar instanceof JsCalendar) {
      jsCalendarObjects[identifier] = calendar;
      return true;
    }

    throw new Error('jsCalendar: The second parameter is not a jsCalendar.');
  };

  JsCalendar.get = function (identifier) {
    if (jsCalendarObjects.hasOwnProperty(identifier)) {
      return jsCalendarObjects[identifier];
    }

    return null;
  };

  JsCalendar.del = function (identifier) {
    if (jsCalendarObjects.hasOwnProperty(identifier)) {
      delete jsCalendarObjects[identifier];
      return true;
    }

    return false;
  }; // Add a new language


  JsCalendar.addLanguage = function (language) {
    // Check if language object is valid
    if (typeof language === 'undefined') {
      // Throw an error
      throw new Error('jsCalendar: No language object was given.');
    } // Check if valid language code


    if (typeof language.code !== 'string') {
      // Throw an error
      throw new Error('jsCalendar: Invalid language code.');
    } // Check language months


    if (!(language.months instanceof Array)) {
      // Throw an error
      throw new Error('jsCalendar: Invalid language months.');
    }

    if (language.months.length !== 12) {
      // Throw an error
      throw new Error('jsCalendar: Invalid language months length.');
    } // Check language days


    if (!(language.days instanceof Array)) {
      // Throw an error
      throw new Error('jsCalendar: Invalid language days.');
    }

    if (language.days.length !== 7) {
      // Throw an error
      throw new Error('jsCalendar: Invalid language days length.');
    } // Now save language


    JsCalendar.prototype.languages[language.code] = language; // Generate language string format handlers

    language._dateStringParser = language.hasOwnProperty('dateStringParser') ? function (key, date) {
      return language.dateStringParser(key, date) || JsCalendar._defaultDateStringParser(key, date, language);
    } : function (key, date) {
      return JsCalendar._defaultDateStringParser(key, date, language);
    };
    language._dayStringParser = language.hasOwnProperty('dayStringParser') ? function (key, day) {
      return language.dayStringParser(key, day) || JsCalendar._defaultDayStringParser(key, day, language);
    } : function (key, day) {
      return JsCalendar._defaultDayStringParser(key, day, language);
    };
  }; // Default function to handle date-string parsing


  JsCalendar._defaultDateStringParser = function (key, date, lang) {
    switch (key) {
      case 'MONTH':
      case 'month':
        return lang.months[date.getMonth()];

      case 'MMM':
      case 'mmm':
        return lang.months[date.getMonth()].substring(0, 3);

      case 'mm':
        return lang.months[date.getMonth()].substring(0, 2);

      case 'm':
        return lang.months[date.getMonth()].substring(0, 1);

      case 'MM':
        return (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1);

      case 'M':
        return date.getMonth() + 1;

      case '##':
        return (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1);

      case '#':
        return date.getMonth() + 1;

      case 'DAY':
      case 'day':
        return lang.days[date.getDay()];

      case 'DDD':
      case 'ddd':
        return lang.days[date.getDay()].substring(0, 3);

      case 'dd':
        return lang.days[date.getDay()].substring(0, 2);

      case 'd':
        return lang.days[date.getDay()].substring(0, 1);

      case 'DD':
        return (date.getDate() <= 9 ? '0' : '') + date.getDate();

      case 'D':
        return date.getDate();

      case 'YYYY':
      case 'yyyy':
        return date.getYear() + 1900;
    }
  }; // Default function to handle date-string parsing


  JsCalendar._defaultDayStringParser = function (key, day, lang) {
    switch (key) {
      case 'DAY':
      case 'day':
        return lang.days[day];

      case 'DDD':
      case 'ddd':
        return lang.days[day].substring(0, 3);

      case 'DD':
      case 'dd':
        return lang.days[day].substring(0, 2);

      case 'D':
        return lang.days[day].substring(0, 1);
    }
  }; // Load any language on the load list


  (function () {
    // If a list exist
    if (typeof window.jsCalendar_language2load !== 'undefined') {
      // While list not empty
      while (window.jsCalendar_language2load.length) {
        // Make it asynchronous
        setTimeout(function (language) {
          // Return timeout callback
          return function () {
            JsCalendar.addLanguage(language);
          };
        }(window.jsCalendar_language2load.pop()), 0);
      } // Clean up useless list


      delete window.jsCalendar_language2load;
    }
  })(); // Init auto calendars
  // After the page loads


  window.addEventListener('load', function () {
    // Get calendars
    JsCalendar.autoFind();
  }, false); // Return

  return JsCalendar;
}(); // console.log(strDateCalebdar);


var calendar = jsCalendar.new("#my-calendar"); // When the user clicks on a date

calendar.onDateClick(function (event, date) {
  this.set(date);
  setDate(date);
}); // calendar.onMonthChange(function (event, date) {
//     console.log(date);
// });

function setDate() {
  document.getElementById("calender_now_date").innerHTML = jsCalendar.tools.dateToString(calendar.getDate(), 'MONTH DD, YYYY', 'en');
}

setDate();
window.onload = function () {
  data = [210, 100, 180, 200, 250, 240, 200, 130, 100, 100, 180, 280];
  labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  renderChart(data, labels);
  dataDoughnut = [210, 100, 180, 200, 250, 240];
  labelsDoughnut = ["", "Feb", "Mar", "Apr", "May", "Jun"];
  renderDoughnut(dataDoughnut, labelsDoughnut);
};

function float2dollar(value) {
  return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

function renderChart(data, labels) {
  var ctx = document.getElementById("ChartPoint").getContext("2d");
  let fillPatternPoli = ctx.createLinearGradient(0, 0, 200, 0);
  fillPatternPoli.addColorStop(0, "#FBF3EDe6"); // 'rgba(0, 0, 0, 0.1)'

  fillPatternPoli.addColorStop(1, "#FCE9E9e6");
  let fillPatternLine = ctx.createLinearGradient(0, 0, 200, 0);
  fillPatternLine.addColorStop(0, "#F6860D"); // 'rgba(0, 0, 0, 0.1)'

  fillPatternLine.addColorStop(1, "#FF3A4C");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [{
        label: false,
        data: data,
        borderColor: fillPatternLine,
        backgroundColor: fillPatternPoli,
        hitRadius: 10,
        borderWidth: 3,
        pointRadius: 0.4,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 3,
        pointBackgroundColor: "rgba(255, 255, 255, 0)",
        pointHoverBackgroundColor: "rgba(255, 255, 255, 1)"
      }]
    },
    options: {
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          title: function (tooltipItem, data) {
            return ""; //data['labels'][tooltipItem[0]['index']];
          },
          label: function (tooltipItem, data) {
            return data["datasets"][0]["data"][tooltipItem["index"]];
          }
        },
        backgroundColor: "#FFF",
        titleFontSize: 16,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 14,
        displayColors: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            color: "rgba(0, 0, 0, 0)"
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            callback: function (value, index, values) {
              return value;
            }
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)"
          }
        }]
      }
    }
  });
}

function renderDoughnut(data, labels) {
  var ctx = document.getElementById("ChartDoughnut").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: labels,
      datasets: [{
        // label: false,
        data: data,
        borderColor: ["#FF6384", "#63FF84", "#84FF63", "#8463FF", "#6384FF"],
        backgroundColor: ["#FF6384", "#63FF84", "#84FF63", "#8463FF", "#6384FF"],
        // hitRadius: 10,
        // borderWidth: 3,
        // pointRadius: 0.4,
        pointHoverRadius: 100 // pointHoverBorderWidth: 3,
        // pointBackgroundColor: 'rgba(255, 255, 255, 0)',
        // pointHoverBackgroundColor: 'rgba(255, 255, 255, 1)',

      }]
    },
    options: {
      rotation: 85,
      cutoutPercentage: 90,
      legend: {
        display: false
      },
      tooltips: {
        mode: "x-axis",
        callbacks: {
          title: function (tooltipItem, data) {
            return ""; //data['labels'][tooltipItem[0]['index']];
          },
          label: function (tooltipItem, data) {
            return data["datasets"][0]["data"][tooltipItem["index"]];
          }
        },
        backgroundColor: "#FFF",
        titleFontSize: 16,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 14,
        displayColors: false
      }
    }
  });
}
(function (f) {
  if (typeof exports === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;

    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }

    g.ProgressBar = f();
  }
})(function () {
  var define, module, exports;
  return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;
          if (!u && a) return a(o, !0);
          if (i) return i(o, !0);
          var f = new Error("Cannot find module '" + o + "'");
          throw f.code = "MODULE_NOT_FOUND", f;
        }

        var l = n[o] = {
          exports: {}
        };
        t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }

      return n[o].exports;
    }

    var i = typeof require == "function" && require;

    for (var o = 0; o < r.length; o++) s(r[o]);

    return s;
  }({
    1: [function (require, module, exports) {
      /* shifty - v1.5.3 - 2016-11-29 - http://jeremyckahn.github.io/shifty */
      (function () {
        var root = this || Function("return this")();
        /**
         * Shifty Core
         * By Jeremy Kahn - jeremyckahn@gmail.com
         */

        var Tweenable = function () {
          "use strict"; // Aliases that get defined later in this function

          var formula; // CONSTANTS

          var DEFAULT_SCHEDULE_FUNCTION;
          var DEFAULT_EASING = "linear";
          var DEFAULT_DURATION = 500;
          var UPDATE_TIME = 1000 / 60;

          var _now = Date.now ? Date.now : function () {
            return +new Date();
          };

          var now = typeof SHIFTY_DEBUG_NOW !== "undefined" ? SHIFTY_DEBUG_NOW : _now;

          if (typeof window !== "undefined") {
            // requestAnimationFrame() shim by Paul Irish (modified for Shifty)
            // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
            DEFAULT_SCHEDULE_FUNCTION = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.mozCancelRequestAnimationFrame && window.mozRequestAnimationFrame || setTimeout;
          } else {
            DEFAULT_SCHEDULE_FUNCTION = setTimeout;
          }

          function noop() {} // NOOP!

          /**
           * Handy shortcut for doing a for-in loop. This is not a "normal" each
           * function, it is optimized for Shifty.  The iterator function only receives
           * the property name, not the value.
           * @param {Object} obj
           * @param {Function(string)} fn
           * @private
           */


          function each(obj, fn) {
            var key;

            for (key in obj) {
              if (Object.hasOwnProperty.call(obj, key)) {
                fn(key);
              }
            }
          }
          /**
           * Perform a shallow copy of Object properties.
           * @param {Object} targetObject The object to copy into
           * @param {Object} srcObject The object to copy from
           * @return {Object} A reference to the augmented `targetObj` Object
           * @private
           */


          function shallowCopy(targetObj, srcObj) {
            each(srcObj, function (prop) {
              targetObj[prop] = srcObj[prop];
            });
            return targetObj;
          }
          /**
           * Copies each property from src onto target, but only if the property to
           * copy to target is undefined.
           * @param {Object} target Missing properties in this Object are filled in
           * @param {Object} src
           * @private
           */


          function defaults(target, src) {
            each(src, function (prop) {
              if (typeof target[prop] === "undefined") {
                target[prop] = src[prop];
              }
            });
          }
          /**
           * Calculates the interpolated tween values of an Object for a given
           * timestamp.
           * @param {Number} forPosition The position to compute the state for.
           * @param {Object} currentState Current state properties.
           * @param {Object} originalState: The original state properties the Object is
           * tweening from.
           * @param {Object} targetState: The destination state properties the Object
           * is tweening to.
           * @param {number} duration: The length of the tween in milliseconds.
           * @param {number} timestamp: The UNIX epoch time at which the tween began.
           * @param {Object} easing: This Object's keys must correspond to the keys in
           * targetState.
           * @private
           */


          function tweenProps(forPosition, currentState, originalState, targetState, duration, timestamp, easing) {
            var normalizedPosition = forPosition < timestamp ? 0 : (forPosition - timestamp) / duration;
            var prop;
            var easingObjectProp;
            var easingFn;

            for (prop in currentState) {
              if (currentState.hasOwnProperty(prop)) {
                easingObjectProp = easing[prop];
                easingFn = typeof easingObjectProp === "function" ? easingObjectProp : formula[easingObjectProp];
                currentState[prop] = tweenProp(originalState[prop], targetState[prop], easingFn, normalizedPosition);
              }
            }

            return currentState;
          }
          /**
           * Tweens a single property.
           * @param {number} start The value that the tween started from.
           * @param {number} end The value that the tween should end at.
           * @param {Function} easingFunc The easing curve to apply to the tween.
           * @param {number} position The normalized position (between 0.0 and 1.0) to
           * calculate the midpoint of 'start' and 'end' against.
           * @return {number} The tweened value.
           * @private
           */


          function tweenProp(start, end, easingFunc, position) {
            return start + (end - start) * easingFunc(position);
          }
          /**
           * Applies a filter to Tweenable instance.
           * @param {Tweenable} tweenable The `Tweenable` instance to call the filter
           * upon.
           * @param {String} filterName The name of the filter to apply.
           * @private
           */


          function applyFilter(tweenable, filterName) {
            var filters = Tweenable.prototype.filter;
            var args = tweenable._filterArgs;
            each(filters, function (name) {
              if (typeof filters[name][filterName] !== "undefined") {
                filters[name][filterName].apply(tweenable, args);
              }
            });
          }

          var timeoutHandler_endTime;
          var timeoutHandler_currentTime;
          var timeoutHandler_isEnded;
          var timeoutHandler_offset;
          /**
           * Handles the update logic for one step of a tween.
           * @param {Tweenable} tweenable
           * @param {number} timestamp
           * @param {number} delay
           * @param {number} duration
           * @param {Object} currentState
           * @param {Object} originalState
           * @param {Object} targetState
           * @param {Object} easing
           * @param {Function(Object, *, number)} step
           * @param {Function(Function,number)}} schedule
           * @param {number=} opt_currentTimeOverride Needed for accurate timestamp in
           * Tweenable#seek.
           * @private
           */

          function timeoutHandler(tweenable, timestamp, delay, duration, currentState, originalState, targetState, easing, step, schedule, opt_currentTimeOverride) {
            timeoutHandler_endTime = timestamp + delay + duration;
            timeoutHandler_currentTime = Math.min(opt_currentTimeOverride || now(), timeoutHandler_endTime);
            timeoutHandler_isEnded = timeoutHandler_currentTime >= timeoutHandler_endTime;
            timeoutHandler_offset = duration - (timeoutHandler_endTime - timeoutHandler_currentTime);

            if (tweenable.isPlaying()) {
              if (timeoutHandler_isEnded) {
                step(targetState, tweenable._attachment, timeoutHandler_offset);
                tweenable.stop(true);
              } else {
                tweenable._scheduleId = schedule(tweenable._timeoutHandler, UPDATE_TIME);
                applyFilter(tweenable, "beforeTween"); // If the animation has not yet reached the start point (e.g., there was
                // delay that has not yet completed), just interpolate the starting
                // position of the tween.

                if (timeoutHandler_currentTime < timestamp + delay) {
                  tweenProps(1, currentState, originalState, targetState, 1, 1, easing);
                } else {
                  tweenProps(timeoutHandler_currentTime, currentState, originalState, targetState, duration, timestamp + delay, easing);
                }

                applyFilter(tweenable, "afterTween");
                step(currentState, tweenable._attachment, timeoutHandler_offset);
              }
            }
          }
          /**
           * Creates a usable easing Object from a string, a function or another easing
           * Object.  If `easing` is an Object, then this function clones it and fills
           * in the missing properties with `"linear"`.
           * @param {Object.<string|Function>} fromTweenParams
           * @param {Object|string|Function} easing
           * @return {Object.<string|Function>}
           * @private
           */


          function composeEasingObject(fromTweenParams, easing) {
            var composedEasing = {};
            var typeofEasing = typeof easing;

            if (typeofEasing === "string" || typeofEasing === "function") {
              each(fromTweenParams, function (prop) {
                composedEasing[prop] = easing;
              });
            } else {
              each(fromTweenParams, function (prop) {
                if (!composedEasing[prop]) {
                  composedEasing[prop] = easing[prop] || DEFAULT_EASING;
                }
              });
            }

            return composedEasing;
          }
          /**
           * Tweenable constructor.
           * @class Tweenable
           * @param {Object=} opt_initialState The values that the initial tween should
           * start at if a `from` object is not provided to `{{#crossLink
           * "Tweenable/tween:method"}}{{/crossLink}}` or `{{#crossLink
           * "Tweenable/setConfig:method"}}{{/crossLink}}`.
           * @param {Object=} opt_config Configuration object to be passed to
           * `{{#crossLink "Tweenable/setConfig:method"}}{{/crossLink}}`.
           * @module Tweenable
           * @constructor
           */


          function Tweenable(opt_initialState, opt_config) {
            this._currentState = opt_initialState || {};
            this._configured = false;
            this._scheduleFunction = DEFAULT_SCHEDULE_FUNCTION; // To prevent unnecessary calls to setConfig do not set default
            // configuration here.  Only set default configuration immediately before
            // tweening if none has been set.

            if (typeof opt_config !== "undefined") {
              this.setConfig(opt_config);
            }
          }
          /**
           * Configure and start a tween.
           * @method tween
           * @param {Object=} opt_config Configuration object to be passed to
           * `{{#crossLink "Tweenable/setConfig:method"}}{{/crossLink}}`.
           * @chainable
           */


          Tweenable.prototype.tween = function (opt_config) {
            if (this._isTweening) {
              return this;
            } // Only set default config if no configuration has been set previously and
            // none is provided now.


            if (opt_config !== undefined || !this._configured) {
              this.setConfig(opt_config);
            }

            this._timestamp = now();

            this._start(this.get(), this._attachment);

            return this.resume();
          };
          /**
           * Configure a tween that will start at some point in the future.
           *
           * @method setConfig
           * @param {Object} config The following values are valid:
           * - __from__ (_Object=_): Starting position.  If omitted, `{{#crossLink
           *   "Tweenable/get:method"}}get(){{/crossLink}}` is used.
           * - __to__ (_Object=_): Ending position.
           * - __duration__ (_number=_): How many milliseconds to animate for.
           * - __delay__ (_delay=_): How many milliseconds to wait before starting the
           *   tween.
           * - __start__ (_Function(Object, *)_): Function to execute when the tween
           *   begins.  Receives the state of the tween as the first parameter and
           *   `attachment` as the second parameter.
           * - __step__ (_Function(Object, *, number)_): Function to execute on every
           *   tick.  Receives `{{#crossLink
           *   "Tweenable/get:method"}}get(){{/crossLink}}` as the first parameter,
           *   `attachment` as the second parameter, and the time elapsed since the
           *   start of the tween as the third. This function is not called on the
           *   final step of the animation, but `finish` is.
           * - __finish__ (_Function(Object, *)_): Function to execute upon tween
           *   completion.  Receives the state of the tween as the first parameter and
           *   `attachment` as the second parameter.
           * - __easing__ (_Object.<string|Function>|string|Function=_): Easing curve
           *   name(s) or function(s) to use for the tween.
           * - __attachment__ (_*_): Cached value that is passed to the
           *   `step`/`start`/`finish` methods.
           * @chainable
           */


          Tweenable.prototype.setConfig = function (config) {
            config = config || {};
            this._configured = true; // Attach something to this Tweenable instance (e.g.: a DOM element, an
            // object, a string, etc.);

            this._attachment = config.attachment; // Init the internal state

            this._pausedAtTime = null;
            this._scheduleId = null;
            this._delay = config.delay || 0;
            this._start = config.start || noop;
            this._step = config.step || noop;
            this._finish = config.finish || noop;
            this._duration = config.duration || DEFAULT_DURATION;
            this._currentState = shallowCopy({}, config.from || this.get());
            this._originalState = this.get();
            this._targetState = shallowCopy({}, config.to || this.get());
            var self = this;

            this._timeoutHandler = function () {
              timeoutHandler(self, self._timestamp, self._delay, self._duration, self._currentState, self._originalState, self._targetState, self._easing, self._step, self._scheduleFunction);
            }; // Aliases used below


            var currentState = this._currentState;
            var targetState = this._targetState; // Ensure that there is always something to tween to.

            defaults(targetState, currentState);
            this._easing = composeEasingObject(currentState, config.easing || DEFAULT_EASING);
            this._filterArgs = [currentState, this._originalState, targetState, this._easing];
            applyFilter(this, "tweenCreated");
            return this;
          };
          /**
           * @method get
           * @return {Object} The current state.
           */


          Tweenable.prototype.get = function () {
            return shallowCopy({}, this._currentState);
          };
          /**
           * @method set
           * @param {Object} state The current state.
           */


          Tweenable.prototype.set = function (state) {
            this._currentState = state;
          };
          /**
           * Pause a tween.  Paused tweens can be resumed from the point at which they
           * were paused.  This is different from `{{#crossLink
           * "Tweenable/stop:method"}}{{/crossLink}}`, as that method
           * causes a tween to start over when it is resumed.
           * @method pause
           * @chainable
           */


          Tweenable.prototype.pause = function () {
            this._pausedAtTime = now();
            this._isPaused = true;
            return this;
          };
          /**
           * Resume a paused tween.
           * @method resume
           * @chainable
           */


          Tweenable.prototype.resume = function () {
            if (this._isPaused) {
              this._timestamp += now() - this._pausedAtTime;
            }

            this._isPaused = false;
            this._isTweening = true;

            this._timeoutHandler();

            return this;
          };
          /**
           * Move the state of the animation to a specific point in the tween's
           * timeline.  If the animation is not running, this will cause the `step`
           * handlers to be called.
           * @method seek
           * @param {millisecond} millisecond The millisecond of the animation to seek
           * to.  This must not be less than `0`.
           * @chainable
           */


          Tweenable.prototype.seek = function (millisecond) {
            millisecond = Math.max(millisecond, 0);
            var currentTime = now();

            if (this._timestamp + millisecond === 0) {
              return this;
            }

            this._timestamp = currentTime - millisecond;

            if (!this.isPlaying()) {
              this._isTweening = true;
              this._isPaused = false; // If the animation is not running, call timeoutHandler to make sure that
              // any step handlers are run.

              timeoutHandler(this, this._timestamp, this._delay, this._duration, this._currentState, this._originalState, this._targetState, this._easing, this._step, this._scheduleFunction, currentTime);
              this.pause();
            }

            return this;
          };
          /**
           * Stops and cancels a tween.
           * @param {boolean=} gotoEnd If `false` or omitted, the tween just stops at
           * its current state, and the `finish` handler is not invoked.  If `true`,
           * the tweened object's values are instantly set to the target values, and
           * `finish` is invoked.
           * @method stop
           * @chainable
           */


          Tweenable.prototype.stop = function (gotoEnd) {
            this._isTweening = false;
            this._isPaused = false;
            this._timeoutHandler = noop;
            (root.cancelAnimationFrame || root.webkitCancelAnimationFrame || root.oCancelAnimationFrame || root.msCancelAnimationFrame || root.mozCancelRequestAnimationFrame || root.clearTimeout)(this._scheduleId);

            if (gotoEnd) {
              applyFilter(this, "beforeTween");
              tweenProps(1, this._currentState, this._originalState, this._targetState, 1, 0, this._easing);
              applyFilter(this, "afterTween");
              applyFilter(this, "afterTweenEnd");

              this._finish.call(this, this._currentState, this._attachment);
            }

            return this;
          };
          /**
           * @method isPlaying
           * @return {boolean} Whether or not a tween is running.
           */


          Tweenable.prototype.isPlaying = function () {
            return this._isTweening && !this._isPaused;
          };
          /**
           * Set a custom schedule function.
           *
           * If a custom function is not set,
           * [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/window.requestAnimationFrame)
           * is used if available, otherwise
           * [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/Window.setTimeout)
           * is used.
           * @method setScheduleFunction
           * @param {Function(Function,number)} scheduleFunction The function to be
           * used to schedule the next frame to be rendered.
           */


          Tweenable.prototype.setScheduleFunction = function (scheduleFunction) {
            this._scheduleFunction = scheduleFunction;
          };
          /**
           * `delete` all "own" properties.  Call this when the `Tweenable` instance
           * is no longer needed to free memory.
           * @method dispose
           */


          Tweenable.prototype.dispose = function () {
            var prop;

            for (prop in this) {
              if (this.hasOwnProperty(prop)) {
                delete this[prop];
              }
            }
          };
          /**
           * Filters are used for transforming the properties of a tween at various
           * points in a Tweenable's life cycle.  See the README for more info on this.
           * @private
           */


          Tweenable.prototype.filter = {};
          /**
           * This object contains all of the tweens available to Shifty.  It is
           * extensible - simply attach properties to the `Tweenable.prototype.formula`
           * Object following the same format as `linear`.
           *
           * `pos` should be a normalized `number` (between 0 and 1).
           * @property formula
           * @type {Object(function)}
           */

          Tweenable.prototype.formula = {
            linear: function (pos) {
              return pos;
            }
          };
          formula = Tweenable.prototype.formula;
          shallowCopy(Tweenable, {
            now: now,
            each: each,
            tweenProps: tweenProps,
            tweenProp: tweenProp,
            applyFilter: applyFilter,
            shallowCopy: shallowCopy,
            defaults: defaults,
            composeEasingObject: composeEasingObject
          }); // `root` is provided in the intro/outro files.
          // A hook used for unit testing.

          if (typeof SHIFTY_DEBUG_NOW === "function") {
            root.timeoutHandler = timeoutHandler;
          } // Bootstrap Tweenable appropriately for the environment.


          if (typeof exports === "object") {
            // CommonJS
            module.exports = Tweenable;
          } else if (typeof define === "function" && define.amd) {
            // AMD
            define(function () {
              return Tweenable;
            });
          } else if (typeof root.Tweenable === "undefined") {
            // Browser: Make `Tweenable` globally accessible.
            root.Tweenable = Tweenable;
          }

          return Tweenable;
        }();
        /*!
         * All equations are adapted from Thomas Fuchs'
         * [Scripty2](https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/penner.js).
         *
         * Based on Easing Equations (c) 2003 [Robert
         * Penner](http://www.robertpenner.com/), all rights reserved. This work is
         * [subject to terms](http://www.robertpenner.com/easing_terms_of_use.html).
         */

        /*!
         *  TERMS OF USE - EASING EQUATIONS
         *  Open source under the BSD License.
         *  Easing Equations (c) 2003 Robert Penner, all rights reserved.
         */


        (function () {
          Tweenable.shallowCopy(Tweenable.prototype.formula, {
            easeInQuad: function (pos) {
              return Math.pow(pos, 2);
            },
            easeOutQuad: function (pos) {
              return -(Math.pow(pos - 1, 2) - 1);
            },
            easeInOutQuad: function (pos) {
              if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(pos, 2);
              }

              return -0.5 * ((pos -= 2) * pos - 2);
            },
            easeInCubic: function (pos) {
              return Math.pow(pos, 3);
            },
            easeOutCubic: function (pos) {
              return Math.pow(pos - 1, 3) + 1;
            },
            easeInOutCubic: function (pos) {
              if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(pos, 3);
              }

              return 0.5 * (Math.pow(pos - 2, 3) + 2);
            },
            easeInQuart: function (pos) {
              return Math.pow(pos, 4);
            },
            easeOutQuart: function (pos) {
              return -(Math.pow(pos - 1, 4) - 1);
            },
            easeInOutQuart: function (pos) {
              if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(pos, 4);
              }

              return -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);
            },
            easeInQuint: function (pos) {
              return Math.pow(pos, 5);
            },
            easeOutQuint: function (pos) {
              return Math.pow(pos - 1, 5) + 1;
            },
            easeInOutQuint: function (pos) {
              if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(pos, 5);
              }

              return 0.5 * (Math.pow(pos - 2, 5) + 2);
            },
            easeInSine: function (pos) {
              return -Math.cos(pos * (Math.PI / 2)) + 1;
            },
            easeOutSine: function (pos) {
              return Math.sin(pos * (Math.PI / 2));
            },
            easeInOutSine: function (pos) {
              return -0.5 * (Math.cos(Math.PI * pos) - 1);
            },
            easeInExpo: function (pos) {
              return pos === 0 ? 0 : Math.pow(2, 10 * (pos - 1));
            },
            easeOutExpo: function (pos) {
              return pos === 1 ? 1 : -Math.pow(2, -10 * pos) + 1;
            },
            easeInOutExpo: function (pos) {
              if (pos === 0) {
                return 0;
              }

              if (pos === 1) {
                return 1;
              }

              if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(2, 10 * (pos - 1));
              }

              return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
            },
            easeInCirc: function (pos) {
              return -(Math.sqrt(1 - pos * pos) - 1);
            },
            easeOutCirc: function (pos) {
              return Math.sqrt(1 - Math.pow(pos - 1, 2));
            },
            easeInOutCirc: function (pos) {
              if ((pos /= 0.5) < 1) {
                return -0.5 * (Math.sqrt(1 - pos * pos) - 1);
              }

              return 0.5 * (Math.sqrt(1 - (pos -= 2) * pos) + 1);
            },
            easeOutBounce: function (pos) {
              if (pos < 1 / 2.75) {
                return 7.5625 * pos * pos;
              } else if (pos < 2 / 2.75) {
                return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
              } else if (pos < 2.5 / 2.75) {
                return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
              } else {
                return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
              }
            },
            easeInBack: function (pos) {
              var s = 1.70158;
              return pos * pos * ((s + 1) * pos - s);
            },
            easeOutBack: function (pos) {
              var s = 1.70158;
              return (pos = pos - 1) * pos * ((s + 1) * pos + s) + 1;
            },
            easeInOutBack: function (pos) {
              var s = 1.70158;

              if ((pos /= 0.5) < 1) {
                return 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s));
              }

              return 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
            },
            elastic: function (pos) {
              // jshint maxlen:90
              return -1 * Math.pow(4, -8 * pos) * Math.sin((pos * 6 - 1) * (2 * Math.PI) / 2) + 1;
            },
            swingFromTo: function (pos) {
              var s = 1.70158;
              return (pos /= 0.5) < 1 ? 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s)) : 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
            },
            swingFrom: function (pos) {
              var s = 1.70158;
              return pos * pos * ((s + 1) * pos - s);
            },
            swingTo: function (pos) {
              var s = 1.70158;
              return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
            },
            bounce: function (pos) {
              if (pos < 1 / 2.75) {
                return 7.5625 * pos * pos;
              } else if (pos < 2 / 2.75) {
                return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
              } else if (pos < 2.5 / 2.75) {
                return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
              } else {
                return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
              }
            },
            bouncePast: function (pos) {
              if (pos < 1 / 2.75) {
                return 7.5625 * pos * pos;
              } else if (pos < 2 / 2.75) {
                return 2 - (7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75);
              } else if (pos < 2.5 / 2.75) {
                return 2 - (7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375);
              } else {
                return 2 - (7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375);
              }
            },
            easeFromTo: function (pos) {
              if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(pos, 4);
              }

              return -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);
            },
            easeFrom: function (pos) {
              return Math.pow(pos, 4);
            },
            easeTo: function (pos) {
              return Math.pow(pos, 0.25);
            }
          });
        })(); // jshint maxlen:100

        /**
         * The Bezier magic in this file is adapted/copied almost wholesale from
         * [Scripty2](https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/cubic-bezier.js),
         * which was adapted from Apple code (which probably came from
         * [here](http://opensource.apple.com/source/WebCore/WebCore-955.66/platform/graphics/UnitBezier.h)).
         * Special thanks to Apple and Thomas Fuchs for much of this code.
         */

        /**
         *  Copyright (c) 2006 Apple Computer, Inc. All rights reserved.
         *
         *  Redistribution and use in source and binary forms, with or without
         *  modification, are permitted provided that the following conditions are met:
         *
         *  1. Redistributions of source code must retain the above copyright notice,
         *  this list of conditions and the following disclaimer.
         *
         *  2. Redistributions in binary form must reproduce the above copyright notice,
         *  this list of conditions and the following disclaimer in the documentation
         *  and/or other materials provided with the distribution.
         *
         *  3. Neither the name of the copyright holder(s) nor the names of any
         *  contributors may be used to endorse or promote products derived from
         *  this software without specific prior written permission.
         *
         *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
         *  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
         *  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
         *  ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
         *  LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
         *  CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
         *  SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
         *  INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
         *  CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
         *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
         *  POSSIBILITY OF SUCH DAMAGE.
         */


        (function () {
          // port of webkit cubic bezier handling by http://www.netzgesta.de/dev/
          function cubicBezierAtTime(t, p1x, p1y, p2x, p2y, duration) {
            var ax = 0,
                bx = 0,
                cx = 0,
                ay = 0,
                by = 0,
                cy = 0;

            function sampleCurveX(t) {
              return ((ax * t + bx) * t + cx) * t;
            }

            function sampleCurveY(t) {
              return ((ay * t + by) * t + cy) * t;
            }

            function sampleCurveDerivativeX(t) {
              return (3.0 * ax * t + 2.0 * bx) * t + cx;
            }

            function solveEpsilon(duration) {
              return 1.0 / (200.0 * duration);
            }

            function solve(x, epsilon) {
              return sampleCurveY(solveCurveX(x, epsilon));
            }

            function fabs(n) {
              if (n >= 0) {
                return n;
              } else {
                return 0 - n;
              }
            }

            function solveCurveX(x, epsilon) {
              var t0, t1, t2, x2, d2, i;

              for (t2 = x, i = 0; i < 8; i++) {
                x2 = sampleCurveX(t2) - x;

                if (fabs(x2) < epsilon) {
                  return t2;
                }

                d2 = sampleCurveDerivativeX(t2);

                if (fabs(d2) < 1e-6) {
                  break;
                }

                t2 = t2 - x2 / d2;
              }

              t0 = 0.0;
              t1 = 1.0;
              t2 = x;

              if (t2 < t0) {
                return t0;
              }

              if (t2 > t1) {
                return t1;
              }

              while (t0 < t1) {
                x2 = sampleCurveX(t2);

                if (fabs(x2 - x) < epsilon) {
                  return t2;
                }

                if (x > x2) {
                  t0 = t2;
                } else {
                  t1 = t2;
                }

                t2 = (t1 - t0) * 0.5 + t0;
              }

              return t2; // Failure.
            }

            cx = 3.0 * p1x;
            bx = 3.0 * (p2x - p1x) - cx;
            ax = 1.0 - cx - bx;
            cy = 3.0 * p1y;
            by = 3.0 * (p2y - p1y) - cy;
            ay = 1.0 - cy - by;
            return solve(t, solveEpsilon(duration));
          }
          /**
           *  getCubicBezierTransition(x1, y1, x2, y2) -> Function
           *
           *  Generates a transition easing function that is compatible
           *  with WebKit's CSS transitions `-webkit-transition-timing-function`
           *  CSS property.
           *
           *  The W3C has more information about CSS3 transition timing functions:
           *  http://www.w3.org/TR/css3-transitions/#transition-timing-function_tag
           *
           *  @param {number} x1
           *  @param {number} y1
           *  @param {number} x2
           *  @param {number} y2
           *  @return {function}
           *  @private
           */


          function getCubicBezierTransition(x1, y1, x2, y2) {
            return function (pos) {
              return cubicBezierAtTime(pos, x1, y1, x2, y2, 1);
            };
          } // End ported code

          /**
           * Create a Bezier easing function and attach it to `{{#crossLink
           * "Tweenable/formula:property"}}Tweenable#formula{{/crossLink}}`.  This
           * function gives you total control over the easing curve.  Matthew Lein's
           * [Ceaser](http://matthewlein.com/ceaser/) is a useful tool for visualizing
           * the curves you can make with this function.
           * @method setBezierFunction
           * @param {string} name The name of the easing curve.  Overwrites the old
           * easing function on `{{#crossLink
           * "Tweenable/formula:property"}}Tweenable#formula{{/crossLink}}` if it
           * exists.
           * @param {number} x1
           * @param {number} y1
           * @param {number} x2
           * @param {number} y2
           * @return {function} The easing function that was attached to
           * Tweenable.prototype.formula.
           */


          Tweenable.setBezierFunction = function (name, x1, y1, x2, y2) {
            var cubicBezierTransition = getCubicBezierTransition(x1, y1, x2, y2);
            cubicBezierTransition.displayName = name;
            cubicBezierTransition.x1 = x1;
            cubicBezierTransition.y1 = y1;
            cubicBezierTransition.x2 = x2;
            cubicBezierTransition.y2 = y2;
            return Tweenable.prototype.formula[name] = cubicBezierTransition;
          };
          /**
           * `delete` an easing function from `{{#crossLink
           * "Tweenable/formula:property"}}Tweenable#formula{{/crossLink}}`.  Be
           * careful with this method, as it `delete`s whatever easing formula matches
           * `name` (which means you can delete standard Shifty easing functions).
           * @method unsetBezierFunction
           * @param {string} name The name of the easing function to delete.
           * @return {function}
           */


          Tweenable.unsetBezierFunction = function (name) {
            delete Tweenable.prototype.formula[name];
          };
        })();

        (function () {
          function getInterpolatedValues(from, current, targetState, position, easing, delay) {
            return Tweenable.tweenProps(position, current, from, targetState, 1, delay, easing);
          } // Fake a Tweenable and patch some internals.  This approach allows us to
          // skip uneccessary processing and object recreation, cutting down on garbage
          // collection pauses.


          var mockTweenable = new Tweenable();
          mockTweenable._filterArgs = [];
          /**
           * Compute the midpoint of two Objects.  This method effectively calculates a
           * specific frame of animation that `{{#crossLink
           * "Tweenable/tween:method"}}{{/crossLink}}` does many times over the course
           * of a full tween.
           *
           *     var interpolatedValues = Tweenable.interpolate({
           *       width: '100px',
           *       opacity: 0,
           *       color: '#fff'
           *     }, {
           *       width: '200px',
           *       opacity: 1,
           *       color: '#000'
           *     }, 0.5);
           *
           *     console.log(interpolatedValues);
           *     // {opacity: 0.5, width: "150px", color: "rgb(127,127,127)"}
           *
           * @static
           * @method interpolate
           * @param {Object} from The starting values to tween from.
           * @param {Object} targetState The ending values to tween to.
           * @param {number} position The normalized position value (between `0.0` and
           * `1.0`) to interpolate the values between `from` and `to` for.  `from`
           * represents `0` and `to` represents `1`.
           * @param {Object.<string|Function>|string|Function} easing The easing
           * curve(s) to calculate the midpoint against.  You can reference any easing
           * function attached to `Tweenable.prototype.formula`, or provide the easing
           * function(s) directly.  If omitted, this defaults to "linear".
           * @param {number=} opt_delay Optional delay to pad the beginning of the
           * interpolated tween with.  This increases the range of `position` from (`0`
           * through `1`) to (`0` through `1 + opt_delay`).  So, a delay of `0.5` would
           * increase all valid values of `position` to numbers between `0` and `1.5`.
           * @return {Object}
           */

          Tweenable.interpolate = function (from, targetState, position, easing, opt_delay) {
            var current = Tweenable.shallowCopy({}, from);
            var delay = opt_delay || 0;
            var easingObject = Tweenable.composeEasingObject(from, easing || "linear");
            mockTweenable.set({}); // Alias and reuse the _filterArgs array instead of recreating it.

            var filterArgs = mockTweenable._filterArgs;
            filterArgs.length = 0;
            filterArgs[0] = current;
            filterArgs[1] = from;
            filterArgs[2] = targetState;
            filterArgs[3] = easingObject; // Any defined value transformation must be applied

            Tweenable.applyFilter(mockTweenable, "tweenCreated");
            Tweenable.applyFilter(mockTweenable, "beforeTween");
            var interpolatedValues = getInterpolatedValues(from, current, targetState, position, easingObject, delay); // Transform values back into their original format

            Tweenable.applyFilter(mockTweenable, "afterTween");
            return interpolatedValues;
          };
        })();
        /**
         * This module adds string interpolation support to Shifty.
         *
         * The Token extension allows Shifty to tween numbers inside of strings.  Among
         * other things, this allows you to animate CSS properties.  For example, you
         * can do this:
         *
         *     var tweenable = new Tweenable();
         *     tweenable.tween({
         *       from: { transform: 'translateX(45px)' },
         *       to: { transform: 'translateX(90xp)' }
         *     });
         *
         * `translateX(45)` will be tweened to `translateX(90)`.  To demonstrate:
         *
         *     var tweenable = new Tweenable();
         *     tweenable.tween({
         *       from: { transform: 'translateX(45px)' },
         *       to: { transform: 'translateX(90px)' },
         *       step: function (state) {
         *         console.log(state.transform);
         *       }
         *     });
         *
         * The above snippet will log something like this in the console:
         *
         *     translateX(60.3px)
         *     ...
         *     translateX(76.05px)
         *     ...
         *     translateX(90px)
         *
         * Another use for this is animating colors:
         *
         *     var tweenable = new Tweenable();
         *     tweenable.tween({
         *       from: { color: 'rgb(0,255,0)' },
         *       to: { color: 'rgb(255,0,255)' },
         *       step: function (state) {
         *         console.log(state.color);
         *       }
         *     });
         *
         * The above snippet will log something like this:
         *
         *     rgb(84,170,84)
         *     ...
         *     rgb(170,84,170)
         *     ...
         *     rgb(255,0,255)
         *
         * This extension also supports hexadecimal colors, in both long (`#ff00ff`)
         * and short (`#f0f`) forms.  Be aware that hexadecimal input values will be
         * converted into the equivalent RGB output values.  This is done to optimize
         * for performance.
         *
         *     var tweenable = new Tweenable();
         *     tweenable.tween({
         *       from: { color: '#0f0' },
         *       to: { color: '#f0f' },
         *       step: function (state) {
         *         console.log(state.color);
         *       }
         *     });
         *
         * This snippet will generate the same output as the one before it because
         * equivalent values were supplied (just in hexadecimal form rather than RGB):
         *
         *     rgb(84,170,84)
         *     ...
         *     rgb(170,84,170)
         *     ...
         *     rgb(255,0,255)
         *
         * ## Easing support
         *
         * Easing works somewhat differently in the Token extension.  This is because
         * some CSS properties have multiple values in them, and you might need to
         * tween each value along its own easing curve.  A basic example:
         *
         *     var tweenable = new Tweenable();
         *     tweenable.tween({
         *       from: { transform: 'translateX(0px) translateY(0px)' },
         *       to: { transform:   'translateX(100px) translateY(100px)' },
         *       easing: { transform: 'easeInQuad' },
         *       step: function (state) {
         *         console.log(state.transform);
         *       }
         *     });
         *
         * The above snippet will create values like this:
         *
         *     translateX(11.56px) translateY(11.56px)
         *     ...
         *     translateX(46.24px) translateY(46.24px)
         *     ...
         *     translateX(100px) translateY(100px)
         *
         * In this case, the values for `translateX` and `translateY` are always the
         * same for each step of the tween, because they have the same start and end
         * points and both use the same easing curve.  We can also tween `translateX`
         * and `translateY` along independent curves:
         *
         *     var tweenable = new Tweenable();
         *     tweenable.tween({
         *       from: { transform: 'translateX(0px) translateY(0px)' },
         *       to: { transform:   'translateX(100px) translateY(100px)' },
         *       easing: { transform: 'easeInQuad bounce' },
         *       step: function (state) {
         *         console.log(state.transform);
         *       }
         *     });
         *
         * The above snippet will create values like this:
         *
         *     translateX(10.89px) translateY(82.35px)
         *     ...
         *     translateX(44.89px) translateY(86.73px)
         *     ...
         *     translateX(100px) translateY(100px)
         *
         * `translateX` and `translateY` are not in sync anymore, because `easeInQuad`
         * was specified for `translateX` and `bounce` for `translateY`.  Mixing and
         * matching easing curves can make for some interesting motion in your
         * animations.
         *
         * The order of the space-separated easing curves correspond the token values
         * they apply to.  If there are more token values than easing curves listed,
         * the last easing curve listed is used.
         * @submodule Tweenable.token
         */
        // token function is defined above only so that dox-foundation sees it as
        // documentation and renders it.  It is never used, and is optimized away at
        // build time.


        (function (Tweenable) {
          /**
           * @typedef {{
           *   formatString: string
           *   chunkNames: Array.<string>
           * }}
           * @private
           */
          var formatManifest; // CONSTANTS

          var R_NUMBER_COMPONENT = /(\d|\-|\.)/;
          var R_FORMAT_CHUNKS = /([^\-0-9\.]+)/g;
          var R_UNFORMATTED_VALUES = /[0-9.\-]+/g;
          var R_RGB = new RegExp("rgb\\(" + R_UNFORMATTED_VALUES.source + /,\s*/.source + R_UNFORMATTED_VALUES.source + /,\s*/.source + R_UNFORMATTED_VALUES.source + "\\)", "g");
          var R_RGB_PREFIX = /^.*\(/;
          var R_HEX = /#([0-9]|[a-f]){3,6}/gi;
          var VALUE_PLACEHOLDER = "VAL"; // HELPERS

          /**
           * @param {Array.number} rawValues
           * @param {string} prefix
           *
           * @return {Array.<string>}
           * @private
           */

          function getFormatChunksFrom(rawValues, prefix) {
            var accumulator = [];
            var rawValuesLength = rawValues.length;
            var i;

            for (i = 0; i < rawValuesLength; i++) {
              accumulator.push("_" + prefix + "_" + i);
            }

            return accumulator;
          }
          /**
           * @param {string} formattedString
           *
           * @return {string}
           * @private
           */


          function getFormatStringFrom(formattedString) {
            var chunks = formattedString.match(R_FORMAT_CHUNKS);

            if (!chunks) {
              // chunks will be null if there were no tokens to parse in
              // formattedString (for example, if formattedString is '2').  Coerce
              // chunks to be useful here.
              chunks = ["", ""]; // If there is only one chunk, assume that the string is a number
              // followed by a token...
              // NOTE: This may be an unwise assumption.
            } else if (chunks.length === 1 || // ...or if the string starts with a number component (".", "-", or a
            // digit)...
            formattedString.charAt(0).match(R_NUMBER_COMPONENT)) {
              // ...prepend an empty string here to make sure that the formatted number
              // is properly replaced by VALUE_PLACEHOLDER
              chunks.unshift("");
            }

            return chunks.join(VALUE_PLACEHOLDER);
          }
          /**
           * Convert all hex color values within a string to an rgb string.
           *
           * @param {Object} stateObject
           *
           * @return {Object} The modified obj
           * @private
           */


          function sanitizeObjectForHexProps(stateObject) {
            Tweenable.each(stateObject, function (prop) {
              var currentProp = stateObject[prop];

              if (typeof currentProp === "string" && currentProp.match(R_HEX)) {
                stateObject[prop] = sanitizeHexChunksToRGB(currentProp);
              }
            });
          }
          /**
           * @param {string} str
           *
           * @return {string}
           * @private
           */


          function sanitizeHexChunksToRGB(str) {
            return filterStringChunks(R_HEX, str, convertHexToRGB);
          }
          /**
           * @param {string} hexString
           *
           * @return {string}
           * @private
           */


          function convertHexToRGB(hexString) {
            var rgbArr = hexToRGBArray(hexString);
            return "rgb(" + rgbArr[0] + "," + rgbArr[1] + "," + rgbArr[2] + ")";
          }

          var hexToRGBArray_returnArray = [];
          /**
           * Convert a hexadecimal string to an array with three items, one each for
           * the red, blue, and green decimal values.
           *
           * @param {string} hex A hexadecimal string.
           *
           * @returns {Array.<number>} The converted Array of RGB values if `hex` is a
           * valid string, or an Array of three 0's.
           * @private
           */

          function hexToRGBArray(hex) {
            hex = hex.replace(/#/, ""); // If the string is a shorthand three digit hex notation, normalize it to
            // the standard six digit notation

            if (hex.length === 3) {
              hex = hex.split("");
              hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
            }

            hexToRGBArray_returnArray[0] = hexToDec(hex.substr(0, 2));
            hexToRGBArray_returnArray[1] = hexToDec(hex.substr(2, 2));
            hexToRGBArray_returnArray[2] = hexToDec(hex.substr(4, 2));
            return hexToRGBArray_returnArray;
          }
          /**
           * Convert a base-16 number to base-10.
           *
           * @param {Number|String} hex The value to convert
           *
           * @returns {Number} The base-10 equivalent of `hex`.
           * @private
           */


          function hexToDec(hex) {
            return parseInt(hex, 16);
          }
          /**
           * Runs a filter operation on all chunks of a string that match a RegExp
           *
           * @param {RegExp} pattern
           * @param {string} unfilteredString
           * @param {function(string)} filter
           *
           * @return {string}
           * @private
           */


          function filterStringChunks(pattern, unfilteredString, filter) {
            var pattenMatches = unfilteredString.match(pattern);
            var filteredString = unfilteredString.replace(pattern, VALUE_PLACEHOLDER);

            if (pattenMatches) {
              var pattenMatchesLength = pattenMatches.length;
              var currentChunk;

              for (var i = 0; i < pattenMatchesLength; i++) {
                currentChunk = pattenMatches.shift();
                filteredString = filteredString.replace(VALUE_PLACEHOLDER, filter(currentChunk));
              }
            }

            return filteredString;
          }
          /**
           * Check for floating point values within rgb strings and rounds them.
           *
           * @param {string} formattedString
           *
           * @return {string}
           * @private
           */


          function sanitizeRGBChunks(formattedString) {
            return filterStringChunks(R_RGB, formattedString, sanitizeRGBChunk);
          }
          /**
           * @param {string} rgbChunk
           *
           * @return {string}
           * @private
           */


          function sanitizeRGBChunk(rgbChunk) {
            var numbers = rgbChunk.match(R_UNFORMATTED_VALUES);
            var numbersLength = numbers.length;
            var sanitizedString = rgbChunk.match(R_RGB_PREFIX)[0];

            for (var i = 0; i < numbersLength; i++) {
              sanitizedString += parseInt(numbers[i], 10) + ",";
            }

            sanitizedString = sanitizedString.slice(0, -1) + ")";
            return sanitizedString;
          }
          /**
           * @param {Object} stateObject
           *
           * @return {Object} An Object of formatManifests that correspond to
           * the string properties of stateObject
           * @private
           */


          function getFormatManifests(stateObject) {
            var manifestAccumulator = {};
            Tweenable.each(stateObject, function (prop) {
              var currentProp = stateObject[prop];

              if (typeof currentProp === "string") {
                var rawValues = getValuesFrom(currentProp);
                manifestAccumulator[prop] = {
                  formatString: getFormatStringFrom(currentProp),
                  chunkNames: getFormatChunksFrom(rawValues, prop)
                };
              }
            });
            return manifestAccumulator;
          }
          /**
           * @param {Object} stateObject
           * @param {Object} formatManifests
           * @private
           */


          function expandFormattedProperties(stateObject, formatManifests) {
            Tweenable.each(formatManifests, function (prop) {
              var currentProp = stateObject[prop];
              var rawValues = getValuesFrom(currentProp);
              var rawValuesLength = rawValues.length;

              for (var i = 0; i < rawValuesLength; i++) {
                stateObject[formatManifests[prop].chunkNames[i]] = +rawValues[i];
              }

              delete stateObject[prop];
            });
          }
          /**
           * @param {Object} stateObject
           * @param {Object} formatManifests
           * @private
           */


          function collapseFormattedProperties(stateObject, formatManifests) {
            Tweenable.each(formatManifests, function (prop) {
              var currentProp = stateObject[prop];
              var formatChunks = extractPropertyChunks(stateObject, formatManifests[prop].chunkNames);
              var valuesList = getValuesList(formatChunks, formatManifests[prop].chunkNames);
              currentProp = getFormattedValues(formatManifests[prop].formatString, valuesList);
              stateObject[prop] = sanitizeRGBChunks(currentProp);
            });
          }
          /**
           * @param {Object} stateObject
           * @param {Array.<string>} chunkNames
           *
           * @return {Object} The extracted value chunks.
           * @private
           */


          function extractPropertyChunks(stateObject, chunkNames) {
            var extractedValues = {};
            var currentChunkName,
                chunkNamesLength = chunkNames.length;

            for (var i = 0; i < chunkNamesLength; i++) {
              currentChunkName = chunkNames[i];
              extractedValues[currentChunkName] = stateObject[currentChunkName];
              delete stateObject[currentChunkName];
            }

            return extractedValues;
          }

          var getValuesList_accumulator = [];
          /**
           * @param {Object} stateObject
           * @param {Array.<string>} chunkNames
           *
           * @return {Array.<number>}
           * @private
           */

          function getValuesList(stateObject, chunkNames) {
            getValuesList_accumulator.length = 0;
            var chunkNamesLength = chunkNames.length;

            for (var i = 0; i < chunkNamesLength; i++) {
              getValuesList_accumulator.push(stateObject[chunkNames[i]]);
            }

            return getValuesList_accumulator;
          }
          /**
           * @param {string} formatString
           * @param {Array.<number>} rawValues
           *
           * @return {string}
           * @private
           */


          function getFormattedValues(formatString, rawValues) {
            var formattedValueString = formatString;
            var rawValuesLength = rawValues.length;

            for (var i = 0; i < rawValuesLength; i++) {
              formattedValueString = formattedValueString.replace(VALUE_PLACEHOLDER, +rawValues[i].toFixed(4));
            }

            return formattedValueString;
          }
          /**
           * Note: It's the duty of the caller to convert the Array elements of the
           * return value into numbers.  This is a performance optimization.
           *
           * @param {string} formattedString
           *
           * @return {Array.<string>|null}
           * @private
           */


          function getValuesFrom(formattedString) {
            return formattedString.match(R_UNFORMATTED_VALUES);
          }
          /**
           * @param {Object} easingObject
           * @param {Object} tokenData
           * @private
           */


          function expandEasingObject(easingObject, tokenData) {
            Tweenable.each(tokenData, function (prop) {
              var currentProp = tokenData[prop];
              var chunkNames = currentProp.chunkNames;
              var chunkLength = chunkNames.length;
              var easing = easingObject[prop];
              var i;

              if (typeof easing === "string") {
                var easingChunks = easing.split(" ");
                var lastEasingChunk = easingChunks[easingChunks.length - 1];

                for (i = 0; i < chunkLength; i++) {
                  easingObject[chunkNames[i]] = easingChunks[i] || lastEasingChunk;
                }
              } else {
                for (i = 0; i < chunkLength; i++) {
                  easingObject[chunkNames[i]] = easing;
                }
              }

              delete easingObject[prop];
            });
          }
          /**
           * @param {Object} easingObject
           * @param {Object} tokenData
           * @private
           */


          function collapseEasingObject(easingObject, tokenData) {
            Tweenable.each(tokenData, function (prop) {
              var currentProp = tokenData[prop];
              var chunkNames = currentProp.chunkNames;
              var chunkLength = chunkNames.length;
              var firstEasing = easingObject[chunkNames[0]];
              var typeofEasings = typeof firstEasing;

              if (typeofEasings === "string") {
                var composedEasingString = "";

                for (var i = 0; i < chunkLength; i++) {
                  composedEasingString += " " + easingObject[chunkNames[i]];
                  delete easingObject[chunkNames[i]];
                }

                easingObject[prop] = composedEasingString.substr(1);
              } else {
                easingObject[prop] = firstEasing;
              }
            });
          }

          Tweenable.prototype.filter.token = {
            tweenCreated: function (currentState, fromState, toState, easingObject) {
              sanitizeObjectForHexProps(currentState);
              sanitizeObjectForHexProps(fromState);
              sanitizeObjectForHexProps(toState);
              this._tokenData = getFormatManifests(currentState);
            },
            beforeTween: function (currentState, fromState, toState, easingObject) {
              expandEasingObject(easingObject, this._tokenData);
              expandFormattedProperties(currentState, this._tokenData);
              expandFormattedProperties(fromState, this._tokenData);
              expandFormattedProperties(toState, this._tokenData);
            },
            afterTween: function (currentState, fromState, toState, easingObject) {
              collapseFormattedProperties(currentState, this._tokenData);
              collapseFormattedProperties(fromState, this._tokenData);
              collapseFormattedProperties(toState, this._tokenData);
              collapseEasingObject(easingObject, this._tokenData);
            }
          };
        })(Tweenable);
      }).call(null);
    }, {}],
    2: [function (require, module, exports) {
      // Circle shaped progress bar
      var Shape = require("./shape");

      var utils = require("./utils");

      var Circle = function Circle(container, options) {
        // Use two arcs to form a circle
        // See this answer http://stackoverflow.com/a/10477334/1446092
        this._pathTemplate = "M 50,50 m 0,-{radius}" + " a {radius},{radius} 0 1 1 0,{2radius}" + " a {radius},{radius} 0 1 1 0,-{2radius}";
        this.containerAspectRatio = 1;
        Shape.apply(this, arguments);
      };

      Circle.prototype = new Shape();
      Circle.prototype.constructor = Circle;

      Circle.prototype._pathString = function _pathString(opts) {
        var widthOfWider = opts.strokeWidth;

        if (opts.trailWidth && opts.trailWidth > opts.strokeWidth) {
          widthOfWider = opts.trailWidth;
        }

        var r = 50 - widthOfWider / 2;
        return utils.render(this._pathTemplate, {
          radius: r,
          "2radius": r * 2
        });
      };

      Circle.prototype._trailString = function _trailString(opts) {
        return this._pathString(opts);
      };

      module.exports = Circle;
    }, {
      "./shape": 7,
      "./utils": 9
    }],
    3: [function (require, module, exports) {
      // Line shaped progress bar
      var Shape = require("./shape");

      var utils = require("./utils");

      var Line = function Line(container, options) {
        this._pathTemplate = "M 0,{center} L 100,{center}";
        Shape.apply(this, arguments);
      };

      Line.prototype = new Shape();
      Line.prototype.constructor = Line;

      Line.prototype._initializeSvg = function _initializeSvg(svg, opts) {
        svg.setAttribute("viewBox", "0 0 100 " + opts.strokeWidth);
        svg.setAttribute("preserveAspectRatio", "none");
      };

      Line.prototype._pathString = function _pathString(opts) {
        return utils.render(this._pathTemplate, {
          center: opts.strokeWidth / 2
        });
      };

      Line.prototype._trailString = function _trailString(opts) {
        return this._pathString(opts);
      };

      module.exports = Line;
    }, {
      "./shape": 7,
      "./utils": 9
    }],
    4: [function (require, module, exports) {
      module.exports = {
        // Higher level API, different shaped progress bars
        Line: require("./line"),
        Circle: require("./circle"),
        SemiCircle: require("./semicircle"),
        Square: require("./square"),
        // Lower level API to use any SVG path
        Path: require("./path"),
        // Base-class for creating new custom shapes
        // to be in line with the API of built-in shapes
        // Undocumented.
        Shape: require("./shape"),
        // Internal utils, undocumented.
        utils: require("./utils")
      };
    }, {
      "./circle": 2,
      "./line": 3,
      "./path": 5,
      "./semicircle": 6,
      "./shape": 7,
      "./square": 8,
      "./utils": 9
    }],
    5: [function (require, module, exports) {
      // Lower level API to animate any kind of svg path
      var Tweenable = require("shifty");

      var utils = require("./utils");

      var EASING_ALIASES = {
        easeIn: "easeInCubic",
        easeOut: "easeOutCubic",
        easeInOut: "easeInOutCubic"
      };

      var Path = function Path(path, opts) {
        // Throw a better error if not initialized with `new` keyword
        if (!(this instanceof Path)) {
          throw new Error("Constructor was called without new keyword");
        } // Default parameters for animation


        opts = utils.extend({
          duration: 800,
          easing: "linear",
          from: {},
          to: {},
          step: function () {}
        }, opts);
        var element;

        if (utils.isString(path)) {
          element = document.querySelector(path);
        } else {
          element = path;
        } // Reveal .path as public attribute


        this.path = element;
        this._opts = opts;
        this._tweenable = null; // Set up the starting positions

        var length = this.path.getTotalLength();
        this.path.style.strokeDasharray = length + " " + length;
        this.set(0);
      };

      Path.prototype.value = function value() {
        var offset = this._getComputedDashOffset();

        var length = this.path.getTotalLength();
        var progress = 1 - offset / length; // Round number to prevent returning very small number like 1e-30, which
        // is practically 0

        return parseFloat(progress.toFixed(6), 10);
      };

      Path.prototype.set = function set(progress) {
        this.stop();
        this.path.style.strokeDashoffset = this._progressToOffset(progress);
        var step = this._opts.step;

        if (utils.isFunction(step)) {
          var easing = this._easing(this._opts.easing);

          var values = this._calculateTo(progress, easing);

          var reference = this._opts.shape || this;
          step(values, reference, this._opts.attachment);
        }
      };

      Path.prototype.stop = function stop() {
        this._stopTween();

        this.path.style.strokeDashoffset = this._getComputedDashOffset();
      }; // Method introduced here:
      // http://jakearchibald.com/2013/animated-line-drawing-svg/


      Path.prototype.animate = function animate(progress, opts, cb) {
        opts = opts || {};

        if (utils.isFunction(opts)) {
          cb = opts;
          opts = {};
        }

        var passedOpts = utils.extend({}, opts); // Copy default opts to new object so defaults are not modified

        var defaultOpts = utils.extend({}, this._opts);
        opts = utils.extend(defaultOpts, opts);

        var shiftyEasing = this._easing(opts.easing);

        var values = this._resolveFromAndTo(progress, shiftyEasing, passedOpts);

        this.stop(); // Trigger a layout so styles are calculated & the browser
        // picks up the starting position before animating

        this.path.getBoundingClientRect();

        var offset = this._getComputedDashOffset();

        var newOffset = this._progressToOffset(progress);

        var self = this;
        this._tweenable = new Tweenable();

        this._tweenable.tween({
          from: utils.extend({
            offset: offset
          }, values.from),
          to: utils.extend({
            offset: newOffset
          }, values.to),
          duration: opts.duration,
          easing: shiftyEasing,
          step: function (state) {
            self.path.style.strokeDashoffset = state.offset;
            var reference = opts.shape || self;
            opts.step(state, reference, opts.attachment);
          },
          finish: function (state) {
            if (utils.isFunction(cb)) {
              cb();
            }
          }
        });
      };

      Path.prototype._getComputedDashOffset = function _getComputedDashOffset() {
        var computedStyle = window.getComputedStyle(this.path, null);
        return parseFloat(computedStyle.getPropertyValue("stroke-dashoffset"), 10);
      };

      Path.prototype._progressToOffset = function _progressToOffset(progress) {
        var length = this.path.getTotalLength();
        return length - progress * length;
      }; // Resolves from and to values for animation.


      Path.prototype._resolveFromAndTo = function _resolveFromAndTo(progress, easing, opts) {
        if (opts.from && opts.to) {
          return {
            from: opts.from,
            to: opts.to
          };
        }

        return {
          from: this._calculateFrom(easing),
          to: this._calculateTo(progress, easing)
        };
      }; // Calculate `from` values from options passed at initialization


      Path.prototype._calculateFrom = function _calculateFrom(easing) {
        return Tweenable.interpolate(this._opts.from, this._opts.to, this.value(), easing);
      }; // Calculate `to` values from options passed at initialization


      Path.prototype._calculateTo = function _calculateTo(progress, easing) {
        return Tweenable.interpolate(this._opts.from, this._opts.to, progress, easing);
      };

      Path.prototype._stopTween = function _stopTween() {
        if (this._tweenable !== null) {
          this._tweenable.stop();

          this._tweenable = null;
        }
      };

      Path.prototype._easing = function _easing(easing) {
        if (EASING_ALIASES.hasOwnProperty(easing)) {
          return EASING_ALIASES[easing];
        }

        return easing;
      };

      module.exports = Path;
    }, {
      "./utils": 9,
      shifty: 1
    }],
    6: [function (require, module, exports) {
      // Semi-SemiCircle shaped progress bar
      var Shape = require("./shape");

      var Circle = require("./circle");

      var utils = require("./utils");

      var SemiCircle = function SemiCircle(container, options) {
        // Use one arc to form a SemiCircle
        // See this answer http://stackoverflow.com/a/10477334/1446092
        this._pathTemplate = "M 50,50 m -{radius},0" + " a {radius},{radius} 0 1 1 {2radius},0";
        this.containerAspectRatio = 2;
        Shape.apply(this, arguments);
      };

      SemiCircle.prototype = new Shape();
      SemiCircle.prototype.constructor = SemiCircle;

      SemiCircle.prototype._initializeSvg = function _initializeSvg(svg, opts) {
        svg.setAttribute("viewBox", "0 0 100 50");
      };

      SemiCircle.prototype._initializeTextContainer = function _initializeTextContainer(opts, container, textContainer) {
        if (opts.text.style) {
          // Reset top style
          textContainer.style.top = "auto";
          textContainer.style.bottom = "0";

          if (opts.text.alignToBottom) {
            utils.setStyle(textContainer, "transform", "translate(-50%, 0)");
          } else {
            utils.setStyle(textContainer, "transform", "translate(-50%, 50%)");
          }
        }
      }; // Share functionality with Circle, just have different path


      SemiCircle.prototype._pathString = Circle.prototype._pathString;
      SemiCircle.prototype._trailString = Circle.prototype._trailString;
      module.exports = SemiCircle;
    }, {
      "./circle": 2,
      "./shape": 7,
      "./utils": 9
    }],
    7: [function (require, module, exports) {
      // Base object for different progress bar shapes
      var Path = require("./path");

      var utils = require("./utils");

      var DESTROYED_ERROR = "Object is destroyed";

      var Shape = function Shape(container, opts) {
        // Throw a better error if progress bars are not initialized with `new`
        // keyword
        if (!(this instanceof Shape)) {
          throw new Error("Constructor was called without new keyword");
        } // Prevent calling constructor without parameters so inheritance
        // works correctly. To understand, this is how Shape is inherited:
        //
        //   Line.prototype = new Shape();
        //
        // We just want to set the prototype for Line.


        if (arguments.length === 0) {
          return;
        } // Default parameters for progress bar creation


        this._opts = utils.extend({
          color: "#555",
          strokeWidth: 1.0,
          trailColor: null,
          trailWidth: null,
          fill: null,
          text: {
            style: {
              color: null,
              position: "absolute",
              left: "50%",
              top: "50%",
              padding: 0,
              margin: 0,
              transform: {
                prefix: true,
                value: "translate(-50%, -50%)"
              }
            },
            autoStyleContainer: true,
            alignToBottom: true,
            value: null,
            className: "progressbar-text"
          },
          svgStyle: {
            display: "block",
            width: "100%"
          },
          warnings: false
        }, opts, true); // Use recursive extend
        // If user specifies e.g. svgStyle or text style, the whole object
        // should replace the defaults to make working with styles easier

        if (utils.isObject(opts) && opts.svgStyle !== undefined) {
          this._opts.svgStyle = opts.svgStyle;
        }

        if (utils.isObject(opts) && utils.isObject(opts.text) && opts.text.style !== undefined) {
          this._opts.text.style = opts.text.style;
        }

        var svgView = this._createSvgView(this._opts);

        var element;

        if (utils.isString(container)) {
          element = document.querySelector(container);
        } else {
          element = container;
        }

        if (!element) {
          throw new Error("Container does not exist: " + container);
        }

        this._container = element;

        this._container.appendChild(svgView.svg);

        if (this._opts.warnings) {
          this._warnContainerAspectRatio(this._container);
        }

        if (this._opts.svgStyle) {
          utils.setStyles(svgView.svg, this._opts.svgStyle);
        } // Expose public attributes before Path initialization


        this.svg = svgView.svg;
        this.path = svgView.path;
        this.trail = svgView.trail;
        this.text = null;
        var newOpts = utils.extend({
          attachment: undefined,
          shape: this
        }, this._opts);
        this._progressPath = new Path(svgView.path, newOpts);

        if (utils.isObject(this._opts.text) && this._opts.text.value !== null) {
          this.setText(this._opts.text.value);
        }
      };

      Shape.prototype.animate = function animate(progress, opts, cb) {
        if (this._progressPath === null) {
          throw new Error(DESTROYED_ERROR);
        }

        this._progressPath.animate(progress, opts, cb);
      };

      Shape.prototype.stop = function stop() {
        if (this._progressPath === null) {
          throw new Error(DESTROYED_ERROR);
        } // Don't crash if stop is called inside step function


        if (this._progressPath === undefined) {
          return;
        }

        this._progressPath.stop();
      };

      Shape.prototype.destroy = function destroy() {
        if (this._progressPath === null) {
          throw new Error(DESTROYED_ERROR);
        }

        this.stop();
        this.svg.parentNode.removeChild(this.svg);
        this.svg = null;
        this.path = null;
        this.trail = null;
        this._progressPath = null;

        if (this.text !== null) {
          this.text.parentNode.removeChild(this.text);
          this.text = null;
        }
      };

      Shape.prototype.set = function set(progress) {
        if (this._progressPath === null) {
          throw new Error(DESTROYED_ERROR);
        }

        this._progressPath.set(progress);
      };

      Shape.prototype.value = function value() {
        if (this._progressPath === null) {
          throw new Error(DESTROYED_ERROR);
        }

        if (this._progressPath === undefined) {
          return 0;
        }

        return this._progressPath.value();
      };

      Shape.prototype.setText = function setText(newText) {
        if (this._progressPath === null) {
          throw new Error(DESTROYED_ERROR);
        }

        if (this.text === null) {
          // Create new text node
          this.text = this._createTextContainer(this._opts, this._container);

          this._container.appendChild(this.text);
        } // Remove previous text and add new


        if (utils.isObject(newText)) {
          utils.removeChildren(this.text);
          this.text.appendChild(newText);
        } else {
          this.text.innerHTML = newText;
        }
      };

      Shape.prototype._createSvgView = function _createSvgView(opts) {
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

        this._initializeSvg(svg, opts);

        var trailPath = null; // Each option listed in the if condition are 'triggers' for creating
        // the trail path

        if (opts.trailColor || opts.trailWidth) {
          trailPath = this._createTrail(opts);
          svg.appendChild(trailPath);
        }

        var path = this._createPath(opts);

        svg.appendChild(path);
        return {
          svg: svg,
          path: path,
          trail: trailPath
        };
      };

      Shape.prototype._initializeSvg = function _initializeSvg(svg, opts) {
        svg.setAttribute("viewBox", "0 0 100 100");
      };

      Shape.prototype._createPath = function _createPath(opts) {
        var pathString = this._pathString(opts);

        return this._createPathElement(pathString, opts);
      };

      Shape.prototype._createTrail = function _createTrail(opts) {
        // Create path string with original passed options
        var pathString = this._trailString(opts); // Prevent modifying original


        var newOpts = utils.extend({}, opts); // Defaults for parameters which modify trail path

        if (!newOpts.trailColor) {
          newOpts.trailColor = "#eee";
        }

        if (!newOpts.trailWidth) {
          newOpts.trailWidth = newOpts.strokeWidth;
        }

        newOpts.color = newOpts.trailColor;
        newOpts.strokeWidth = newOpts.trailWidth; // When trail path is set, fill must be set for it instead of the
        // actual path to prevent trail stroke from clipping

        newOpts.fill = null;
        return this._createPathElement(pathString, newOpts);
      };

      Shape.prototype._createPathElement = function _createPathElement(pathString, opts) {
        var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", pathString);
        path.setAttribute("stroke", opts.color);
        path.setAttribute("stroke-width", opts.strokeWidth);

        if (opts.fill) {
          path.setAttribute("fill", opts.fill);
        } else {
          path.setAttribute("fill-opacity", "0");
        }

        return path;
      };

      Shape.prototype._createTextContainer = function _createTextContainer(opts, container) {
        var textContainer = document.createElement("div");
        textContainer.className = opts.text.className;
        var textStyle = opts.text.style;

        if (textStyle) {
          if (opts.text.autoStyleContainer) {
            container.style.position = "relative";
          }

          utils.setStyles(textContainer, textStyle); // Default text color to progress bar's color

          if (!textStyle.color) {
            textContainer.style.color = opts.color;
          }
        }

        this._initializeTextContainer(opts, container, textContainer);

        return textContainer;
      }; // Give custom shapes possibility to modify text element


      Shape.prototype._initializeTextContainer = function (opts, container, element) {// By default, no-op
        // Custom shapes should respect API options, such as text.style
      };

      Shape.prototype._pathString = function _pathString(opts) {
        throw new Error("Override this function for each progress bar");
      };

      Shape.prototype._trailString = function _trailString(opts) {
        throw new Error("Override this function for each progress bar");
      };

      Shape.prototype._warnContainerAspectRatio = function _warnContainerAspectRatio(container) {
        if (!this.containerAspectRatio) {
          return;
        }

        var computedStyle = window.getComputedStyle(container, null);
        var width = parseFloat(computedStyle.getPropertyValue("width"), 10);
        var height = parseFloat(computedStyle.getPropertyValue("height"), 10);

        if (!utils.floatEquals(this.containerAspectRatio, width / height)) {
          console.warn("Incorrect aspect ratio of container", "#" + container.id, "detected:", computedStyle.getPropertyValue("width") + "(width)", "/", computedStyle.getPropertyValue("height") + "(height)", "=", width / height);
          console.warn("Aspect ratio of should be", this.containerAspectRatio);
        }
      };

      module.exports = Shape;
    }, {
      "./path": 5,
      "./utils": 9
    }],
    8: [function (require, module, exports) {
      // Square shaped progress bar
      // Note: Square is not core part of API anymore. It's left here
      //       for reference. square is not included to the progressbar
      //       build anymore
      var Shape = require("./shape");

      var utils = require("./utils");

      var Square = function Square(container, options) {
        this._pathTemplate = "M 0,{halfOfStrokeWidth}" + " L {width},{halfOfStrokeWidth}" + " L {width},{width}" + " L {halfOfStrokeWidth},{width}" + " L {halfOfStrokeWidth},{strokeWidth}";
        this._trailTemplate = "M {startMargin},{halfOfStrokeWidth}" + " L {width},{halfOfStrokeWidth}" + " L {width},{width}" + " L {halfOfStrokeWidth},{width}" + " L {halfOfStrokeWidth},{halfOfStrokeWidth}";
        Shape.apply(this, arguments);
      };

      Square.prototype = new Shape();
      Square.prototype.constructor = Square;

      Square.prototype._pathString = function _pathString(opts) {
        var w = 100 - opts.strokeWidth / 2;
        return utils.render(this._pathTemplate, {
          width: w,
          strokeWidth: opts.strokeWidth,
          halfOfStrokeWidth: opts.strokeWidth / 2
        });
      };

      Square.prototype._trailString = function _trailString(opts) {
        var w = 100 - opts.strokeWidth / 2;
        return utils.render(this._trailTemplate, {
          width: w,
          strokeWidth: opts.strokeWidth,
          halfOfStrokeWidth: opts.strokeWidth / 2,
          startMargin: opts.strokeWidth / 2 - opts.trailWidth / 2
        });
      };

      module.exports = Square;
    }, {
      "./shape": 7,
      "./utils": 9
    }],
    9: [function (require, module, exports) {
      // Utility functions
      var PREFIXES = "Webkit Moz O ms".split(" ");
      var FLOAT_COMPARISON_EPSILON = 0.001; // Copy all attributes from source object to destination object.
      // destination object is mutated.

      function extend(destination, source, recursive) {
        destination = destination || {};
        source = source || {};
        recursive = recursive || false;

        for (var attrName in source) {
          if (source.hasOwnProperty(attrName)) {
            var destVal = destination[attrName];
            var sourceVal = source[attrName];

            if (recursive && isObject(destVal) && isObject(sourceVal)) {
              destination[attrName] = extend(destVal, sourceVal, recursive);
            } else {
              destination[attrName] = sourceVal;
            }
          }
        }

        return destination;
      } // Renders templates with given variables. Variables must be surrounded with
      // braces without any spaces, e.g. {variable}
      // All instances of variable placeholders will be replaced with given content
      // Example:
      // render('Hello, {message}!', {message: 'world'})


      function render(template, vars) {
        var rendered = template;

        for (var key in vars) {
          if (vars.hasOwnProperty(key)) {
            var val = vars[key];
            var regExpString = "\\{" + key + "\\}";
            var regExp = new RegExp(regExpString, "g");
            rendered = rendered.replace(regExp, val);
          }
        }

        return rendered;
      }

      function setStyle(element, style, value) {
        var elStyle = element.style; // cache for performance

        for (var i = 0; i < PREFIXES.length; ++i) {
          var prefix = PREFIXES[i];
          elStyle[prefix + capitalize(style)] = value;
        }

        elStyle[style] = value;
      }

      function setStyles(element, styles) {
        forEachObject(styles, function (styleValue, styleName) {
          // Allow disabling some individual styles by setting them
          // to null or undefined
          if (styleValue === null || styleValue === undefined) {
            return;
          } // If style's value is {prefix: true, value: '50%'},
          // Set also browser prefixed styles


          if (isObject(styleValue) && styleValue.prefix === true) {
            setStyle(element, styleName, styleValue.value);
          } else {
            element.style[styleName] = styleValue;
          }
        });
      }

      function capitalize(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
      }

      function isString(obj) {
        return typeof obj === "string" || obj instanceof String;
      }

      function isFunction(obj) {
        return typeof obj === "function";
      }

      function isArray(obj) {
        return Object.prototype.toString.call(obj) === "[object Array]";
      } // Returns true if `obj` is object as in {a: 1, b: 2}, not if it's function or
      // array


      function isObject(obj) {
        if (isArray(obj)) {
          return false;
        }

        var type = typeof obj;
        return type === "object" && !!obj;
      }

      function forEachObject(object, callback) {
        for (var key in object) {
          if (object.hasOwnProperty(key)) {
            var val = object[key];
            callback(val, key);
          }
        }
      }

      function floatEquals(a, b) {
        return Math.abs(a - b) < FLOAT_COMPARISON_EPSILON;
      } // https://coderwall.com/p/nygghw/don-t-use-innerhtml-to-empty-dom-elements


      function removeChildren(el) {
        while (el.firstChild) {
          el.removeChild(el.firstChild);
        }
      }

      module.exports = {
        extend: extend,
        render: render,
        setStyle: setStyle,
        setStyles: setStyles,
        capitalize: capitalize,
        isString: isString,
        isFunction: isFunction,
        isObject: isObject,
        forEachObject: forEachObject,
        floatEquals: floatEquals,
        removeChildren: removeChildren
      };
    }, {}]
  }, {}, [4])(4);
});

function w_bar_1() {
  var svgPath = document.getElementById("heart1");
  var bar = new ProgressBar.Path(svgPath, {
    strokeWidth: 10,
    easing: "easeInOut",
    duration: 1400,
    color: "#FFEA82",
    trailColor: "#eee",
    trailWidth: 5,
    svgStyle: {
      width: "100%",
      height: "100%"
    },
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: "#999",
        position: "absolute",
        right: "0",
        top: "30px",
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleContainer: false
    },
    from: {
      color: "#FFEA82"
    },
    to: {
      color: "#ED6A5A"
    }
  });
  var prevVal = 0;
  bar.animate(0.5, {
    attachment: document.getElementById("circle1"),
    step: function (state, bar, attachment) {
      var pbt = document.getElementById("pbt1");
      var att = document.getElementById("circle1");
      var attr = att.getAttribute("transform");
      var val = (bar.value() * bar.path.getTotalLength()).toFixed(5) - 2; // buggy value() function?

      var res = attr.replace(prevVal, val);
      pbt.style.left = val - 1 + "%";
      pbt.innerHTML = 2 + Number(val.toFixed(0)) + "%";
      prevVal = val;
      att.setAttribute("transform", res);
    }
  });
}

function w_bar_2() {
  var svgPath = document.getElementById("heart2");
  var bar = new ProgressBar.Path(svgPath, {
    strokeWidth: 4,
    easing: "easeInOut",
    duration: 1400,
    color: "#FFEA82",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: {
      width: "100%",
      height: "100%"
    },
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: "#999",
        position: "absolute",
        right: "0",
        top: "30px",
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleContainer: false
    },
    from: {
      color: "#FFEA82"
    },
    to: {
      color: "#ED6A5A"
    }
  });
  var prevVal = 0;
  bar.animate(0.8756, {
    attachment: document.getElementById("circle2"),
    step: function (state, bar, attachment) {
      var pbt = document.getElementById("pbt2");
      var att = document.getElementById("circle2");
      var attr = att.getAttribute("transform");
      var val = (bar.value() * bar.path.getTotalLength()).toFixed(5) - 2; // buggy value() function?

      var res = attr.replace(prevVal, val);
      pbt.style.left = val - 1 + "%";
      pbt.innerHTML = 2 + Number(val.toFixed(0)) + "%";
      prevVal = val;
      att.setAttribute("transform", res);
    }
  });
}

w_bar_1();
w_bar_2();