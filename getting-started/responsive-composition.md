# Responsive composition

> Sorry, this page is work-in-progress. Please check it out later.

In the previous part we've learned how to break down any UI element to a composition of areas. Now we are going to focus on responsive changes of our component.

**Let's consider the following design of the Album component on larger screens:**

> Sorry, this page is not yet finished.

Things begin to move around, and you might have started to wonder how many media queries or CSS shenanigans we would need to pull this off. Thankfully, we've got Atomic Layout.

## Areas breakdown

We should start by breaking down a responsive version of our components into areas.

> Actually, since Atomic Layout accounts for a UI unit responsiveness by default, you will notice how similar the entire process is to the initial \(mobile\) layout declaration. Because responsive behavior is not a feature, it's a must.

> Illustrate a breakdown process, new areas.

The layout areas above can be written down using the following template string:

```jsx
// Establishing two columns with thumbnail taking the entire left column,
// content on the top right, and actions on the bottom right.
const areasTablet = `
  thumbnail content
  thumbnail actions
`
```

> Areas template string is a literal visual representation of a UI.

As you already know, the next step would be to provide this template string to the `Composition`. However, if we set the `areasTablet` as the value of the `areas` prop again, it would override the mobile layout, which is not what we want.

**To apply a value of a prop based on a breakpoint we can use a Responsive props feature of Atomic layout.**

## Responsive props

"Responsive prop" is a prop which name is suffixed with a breakpoint name. That way its value will only be applied when the used breakpoint is met. Let's take this by an example.

### Responsive areas

In our use case we need to have a different `areas` prop value on a larger breakpoint. So, if we suffix the `areas` prop name with the breakpoint name we can assign its value conditionally:

```jsx
<Composition
  areas={areasMobile}
  areasMd={areasTablet}
>
```

> `areas` \(prop name\) + `md` \(breakpoint name\) = `areasMd`

By doing so we apply `areasTablet` template string on medium screen sizes **an up**.

{% hint style="info" %}
Atomic Layout is mobile-first, so responsive props apply from the given breakpoint and up, by default. You can always opt-out from this behavior by [configuring your layout](../api/layout/configure.md).
{% endhint %}

### Other properties

Similar to have we applied `areasMd` conditionally, we can specify any other prop to be breakpoint-specific. If we wanted to increase the spacing between the areas on the medium breakpoint, we would follow the same steps:

```jsx
<Composition
  areas={areasMobile}
  areasMd={areasTablet}
  gap={20}
  gapMd={25}
>
```

## Summary

In this section we have learned:

* How to change a layout of our component by introducing a new areas template;
* How to use Responsive props to apply a prop value based on a breakpoint;

