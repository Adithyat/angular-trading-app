(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\r\n  <nav>\r\n      <ul class=\"menu\">\r\n          <li class=\"menu__list-item\"><a routerLink=\"/home-component\" routerLinkActive=\"active\">Home</a></li>\r\n          <li class=\"menu__list-item\"><a routerLink=\"/assets-component\" routerLinkActive=\"active\">Assets</a></li>\r\n          <li class=\"menu__list-item\"><a routerLink=\"/details-component/STRK\" routerLinkActive=\"active\">Details</a></li>\r\n      </ul>\r\n  </nav>\r\n</header>\r\n<!-- The routed views render in the <router-outlet>-->\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/stockdetailgraph/stockdetailgraph.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/stockdetailgraph/stockdetailgraph.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"stock-graph\">\n  <div id=\"stockGraphContainer\" class=\"stock-graph__container\">\n    <stockgraph [stocks]=\"symbol\" [graphtype]=\"null\"></stockgraph>\n  </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/stockdetails/stockdetails.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/stockdetails/stockdetails.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"stock-list\">\n  <div class=\"stock-list__grid\">\n      <div class=\"stock-list__grid-row\">\n          <div class=\"stock-list__grid-cell stock-list__grid-cell--txt-blue\">&#x25BC;</div>\n          <stockslist [stocksymbol]='symbol' [listtype]=\"0\"></stockslist>\n      </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/stockgraph/stockgraph.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/stockgraph/stockgraph.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <button (click)=\"selectYear()\" class=\"button\">\r\n    Year\r\n  </button>\r\n  <button (click)=\"selectToday()\" class=\"button\">\r\n    Today\r\n  </button>\r\n  <button *ngIf=\"!graphtype\" (click)=\"selectLive()\" class=\"button\">\r\n    Live\r\n  </button>\r\n</div>\r\n<div *ngIf=\"graphtype\">\r\n  <h1 style=\"text-align: center;\">(Normalized and Aggregated)</h1>\r\n</div>\r\n<div\r\n  id=\"container\"\r\n  style=\"height: 350px; min-width: 310px;\"\r\n  [chart]=\"chart\"\r\n></div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/stockslist/stockslist.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/stockslist/stockslist.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"listtype === 0\">\r\n  <div class=\"stock-list__grid-cell\">\r\n    <a\r\n      [routerLink]=\"['/details-component', stock.symbol]\"\r\n      routerLinkActive=\"active\"\r\n      >{{ stock.symbol }}</a\r\n    >\r\n  </div>\r\n  <div class=\"stock-list__grid-cell\">\r\n    {{ stock.price | number: \".1-2\" }}\r\n  </div>\r\n  <div class=\"stock-list__grid-cell\">\r\n    <input [(ngModel)]=\"quantity\" class=\"modal__number-box\" type=\"number\" />\r\n  </div>\r\n  <div class=\"stock-list__grid-cell\">\r\n    <a (click)=\"buyStock(stocksymbol)\"\r\n      ><span class=\"btn-transaction btn-transaction--buy\">buy</span></a\r\n    >\r\n  </div>\r\n  <div class=\"stock-list__grid-cell\">\r\n    <a (click)=\"sellStock(stocksymbol)\"\r\n      ><span class=\"btn-transaction btn-transaction--sell\">sell</span></a\r\n    >\r\n  </div>\r\n  <div class=\"stock-list__grid-cell\">{{ stock.allocation }}</div>\r\n</div>\r\n\r\n<div *ngIf=\"listtype === 1\">\r\n  <div class=\"stock-transactions__grid-cell\">\r\n    <span class=\"stock-transactions__grid-text\"\r\n      ><a\r\n        [routerLink]=\"['/details-component', stock.symbol]\"\r\n        routerLinkActive=\"active\"\r\n        >{{ stock.symbol }}</a\r\n      ></span\r\n    >\r\n  </div>\r\n  <div class=\"stock-transactions__grid-cell\">\r\n    <span class=\"stock-transactions__grid-text\">{{ stock.allocation }}</span>\r\n  </div>\r\n  <div class=\"stock-transactions__grid-cell\">\r\n    <span class=\"stock-transactions__grid-text\">{{\r\n      stock.price | number: \".1-2\"\r\n    }}</span>\r\n  </div>\r\n  <div class=\"stock-transactions__grid-cell\">\r\n    <span class=\"stock-transactions__grid-text\">{{\r\n      stock.allocation * stock.price | number: \".1-2\"\r\n    }}</span>\r\n  </div>\r\n  <div class=\"stock-transactions__grid-cell center\">\r\n    <input [(ngModel)]=\"quantity\" class=\"modal__number-box\" type=\"number\" />\r\n    &nbsp;\r\n    <a (click)=\"buyStock(stocksymbol)\"\r\n      ><span class=\"btn-transaction btn-transaction--buy\">buy</span></a\r\n    >\r\n    &nbsp;\r\n    <a (click)=\"sellStock(stocksymbol)\"\r\n      ><span class=\"btn-transaction btn-transaction--sell\">sell</span></a\r\n    >\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal modal__buy\">\r\n  <div class=\"modal__overlay\"></div>\r\n  <div class=\"modal__content modal__content--large\">\r\n    <div class=\"modal__close\">x</div>\r\n    <h2 class=\"modal__h2\">Buy stock</h2>\r\n    <select class=\"modal__dropdown\">\r\n      <option value=\"AMZN\">Amazon</option>\r\n      <option value=\"DSNY\">Disney</option>\r\n      <option value=\"HULU\">Hulu</option>\r\n      <option value=\"NTFLX\">Netflix</option>\r\n    </select>\r\n\r\n    <input\r\n      class=\"modal__number-box\"\r\n      type=\"number\"\r\n      name=\"quantity\"\r\n      placeholder=\"enter amount\"\r\n    />\r\n\r\n    <button class=\"modal__btn\">Buy</button>\r\n  </div>\r\n</div>\r\n<div class=\"modal modal__sell\">\r\n  <div class=\"modal__overlay\"></div>\r\n  <div class=\"modal__content modal__content--large\">\r\n    <div class=\"modal__close\">x</div>\r\n    <h2 class=\"modal__h2\">Sell stock</h2>\r\n    <select class=\"modal__dropdown\">\r\n      <option value=\"AMZN\">Amazon</option>\r\n      <option value=\"DSNY\">Disney</option>\r\n      <option value=\"HULU\">Hulu</option>\r\n      <option value=\"NTFLX\">Netflix</option>\r\n    </select>\r\n\r\n    <input\r\n      class=\"modal__number-box\"\r\n      type=\"number\"\r\n      name=\"quantity\"\r\n      placeholder=\"enter amount\"\r\n    />\r\n\r\n    <button class=\"modal__btn\">Sell</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/stocktransactions/stocktransactions.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/stocktransactions/stocktransactions.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"stock-transactions full-width\">\n  <div class=\"stock-transactions__grid-row\">\n    <div class=\"stock-transactions__grid-cell\">\n      <span\n        class=\"stock-transactions__grid-text stock-transactions__grid-text--white\"\n        >Transaction ID</span\n      >\n    </div>\n    <div class=\"stock-transactions__grid-cell\">\n      <span\n        class=\"stock-transactions__grid-text stock-transactions__grid-text--white\"\n        >stock</span\n      >\n    </div>\n    <div class=\"stock-transactions__grid-cell\">\n      <span\n        class=\"stock-transactions__grid-text stock-transactions__grid-text--white\"\n        >amount</span\n      >\n    </div>\n    <div class=\"stock-transactions__grid-cell\">\n      <span\n        class=\"stock-transactions__grid-text stock-transactions__grid-text--white\"\n        >direction</span\n      >\n    </div>\n    <div class=\"stock-transactions__grid-cell\">\n      <span\n        class=\"stock-transactions__grid-text stock-transactions__grid-text--white\"\n        >price</span\n      >\n    </div>\n    <div class=\"stock-transactions__grid-cell\">\n      <span\n        class=\"stock-transactions__grid-text stock-transactions__grid-text--white\"\n        >total</span\n      >\n    </div>\n  </div>\n  <div\n    class=\"stock-transactions__grid-row\"\n    *ngFor=\"\n      let transaction of transactions\n        | paginate: { itemsPerPage: 10, currentPage: p };\n      let i = index\n    \"\n  >\n    <transactionslist\n      [transaction]=\"transaction\"\n      [index]=\"i + 1\"\n    ></transactionslist>\n  </div>\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/transactionslist/transactionslist.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/transactionslist/transactionslist.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table\">\n  <div class=\"stock-transactions__grid-cell\">\n    <span class=\"stock-transactions__grid-text\"\n      >tr{{ transaction.id + 1 }}</span\n    >\n  </div>\n  <div class=\"stock-transactions__grid-cell\">\n    <span class=\"stock-transactions__grid-text\">{{ transaction.symbol }}</span>\n  </div>\n  <div class=\"stock-transactions__grid-cell\">\n    <span class=\"stock-transactions__grid-text\">{{ transaction.amount }}</span>\n  </div>\n  <div class=\"stock-transactions__grid-cell\">\n    <span\n      class=\"stock-transactions__grid-text\"\n      [ngClass]=\"{\n        'stock-transactions__grid-cell-buy': transaction.side === 'BUY',\n        'stock-transactions__grid-cell-sell': transaction.side === 'SELL'\n      }\"\n      >{{ transaction.side }}</span\n    >\n  </div>\n  <div class=\"stock-transactions__grid-cell\">\n    <span class=\"stock-transactions__grid-text\">{{\n      transaction.tickPrice | number: \".1-2\"\n    }}</span>\n  </div>\n  <div class=\"stock-transactions__grid-cell\">\n    <span class=\"stock-transactions__grid-text\">{{\n      transaction.cost | number: \"0.0-2\"\n    }}</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/userallocations/userallocations.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/userallocations/userallocations.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"stock-transactions full-width\" >\n  <div class=\"stock-transactions__grid-row\">\n      <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text stock-transactions__grid-text--white\">stock</span></div>\n      <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text stock-transactions__grid-text--white\">amount</span></div>\n      <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text stock-transactions__grid-text--white\">current price</span></div>\n      <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text stock-transactions__grid-text--white\">total</span></div>\n      <div class=\"stock-transactions__grid-cell\"></div>\n  </div>\n  <div class=\"stock-transactions__grid-row\" *ngFor=\"let symbol of allocations\">\n    <stockslist [stocksymbol]=\"symbol\" [listtype]=\"1\"></stockslist>\n  </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/usertransactions/usertransactions.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/usertransactions/usertransactions.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"stock-transactions full-width\">\n  <div class=\"stock-transactions__grid-row\">\n    <div class=\"stock-transactions__grid-cell\">\n      <span\n        class=\"stock-transactions__grid-text stock-transactions__grid-text--white\"\n        >Transaction ID</span\n      >\n    </div>\n    <div class=\"stock-transactions__grid-cell\">\n      <span\n        class=\"stock-transactions__grid-text stock-transactions__grid-text--white\"\n        >stock</span\n      >\n    </div>\n    <div class=\"stock-transactions__grid-cell\">\n      <span\n        class=\"stock-transactions__grid-text stock-transactions__grid-text--white\"\n        >amount</span\n      >\n    </div>\n    <div class=\"stock-transactions__grid-cell\">\n      <span\n        class=\"stock-transactions__grid-text stock-transactions__grid-text--white\"\n        >direction</span\n      >\n    </div>\n    <div class=\"stock-transactions__grid-cell\">\n      <span\n        class=\"stock-transactions__grid-text stock-transactions__grid-text--white\"\n        >price</span\n      >\n    </div>\n    <div class=\"stock-transactions__grid-cell\">\n      <span\n        class=\"stock-transactions__grid-text stock-transactions__grid-text--white\"\n        >total</span\n      >\n    </div>\n  </div>\n  <div\n    class=\"stock-transactions__grid-row\"\n    *ngFor=\"\n      let transaction of transactions\n        | paginate: { itemsPerPage: 10, currentPage: p };\n      let i = index\n    \"\n  >\n    <transactionslist\n      [transaction]=\"transaction\"\n      [index]=\"i + 1\"\n    ></transactionslist>\n\n  </div>\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</section>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/watchlistgraph/watchlistgraph.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/watchlistgraph/watchlistgraph.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"stock-graph\">\n  <div id=\"stockGraphContainer\" class=\"stock-graph__container\">\n    <stockgraph [stocks]=\"follows\" [graphtype]=\"1\"></stockgraph>\n  </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/watchliststocks/watchliststocks.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/watchliststocks/watchliststocks.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"stock-list\">\r\n  <h2 class=\"stock-list__title\">\r\n    Stocks that I follow\r\n    <a (click)=\"mshow = !mshow\"\r\n      ><span class=\"stock-list__btn stock-list__btn--add\">&#43;</span></a\r\n    >\r\n  </h2>\r\n  <div *ngIf=\"mshow\" class=\"modal visible\">\r\n    <div class=\"modal__overlay\"></div>\r\n    <div class=\"modal__content\">\r\n      <div (click)=\"mshow = !mshow\" class=\"modal__close\">x</div>\r\n      <h2 class=\"modal__h2\">Select a new stock to follow</h2>\r\n      <select class=\"modal__dropdown\" [(ngModel)]=\"follow\">\r\n        <option *ngFor=\"let stock of stocks\" value=\"{{ stock.symbol }}\">{{\r\n          stock.name\r\n        }}</option>\r\n      </select>\r\n      <button (click)=\"addFollow(follow); mshow = !mshow\" class=\"modal__btn\">\r\n        Add\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"stock-list__grid\" *ngFor=\"let symbol of follows\">\r\n    <div class=\"stock-list__grid-row\">\r\n      <div class=\"stock-list__grid-cell\">\r\n        <a (click)=\"removeStock(symbol)\"\r\n          ><span class=\"stock-list__btn stock-list__btn--remove\"\r\n            >&ndash;</span\r\n          ></a\r\n        >\r\n      </div>\r\n      <stockslist [stocksymbol]=\"symbol\" [listtype]=\"0\"></stockslist>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/assets/assets.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/assets/assets.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n    <head>\r\n\r\n        <meta charset=\"utf-8\">\r\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n        <title>Angular Training</title>\r\n    </head>\r\n    <body>\r\n        <userallocations></userallocations>\r\n    </body>\r\n</html>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/details/details.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/details/details.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"utf-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n    <title>Angular Training</title>\r\n  </head>\r\n  <body>\r\n    <stockdetails [symbol]=\"stock\"></stockdetails>\r\n    <stockdetailgraph [symbol]=\"[stock]\"></stockdetailgraph>\r\n    <stocktransactions [symbol]=\"stock\"></stocktransactions>\r\n  </body>\r\n</html>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"utf-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n    <title>Angular Training</title>\r\n  </head>\r\n  <body>\r\n    <watchliststocks></watchliststocks>\r\n    <watchlistgraph></watchlistgraph>\r\n    <usertransactions></usertransactions>\r\n  </body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages */ "./src/app/pages/index.ts");




