# Prop aliases

Atomic layout supports prop aliases for faster development. These props can be assigned to any component exposed by the library, including the generated area components.

{% hint style="info" %}
Values of prop aliases can be applied conditionally. **Read about** [**Responsive props**](responsive-props.md).
{% endhint %}

Each prop alias can be associated with a single, or multiple corresponding CSS properties. See the list of all aliases and their CSS properties in the tables below.

## Grid

| **Prop name** | **CSS property** |
| :--- | :--- |
| `template` | [`grid-template-areas`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas) |
| `templateCols` | [`grid-template-columns`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns) |
| `templateRows` | [`grid-template-rows`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows) |
| `gutter` | [`grid-gutter`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gutter) |
| `gutterCol` | [`gutter-column`](https://developer.mozilla.org/en-US/docs/Web/CSS/gutter-column) |
| `gutterRow` | [`gutter-row`](https://developer.mozilla.org/en-US/docs/Web/CSS/gutter-row) |
| `col` | [`grid-column`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column) |
| `colStart` | [`grid-column-start`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start) |
| `colEnd` | [`grid-column-end`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end) |
| `row` | [`grid-row`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row) |
| `rowStart` | [`grid-row-start`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start) |
| `rowEnd` | [`grid-row-end`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end) |

## Positioning

| **Prop name** | **CSS property** |
| :--- | :--- |
| `align` | [`align-self`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self) |
| `alignItems` | [`align-items`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) |
| `alignContent` | [`align-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content) |
| `justify` | [`justify-self`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self) |
| `justifyItems` | [`justify-items`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items) |
| `justifyContent` | [`justify-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) |
| `place` | `place` |
| `placeItems` | [`place-items`](https://developer.mozilla.org/en-US/docs/Web/CSS/place-items) |
| `placeContent` | [`place-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/place-content) |

## Dimensions

| **Prop name** | **CSS property** |
| :--- | :--- |
| `height` | `height` |
| `width` | `width` |

## Space

| **Prop name** | **CSS property** |
| :--- | :--- |
| `margin` | `margin` |
| `marginVertical` | `margin-top` and `margin-bottom` |
| `marginHorizontal` | `margin-right` and `margin-left` |
| `marginTop` | `margin-top` |
| `marginRight` | `margin-right` |
| `marginBottom` | `margin-bottom` |
| `marginLeft` | `margin-left` |
| `padding` | `padding` |
| `paddingVertical` | `padding-top` and `padding-bottom` |
| `paddingHorizontal` | `padding-right` and `padding-left` |
| `paddingTop` | `padding-top` |
| `paddingRight` | `padding-right` |
| `paddingBottom` | `padding-bottom` |
| `paddingLeft` | `padding-left` |

