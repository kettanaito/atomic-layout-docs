# Semantics

Semantics must be retained. Atomic layout allows to render any exposed component as a valid HTML element. That is possible by using the polymorphic prop feature of `styled-components`.

{% hint style="info" %}
Please refer to the [**Polymorphic prop API**](https://www.styled-components.com/docs/api#as-polymorphic-prop) of styled components.
{% endhint %}

## Example

```jsx
import React from 'react'
import { Composition } from 'atomic-layout'
import { Footer as CustomFooter } from '@components'

const PageContent = () => (
  <Composition as="main" template="header footer">
    {({ Header, Footer }) => (
      <>
        <Header as="header">{...}</Header>
        <Footer as={CustomFooter}>{...}</Footer>
      </>
    )}
  </Composition>
)

export default PageContent
```

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



