# Explicit media query

Although Atomic Layout provides the [Responsive props](../fundamentals/responsive-props.md) feature for shorter responsive declarations of various CSS properties, sometimes declaring an explicit media query is necessary.

To preserve Atomic Layout breakpoints as a source of truth it's recommended to reference breakpoints' dimensions from the `Layout` namespace exported by the library.

```jsx
import Layout from 'atomic-layout'

export const CustomComponent = styled.div`
  color: #000;
  
  @media (min-width: ${Layout.breakpoints.md.minWidth}) {
    color: #ffbbcc;
  }
`
```

{% hint style="info" %}
See all the breakpoint properties you can use in the [Breakpoints](../fundamentals/breakpoints.md) section.
{% endhint %}