const routes = [
    { path: "home-component", component: _pages__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "assets-component", component: _pages__WEBPACK_IMPORTED_MODULE_3__["AssetsComponent"] },
    { path: "details-component/:symbol", component: _pages__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"] },
    { path: "**", component: _pages__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = "trading-app";
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/fesm2015/angular-highcharts.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components */ "./src/app/components/index.ts");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages */ "./src/app/pages/index.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _pages__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _pages__WEBPACK_IMPORTED_MODULE_10__["AssetsComponent"],
            _pages__WEBPACK_IMPORTED_MODULE_10__["DetailsComponent"],
            _components__WEBPACK_IMPORTED_MODULE_9__["WatchliststocksComponent"],
            _components__WEBPACK_IMPORTED_MODULE_9__["StockslistComponent"],
            _components__WEBPACK_IMPORTED_MODULE_9__["StockgraphComponent"],
            _components__WEBPACK_IMPORTED_MODULE_9__["TransactionslistComponent"],
            _components__WEBPACK_IMPORTED_MODULE_9__["UsertransactionsComponent"],
            _components__WEBPACK_IMPORTED_MODULE_9__["WatchlistgraphComponent"],
            _components__WEBPACK_IMPORTED_MODULE_9__["StocktransactionsComponent"],
            _components__WEBPACK_IMPORTED_MODULE_9__["StockdetailsComponent"],
            _components__WEBPACK_IMPORTED_MODULE_9__["StockdetailgraphComponent"],
            _components__WEBPACK_IMPORTED_MODULE_9__["UserallocationsComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
            angular_highcharts__WEBPACK_IMPORTED_MODULE_7__["ChartModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/index.ts":
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/*! exports provided: StockslistComponent, TransactionslistComponent, StockgraphComponent, WatchliststocksComponent, WatchlistgraphComponent, UsertransactionsComponent, UserallocationsComponent, StockdetailsComponent, StocktransactionsComponent, StockdetailgraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stockslist_stockslist_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stockslist/stockslist.component */ "./src/app/components/stockslist/stockslist.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StockslistComponent", function() { return _stockslist_stockslist_component__WEBPACK_IMPORTED_MODULE_0__["StockslistComponent"]; });

/* harmony import */ var _transactionslist_transactionslist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transactionslist/transactionslist.component */ "./src/app/components/transactionslist/transactionslist.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionslistComponent", function() { return _transactionslist_transactionslist_component__WEBPACK_IMPORTED_MODULE_1__["TransactionslistComponent"]; });

/* harmony import */ var _stockgraph_stockgraph_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stockgraph/stockgraph.component */ "./src/app/components/stockgraph/stockgraph.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StockgraphComponent", function() { return _stockgraph_stockgraph_component__WEBPACK_IMPORTED_MODULE_2__["StockgraphComponent"]; });

/* harmony import */ var _watchliststocks_watchliststocks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./watchliststocks/watchliststocks.component */ "./src/app/components/watchliststocks/watchliststocks.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WatchliststocksComponent", function() { return _watchliststocks_watchliststocks_component__WEBPACK_IMPORTED_MODULE_3__["WatchliststocksComponent"]; });

