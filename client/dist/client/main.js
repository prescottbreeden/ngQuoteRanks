(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _edit_quote_edit_quote_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-quote/edit-quote.component */ "./src/app/edit-quote/edit-quote.component.ts");
/* harmony import */ var _show_author_show_author_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-author/show-author.component */ "./src/app/show-author/show-author.component.ts");
/* harmony import */ var _edit_author_edit_author_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-author/edit-author.component */ "./src/app/edit-author/edit-author.component.ts");
/* harmony import */ var _submit_author_submit_author_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./submit-author/submit-author.component */ "./src/app/submit-author/submit-author.component.ts");
/* harmony import */ var _teapot_teapot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./teapot/teapot.component */ "./src/app/teapot/teapot.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quotes/quotes.component */ "./src/app/quotes/quotes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _show_author_show_author_component__WEBPACK_IMPORTED_MODULE_1__["ShowAuthorComponent"] },
    { path: 'authors', component: _show_author_show_author_component__WEBPACK_IMPORTED_MODULE_1__["ShowAuthorComponent"] },
    { path: 'authors/new', component: _submit_author_submit_author_component__WEBPACK_IMPORTED_MODULE_3__["SubmitAuthorComponent"] },
    { path: 'authors/edit/:id', component: _edit_author_edit_author_component__WEBPACK_IMPORTED_MODULE_2__["EditAuthorComponent"] },
    { path: 'authors/quotes/:id', component: _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_7__["QuotesComponent"] },
    { path: 'authors/quotes/:id/:idx', component: _edit_quote_edit_quote_component__WEBPACK_IMPORTED_MODULE_0__["EditQuoteComponent"] },
    { path: '**', component: _teapot_teapot_component__WEBPACK_IMPORTED_MODULE_4__["TeapotComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <h1>Quote Ranks</h1>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-12\">\n    <button class=\"btn\" [routerLink]=\"['/authors']\">Show Authors</button>\n    <button class=\"btn\" [routerLink]=\"['/authors/new']\">Add an Author</button>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-12\">\n      <router-outlet></router-outlet> \n  </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
    }
    AppComponent.prototype.goHome = function () {
        this._router.navigate(['/author']);
    };
    AppComponent.prototype.goSubmitAuthor = function () {
        this._router.navigate(['/author/new']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _submit_author_submit_author_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./submit-author/submit-author.component */ "./src/app/submit-author/submit-author.component.ts");
/* harmony import */ var _edit_author_edit_author_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-author/edit-author.component */ "./src/app/edit-author/edit-author.component.ts");
/* harmony import */ var _show_author_show_author_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-author/show-author.component */ "./src/app/show-author/show-author.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _teapot_teapot_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./teapot/teapot.component */ "./src/app/teapot/teapot.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./quotes/quotes.component */ "./src/app/quotes/quotes.component.ts");
/* harmony import */ var _edit_quote_edit_quote_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-quote/edit-quote.component */ "./src/app/edit-quote/edit-quote.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _submit_author_submit_author_component__WEBPACK_IMPORTED_MODULE_4__["SubmitAuthorComponent"],
                _edit_author_edit_author_component__WEBPACK_IMPORTED_MODULE_5__["EditAuthorComponent"],
                _show_author_show_author_component__WEBPACK_IMPORTED_MODULE_6__["ShowAuthorComponent"],
                _teapot_teapot_component__WEBPACK_IMPORTED_MODULE_9__["TeapotComponent"],
                _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_11__["QuotesComponent"],
                _edit_quote_edit_quote_component__WEBPACK_IMPORTED_MODULE_12__["EditQuoteComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/edit-author/edit-author.component.css":
/*!*******************************************************!*\
  !*** ./src/app/edit-author/edit-author.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-this {\n    display: flex;\n    justify-content: space-between;\n}"

/***/ }),

