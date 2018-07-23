import '../@polymer/polymer/polymer-legacy.js';

import './d2l-hierarchical-view-behavior.js';
import { Polymer } from '../@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '../@polymer/polymer/lib/utils/html-tag.js';
/**
`d2l-hierarchical-view`
Polymer-based web component for nested views

@demo demo/index.html
*/
Polymer({
	_template: html`
		<style include="d2l-hierarchical-view-styles"></style>
		<div class="d2l-hierarchical-view-content">
			<slot></slot>
		</div>
`,

	is: 'd2l-hierarchical-view',

	behaviors: [
		D2L.PolymerBehaviors.HierarchicalViewBehavior
	]
});