/* harmony import */ var _watchlistgraph_watchlistgraph_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./watchlistgraph/watchlistgraph.component */ "./src/app/components/watchlistgraph/watchlistgraph.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WatchlistgraphComponent", function() { return _watchlistgraph_watchlistgraph_component__WEBPACK_IMPORTED_MODULE_4__["WatchlistgraphComponent"]; });

/* harmony import */ var _usertransactions_usertransactions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usertransactions/usertransactions.component */ "./src/app/components/usertransactions/usertransactions.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsertransactionsComponent", function() { return _usertransactions_usertransactions_component__WEBPACK_IMPORTED_MODULE_5__["UsertransactionsComponent"]; });

/* harmony import */ var _userallocations_userallocations_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userallocations/userallocations.component */ "./src/app/components/userallocations/userallocations.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserallocationsComponent", function() { return _userallocations_userallocations_component__WEBPACK_IMPORTED_MODULE_6__["UserallocationsComponent"]; });

/* harmony import */ var _stockdetails_stockdetails_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stockdetails/stockdetails.component */ "./src/app/components/stockdetails/stockdetails.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StockdetailsComponent", function() { return _stockdetails_stockdetails_component__WEBPACK_IMPORTED_MODULE_7__["StockdetailsComponent"]; });

/* harmony import */ var _stocktransactions_stocktransactions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stocktransactions/stocktransactions.component */ "./src/app/components/stocktransactions/stocktransactions.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StocktransactionsComponent", function() { return _stocktransactions_stocktransactions_component__WEBPACK_IMPORTED_MODULE_8__["StocktransactionsComponent"]; });

