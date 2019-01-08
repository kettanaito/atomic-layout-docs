# Breakpoints

## Breakpoint

Breakpoint is a condition that describes a breaking point of layout acquiring next state. The usage of breakpoints is optional, and is often based on the device's characteristics \(i.e. size, orientation\).

The following properties can be used to describe a breakpoint in Atomic layout:

| **Property name** | **Value type** | **Description** |
| :--- | :--- | :--- |
| `minWidth` | `Numeric` | Minimum device width. |
| `maxWidth` | `Numeric` | Maximum device width. |
| `minHeight` | `Numeric` | Minimum device height. |
| `maxHeight` | `Numeric` | Maximum device height. |
| `minResolution` | `String` | Minimum screen resolution of the device. |
| `maxResolution` | `String` | Maximum screen resolution of the device. |
| `aspectRatio` | `String` | Device screen aspect ratio. |
| `minAspectRatio` | `String` | Minimum aspect ratio of the device. |
| `maxAspectRatio` | `String` | Maximum aspect ratio of the device. |
| `scan` | `interlace` \| `progressive` | Scanning process of the device. |
| `orientation` | `portrait` \| `landscape` | Device viewport orientation. |
| `displayMode` | enum: `fullscreen` \| `standalone` \| `minimal-ui` \| `browser` | Display mode of the application specified in the `manifest.json` |

## Default breakpoints

Atomic layout uses [Bootstrap 4 Grid breakpoints](https://getbootstrap.com/docs/4.0/layout/grid/#grid-options) and mobile-first behavior by default.

| **Breakpoint name** | **xs \(default\)** | **sm** | **md** | **lg** | **xl** |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **Screen width** | &lt;576px | ≥576px | ≥768px | ≥992px | ≥1200px |

## Configuration

* [Default breakpoint name](../api/layout/configure.md#defaultbreakpointname)
* [Custom breakpoints](../api/layout/configure.md#breakpoints)



