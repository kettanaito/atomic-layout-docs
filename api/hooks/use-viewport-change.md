# useViewportChange

Executes a given callback on every viewport change \(i.e. window resize\).

{% hint style="info" %}
Viewport changes are debounced by default.
{% endhint %}

### Definition

```typescript
type useViewportChange = (
  callback: () => void,
  debounceDuration?: number,
)
```

### Example

```jsx
import React, { useState } from 'react'
import { useViewportChange } from 'atomic-layout'

const StickyPanel = ({ target }) => {
  const [topOffset, setOffset] = useState(0)
  
  useViewportChange(() => {
    setOffset(target.y)
  })
  
  return ()
}
```