/* harmony import */ var _stockdetailgraph_stockdetailgraph_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stockdetailgraph/stockdetailgraph.component */ "./src/app/components/stockdetailgraph/stockdetailgraph.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StockdetailgraphComponent", function() { return _stockdetailgraph_stockdetailgraph_component__WEBPACK_IMPORTED_MODULE_9__["StockdetailgraphComponent"]; });













/***/ }),

/***/ "./src/app/components/stockdetailgraph/stockdetailgraph.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/stockdetailgraph/stockdetailgraph.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RvY2tkZXRhaWxncmFwaC9zdG9ja2RldGFpbGdyYXBoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/stockdetailgraph/stockdetailgraph.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/stockdetailgraph/stockdetailgraph.component.ts ***!
  \***************************************************************************/
/*! exports provided: StockdetailgraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockdetailgraphComponent", function() { return StockdetailgraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StockdetailgraphComponent = class StockdetailgraphComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StockdetailgraphComponent.prototype, "symbol", void 0);
StockdetailgraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "stockdetailgraph",
        template: __webpack_require__(/*! raw-loader!./stockdetailgraph.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/stockdetailgraph/stockdetailgraph.component.html"),
        styles: [__webpack_require__(/*! ./stockdetailgraph.component.css */ "./src/app/components/stockdetailgraph/stockdetailgraph.component.css")]
    })
], StockdetailgraphComponent);



/***/ }),

/***/ "./src/app/components/stockdetails/stockdetails.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/stockdetails/stockdetails.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RvY2tkZXRhaWxzL3N0b2NrZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/stockdetails/stockdetails.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/stockdetails/stockdetails.component.ts ***!
  \*******************************************************************/