/***/ "./src/app/edit-author/edit-author.component.html":
/*!********************************************************!*\
  !*** ./src/app/edit-author/edit-author.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"border\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <h4>Edit author</h4>\n        <label for=\"author\">Author Name:</label>\n        <input \n          required\n          minlength=\"3\"\n          name=\"author\"\n          ngModel \n          #author=\"ngModel\"\n          [(ngModel)]=\"editAuthor.name\"\n          type=\"text\"\n          class=\"form-control\">\n          <div class=\"alert alert-danger\" *ngIf=\"author.touched && !author.valid\">\n            <div *ngIf=\"author.errors.required\">Author is required</div>\n            <div *ngIf=\"author.errors.minlength\">Author must be at least 3 characters long</div>\n          </div>\n          <div class=\"alert alert-danger\" *ngIf=\"errors.length > 0\">{{ errors }}</div>\n        <button class=\"btn\" [disabled]=\"!author.valid\" (click)=\"editAuthorService()\">Edit Author</button>\n      </div>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/edit-author/edit-author.component.ts":
/*!******************************************************!*\
  !*** ./src/app/edit-author/edit-author.component.ts ***!
  \******************************************************/
/*! exports provided: EditAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAuthorComponent", function() { return EditAuthorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditAuthorComponent = /** @class */ (function () {
    function EditAuthorComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.authorId = '';
        this.editAuthor = {
            name: ''
        };
        this.errors = '';
    }
    EditAuthorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log("The parent params: " + params);
            _this.getAuthorService(params['id']);
            _this.authorId = params['id'];
        });
    };
    EditAuthorComponent.prototype.getAuthorService = function (id) {
        var _this = this;
        this._httpService.getAuthor(id).subscribe(function (data) {
            if (data['message'] === 'success') {
                _this.editAuthor = data['data'];
            }
            else {
                console.log(data);
            }
        });
    };
    EditAuthorComponent.prototype.editAuthorService = function (id) {
        var _this = this;
        this._httpService.editAuthor(this.authorId, this.editAuthor).subscribe(function (data) {
            console.log(data);
            _this._router.navigate(['/authors']);
        });
    };
    EditAuthorComponent.prototype.testCall = function (value) {
        console.log(value);
    };
    EditAuthorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-author',
            template: __webpack_require__(/*! ./edit-author.component.html */ "./src/app/edit-author/edit-author.component.html"),
            styles: [__webpack_require__(/*! ./edit-author.component.css */ "./src/app/edit-author/edit-author.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EditAuthorComponent);
    return EditAuthorComponent;
}());



/***/ }),

/***/ "./src/app/edit-quote/edit-quote.component.css":
/*!*****************************************************!*\
  !*** ./src/app/edit-quote/edit-quote.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-quote/edit-quote.component.html":
/*!******************************************************!*\
  !*** ./src/app/edit-quote/edit-quote.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"border\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <h4>Edit quote</h4>\n        <label for=\"author\">Quote:</label>\n        <input \n          required\n          minlength=\"1\"\n          name=\"quote\" \n          ngModel\n          #quote=\"ngModel\"\n          [(ngModel)]=\"content\"\n          type=\"text\"\n          class=\"form-control\">\n          <div class=\"alert alert-danger\" *ngIf=\"quote.touched && !quote.valid\">\n            <div *ngIf=\"quote.errors.required\">Quote is required</div>\n            <div *ngIf=\"quote.errors.minlength\">Quote must be at least 2 characters long</div>\n          </div>\n          <div class=\"alert alert-danger\" *ngIf=\"errors.length > 0\">{{ errors }}</div>\n        <button class=\"btn\" [disabled]=\"!quote.valid\" (click)=\"editAuthorService()\">Edit Quote</button>\n      </div>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/edit-quote/edit-quote.component.ts":
/*!****************************************************!*\
  !*** ./src/app/edit-quote/edit-quote.component.ts ***!
  \****************************************************/
