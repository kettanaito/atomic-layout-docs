# useResponsiveValue

Returns a value based on the given breakpoint-value pairs. Whenever viewport matches a given breakpoint, its associated value is returned.  Returns the default value, if any, when no breakpoints are matched.

### Definition

```typescript
type useResponsiveValue<T> = (
  breakpoints: Record<string, T>,
  defaultValue?: T,
)
```

### Example

```jsx
import React from 'react'
import { useResponsiveValue } from 'atomic-layout'

export const ReadTime = ({ duration }) => {
  // Truncate a label caption based on the viewport
  const caption = useResponsiveValue(
    {
      // Use contraction on extra-small devices
      xs: 'min.',
    },
    // On all other breakpoints use the full label
    'minutes(s)'
  )
  
  return <p>Reading duration: {duration} {caption}</p>
})
```

