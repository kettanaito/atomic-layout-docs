# useViewportChange

Executes a given callback whenever a viewport change occurs.

{% hint style="info" %}
Viewport change \(window resize\) is debounced by default.
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
import { useState } from 'react'
import { useViewportChange } from 'atomic-layout'

const Foo = () => {
  const [state, setState] = useState()
  
  useViewportChange(() => {
    setState(updateStateBasedOnViewport)
  })
}
```

