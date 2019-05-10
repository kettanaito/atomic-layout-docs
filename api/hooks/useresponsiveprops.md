# useResponsiveProps

Accepts an Object of responsive props and returns an Object of pure props relevant to the current viewport. Breakpoint name and behavior is stripped out from the pure props.

### Definition

```typescript
type UseResponsiveProps<Props> = (Props) => Partial<Props>
```

### Example

```jsx
import { useResponsiveProps } from 'atomic-layout'

const Avatar = (props) => {
  const { size } = useResponsiveProps(props)
  
  return <Image size={size} />
}
```

Now the created `Avatar` component supports a `size` prop as a responsive prop:

```jsx
<Avatar size={100} sizeMd={200} sizeLg={300} />
```

