# useViewportChange

## Specification

Executes a given callback on every viewport size change. You can treat this hook as a throttled window resize handler.

{% hint style="info" %}
Viewport changes are throttled by default for optimal performance.
{% endhint %}

## Definition

```typescript
type useViewportChange = (
  callback: () => void,
  debounceDuration?: number,
)
```

## Example

```jsx
import React, { useState } from 'react'
import { useViewportChange } from 'atomic-layout'

export const WidthObserver = ({ target }) => {
  const [windowWidth, setWindowWidth] = useState(0)
  
  useViewportChange(() => {
    setWindowWidth(window.clientWidth)
  })
  
  return <p>Window width: {windowWidth}px</p>
}
```



