# Iterative areas

A single template area may be rendered multiple types, for example during the iteration of a list items rendering.

```jsx
import React from 'react'
import { Composition } from 'atomic-layout'

const List = ({ items }) => (
  <Composition template="column" gutter={10}>
    {({ Column }) => items.map((item) => (
      <Column key={item.id} col="auto">{item}</Column> 
    ))}
  </Composition>
)

export default List
```

{% hint style="success" %}
By setting `row` and `col` props to "auto" you enable the auto-placing algorithm.
{% endhint %}

### Using a custom component

It's possible to pass a React component reference as a value to the polymorphic "as" prop. Note, however, that would require you to explicitly spread the `rest` props on your custom component, in order for `styled-components` to properly attach generated class names.

```jsx
import React from 'react'
import { Box } from 'atomic-layout'
import styled from 'styled-components'

const Header = (props) => (
  /**
   * Spreading the props assigns "className" (SC)
   * and the props from Atomic layout.
   */
  <div {...props} />
)

const MyComponent = () => (
  <Box as={Header} height={50} padding={10} />
)

export default MyComponent
```



