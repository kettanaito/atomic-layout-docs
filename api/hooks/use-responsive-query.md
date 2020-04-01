# useResponsiveQuery

## Specification

React hook that accepts a responsive props interface and resolves to a boolean verdict, indicating whether current viewport matches the given range.

## Definition

```typescript
type UseResponsiveQuery = (
  params: UseResponsiveQueryParams,
  initialMatches: boolean
) => boolean


interface UseResponsiveQueryParams {
  for: BreakpointRef
  from: BreakpointRef
  to: BreakpointRef
  except: boolean
}

type BreakpointRef = MediaQuery | string
```

## Examples

```jsx
import { useResponsiveQuery } from 'atomic-layout'

export const UsageExample = () => {
  const inScreenRange = useResponsiveQuery({ from: 'sm', to: 'lg' })
  
  return (
    <div>
      {inScreenRange && <h1>Component</h1>}
    </div>
  )
}
```

