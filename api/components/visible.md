# Visible

## Specification

"Visible" component is a utility component that displays the given children when a certain responsive condition is met.

{% hint style="info" %}
Current implementation utilizes the `visibility: hidden` and `visibility: visible` CSS properties for dynamically displayed content. That is to preserve a physical space taken by the component and prevent page jumps during Server-Side Rendering.
{% endhint %}

## Props

`<Visible/>` component accepts the same props as the [`<Only/>`](only.md#props) component. Please refer to its description.

## Example

### Explicit breakpoint

```jsx
import React from 'react'
import { Visible } from 'atomic-layout'

const Post = () => (
  <>
    {/* Refer to a breakpoint defined in "Layout.configure()" by name */}
    <Visible for="sm">
      <p>Renders on "sm" breakpoint</p>
    </Visible>
    
    {/* Or, provide a custom breakpoint object */}
    <Visible for={{ minWidth: 900, maxWidth: 1000 }}>
      <p>Renders on the custom breakpoint</p>
    </Visible>
  </>
)
```

### High-pass

High-pass is a display model where the content is shown after a specified breakpoint \(incl.\).

```jsx
import React from 'react'
import { Visible } from 'atomic-layout'

const Post = () => (
  <Visible from="md">
    <p>Is not visible on xs and sm.</p>
  </Visible>
)
```

### Low-pass

Low-pass is a display model where the content is displayed prior to a specified breakpoint.

```jsx
import React from 'react'
import { Visible } from 'atomic-layout'

const Post = () => (
  <Visible to="md">
    <p>Visible only before md breakpoint.</p>
  </Visible>
)
```

### Bell

Bell is a combination of low-pass and high-pass display models. The content is displayed starting from a certain breakpoint, and displayed prior to a certain breakpoint.

```jsx
import React from 'react'
import { Visible } from 'atomic-layout'

const Post = () => (
  <Visible from="sm" to="lg">
    <p>Is visible only from "sm" up to "lg" (not including).</p>
  </Visible>
)
```

### Notch

Notch is the reversed variant of the Bell behavior: the content is visible everywhere **except** the given breakpoints range.

```jsx
import React from 'react'
import { Visible } from 'atomic-layout'

const Post = () => (
  <Visible except from="sm" to="lg">
    <p>Visible on xs and xl.</p>
  </Visible>
)
```

### Standalone usage

This component can be used independently from any other components of the library.

```jsx
import React from 'react'
import { Visible } from 'atomic-layout'

const Post = (props) => (
  <article>
    <h2>{props.title}</h2>
    <p>{props.content}</p>

    <Visible to="sm">
      <a href={props.shareUrl}>Share on Twitter</a>
    </Visible>
  </article>
)

export default Post
```

### Custom breakpoints

Apart from passing defined breakpoint names, you can provide a custom [breakpoint](../../fundamentals/breakpoints.md) Object to the props of this component. The provided breakpoint's options will be used to control the rendering behavior.

```jsx
import React from 'react'
import { Visible } from 'atomic-layout'

const Post = () => (
  <>
    {/* Explicit */}
    <Visible for={{ maxWidth: 568 }}>
      <p>Visible for the given breakpoint</p>
    </Visible>
    
    {/* High-pass */}
    <Visible from={{ minWidth: 792 }}>
      <p>Visible stating from the given breakpoint</p>
    </Visible>
    
    {/* Low-pass */}
    <Visible to={{ maxWidth: 500 }}>
      <p>Visible prior to the given breakpoint.</p>
    </Visible>
    
    {/* Bell */}
    <Visible from={{ minWidth: 568 }} to={{ maxWidth: 769 }}>
      <p>Visible only between the given two breakpoints.</p>
    </Visible>
    
    {/* Notch */}
    <Visible except from={{ minWidth: 568 }} to={{ maxWidth: 769 }}>
      <p>Visible everywhere except the given breakpoint range.</p>
    </Visible>
  </>
)
```





