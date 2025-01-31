import React, { createContext, useState, useRef, useEffect, useContext, useCallback, useImperativeHandle, useLayoutEffect, useMemo } from 'react';
import ReactPaginate from 'react-paginate';
import Select from 'react-select';

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _defineProperty$1(e, r, t) {
  return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function (r) {
      _defineProperty$1(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toPrimitive$1(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (undefined !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : undefined;
  }
}

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React.createContext && /*#__PURE__*/React.createContext(DefaultContext);

var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (undefined !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /*#__PURE__*/React.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return props => /*#__PURE__*/React.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = conf => {
    var {
        attr,
        size,
        title
      } = props,
      svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /*#__PURE__*/React.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /*#__PURE__*/React.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? /*#__PURE__*/React.createElement(IconContext.Consumer, null, conf => elem(conf)) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function MdLockReset (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"},"child":[]},{"tag":"path","attr":{"d":"M13 3a9 9 0 0 0-9 9H1l4 4 4-4H6c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7c-1.9 0-3.62-.76-4.88-1.99L6.7 18.42A8.982 8.982 0 0 0 13 21a9 9 0 0 0 0-18zm2 8v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1v1z"},"child":[]}]})(props);
}function MdClear (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"},"child":[]},{"tag":"path","attr":{"d":"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"},"child":[]}]})(props);
}function MdOutlineDelete (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0V0z"},"child":[]},{"tag":"path","attr":{"d":"M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"},"child":[]}]})(props);
}function MdOutlineModeEditOutline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"},"child":[]},{"tag":"path","attr":{"d":"M3 21h3.75L17.81 9.94l-3.75-3.75L3 17.25V21zm2-2.92 9.06-9.06.92.92L5.92 19H5v-.92zM18.37 3.29a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34z"},"child":[]}]})(props);
}function MdOutlineRemoveRedEye (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0V0z"},"child":[]},{"tag":"path","attr":{"d":"M12 6.5a9.77 9.77 0 0 1 8.82 5.5c-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12A9.77 9.77 0 0 1 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5z"},"child":[]}]})(props);
}

var styles = {"tableContainer":"Table-module_tableContainer__Gf0Qf","title":"Table-module_title__CyT9-","titleContainer":"Table-module_titleContainer__z5TL8","filterContainer":"Table-module_filterContainer__XIVe5","filterLabel":"Table-module_filterLabel__yb-as","filterInputContainer":"Table-module_filterInputContainer__AyJCp","filterInput":"Table-module_filterInput__1Dn3I","clearFilterButton":"Table-module_clearFilterButton__pCEO6","recordSummaryWrapper":"Table-module_recordSummaryWrapper__1qLNb","recordSummary":"Table-module_recordSummary__t-SrI","itemsPerPageContainer":"Table-module_itemsPerPageContainer__KD-Fx","itemsPerPageLabel":"Table-module_itemsPerPageLabel__XWVXu","table":"Table-module_table__5TBGM","columnHeader":"Table-module_columnHeader__E-0hn","tableRow":"Table-module_tableRow__EhQU9","evenRow":"Table-module_evenRow__dSFm7","tableCell":"Table-module_tableCell__H-Q5E","redText":"Table-module_redText__Cq9-d","editIcon":"Table-module_editIcon__HbrGj","paginationContainer":"Table-module_paginationContainer__mjDju","pagination":"Table-module_pagination__MZurs","active":"Table-module_active__etioB","disabled":"Table-module_disabled__dHuoo","paginationLink":"Table-module_paginationLink__w5e4s","paginationDisabled":"Table-module_paginationDisabled__2200t","disabledPagination":"Table-module_disabledPagination__fIeBb","warn":"Table-module_warn__rebJm","infoSection":"Table-module_infoSection__ALjGg","flightName":"Table-module_flightName__GxnBT","carrier":"Table-module_carrier__ITOGN","flightDetail":"Table-module_flightDetail__w7tVX","exportContainer":"Table-module_exportContainer__Mhvbf","exportButton":"Table-module_exportButton__UzjQC"};

var generateSelectStyles = function generateSelectStyles() {
  var withBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var borderStyle = withBorder ? "1px solid #e0e0e0" : "none";
  return {
    control: function control(provided) {
      return _objectSpread2(_objectSpread2({}, provided), {}, {
        border: borderStyle,
        fontSize: "14px",
        borderRadius: "8px",
        width: "100%",
        "&:hover": {
          border: borderStyle
        },
        borderColor: provided.borderColor,
        boxShadow: "none !important",
        outline: "none !important"
      });
    },
    option: function option(provided, state) {
      return _objectSpread2(_objectSpread2({}, provided), {}, {
        color: state.isSelected ? "white" : "#333333",
        backgroundColor: state.isSelected ? "#3498db" : "white",
        "&:hover": {
          backgroundColor: "#ff2a52"
        }
      });
    },
    menu: function menu(provided) {
      return _objectSpread2(_objectSpread2({}, provided), {}, {
        width: "100%",
        minWidth: "100%",
        maxWidth: "none",
        maxHeight: "150px",
        overflowY: "auto",
        zIndex: 1000
      });
    },
    menuList: function menuList(provided) {
      return _objectSpread2(_objectSpread2({}, provided), {}, {
        maxHeight: "150px",
        overflowY: "auto"
      });
    },
    singleValue: function singleValue(provided) {
      return _objectSpread2(_objectSpread2({}, provided), {}, {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      });
    },
    placeholder: function placeholder(provided) {
      return _objectSpread2(_objectSpread2({}, provided), {}, {
        color: "#7F7F7F"
      });
    }
  };
};

/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */

const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = v => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
const oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
  return placement.split('-')[0];
}
function getAlignment(placement) {
  return placement.split('-')[1];
}
function getOppositeAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
  return axis === 'y' ? 'height' : 'width';
}
function getSideAxis(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === undefined) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ['left', 'right'];
  const rl = ['right', 'left'];
  const tb = ['top', 'bottom'];
  const bt = ['bottom', 'top'];
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case 'left':
    case 'right':
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}

function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === 'y';
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case 'start':
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? undefined : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === undefined) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? undefined : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? undefined : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? undefined : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? undefined : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? undefined : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow$1 = options => ({
  name: 'arrow',
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform,
      elements,
      middlewareData
    } = state;
    // Since `element` is required, we don't Partial<> the type.
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === 'y';
    const minProp = isYAxis ? 'top' : 'left';
    const maxProp = isYAxis ? 'bottom' : 'right';
    const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? undefined : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

    // DOM platform can return `window` as the `offsetParent`.
    if (!clientSize || !(await (platform.isElement == null ? undefined : platform.isElement(arrowOffsetParent)))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;

    // If the padding is large enough that it causes the arrow to no longer be
    // centered, modify the padding so that it is centered.
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);

    // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds.
    const min$1 = minPadding;
    const max = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = clamp(min$1, center, max);

    // If the reference is small enough that the arrow's padding causes it to
    // to point to nothing for an aligned placement, adjust the offset of the
    // floating element itself. To ensure `shift()` continues to take action,
    // a single reset is performed when this is true.
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset - alignmentOffset,
        ...(shouldAddOffset && {
          alignmentOffset
        })
      },
      reset: shouldAddOffset
    };
  }
});

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip$1 = function (options) {
  if (options === undefined) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);

      // If a reset by the arrow was caused due to an alignment offset being
      // added, we should skip any logic now since `flip()` has already done its
      // work.
      // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? undefined : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== 'none';
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? undefined : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? undefined : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          // Try next placement and re-run the lifecycle.
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? undefined : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$filter2;
                const placement = (_overflowsData$filter2 = overflowsData.filter(d => {
                  if (hasFallbackAxisSideDirection) {
                    const currentSideAxis = getSideAxis(d.placement);
                    return currentSideAxis === initialSideAxis ||
                    // Create a bias to the `y` side axis due to horizontal
                    // reading directions favoring greater width.
                    currentSideAxis === 'y';
                  }
                  return true;
                }).map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? undefined : _overflowsData$filter2[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.

async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? undefined : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === 'y';
  const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);

  // eslint-disable-next-line prefer-const
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset$1 = function (options) {
  if (options === undefined) {
    options = 0;
  }
  return {
    name: 'offset',
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);

      // If the placement is the same and the arrow caused an alignment offset
      // then we don't need to change the positioning coordinates.
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? undefined : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift$1 = function (options) {
  if (options === undefined) {
    options = {};
  }
  return {
    name: 'shift',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min, mainAxisCoord, max);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min, crossAxisCoord, max);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};

function hasWindow() {
  return typeof window !== 'undefined';
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || '').toLowerCase();
  }
  // Mocked nodes in testing environments may not be instances of Node. By
  // returning `#document` an infinite loop won't occur.
  // https://github.com/floating-ui/floating-ui/issues/2317
  return '#document';
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? undefined : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? undefined : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === 'undefined') {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [':popover-open', ':modal'].some(selector => {
    try {
      return element.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  // https://drafts.csswg.org/css-transforms-2/#individual-transforms
  return ['transform', 'translate', 'scale', 'rotate', 'perspective'].some(value => css[value] ? css[value] !== 'none' : false) || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
function isLastTraversableNode(node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === undefined) {
    list = [];
  }
  if (traverseIframes === undefined) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? undefined : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}

function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}

function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

const noOffsets = /*#__PURE__*/createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === undefined) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === undefined) {
    includeScale = false;
  }
  if (isFixedStrategy === undefined) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle$1(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}

// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}

function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
  if (ignoreScrollbarX === undefined) {
    ignoreScrollbarX = false;
  }
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 :
  // RTL <body> scrollbar.
  getWindowScrollBarX(documentElement, htmlRect));
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === 'fixed';
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}

function getClientRects(element) {
  return Array.from(element.getClientRects());
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === 'rtl') {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter(el => isElement(el) && getNodeName(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
  let currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      // If the <body> scrollbar appears on the left (e.g. RTL systems). Use
      // Firefox with layout.scrollbar.side = 3 in about:config to test this.
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}

function isStaticPositioned(element) {
  return getComputedStyle$1(element).position === 'static';
}

function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;

  // Firefox returns the <html> element as the offsetParent if it's non-static,
  // while Chrome and Safari return the <body> element. The <body> element must
  // be used to perform the correct calculations even if the <html> element is
  // non-static.
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}

const getElementRects = async function (data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};

function isRTL(element) {
  return getComputedStyle$1(element).direction === 'rtl';
}

const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};

function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}

// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === undefined) {
      skip = false;
    }
    if (threshold === undefined) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          // If the reference is clipped, the ratio is 0. Throttle the refresh
          // to prevent an infinite loop of updates.
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1000);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        // It's possible that even though the ratio is reported as 1, the
        // element is not actually fully within the IntersectionObserver's root
        // area anymore. This can happen under performance constraints. This may
        // be a bug in the browser's IntersectionObserver implementation. To
        // work around this, we compare the element's bounding rect now with
        // what it was at the time we created the IntersectionObserver. If they
        // are not equal then the element moved, so we refresh.
        refresh();
      }
      isFirstUpdate = false;
    }

    // Older browsers don't support a `document` as the root and will throw an
    // error.
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === undefined) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === 'function',
    layoutShift = typeof IntersectionObserver === 'function',
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)] : [];
  ancestors.forEach(ancestor => {
    ancestorScroll && ancestor.addEventListener('scroll', update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver(_ref => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        // Prevent update loops when using the `size` middleware.
        // https://github.com/floating-ui/floating-ui/issues/1740
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = offset$1;

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = shift$1;

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = flip$1;

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = arrow$1;

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */
const computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var classnames = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

var hasRequiredClassnames;

function requireClassnames () {
	if (hasRequiredClassnames) return classnames.exports;
	hasRequiredClassnames = 1;
	(function (module) {
		/* global define */

		(function () {

			var hasOwn = {}.hasOwnProperty;

			function classNames () {
				var classes = '';

				for (var i = 0; i < arguments.length; i++) {
					var arg = arguments[i];
					if (arg) {
						classes = appendClass(classes, parseValue(arg));
					}
				}

				return classes;
			}

			function parseValue (arg) {
				if (typeof arg === 'string' || typeof arg === 'number') {
					return arg;
				}

				if (typeof arg !== 'object') {
					return '';
				}

				if (Array.isArray(arg)) {
					return classNames.apply(null, arg);
				}

				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					return arg.toString();
				}

				var classes = '';

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes = appendClass(classes, key);
					}
				}

				return classes;
			}

			function appendClass (value, newClass) {
				if (!newClass) {
					return value;
				}
			
				if (value) {
					return value + ' ' + newClass;
				}
			
				return value + newClass;
			}

			if (module.exports) {
				classNames.default = classNames;
				module.exports = classNames;
			} else {
				window.classNames = classNames;
			}
		}()); 
	} (classnames));
	return classnames.exports;
}

var classnamesExports = requireClassnames();
var y = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

/*
* React Tooltip
* {@link https://github.com/ReactTooltip/react-tooltip}
* @copyright ReactTooltip Team
* @license MIT
*/
const h="react-tooltip-core-styles",w="react-tooltip-base-styles",b={core:false,base:false};function S({css:e,id:t=w,type:o="base",ref:l}){var r,n;if(!e||"undefined"==typeof document||b[o])return;if("core"===o&&"undefined"!=typeof process&&(null===(r=null===process||undefined===process?undefined:process.env)||undefined===r?undefined:r.REACT_TOOLTIP_DISABLE_CORE_STYLES))return;if("base"!==o&&"undefined"!=typeof process&&(null===(n=null===process||undefined===process?undefined:process.env)||undefined===n?undefined:n.REACT_TOOLTIP_DISABLE_BASE_STYLES))return;"core"===o&&(t=h),l||(l={});const{insertAt:i}=l;if(document.getElementById(t))return;const c=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.id=t,s.type="text/css","top"===i&&c.firstChild?c.insertBefore(s,c.firstChild):c.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e)),b[o]=true;}const E=async({elementReference:e=null,tooltipReference:t=null,tooltipArrowReference:o=null,place:l="top",offset:r=10,strategy:n="absolute",middlewares:i=[offset(Number(r)),flip({fallbackAxisSideDirection:"start"}),shift({padding:5})],border:c})=>{if(!e)return {tooltipStyles:{},tooltipArrowStyles:{},place:l};if(null===t)return {tooltipStyles:{},tooltipArrowStyles:{},place:l};const s=i;return o?(s.push(arrow({element:o,padding:5})),computePosition(e,t,{placement:l,strategy:n,middleware:s}).then((({x:e,y:t,placement:o,middlewareData:l})=>{var r,n;const i={left:`${e}px`,top:`${t}px`,border:c},{x:s,y:a}=null!==(r=l.arrow)&&undefined!==r?r:{x:0,y:0},u=null!==(n={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]])&&undefined!==n?n:"bottom",d=c&&{borderBottom:c,borderRight:c};let p=0;if(c){const e=`${c}`.match(/(\d+)px/);p=(null==e?undefined:e[1])?Number(e[1]):1;}return {tooltipStyles:i,tooltipArrowStyles:{left:null!=s?`${s}px`:"",top:null!=a?`${a}px`:"",right:"",bottom:"",...d,[u]:`-${4+p}px`},place:o}}))):computePosition(e,t,{placement:"bottom",strategy:n,middleware:s}).then((({x:e,y:t,placement:o})=>({tooltipStyles:{left:`${e}px`,top:`${t}px`},tooltipArrowStyles:{},place:o})))},A=(e,t)=>!("CSS"in window&&"supports"in window.CSS)||window.CSS.supports(e,t),_=(e,t,o)=>{let l=null;const r=function(...r){const n=()=>{l=null;};!l&&(e.apply(this,r),l=setTimeout(n,t));};return r.cancel=()=>{l&&(clearTimeout(l),l=null);},r},O=e=>null!==e&&!Array.isArray(e)&&"object"==typeof e,k=(e,t)=>{if(e===t)return  true;if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&e.every(((e,o)=>k(e,t[o])));if(Array.isArray(e)!==Array.isArray(t))return  false;if(!O(e)||!O(t))return e===t;const o=Object.keys(e),l=Object.keys(t);return o.length===l.length&&o.every((o=>k(e[o],t[o])))},T=e=>{if(!(e instanceof HTMLElement||e instanceof SVGElement))return  false;const t=getComputedStyle(e);return ["overflow","overflow-x","overflow-y"].some((e=>{const o=t.getPropertyValue(e);return "auto"===o||"scroll"===o}))},L=e=>{if(!e)return null;let t=e.parentElement;for(;t;){if(T(t))return t;t=t.parentElement;}return document.scrollingElement||document.documentElement},C="undefined"!=typeof window?useLayoutEffect:useEffect,R=e=>{e.current&&(clearTimeout(e.current),e.current=null);},x="DEFAULT_TOOLTIP_ID",N={anchorRefs:new Set,activeAnchor:{current:null},attach:()=>{},detach:()=>{},setActiveAnchor:()=>{}},$=createContext({getTooltipData:()=>N});function j(e=x){return useContext($).getTooltipData(e)}var z={tooltip:"core-styles-module_tooltip__3vRRp",fixed:"core-styles-module_fixed__pcSol",arrow:"core-styles-module_arrow__cvMwQ",noArrow:"core-styles-module_noArrow__xock6",clickable:"core-styles-module_clickable__ZuTTB",show:"core-styles-module_show__Nt9eE",closing:"core-styles-module_closing__sGnxF"},D={tooltip:"styles-module_tooltip__mnnfp",arrow:"styles-module_arrow__K0L3T",dark:"styles-module_dark__xNqje",light:"styles-module_light__Z6W-X",success:"styles-module_success__A2AKt",warning:"styles-module_warning__SCK0X",error:"styles-module_error__JvumD",info:"styles-module_info__BWdHW"};const q=({forwardRef:t,id:l,className:i,classNameArrow:c,variant:u="dark",anchorId:d,anchorSelect:p,place:v="top",offset:m=10,events:h=["hover"],openOnClick:w=false,positionStrategy:b="absolute",middlewares:S,wrapper:g,delayShow:A=0,delayHide:O=0,float:T=false,hidden:x=false,noArrow:N=false,clickable:$=false,closeOnEsc:I=false,closeOnScroll:B=false,closeOnResize:q=false,openEvents:H,closeEvents:M,globalCloseEvents:W,imperativeModeOnly:P,style:V,position:F,afterShow:K,afterHide:U,disableTooltip:X,content:Y,contentWrapperRef:G,isOpen:Z,defaultIsOpen:J=false,setIsOpen:Q,activeAnchor:ee,setActiveAnchor:te,border:oe,opacity:le,arrowColor:re,role:ne="tooltip"})=>{var ie;const ce=useRef(null),se=useRef(null),ae=useRef(null),ue=useRef(null),de=useRef(null),[pe,ve]=useState({tooltipStyles:{},tooltipArrowStyles:{},place:v}),[me,fe]=useState(false),[ye,he]=useState(false),[we,be]=useState(null),Se=useRef(false),ge=useRef(null),{anchorRefs:Ee,setActiveAnchor:Ae}=j(l),_e=useRef(false),[Oe,ke]=useState([]),Te=useRef(false),Le=w||h.includes("click"),Ce=Le||(null==H?undefined:H.click)||(null==H?undefined:H.dblclick)||(null==H?undefined:H.mousedown),Re=H?{...H}:{mouseover:true,focus:true,mouseenter:false,click:false,dblclick:false,mousedown:false};!H&&Le&&Object.assign(Re,{mouseenter:false,focus:false,mouseover:false,click:true});const xe=M?{...M}:{mouseout:true,blur:true,mouseleave:false,click:false,dblclick:false,mouseup:false};!M&&Le&&Object.assign(xe,{mouseleave:false,blur:false,mouseout:false});const Ne=W?{...W}:{escape:I||false,scroll:B||false,resize:q||false,clickOutsideAnchor:Ce||false};P&&(Object.assign(Re,{mouseenter:false,focus:false,click:false,dblclick:false,mousedown:false}),Object.assign(xe,{mouseleave:false,blur:false,click:false,dblclick:false,mouseup:false}),Object.assign(Ne,{escape:false,scroll:false,resize:false,clickOutsideAnchor:false})),C((()=>(Te.current=true,()=>{Te.current=false;})),[]);const $e=e=>{Te.current&&(e&&he(true),setTimeout((()=>{Te.current&&(null==Q||Q(e),undefined===Z&&fe(e));}),10));};useEffect((()=>{if(undefined===Z)return ()=>null;Z&&he(true);const e=setTimeout((()=>{fe(Z);}),10);return ()=>{clearTimeout(e);}}),[Z]),useEffect((()=>{if(me!==Se.current)if(R(de),Se.current=me,me)null==K||K();else {const e=(e=>{const t=e.match(/^([\d.]+)(ms|s)$/);if(!t)return 0;const[,o,l]=t;return Number(o)*("ms"===l?1:1e3)})(getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay"));de.current=setTimeout((()=>{he(false),be(null),null==U||U();}),e+25);}}),[me]);const Ie=e=>{ve((t=>k(t,e)?t:e));},je=(e=A)=>{R(ae),ye?$e(true):ae.current=setTimeout((()=>{$e(true);}),e);},Be=(e=O)=>{R(ue),ue.current=setTimeout((()=>{_e.current||$e(false);}),e);},ze=e=>{var t;if(!e)return;const o=null!==(t=e.currentTarget)&&undefined!==t?t:e.target;if(!(null==o?undefined:o.isConnected))return te(null),void Ae({current:null});A?je():$e(true),te(o),Ae({current:o}),R(ue);},De=()=>{$?Be(O||100):O?Be():$e(false),R(ae);},qe=({x:e,y:t})=>{var o;const l={getBoundingClientRect:()=>({x:e,y:t,width:0,height:0,top:t,left:e,right:e,bottom:t})};E({place:null!==(o=null==we?undefined:we.place)&&undefined!==o?o:v,offset:m,elementReference:l,tooltipReference:ce.current,tooltipArrowReference:se.current,strategy:b,middlewares:S,border:oe}).then((e=>{Ie(e);}));},He=e=>{if(!e)return;const t=e,o={x:t.clientX,y:t.clientY};qe(o),ge.current=o;},Me=e=>{var t;if(!me)return;const o=e.target;if(!o.isConnected)return;if(null===(t=ce.current)||undefined===t?undefined:t.contains(o))return;[document.querySelector(`[id='${d}']`),...Oe].some((e=>null==e?undefined:e.contains(o)))||($e(false),R(ae));},We=_(ze,50),Pe=_(De,50),Ve=e=>{Pe.cancel(),We(e);},Fe=()=>{We.cancel(),Pe();},Ke=useCallback((()=>{var e,t;const o=null!==(e=null==we?undefined:we.position)&&undefined!==e?e:F;o?qe(o):T?ge.current&&qe(ge.current):(null==ee?undefined:ee.isConnected)&&E({place:null!==(t=null==we?undefined:we.place)&&undefined!==t?t:v,offset:m,elementReference:ee,tooltipReference:ce.current,tooltipArrowReference:se.current,strategy:b,middlewares:S,border:oe}).then((e=>{Te.current&&Ie(e);}));}),[me,ee,Y,V,v,null==we?undefined:we.place,m,b,F,null==we?undefined:we.position,T]);useEffect((()=>{var e,t;const o=new Set(Ee);Oe.forEach((e=>{(null==X?undefined:X(e))||o.add({current:e});}));const l=document.querySelector(`[id='${d}']`);l&&!(null==X?undefined:X(l))&&o.add({current:l});const r=()=>{$e(false);},n=L(ee),i=L(ce.current);Ne.scroll&&(window.addEventListener("scroll",r),null==n||n.addEventListener("scroll",r),null==i||i.addEventListener("scroll",r));let c=null;Ne.resize?window.addEventListener("resize",r):ee&&ce.current&&(c=autoUpdate(ee,ce.current,Ke,{ancestorResize:true,elementResize:true,layoutShift:true}));const s=e=>{"Escape"===e.key&&$e(false);};Ne.escape&&window.addEventListener("keydown",s),Ne.clickOutsideAnchor&&window.addEventListener("click",Me);const a=[],u=e=>{me&&(null==e?undefined:e.target)===ee||ze(e);},p=e=>{me&&(null==e?undefined:e.target)===ee&&De();},v=["mouseover","mouseout","mouseenter","mouseleave","focus","blur"],m=["click","dblclick","mousedown","mouseup"];Object.entries(Re).forEach((([e,t])=>{t&&(v.includes(e)?a.push({event:e,listener:Ve}):m.includes(e)&&a.push({event:e,listener:u}));})),Object.entries(xe).forEach((([e,t])=>{t&&(v.includes(e)?a.push({event:e,listener:Fe}):m.includes(e)&&a.push({event:e,listener:p}));})),T&&a.push({event:"pointermove",listener:He});const y=()=>{_e.current=true;},h=()=>{_e.current=false,De();};return $&&!Ce&&(null===(e=ce.current)||undefined===e||e.addEventListener("mouseenter",y),null===(t=ce.current)||undefined===t||t.addEventListener("mouseleave",h)),a.forEach((({event:e,listener:t})=>{o.forEach((o=>{var l;null===(l=o.current)||undefined===l||l.addEventListener(e,t);}));})),()=>{var e,t;Ne.scroll&&(window.removeEventListener("scroll",r),null==n||n.removeEventListener("scroll",r),null==i||i.removeEventListener("scroll",r)),Ne.resize?window.removeEventListener("resize",r):null==c||c(),Ne.clickOutsideAnchor&&window.removeEventListener("click",Me),Ne.escape&&window.removeEventListener("keydown",s),$&&!Ce&&(null===(e=ce.current)||undefined===e||e.removeEventListener("mouseenter",y),null===(t=ce.current)||undefined===t||t.removeEventListener("mouseleave",h)),a.forEach((({event:e,listener:t})=>{o.forEach((o=>{var l;null===(l=o.current)||undefined===l||l.removeEventListener(e,t);}));}));}}),[ee,Ke,ye,Ee,Oe,H,M,W,Le,A,O]),useEffect((()=>{var e,t;let o=null!==(t=null!==(e=null==we?undefined:we.anchorSelect)&&undefined!==e?e:p)&&undefined!==t?t:"";!o&&l&&(o=`[data-tooltip-id='${l.replace(/'/g,"\\'")}']`);const r=new MutationObserver((e=>{const t=[],r=[];e.forEach((e=>{if("attributes"===e.type&&"data-tooltip-id"===e.attributeName){e.target.getAttribute("data-tooltip-id")===l?t.push(e.target):e.oldValue===l&&r.push(e.target);}if("childList"===e.type){if(ee){const t=[...e.removedNodes].filter((e=>1===e.nodeType));if(o)try{r.push(...t.filter((e=>e.matches(o)))),r.push(...t.flatMap((e=>[...e.querySelectorAll(o)])));}catch(e){}t.some((e=>{var t;return !!(null===(t=null==e?undefined:e.contains)||undefined===t?undefined:t.call(e,ee))&&(he(false),$e(false),te(null),R(ae),R(ue),true)}));}if(o)try{const l=[...e.addedNodes].filter((e=>1===e.nodeType));t.push(...l.filter((e=>e.matches(o)))),t.push(...l.flatMap((e=>[...e.querySelectorAll(o)])));}catch(e){}}})),(t.length||r.length)&&ke((e=>[...e.filter((e=>!r.includes(e))),...t]));}));return r.observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:["data-tooltip-id"],attributeOldValue:true}),()=>{r.disconnect();}}),[l,p,null==we?undefined:we.anchorSelect,ee]),useEffect((()=>{Ke();}),[Ke]),useEffect((()=>{if(!(null==G?undefined:G.current))return ()=>null;const e=new ResizeObserver((()=>{setTimeout((()=>Ke()));}));return e.observe(G.current),()=>{e.disconnect();}}),[Y,null==G?undefined:G.current]),useEffect((()=>{var e;const t=document.querySelector(`[id='${d}']`),o=[...Oe,t];ee&&o.includes(ee)||te(null!==(e=Oe[0])&&undefined!==e?e:t);}),[d,Oe,ee]),useEffect((()=>(J&&$e(true),()=>{R(ae),R(ue);})),[]),useEffect((()=>{var e;let t=null!==(e=null==we?undefined:we.anchorSelect)&&undefined!==e?e:p;if(!t&&l&&(t=`[data-tooltip-id='${l.replace(/'/g,"\\'")}']`),t)try{const e=Array.from(document.querySelectorAll(t));ke(e);}catch(e){ke([]);}}),[l,p,null==we?undefined:we.anchorSelect]),useEffect((()=>{ae.current&&(R(ae),je(A));}),[A]);const Ue=null!==(ie=null==we?undefined:we.content)&&undefined!==ie?ie:Y,Xe=me&&Object.keys(pe.tooltipStyles).length>0;return useImperativeHandle(t,(()=>({open:e=>{if(null==e?undefined:e.anchorSelect)try{document.querySelector(e.anchorSelect);}catch(t){return void console.warn(`[react-tooltip] "${e.anchorSelect}" is not a valid CSS selector`)}be(null!=e?e:null),(null==e?undefined:e.delay)?je(e.delay):$e(true);},close:e=>{(null==e?undefined:e.delay)?Be(e.delay):$e(false);},activeAnchor:ee,place:pe.place,isOpen:Boolean(ye&&!x&&Ue&&Xe)}))),ye&&!x&&Ue?React.createElement(g,{id:l,role:ne,className:y("react-tooltip",z.tooltip,D.tooltip,D[u],i,`react-tooltip__place-${pe.place}`,z[Xe?"show":"closing"],Xe?"react-tooltip__show":"react-tooltip__closing","fixed"===b&&z.fixed,$&&z.clickable),onTransitionEnd:e=>{R(de),me||"opacity"!==e.propertyName||(he(false),be(null),null==U||U());},style:{...V,...pe.tooltipStyles,opacity:undefined!==le&&Xe?le:undefined},ref:ce},Ue,React.createElement(g,{className:y("react-tooltip-arrow",z.arrow,D.arrow,c,N&&z.noArrow),style:{...pe.tooltipArrowStyles,background:re?`linear-gradient(to right bottom, transparent 50%, ${re} 50%)`:undefined},ref:se})):null},H=({content:t})=>React.createElement("span",{dangerouslySetInnerHTML:{__html:t}}),M=React.forwardRef((({id:t,anchorId:l,anchorSelect:n,content:i,html:c,render:a,className:u,classNameArrow:d,variant:p="dark",place:v="top",offset:m=10,wrapper:f="div",children:h=null,events:w=["hover"],openOnClick:b=false,positionStrategy:S="absolute",middlewares:g,delayShow:E=0,delayHide:_=0,float:O=false,hidden:k=false,noArrow:T=false,clickable:L=false,closeOnEsc:C=false,closeOnScroll:R=false,closeOnResize:x=false,openEvents:N,closeEvents:$,globalCloseEvents:I,imperativeModeOnly:B=false,style:z,position:D,isOpen:M,defaultIsOpen:W=false,disableStyleInjection:P=false,border:V,opacity:F,arrowColor:K,setIsOpen:U,afterShow:X,afterHide:Y,disableTooltip:G,role:Z="tooltip"},J)=>{const[Q,ee]=useState(i),[te,oe]=useState(c),[le,re]=useState(v),[ne,ie]=useState(p),[ce,se]=useState(m),[ae,ue]=useState(E),[de,pe]=useState(_),[ve,me]=useState(O),[fe,ye]=useState(k),[he,we]=useState(f),[be,Se]=useState(w),[ge,Ee]=useState(S),[Ae,_e]=useState(null),[Oe,ke]=useState(null),Te=useRef(P),{anchorRefs:Le,activeAnchor:Ce}=j(t),Re=e=>null==e?undefined:e.getAttributeNames().reduce(((t,o)=>{var l;if(o.startsWith("data-tooltip-")){t[o.replace(/^data-tooltip-/,"")]=null!==(l=null==e?undefined:e.getAttribute(o))&&undefined!==l?l:null;}return t}),{}),xe=e=>{const t={place:e=>{var t;re(null!==(t=e)&&undefined!==t?t:v);},content:e=>{ee(null!=e?e:i);},html:e=>{oe(null!=e?e:c);},variant:e=>{var t;ie(null!==(t=e)&&undefined!==t?t:p);},offset:e=>{se(null===e?m:Number(e));},wrapper:e=>{var t;we(null!==(t=e)&&undefined!==t?t:f);},events:e=>{const t=null==e?undefined:e.split(" ");Se(null!=t?t:w);},"position-strategy":e=>{var t;Ee(null!==(t=e)&&undefined!==t?t:S);},"delay-show":e=>{ue(null===e?E:Number(e));},"delay-hide":e=>{pe(null===e?_:Number(e));},float:e=>{me(null===e?O:"true"===e);},hidden:e=>{ye(null===e?k:"true"===e);},"class-name":e=>{_e(e);}};Object.values(t).forEach((e=>e(null))),Object.entries(e).forEach((([e,o])=>{var l;null===(l=t[e])||undefined===l||l.call(t,o);}));};useEffect((()=>{ee(i);}),[i]),useEffect((()=>{oe(c);}),[c]),useEffect((()=>{re(v);}),[v]),useEffect((()=>{ie(p);}),[p]),useEffect((()=>{se(m);}),[m]),useEffect((()=>{ue(E);}),[E]),useEffect((()=>{pe(_);}),[_]),useEffect((()=>{me(O);}),[O]),useEffect((()=>{ye(k);}),[k]),useEffect((()=>{Ee(S);}),[S]),useEffect((()=>{Te.current!==P&&console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.");}),[P]),useEffect((()=>{"undefined"!=typeof window&&window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles",{detail:{disableCore:"core"===P,disableBase:P}}));}),[]),useEffect((()=>{var e;const o=new Set(Le);let r=n;if(!r&&t&&(r=`[data-tooltip-id='${t.replace(/'/g,"\\'")}']`),r)try{document.querySelectorAll(r).forEach((e=>{o.add({current:e});}));}catch(e){console.warn(`[react-tooltip] "${r}" is not a valid CSS selector`);}const i=document.querySelector(`[id='${l}']`);if(i&&o.add({current:i}),!o.size)return ()=>null;const c=null!==(e=null!=Oe?Oe:i)&&undefined!==e?e:Ce.current,s=new MutationObserver((e=>{e.forEach((e=>{var t;if(!c||"attributes"!==e.type||!(null===(t=e.attributeName)||undefined===t?undefined:t.startsWith("data-tooltip-")))return;const o=Re(c);xe(o);}));})),a={attributes:true,childList:false,subtree:false};if(c){const e=Re(c);xe(e),s.observe(c,a);}return ()=>{s.disconnect();}}),[Le,Ce,Oe,l,n]),useEffect((()=>{(null==z?undefined:z.border)&&console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."),V&&!A("border",`${V}`)&&console.warn(`[react-tooltip] "${V}" is not a valid \`border\`.`),(null==z?undefined:z.opacity)&&console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."),F&&!A("opacity",`${F}`)&&console.warn(`[react-tooltip] "${F}" is not a valid \`opacity\`.`);}),[]);let Ne=h;const $e=useRef(null);if(a){const t=a({content:(null==Oe?undefined:Oe.getAttribute("data-tooltip-content"))||Q||null,activeAnchor:Oe});Ne=t?React.createElement("div",{ref:$e,className:"react-tooltip-content-wrapper"},t):null;}else Q&&(Ne=Q);te&&(Ne=React.createElement(H,{content:te}));const Ie={forwardRef:J,id:t,anchorId:l,anchorSelect:n,className:y(u,Ae),classNameArrow:d,content:Ne,contentWrapperRef:$e,place:le,variant:ne,offset:ce,wrapper:he,events:be,openOnClick:b,positionStrategy:ge,middlewares:g,delayShow:ae,delayHide:de,float:ve,hidden:fe,noArrow:T,clickable:L,closeOnEsc:C,closeOnScroll:R,closeOnResize:x,openEvents:N,closeEvents:$,globalCloseEvents:I,imperativeModeOnly:B,style:z,position:D,isOpen:M,defaultIsOpen:W,border:V,opacity:F,arrowColor:K,setIsOpen:U,afterShow:X,afterHide:Y,disableTooltip:G,activeAnchor:Oe,setActiveAnchor:e=>ke(e),role:Z};return React.createElement(q,{...Ie})}));"undefined"!=typeof window&&window.addEventListener("react-tooltip-inject-styles",(e=>{e.detail.disableCore||S({css:`:root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}`,type:"core"}),e.detail.disableBase||S({css:`
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`,type:"base"});}));

var Table = function Table(_ref) {
  var _ref$columns = _ref.columns,
    columns = _ref$columns === undefined ? [] : _ref$columns,
    _ref$columnDisplayNam = _ref.columnDisplayNames,
    columnDisplayNames = _ref$columnDisplayNam === undefined ? [] : _ref$columnDisplayNam,
    _ref$data = _ref.data,
    data = _ref$data === undefined ? [] : _ref$data,
    _ref$title = _ref.title,
    title = _ref$title === undefined ? "" : _ref$title,
    _ref$tableStyle = _ref.tableStyle,
    tableStyle = _ref$tableStyle === undefined ? {} : _ref$tableStyle,
    _ref$hasActionColumn = _ref.hasActionColumn,
    hasActionColumn = _ref$hasActionColumn === undefined ? false : _ref$hasActionColumn,
    _ref$hasViewColumn = _ref.hasViewColumn,
    hasViewColumn = _ref$hasViewColumn === undefined ? false : _ref$hasViewColumn,
    onViewClick = _ref.onViewClick,
    onEditClick = _ref.onEditClick,
    _ref$enablePagination = _ref.enablePagination,
    enablePagination = _ref$enablePagination === undefined ? false : _ref$enablePagination,
    _ref$currentPaginatio = _ref.currentPaginationPage,
    currentPaginationPage = _ref$currentPaginatio === undefined ? 0 : _ref$currentPaginatio,
    paginationCallback = _ref.paginationCallback,
    _ref$hasNextPage = _ref.hasNextPage,
    hasNextPage = _ref$hasNextPage === undefined ? false : _ref$hasNextPage,
    _ref$readPermission = _ref.readPermission,
    readPermission = _ref$readPermission === undefined ? true : _ref$readPermission,
    _ref$writePermission = _ref.writePermission,
    writePermission = _ref$writePermission === undefined ? false : _ref$writePermission,
    _ref$passwordWritePer = _ref.passwordWritePermission,
    passwordWritePermission = _ref$passwordWritePer === undefined ? false : _ref$passwordWritePer,
    _ref$columnHeaderStyl = _ref.columnHeaderStyle,
    columnHeaderStyle = _ref$columnHeaderStyl === undefined ? {} : _ref$columnHeaderStyl,
    _ref$tableRowStyle = _ref.tableRowStyle,
    tableRowStyle = _ref$tableRowStyle === undefined ? {} : _ref$tableRowStyle,
    onDeleteClick = _ref.onDeleteClick,
    _ref$hasResetPassword = _ref.hasResetPasswordColumn,
    hasResetPasswordColumn = _ref$hasResetPassword === undefined ? false : _ref$hasResetPassword,
    onResetPasswordClick = _ref.onResetPasswordClick,
    _ref$defaultItemsPerP = _ref.defaultItemsPerPage,
    defaultItemsPerPage = _ref$defaultItemsPerP === undefined ? 10 : _ref$defaultItemsPerP,
    _ref$itemsPerPageOpti = _ref.itemsPerPageOptions,
    itemsPerPageOptions = _ref$itemsPerPageOpti === undefined ? [10, 50, 100] : _ref$itemsPerPageOpti,
    onItemsPerPageChange = _ref.onItemsPerPageChange,
    component = _ref.component,
    _ref$enableFilter = _ref.enableFilter,
    enableFilter = _ref$enableFilter === undefined ? false : _ref$enableFilter,
    onExport = _ref.onExport,
    _ref$enableExport = _ref.enableExport,
    enableExport = _ref$enableExport === undefined ? false : _ref$enableExport,
    _ref$tableId = _ref.tableId,
    tableId = _ref$tableId === undefined ? "defaultTableId" : _ref$tableId,
    _ref$copyableColumns = _ref.copyableColumns,
    copyableColumns = _ref$copyableColumns === undefined ? [] : _ref$copyableColumns,
    _ref$locale = _ref.locale,
    locale = _ref$locale === undefined ? {
      filterLabel: "Filter",
      noRecords: "There are no records to display at this time.",
      noPermission: "You don't have permission to view this content.",
      previous: "Previous",
      next: "Next",
      itemsPerPageLabel: "Show Items",
      exportButtonLabel: "Export CSV"
    } : _ref$locale;
  var _useState = useState(currentPaginationPage),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage = _useState2[0],
    setCurrentPage = _useState2[1];
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    filterText = _useState4[0],
    setFilterText = _useState4[1];
  var _useState5 = useState(defaultItemsPerPage),
    _useState6 = _slicedToArray(_useState5, 2),
    itemsPerPageSelected = _useState6[0],
    setItemsPerPageSelected = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    copied = _useState8[0],
    setCopied = _useState8[1];
  var totalItems = data.length;
  var pageCount = function pageCount() {
    var dataLength = filterText ? filteredData.length : totalItems;
    return hasNextPage ? Math.ceil(dataLength / itemsPerPageSelected) + 1 : Math.ceil(dataLength / itemsPerPageSelected);
  };
  var handleEditClick = function handleEditClick(row) {
    if (writePermission && onEditClick) {
      onEditClick(row);
    }
  };
  var handleViewClick = function handleViewClick(row) {
    if (onViewClick) {
      onViewClick(row);
    }
  };
  var handleDeleteClick = function handleDeleteClick(row) {
    if (writePermission && onDeleteClick) {
      onDeleteClick(row);
    }
  };
  var handleResetPasswordClick = function handleResetPasswordClick(row) {
    if (passwordWritePermission && onResetPasswordClick) {
      onResetPasswordClick(row);
    }
  };
  useEffect(function () {
    if (!paginationCallback && !onItemsPerPageChange) {
      localStorage.setItem("itemsPerPage-".concat(tableId), itemsPerPageSelected);
    }
  }, [itemsPerPageSelected, tableId]);
  useEffect(function () {
    if (!paginationCallback) {
      var savedPage = localStorage.getItem("currentPage-".concat(tableId));
      if (savedPage !== null) {
        setCurrentPage(parseInt(savedPage, 10));
      }
    } else if (currentPaginationPage !== undefined) {
      setCurrentPage(currentPaginationPage);
    }
  }, [currentPaginationPage, paginationCallback, tableId]);
  var getNestedValue = function getNestedValue(object, path) {
    var pathArray = path.split(".");
    return pathArray.reduce(function (obj, key) {
      return obj && obj[key] || null;
    }, object);
  };
  var handlePageChange = function handlePageChange(selected) {
    var selectedPage = selected.selected;
    if (paginationCallback) {
      paginationCallback(selectedPage);
    } else {
      setCurrentPage(selectedPage);
      localStorage.setItem("currentPage-".concat(tableId), selectedPage);
    }
  };
  var handleItemsPerPageChange = function handleItemsPerPageChange(selectedOption) {
    if (onItemsPerPageChange) {
      onItemsPerPageChange(selectedOption.value);
    } else {
      setItemsPerPageSelected(selectedOption.value);
      setCurrentPage(0);
    }
  };
  var handleFilterChange = function handleFilterChange(e) {
    setFilterText(e.target.value);
    setCurrentPage(0);
  };
  var filteredData = useMemo(function () {
    if (!enableFilter || !filterText) return data;
    return data.filter(function (row) {
      return columns.some(function (column) {
        var cellData = column.includes(".") ? getNestedValue(row, column) || "N/A" : row[column.toLowerCase()];
        return String(cellData).toLowerCase().includes(filterText.toLowerCase());
      });
    });
  }, [filterText, data, columns, enableFilter]);
  var indexOfLastItem = (currentPage + 1) * itemsPerPageSelected;
  var indexOfFirstItem = indexOfLastItem - itemsPerPageSelected;
  var currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  var handleExport = function handleExport() {
    if (onExport) {
      onExport(filteredData, columns, columnDisplayNames);
    }
  };
  var handleCopy = function handleCopy(cellValue) {
    if (!cellValue) return;
    navigator.clipboard.writeText(String(cellValue)).then(function () {
      setCopied(true);
      setTimeout(function () {
        return setCopied(false);
      }, 1000);
    })["catch"](function (err) {
      return console.error("Failed to copy: ", err);
    });
  };
  var renderCellContent = function renderCellContent(cellValue, row, column) {
    var columnName = column.toLowerCase();
    if (copyableColumns.includes(columnName)) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
        className: styles.copyableCell,
        onClick: handleCopy,
        style: {
          cursor: "pointer"
        },
        "data-tooltip-id": "copy-tooltip-".concat(row.id || row[columnName]),
        "data-tooltip-content": copied ? "Copied!" : "Click to copy"
      }, cellValue), /*#__PURE__*/React.createElement(M, {
        id: "copy-tooltip-".concat(row.id || row[columnName]),
        place: "top",
        effect: "solid"
      }));
    }
    return /*#__PURE__*/React.createElement("span", null, cellValue);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: styles.tableContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.titleContainer
  }, title && /*#__PURE__*/React.createElement("p", {
    className: styles.title
  }, title), enableFilter && data.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: styles.filterContainer
  }, /*#__PURE__*/React.createElement("label", {
    className: styles.filterLabel
  }, locale.filterLabel), /*#__PURE__*/React.createElement("div", {
    className: styles.filterInputContainer
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: styles.filterInput,
    value: filterText,
    onChange: handleFilterChange,
    placeholder: "Search content..."
  }), filterText && /*#__PURE__*/React.createElement("button", {
    className: styles.clearFilterButton,
    onClick: function onClick() {
      setFilterText("");
      setCurrentPage(0);
    }
  }, /*#__PURE__*/React.createElement(MdClear, {
    size: 16
  }))))), data.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: styles.recordSummaryWrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.recordSummary
  }, "Displaying ", indexOfFirstItem + 1, " -", " ", indexOfLastItem > totalItems ? totalItems : indexOfLastItem, " of", " ", totalItems, " - Total Records: ", data.length), /*#__PURE__*/React.createElement("div", {
    className: styles.itemsPerPageContainer
  }, /*#__PURE__*/React.createElement("label", {
    className: styles.itemsPerPageLabel
  }, locale.itemsPerPageLabel), /*#__PURE__*/React.createElement(Select, {
    value: {
      value: itemsPerPageSelected,
      label: "".concat(itemsPerPageSelected, " items per page")
    },
    onChange: handleItemsPerPageChange,
    options: itemsPerPageOptions.map(function (option) {
      return {
        value: option,
        label: "".concat(option, " items per page")
      };
    }),
    isSearchable: false,
    placeholder: "Select items per page",
    styles: generateSelectStyles(true)
  }))), filteredData && filteredData.length > 0 && readPermission ? /*#__PURE__*/React.createElement("table", {
    style: tableStyle,
    className: "".concat(styles.table, " ").concat(tableRowStyle)
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(function (column, index) {
    return /*#__PURE__*/React.createElement("th", {
      key: index,
      className: "".concat(styles.columnHeader, " ").concat(columnHeaderStyle)
    }, columnDisplayNames[index]);
  }), hasActionColumn && writePermission && /*#__PURE__*/React.createElement("th", {
    className: "".concat(styles.columnHeader, " ").concat(columnHeaderStyle)
  }, "Edit"), hasViewColumn && /*#__PURE__*/React.createElement("th", {
    className: "".concat(styles.columnHeader, " ").concat(columnHeaderStyle)
  }, "View"), onDeleteClick && writePermission && /*#__PURE__*/React.createElement("th", {
    className: "".concat(styles.columnHeader, " ").concat(columnHeaderStyle)
  }, "Delete"), hasResetPasswordColumn && passwordWritePermission && /*#__PURE__*/React.createElement("th", {
    className: "".concat(styles.columnHeader, " ").concat(columnHeaderStyle)
  }, "Reset Password"))), /*#__PURE__*/React.createElement("tbody", null, currentItems.map(function (row, rowIndex) {
    return /*#__PURE__*/React.createElement("tr", {
      key: rowIndex,
      className: "".concat(styles.tableRow, " ").concat(rowIndex % 2 === 0 ? styles.evenRow : "", " ").concat(tableRowStyle)
    }, columns.map(function (column, columnIndex) {
      var cellData = column.includes(".") ? getNestedValue(row, column) || "N/A" : row[column.toLowerCase()];
      return /*#__PURE__*/React.createElement("td", {
        key: columnIndex,
        className: styles.tableCell
      }, renderCellContent(cellData, row, column));
    }), hasActionColumn && writePermission && /*#__PURE__*/React.createElement("td", {
      className: styles.rightBorderRadius
    }, /*#__PURE__*/React.createElement(MdOutlineModeEditOutline, {
      className: styles.editIcon,
      onClick: function onClick() {
        return handleEditClick(row);
      }
    })), hasViewColumn && /*#__PURE__*/React.createElement("td", {
      className: styles.rightBorderRadius
    }, /*#__PURE__*/React.createElement(MdOutlineRemoveRedEye, {
      className: styles.editIcon,
      onClick: function onClick() {
        return handleViewClick(row);
      }
    })), onDeleteClick && writePermission && /*#__PURE__*/React.createElement("td", {
      className: styles.rightBorderRadius
    }, /*#__PURE__*/React.createElement(MdOutlineDelete, {
      className: styles.editIcon,
      onClick: function onClick() {
        return handleDeleteClick(row);
      }
    })), onResetPasswordClick && passwordWritePermission && /*#__PURE__*/React.createElement("td", {
      className: styles.rightBorderRadius
    }, /*#__PURE__*/React.createElement(MdLockReset, {
      className: styles.editIcon,
      onClick: function onClick() {
        return handleResetPasswordClick(row);
      }
    })));
  }))) : /*#__PURE__*/React.createElement("p", {
    className: styles.warn
  }, readPermission ? locale.noRecords : locale.noPermission), component && component, enablePagination && data.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: styles.paginationContainer
  }, /*#__PURE__*/React.createElement(ReactPaginate, {
    previousLabel: locale.previous,
    nextLabel: locale.next,
    forcePage: currentPage,
    pageCount: pageCount(),
    onPageChange: handlePageChange,
    containerClassName: styles.pagination,
    activeClassName: styles.active,
    nextLinkClassName: !hasNextPage ? "disabledPagination" : "",
    disabledClassName: styles.paginationDisabled,
    nextClassName: hasNextPage === undefined || hasNextPage === false ? "disabled" : ""
  })), enableExport && data.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: styles.exportContainer
  }, /*#__PURE__*/React.createElement("button", {
    className: styles.exportButton,
    onClick: handleExport,
    title: locale.exportButtonLabel
  }, locale.exportButtonLabel)));
};

export { Table as default };
