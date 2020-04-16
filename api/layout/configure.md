# configure\(\)

## Specification

Applies global layout configuration.

{% hint style="warning" %}
Layout is meant to be configured **once**, on the root level of your application.
{% endhint %}

Calling `Layout.configure()` on your application's root mount is usually a good place:

```jsx
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import Layout from 'atomic-layout'

const App = () => {
  useEffect(() => {
    // A single call to configure layout upon App's mount
    Layout.configure(options)
  }, [])
  
  return <Tree />
}

ReactDOM.render(<App />, document.getElementById('root'))
```

## Options

### `defaultUnit`

| Value type | `String` |
| :--- | :--- |
| Default value | `px` |
| Description | Default measurement unit used as a suffix for numeric prop values. |

#### Example

{% code title="src/App.jsx" %}
```jsx
import Layout from 'atomic-layout'

Layout.configure({
  defaultUnit: 'rem',
})
```
{% endcode %}

{% code title="src/components/SomeComponent.jsx" %}
```jsx
<Composition gap={2} /> // reads as "2rem" of "grid-gap"
```
{% endcode %}

### `defaultBehavior`

| Value type | `up | down | only` |
| :--- | :--- |
| Default value | `up` |
| Description | Breakpoint behavior used for responsive props without explicit behavior. |

#### Example

{% code title="src/App.jsx" %}
```jsx
import Layout from 'atomic-layout'

Layout.configure({
  defaultBehavior: 'down',
})
```
{% endcode %}

{% code title="src/components/SomeComponent.jsx" %}
```jsx
<Composition
  template={...}
  templateMd={...} />
```
{% endcode %}

Template prop value is applied for `md` breakpoint and _down_, as contrary to the default, mobile-first behavior, which applies the value from the given breakpoint and _up_.

### `breakpoints`

| Value type | `TBreakpoints` |
| :--- | :--- |
| Default value | Bootstrap 4 breakpoints |
| Description | A map of custom [breakpoints](../../fundamentals/breakpoints.md). |

#### Type definition

```typescript
type TBreakpoint = {
  minHeight?: number,
  maxHeight?: number,
  minWidth?: number,
  maxWidth?: number,
  minResolution?: string,
  maxResolution?: string,
  aspectRatio?: string,
  minAspectRatio?: string,
  maxAspectRatio?: string,
  scan?: 'interlace' | 'progressive',
  orientation?: 'portrait' | 'landscape',
  displayMode?: 'fullscreen' | 'standalone' | 'minimal-ui' | 'browser',
}

type TBreakpoints = {
  [breakpointName: string]: TBreakpoint,
}
```

#### Example

{% code title="src/App.jsx" %}
```jsx
import Layout from 'atomic-layout'

Layout.configure({
  breakpoints: {
    mobile: {
      maxWidth: 500,
    },
    tablet: {
      minWidth: 501,
      maxWidth: 764,
    },
    retina: {
      minResolution: '300dpi',
    },
  },
})
```
{% endcode %}

{% code title="src/components/SomeComponent.jsx" %}
```jsx
<Composition
  areasMobile={...}
  areasTablet={...}
  paddingRetina={10} />
```
{% endcode %}

{% hint style="warning" %}
Make sure to explicitly provide a [default breakpoint name](configure.md#defaultbreakpointname) when using custom breakpoints, so Atomic Layout knows when to apply props that have no breakpoint suffix.
{% endhint %}

### `defaultBreakpointName`

| Value type | `String` |
| :--- | :--- |
| Default value | `"xs"` |
| Description | The name of a default breakpoint used for the props without an explicit breakpoint suffix. |

#### Example

{% code title="src/App.jsx" %}
```jsx
import Layout from 'atomic-layout'

Layout.configure({
  defaultBreakpointName: 'mobile',
  breakpoints: {
    mobile: {
      maxWidth: 576,
    },
    desktop: {
      minWidth: 768,
    },
  },
})
```
{% endcode %}

{% code title="src/components/SomeComponent.jsx" %}
```jsx
<Composition
  padding={...}
  paddingDesktop={...} />
```
{% endcode %}

Breakpoint-less `padding` prop is now applied on the `mobile` breakpoint by default.

