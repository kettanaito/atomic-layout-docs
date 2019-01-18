# Only

## Specification

"Only" is a responsive utility component. It allows to control when its children should render. By default, it integrates with the [configured Layout breakpoints](../api/layout/configure.md), allowing quick breakpoint names references.

## Props

| Prop name | Prop type | Default value | Description |
| :--- | :--- | :--- | :--- |
| for | `string | Object` | – | Exact breakpoint name at which to render the children. Has the highest priority whenever provided. |
| from | `string | Object` | – | Starting breakpoint at which to render the children. Can be combined with the other props. |
| to | `string | Object` | – | Ending breakpoint at which to render the children. Can be combined with the other props. |
| except | `boolean` | false | Flag that controls a notch behavior, when set to "true". Can be combined with the other props. |

## Example

### Explicit breakpoint

```jsx
import { Only } from 'atomic-layout'

const Post = () => (
  <>
    <Only for="sm">
      <p>Renders on "sm" breakpoint</p>
    </Only>
    <Only for={{ minWidth: 900, maxWidth: 1000 }}>
      <p>Renders on the custom breakpoint</p>
    </Only>
  </>
)
```

### High-pass

```jsx
import { Only } from 'atomic-layout'

const Post = () => (
  <Only from="md">
    <p>Doesn't render on xs and sm.</p>
  </Only>
)
```

### Low-pass

```jsx
import { Only } from 'atomic-layout'

const Post = () => (
  <Only to="md">
    <p>Doesn't render after md.</p>
  </Only>
)
```

### Bell

```jsx
import { Only } from 'atomic-layout'

const Post = () => (
  <Only from="sm" to="lg">
    <p>Renders only from "sm" up to "lg" (not including).</p>
  </Only>
)
```

### Notch

```jsx
import { Only } from 'atomic-layout'

const Post = () => (
  <Only except from="sm" to="lg">
    <p>Renders on xs and xl.</p>
  </Only>
)
```

### Standalone usage

This component can be used independently from any other components.

```jsx
import React from 'react'
import { Only } from 'atomic-layout'

const Post = (props) => (
  <article>
    <h2>{props.title}</h2>
    <p>{props.content}</p>

    <Only to="sm">
      <a href={props.shareUrl}>Share on Twitter</a>
    </Only>
  </article>
)

export default Post
```

### Custom breakpoints

Apart from passing defined breakpoint names, you can provide a custom [breakpoint](../fundamentals/breakpoints.md) Object to the props of this component. The provided breakpoint's options will be used to control the rendering behavior.

```jsx
import { Only } from 'atomic-layout'

const Post = () => (
  <Only from={{ minWidth: 792 }}>
    <p>Renders on custom breakpoint</p>
  </Only>
)
```

