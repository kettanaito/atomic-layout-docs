# Only

## Specification

"Only" component renders its children according to the media query parameters provided to it via props. By default, it integrates with the [configured Layout breakpoints](../layout/configure.md), allowing quick breakpoint references.

## Props

| Prop name | Prop type | Default value | Description |
| :--- | :--- | :--- | :--- |
| `for` | `string | Object` | – | Exact breakpoint name at which to render the children. Has the highest priority whenever provided. |
| `from` | `string | Object` | – | Starting breakpoint at which to render the children. Can be combined with the other props. |
| `to` | `string | Object` | – | Ending breakpoint at which to render the children. Can be combined with the other props. |
| `except` | `boolean` | `false` | Flag that controls a notch behavior, when set to `true`. Can be combined with the other props. |

## Example

### Explicit breakpoint

```jsx
import React from 'react'
import { Only } from 'atomic-layout'

const Post = () => (
  <>
    {/* Refer to a breakpoint defined in "Layout.configure()" by name */}
    <Only for="sm">
      <p>Renders on "sm" breakpoint</p>
    </Only>
    
    {/* Or, provide a custom breakpoint object */}
    <Only for={{ minWidth: 900, maxWidth: 1000 }}>
      <p>Renders on the custom breakpoint</p>
    </Only>
  </>
)
```

## Display models

### High-pass

High-pass is a display model where the content is shown after a specified breakpoint \(incl.\).

```jsx
import React from 'react'
import { Only } from 'atomic-layout'

const Post = () => (
  <Only from="md">
    <p>Doesn't render on xs and sm.</p>
  </Only>
)
```

### Low-pass

Low-pass is a display model where the content is displayed prior to a specified breakpoint.

```jsx
import React from 'react'
import { Only } from 'atomic-layout'

const Post = () => (
  <Only to="md">
    <p>Doesn't render after md.</p>
  </Only>
)
```

### Bell

Bell is a combination of low-pass and high-pass display models. The content is displayed starting from a certain breakpoint, and displayed prior to a certain breakpoint.

```jsx
import React from 'react'
import { Only } from 'atomic-layout'

const Post = () => (
  <Only from="sm" to="lg">
    <p>Renders only from "sm" up to "lg" (not including).</p>
  </Only>
)
```

### Notch

Notch is the reversed variant of the Bell behavior: the content is rendered everywhere **except** the given breakpoints range.

```jsx
import React from 'react'
import { Only } from 'atomic-layout'

const Post = () => (
  <Only except from="sm" to="lg">
    <p>Renders on xs and xl.</p>
  </Only>
)
```

### Standalone usage

This component can be used independently from any other components of the library.

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

Apart from passing defined breakpoint names, you can provide a custom [breakpoint](../../fundamentals/breakpoints.md) Object to the props of this component. The provided breakpoint's options will be used to control the rendering behavior.

```jsx
import { Only } from 'atomic-layout'

const Post = () => (
  <>
    {/* Explicit */}
    <Only for={{ maxWidth: 568 }}>
      <p>Renders for the given breakpoint</p>
    </Only>
    
    {/* High-pass */}
    <Only from={{ minWidth: 792 }}>
      <p>Renders stating from the given breakpoint</p>
    </Only>
    
    {/* Low-pass */}
    <Only to={{ maxWidth: 500 }}>
      <p>Renders prior to the given breakpoint.</p>
    </Only>
    
    {/* Bell */}
    <Only from={{ minWidth: 568 }} to={{ maxWidth: 769 }}>
      <p>Renders only between the given two breakpoints.</p>
    </Only>
    
    {/* Notch */}
    <Only except from={{ minWidth: 568 }} to={{ maxWidth: 769 }}>
      <p>Renders everywhere except the given breakpoint range.</p>
    </Only>
  </>
)
```