/*! exports provided: StockdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockdetailsComponent", function() { return StockdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StockdetailsComponent = class StockdetailsComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StockdetailsComponent.prototype, "symbol", void 0);
StockdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "stockdetails",
        template: __webpack_require__(/*! raw-loader!./stockdetails.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/stockdetails/stockdetails.component.html"),
        styles: [__webpack_require__(/*! ./stockdetails.component.css */ "./src/app/components/stockdetails/stockdetails.component.css")]
    })
], StockdetailsComponent);



/***/ }),

/***/ "./src/app/components/stockgraph/stockgraph.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/stockgraph/stockgraph.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RvY2tncmFwaC9zdG9ja2dyYXBoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/stockgraph/stockgraph.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/stockgraph/stockgraph.component.ts ***!
  \***************************************************************/
/*! exports provided: StockgraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockgraphComponent", function() { return StockgraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/fesm2015/angular-highcharts.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");




let StockgraphComponent = class StockgraphComponent {
    constructor(graphService, stockService) {
        this.graphService = graphService;
        this.stockService = stockService;
    }
    addLine(symbol, d) {
        this.chart.addSeries({
            type: "line",
            name: symbol,
            data: d,
        }, true, false);
    }
    ngOnChanges() {
        this.selectYear();
    }
    getData(data) {
        if (this.graphtype) {
            return data.aggregated.map((p) => ({
                x: new Date(p.date),
                y: (p.price - Math.min(...data.aggregated.map((p) => p.price))) /
                    (Math.max(...data.aggregated.map((p) => p.price)) -
                        Math.min(...data.aggregated.map((p) => p.price))),
            }));
        }
        else {
            this.addLine("STRK (aggregated)", data.aggregated.map((p) => ({
                x: new Date(p.date),
                y: p.price,
            })));
            return data.detailed.map((p) => ({
                x: new Date(p.date),
                y: p.price,
            }));
        }
    }
    createChart(period) {
        this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_2__["Chart"]({
            chart: {
                type: "line",
            },
            title: {
                text: period + " Stock Prices",
            },
            credits: {
                enabled: false,
            },
            yAxis: {
                max: this.graphtype,
            },
            xAxis: {
                type: "datetime",
            },
        });
    }
    selectLive() {
        this.createChart("Live");
        this.addLine(this.stocks[0], []);
        this.stockService.listenPrice(this.stocks[0]).subscribe((data) => {
            this.chart.addPoint(data.price);
        });
        // if (!this.activeSubcriptions[this.stocks[0]]) {
        //   this.activeSubcriptions[this.stocks[0]] = setInterval(() => {
        //     this.stockService.getLatestPrice(this.stocks[0]).subscribe((data) => {
        //       this.chart.addPoint(data.price);
        //     });
        //   }, 5000);
        // }
    }
    selectToday() {
        this.createChart("Todays");
        this.stocks.forEach((stock) => this.graphService
            .listenGraphToday(stock)
            .subscribe((data) => this.addLine(stock, this.getData(data))));
    }
    selectYear() {
        this.createChart("Yearly");
        this.stocks.forEach((stock) => this.graphService
            .listenGraphYear(stock)
            .subscribe((data) => this.addLine(stock, this.getData(data))));
    }
};
StockgraphComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["GraphService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["StockService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StockgraphComponent.prototype, "stocks", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StockgraphComponent.prototype, "graphtype", void 0);
StockgraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "stockgraph",
        template: __webpack_require__(/*! raw-loader!./stockgraph.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/stockgraph/stockgraph.component.html"),
        styles: [__webpack_require__(/*! ./stockgraph.component.css */ "./src/app/components/stockgraph/stockgraph.component.css")]
    })
], StockgraphComponent);



/***/ }),

/***/ "./src/app/components/stockslist/stockslist.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/stockslist/stockslist.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RvY2tzbGlzdC9zdG9ja3NsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/stockslist/stockslist.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/stockslist/stockslist.component.ts ***!
  \***************************************************************/
/*! exports provided: StockslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockslistComponent", function() { return StockslistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");



let StockslistComponent = class StockslistComponent {
    constructor(stockService) {
        this.stockService = stockService;
        this.quantity = null;
    }
    ngOnInit() {
        this.stock = this.stockService.getStock(this.stocksymbol);
        this.stockService.listenPrice(this.stocksymbol).subscribe((data) => {
            this.stock.price = data.price;
        });
    }
    buyStock(symbol) {
        let qty = 1;
        if (this.quantity) {
            qty = this.quantity;
        }
        this.stockService.doTransaction(symbol, "BUY", qty);
        this.quantity = null;
    }
    sellStock(symbol) {
        let qty = 1;
        if (this.quantity) {
            qty = this.quantity;
        }
        this.stockService.doTransaction(symbol, "SELL", qty);
        this.quantity = null;
    }
};
StockslistComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["StockService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StockslistComponent.prototype, "stocksymbol", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StockslistComponent.prototype, "listtype", void 0);
StockslistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "stockslist",
        template: __webpack_require__(/*! raw-loader!./stockslist.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/stockslist/stockslist.component.html"),
        styles: [__webpack_require__(/*! ./stockslist.component.css */ "./src/app/components/stockslist/stockslist.component.css")]
    })
], StockslistComponent);



/***/ }),

/***/ "./src/app/components/stocktransactions/stocktransactions.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/stocktransactions/stocktransactions.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RvY2t0cmFuc2FjdGlvbnMvc3RvY2t0cmFuc2FjdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/stocktransactions/stocktransactions.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/stocktransactions/stocktransactions.component.ts ***!
  \*****************************************************************************/
