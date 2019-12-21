# useBreakpointChange

## Specification

Executes a given callback function whenever a breakpoint changes. Provides a breakpoint name that matches the current viewport as the first argument.

{% hint style="info" %}
Breakpoint changes are based on [`useViewportChange`](use-viewport-change.md), and are also debounced.
{% endhint %}

## Definition

```typescript
type useBreakpointChange = (
  callback: (breakpointName: string) => void,
  debounceDuration?: number,
)
```

## Example

```jsx
import React, { useState } from 'react'
import { useBreakpointChange } from 'atomic-layout'

export const Component = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState()

  useBreakpointChange((breakpointName) => {
    setCurrentBreakpoint(breakpointName)
  })
  
  return <p>Current breakpoint: {currentBreakpoint}</p>
})
```