/*! exports provided: EditQuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditQuoteComponent", function() { return EditQuoteComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditQuoteComponent = /** @class */ (function () {
    function EditQuoteComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.content = '';
        this.errors = '';
    }
    EditQuoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.authorId = params['id'];
            _this.quoteIdx = params['idx'];
            _this.getAuthorService(params['id']);
        });
    };
    EditQuoteComponent.prototype.getAuthorService = function (id) {
        var _this = this;
        this._httpService.getAuthor(id).subscribe(function (data) {
            if (data['message'] === 'success') {
                _this.editAuthor = data['data'];
                _this.content = data['data']['quotes'][_this.quoteIdx].content;
            }
            else {
                console.log('derp: ', data['data']);
            }
        });
    };
    EditQuoteComponent.prototype.editAuthorService = function (id) {
        var _this = this;
        this.editAuthor.quotes[this.quoteIdx].content = this.content;
        this._httpService.editAuthor(this.authorId, this.editAuthor).subscribe(function (data) {
            console.log(data);
            if (data['message'] !== 'error') {
                _this._router.navigate(["/authors/quotes/" + _this.authorId]);
            }
            else {
                _this.errors = data['errors']['errors']["quotes." + _this.quoteIdx + ".content"]['properties']['message'];
                console.log(_this.errors);
            }
        });
    };
    EditQuoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-quote',
            template: __webpack_require__(/*! ./edit-quote.component.html */ "./src/app/edit-quote/edit-quote.component.html"),
            styles: [__webpack_require__(/*! ./edit-quote.component.css */ "./src/app/edit-quote/edit-quote.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], EditQuoteComponent);
    return EditQuoteComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getAllAuthor = function () {
        return this._http.get('/api/authors');
    };
    HttpService.prototype.uniqueCheck = function (name) {
        return this._http.get("/api/authors/" + name);
    };
    HttpService.prototype.getAuthor = function (id) {
        return this._http.get("/api/authors/" + id);
    };
    HttpService.prototype.createAuthor = function (newAuthor) {
        return this._http.post('/api/authors/', newAuthor);
    };
    HttpService.prototype.editAuthor = function (id, editedAuthor) {
        return this._http.put("/api/authors/" + id, editedAuthor);
    };
    HttpService.prototype.completeAuthor = function (id, completedAuthor) {
        return this._http.put("/api/authors/" + id, completedAuthor);
    };
    HttpService.prototype.deleteAuthor = function (id) {
        return this._http.delete("/api/authors/" + id);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/quotes/quotes.component.css":
/*!*********************************************!*\
  !*** ./src/app/quotes/quotes.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".all-quotes .row {\n\n    padding: 10px;\n}"

/***/ }),

/***/ "./src/app/quotes/quotes.component.html":
/*!**********************************************!*\
  !*** ./src/app/quotes/quotes.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!addQuote\">\n<button class=\"btn\" (click)=\"toggleAddQuote()\">{{ button }}</button>\n  <div class=\"card card-default\">\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-3\">\n          <h5>Quote</h5>\n        </div>\n        <div class=\"col-1\">\n          <h5>Votes</h5>\n        </div>\n        <div class=\"col-6\">\n          <h5>Actions Available</h5>\n        </div>\n      </div>\n      <div class=\"all-quotes\">\n        <div *ngIf=\"author\">\n          <div class=\"row\" *ngFor=\"let quote of author.quotes; let i = index\">\n            <div class=\"col-3\">\n              {{ quote.content }}\n            </div>\n            <div class=\"col-1\">\n              {{ quote.votes }}\n            </div>\n            <div class=\"col-2\">\n              <button class=\"btn btn-block\" (click)=\"voteUpService(i)\">Vote Up</button>\n            </div>\n            <div class=\"col-2\">\n              <button class=\"btn btn-block\" (click)=\"voteDownService(i)\">Vote Down</button>\n            </div>\n            <div class=\"col-2\">\n              <button class=\"btn btn-block\" [routerLink]=\"[i]\">Edit</button>\n            </div>   \n            <div class=\"col-2\">\n              <button class=\"btn btn-block\" (click)=\"deleteQuoteService(i)\">Delete</button>\n            </div>   \n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"addQuote\">\n<button class=\"btn\" (click)=\"toggleAddQuote()\">{{ button }}</button>\n  <form class=\"border\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <div class=\"form-group\">\n          <h4>Add Quote</h4>\n          <label for=\"quote\">Quote:</label>\n          <input \n            required\n            minlength=\"3\"\n            ngModel\n            name=\"quote\" \n            #quote=\"ngModel\"\n            [(ngModel)]=\"content\"\n            type=\"text\"\n            class=\"form-control\">\n            <div class=\"alert alert-danger\" *ngIf=\"quote.touched && !quote.valid\">\n              <div *ngIf=\"quote.errors.required\">Quote cannot be blank</div>\n              <div *ngIf=\"quote.errors.minlength\">Quote must be at least 3 characters long</div>\n              <div class=\"alert alert-danger\" *ngIf=\"errors.length > 0\">{{ errors }}</div>\n            </div>\n          <button class=\"btn\" [disabled]=\"!quote.valid\" (click)=\"addQuoteService(author._id)\">Add Quote</button>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/quotes/quotes.component.ts":
/*!********************************************!*\
  !*** ./src/app/quotes/quotes.component.ts ***!
  \********************************************/
/*! exports provided: QuotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesComponent", function() { return QuotesComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuotesComponent = /** @class */ (function () {
    function QuotesComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.addQuote = false;
        this.errors = '';
        this.button = 'Add a Quote';
        this.content = '';
    }
    QuotesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log("The parent params: " + params);
            _this.authorId = params['id'];
            _this.getAuthorService(_this.authorId);
        });
    };
    QuotesComponent.prototype.toggleAddQuote = function () {
        this.addQuote = !this.addQuote;
        this.addQuote ? this.button = 'Return to Quotes' : this.button = 'Add a Quote';
        this.getAuthorService(this.authorId);
    };
    QuotesComponent.prototype.getAuthorService = function (id) {
        var _this = this;
        this._httpService.getAuthor(id).subscribe(function (data) {
            console.log(data);
            _this.author = data['data'];
        });
    };
    QuotesComponent.prototype.addQuoteService = function (id) {
        var _this = this;
        console.log('clicked add quote');
        this._httpService.editAuthor(id, { $push: { quotes: { content: this.content } } }).subscribe(function (data) {
            console.log(data);
            if (data['message'] !== 'error') {
                _this._router.navigate(['/authors']);
            }
            else {
                _this.errors = data['errors']['errors']['name']['message'];
                console.log(data['errors']['errors']['name']['message']);
            }
            _this.toggleAddQuote();
        });
    };
    QuotesComponent.prototype.voteUpService = function (id) {
        this.author.quotes[id].votes++;
        this._httpService.editAuthor(this.authorId, this.author).subscribe(function (data) {
            console.log(data);
        });
    };
    QuotesComponent.prototype.voteDownService = function (id) {
        this.author.quotes[id].votes--;
        this._httpService.editAuthor(this.authorId, this.author).subscribe(function (data) {
            console.log(data);
        });
    };
    QuotesComponent.prototype.deleteQuoteService = function (id) {
        console.log('clicked delete quote');
        console.log(this.author.quotes[id]);
        this.author.quotes.splice(id, 1);
        this._httpService.editAuthor(this.authorId, this.author).subscribe(function (data) {
            console.log(data);
        });
    };
    QuotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-quotes',
            template: __webpack_require__(/*! ./quotes.component.html */ "./src/app/quotes/quotes.component.html"),
            styles: [__webpack_require__(/*! ./quotes.component.css */ "./src/app/quotes/quotes.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], QuotesComponent);
    return QuotesComponent;
}());



