webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"navbarContainer\">\n  <app-navbar></app-navbar>\n</div>\n<div id=\"pageContainer\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#navbarContainer {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 99999; }\n\n:host ::ng-deep chart .highcharts-button-symbol {\n  stroke: #dadada; }\n\n:host ::ng-deep chart .highcharts-contextbutton:hover {\n  fill: #f6f6f6;\n  stroke: #f6f6f6; }\n\n:host ::ng-deep chart .highcharts-menu {\n  border-color: #dadada;\n  -webkit-box-shadow: 2px 2px 2px rgba(198, 198, 198, 0.5);\n          box-shadow: 2px 2px 2px rgba(198, 198, 198, 0.5); }\n\n:host ::ng-deep chart .highcharts-menu-item:hover {\n  background-color: #00BCD4; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppComponent = /** @class */ (function () {
    function AppComponent(titleService, router, activatedRoute) {
        this.titleService = titleService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]; })
            .map(function () { return _this.activatedRoute; })
            .map(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        })
            .filter(function (route) { return route.outlet === 'primary'; })
            .mergeMap(function (route) { return route.data; })
            .subscribe(function (event) { return _this.titleService.setTitle(event['title']); });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export highchartsFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_components_results_results_component__ = __webpack_require__("../../../../../src/app/components/results/results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_components_simulations_simulations_component__ = __webpack_require__("../../../../../src/app/components/simulations/simulations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_components_dataset_dataset_component__ = __webpack_require__("../../../../../src/app/components/dataset/dataset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_services_services_module__ = __webpack_require__("../../../../../src/app/services/services.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_multiselect_dropdown__ = __webpack_require__("../../../../angular2-multiselect-dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__kiwigrid_ngx_highcharts__ = __webpack_require__("../../../../@kiwigrid/ngx-highcharts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__kiwigrid_ngx_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__kiwigrid_ngx_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_highcharts_js_highcharts_js__ = __webpack_require__("../../../../highcharts/js/highcharts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_highcharts_js_highcharts_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_highcharts_js_highcharts_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_highcharts_js_modules_heatmap_js__ = __webpack_require__("../../../../highcharts/js/modules/heatmap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_highcharts_js_modules_heatmap_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_highcharts_js_modules_heatmap_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_highcharts_js_highcharts_more_js__ = __webpack_require__("../../../../highcharts/js/highcharts-more.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_highcharts_js_highcharts_more_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_highcharts_js_highcharts_more_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_highcharts_js_modules_no_data_to_display_js__ = __webpack_require__("../../../../highcharts/js/modules/no-data-to-display.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_highcharts_js_modules_no_data_to_display_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_highcharts_js_modules_no_data_to_display_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_highcharts_js_modules_exporting_js__ = __webpack_require__("../../../../highcharts/js/modules/exporting.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_highcharts_js_modules_exporting_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_highcharts_js_modules_exporting_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_highcharts_js_modules_export_data_js__ = __webpack_require__("../../../../highcharts/js/modules/export-data.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_highcharts_js_modules_export_data_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_highcharts_js_modules_export_data_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__kiwigrid_ngx_highcharts_dist_HighchartsService__ = __webpack_require__("../../../../@kiwigrid/ngx-highcharts/dist/HighchartsService.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__kiwigrid_ngx_highcharts_dist_HighchartsService___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__kiwigrid_ngx_highcharts_dist_HighchartsService__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_app_components_results_heatmap_heatmap_component__ = __webpack_require__("../../../../../src/app/components/results/heatmap/heatmap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_results_stacked_area_stacked_area_component__ = __webpack_require__("../../../../../src/app/components/results/stacked-area/stacked-area.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_google_charts__ = __webpack_require__("../../../../ng2-google-charts/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var routes = [
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_5_app_components_about_about_component__["a" /* AboutComponent */], data: { title: 'Wgida/About' } },
    { path: 'results', component: __WEBPACK_IMPORTED_MODULE_6_app_components_results_results_component__["a" /* ResultsComponent */], data: { title: 'Wgida/Results' } },
    { path: 'simulations', component: __WEBPACK_IMPORTED_MODULE_7_app_components_simulations_simulations_component__["a" /* SimulationsComponent */], data: { title: 'Wgida/Simulations' } },
    { path: '**', redirectTo: 'about' },
    { path: '', redirectTo: 'about', pathMatch: 'full' },
];
function highchartsFactory() {
    __WEBPACK_IMPORTED_MODULE_18_highcharts_js_highcharts_more_js__(__WEBPACK_IMPORTED_MODULE_16_highcharts_js_highcharts_js__);
    __WEBPACK_IMPORTED_MODULE_17_highcharts_js_modules_heatmap_js__(__WEBPACK_IMPORTED_MODULE_16_highcharts_js_highcharts_js__);
    __WEBPACK_IMPORTED_MODULE_19_highcharts_js_modules_no_data_to_display_js__(__WEBPACK_IMPORTED_MODULE_16_highcharts_js_highcharts_js__);
    __WEBPACK_IMPORTED_MODULE_20_highcharts_js_modules_exporting_js__(__WEBPACK_IMPORTED_MODULE_16_highcharts_js_highcharts_js__);
    __WEBPACK_IMPORTED_MODULE_21_highcharts_js_modules_export_data_js__(__WEBPACK_IMPORTED_MODULE_16_highcharts_js_highcharts_js__);
    return __WEBPACK_IMPORTED_MODULE_16_highcharts_js_highcharts_js__;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3_app_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4_app_components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5_app_components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_6_app_components_results_results_component__["a" /* ResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_7_app_components_simulations_simulations_component__["a" /* SimulationsComponent */],
                __WEBPACK_IMPORTED_MODULE_8_app_components_dataset_dataset_component__["a" /* DatasetComponent */],
                __WEBPACK_IMPORTED_MODULE_23_app_components_results_heatmap_heatmap_component__["a" /* HeatmapComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_results_stacked_area_stacked_area_component__["a" /* StackedAreaComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forRoot(routes, { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9_app_services_services_module__["a" /* ServicesModule */],
                __WEBPACK_IMPORTED_MODULE_12__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_13_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
                __WEBPACK_IMPORTED_MODULE_15__kiwigrid_ngx_highcharts__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_25_ng2_google_charts__["a" /* Ng2GoogleChartsModule */],
                __WEBPACK_IMPORTED_MODULE_11_ngx_loading__["a" /* LoadingModule */].forRoot({
                    backdropBackgroundColour: 'rgba(246,246,246,0.3)',
                    primaryColour: '#00BCD4',
                    secondaryColour: '#00BCD4',
                    tertiaryColour: '#00BCD4'
                }),
            ],
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_22__kiwigrid_ngx_highcharts_dist_HighchartsService__["HighchartsStatic"],
                    useFactory: highchartsFactory
                }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_app_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p>\n    about works!\n  </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/components/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dataset/dataset.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container p-3\">\n  <ngx-loading [show]=\"loading\"></ngx-loading>\n  <div class=\"row no-gutters p-0\">\n    <div class=\"col-md-9 p-0\">\n      <div id=\"selectRow\" class=\"row no-gutters p-0 col-md-12 align-items-center d-flex\">\n        <div class=\"p-0 pr-3\" [ngClass]=\"submitted? 'col-md-2':'col-md-4'\">\n          <h6>Streams</h6>\n          <angular2-multiselect [data]=\"available.streams\" [(ngModel)]=\"selected.streams\" [settings]=\"selectSettings\" (onSelect)=\"onItemSelect($event)\"\n            (onDeSelect)=\"onItemDeselect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeselectAll($event)\">\n          </angular2-multiselect>\n        </div>\n        <div class=\"p-0 pr-3\" [ngClass]=\"submitted? 'col-md-2':'col-md-4'\">\n          <h6>Sizes</h6>\n          <angular2-multiselect [data]=\"available.sizes\" [(ngModel)]=\"selected.sizes\" [settings]=\"selectSettings\" (onSelect)=\"onItemSelect($event)\"\n            (onDeSelect)=\"onItemDeselect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeselectAll($event)\">\n          </angular2-multiselect>\n        </div>\n        <div class=\"p-0 pr-3\" [ngClass]=\"submitted? 'col-md-2':'col-md-4'\">\n          <h6>Shifts</h6>\n          <angular2-multiselect [data]=\"available.shifts\" [(ngModel)]=\"selected.shifts\" [settings]=\"selectSettings\" (onSelect)=\"onItemSelect($event)\"\n            (onDeSelect)=\"onItemDeselect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeselectAll($event)\">\n          </angular2-multiselect>\n        </div>\n        <div class=\"p-0 pr-3\" [ngClass]=\"submitted? 'col-md-2':'col-md-4 pt-2'\">\n          <h6>Windows</h6>\n          <angular2-multiselect [data]=\"available.windows\" [(ngModel)]=\"selected.windows\" [settings]=\"selectSettings\" (onSelect)=\"onItemSelect($event)\"\n            (onDeSelect)=\"onItemDeselect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeselectAll($event)\">\n          </angular2-multiselect>\n        </div>\n        <div class=\"p-0 pr-3\" [ngClass]=\"submitted? 'col-md-2':'col-md-4 pt-2'\">\n          <h6>Thresholds</h6>\n          <angular2-multiselect [data]=\"available.thresholds\" [(ngModel)]=\"selected.thresholds\" [settings]=\"selectSettings\" (onSelect)=\"onItemSelect($event)\"\n            (onDeSelect)=\"onItemDeselect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeselectAll($event)\">\n          </angular2-multiselect>\n        </div>\n        <div class=\"p-0 pr-3\" [ngClass]=\"submitted? 'col-md-2':'col-md-4 pt-2'\">\n          <h6>Nodes</h6>\n          <angular2-multiselect [data]=\"available.nodes\" [(ngModel)]=\"selected.nodes\" [settings]=\"selectSettings\" (onSelect)=\"onItemSelect($event)\"\n            (onDeSelect)=\"onItemDeselect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeselectAll($event)\">\n          </angular2-multiselect>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3 p-0 row no-gutters align-items-center d-flex flex-row-reverse\">\n      <div class=\"order-2\" [ngClass]=\"submitted? 'col-md-9':'col-md-12'\">\n        <div class=\"row no-gutters justify-content-center align-items-center\">\n          <h1 class=\"m-0\">{{ selectedSimulations.length }}</h1>\n          <h4 class=\"m-0\" [ngClass]=\"submitted? 'mx-2':'ml-3'\">Simulations</h4>\n        </div>\n      </div>\n      <div id=\"buttonContainer\" [ngClass]=\"submitted? 'col-md-3 h-100 order-1':'col-md-12 mt-auto h-50 order-3'\">\n        <button type=\"button\" [disabled]=\"loading || !selectedSimulations.length\" class=\"h-100 w-100 btn btn-secondary\" (click)=\"submit($event)\">\n          <span *ngIf=\"!submitted\">SUBMIT FILTERS</span>\n          <i *ngIf=\"submitted\" class=\"fa fa-filter fa-3x\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dataset/dataset.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.container {\n  position: relative;\n  background: #f6f6f6;\n  -webkit-box-shadow: 0 2px 4px rgba(198, 198, 198, 0.5);\n          box-shadow: 0 2px 4px rgba(198, 198, 198, 0.5);\n  border-style: solid;\n  border-width: 1px;\n  border-top: 0; }\n\n#selectRow .col-md-4 {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-transition: all 300ms ease;\n  transition: all 300ms ease; }\n\n#buttonContainer.col-md-12 {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-transition: all 400ms ease;\n  transition: all 400ms ease; }\n\n#selectRow .col-md-2 {\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n  -webkit-transition: all 300ms ease;\n  transition: all 300ms ease; }\n\n#buttonContainer.col-md-3 {\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n  -webkit-transition: all 400ms ease;\n  transition: all 400ms ease; }\n\nh1,\nh4 {\n  line-height: 100%; }\n\nh6 {\n  margin: 0;\n  margin-bottom: 0.1rem; }\n\nbutton {\n  color: white; }\n\nbutton[disabled] {\n  cursor: not-allowed; }\n\n:host ::ng-deep .wgida-select .selected-list .c-btn {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important; }\n\n:host ::ng-deep .wgida-select .list-area {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important; }\n\n:host ::ng-deep .wgida-select .c-token {\n  background: #00BCD4 !important;\n  overflow: hidden;\n  white-space: nowrap; }\n\n:host ::ng-deep .wgida-select .c-label {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 90%; }\n\n:host ::ng-deep .wgida-select .pure-checkbox label::before {\n  border-color: #00BCD4 !important; }\n\n:host ::ng-deep .wgida-select .pure-checkbox input[type=\"checkbox\"]:checked + label:before {\n  background: #00BCD4 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dataset/dataset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatasetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_dataset_dataset_service__ = __webpack_require__("../../../../../src/app/services/dataset/dataset.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DatasetComponent = /** @class */ (function () {
    function DatasetComponent(datasetService) {
        this.datasetService = datasetService;
        this.selectSettings = {};
        this.selectedSimulations = [];
        this.datasetChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.available = {
            streams: [],
            sizes: [],
            shifts: [],
            windows: [],
            thresholds: [],
            nodes: [],
        };
        this.selected = {
            streams: [],
            sizes: [],
            shifts: [],
            windows: [],
            thresholds: [],
            nodes: [],
        };
    }
    DatasetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.datasetService.getDataset().subscribe(function (data) {
            _this.simulations = data;
            _this.simulations.forEach(function (s) {
                _this.addIfAbsent(_this.available.streams, s.stream.type, s.stream.type);
                _this.addIfAbsent(_this.available.sizes, s.stream.size, s.stream.size.toPrecision(2));
                _this.addIfAbsent(_this.available.shifts, s.stream.shift, s.stream.shift.toPrecision(2));
                _this.addIfAbsent(_this.available.windows, s.config.window, s.config.window.toPrecision(2));
                _this.addIfAbsent(_this.available.thresholds, s.config.threshold, s.config.threshold.toString());
                _this.addIfAbsent(_this.available.nodes, s.config.nodes, s.config.nodes.toString());
            });
            _this.selected.streams = _this.sortSetReturn(_this.available.streams);
            _this.selected.sizes = _this.sortSetReturn(_this.available.sizes);
            _this.selected.shifts = _this.sortSetReturn(_this.available.shifts);
            _this.selected.windows = _this.sortSetReturn(_this.available.windows);
            _this.selected.thresholds = _this.sortSetReturn(_this.available.thresholds);
            _this.selected.nodes = _this.sortSetReturn(_this.available.nodes);
            _this.selectedSimulations = _this.simulations;
            _this.loading = false;
        }, function (error) {
            console.log(error);
        });
        this.selectSettings = {
            text: 'Select Values',
            selectAllText: 'Select All',
            unSelectAllText: 'Deselect All',
            badgeShowLimit: 1,
            classes: 'wgida-select'
        };
    };
    DatasetComponent.prototype.addIfAbsent = function (array, v, label) {
        if (!array.some(function (e) { return e.id === v; })) {
            array.push({ id: v, 'itemName': label });
        }
    };
    DatasetComponent.prototype.sortSetReturn = function (array) {
        var temp = array.sort(function (a, b) { return a.id - b.id; });
        array = temp.slice();
        return Array.from(array);
    };
    DatasetComponent.prototype.onItemSelect = function (item) {
        this.filterSimulations();
    };
    DatasetComponent.prototype.onItemDeselect = function (item) {
        this.filterSimulations();
    };
    DatasetComponent.prototype.onSelectAll = function (items) {
        this.filterSimulations();
    };
    DatasetComponent.prototype.onDeselectAll = function (items) {
        this.filterSimulations();
    };
    DatasetComponent.prototype.filterSimulations = function () {
        var _this = this;
        this.loading = true;
        this.submitted = false;
        setTimeout(function () {
            _this.selectedSimulations = _this.simulations.filter(function (s) {
                return _this.selected.streams.some(function (e) { return e.id === s.stream.type; }) &&
                    _this.selected.sizes.some(function (e) { return e.id === s.stream.size; }) &&
                    _this.selected.shifts.some(function (e) { return e.id === s.stream.shift; }) &&
                    _this.selected.windows.some(function (e) { return e.id === s.config.window; }) &&
                    _this.selected.thresholds.some(function (e) { return e.id === s.config.threshold; }) &&
                    _this.selected.nodes.some(function (e) { return e.id === s.config.nodes; });
            });
            _this.loading = false;
        }, 100);
    };
    DatasetComponent.prototype.submit = function (event) {
        var _this = this;
        this.submitted = !this.submitted;
        if (this.submitted) {
            this.selectSettings = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["merge"])(this.selectSettings, { badgeShowLimit: 1 });
            Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["keys"])(this.selected).forEach(function (e) { return _this.selected[e] = _this.sortSetReturn(_this.selected[e]); });
            this.datasetChange.emit({
                dataset: this.selectedSimulations,
                filters: this.selected
            });
        }
        else {
            this.selectSettings = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["merge"])(this.selectSettings, { badgeShowLimit: 3 });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DatasetComponent.prototype, "datasetChange", void 0);
    DatasetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dataset',
            template: __webpack_require__("../../../../../src/app/components/dataset/dataset.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dataset/dataset.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_dataset_dataset_service__["a" /* DatasetService */]])
    ], DatasetComponent);
    return DatasetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav id=\"navbar\" class=\"navbar navbar-expand-md navbar-inverse py-0\">\n  <div id=\"navbarContainer\" class=\"container h-100 align-items-center\">\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <a class=\"navbar-brand h-100 d-flex align-items-center\" href=\"#\">WGIDA</a>\n\n    <div id=\"navbarSupportedContent\" class=\"collapse navbar-collapse h-100 justify-content-end\">\n      <ul class=\"navbar-nav h-100\">\n        <li class=\"nav-item h-100\">\n          <a class=\"nav-link h-100 px-4\" routerLink=\"about\" [routerLinkActive]=\"['navbar-active']\">\n            About\n          </a>\n        </li>\n        <li class=\"nav-item h-100\">\n          <a class=\"nav-link h-100 px-4\" routerLink=\"results\" [routerLinkActive]=\"['navbar-active']\">\n            Results\n          </a>\n        </li>\n        <li class=\"nav-item h-100\">\n          <a class=\"nav-link h-100 px-4\" routerLink=\"simulations\" [routerLinkActive]=\"['navbar-active']\">\n            Simulations\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#navbar {\n  background-color: #00BCD4;\n  height: 48px; }\n\na.navbar-brand {\n  color: white; }\n\na.nav-link {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: white; }\n\na.nav-link:hover {\n    color: #311B92; }\n\na.navbar-active {\n  color: #311B92;\n  background-color: #f6f6f6; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/results/chart-options.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highcharts_js_highcharts_js__ = __webpack_require__("../../../../highcharts/js/highcharts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highcharts_js_highcharts_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_highcharts_js_highcharts_js__);

var ChartOptions = /** @class */ (function () {
    function ChartOptions() {
    }
    ChartOptions.prColumnChart = {
        xAxis: { categories: ['Vanilla', 'Simple', 'Splitter', 'Perfect'] },
        yAxis: [{ title: { text: null }, min: 0, max: 1 }],
        series: [
            { id: 'precision', type: 'column', name: 'Precision' },
            { id: 'recall', type: 'column', name: 'Recall' },
        ],
        plotOptions: {
            column: {
                pointPadding: 0,
            }
        },
        exporting: {
            buttons: {
                contextButton: {
                    menuItems: ['downloadCSV', 'separator', 'downloadPNG', 'downloadSVG']
                }
            }
        },
        credits: { enabled: false }
    };
    ChartOptions.ocStackedColumnChart = {
        chart: { type: 'column' },
        xAxis: { categories: ['Vanilla', 'Simple', 'Splitter', 'Perfect'] },
        yAxis: [{
                title: { text: null },
                min: 0,
                stackLabels: {
                    enabled: true,
                    formatter: function () {
                        return __WEBPACK_IMPORTED_MODULE_0_highcharts_js_highcharts_js__["numberFormat"]((this.total), 4, '.') + '%';
                    }
                },
                labels: {
                    format: '{value}%'
                }
            }],
        series: [
            { id: 'identify', name: 'Identify' },
            { id: 'freq_req', name: 'FreqReq' },
            { id: 'freq_rep', name: 'FreqRep' },
            { id: 'verify', name: 'Verify' },
            { id: 'active_gi', name: 'ActiveGI' },
        ],
        tooltip: {
            formatter: function () {
                return '<span class="highcharts-color-' + this.colorIndex + '">\u25CF</span> ' +
                    this.series.name + ': <b>' +
                    __WEBPACK_IMPORTED_MODULE_0_highcharts_js_highcharts_js__["numberFormat"]((this.y), 4, '.') + '%</b><br/><b>' +
                    __WEBPACK_IMPORTED_MODULE_0_highcharts_js_highcharts_js__["numberFormat"]((this.y / this.point.stackTotal) * 100, 2, '.') + '%</b> of total';
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0,
                stacking: 'normal',
            }
        },
        exporting: {
            buttons: {
                contextButton: {
                    menuItems: ['downloadCSV', 'separator', 'downloadPNG', 'downloadSVG']
                }
            }
        },
        credits: { enabled: false }
    };
    return ChartOptions;
}());



/***/ }),

/***/ "../../../../../src/app/components/results/heatmap/chart-options.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartOptions; });
var ChartOptions = /** @class */ (function () {
    function ChartOptions() {
    }
    ChartOptions.heatmapChart = {
        chart: { type: 'heatmap' },
        xAxis: { categories: [] },
        yAxis: { categories: [] },
        series: [{
                borderWidth: 1,
                dataLabels: {
                    enabled: false,
                    color: '#000000'
                }
            }],
        colorAxis: {
            min: 0,
            max: 1,
            stops: [[0, '#E57373'], [0.5, '#FFF176'], [1, '#81C784']]
        },
        legend: {
            align: 'right',
            layout: 'vertical',
            verticalAlign: 'top',
            y: 27,
            symbolHeight: 140
        },
        tooltip: {
            formatter: function () {
                return '(<b>' + this.series.xAxis.categories[this.point.x] + '</b> : ' +
                    '<b>' + this.series.yAxis.categories[this.point.y] + '</b>)<br>' +
                    this.series.name + ': <b>' + this.point.value + '</b>';
            }
        },
        exporting: {
            buttons: {
                contextButton: {
                    menuItems: ['downloadCSV', 'separator', 'downloadPNG', 'downloadSVG']
                }
            }
        },
        credits: { enabled: false }
    };
    return ChartOptions;
}());



/***/ }),

