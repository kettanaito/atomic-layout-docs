# useMediaQuery

## Specification

Returns a boolean verdict whether device matches the given media query Object.

## Definition

```typescript
type UseMediaQuery = (breakpoint: Breakpoint, initialMatches?: boolean) => boolean
```

Please see the Breakpoints page for the `Breakpoint` type reference:

{% page-ref page="../../fundamentals/breakpoints.md" %}

## Example

```jsx
import React from 'react'
import { useMediaQuery } from 'atomic-layout'

export const Component = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 450 })
  
  return isSmallScreen ? <p>On mobile</p> : <p>On larger screens</p>
}
```

### Using initial match

The hook resolves to `false` upon initial render. To change that behavior pass the initial value as the second argument to the hook:

```jsx
import React from 'react'
import { useMediaQuery } from 'atomic-layout'

export const Component = () => {
  const isPortrait = useMediaQuery({ orientation: 'portrait' }, true)
  
  return <AnotherComponent isPortrait={isPortrait} />
}
```

