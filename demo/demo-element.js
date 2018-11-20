import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { dom } from '../../@polymer/polymer/lib/legacy/polymer.dom.js';
import '@polymer/polymer/lib/elements/custom-style.js';
import '../../@polymer/iron-demo-helpers/demo-pages-shared-styles.js';
import '@polymer/iron-demo-helpers/demo-snippet.js';
import '../../d2l-typography/d2l-typography.js';
import '../d2l-hierarchical-view.js';

class DemoElement extends PolymerElement {
	static get template() {
		return html`
			<custom-style>
				<style is="custom-style" include="demo-pages-shared-styles"></style>
			</custom-style>
			<custom-style include="d2l-typography">
				<style is="custom-style" include="d2l-typography"></style>
			</custom-style>
			<style>
				html {
					font-size: 20px;
				}
				#view1, #view2a, #view2b, #view3, #view4 {
					border-radius: 0.3rem;
					box-sizing: border-box;
					font-size: 1rem;
				}
				#view1 > div, #view2a > div, #view2b > div, #view3 > div, #view4 > div {
					box-sizing: border-box;
					padding: 1rem;
				}
				#view1 {
					background-color: #c0dfd9;
					border: 1px solid black;
					border-radius: 0.3rem;
				}
				#view2a {
					background-color: #e9ece5;
				}
				#view2b {
					background-color: #b3c2bf;
				}
				#view3 {
					background-color: #3b3a36;
					color: white;
				}
				#view4 {
					background-color: orange;
					color: white;
				}
				#config_buttons > button {
					margin-right: 0.5rem;
				}
				.content {
					border: 1px dotted black;
					font-size: 0.8rem;
				}
				.buttons {
					float: right;
				}
				.info {
					font-size: 0.7rem;
				}
			</style>
			<div class="vertical-section-container centered d2l-typography">

				<h3>Hierarchical View</h3>
				<div id="config_buttons">
					<button id="btn-append-content">Append Content</button>
				</div>
				<demo-snippet>

						<d2l-hierarchical-view id="view1">
							<div style="min-height: 200px;">
								<div class="buttons">
									<button id="btn-view-2a">view 2a</button>
									<button id="btn-view-2b">view 2b</button>
								</div>
								view 1
								<div class="info">min-height: 200</div>
								<div>
									<d2l-hierarchical-view id="view2a">
										<div style="min-height: 400px;">
											<div class="buttons">
												<button id="btn-parent-view-2a">view 1 (parent)</button>
												<button id="btn-view-3">view 3</button>
											</div>
											view 2a
											<div class="info">min-height: 400</div>
											<d2l-hierarchical-view id="view3">
												<div style="min-height: 300px;">
													<div class="buttons">
														<button id="btn-parent-view-3">view 2a (parent)</button>
														<button id="btn-view-4">view 4</button>
													</div>
													view 3
													<div class="info">min-height: 300</div>
													<d2l-hierarchical-view id="view4">
														<div style="min-height: 300px;">
															<div class="buttons">
																<button id="btn-parent-view-4">view 3 (parent)</button>
															</div>
															view 4
															<div class="info">min-height: 300</div>
														</div>
													</d2l-hierarchical-view>
												</div>
											</d2l-hierarchical-view>
										</div>
									</d2l-hierarchical-view>
									<d2l-hierarchical-view id="view2b">
										<div style="min-height: 200px;">
											<div class="buttons">
												<button id="btn-parent-view-2b">view 1 (parent)</button>
											</div>
											view 2b
											<div class="info">min-height: 200</div>
										</div>
									</d2l-hierarchical-view>
								</div>
							</div>
						</d2l-hierarchical-view>

				</demo-snippet>
			</div>
		`;
	}

	ready() {
		super.ready();
		const that = this;
		var focusFirstButton = function(e) {
			var button = e.detail.activeView.querySelector('button');
			if (button) {
				button.focus();
			}
		};

		var rootView = this.shadowRoot.querySelector('#view1');

		rootView.addEventListener('d2l-hierarchical-view-show-complete', function(e) {
			focusFirstButton(e);
		});
		rootView.addEventListener('d2l-hierarchical-view-hide-complete', function(e) {
			focusFirstButton(e);
		});

		var config_buttons = this.shadowRoot.querySelector('#config_buttons');
		var views = this.shadowRoot.querySelectorAll('d2l-hierarchical-view');

		for (var i = 0; i < views.length; i++) {
			var button = document.createElement('button');
			button.appendChild(document.createTextNode('show ' + views[i].id));
			button.setAttribute('data-view-id', views[i].id);
			button.addEventListener('click', function(e) {
				that.shadowRoot.querySelector(`#${e.target.getAttribute('data-view-id')}`).show();
			});
			config_buttons.appendChild(button);
		}

		this.shadowRoot.querySelector('#btn-view-2a').addEventListener('click', function() {
			that.showSubView('view2a');
		});
		this.shadowRoot.querySelector('#btn-view-2b').addEventListener('click', function() {
			that.showSubView('view2b');
		});
		this.shadowRoot.querySelector('#btn-view-3').addEventListener('click', function() {
			that.showSubView('view3');
		});
		this.shadowRoot.querySelector('#btn-view-4').addEventListener('click', function() {
			that.showSubView('view4');
		});
		this.shadowRoot.querySelector('#btn-parent-view-2a').addEventListener('click', function() {
			that.showParentView('view2a');
		});
		this.shadowRoot.querySelector('#btn-parent-view-3').addEventListener('click', function() {
			that.showParentView('view3');
		});
		this.shadowRoot.querySelector('#btn-parent-view-4').addEventListener('click', function() {
			that.showParentView('view4');
		});
		this.shadowRoot.querySelector('#btn-parent-view-2b').addEventListener('click', function() {
			that.showParentView('view2b');
		});
		this.shadowRoot.querySelector('#btn-append-content').addEventListener('click', function() {
			that.appendContent('view1');
		});
	}

	showSubView(id) {
		var view = this.shadowRoot.querySelector(`#${id}`);
		view.show();
	}

	showParentView(id) {
		var view = this.shadowRoot.querySelector(`#${id}`);
		view.hide();
	}

	appendContent(id) {
		var content = document.createElement('div');
		content.className = 'content';
		content.appendChild(document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'));
		var view = this.shadowRoot.querySelector(`#${id}`);
		var activeView = view.getActiveView();
		dom(activeView).appendChild(content);
	}
}

customElements.define('demo-element', DemoElement);