/***/ "../../../../../src/app/components/results/heatmap/heatmap.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"h-100 w-100\">\n  <div class=\"row no-gutters col-md-12 h-50\">\n    <div class=\"h-100 col-md-3\">\n      <chart class=\"h-100 row no-gutters\" [options]=\"opts.p_van\" (load)=\"pVanHeatmapChart = $event.context\"></chart>\n    </div>\n    <div class=\"h-100 col-md-3\">\n      <chart class=\"h-100 row no-gutters\" [options]=\"opts.p_sim\" (load)=\"pSimHeatmapChart = $event.context\"></chart>\n    </div>\n    <div class=\"h-100 col-md-3\">\n      <chart class=\"h-100 row no-gutters\" [options]=\"opts.p_spl\" (load)=\"pSplHeatmapChart = $event.context\"></chart>\n    </div>\n    <div class=\"h-100 col-md-3\">\n      <chart class=\"h-100 row no-gutters\" [options]=\"opts.p_per\" (load)=\"pPerHeatmapChart = $event.context\"></chart>\n    </div>\n  </div>\n  <div class=\"row no-gutters col-md-12 h-50\">\n    <div class=\"h-100 col-md-3\">\n      <chart class=\"h-100 row no-gutters\" [options]=\"opts.r_van\" (load)=\"rVanHeatmapChart = $event.context\"></chart>\n    </div>\n    <div class=\"h-100 col-md-3\">\n      <chart class=\"h-100 row no-gutters\" [options]=\"opts.r_sim\" (load)=\"rSimHeatmapChart = $event.context\"></chart>\n    </div>\n    <div class=\"h-100 col-md-3\">\n      <chart class=\"h-100 row no-gutters\" [options]=\"opts.r_spl\" (load)=\"rSplHeatmapChart = $event.context\"></chart>\n    </div>\n    <div class=\"h-100 col-md-3\">\n      <chart class=\"h-100 row no-gutters\" [options]=\"opts.r_per\" (load)=\"rPerHeatmapChart = $event.context\"></chart>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/results/heatmap/heatmap.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host ::ng-deep .highcharts-container {\n  font-size: 0.5em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/results/heatmap/heatmap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeatmapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chart_options__ = __webpack_require__("../../../../../src/app/components/results/heatmap/chart-options.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeatmapComponent = /** @class */ (function () {
    function HeatmapComponent() {
        this.opts = {
            p_van: Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["assign"])({ title: { 'text': '<b>Vanilla</b> Precision' } }, __WEBPACK_IMPORTED_MODULE_2__chart_options__["a" /* ChartOptions */].heatmapChart),
            p_sim: Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["assign"])({ title: { 'text': '<b>Simple</b> Precision' } }, __WEBPACK_IMPORTED_MODULE_2__chart_options__["a" /* ChartOptions */].heatmapChart),
            p_spl: Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["assign"])({ title: { 'text': '<b>Splitter</b> Precision' } }, __WEBPACK_IMPORTED_MODULE_2__chart_options__["a" /* ChartOptions */].heatmapChart),
            p_per: Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["assign"])({ title: { 'text': '<b>Perfect</b> Precision' } }, __WEBPACK_IMPORTED_MODULE_2__chart_options__["a" /* ChartOptions */].heatmapChart),
            r_van: Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["assign"])({ title: { 'text': '<b>Vanilla</b> Recall' } }, __WEBPACK_IMPORTED_MODULE_2__chart_options__["a" /* ChartOptions */].heatmapChart),
            r_sim: Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["assign"])({ title: { 'text': '<b>Simple</b> Recall' } }, __WEBPACK_IMPORTED_MODULE_2__chart_options__["a" /* ChartOptions */].heatmapChart),
            r_spl: Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["assign"])({ title: { 'text': '<b>Splitter</b> Recall' } }, __WEBPACK_IMPORTED_MODULE_2__chart_options__["a" /* ChartOptions */].heatmapChart),
            r_per: Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["assign"])({ title: { 'text': '<b>Perfect</b> Recall' } }, __WEBPACK_IMPORTED_MODULE_2__chart_options__["a" /* ChartOptions */].heatmapChart),
        };
    }
    HeatmapComponent.prototype.ngOnInit = function () {
    };
    HeatmapComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            if (propName === 'heatmapOptions') {
                var chng = changes[propName];
                this.onHeatmapOptionsChange(chng.currentValue);
            }
        }
    };
    HeatmapComponent.prototype.onHeatmapOptionsChange = function (heatmapOptions) {
        this.heatmapOptions = heatmapOptions;
        this.setHeatmapOptions(this.pVanHeatmapChart, heatmapOptions, 'Precision', heatmapOptions.data.van[0]);
        this.setHeatmapOptions(this.pSimHeatmapChart, heatmapOptions, 'Precision', heatmapOptions.data.sim[0]);
        this.setHeatmapOptions(this.pSplHeatmapChart, heatmapOptions, 'Precision', heatmapOptions.data.spl[0]);
        this.setHeatmapOptions(this.pPerHeatmapChart, heatmapOptions, 'Precision', heatmapOptions.data.per[0]);
        this.setHeatmapOptions(this.rVanHeatmapChart, heatmapOptions, 'Recall', heatmapOptions.data.van[1]);
        this.setHeatmapOptions(this.rSimHeatmapChart, heatmapOptions, 'Recall', heatmapOptions.data.sim[1]);
        this.setHeatmapOptions(this.rSplHeatmapChart, heatmapOptions, 'Recall', heatmapOptions.data.spl[1]);
        this.setHeatmapOptions(this.rPerHeatmapChart, heatmapOptions, 'Recall', heatmapOptions.data.per[1]);
    };
    HeatmapComponent.prototype.setHeatmapOptions = function (chart, options, seriesName, data) {
        if (chart) {
            chart.xAxis[0].setTitle({ text: options.xTitle });
            chart.xAxis[0].setCategories(options.xCategories);
            chart.yAxis[0].setTitle({ text: options.yTitle });
            chart.yAxis[0].setCategories(options.yCategories);
            chart.series[0].update({ name: seriesName });
            chart.series[0].setData(data);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HeatmapComponent.prototype, "heatmapOptions", void 0);
    HeatmapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-heatmap',
            template: __webpack_require__("../../../../../src/app/components/results/heatmap/heatmap.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/results/heatmap/heatmap.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeatmapComponent);
    return HeatmapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/results/results.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"datasetContainer\">\n  <app-dataset (datasetChange)=\"onDatasetChange($event)\"></app-dataset>\n</div>\n<div class=\"container my-3 p-0\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h4 class=\"m-0\">Precision and Recall - Overall</h4>\n    </div>\n    <div class=\"card-body\">\n      <ngx-loading [show]=\"loaders.prOverall\"></ngx-loading>\n      <div id=\"prColumnChartRow\" class=\"row no-gutters col-md-12\">\n        <div class=\"col-md-6 h-100\">\n          <chart class=\"h-100 row no-gutters\" [options]=\"options.prColumnChartSliding\" (load)=\"prColumnChartSliding = $event.context\"></chart>\n        </div>\n        <div class=\"col-md-6 h-100\">\n          <chart class=\"h-100 row no-gutters\" [options]=\"options.prColumnChartDetected\" (load)=\"prColumnChartDetected = $event.context\"></chart>\n          <p></p>\n        </div>\n      </div>\n      <div id=\"disclaimerRow\" class=\"row no-gutters col-md-12\">\n        <p class=\"col-md-6 px-3 pb-3 m-0\">\n          * Precision and recall are computed for every sliding window considering the set of global icebergs that are active in that\n          window and the set of the ones detected by the algorithm.\n        </p>\n        <p class=\"col-md-6 px-3 pb-3 m-0\">\n          ** Precision and recall are computed for the whole simulation considering the set of all generated global icebergs and the\n          set of the ones detected by the algorithm.\n        </p>\n      </div>\n    </div>\n  </div>\n  <div class=\"card mt-3\">\n    <div class=\"card-header\">\n      <h4 class=\"m-0\">Precision and Recall - Heatmaps</h4>\n    </div>\n    <div class=\"card-body\">\n      <ngx-loading [show]=\"loaders.prHeatmaps\"></ngx-loading>\n      <div class=\"w-100 heatmap-container\">\n        <app-heatmap [heatmapOptions]=\"heatmaps[0]\"></app-heatmap>\n      </div>\n      <div class=\"w-100 heatmap-container\">\n        <app-heatmap [heatmapOptions]=\"heatmaps[1]\"></app-heatmap>\n      </div>\n    </div>\n  </div>\n  <div class=\"card mt-3\">\n    <div class=\"card-header\">\n      <h4 class=\"m-0\">Communication - Overall</h4>\n    </div>\n    <div class=\"card-body\">\n      <ngx-loading [show]=\"loaders.commOverall\"></ngx-loading>\n      <div id=\"overallCommunicationRow\" class=\"row no-gutters col-md-12\">\n        <div class=\"col-md-6 h-100\">\n          <chart class=\"h-100 row no-gutters\" [options]=\"options.ocMessages\" (load)=\"ocMessagesChart = $event.context\"></chart>\n        </div>\n        <div class=\"col-md-6 h-100\">\n          <chart class=\"h-100 row no-gutters\" [options]=\"options.ocPayloads\" (load)=\"ocPayloadsChart = $event.context\"></chart>\n          <p></p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card mt-3\">\n    <div class=\"card-header\">\n      <h4 class=\"m-0\">Communication - Thresholds</h4>\n    </div>\n    <div class=\"card-body\">\n      <ngx-loading [show]=\"loaders.commThresholds\"></ngx-loading>\n      <div class=\"w-100 stacked-area-container\">\n        <app-stacked-area [stackedAreaOptions]=\"stackedAreas[0]\"></app-stacked-area>\n      </div>\n    </div>\n  </div>\n  <div class=\"card mt-3\">\n    <div class=\"card-header\">\n      <h4 class=\"m-0\">Communication - Windows</h4>\n    </div>\n    <div class=\"card-body\">\n      <ngx-loading [show]=\"loaders.commWindows\"></ngx-loading>\n      <div class=\"w-100 stacked-area-container\">\n        <app-stacked-area [stackedAreaOptions]=\"stackedAreas[1]\"></app-stacked-area>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/results/results.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.container {\n  position: relative; }\n\ndiv.card-body {\n  position: relative; }\n\n#datasetContainer {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 48px;\n  z-index: 99998; }\n\n#prColumnChartRow {\n  height: 400px; }\n\n#prColumnChartRow ::ng-deep chart .highcharts-color-0 {\n  fill: #9575CD;\n  stroke: #9575CD; }\n\n#prColumnChartRow ::ng-deep chart .highcharts-color-1 {\n  fill: #4DD0E1;\n  stroke: #4DD0E1; }\n\n#disclaimerRow p {\n  font-weight: 300; }\n\n.heatmap-container {\n  height: 450px; }\n\n#overallCommunicationRow {\n  height: 400px; }\n\n#overallCommunicationRow ::ng-deep chart .highcharts-color-0 {\n  fill: #4DB6AC;\n  stroke: #4DB6AC; }\n\n#overallCommunicationRow ::ng-deep chart .highcharts-color-1 {\n  fill: #9575CD;\n  stroke: #9575CD; }\n\n#overallCommunicationRow ::ng-deep chart .highcharts-color-2 {\n  fill: #AED581;\n  stroke: #AED581; }\n\n#overallCommunicationRow ::ng-deep chart .highcharts-color-3 {\n  fill: #4DD0E1;\n  stroke: #4DD0E1; }\n\n#overallCommunicationRow ::ng-deep chart .highcharts-color-4 {\n  fill: #90A4AE;\n  stroke: #90A4AE; }\n\n.stacked-area-container {\n  height: 1000px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/results/results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chart_options__ = __webpack_require__("../../../../../src/app/components/results/chart-options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_dataset_dataset_service__ = __webpack_require__("../../../../../src/app/services/dataset/dataset.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_utils_ChartUtils__ = __webpack_require__("../../../../../src/app/utils/ChartUtils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResultsComponent = /** @class */ (function () {
    function ResultsComponent(datasetService) {
        this.datasetService = datasetService;
        this.algorithms = ['van', 'sim', 'spl', 'per'];
        this.messages = ['identify', 'freq_req', 'freq_rep', 'verify', 'active_gi'];
        this.loaders = {
            prOverall: false,
            prHeatmaps: false,
            commOverall: false,
            commWindows: false,
            commThresholds: false,
        };
        this.options = {
            prColumnChartSliding: Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["assign"])({
                title: { text: 'Global Iceberg detection in sliding windows *' }
            }, __WEBPACK_IMPORTED_MODULE_2__chart_options__["a" /* ChartOptions */].prColumnChart),
            prColumnChartDetected: Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["assign"])({
                title: { text: 'Global Iceberg detection over whole simulation **' }
            }, __WEBPACK_IMPORTED_MODULE_2__chart_options__["a" /* ChartOptions */].prColumnChart),
            ocMessages: Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["assign"])({
                title: { text: 'Exchanged messages as percentage of the stream size' }
            }, __WEBPACK_IMPORTED_MODULE_2__chart_options__["a" /* ChartOptions */].ocStackedColumnChart),
            ocPayloads: Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["assign"])({
                title: { text: 'Exchanged payloads as percentage of the stream size' }
            }, __WEBPACK_IMPORTED_MODULE_2__chart_options__["a" /* ChartOptions */].ocStackedColumnChart)
        };
        this.heatmaps = [{
                xTitle: 'Shifts', xCategories: [],
                yTitle: 'Windows', yCategories: [],
                data: { van: [[], []], sim: [[], []], spl: [[], []], per: [[], []] }
            }, {
                xTitle: 'Windows', xCategories: [],
                yTitle: 'Thresholds', yCategories: [],
                data: { van: [[], []], sim: [[], []], spl: [[], []], per: [[], []] }
            }];
        this.stackedAreas = [{
                xTitle: 'Thresholds', xCategories: [],
                data: { van: [], sim: [], spl: [], per: [] }
            }, {
                xTitle: 'Windows', xCategories: [],
                data: { van: [], sim: [], spl: [], per: [] }
            }];
    }
    ResultsComponent.prototype.ngOnInit = function () {
    };
    ResultsComponent.prototype.ngOnDestroy = function () {
        __WEBPACK_IMPORTED_MODULE_4_app_utils_ChartUtils__["a" /* ChartUtils */].clearChart(this.prColumnChartSliding);
        __WEBPACK_IMPORTED_MODULE_4_app_utils_ChartUtils__["a" /* ChartUtils */].clearChart(this.prColumnChartDetected);
        __WEBPACK_IMPORTED_MODULE_4_app_utils_ChartUtils__["a" /* ChartUtils */].clearChart(this.ocMessagesChart);
        __WEBPACK_IMPORTED_MODULE_4_app_utils_ChartUtils__["a" /* ChartUtils */].clearChart(this.ocPayloadsChart);
    };
    ResultsComponent.prototype.onDatasetChange = function (event) {
        var _this = this;
        this.simulations = event.dataset;
        this.filters = event.filters;
        Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["keys"])(this.loaders).forEach(function (k) { return _this.loaders[k] = true; });
        setTimeout(function () { return _this.datasetService.parseDataset(_this.simulations).then(function () {
            setTimeout(function () { return _this.updatePROverall(); }, 100);
            setTimeout(function () { return _this.updateHeatmaps(); }, 100);
            setTimeout(function () { return _this.updateCommOverall(); }, 100);
            setTimeout(function () { return _this.updateStackedAreas(); }, 100);
        }).catch(function (e) { return console.log(e); }); }, 200);
    };
    ResultsComponent.prototype.updatePROverall = function () {
        this.updatePRCCSliding();
        this.updatePRCCDetected();
        this.loaders.prOverall = false;
    };
    ResultsComponent.prototype.updatePRCCSliding = function () {
        this.prColumnChartSliding.get('precision').setData([
            this.avg(this.simulations.map(function (s) { return s.van.precision; })),
            this.avg(this.simulations.map(function (s) { return s.sim.precision; })),
            this.avg(this.simulations.map(function (s) { return s.spl.precision; })),
            this.avg(this.simulations.map(function (s) { return s.per.precision; })),
        ]);
        this.prColumnChartSliding.get('recall').setData([
            this.avg(this.simulations.map(function (s) { return s.van.recall; })),
            this.avg(this.simulations.map(function (s) { return s.sim.recall; })),
            this.avg(this.simulations.map(function (s) { return s.spl.recall; })),
            this.avg(this.simulations.map(function (s) { return s.per.recall; })),
        ]);
    };
    ResultsComponent.prototype.updatePRCCDetected = function () {
        var _this = this;
        var pr_van = this.simulations.map(function (s) { return _this.prOfDetectedGIs(s.generated, s.van.detected); });
        var pr_sim = this.simulations.map(function (s) { return _this.prOfDetectedGIs(s.generated, s.sim.detected); });
        var pr_spl = this.simulations.map(function (s) { return _this.prOfDetectedGIs(s.generated, s.spl.detected); });
        var pr_per = this.simulations.map(function (s) { return _this.prOfDetectedGIs(s.generated, s.per.detected); });
        this.prColumnChartDetected.get('precision').setData([
            this.avg(pr_van.map(function (e) { return e[0]; })),
            this.avg(pr_sim.map(function (e) { return e[0]; })),
            this.avg(pr_spl.map(function (e) { return e[0]; })),
            this.avg(pr_per.map(function (e) { return e[0]; })),
        ]);
        this.prColumnChartDetected.get('recall').setData([
            this.avg(pr_van.map(function (e) { return e[1]; })),
            this.avg(pr_sim.map(function (e) { return e[1]; })),
            this.avg(pr_spl.map(function (e) { return e[1]; })),
            this.avg(pr_per.map(function (e) { return e[1]; })),
        ]);
    };
    ResultsComponent.prototype.prOfDetectedGIs = function (generated, detected) {
        var ugen = new Set();
        var udet = new Set();
        generated.forEach(function (g) { return ugen.add(g.value); });
        detected.forEach(function (d) { return udet.add(d.value); });
        var tp = 0;
        udet.forEach(function (e) { if (ugen.has(e)) {
            tp += 1;
        } });
        return [tp / Math.max(udet.size, 1), tp / Math.max(ugen.size, 1)];
    };
    ResultsComponent.prototype.updateHeatmaps = function () {
        this.heatmaps[0] = this.shiftWindowHeatmaps();
        this.heatmaps[1] = this.windowThresholdHeatmaps();
        this.loaders.prHeatmaps = false;
    };
    ResultsComponent.prototype.shiftWindowHeatmaps = function () {
        var _this = this;
        var options = {
            xTitle: 'Shifts', xCategories: this.filters.shifts.map(function (e) { return e.itemName; }),
            yTitle: 'Windows', yCategories: this.filters.windows.map(function (e) { return e.itemName; }),
            data: { van: [[], []], sim: [[], []], spl: [[], []], per: [[], []] }
        };
        var i = 0;
        this.filters.shifts.forEach(function (s) {
            var j = 0;
            _this.filters.windows.forEach(function (w) {
                var e = _this.datasetService.getShiftWindowPR(s.id, w.id);
                if (e) {
                    _this.algorithms.forEach(function (alg) {
                        options.data[alg][0].push([i, j, parseFloat(e[alg].precision.toFixed(2))]);
                        options.data[alg][1].push([i, j, parseFloat(e[alg].recall.toFixed(2))]);
                    });
                }
                j += 1;
            });
            i += 1;
        });
        return options;
    };
    ResultsComponent.prototype.windowThresholdHeatmaps = function () {
        var _this = this;
        var options = {
            xTitle: 'Windows', xCategories: this.filters.windows.map(function (e) { return e.itemName; }),
            yTitle: 'Thresholds', yCategories: this.filters.thresholds.map(function (e) { return e.itemName; }),
            data: { van: [[], []], sim: [[], []], spl: [[], []], per: [[], []] }
        };
        var i = 0;
        this.filters.windows.forEach(function (w) {
            var j = 0;
            _this.filters.thresholds.forEach(function (t) {
                var e = _this.datasetService.getWindowThresholdPR(w.id, t.id);
                if (e) {
                    _this.algorithms.forEach(function (alg) {
                        options.data[alg][0].push([i, j, parseFloat(e[alg].precision.toFixed(2))]);
                        options.data[alg][1].push([i, j, parseFloat(e[alg].recall.toFixed(2))]);
                    });
                }
                j += 1;
            });
            i += 1;
        });
        return options;
    };
    ResultsComponent.prototype.updateCommOverall = function () {
        var _this = this;
        var dict = this.datasetService.getCommunication();
        this.messages.forEach(function (m) {
            var m_data = [];
            var p_data = [];
            _this.algorithms.forEach(function (a) {
                m_data.push(dict[a].weighted.messages[m] * 100);
                p_data.push(dict[a].weighted.payloads[m] * 100);
            });
            _this.ocMessagesChart.get(m).setData(m_data);
            _this.ocPayloadsChart.get(m).setData(p_data);
        });
        this.loaders.commOverall = false;
    };
    ResultsComponent.prototype.updateStackedAreas = function () {
        this.updateCommThresholds();
        this.updateCommWindows();
    };
    ResultsComponent.prototype.updateCommThresholds = function () {
        var _this = this;
        var options = {
            xTitle: 'Thresholds', xCategories: this.filters.thresholds.map(function (e) { return e.itemName; }),
            data: { van: [], sim: [], spl: [], per: [] }
        };
        this.filters.thresholds.forEach(function (t) {
            var stats = _this.datasetService.getThresholdMessageStats(t.id);
            Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["keys"])(stats).forEach(function (k) { return options.data[k].push(stats[k].weighted); });
        });
        this.stackedAreas[0] = options;
        this.loaders.commThresholds = false;
    };
    ResultsComponent.prototype.updateCommWindows = function () {
        var _this = this;
        var options = {
            xTitle: 'Windows', xCategories: this.filters.windows.map(function (e) { return e.itemName; }),
            data: { van: [], sim: [], spl: [], per: [] }
        };
        this.filters.windows.forEach(function (w) {
            var stats = _this.datasetService.getWindowMessageStats(w.id);
            Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["keys"])(stats).forEach(function (k) { return options.data[k].push(stats[k].weighted); });
        });
        this.stackedAreas[1] = options;
        this.loaders.commWindows = false;
    };
    ResultsComponent.prototype.avg = function (array) {
        return parseFloat((array.reduce(function (a, b) { return a + b; }) / array.length).toFixed(3));
    };
    ResultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-results',
            template: __webpack_require__("../../../../../src/app/components/results/results.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/results/results.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_app_services_dataset_dataset_service__["a" /* DatasetService */]])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/results/stacked-area/chart-options.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highcharts_js_highcharts_js__ = __webpack_require__("../../../../highcharts/js/highcharts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highcharts_js_highcharts_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_highcharts_js_highcharts_js__);