/***/ }),

/***/ "./src/app/show-author/show-author.component.css":
/*!*******************************************************!*\
  !*** ./src/app/show-author/show-author.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/show-author/show-author.component.html":
/*!********************************************************!*\
  !*** ./src/app/show-author/show-author.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-default\">\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <h5>Author Name</h5>\n      </div>\n      <div class=\"col-6\">\n        <h5>Actions Available</h5>\n      </div>\n    </div>\n    <div class=\"row\" *ngFor=\"let author of authors\">\n      <div class=\"col-6\">\n        {{ author.name }}\n      </div>\n      <div class=\"col-2\">\n        <button class=\"btn btn-block\" [routerLink]=\"['quotes', author._id]\">View Quotes</button>\n      </div>\n      <div class=\"col-2\">\n        <button class=\"btn btn-block\" [routerLink]=\"['edit', author._id]\">Edit</button>\n      </div>\n      <div class=\"col-2\">\n        <button class=\"btn btn-block\" (click)=\"deleteAuthorService(author._id)\">Delete</button>\n      </div>   \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/show-author/show-author.component.ts":
/*!******************************************************!*\
  !*** ./src/app/show-author/show-author.component.ts ***!
  \******************************************************/
/*! exports provided: ShowAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAuthorComponent", function() { return ShowAuthorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowAuthorComponent = /** @class */ (function () {
    function ShowAuthorComponent(_httpService) {
        this._httpService = _httpService;
        this.authors = [];
    }
    ShowAuthorComponent.prototype.ngOnInit = function () {
        this.getAllAuthorService();
    };
    ShowAuthorComponent.prototype.getAllAuthorService = function () {
        var _this = this;
        this._httpService.getAllAuthor().subscribe(function (data) {
            console.log(data);
            _this.authors = data['data'];
        });
    };
    ShowAuthorComponent.prototype.getAuthorService = function (id) {
        this._httpService.getAuthor(id).subscribe(function (data) {
            console.log(data);
        });
    };
    ShowAuthorComponent.prototype.deleteAuthorService = function (id) {
        var _this = this;
        this._httpService.deleteAuthor(id).subscribe(function (data) {
            console.log(data);
            _this.getAllAuthorService();
        });
    };
    ShowAuthorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-show-author',
            template: __webpack_require__(/*! ./show-author.component.html */ "./src/app/show-author/show-author.component.html"),
            styles: [__webpack_require__(/*! ./show-author.component.css */ "./src/app/show-author/show-author.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], ShowAuthorComponent);
    return ShowAuthorComponent;
}());



/***/ }),