/*! exports provided: StocktransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocktransactionsComponent", function() { return StocktransactionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");



let StocktransactionsComponent = class StocktransactionsComponent {
    constructor(stockService) {
        this.stockService = stockService;
    }
    ngOnInit() {
        this.stockService
            .listenTransactions()
            .subscribe((data) => (this.transactions = data.filter((d) => d.symbol === this.symbol)));
    }
};
StocktransactionsComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["StockService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StocktransactionsComponent.prototype, "symbol", void 0);
StocktransactionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "stocktransactions",
        template: __webpack_require__(/*! raw-loader!./stocktransactions.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/stocktransactions/stocktransactions.component.html"),
        styles: [__webpack_require__(/*! ./stocktransactions.component.css */ "./src/app/components/stocktransactions/stocktransactions.component.css")]
    })
], StocktransactionsComponent);



/***/ }),

/***/ "./src/app/components/transactionslist/transactionslist.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/transactionslist/transactionslist.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhbnNhY3Rpb25zbGlzdC90cmFuc2FjdGlvbnNsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/transactionslist/transactionslist.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/transactionslist/transactionslist.component.ts ***!
  \***************************************************************************/
/*! exports provided: TransactionslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionslistComponent", function() { return TransactionslistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TransactionslistComponent = class TransactionslistComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TransactionslistComponent.prototype, "transaction", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TransactionslistComponent.prototype, "index", void 0);
TransactionslistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "transactionslist",
        template: __webpack_require__(/*! raw-loader!./transactionslist.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/transactionslist/transactionslist.component.html"),
        styles: [__webpack_require__(/*! ./transactionslist.component.css */ "./src/app/components/transactionslist/transactionslist.component.css")]
    })
], TransactionslistComponent);



/***/ }),

/***/ "./src/app/components/userallocations/userallocations.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/userallocations/userallocations.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcmFsbG9jYXRpb25zL3VzZXJhbGxvY2F0aW9ucy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/userallocations/userallocations.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/userallocations/userallocations.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserallocationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserallocationsComponent", function() { return UserallocationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");



let UserallocationsComponent = class UserallocationsComponent {
    constructor(stockService) {
        this.stockService = stockService;
    }
    ngOnInit() {
        this.stockService
            .listenAllocations()
            .subscribe((data) => (this.allocations = data.map((s) => s.symbol)));
    }
};
UserallocationsComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["StockService"] }
];
UserallocationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "userallocations",
        template: __webpack_require__(/*! raw-loader!./userallocations.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/userallocations/userallocations.component.html"),
        styles: [__webpack_require__(/*! ./userallocations.component.css */ "./src/app/components/userallocations/userallocations.component.css")]
    })
], UserallocationsComponent);



/***/ }),

/***/ "./src/app/components/usertransactions/usertransactions.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/usertransactions/usertransactions.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnRyYW5zYWN0aW9ucy91c2VydHJhbnNhY3Rpb25zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/usertransactions/usertransactions.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/usertransactions/usertransactions.component.ts ***!
  \***************************************************************************/
/*! exports provided: UsertransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsertransactionsComponent", function() { return UsertransactionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");



let UsertransactionsComponent = class UsertransactionsComponent {
    constructor(stockService) {
        this.stockService = stockService;
    }
    ngOnInit() {
        this.stockService
            .listenTransactions()
            .subscribe((data) => (this.transactions = data));
    }
};
UsertransactionsComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["StockService"] }
];
UsertransactionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "usertransactions",
        template: __webpack_require__(/*! raw-loader!./usertransactions.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/usertransactions/usertransactions.component.html"),
        styles: [__webpack_require__(/*! ./usertransactions.component.css */ "./src/app/components/usertransactions/usertransactions.component.css")]
    })
], UsertransactionsComponent);



/***/ }),

/***/ "./src/app/components/watchlistgraph/watchlistgraph.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/watchlistgraph/watchlistgraph.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2F0Y2hsaXN0Z3JhcGgvd2F0Y2hsaXN0Z3JhcGguY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/watchlistgraph/watchlistgraph.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/watchlistgraph/watchlistgraph.component.ts ***!
  \***********************************************************************/
/*! exports provided: WatchlistgraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistgraphComponent", function() { return WatchlistgraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");



let WatchlistgraphComponent = class WatchlistgraphComponent {
    constructor(watchlistService) {
        this.watchlistService = watchlistService;
        this.follows = [];
        this.graphtype = 0;
    }
    ngOnInit() {
        this.watchlistService
            .listenWatchList()
            .subscribe((data) => (this.follows = data.map((s) => s.symbol)));
    }
};
WatchlistgraphComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["WatchlistService"] }
];
WatchlistgraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "watchlistgraph",
        template: __webpack_require__(/*! raw-loader!./watchlistgraph.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/watchlistgraph/watchlistgraph.component.html"),
        styles: [__webpack_require__(/*! ./watchlistgraph.component.css */ "./src/app/components/watchlistgraph/watchlistgraph.component.css")]
    })
], WatchlistgraphComponent);



/***/ }),

/***/ "./src/app/components/watchliststocks/watchliststocks.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/watchliststocks/watchliststocks.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2F0Y2hsaXN0c3RvY2tzL3dhdGNobGlzdHN0b2Nrcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/watchliststocks/watchliststocks.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/watchliststocks/watchliststocks.component.ts ***!
  \*************************************************************************/