var ChartOptions = /** @class */ (function () {
    function ChartOptions() {
    }
    ChartOptions.stackedAreaChart = {
        chart: { type: 'area' },
        xAxis: { tickmarkPlacement: 'on', categories: [] },
        yAxis: {
            title: { text: null },
            min: 0,
            labels: {
                format: '{value}%'
            }
        },
        series: [
            { id: 'identify', name: 'Identify' },
            { id: 'freq_req', name: 'FreqReq' },
            { id: 'freq_rep', name: 'FreqRep' },
            { id: 'verify', name: 'Verify' },
            { id: 'active_gi', name: 'ActiveGI' },
        ],
        plotOptions: {
            area: {
                stacking: 'normal',
            }
        },
        tooltip: {
            formatter: function () {
                return '<span class="highcharts-color-' + this.colorIndex + '">\u25CF</span> ' +
                    this.series.name + ': <b>' +
                    __WEBPACK_IMPORTED_MODULE_0_highcharts_js_highcharts_js__["numberFormat"]((this.y), 4, '.') + '%</b><br/><b>' +
                    __WEBPACK_IMPORTED_MODULE_0_highcharts_js_highcharts_js__["numberFormat"]((this.y / this.point.stackTotal) * 100, 2, '.') + '%</b> of total';
            }
        },
        exporting: {
            buttons: {
                contextButton: {
                    menuItems: ['downloadCSV', 'separator', 'downloadPNG', 'downloadSVG']
                }
            }
        },
        credits: { enabled: false }
    };
    return ChartOptions;
}());



