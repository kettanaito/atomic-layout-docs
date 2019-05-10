# useResponsiveValue

Returns a value based on the given breakpoint-value pairs. Whenever viewport matches a given breakpoint, its associated value is returned. When no breakpoinst are matched, the default value is returned.

### Definition

```typescript
type useResponsiveValue<T> = (
  breakpoints: Record<string, T>,
  defaultValue?: T,
)
```

### Example

```jsx
import { useResponsiveValue } from 'atomic-layout'

const ReadTime = ({ duration }) => {
  const caption = useResponsiveValue({
    xs: 'min.',
  }, 'minutes(s)')
  
  return <p>{duration} {caption}</p>
})
```

