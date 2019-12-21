# Responsive styles

Atomic Layout stores an application-wide configuration of your layout, including breakpoints. Yet sometimes you may want to declare a manual media query in your styles. In order for the breakpoints to be in-sync, reference the `Layout` namespace from the library, and reference a breakpoint you need:

```jsx
import Layout from 'atomic-layout'

export const CustomComponent = styled.div`
  color: #000;
  
  @media (min-width: ${Layout.breakpoints.md.minWidth}) {
    color: #ffbbcc;
  }
`
```



