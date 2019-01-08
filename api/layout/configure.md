# configure\(\)

## Specification

Applies global layout configuration.

{% hint style="success" %}
Layout is meant to be configured **once**, on the root level of your application.
{% endhint %}

## Options

### `defaultUnit`

| Value type | `String` |
| :--- | :--- |
| Default value | `px` |
| Description | Default measurement unit used as a suffix for numeric prop values. |

#### Example

{% code-tabs %}
{% code-tabs-item title="src/App.jsx" %}
```jsx
import Layout from 'atomic-layout'

Layout.configure({
    defaultUnit: 'rem',
})
```
{% endcode-tabs-item %}
{% endcode-tabs %}

{% code-tabs %}
{% code-tabs-item title="src/components/SomeComponent.jsx" %}
```jsx
<Composition gutter={2} /> // reads as "2rem" of "grid-gap"
```
{% endcode-tabs-item %}
{% endcode-tabs %}

### `defaultBehavior`

| Value type | `up | down | only` |
| :--- | :--- |
| Default value | `up` |
| Description | Breakpoint behavior used for responsive props without explicit behavior. |

#### Example

{% code-tabs %}
{% code-tabs-item title="src/App.jsx" %}
```jsx
import Layout from 'atomic-layout'

Layout.configure({
    defaultBehavior: 'down',
})
```
{% endcode-tabs-item %}
{% endcode-tabs %}

{% code-tabs %}
{% code-tabs-item title="src/components/SomeComponent.jsx" %}
```jsx
<Composition
    template={...}
    templateMd={...} />
```
{% endcode-tabs-item %}
{% endcode-tabs %}

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

{% code-tabs %}
{% code-tabs-item title="src/App.jsx" %}
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
{% endcode-tabs-item %}
{% endcode-tabs %}

{% code-tabs %}
{% code-tabs-item title="src/components/SomeComponent.jsx" %}
```jsx
<Composition
    templateMobile={...}
    templateTablet={...}
    paddingRetina={10} />
```
{% endcode-tabs-item %}
{% endcode-tabs %}

{% hint style="warning" %}
Make sure to explicitly provide a [default breakpoint name](configure.md#defaultbreakpointname) when using custom breakpoints.
{% endhint %}

### `defaultBreakpointName`

| Value type | `String` |
| :--- | :--- |
| Default value | `"xs"` |
| Description | The name of a default breakpoint used for the props without an explicit breakpoint name. |

#### Example

{% code-tabs %}
{% code-tabs-item title="src/App.jsx" %}
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
{% endcode-tabs-item %}
{% endcode-tabs %}

{% code-tabs %}
{% code-tabs-item title="src/components/SomeComponent.jsx" %}
```jsx
<Composition
    template={...}
    templateDesktop={...} />
```
{% endcode-tabs-item %}
{% endcode-tabs %}

Breakpoint-less template prop now references `mobile` breakpoint.

