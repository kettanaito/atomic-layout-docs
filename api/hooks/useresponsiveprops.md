# useResponsiveProps

The hook adds [Responsive props](../../fundamentals/responsive-props.md) support to any React component by proxying given props based on the current viewport dimensions.

Accepts an Object of responsive props and returns an Object of pure props relevant to the current viewport. Breakpoint name and behavior is stripped out from the pure props.

### Definition

```typescript
type UseResponsiveProps<Props> = (props: Props) => Partial<Props>
```

### Example

```jsx
import React from 'react'
import { useResponsiveProps } from 'atomic-layout'

export const Avatar = (props) => {
  const { url } = useResponsiveProps(props)
  
  return <img src={url} />
}
```

Now the created `Avatar` component supports a `url` prop as a responsive prop:

```jsx
<Avatar
  url="https://backend.dev/avatar/100x100"
  urlMd="https://backend.dev/avatar/250x250"
  urlLg="https://backend.dev/avatar/500x500" />
```

