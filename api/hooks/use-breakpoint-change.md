# useBreakpointChange

Executes a given callback function whenever a breakpoint changes.

{% hint style="info" %}
Breakpoint change is based on [`useViewportChange`](use-viewport-change.md), and is also debounced.
{% endhint %}

### Definition

```typescript
type useBreakpointChange = (
  callback: (breakpointName: string) => void,
  debounceDuration?: number,
)
```

### Example

```jsx
import { useState } from 'react'
import { useBreakpointChange } from 'atomic-layout'

const Component = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState()

  useBreakpointChange((breakpointName) => {
    setCurrentBreakpoint(breakpointName)
  })
  
  return <p>Current breakpoint: {currentBreakpoint}</p>
})
```