/*! exports provided: WatchliststocksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchliststocksComponent", function() { return WatchliststocksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");



let WatchliststocksComponent = class WatchliststocksComponent {
    constructor(watchlistService) {
        this.watchlistService = watchlistService;
        this.mshow = false;
        this.stocks = [];
        this.follows = [];
    }
    ngOnInit() {
        this.watchlistService
            .getAllStocks()
            .subscribe((data) => data.map((s) => this.stocks.push({ name: s.name, symbol: s.symbol })));
        this.watchlistService
            .listenWatchList()
            .subscribe((data) => (this.follows = data.map((s) => s.symbol)));
    }
    addFollow(symbol) {
        //console.log(symbol);
        this.watchlistService.changeWatchList(symbol, "ADD");
    }
    removeStock(symbol) {
        console.log(symbol);
        this.watchlistService.changeWatchList(symbol, "REMOVE");
    }
};
WatchliststocksComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["WatchlistService"] }
];
WatchliststocksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "watchliststocks",
        template: __webpack_require__(/*! raw-loader!./watchliststocks.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/watchliststocks/watchliststocks.component.html"),
        styles: [__webpack_require__(/*! ./watchliststocks.component.css */ "./src/app/components/watchliststocks/watchliststocks.component.css")]
    })
], WatchliststocksComponent);



/***/ }),

/***/ "./src/app/models/graph.ts":
/*!*********************************!*\
  !*** ./src/app/models/graph.ts ***!
  \*********************************/
/*! exports provided: Graph, Point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Graph", function() { return Graph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
class Graph {
}
class Point {
}


/***/ }),

/***/ "./src/app/models/index.ts":
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/*! exports provided: Stock, Tick, Transaction, Graph, Point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stock */ "./src/app/models/stock.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stock", function() { return _stock__WEBPACK_IMPORTED_MODULE_0__["Stock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tick", function() { return _stock__WEBPACK_IMPORTED_MODULE_0__["Tick"]; });

/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transaction */ "./src/app/models/transaction.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return _transaction__WEBPACK_IMPORTED_MODULE_1__["Transaction"]; });

/* harmony import */ var _graph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graph */ "./src/app/models/graph.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Graph", function() { return _graph__WEBPACK_IMPORTED_MODULE_2__["Graph"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return _graph__WEBPACK_IMPORTED_MODULE_2__["Point"]; });






/***/ }),

/***/ "./src/app/models/stock.ts":
/*!*********************************!*\
  !*** ./src/app/models/stock.ts ***!
  \*********************************/
/*! exports provided: Stock, Tick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stock", function() { return Stock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tick", function() { return Tick; });
class Stock {
}
class Tick {
    constructor(data) {
        this.stock = data.stock;
        this.price = data.price;
        this.date = new Date(data.date);
    }
}
Tick.ctorParameters = () => [
    null
];


/***/ }),

/***/ "./src/app/models/transaction.ts":
/*!***************************************!*\
  !*** ./src/app/models/transaction.ts ***!
  \***************************************/
/*! exports provided: Transaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return Transaction; });
class Transaction {
}


/***/ }),

/***/ "./src/app/pages/assets/assets.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/assets/assets.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0cy9hc3NldHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/assets/assets.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/assets/assets.component.ts ***!
  \**************************************************/
/*! exports provided: AssetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsComponent", function() { return AssetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AssetsComponent = class AssetsComponent {
    constructor() { }
    ngOnInit() {
        //this.stockService.getAllocations().toPromise().then((data) => data.map((s) => this.allocations.push(s.symbol)));
        // this.stockService
        // .getAllocations()
        // .subscribe((data) =>
        //   data.map((s) => this.allocations.push(s.symbol))
        // );
    }
};
AssetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-assets",
        template: __webpack_require__(/*! raw-loader!./assets.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/assets/assets.component.html"),
        styles: [__webpack_require__(/*! ./assets.component.css */ "./src/app/pages/assets/assets.component.css")]
    })
], AssetsComponent);



/***/ }),

/***/ "./src/app/pages/details/details.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/details/details.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/details/details.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/details/details.component.ts ***!
  \****************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let DetailsComponent = class DetailsComponent {
    //private stockSymbolSubscription: Subscription;
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.stock = params["symbol"];
        });
    }
};
DetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-details",
        template: __webpack_require__(/*! raw-loader!./details.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/details/details.component.html"),
        styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/pages/details/details.component.css")]
    })
], DetailsComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() { }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/index.ts":
/*!********************************!*\
  !*** ./src/app/pages/index.ts ***!
  \********************************/
/*! exports provided: HomeComponent, AssetsComponent, DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });

/* harmony import */ var _assets_assets_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/assets.component */ "./src/app/pages/assets/assets.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AssetsComponent", function() { return _assets_assets_component__WEBPACK_IMPORTED_MODULE_1__["AssetsComponent"]; });

/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details/details.component */ "./src/app/pages/details/details.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return _details_details_component__WEBPACK_IMPORTED_MODULE_2__["DetailsComponent"]; });






/***/ }),

/***/ "./src/app/services/graph.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/graph.service.ts ***!
  \*******************************************/
/*! exports provided: GraphService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphService", function() { return GraphService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let GraphService = class GraphService {
    constructor(http) {
        this.http = http;
    }
    listenGraphToday(symbol) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL}stocks/${symbol}/price/today`, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].user);
    }
    listenGraphYear(symbol) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL}stocks/${symbol}/price/yearly`, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].user);
    }
};
GraphService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GraphService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], GraphService);



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: StockService, WatchlistService, GraphService, WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stock_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stock.service */ "./src/app/services/stock.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StockService", function() { return _stock_service__WEBPACK_IMPORTED_MODULE_0__["StockService"]; });