/***/ "./src/app/submit-author/submit-author.component.css":
/*!***********************************************************!*\
  !*** ./src/app/submit-author/submit-author.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/submit-author/submit-author.component.html":
/*!************************************************************!*\
  !*** ./src/app/submit-author/submit-author.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"border\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <h4>Add author</h4>\n        <label for=\"author\">Author Name:</label>\n        <input \n          required\n          minlength=\"3\"\n          ngModel\n          name=\"author\" \n          #author=\"ngModel\"\n          [(ngModel)]=\"newAuthor.name\"\n          type=\"text\"\n          class=\"form-control\">\n          <div class=\"alert alert-danger\" *ngIf=\"(author.touched && !author.valid)\">\n            <div *ngIf=\"author.errors.required\">Author is required</div>\n            <div *ngIf=\"author.errors.minlength\">Author must be at least 3 characters long</div>\n          </div>\n          <div class=\"alert alert-danger\" *ngIf=\"errors.length > 0\">{{ errors }}</div>\n        <button class=\"btn\" [disabled]=\"!author.valid\" (click)=\"createAuthorService()\">Add Author</button>\n      </div>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/submit-author/submit-author.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/submit-author/submit-author.component.ts ***!
  \**********************************************************/
/*! exports provided: SubmitAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitAuthorComponent", function() { return SubmitAuthorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubmitAuthorComponent = /** @class */ (function () {
    function SubmitAuthorComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.newAuthor = {
            name: ''
        };
        this.errors = '';
    }
    SubmitAuthorComponent.prototype.createAuthorService = function () {
        var _this = this;
        this._httpService.createAuthor(this.newAuthor).subscribe(function (response) {
            if (response['message'] === 'error') {
                if (response['errors'].code === 11000) {
                    _this.errors = 'Author name must be unique';
                }
                else {
                    _this.errors = response['errors']['errors']['name']['message'];
                }
            }
            else {
                if (response['message'] !== 'error') {
                    _this._router.navigate(['/authors']);
                }
            }
        });
    };
    SubmitAuthorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-submit-author',
            template: __webpack_require__(/*! ./submit-author.component.html */ "./src/app/submit-author/submit-author.component.html"),
            styles: [__webpack_require__(/*! ./submit-author.component.css */ "./src/app/submit-author/submit-author.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SubmitAuthorComponent);
    return SubmitAuthorComponent;
}());



/***/ }),

/***/ "./src/app/teapot/teapot.component.css":
/*!*********************************************!*\
  !*** ./src/app/teapot/teapot.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/teapot/teapot.component.html":
/*!**********************************************!*\
  !*** ./src/app/teapot/teapot.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>ERROR 420: You're a towel...</h1>\n"

/***/ }),

/***/ "./src/app/teapot/teapot.component.ts":
/*!********************************************!*\
  !*** ./src/app/teapot/teapot.component.ts ***!
  \********************************************/
/*! exports provided: TeapotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeapotComponent", function() { return TeapotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeapotComponent = /** @class */ (function () {
    function TeapotComponent() {
    }
    TeapotComponent.prototype.ngOnInit = function () {
    };
    TeapotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teapot',
            template: __webpack_require__(/*! ./teapot.component.html */ "./src/app/teapot/teapot.component.html"),
            styles: [__webpack_require__(/*! ./teapot.component.css */ "./src/app/teapot/teapot.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeapotComponent);
    return TeapotComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Goethe/Documents/code/codingDojo/mean/angular/dojo/quote_ranks/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map