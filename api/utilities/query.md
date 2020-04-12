---
description: A utility function for composing an inline media query string in CSS.
---

# query

## Specification

The `query` function is great for a shorthand declaration of inline media query in CSS. This function support the same call signature as the `useResponsiveQuery` hook, but unlike the mentioned hook it returns a plain media query string:

```javascript
query({ from: 'md' })
// (min-width: 768px)
```

The main purpose of this utility function is to align your inline media queries declarations with the list of [defined breakpoints](../layout/configure.md#breakpoints) in Atomic Layout, making those a source of truth for both React and non-react usage of responsive behavior.

## Example

### Exact breakpoint

```jsx
import styled from 'styled-components'
import { query } from 'atomic-layout'

export const Example = styled.div`
  font-size: 14px;
  
  /* Targets the "lg" breakpoint only */
  @media ${query({ for: 'lg' })} {
    font-size: 16px;
  }
`
```

### High-pass breakpoint range

To target a breakpoint range starting from a certain breakpoint use the `from` property on `query`: 

```jsx
import styled from 'styled-components'
import { query } from 'atomic-layout'

export const Example = styled.div`
  font-size: 14px;
  
  /*
   * Targets everything after the "md" breakpoint inclusive.
   * Effectively: md, lg, xl.
   */
  @media ${query({ from: 'md' })} {
    font-size: 16px;
  }
`
```

### Low-pass breakpoint range

```jsx
import styled from 'styled-components'
import { query } from 'atomic-layout'

export const Example = styled.div`
  font-size: 14px;
  
  /*
   * Targets everything before the "md" breakpoint exclusive.
   * Effectively: xs, sm, md.
   */
  @media ${query({ to: 'md' })} {
    font-size: 16px;
  }
`
```

### Bell breakpoint range

To create a range from one breakpoint to another use the `from` and `to` properties:

```jsx
import styled from 'styled-components'
import { query } from 'atomic-layout'

export const Example = styled.div`
  font-size: 14px;
  
  /*
   * Targets everything beween the "sm" breakpoint inclusive
   * and the "lg" breakpoint exclusive.
   * Effectively: sm, md.
   */
  @media ${query({ from: 'sm', to: 'lg' })} {
    font-size: 16px;
  }
`
```

### Notch breakpoint range

```jsx
import styled from 'styled-components'
import { query } from 'atomic-layout'

export const Example = styled.div`
  font-size: 14px;
  
  /*
   * Targets everything except between the "sm" breakpoint inclusive
   * and the "lg" breakpoint exclusive.
   * Effectively: xs, lg, xl.
   */
  @media ${query({ except: true, from: 'sm', to: 'lg' })} {
    font-size: 16px;
  }
`
```

### Using custom breakpoints

It is also possible to provide a [Breakpoint](../../fundamentals/breakpoints.md) object as the value of `for`, `from`, and `to` properties.

```jsx
import styled from 'styled-components'
import { query } from 'atomic-layout'

export const Example = styled.div`
  font-size: 14px;
  
  /* Targets only a portrait device orientation */
  @media ${query({ for: { orientation: 'portrait' } )} {
    font-size: 16px;
  }
`
```

