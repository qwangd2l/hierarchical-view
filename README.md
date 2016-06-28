# d2l-hierarchical-view
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

A [Polymer](https://www.polymer-project.org/1.0/)-based web component and behavior for hierarchical views.

## Installation

`d2l-hierarchical-view` can be installed from [Bower][bower-url]:
```shell
bower install d2l-hierarchical-view
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import the component or behavior.

### Component

```html
<head>
	<script src="https://s.brightspace.com/lib/webcomponentsjs/0.7.21/webcomponents-lite.min.js"></script>
	<link rel="import" href="../d2l-hierarchical-view/d2l-hierarchical-view.html">
</head>
```

Nest the `d2l-hierarchical-view` elements on your page:

```html
<body>
	...
	<d2l-hierarchical-view>
		some view
		<d2l-hierarchical-view id="child">
			child view
		</d2l-hierarchical-view>
	</d2l-hierarchical-view>
	...
</body>
```

Use the `show` and `hide` methods on child views to controls visibility:

```javascript
// to show child (hiding parent)
child.show();

// to hide child (show parent)
child.hide();
```

### Behavior

To implement a custom hierarchical view component, import the `d2l-hierarchical-view-behavior.html` behavior, include the `d2l-hierarchical-view-styles` styles, and define a template containing the `d2l-hierarchical-view-content` class.  For example, see  [d2l-hierarchical-view](https://github.com/Brightspace/d2l-hierarchical-view-ui/blob/master/d2l-hierarchical-view.html).

### Usage in Production

In production, it's recommended to use a build tool like [Vulcanize](https://github.com/Polymer/vulcanize) to combine all your web components into a single import file. [More from the Polymer Docs: Optimize for Production](https://www.polymer-project.org/1.0/tools/optimize-for-production.html)...

## Coding styles

See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=d2l-hierarchical-view
[bower-image]: https://img.shields.io/bower/v/d2l-hierarchical-view.svg
[ci-url]: https://travis-ci.org/Brightspace/d2l-hierarchical-view-ui
[ci-image]: https://travis-ci.org/Brightspace/d2l-hierarchical-view-ui.svg?branch=master