/***/ }),

/***/ "../../../../../src/app/components/results/stacked-area/stacked-area.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"h-100 w-100\">\n  <div class=\"row no-gutters col-md-12 h-25\">\n    <div class=\"h-100 col-md-6\">\n      <chart class=\"h-100 row no-gutters\" [options]=\"opts.m_van\" (load)=\"mVanStackedAreaChart = $event.context\"></chart>\n    </div>\n    <div class=\"h-100 col-md-6\">\n      <chart class=\"h-100 row no-gutters\" [options]=\"opts.p_van\" (load)=\"pVanStackedAreaChart = $event.context\"></chart>\n    </div>\n  </div>\n  <div class=\"row no-gutters col-md-12 h-25\">\n    <div class=\"h-100 col-md-6\">\n      <chart class=\"h-100 row no-gutters\" [options]=\"opts.m_sim\" (load)=\"mSimStackedAreaChart = $event.context\"></chart>\n    </div>\n    <div class=\"h-100 col-md-6\">\n      <chart class=\"h-100 row no-gutters\" [options]=\"opts.p_sim\" (load)=\"pSimStackedAreaChart = $event.context\"></chart>\n    </div>\n  </div>\n  <div class=\"row no-gutters col-md-12 h-25\">\n    <div class=\"h-100 col-md-6\">\n      <chart class=\"h-100 row no-gutters\" [options]=\"opts.m_spl\" (load)=\"mSplStackedAreaChart = $event.context\"></chart>\n    </div>\n    <div class=\"h-100 col-md-6\">\n      <chart class=\"h-100 row no-gutters\" [options]=\"opts.p_spl\" (load)=\"pSplStackedAreaChart = $event.context\"></chart>\n    </div>\n  </div>\n  <div class=\"row no-gutters col-md-12 h-25\">\n    <div class=\"h-100 col-md-6\">\n      <chart class=\"h-100 row no-gutters\" [options]=\"opts.m_per\" (load)=\"mPerStackedAreaChart = $event.context\"></chart>\n    </div>\n    <div class=\"h-100 col-md-6\">\n      <chart class=\"h-100 row no-gutters\" [options]=\"opts.p_per\" (load)=\"pPerStackedAreaChart = $event.context\"></chart>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/results/stacked-area/stacked-area.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host ::ng-deep chart .highcharts-container {\n  font-size: 0.5em; }\n\n:host ::ng-deep chart .highcharts-color-0 {\n  fill: #4DB6AC;\n  stroke: #4DB6AC; }\n\n:host ::ng-deep chart .highcharts-color-1 {\n  fill: #9575CD;\n  stroke: #9575CD; }\n\n:host ::ng-deep chart .highcharts-color-2 {\n  fill: #AED581;\n  stroke: #AED581; }\n\n:host ::ng-deep chart .highcharts-color-3 {\n  fill: #4DD0E1;\n  stroke: #4DD0E1; }\n\n:host ::ng-deep chart .highcharts-color-4 {\n  fill: #90A4AE;\n  stroke: #90A4AE; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/results/stacked-area/stacked-area.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StackedAreaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_utils_ChartUtils__ = __webpack_require__("../../../../../src/app/utils/ChartUtils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chart_options__ = __webpack_require__("../../../../../src/app/components/results/stacked-area/chart-options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StackedAreaComponent = /** @class */ (function () {
    function StackedAreaComponent() {
        this.opts = {
            m_van: Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["assign"])({ title: { 'text': '<b>Vanilla</b> Messages' } }, __WEBPACK_IMPORTED_MODULE_2__chart_options__["a" /* ChartOptions */].stackedAreaChart),
            p_van: Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["assign"])({ title: { 'text': '<b>Vanilla</b> Payloads' } }, __WEBPACK_IMPORTED_MODULE_2__chart_options__["a" /* ChartOptions */].stackedAreaChart),
            m_sim: Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["assign"])({ title: { 'text': '<b>Simple</b> Messages' } }, __WEBPACK_IMPORTED_MODULE_2__chart_options__["a" /* ChartOptions */].stackedAreaChart),
            p_sim: Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["assign"])({ title: { 'text': '<b>Simple</b> Payloads' } }, __WEBPACK_IMPORTED_MODULE_2__chart_options__["a" /* ChartOptions */].stackedAreaChart),
            m_spl: Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["assign"])({ title: { 'text': '<b>Splitter</b> Messages' } }, __WEBPACK_IMPORTED_MODULE_2__chart_options__["a" /* ChartOptions */].stackedAreaChart),
            p_spl: Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["assign"])({ title: { 'text': '<b>Splitter</b> Payloads' } }, __WEBPACK_IMPORTED_MODULE_2__chart_options__["a" /* ChartOptions */].stackedAreaChart),
            m_per: Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["assign"])({ title: { 'text': '<b>Perfect</b> Messages' } }, __WEBPACK_IMPORTED_MODULE_2__chart_options__["a" /* ChartOptions */].stackedAreaChart),
            p_per: Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["assign"])({ title: { 'text': '<b>Perfect</b> Payloads' } }, __WEBPACK_IMPORTED_MODULE_2__chart_options__["a" /* ChartOptions */].stackedAreaChart),
        };
    }
    StackedAreaComponent.prototype.ngOnInit = function () {
    };
    StackedAreaComponent.prototype.ngOnDestroy = function () {
        __WEBPACK_IMPORTED_MODULE_0_app_utils_ChartUtils__["a" /* ChartUtils */].clearChart(this.mVanStackedAreaChart);
        __WEBPACK_IMPORTED_MODULE_0_app_utils_ChartUtils__["a" /* ChartUtils */].clearChart(this.pVanStackedAreaChart);
        __WEBPACK_IMPORTED_MODULE_0_app_utils_ChartUtils__["a" /* ChartUtils */].clearChart(this.mSimStackedAreaChart);
        __WEBPACK_IMPORTED_MODULE_0_app_utils_ChartUtils__["a" /* ChartUtils */].clearChart(this.pSimStackedAreaChart);
        __WEBPACK_IMPORTED_MODULE_0_app_utils_ChartUtils__["a" /* ChartUtils */].clearChart(this.mSplStackedAreaChart);
        __WEBPACK_IMPORTED_MODULE_0_app_utils_ChartUtils__["a" /* ChartUtils */].clearChart(this.pSplStackedAreaChart);
        __WEBPACK_IMPORTED_MODULE_0_app_utils_ChartUtils__["a" /* ChartUtils */].clearChart(this.mPerStackedAreaChart);
        __WEBPACK_IMPORTED_MODULE_0_app_utils_ChartUtils__["a" /* ChartUtils */].clearChart(this.pPerStackedAreaChart);
    };
    StackedAreaComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            if (propName === 'stackedAreaOptions') {
                var chng = changes[propName];
                this.onStackedAreaOptionsChange(chng.currentValue);
            }
        }
    };
    StackedAreaComponent.prototype.onStackedAreaOptionsChange = function (stackedAreaOptions) {
        this.stackedAreaOptions = stackedAreaOptions;
        this.setStackedAreaOptions(this.mVanStackedAreaChart, this.pVanStackedAreaChart, stackedAreaOptions, 'Recall', stackedAreaOptions.data.van);
        this.setStackedAreaOptions(this.mSimStackedAreaChart, this.pSimStackedAreaChart, stackedAreaOptions, 'Recall', stackedAreaOptions.data.sim);
        this.setStackedAreaOptions(this.mSplStackedAreaChart, this.pSplStackedAreaChart, stackedAreaOptions, 'Recall', stackedAreaOptions.data.spl);
        this.setStackedAreaOptions(this.mPerStackedAreaChart, this.pPerStackedAreaChart, stackedAreaOptions, 'Recall', stackedAreaOptions.data.per);
    };
    StackedAreaComponent.prototype.setStackedAreaOptions = function (mChart, pChart, options, seriesName, data) {
        if (mChart) {
            mChart.xAxis[0].setTitle({ text: options.xTitle });
            mChart.xAxis[0].setCategories(options.xCategories);
            mChart.get('identify').setData(data.map(function (e) { return e.messages['identify'] * 100; }));
            mChart.get('freq_req').setData(data.map(function (e) { return e.messages['freq_req'] * 100; }));
            mChart.get('freq_rep').setData(data.map(function (e) { return e.messages['freq_rep'] * 100; }));
            mChart.get('verify').setData(data.map(function (e) { return e.messages['verify'] * 100; }));
            mChart.get('active_gi').setData(data.map(function (e) { return e.messages['active_gi'] * 100; }));
        }
        if (pChart) {
            pChart.xAxis[0].setTitle({ text: options.xTitle });
            pChart.xAxis[0].setCategories(options.xCategories);
            pChart.get('identify').setData(data.map(function (e) { return e.payloads['identify'] * 100; }));
            pChart.get('freq_req').setData(data.map(function (e) { return e.payloads['freq_req'] * 100; }));
            pChart.get('freq_rep').setData(data.map(function (e) { return e.payloads['freq_rep'] * 100; }));
            pChart.get('verify').setData(data.map(function (e) { return e.payloads['verify'] * 100; }));
            pChart.get('active_gi').setData(data.map(function (e) { return e.payloads['active_gi'] * 100; }));
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], StackedAreaComponent.prototype, "stackedAreaOptions", void 0);
    StackedAreaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-stacked-area',
            template: __webpack_require__("../../../../../src/app/components/results/stacked-area/stacked-area.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/results/stacked-area/stacked-area.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StackedAreaComponent);
    return StackedAreaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/simulations/simulations.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"datasetContainer\">\n  <app-dataset (datasetChange)=\"onDatasetChange($event)\"></app-dataset>\n</div>\n<div class=\"container my-3 p-0\">\n  <div class=\"card\">\n    <ngx-datatable class=\"bootstrap\" [rows]=\"rows\" [columns]=\"columns\" [columnMode]=\"'force'\" [limit]=\"5\" [rowHeight]=\"'auto'\"\n      [footerHeight]=\"40\" [selectionType]=\"'single'\" (select)=\"onRowSelected($event)\"></ngx-datatable>\n  </div>\n  <div class=\"card mt-3\">\n    <div class=\"card-header\">\n      <h4 class=\"m-0\">Simulation - Timeline</h4>\n    </div>\n    <div class=\"card-body\">\n      <google-chart #timelineChart [data]=\"timelineData\"></google-chart>\n    </div>\n  </div>\n  <div class=\"card mt-3\">\n    <div class=\"card-header\">\n      <h4 class=\"m-0\">Simulation - Communication</h4>\n    </div>\n    <div class=\"card-body\">\n      <div id=\"overallCommunicationRow\" class=\"row no-gutters col-md-12\">\n        <div class=\"col-md-6 h-100\">\n          <chart class=\"h-100 row no-gutters\" [options]=\"options.ocMessages\" (load)=\"ocMessagesChart = $event.context\"></chart>\n        </div>\n        <div class=\"col-md-6 h-100\">\n          <chart class=\"h-100 row no-gutters\" [options]=\"options.ocPayloads\" (load)=\"ocPayloadsChart = $event.context\"></chart>\n          <p></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/simulations/simulations.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#datasetContainer {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 48px;\n  z-index: 99998; }\n\n:host ::ng-deep ngx-datatable .datatable-header {\n  background-color: #00BCD4 !important;\n  color: white; }\n\n:host ::ng-deep ngx-datatable .datatable-row-even {\n  background-color: white !important; }\n\n:host ::ng-deep ngx-datatable .datatable-row-odd {\n  background-color: #f6f6f6 !important; }\n\n:host ::ng-deep ngx-datatable .datatable-body-row.active {\n  background-color: #6200EA !important; }\n\n:host ::ng-deep ngx-datatable .datatable-body-row:not(.active):hover {\n  background-color: rgba(179, 136, 255, 0.25) !important; }\n\n:host ::ng-deep ngx-datatable .datatable-footer {\n  background-color: #00BCD4 !important; }\n\n:host ::ng-deep ngx-datatable .datatable-footer li.active a {\n    background-color: white !important;\n    color: #6200EA !important; }\n\n:host ::ng-deep ngx-datatable .datatable-footer li:hover a {\n    background-color: white !important;\n    color: #6200EA !important; }\n\n:host ::ng-deep ngx-datatable div.page-count {\n  padding-left: 0.75rem !important; }\n\n:host ::ng-deep ngx-datatable div.empty-row {\n  padding-left: 0.75rem !important;\n  padding-top: 0.25rem !important;\n  padding-bottom: 0.25rem !important; }\n\n#overallCommunicationRow {\n  height: 400px; }\n\n#overallCommunicationRow ::ng-deep chart .highcharts-color-0 {\n  fill: #4DB6AC;\n  stroke: #4DB6AC; }\n\n#overallCommunicationRow ::ng-deep chart .highcharts-color-1 {\n  fill: #9575CD;\n  stroke: #9575CD; }\n\n#overallCommunicationRow ::ng-deep chart .highcharts-color-2 {\n  fill: #AED581;\n  stroke: #AED581; }\n\n#overallCommunicationRow ::ng-deep chart .highcharts-color-3 {\n  fill: #4DD0E1;\n  stroke: #4DD0E1; }\n\n#overallCommunicationRow ::ng-deep chart .highcharts-color-4 {\n  fill: #90A4AE;\n  stroke: #90A4AE; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/simulations/simulations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimulationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_utils_ChartUtils__ = __webpack_require__("../../../../../src/app/utils/ChartUtils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_dataset_dataset_service__ = __webpack_require__("../../../../../src/app/services/dataset/dataset.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_components_results_chart_options__ = __webpack_require__("../../../../../src/app/components/results/chart-options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SimulationsComponent = /** @class */ (function () {
    function SimulationsComponent(datasetService) {
        this.datasetService = datasetService;
        this.algorithms = ['van', 'sim', 'spl', 'per'];
        this.messages = ['identify', 'freq_req', 'freq_rep', 'verify', 'active_gi'];
        this.rows = [];
        this.columns = [
            { name: 'Size', prop: 'size' },
            { name: 'Shift', prop: 'shift' },
            { name: 'Window', prop: 'window' },
            { name: 'Threshold', prop: 'threshold' },
            { name: 'Nodes', prop: 'nodes' },
            { name: 'VAN Pr', prop: 'vanPrecision' },
            { name: 'VAN Re', prop: 'vanRecall' },
            { name: 'SIM Pr', prop: 'simPrecision' },
            { name: 'SIM Re', prop: 'simRecall' },
            { name: 'SPL Pr', prop: 'splPrecision' },
            { name: 'SPL Re', prop: 'splRecall' },
            { name: 'PER Pr', prop: 'perPrecision' },
            { name: 'PER Re', prop: 'perRecall' }
        ];
        this.timelineData = {
            chartType: 'Timeline',
            dataTable: null,
            options: {
                height: 450
            }
        };
        this.options = {
            ocMessages: Object(__WEBPACK_IMPORTED_MODULE_4_lodash__["assign"])({
                title: { text: 'Exchanged messages as percentage of the stream size' }
            }, __WEBPACK_IMPORTED_MODULE_3_app_components_results_chart_options__["a" /* ChartOptions */].ocStackedColumnChart),
            ocPayloads: Object(__WEBPACK_IMPORTED_MODULE_4_lodash__["assign"])({
                title: { text: 'Exchanged payloads as percentage of the stream size' }
            }, __WEBPACK_IMPORTED_MODULE_3_app_components_results_chart_options__["a" /* ChartOptions */].ocStackedColumnChart)
        };
    }
    SimulationsComponent.prototype.ngOnInit = function () {
    };
    SimulationsComponent.prototype.ngOnDestroy = function () {
        __WEBPACK_IMPORTED_MODULE_0_app_utils_ChartUtils__["a" /* ChartUtils */].clearChart(this.ocMessagesChart);
        __WEBPACK_IMPORTED_MODULE_0_app_utils_ChartUtils__["a" /* ChartUtils */].clearChart(this.ocPayloadsChart);
    };
    SimulationsComponent.prototype.onDatasetChange = function (event) {
        this.rows = event.dataset.map(function (s) {
            return {
                size: s.stream.size.toPrecision(2),
                shift: s.stream.shift.toPrecision(2),
                nodes: s.config.nodes,
                window: s.config.window.toPrecision(2),
                threshold: s.config.threshold,
                vanPrecision: s.van.precision.toFixed(3),
                vanRecall: s.van.recall.toFixed(3),
                simPrecision: s.sim.precision.toFixed(3),
                simRecall: s.sim.recall.toFixed(3),
                splPrecision: s.spl.precision.toFixed(3),
                splRecall: s.spl.recall.toFixed(3),
                perPrecision: s.per.precision.toFixed(3),
                perRecall: s.per.recall.toFixed(3),
                simulation: s
            };
        });
    };
    SimulationsComponent.prototype.onRowSelected = function (event) {
        this.drawTimeline(event.selected[0].simulation);
        this.updateCommunication(event.selected[0].simulation);
    };
    SimulationsComponent.prototype.drawTimeline = function (simulation) {
        var dataTable = [[
                { type: 'string', id: 'Position' },
                { type: 'string', id: 'Name' },
                { type: 'number', id: 'Emergence' },
                { type: 'number', id: 'Melting' }
            ]];
        dataTable = dataTable.concat(this.distributionRows(simulation));
        dataTable = dataTable.concat(this.generatedRows(simulation));
        dataTable = dataTable.concat(this.detectedRows(simulation, simulation.van, 'VAN'));
        dataTable = dataTable.concat(this.detectedRows(simulation, simulation.sim, 'SIM'));
        dataTable = dataTable.concat(this.detectedRows(simulation, simulation.spl, 'SPL'));
        dataTable = dataTable.concat(this.detectedRows(simulation, simulation.per, 'PER'));
        this.timelineData.dataTable = null;
        this.timelineData = Object(__WEBPACK_IMPORTED_MODULE_4_lodash__["assign"])({}, Object(__WEBPACK_IMPORTED_MODULE_4_lodash__["merge"])(this.timelineData, { dataTable: dataTable }));
    };
    SimulationsComponent.prototype.distributionRows = function (simulation) {
        var rows = [];
        var idx = 0;
        for (var i = 0; i < simulation.stream.size; i += simulation.stream.shift) {
            var d = simulation.stream.distributions[idx++ % simulation.stream.distributions.length];
            rows.push(['DIS', d.name, i / 100, Math.min(i + simulation.stream.shift, simulation.stream.size) / 100]);
        }
        return rows;
    };
    SimulationsComponent.prototype.generatedRows = function (simulation) {
        var rows = [];
        simulation.generated.forEach(function (g) {
            rows.push(['GEN', g.value.toString(), g.emergence / 100, g.melting != null ? g.melting / 100 : simulation.stream.size / 100]);
        });
        return rows;
    };
    SimulationsComponent.prototype.detectedRows = function (simulation, run, tag) {
        var rows = [];
        run.detected.forEach(function (g) {
            rows.push([tag, g.value.toString(), g.emergence / 100, g.melting != null ? g.melting / 100 : simulation.stream.size / 100]);
        });
        return rows;
    };
    SimulationsComponent.prototype.updateCommunication = function (simulation) {
        var _this = this;
        var dict = this.datasetService.getSimulationCommunication(simulation);
        this.messages.forEach(function (m) {
            var m_data = [];
            var p_data = [];
            _this.algorithms.forEach(function (a) {
                m_data.push(dict[a].weighted.messages[m] * 100);
                p_data.push(dict[a].weighted.payloads[m] * 100);
            });
            _this.ocMessagesChart.get(m).setData(m_data);
            _this.ocPayloadsChart.get(m).setData(p_data);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('timelineChart'),
        __metadata("design:type", Object)
    ], SimulationsComponent.prototype, "timelineChart", void 0);
    SimulationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-simulations',
            template: __webpack_require__("../../../../../src/app/components/simulations/simulations.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/simulations/simulations.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_services_dataset_dataset_service__["a" /* DatasetService */]])
    ], SimulationsComponent);
    return SimulationsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/dataset/dataset.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatasetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatasetService = /** @class */ (function () {
    function DatasetService(http) {
        this.http = http;
        this.algorithms = ['van', 'sim', 'spl', 'per'];
        this.messages = ['identify', 'freq_req', 'freq_rep', 'verify', 'active_gi'];
    }
    DatasetService.prototype.getDataset = function () {
        return this.http.get('./assets/data/datasets.json');
    };
    DatasetService.prototype.parseDataset = function (dataset) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.prShiftWindowDict = {};
            _this.prWindowThresholdDict = {};
            _this.overallCommunication = {};
            _this.windowCommunication = {};
            _this.thresholdCommunication = {};
            _this.algorithms.forEach(function (a) {
                _this.overallCommunication[a] = {
                    raw: {
                        messages: { identify: 0, freq_req: 0, freq_rep: 0, verify: 0, active_gi: 0 },
                        payloads: { identify: 0, freq_req: 0, freq_rep: 0, verify: 0, active_gi: 0 },
                    },
                    weighted: {
                        messages: { identify: 0, freq_req: 0, freq_rep: 0, verify: 0, active_gi: 0 },
                        payloads: { identify: 0, freq_req: 0, freq_rep: 0, verify: 0, active_gi: 0 },
                    }
                };
            });
            dataset.forEach(function (s) {
                if (!_this.prShiftWindowDict[s.stream.shift]) {
                    _this.prShiftWindowDict[s.stream.shift] = {};
                }
                if (!_this.prWindowThresholdDict[s.config.window]) {
                    _this.prWindowThresholdDict[s.config.window] = {};
                }
                var prShift = _this.prShiftWindowDict[s.stream.shift];
                if (!prShift[s.config.window]) {
                    prShift[s.config.window] = {
                        count: 0,
                        van: { precision: 0, recall: 0 },
                        sim: { precision: 0, recall: 0 },
                        spl: { precision: 0, recall: 0 },
                        per: { precision: 0, recall: 0 }
                    };
                }
                var prWindow = _this.prWindowThresholdDict[s.config.window];
                if (!prWindow[s.config.threshold]) {
                    prWindow[s.config.threshold] = {
                        count: 0,
                        van: { precision: 0, recall: 0 },
                        sim: { precision: 0, recall: 0 },
                        spl: { precision: 0, recall: 0 },
                        per: { precision: 0, recall: 0 }
                    };
                }
                if (!_this.windowCommunication[s.config.window]) {
                    _this.windowCommunication[s.config.window] = {};
                    _this.algorithms.forEach(function (a) {
                        _this.windowCommunication[s.config.window][a] = {
                            count: 0,
                            raw: {
                                messages: { identify: 0, freq_req: 0, freq_rep: 0, verify: 0, active_gi: 0 },
                                payloads: { identify: 0, freq_req: 0, freq_rep: 0, verify: 0, active_gi: 0 },
                            },
                            weighted: {
                                messages: { identify: 0, freq_req: 0, freq_rep: 0, verify: 0, active_gi: 0 },
                                payloads: { identify: 0, freq_req: 0, freq_rep: 0, verify: 0, active_gi: 0 },
                            }
                        };
                    });
                }
                if (!_this.thresholdCommunication[s.config.threshold]) {
                    _this.thresholdCommunication[s.config.threshold] = {};
                    _this.algorithms.forEach(function (a) {
                        _this.thresholdCommunication[s.config.threshold][a] = {
                            count: 0,
                            raw: {
                                messages: { identify: 0, freq_req: 0, freq_rep: 0, verify: 0, active_gi: 0 },
                                payloads: { identify: 0, freq_req: 0, freq_rep: 0, verify: 0, active_gi: 0 },
                            },
                            weighted: {
                                messages: { identify: 0, freq_req: 0, freq_rep: 0, verify: 0, active_gi: 0 },
                                payloads: { identify: 0, freq_req: 0, freq_rep: 0, verify: 0, active_gi: 0 },
                            }
                        };
                    });
                }
                var prShiftWindow = prShift[s.config.window];
                var prWindowThreshold = prWindow[s.config.threshold];
                prShiftWindow.count += 1;
                prWindowThreshold.count += 1;
                _this.algorithms.forEach(function (alg) {
                    prShiftWindow[alg].precision += s[alg].precision;
                    prShiftWindow[alg].recall += s[alg].recall;
                    prWindowThreshold[alg].precision += s[alg].precision;
                    prWindowThreshold[alg].recall += s[alg].recall;
                    _this.windowCommunication[s.config.window][alg].count += 1;
                    _this.thresholdCommunication[s.config.threshold][alg].count += 1;
                    _this.messages.forEach(function (m) {
                        var msgs = s[alg].communication[m].messages;
                        var plds = s[alg].communication[m].payloads;
                        _this.overallCommunication[alg].raw.messages[m] += msgs;
                        _this.overallCommunication[alg].raw.payloads[m] += plds;
                        _this.overallCommunication[alg].weighted.messages[m] += msgs / s.stream.size;
                        _this.overallCommunication[alg].weighted.payloads[m] += plds / s.stream.size;
                        _this.windowCommunication[s.config.window][alg].raw.messages[m] += msgs;
                        _this.windowCommunication[s.config.window][alg].raw.messages[m] += plds;
                        _this.windowCommunication[s.config.window][alg].weighted.messages[m] += msgs / s.stream.size;
                        _this.windowCommunication[s.config.window][alg].weighted.payloads[m] += plds / s.stream.size;
                        _this.thresholdCommunication[s.config.threshold][alg].raw.messages[m] += msgs;
                        _this.thresholdCommunication[s.config.threshold][alg].raw.messages[m] += plds;
                        _this.thresholdCommunication[s.config.threshold][alg].weighted.messages[m] += msgs / s.stream.size;
                        _this.thresholdCommunication[s.config.threshold][alg].weighted.payloads[m] += plds / s.stream.size;
                    });
                });
            });
            _this.algorithms.forEach(function (a) {
                _this.messages.forEach(function (m) {
                    _this.overallCommunication[a].raw.messages[m] /= dataset.length;
                    _this.overallCommunication[a].raw.payloads[m] /= dataset.length;
                    _this.overallCommunication[a].weighted.messages[m] /= dataset.length;
                    _this.overallCommunication[a].weighted.payloads[m] /= dataset.length;
                });
            });
            resolve();
        });
    };
    DatasetService.prototype.getShiftWindowPR = function (shift, window) {
        if (!this.prShiftWindowDict[shift]) {
            return undefined;
        }
        return this.computeIPR(this.prShiftWindowDict[shift][window]);
    };
    DatasetService.prototype.getWindowThresholdPR = function (window, threshold) {
        if (!this.prWindowThresholdDict[window]) {
            return undefined;
        }
        return this.computeIPR(this.prWindowThresholdDict[window][threshold]);
    };
    DatasetService.prototype.computeIPR = function (e) {
        if (e) {
            return {
                van: { precision: e.van.precision / e.count, recall: e.van.recall / e.count },
                sim: { precision: e.sim.precision / e.count, recall: e.sim.recall / e.count },
                spl: { precision: e.spl.precision / e.count, recall: e.spl.recall / e.count },
                per: { precision: e.per.precision / e.count, recall: e.per.recall / e.count },
            };
        }
        else {
            return undefined;
        }
    };
    DatasetService.prototype.getCommunication = function () {
        return this.overallCommunication;
    };
    DatasetService.prototype.getSimulationCommunication = function (simulation) {
        var _this = this;
        if (simulation) {
            var s_1 = simulation;
            var dict_1 = {};
            this.algorithms.forEach(function (a) {
                dict_1[a] = { raw: { messages: {}, payloads: {} }, weighted: { messages: {}, payloads: {} } };
                _this.messages.forEach(function (m) {
                    dict_1[a].raw.messages[m] = s_1[a].communication[m].messages;
                    dict_1[a].raw.payloads[m] = s_1[a].communication[m].payloads;
                    dict_1[a].weighted.messages[m] = s_1[a].communication[m].messages / s_1.stream.size;
                    dict_1[a].weighted.payloads[m] = s_1[a].communication[m].payloads / s_1.stream.size;
                });
            });
            return dict_1;
        }
        else {
            return undefined;
        }
    };
    DatasetService.prototype.getWindowMessageStats = function (window) {
        return this.computeIC(this.windowCommunication[window]);
    };
    DatasetService.prototype.getThresholdMessageStats = function (threshold) {
        return this.computeIC(this.thresholdCommunication[threshold]);
    };
    DatasetService.prototype.computeIC = function (e) {
        var _this = this;
        if (e) {
            var dict_2 = {};
            this.algorithms.forEach(function (a) {
                dict_2[a] = { raw: { messages: {}, payloads: {} }, weighted: { messages: {}, payloads: {} } };
                _this.messages.forEach(function (m) {
                    dict_2[a].raw.messages[m] = e[a].raw.messages[m] / e[a].count;
                    dict_2[a].raw.payloads[m] = e[a].raw.payloads[m] / e[a].count;
                    dict_2[a].weighted.messages[m] = e[a].weighted.messages[m] / e[a].count;
                    dict_2[a].weighted.payloads[m] = e[a].weighted.payloads[m] / e[a].count;
                });
            });
            return dict_2;
        }
        else {
            return undefined;
        }
    };
    DatasetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DatasetService);
    return DatasetService;
}());



/***/ }),

/***/ "../../../../../src/app/services/services.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_dataset_dataset_service__ = __webpack_require__("../../../../../src/app/services/dataset/dataset.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [],
            providers: [__WEBPACK_IMPORTED_MODULE_2_app_services_dataset_dataset_service__["a" /* DatasetService */]]
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ }),

/***/ "../../../../../src/app/utils/ChartUtils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartUtils; });
var ChartUtils = /** @class */ (function () {
    function ChartUtils() {
    }
    ChartUtils.clearChart = function (chart) {
        if (chart) {
            chart.series.forEach(function (s) {
                s.setData(null, false, null, false);
            });
        }
    };
    return ChartUtils;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map