/* harmony import */ var _watchlist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./watchlist.service */ "./src/app/services/watchlist.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WatchlistService", function() { return _watchlist_service__WEBPACK_IMPORTED_MODULE_1__["WatchlistService"]; });

/* harmony import */ var _graph_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graph.service */ "./src/app/services/graph.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphService", function() { return _graph_service__WEBPACK_IMPORTED_MODULE_2__["GraphService"]; });

/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./websocket.service */ "./src/app/services/websocket.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return _websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"]; });







/***/ }),

/***/ "./src/app/services/stock.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/stock.service.ts ***!
  \*******************************************/
/*! exports provided: StockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockService", function() { return StockService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models */ "./src/app/models/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");







let StockService = class StockService {
    constructor(http, webSocketService) {
        this.http = http;
        this.webSocketService = webSocketService;
        this.allocationSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.transactionSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.activeSubcriptions = new Map();
    }
    listenAllocations() {
        this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL}userdata/allocations`, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].user)
            .subscribe((data) => this.allocationSubscription.next(data));
        return this.allocationSubscription;
    }
    // getAllocations(): Observable<{ symbol: string; amount: number }[]> {
    //   return this.http.get<{ symbol: string; amount: number }[]>(
    //     `${environment.apiURL}userdata/allocations`,
    //     environment.user
    //   );
    // }
    getLatestPrice(symbol) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL}stocks/${symbol}/price`, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].user);
    }
    listenPrice(symbol) {
        let priceSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.webSocketService.connect().then((client) => {
            client.subscribe("/livestream/" + symbol, (update) => {
                priceSubscription.next(new _models__WEBPACK_IMPORTED_MODULE_5__["Tick"](update));
            });
        });
        return priceSubscription;
    }
    getStock(symbol) {
        let stock = {
            symbol: null,
            allocation: null,
            price: null,
        };
        stock.symbol = symbol;
        this.listenAllocations().subscribe((data) => {
            stock.allocation = data.find((d) => d.symbol === symbol).amount;
        });
        // if (!this.activeSubcriptions[symbol]) {
        //   this.activeSubcriptions[symbol] = setInterval(() => {
        //     this.getLatestPrice(symbol).subscribe((data) => {
        //       stock.price = data.price;
        //     });
        //   }, 5000);
        // }
        return stock;
    }
    doTransaction(symbol, action, quantity) {
        this.http
            .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL}transactions`, { symbol: symbol, side: action, amount: quantity }, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].user)
            .subscribe((data) => this.listenAllocations().subscribe((data) => this.listenTransactions()));
    }
    listenTransactions() {
        this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL}transactions`, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].user)
            .subscribe((data) => this.transactionSubscription.next(data.map((d, i) => ({
            id: i,
            side: d.side,
            symbol: d.symbol,
            amount: d.amount,
            tickPrice: d.tickPrice,
            cost: d.cost,
        }))));
        return this.transactionSubscription;
    }
};
StockService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_6__["WebsocketService"] }
];
StockService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], StockService);



/***/ }),

/***/ "./src/app/services/watchlist.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/watchlist.service.ts ***!
  \***********************************************/
/*! exports provided: WatchlistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistService", function() { return WatchlistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let WatchlistService = class WatchlistService {
    constructor(http) {
        this.http = http;
        this.watchlistSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    getAllStocks() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL}stocks`);
    }
    listenWatchList() {
        this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL}userdata/watchlist`, src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].user)
            .subscribe((data) => this.watchlistSubscription.next(data));
        return this.watchlistSubscription;
    }
    changeWatchList(symbol, action) {
        this.http
            .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL}userdata/watchlist`, { symbol: symbol, action: action }, src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].user)
            .subscribe((data) => this.listenWatchList());
    }
};
WatchlistService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WatchlistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], WatchlistService);



/***/ }),

/***/ "./src/app/services/websocket.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/websocket.service.ts ***!
  \***********************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _hapi_nes_lib_Client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hapi/nes/lib/Client */ "./node_modules/@hapi/nes/lib/Client.js");
/* harmony import */ var _hapi_nes_lib_Client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hapi_nes_lib_Client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let WebsocketService = class WebsocketService {
    constructor() { }
    connect() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.nesClient) {
                console.log("stock updates", "start");
                // let protocol =
                //   window.location.protocol.indexOf("https") >= 0 ? "wss://" : "ws://";
                this.nesClient = new _hapi_nes_lib_Client__WEBPACK_IMPORTED_MODULE_2__["Client"](src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].webSocketURL //protocol + //window.location.origin.split("//").pop()
                );
                this.nesClient.connect();
                // const start = async () => {
                //   await this.nesClient.connect();
                //   //callback();
                // };
                //start();
            }
            return this.nesClient;
        });
    }
    subscribeToLiveUpdates(stock, callback) {
        callback({
            stock: stock,
        });
        this.nesClient.subscribe("/livestream/" + stock, (update, flags) => {
            if (callback)
                callback(update);
            // console.log('stock updates: ' + stock, update)
        });
    }
};
WebsocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], WebsocketService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiURL: "https://demomocktradingserver.azurewebsites.net/",
    webSocketURL: "wss://demomocktradingserver.azurewebsites.net/",
    user: { headers: { userid: "adithya" } },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error";  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\adith\OneDrive\Documents\code\work\angular-trading-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map