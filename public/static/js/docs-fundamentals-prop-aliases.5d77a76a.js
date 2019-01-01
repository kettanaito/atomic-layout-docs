(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./components/Hint.jsx":function(e,a,n){"use strict";var t=n("./node_modules/react/index.js"),m=n.n(t);function o(){var e=function(e,a){a||(a=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(a)}}))}(["\n  margin: 2rem 0;\n  padding: 1rem;\n  background-color: ",";\n  border: 0;\n  border-style: solid;\n  border-color: rgb(56, 132, 255);\n  border-left-width: 3px;\n  border-radius: 3px;\n"]);return o=function(){return e},e}var r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js").a.div(o(),function(e){switch(e.variant){case"success":return"rgb(245, 247, 249)";default:return"rgb(245, 247, 249);"}}),p=function(e){var a=e.variant,n=e.children;return m.a.createElement(r,{variant:a},n)};a.a=p,p.__docgenInfo={description:"",methods:[],displayName:"Hint"}},"./docs/fundamentals/prop-aliases.mdx":function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return d});var t=n("./node_modules/react/index.js"),m=n.n(t),o=n("./node_modules/@mdx-js/tag/dist/index.js"),r=n("./components/Hint.jsx");function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,a){if(null==e)return{};var n,t,m=function(e,a){if(null==e)return{};var n,t,m={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(m[n]=e[n]);return m}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(m[n]=e[n])}return m}function c(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function s(e,a){return!a||"object"!==p(a)&&"function"!==typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,a){return(g=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}var d=function(e){function a(e){var n;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),(n=s(this,i(a).call(this,e))).layout=null,n}var n,t,p;return function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&g(e,a)}(a,m.a.Component),n=a,(t=[{key:"render",value:function(){var e=this.props,a=e.components;l(e,["components"]);return m.a.createElement(o.MDXTag,{name:"wrapper",components:a},m.a.createElement(o.MDXTag,{name:"h1",components:a,props:{id:"prop-aliases"}},"Prop aliases"),m.a.createElement(o.MDXTag,{name:"p",components:a},"Atomic layout supports prop aliases for faster development. These props can be assigned to any component exposed by the library, including the generated area components."),m.a.createElement(r.a,null,"Values of prop aliases can be applied conditionally. Read about"," ",m.a.createElement("a",{href:"/fundamentals/responsive-props"},"Responsive props")),m.a.createElement(o.MDXTag,{name:"p",components:a},"Each prop alias can be associated with a single, or multiple corresponding CSS properties. See the list of all aliases and their CSS properties in the tables below."),m.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"grid"}},"Grid"),m.a.createElement(o.MDXTag,{name:"table",components:a},m.a.createElement(o.MDXTag,{name:"thead",components:a,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"th"},"Prop name")),m.a.createElement(o.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"th"},"CSS property")))),m.a.createElement(o.MDXTag,{name:"tbody",components:a,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"template")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"grid-template-areas")))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"templateCols")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"grid-template-columns")))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"templateRows")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"grid-template-rows")))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"gutter")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gutter"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"grid-gutter")))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"gutterCol")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/gutter-column"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"gutter-column")))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"gutterRow")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/gutter-row"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"gutter-row")))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"col")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"grid-column")))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"colStart")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"grid-column-start")))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"colEnd")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"grid-column-end")))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"row")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"grid-row")))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"rowStart")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"grid-row-start")))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"rowEnd")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"grid-row-end")))))),m.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"positioning"}},"Positioning"),m.a.createElement(o.MDXTag,{name:"table",components:a},m.a.createElement(o.MDXTag,{name:"thead",components:a,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"th"},"Prop name")),m.a.createElement(o.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"th"},"CSS property")))),m.a.createElement(o.MDXTag,{name:"tbody",components:a,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"align")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/align-self"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"align-self")))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"alignItems")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/align-items"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"align-items")))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"alignContent")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/align-content"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"align-content")))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"justify")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"justify-self")))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"justifyItems")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"justify-items")))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"justifyContent")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"justify-content")))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"place")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"place"))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"placeItems")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/place-items"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"place-items")))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"placeContent")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/place-content"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"place-content")))))),m.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"dimensions"}},"Dimensions"),m.a.createElement(o.MDXTag,{name:"table",components:a},m.a.createElement(o.MDXTag,{name:"thead",components:a,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"th"},"Prop name")),m.a.createElement(o.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"th"},"CSS property")))),m.a.createElement(o.MDXTag,{name:"tbody",components:a,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"height")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"height"))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"width")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"width"))))),m.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"space"}},"Space"),m.a.createElement(o.MDXTag,{name:"table",components:a},m.a.createElement(o.MDXTag,{name:"thead",components:a,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"th"},"Prop name")),m.a.createElement(o.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"th"},"CSS property")))),m.a.createElement(o.MDXTag,{name:"tbody",components:a,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"margin")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"margin"))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"marginVertical")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"margin-top")," and ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"margin-bottom"))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"marginHorizontal")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"margin-right")," and ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"margin-left"))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"marginTop")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"margin-top"))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"marginRight")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"margin-right"))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"marginBottom")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"margin-bottom"))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"marginLeft")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"margin-left"))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"padding")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"padding"))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"paddingVertical")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"padding-top")," and ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"padding-bottom"))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"paddingHorizontal")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"padding-right")," and ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"padding-left"))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"paddingTop")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"padding-top"))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"paddingRight")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"padding-right"))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"paddingBottom")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"padding-bottom"))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"paddingLeft")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"left"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"padding-left"))))))}}])&&c(n.prototype,t),p&&c(n,p),a}();d.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=docs-fundamentals-prop-aliases.5fd4b2fe77f74c6e4639.js.map