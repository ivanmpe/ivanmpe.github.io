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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_cart_list_itens_list_items_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cart/list-itens/list-items-cart.component */ "./src/app/components/cart/list-itens/list-items-cart.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_cart_payment_payment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/cart/payment/payment.component */ "./src/app/components/cart/payment/payment.component.ts");
/* harmony import */ var _components_cart_typecard_typecard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cart/typecard/typecard.component */ "./src/app/components/cart/typecard/typecard.component.ts");
/* harmony import */ var _components_cart_detail_money_detail_money_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/cart/detail-money/detail-money.component */ "./src/app/components/cart/detail-money/detail-money.component.ts");
/* harmony import */ var _components_client_search_client_search_client_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/client/search-client/search-client.component */ "./src/app/components/client/search-client/search-client.component.ts");
/* harmony import */ var _components_client_new_client_new_client_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/client/new-client/new-client.component */ "./src/app/components/client/new-client/new-client.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_client_list_items_list_items_client_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/client/list-items/list-items-client.component */ "./src/app/components/client/list-items/list-items-client.component.ts");
/* harmony import */ var _components_client_edit_item_edit_item_client_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/client/edit-item/edit-item-client.component */ "./src/app/components/client/edit-item/edit-item-client.component.ts");
/* harmony import */ var _components_product_list_items_list_items_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/product/list-items/list-items-product.component */ "./src/app/components/product/list-items/list-items-product.component.ts");
/* harmony import */ var _components_product_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/product/new-product/new-product.component */ "./src/app/components/product/new-product/new-product.component.ts");
/* harmony import */ var _components_product_edit_item_edit_item_product_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/product/edit-item/edit-item-product.component */ "./src/app/components/product/edit-item/edit-item-product.component.ts");
/* harmony import */ var _components_employee_new_employee_new_employee_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/employee/new-employee/new-employee.component */ "./src/app/components/employee/new-employee/new-employee.component.ts");
/* harmony import */ var _components_employee_list_employees_list_employees_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/employee/list-employees/list-employees.component */ "./src/app/components/employee/list-employees/list-employees.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_employee_edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/employee/edit-employee/edit-employee.component */ "./src/app/components/employee/edit-employee/edit-employee.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var routes = [
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'admin', component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"] },
    { path: 'clients', component: _components_client_list_items_list_items_client_component__WEBPACK_IMPORTED_MODULE_10__["ListItemsClientComponent"] },
    { path: 'search-client', component: _components_client_search_client_search_client_component__WEBPACK_IMPORTED_MODULE_7__["SearchClientComponent"] },
    { path: 'new-client/:vender', component: _components_client_new_client_new_client_component__WEBPACK_IMPORTED_MODULE_8__["NewClientComponent"] },
    { path: 'new-client', component: _components_client_new_client_new_client_component__WEBPACK_IMPORTED_MODULE_8__["NewClientComponent"] },
    { path: 'edit-client/:id', component: _components_client_edit_item_edit_item_client_component__WEBPACK_IMPORTED_MODULE_11__["EditItemClientComponent"] },
    { path: 'products', component: _components_product_list_items_list_items_product_component__WEBPACK_IMPORTED_MODULE_12__["ListItemsProductComponent"] },
    { path: 'new-product', component: _components_product_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_13__["NewProductComponent"] },
    { path: 'edit-product/:id', component: _components_product_edit_item_edit_item_product_component__WEBPACK_IMPORTED_MODULE_14__["EditItemProductComponent"] },
    { path: 'cart', component: _components_cart_list_itens_list_items_cart_component__WEBPACK_IMPORTED_MODULE_2__["ListItemsCartComponent"] },
    { path: 'payment', component: _components_cart_payment_payment_component__WEBPACK_IMPORTED_MODULE_4__["PaymentComponent"] },
    { path: 'typecard', component: _components_cart_typecard_typecard_component__WEBPACK_IMPORTED_MODULE_5__["TypecardComponent"] },
    { path: 'detail-money', component: _components_cart_detail_money_detail_money_component__WEBPACK_IMPORTED_MODULE_6__["DetailMoneyComponent"] },
    { path: 'employees', component: _components_employee_list_employees_list_employees_component__WEBPACK_IMPORTED_MODULE_16__["ListEmployeesComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"] },
    { path: 'new-employee', component: _components_employee_new_employee_new_employee_component__WEBPACK_IMPORTED_MODULE_15__["NewEmployeeComponent"] },
    { path: 'edit-employee/:id', component: _components_employee_edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_18__["EditEmployeeComponent"] },
    { path: 'settings', component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_20__["SettingsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = ".background-project{\r\n    background-color: #f8f8f8;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.action {\r\n    margin-top: 40px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.image {\r\n    width: 200px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.image-config {\r\n    margin-bottom: 40px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.action {\r\n    margin-top: 40px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.dashboard{\r\n    \r\n        position:absolute;\r\n        top:0;\r\n        left:0;\r\n        z-index:11;\r\n        width:100%;\r\n        height:100%;\r\n       \r\n}\r\n\r\n\r\n\r\n\r\n\r\n.image {\r\n    width: 200px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.image-config {\r\n    margin-bottom: 40px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*Main CSS*/\r\n\r\n\r\n\r\n\r\n\r\n/*Login Signup Page*/\r\n\r\n\r\n\r\n\r\n\r\na:focus,a:hover,a{\r\n    outline:none;\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n\r\n\r\n\r\nli,ul{\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.header-top i {\r\n    font-size: 18px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.bg-image {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: table;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.login-header {\r\n    display: inline-block;\r\n    width: 100%;\r\n    background: #0e1a35;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.login-signup {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    width: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.login-logo img {\r\n    cursor: pointer;\r\n    max-width: 171px;\r\n    padding: 23px 15px 22px;\r\n    width: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.login-header .navbar-right {\r\n    margin-right: 0px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.login-header .nav-tabs > li.active > a,\r\n.login-header .nav-tabs > li.active > a:focus,\r\n.login-header .nav-tabs > li.active > a:hover {\r\n    background-color: transparent;\r\n    border: none;\r\n    color: #fff;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.login-header .nav-tabs > li > a {\r\n    border: medium none;\r\n    border-radius: 0;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    line-height: 48px;\r\n    padding: 15px 30px;\r\n    color: #fff;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.login-header .nav-tabs {\r\n    border-bottom: none;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.login-header .nav-tabs > li {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.login-header .nav > li > a:focus,\r\n.login-header .nav > li > a:hover {\r\n    background: none;\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.login-header .nav-tabs > li.active {\r\n    border-bottom: 6px solid #5584ff;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.login-inner h1 {\r\n    color: #8492af;\r\n    font-size: 48px;\r\n    font-weight: 300;\r\n    text-align: center;\r\n    margin-top: 0;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.login-inner h1 span {\r\n    color: #5584ff;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.login-form {\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.login-form input {\r\n    -moz-border-bottom-colors: none;\r\n    -moz-border-left-colors: none;\r\n    -moz-border-right-colors: none;\r\n    -moz-border-top-colors: none;\r\n    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n    border-color: -moz-use-text-color -moz-use-text-color #d4d9e3;\r\n    -o-border-image: none;\r\n       border-image: none;\r\n    border-style: none none solid;\r\n    border-width: medium medium 1px;\r\n    font-size: 13px;\r\n    font-weight: 300;\r\n    width: 100%;\r\n    color: #8492af;\r\n    padding: 15px 50px;\r\n    font-size: 17px;\r\n    max-width: 550px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.login-form label {\r\n    margin-bottom: 30px;\r\n    width: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.login-signup .tab-content {\r\n    background: #ffffff none repeat scroll 0 0;\r\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.176);\r\n    display: inline-block;\r\n    margin-top: -8px;\r\n    width: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.form-btn {\r\n    background: #5584ff none repeat scroll 0 0;\r\n    border: medium none;\r\n    border-radius: 100px;\r\n    color: #ffffff;\r\n    font-weight: 400;\r\n    max-width: 250px;\r\n    padding: 10px 0;\r\n    position: relative;\r\n    width: 100%;\r\n    margin: 40px 0;\r\n    box-shadow: 0 2px 8px #d2d2d2;\r\n    -moz-box-shadow: 0 2px 8px #d2d2d2;\r\n    -webkit-box-shadow: 0 2px 8px #d2d2d2;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.form-btn::before {\r\n    content: \"\";\r\n    font-family: FontAwesome;\r\n    position: absolute;\r\n    right: 17px;\r\n    top: 9px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.form-details {\r\n    padding: 35px 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.tab-content .tab-pane {\r\n    padding: 70px 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*Login Signup Page*/\r\n\r\n\r\n\r\n\r\n\r\n/*Home Page*/\r\n\r\n\r\n\r\n\r\n\r\n.home {\r\n    background: #f6f7fa;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n#navigation {\r\n    background: #0e1a35;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n#navigation {\r\n    padding: 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.display-table {\r\n    display: table;\r\n    padding: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.display-table-row {\r\n    display: table-row;\r\n    height: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.display-table-cell {\r\n    display: table-cell;\r\n    float: none;\r\n    height: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.v-align {\r\n    vertical-align: top;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.logo img {\r\n    max-width: 180px;\r\n    padding: 16px 0 17px;\r\n    width: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.header-top {\r\n    margin: 0;\r\n    padding-top: 2px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.header-top img {\r\n    border-radius: 50%;\r\n    max-width: 48px !important;\r\n    width: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.add-project {\r\n    background: #5584ff none repeat scroll 0 0;\r\n    border-radius: 100px;\r\n    color: #ffffff;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    padding: 10px 27px 10px 45px;\r\n    position: relative;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.header-rightside .nav > li > a:focus,\r\n.header-rightside .nav > li > a:hover {\r\n    background: none;\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.add-project::before {\r\n    content: \"\";\r\n    ;\r\n    height: 12px;\r\n    left: 17px;\r\n    position: absolute;\r\n    top: 12px;\r\n    width: 12px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.add-project:hover {\r\n    color: #ffffff;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.header-top i {\r\n    color: #0e1a35;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.icon-info {\r\n    position: relative;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.navi i {\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.label.label-primary {\r\n    border-radius: 50%;\r\n    font-size: 9px;\r\n    left: 8px;\r\n    position: absolute;\r\n    top: -9px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.icon-info .label {\r\n    border: 2px solid #ffffff;\r\n    font-weight: 500;\r\n    padding: 3px 5px;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.header-top li {\r\n    display: inline-block;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.header-top .dropdown-toggle {\r\n    color: #0e1a35;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.header-top .dropdown-menu {\r\n    border: medium none;\r\n    left: -85px;\r\n    padding: 17px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.view {\r\n    background: #5584ff none repeat scroll 0 0;\r\n    border-radius: 100px;\r\n    color: #ffffff;\r\n    display: inline-block;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    margin-top: 10px;\r\n    padding: 10px 15px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.navbar-content > span {\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.img-responsive {\r\n    width: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n#navigation{\r\n    transition: all 0.5s ease;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.search input {\r\n    border: none;\r\n    font-size: 15px;\r\n    padding: 15px 9px;\r\n    width: 100%;\r\n    color: #8492af;\r\n}\r\n\r\n\r\n\r\n\r\n\r\nheader {\r\n    background: #ffffff none repeat scroll 0 0;\r\n    box-shadow: 0 1px 12px rgba(0, 0, 0, 0.04);\r\n    display: inline-block !important;\r\n    line-height: 23px;\r\n    padding: 15px;\r\n    transition: all 0.5s ease 0s;\r\n    width: 100%;\r\n    transition: all 0.5s ease;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.logo {\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.navi a {\r\n    border-bottom: 1px solid #0d172e;\r\n    border-top: 1px solid #0d172e;\r\n    color: #ffffff;\r\n    display: block;\r\n    font-size: 17px;\r\n    font-weight: 500;\r\n    padding: 28px 20px;\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.navi i {\r\n    margin-right: 15px;\r\n    color: #5584ff;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.navi .active a {\r\n    background: #122143;\r\n    border-left: 5px solid #5584ff;\r\n    padding-left: 15px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.navi a:hover {\r\n    background: #122143 none repeat scroll 0 0;\r\n    border-left: 5px solid #5584ff;\r\n    display: block;\r\n    padding-left: 15px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.navbar-default {\r\n    background-color: #ffffff;\r\n    border-color: #ffffff;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.navbar-toggle {\r\n    border: none;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.navbar-default .navbar-toggle:focus,\r\n.navbar-default .navbar-toggle:hover {\r\n    background-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.navbar-default .navbar-toggle .icon-bar {\r\n    background-color: #0e1a35;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.circle-logo {\r\n    margin: 0 auto;\r\n    max-width: 30px !important;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.hidden-xs{\r\n    transition: all 0.5s ease;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.user-dashboard {\r\n    padding: 0 20px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.user-dashboard h1 {\r\n    color: #0e1a35;\r\n    font-size: 30px;\r\n    font-weight: 500;\r\n    margin: 0;\r\n    padding: 21px 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.sales {\r\n    background: #ffffff none repeat scroll 0 0;\r\n    border: 1px solid #d4d9e3;\r\n    display: inline-block;\r\n    padding: 15px;\r\n    width: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.sales button {\r\n    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n    border: 1px solid #dadee7;\r\n    border-radius: 100px;\r\n    font-size: 15px;\r\n    letter-spacing: 0.5px;\r\n    padding-right: 32px;\r\n    color: #0e1a35;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.sales button::before {\r\n    content: \"\";\r\n    font-family: FontAwesome;\r\n    position: absolute;\r\n    right: 12px;\r\n    top: 11px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.sales  .btn-group {\r\n    float: right;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.sales h2 {\r\n    color: #8492af;\r\n    float: left;\r\n    font-size: 21px;\r\n    font-weight: 600;\r\n    margin: 0;\r\n    padding: 9px 0 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.sales .dropdown-menu{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    border: 0px;\r\n    border-radius: 8px;\r\n    width: 100%;\r\n    color: #0e1a35;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.sales .btn-group.open .dropdown-toggle, .btn.active, .btn:active{\r\n    box-shadow: none;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.sales .dropdown-menu > a {\r\n    color: #0e1a35;\r\n    display: inline-block;\r\n    font-weight: 800;\r\n    padding: 9px 0;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n#my-cool-chart svg {\r\n    width: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.sales .dropdown-menu > a:hover{\r\n    color: #5584FF;   \r\n}\r\n\r\n\r\n\r\n\r\n\r\n.shield-buttons {\r\n    display: none;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.close, .close:focus, .close:hover {\r\n    color: #fff;;\r\n    opacity: 1;\r\n    text-shadow: none;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.modal-body input {\r\n    border: 1px solid #d4d9e3;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    margin: 5px 0;\r\n    padding: 14px 10px;\r\n    width: 100%;\r\n    color: #8492af;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.modal-body textarea {\r\n    border: 1px solid #d4d9e3;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    height: 200px;\r\n    margin-top: 5px;\r\n    padding: 9px 10px;\r\n    width: 100%;\r\n    color: #8492af;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.modal-header.login-header h4 {\r\n    color: #ffffff;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.modal-footer .add-project {\r\n    background: #5584ff none repeat scroll 0 0;\r\n    border: medium none;\r\n    border-radius: 100px;\r\n    color: #ffffff;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    padding: 10px 30px;\r\n    position: relative;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.modal-footer .add-project::before{display: none;}\r\n\r\n\r\n\r\n\r\n\r\n.modal-footer {\r\n    border: 0 none;\r\n    padding: 10px 15px 26px;\r\n    text-align: right;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.cancel {\r\n    background: #0E1A35     ;\r\n    border: medium none;\r\n    border-radius: 100px;\r\n    color: #ffffff;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    padding: 10px 30px;\r\n    position: relative;\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n.modal{\r\n    top: 20%; \r\n}\r\n\r\n\r\n\r\n\r\n\r\n.modal-header .close {\r\n    margin-top: 2px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.search input:focus{\r\n    border-bottom: 1px solid #BDC4D4;\r\n    line-height:22px;\r\n    transition: 0.1s all;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.modal-header.login-header {\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*Main CSS*/\r\n\r\n\r\n\r\n\r\n\r\n@media only screen and (max-device-width: 767px) {\r\n    .login-logo img {\r\n        margin: 0 auto;\r\n    }\r\n    .login-details .nav-tabs > li {\r\n        text-align: center;\r\n        width: 50%;\r\n    }\r\n    .login-signup .login-inner h1 {\r\n        font-size: 26px;\r\n        margin-bottom: 0;\r\n        margin-top: 10px;\r\n    }\r\n    .login-inner .login-form input {\r\n        font-size: 15px;\r\n        max-width: 100%;\r\n        padding: 15px 45px;\r\n    }\r\n    .login-inner .form-details {\r\n        padding: 25px;\r\n    }\r\n    .login-inner .login-form label {\r\n        margin-bottom: 20px;\r\n        width: 100%;\r\n    }\r\n    .login-inner .form-btn {\r\n        margin: 0;\r\n        max-width: 180px;\r\n    }\r\n    .tab-content .tab-pane {\r\n        padding: 20px 0;\r\n    }\r\n    #navigation .navi a {\r\n        font-size: 14px;\r\n        padding: 20px;\r\n        text-align: center;\r\n    }\r\n    #navigation .navi i {\r\n        margin-right: 0px;\r\n    }\r\n    #navigation .navi a:hover,\r\n    #navigation .navi .active a {\r\n        background: #122143 none repeat scroll 0 0;\r\n        border-left: none;\r\n        display: block;\r\n        padding-left: 20px;\r\n    }\r\n    header .header-top img {\r\n        max-width: 38px !important;\r\n    }\r\n    .v-align header {\r\n        padding: 12px 15px;\r\n    }\r\n    header .header-top li {\r\n        padding-left: 13px;\r\n        padding-right: 6px;\r\n    }\r\n    .navbar-default .navbar-toggle {\r\n        border-color: rgba(0, 0, 0, 0);\r\n    }\r\n    .navbar-header .navbar-toggle {\r\n        float: left;\r\n        margin: 0;\r\n        padding: 0;\r\n        top: 12px;\r\n    }\r\n    button,\r\n        html [type=\"button\"],\r\n        [type=\"reset\"],\r\n        [type=\"submit\"] {\r\n            outline: medium none;\r\n    }\r\n    .user-dashboard .sales h2 {\r\n        color: #8492af;\r\n        float: left;\r\n        font-size: 14px;\r\n        font-weight: 600;\r\n        margin: 0;\r\n        padding: 13px 0 0;\r\n}\r\n    .user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\n        font-size: 11px;\r\n}\r\n    .user-dashboard .sales button {\r\n        font-size: 11px;\r\n        padding-right: 23px;\r\n}  \r\n    .user-dashboard .sales h2 {\r\n    font-size: 12px;\r\n}\r\n.gutter{\r\n    padding: 0;\r\n}\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media only screen and (max-device-width: 992px) {\r\n    header .header-top li {\r\n        padding-left: 20px !important;\r\n        padding-right: 0;\r\n}\r\n    header .logo img {\r\n        max-width: 125px !important;\r\n}\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media only screen and (min-device-width: 767px) and (max-device-width: 998px){\r\n      .user-dashboard .header-top {\r\n        padding-top: 5px;\r\n}\r\n    .user-dashboard .header-rightside {\r\n        display: inline-block;\r\n        float: left;\r\n        width: 100%;\r\n}\r\n    .user-dashboard .header-rightside .header-top img {\r\n        max-width: 41px !important;\r\n} \r\n    .user-dashboard .sales button {\r\n    font-size: 10px;\r\n}\r\n    .user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\n    font-size: 12px;\r\n}\r\n    .user-dashboard .sales h2 {\r\n    font-size: 15px;\r\n}\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media only screen and (min-device-width:998px) and (max-device-width: 1350px){\r\n        #navigation .logo img {\r\n    max-width: 130px;\r\n    padding: 16px 0 17px;\r\n    width: 100%;\r\n}\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   \r\n        <div class=\"container\">\r\n            <router-outlet></router-outlet>        \r\n        </div>\r\n \r\n  "

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_cart_item_item_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/cart/item/item-cart.component */ "./src/app/components/cart/item/item-cart.component.ts");
/* harmony import */ var _components_cart_list_itens_list_items_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/cart/list-itens/list-items-cart.component */ "./src/app/components/cart/list-itens/list-items-cart.component.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_cart_payment_payment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/cart/payment/payment.component */ "./src/app/components/cart/payment/payment.component.ts");
/* harmony import */ var _components_cart_typecard_typecard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/cart/typecard/typecard.component */ "./src/app/components/cart/typecard/typecard.component.ts");
/* harmony import */ var _components_cart_detail_money_detail_money_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/cart/detail-money/detail-money.component */ "./src/app/components/cart/detail-money/detail-money.component.ts");
/* harmony import */ var _services_communication_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/communication.service */ "./src/app/services/communication.service.ts");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _components_client_search_client_search_client_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/client/search-client/search-client.component */ "./src/app/components/client/search-client/search-client.component.ts");
/* harmony import */ var _components_client_new_client_new_client_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/client/new-client/new-client.component */ "./src/app/components/client/new-client/new-client.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_client_list_items_list_items_client_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/client/list-items/list-items-client.component */ "./src/app/components/client/list-items/list-items-client.component.ts");
/* harmony import */ var _components_client_item_item_client_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/client/item/item-client.component */ "./src/app/components/client/item/item-client.component.ts");
/* harmony import */ var _components_client_edit_item_edit_item_client_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/client/edit-item/edit-item-client.component */ "./src/app/components/client/edit-item/edit-item-client.component.ts");
/* harmony import */ var _components_product_list_items_list_items_product_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/product/list-items/list-items-product.component */ "./src/app/components/product/list-items/list-items-product.component.ts");
/* harmony import */ var _components_product_item_item_product_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/product/item/item-product.component */ "./src/app/components/product/item/item-product.component.ts");
/* harmony import */ var _components_product_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/product/new-product/new-product.component */ "./src/app/components/product/new-product/new-product.component.ts");
/* harmony import */ var _components_product_edit_item_edit_item_product_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/product/edit-item/edit-item-product.component */ "./src/app/components/product/edit-item/edit-item-product.component.ts");
/* harmony import */ var _components_back_back_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/back/back.component */ "./src/app/components/back/back.component.ts");
/* harmony import */ var _components_employee_new_employee_new_employee_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/employee/new-employee/new-employee.component */ "./src/app/components/employee/new-employee/new-employee.component.ts");
/* harmony import */ var _components_employee_list_employees_list_employees_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/employee/list-employees/list-employees.component */ "./src/app/components/employee/list-employees/list-employees.component.ts");
/* harmony import */ var _components_employee_item_employee_item_employee_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/employee/item-employee/item-employee.component */ "./src/app/components/employee/item-employee/item-employee.component.ts");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_cart_information_information_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/cart/information/information.component */ "./src/app/components/cart/information/information.component.ts");
/* harmony import */ var ng2_opd_popup__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng2-opd-popup */ "./node_modules/ng2-opd-popup/index.js");
/* harmony import */ var _multipopup_multipopup_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./multipopup/multipopup.component */ "./src/app/multipopup/multipopup.component.ts");
/* harmony import */ var _components_cart_confirm_cart_confirm_cart_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/cart/confirm-cart/confirm-cart.component */ "./src/app/components/cart/confirm-cart/confirm-cart.component.ts");
/* harmony import */ var _components_employee_edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/employee/edit-employee/edit-employee.component */ "./src/app/components/employee/edit-employee/edit-employee.component.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































//import {LoginService} from './services/login.service';




//import { SettingsComponent } from './components/settings/settings.component';
//import { SettingsService} from './services/settings.service';






var firebase = {
    apiKey: "AIzaSyB4uDSnzoJuqvq9Lfwazu2E-5L2HokyedA",
    authDomain: "pdv-apso.firebaseapp.com",
    databaseURL: "https://pdv-apso.firebaseio.com",
    projectId: "pdv-apso",
    storageBucket: "pdv-apso.appspot.com",
    messagingSenderId: "614708355754"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _components_cart_item_item_cart_component__WEBPACK_IMPORTED_MODULE_6__["ItemCartComponent"],
                _components_cart_list_itens_list_items_cart_component__WEBPACK_IMPORTED_MODULE_7__["ListItemsCartComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _components_cart_payment_payment_component__WEBPACK_IMPORTED_MODULE_13__["PaymentComponent"],
                _components_cart_typecard_typecard_component__WEBPACK_IMPORTED_MODULE_14__["TypecardComponent"],
                _components_cart_detail_money_detail_money_component__WEBPACK_IMPORTED_MODULE_15__["DetailMoneyComponent"],
                _components_client_search_client_search_client_component__WEBPACK_IMPORTED_MODULE_18__["SearchClientComponent"],
                _components_client_new_client_new_client_component__WEBPACK_IMPORTED_MODULE_19__["NewClientComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_20__["AdminComponent"],
                _components_client_list_items_list_items_client_component__WEBPACK_IMPORTED_MODULE_21__["ListItemsClientComponent"],
                _components_client_item_item_client_component__WEBPACK_IMPORTED_MODULE_22__["ItemClientComponent"],
                _components_client_edit_item_edit_item_client_component__WEBPACK_IMPORTED_MODULE_23__["EditItemClientComponent"],
                _components_product_list_items_list_items_product_component__WEBPACK_IMPORTED_MODULE_24__["ListItemsProductComponent"],
                _components_product_item_item_product_component__WEBPACK_IMPORTED_MODULE_25__["ItemProductComponent"],
                _components_product_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_26__["NewProductComponent"],
                _components_product_edit_item_edit_item_product_component__WEBPACK_IMPORTED_MODULE_27__["EditItemProductComponent"],
                _components_back_back_component__WEBPACK_IMPORTED_MODULE_28__["BackComponent"],
                _components_employee_new_employee_new_employee_component__WEBPACK_IMPORTED_MODULE_29__["NewEmployeeComponent"],
                _components_employee_list_employees_list_employees_component__WEBPACK_IMPORTED_MODULE_30__["ListEmployeesComponent"],
                _components_employee_item_employee_item_employee_component__WEBPACK_IMPORTED_MODULE_31__["ItemEmployeeComponent"],
                _components_cart_information_information_component__WEBPACK_IMPORTED_MODULE_34__["InformationComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_33__["LoginComponent"],
                _multipopup_multipopup_component__WEBPACK_IMPORTED_MODULE_36__["MultipopupComponent"],
                _components_cart_confirm_cart_confirm_cart_component__WEBPACK_IMPORTED_MODULE_37__["ConfirmCartComponent"],
                _components_employee_edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_38__["EditEmployeeComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_41__["RegisterComponent"],
                _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_43__["SettingsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_40__["AngularFireModule"].initializeApp(firebase),
                ng2_opd_popup__WEBPACK_IMPORTED_MODULE_35__["PopupModule"].forRoot()
            ],
            providers: [
                _services_search_service__WEBPACK_IMPORTED_MODULE_9__["SearchService"],
                _services_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"],
                _services_cart_service__WEBPACK_IMPORTED_MODULE_10__["CartService"],
                _services_communication_service__WEBPACK_IMPORTED_MODULE_16__["CommunicationService"],
                _services_client_service__WEBPACK_IMPORTED_MODULE_17__["ClientService"],
                _services_employee_service__WEBPACK_IMPORTED_MODULE_32__["EmployeeService"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_39__["AngularFireAuth"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_42__["AngularFireDatabase"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".action {\r\n    margin-top: 40px;\r\n}\r\n\r\n.image {\r\n    width: 200px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.image-clients{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.image-products {\r\n    margin-bottom: 20px;\r\n}"

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center action\">Area Administrativa</h1>\r\n\r\n<div class=\"row action\">\r\n    <div class=\"col-sm-8 col-md-4 text-center\">\r\n        <div class=\"img-circle\">\r\n            <img src=\"assets/imagens/clients.png\" class=\"image image-clients\">\r\n            <div class=\"caption\">\r\n                <button type=\"button\" class=\"btn btn-success btn-lg\" [routerLink]=\"['/clients']\">Clientes\r\n                    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-8 col-md-4 text-center\">\r\n        <div class=\"img-circle\">\r\n            <img src=\"assets/imagens/products.png\" class=\"image image-products\">\r\n            <div class=\"caption\">\r\n                <button type=\"button\" class=\"btn btn-warning btn-lg\" [routerLink]=\"['/products']\">Produtos\r\n                    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-8 col-md-4 text-center\">\r\n      <div class=\"img-circle\">\r\n        <img src=\"../../../assets/imagens/funcionario.png\" class=\"image image-products\">\r\n        <div class=\"caption\">\r\n          <button type=\"button\" class=\"btn btn-info btn-lg\" [routerLink]=\"['/employees']\">Funcionário\r\n            <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
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

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/back/back.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/back/back.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\r\n    margin-top: -20px;\r\n    margin-bottom: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/back/back.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/back/back.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-info back\" (click)=\"back()\">\r\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>Voltar\r\n</button>"

/***/ }),

/***/ "./src/app/components/back/back.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/back/back.component.ts ***!
  \***************************************************/
/*! exports provided: BackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackComponent", function() { return BackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackComponent = /** @class */ (function () {
    function BackComponent(location) {
        this.location = location;
    }
    BackComponent.prototype.ngOnInit = function () {
    };
    // volta pra a rota anterior
    BackComponent.prototype.back = function () {
        this.location.back();
    };
    BackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-back',
            template: __webpack_require__(/*! ./back.component.html */ "./src/app/components/back/back.component.html"),
            styles: [__webpack_require__(/*! ./back.component.css */ "./src/app/components/back/back.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], BackComponent);
    return BackComponent;
}());



/***/ }),

/***/ "./src/app/components/cart/confirm-cart/confirm-cart.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/cart/confirm-cart/confirm-cart.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/cart/confirm-cart/confirm-cart.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/cart/confirm-cart/confirm-cart.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<th>{{cartItem.product.id}}</th>\r\n<td>{{cartItem.product.name}}</td>\r\n<td>{{cartItem.product.description}}</td>\r\n<td>R$ {{cartItem.product.price}}</td>\r\n<td>{{cartItem.quantity}}</td>\r\n<td>R$ {{cartItem.total}}</td>\r\n"

/***/ }),

/***/ "./src/app/components/cart/confirm-cart/confirm-cart.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/cart/confirm-cart/confirm-cart.component.ts ***!
  \************************************************************************/
/*! exports provided: ConfirmCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmCartComponent", function() { return ConfirmCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_cart_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/cart-item */ "./src/app/models/cart-item.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/cart.service */ "./src/app/services/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfirmCartComponent = /** @class */ (function () {
    function ConfirmCartComponent(cartService) {
        this.cartService = cartService;
    }
    ConfirmCartComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_cart_item__WEBPACK_IMPORTED_MODULE_1__["CartItem"])
    ], ConfirmCartComponent.prototype, "cartItem", void 0);
    ConfirmCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[app-confirm-cart]',
            template: __webpack_require__(/*! ./confirm-cart.component.html */ "./src/app/components/cart/confirm-cart/confirm-cart.component.html"),
            styles: [__webpack_require__(/*! ./confirm-cart.component.css */ "./src/app/components/cart/confirm-cart/confirm-cart.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], ConfirmCartComponent);
    return ConfirmCartComponent;
}());



/***/ }),

/***/ "./src/app/components/cart/detail-money/detail-money.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/cart/detail-money/detail-money.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".action {\r\n    margin-top: 40px;\r\n}\r\n\r\n.image-money {\r\n    width: 50px;\r\n}\r\n\r\n.dashboard{\r\n    \r\n    position:absolute;\r\n    top:0;\r\n    left:0;\r\n    z-index:11;\r\n    width:100%;\r\n    height:100%;\r\n   \r\n}\r\n\r\n.image {\r\nwidth: 200px;\r\nmargin-bottom: 10px;\r\n}\r\n\r\n.image-config {\r\nmargin-bottom: 40px;\r\n}\r\n\r\n/*Main CSS*/\r\n\r\n/*Login Signup Page*/\r\n\r\na:focus,a:hover,a{\r\noutline:none;\r\ntext-decoration: none;\r\n}\r\n\r\nli,ul{\r\nlist-style: none;\r\npadding: 0;\r\nmargin: 0;\r\n}\r\n\r\n.header-top i {\r\nfont-size: 18px;\r\n}\r\n\r\n.bg-image {\r\nposition: relative;\r\nwidth: 100%;\r\nheight: 100vh;\r\ndisplay: table;\r\n}\r\n\r\n.login-header {\r\ndisplay: inline-block;\r\nwidth: 100%;\r\nbackground: #0e1a35;\r\n}\r\n\r\n.login-signup {\r\ndisplay: table-cell;\r\nvertical-align: middle;\r\nwidth: 100%;\r\n}\r\n\r\n.login-logo img {\r\ncursor: pointer;\r\nmax-width: 171px;\r\npadding: 23px 15px 22px;\r\nwidth: 100%;\r\n}\r\n\r\n.login-header .navbar-right {\r\nmargin-right: 0px;\r\n}\r\n\r\n.login-header .nav-tabs > li.active > a,\r\n.login-header .nav-tabs > li.active > a:focus,\r\n.login-header .nav-tabs > li.active > a:hover {\r\nbackground-color: transparent;\r\nborder: none;\r\ncolor: #fff;\r\n}\r\n\r\n.login-header .nav-tabs > li > a {\r\nborder: medium none;\r\nborder-radius: 0;\r\nfont-size: 14px;\r\nfont-weight: 500;\r\nline-height: 48px;\r\npadding: 15px 30px;\r\ncolor: #fff;\r\n}\r\n\r\n.login-header .nav-tabs {\r\nborder-bottom: none;\r\n}\r\n\r\n.login-header .nav-tabs > li {\r\nmargin-bottom: 0px;\r\n}\r\n\r\n.login-header .nav > li > a:focus,\r\n.login-header .nav > li > a:hover {\r\nbackground: none;\r\ntext-decoration: none;\r\n}\r\n\r\n.login-header .nav-tabs > li.active {\r\nborder-bottom: 6px solid #5584ff;\r\n}\r\n\r\n.login-inner h1 {\r\ncolor: #8492af;\r\nfont-size: 48px;\r\nfont-weight: 300;\r\ntext-align: center;\r\nmargin-top: 0;\r\nmargin-bottom: 20px;\r\n}\r\n\r\n.login-inner h1 span {\r\ncolor: #5584ff;\r\n}\r\n\r\n.login-form {\r\ntext-align: center;\r\n}\r\n\r\n.login-form input {\r\n-moz-border-bottom-colors: none;\r\n-moz-border-left-colors: none;\r\n-moz-border-right-colors: none;\r\n-moz-border-top-colors: none;\r\nbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\nborder-color: -moz-use-text-color -moz-use-text-color #d4d9e3;\r\n-o-border-image: none;\r\n   border-image: none;\r\nborder-style: none none solid;\r\nborder-width: medium medium 1px;\r\nfont-size: 13px;\r\nfont-weight: 300;\r\nwidth: 100%;\r\ncolor: #8492af;\r\npadding: 15px 50px;\r\nfont-size: 17px;\r\nmax-width: 550px;\r\n}\r\n\r\n.login-form label {\r\nmargin-bottom: 30px;\r\nwidth: 100%;\r\n}\r\n\r\n.login-signup .tab-content {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nbox-shadow: 0 6px 12px rgba(0, 0, 0, 0.176);\r\ndisplay: inline-block;\r\nmargin-top: -8px;\r\nwidth: 100%;\r\n}\r\n\r\n.form-btn {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-weight: 400;\r\nmax-width: 250px;\r\npadding: 10px 0;\r\nposition: relative;\r\nwidth: 100%;\r\nmargin: 40px 0;\r\nbox-shadow: 0 2px 8px #d2d2d2;\r\n-moz-box-shadow: 0 2px 8px #d2d2d2;\r\n-webkit-box-shadow: 0 2px 8px #d2d2d2;\r\n}\r\n\r\n.form-btn::before {\r\ncontent: \"\";\r\nfont-family: FontAwesome;\r\nposition: absolute;\r\nright: 17px;\r\ntop: 9px;\r\n}\r\n\r\n.form-details {\r\npadding: 35px 0;\r\n}\r\n\r\n.tab-content .tab-pane {\r\npadding: 70px 0;\r\n}\r\n\r\n/*Login Signup Page*/\r\n\r\n/*Home Page*/\r\n\r\n.home {\r\nbackground: #f6f7fa;\r\n}\r\n\r\n#navigation {\r\nbackground: #0e1a35;\r\n}\r\n\r\n#navigation {\r\npadding: 0;\r\n}\r\n\r\n.display-table {\r\ndisplay: table;\r\npadding: 0;\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n\r\n.display-table-row {\r\ndisplay: table-row;\r\nheight: 100%;\r\n}\r\n\r\n.display-table-cell {\r\ndisplay: table-cell;\r\nfloat: none;\r\nheight: 100%;\r\n}\r\n\r\n.v-align {\r\nvertical-align: top;\r\n}\r\n\r\n.logo img {\r\nmax-width: 180px;\r\npadding: 16px 0 17px;\r\nwidth: 100%;\r\n}\r\n\r\n.header-top {\r\nmargin: 0;\r\npadding-top: 2px;\r\n}\r\n\r\n.header-top img {\r\nborder-radius: 50%;\r\nmax-width: 48px !important;\r\nwidth: 100%;\r\n}\r\n\r\n.add-project {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 27px 10px 45px;\r\nposition: relative;\r\n}\r\n\r\n.header-rightside .nav > li > a:focus,\r\n.header-rightside .nav > li > a:hover {\r\nbackground: none;\r\ntext-decoration: none;\r\n}\r\n\r\n.add-project::before {\r\ncontent: \"\";\r\n;\r\nheight: 12px;\r\nleft: 17px;\r\nposition: absolute;\r\ntop: 12px;\r\nwidth: 12px;\r\n}\r\n\r\n.add-project:hover {\r\ncolor: #ffffff;\r\n}\r\n\r\n.header-top i {\r\ncolor: #0e1a35;\r\n}\r\n\r\n.icon-info {\r\nposition: relative;\r\n}\r\n\r\n.navi i {\r\nfont-size: 20px;\r\n}\r\n\r\n.label.label-primary {\r\nborder-radius: 50%;\r\nfont-size: 9px;\r\nleft: 8px;\r\nposition: absolute;\r\ntop: -9px;\r\n}\r\n\r\n.icon-info .label {\r\nborder: 2px solid #ffffff;\r\nfont-weight: 500;\r\npadding: 3px 5px;\r\ntext-align: center;\r\n}\r\n\r\n.header-top li {\r\ndisplay: inline-block;\r\ntext-align: center;\r\n}\r\n\r\n.header-top .dropdown-toggle {\r\ncolor: #0e1a35;\r\n}\r\n\r\n.header-top .dropdown-menu {\r\nborder: medium none;\r\nleft: -85px;\r\npadding: 17px;\r\n}\r\n\r\n.view {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\ndisplay: inline-block;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\nmargin-top: 10px;\r\npadding: 10px 15px;\r\n}\r\n\r\n.navbar-content > span {\r\nfont-size: 13px;\r\nfont-weight: 700;\r\n}\r\n\r\n.img-responsive {\r\nwidth: 100%;\r\n}\r\n\r\n#navigation{\r\ntransition: all 0.5s ease;\r\n}\r\n\r\n.search input {\r\nborder: none;\r\nfont-size: 15px;\r\npadding: 15px 9px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\n\r\nheader {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nbox-shadow: 0 1px 12px rgba(0, 0, 0, 0.04);\r\ndisplay: inline-block !important;\r\nline-height: 23px;\r\npadding: 15px;\r\ntransition: all 0.5s ease 0s;\r\nwidth: 100%;\r\ntransition: all 0.5s ease;\r\n}\r\n\r\n.logo {\r\ntext-align: center;\r\n}\r\n\r\n.navi a {\r\nborder-bottom: 1px solid #0d172e;\r\nborder-top: 1px solid #0d172e;\r\ncolor: #ffffff;\r\ndisplay: block;\r\nfont-size: 17px;\r\nfont-weight: 500;\r\npadding: 28px 20px;\r\ntext-decoration: none;\r\n}\r\n\r\n.navi i {\r\nmargin-right: 15px;\r\ncolor: #5584ff;\r\n}\r\n\r\n.navi .active a {\r\nbackground: #122143;\r\nborder-left: 5px solid #5584ff;\r\npadding-left: 15px;\r\n}\r\n\r\n.navi a:hover {\r\nbackground: #122143 none repeat scroll 0 0;\r\nborder-left: 5px solid #5584ff;\r\ndisplay: block;\r\npadding-left: 15px;\r\n}\r\n\r\n.navbar-default {\r\nbackground-color: #ffffff;\r\nborder-color: #ffffff;\r\n}\r\n\r\n.navbar-toggle {\r\nborder: none;\r\n}\r\n\r\n.navbar-default .navbar-toggle:focus,\r\n.navbar-default .navbar-toggle:hover {\r\nbackground-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n.navbar-default .navbar-toggle .icon-bar {\r\nbackground-color: #0e1a35;\r\n}\r\n\r\n.circle-logo {\r\nmargin: 0 auto;\r\nmax-width: 30px !important;\r\ntext-align: center;\r\n}\r\n\r\n.hidden-xs{\r\ntransition: all 0.5s ease;\r\n}\r\n\r\n.user-dashboard {\r\npadding: 0 20px;\r\n}\r\n\r\n.user-dashboard h1 {\r\ncolor: #0e1a35;\r\nfont-size: 30px;\r\nfont-weight: 500;\r\nmargin: 0;\r\npadding: 21px 0;\r\n}\r\n\r\n.sales {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nborder: 1px solid #d4d9e3;\r\ndisplay: inline-block;\r\npadding: 15px;\r\nwidth: 100%;\r\n}\r\n\r\n.sales button {\r\nbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\nborder: 1px solid #dadee7;\r\nborder-radius: 100px;\r\nfont-size: 15px;\r\nletter-spacing: 0.5px;\r\npadding-right: 32px;\r\ncolor: #0e1a35;\r\n}\r\n\r\n.sales button::before {\r\ncontent: \"\";\r\nfont-family: FontAwesome;\r\nposition: absolute;\r\nright: 12px;\r\ntop: 11px;\r\n}\r\n\r\n.sales  .btn-group {\r\nfloat: right;\r\n}\r\n\r\n.sales h2 {\r\ncolor: #8492af;\r\nfloat: left;\r\nfont-size: 21px;\r\nfont-weight: 600;\r\nmargin: 0;\r\npadding: 9px 0 0;\r\n}\r\n\r\n.btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\nfont-size: 15px;\r\nfont-weight: 600;\r\nletter-spacing: 0.5px;\r\n}\r\n\r\n.sales .dropdown-menu{\r\nmargin: 0px;\r\npadding: 0px;\r\nborder: 0px;\r\nborder-radius: 8px;\r\nwidth: 100%;\r\ncolor: #0e1a35;\r\n}\r\n\r\n.sales .btn-group.open .dropdown-toggle, .btn.active, .btn:active{\r\nbox-shadow: none;\r\n}\r\n\r\n.sales .dropdown-menu > a {\r\ncolor: #0e1a35;\r\ndisplay: inline-block;\r\nfont-weight: 800;\r\npadding: 9px 0;\r\ntext-align: center;\r\nwidth: 100%;\r\n}\r\n\r\n#my-cool-chart svg {\r\nwidth: 100%;\r\n}\r\n\r\n.sales .dropdown-menu > a:hover{\r\ncolor: #5584FF;   \r\n}\r\n\r\n.shield-buttons {\r\ndisplay: none;\r\n}\r\n\r\n.close, .close:focus, .close:hover {\r\ncolor: #fff;;\r\nopacity: 1;\r\ntext-shadow: none;\r\n}\r\n\r\n.modal-body input {\r\nborder: 1px solid #d4d9e3;\r\nfont-size: 14px;\r\nfont-weight: 300;\r\nmargin: 5px 0;\r\npadding: 14px 10px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\n\r\n.modal-body textarea {\r\nborder: 1px solid #d4d9e3;\r\nfont-size: 14px;\r\nfont-weight: 300;\r\nheight: 200px;\r\nmargin-top: 5px;\r\npadding: 9px 10px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\n\r\n.modal-header.login-header h4 {\r\ncolor: #ffffff;\r\n}\r\n\r\n.modal-footer .add-project {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 30px;\r\nposition: relative;\r\n}\r\n\r\n.modal-footer .add-project::before{display: none;}\r\n\r\n.modal-footer {\r\nborder: 0 none;\r\npadding: 10px 15px 26px;\r\ntext-align: right;\r\n}\r\n\r\n.cancel {\r\nbackground: #0E1A35     ;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 30px;\r\nposition: relative;\r\n\r\n}\r\n\r\n.modal{\r\ntop: 20%; \r\n}\r\n\r\n.modal-header .close {\r\nmargin-top: 2px;\r\n}\r\n\r\n.search input:focus{\r\nborder-bottom: 1px solid #BDC4D4;\r\nline-height:22px;\r\ntransition: 0.1s all;\r\n}\r\n\r\n.modal-header.login-header {\r\nborder-top-left-radius: 5px;\r\nborder-top-right-radius: 5px;\r\n}\r\n\r\n/*Main CSS*/\r\n\r\n@media only screen and (max-device-width: 767px) {\r\n.login-logo img {\r\n    margin: 0 auto;\r\n}\r\n.login-details .nav-tabs > li {\r\n    text-align: center;\r\n    width: 50%;\r\n}\r\n.login-signup .login-inner h1 {\r\n    font-size: 26px;\r\n    margin-bottom: 0;\r\n    margin-top: 10px;\r\n}\r\n.login-inner .login-form input {\r\n    font-size: 15px;\r\n    max-width: 100%;\r\n    padding: 15px 45px;\r\n}\r\n.login-inner .form-details {\r\n    padding: 25px;\r\n}\r\n.login-inner .login-form label {\r\n    margin-bottom: 20px;\r\n    width: 100%;\r\n}\r\n.login-inner .form-btn {\r\n    margin: 0;\r\n    max-width: 180px;\r\n}\r\n.tab-content .tab-pane {\r\n    padding: 20px 0;\r\n}\r\n#navigation .navi a {\r\n    font-size: 14px;\r\n    padding: 20px;\r\n    text-align: center;\r\n}\r\n#navigation .navi i {\r\n    margin-right: 0px;\r\n}\r\n#navigation .navi a:hover,\r\n#navigation .navi .active a {\r\n    background: #122143 none repeat scroll 0 0;\r\n    border-left: none;\r\n    display: block;\r\n    padding-left: 20px;\r\n}\r\nheader .header-top img {\r\n    max-width: 38px !important;\r\n}\r\n.v-align header {\r\n    padding: 12px 15px;\r\n}\r\nheader .header-top li {\r\n    padding-left: 13px;\r\n    padding-right: 6px;\r\n}\r\n.navbar-default .navbar-toggle {\r\n    border-color: rgba(0, 0, 0, 0);\r\n}\r\n.navbar-header .navbar-toggle {\r\n    float: left;\r\n    margin: 0;\r\n    padding: 0;\r\n    top: 12px;\r\n}\r\nbutton,\r\n    html [type=\"button\"],\r\n    [type=\"reset\"],\r\n    [type=\"submit\"] {\r\n        outline: medium none;\r\n}\r\n.user-dashboard .sales h2 {\r\n    color: #8492af;\r\n    float: left;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    margin: 0;\r\n    padding: 13px 0 0;\r\n}\r\n.user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\n    font-size: 11px;\r\n}\r\n.user-dashboard .sales button {\r\n    font-size: 11px;\r\n    padding-right: 23px;\r\n}  \r\n.user-dashboard .sales h2 {\r\nfont-size: 12px;\r\n}\r\n.gutter{\r\npadding: 0;\r\n}\r\n}\r\n\r\n@media only screen and (max-device-width: 992px) {\r\nheader .header-top li {\r\n    padding-left: 20px !important;\r\n    padding-right: 0;\r\n}\r\nheader .logo img {\r\n    max-width: 125px !important;\r\n}\r\n\r\n}\r\n\r\n@media only screen and (min-device-width: 767px) and (max-device-width: 998px){\r\n  .user-dashboard .header-top {\r\n    padding-top: 5px;\r\n}\r\n.user-dashboard .header-rightside {\r\n    display: inline-block;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.user-dashboard .header-rightside .header-top img {\r\n    max-width: 41px !important;\r\n} \r\n.user-dashboard .sales button {\r\nfont-size: 10px;\r\n}\r\n.user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\nfont-size: 12px;\r\n}\r\n.user-dashboard .sales h2 {\r\nfont-size: 15px;\r\n}\r\n}\r\n\r\n@media only screen and (min-device-width:998px) and (max-device-width: 1350px){\r\n    #navigation .logo img {\r\nmax-width: 130px;\r\npadding: 16px 0 17px;\r\nwidth: 100%;\r\n}\r\n}   "

/***/ }),

/***/ "./src/app/components/cart/detail-money/detail-money.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/cart/detail-money/detail-money.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\r\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\r\n<meta name=\"viewport\" content=\"width=device-width, user-scalable=no\"> \r\n\r\n\r\n<div  class=\"dashboard\">\r\n<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css\" rel=\"stylesheet\" integrity=\"sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1\" crossorigin=\"anonymous\">\r\n    <div class=\"container-fluid display-table\">\r\n        <div class=\"row display-table-row\">\r\n            <div class=\"col-md-2 col-sm-1 hidden-xs display-table-cell v-align box\" id=\"navigation\">\r\n                <div class=\"logo\">\r\n                    <a hef=\"home.html\"><img src=\"http://automablu.com.br/wp-content/uploads/2018/03/LOGOCOLORIDA.png\" alt=\"merkery_logo\" class=\"hidden-xs hidden-sm\">\r\n                        <img src=\"http://jskrishna.com/work/merkury/images/circle-logo.png\" alt=\"merkery_logo\" class=\"visible-xs visible-sm circle-logo\">\r\n                    </a>\r\n                </div>\r\n                <div class=\"navi\">\r\n                    <ul>\r\n                            <li><a routerLink=\"/home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Home</span></a></li>\r\n                            <li><a routerLink=\"/search-client\"> <i class=\"fa fa-tasks\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\"> Iniciar Venda </span></a></li>\r\n                            <li><a routerLink=\"/clients\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Clientes </span></a></li>\r\n                            <li><a routerLink=\"/products\"><i class=\"fa fa-list-ol\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Produtos </span></a></li>\r\n                            <li><a routerLink=\"/employees\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Funcionários </span></a></li>\r\n                            <li><a routerLink=\"/home\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Estatísticas</span></a></li>\r\n                            <li><a routerLink=\"/settings\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\" > Configurações</span></a></li>\r\n                        </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-10 col-sm-11 display-table-cell v-align\">\r\n                <div class=\"row\">\r\n                    <header>\r\n                        <div class=\"col-md-7\">\r\n                            <nav class=\"navbar-default pull-left\">\r\n                                <div class=\"navbar-header\">\r\n                                    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"offcanvas\" data-target=\"#side-menu\" aria-expanded=\"false\">\r\n                                        <span class=\"sr-only\">Toggle navigation</span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                    </button>\r\n                                </div>\r\n                            </nav>\r\n                            <div class=\"search hidden-xs hidden-sm\">\r\n                                <input type=\"text\" placeholder=\"Busca\" id=\"search\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"header-rightside\">\r\n                                <ul class=\"list-inline header-top pull-right\">\r\n                                    <li><a href=\"#\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a></li>\r\n                                    <li>\r\n                                        <a href=\"#\" class=\"icon-info\">\r\n                                            <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\r\n                                            <span class=\"label label-primary\">3</span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li class=\"dropdown\">\r\n                                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">User\r\n                                              <b class=\"caret\"></b></a>\r\n                                        <ul class=\"dropdown-menu\">\r\n                                            <li>\r\n                                                <div class=\"navbar-content\">\r\n                                                    <span>Ivan </span>\r\n                                                    <p class=\"text-muted small\">\r\n                                                        ivanalves94@gmail.com\r\n                                                    </p>\r\n                                                    <div class=\"divider\">\r\n                                                    </div>\r\n                                                    <a href=\"#\" class=\"view btn-sm active\">View Profile</a>\r\n                                                </div>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </header>\r\n                </div>\r\n\r\n                <div class=\"user-dashboard\">\r\n                    \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                        <popup #popupFinalizado (confirmClick)=\"Voltar()\" (cancelClick)=\"Cancel()\">\r\n                                Compra finalizada com sucesso! Imprimindo nota fiscal . . .\r\n                              </popup>\r\n                              \r\n                              <h1 class=\"text-center action\">Detalhes da Compra <img src=\"assets/imagens/money.png\" class=\"image-money\"></h1>\r\n                              \r\n                              <h1>Total : R$ {{cart.total}}</h1>\r\n                              <h1>Valor Pago: R$ {{cart.total + 10}} </h1>\r\n                              <h1>Troco : R$ {{10}}</h1>\r\n                              <div class=\"row\">\r\n                                  <div class=\"col-sm-8 col-md-12 text-center\">\r\n                                      <div class=\"img-circle\">\r\n                                          <div class=\"caption\">\r\n                                              <button type=\"button\" class=\"btn btn-success btn-lg\" (click)=\"finalizarCompra()\">Finalizar Compra\r\n                                                  <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n                                              </button>\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                              \r\n                              \r\n                              \r\n\r\n\r\n\r\n\r\n\r\n                 </div>\r\n            </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div id=\"add_project\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n\r\n            <div class=\"modal-content\">\r\n                \r\n                <div class=\"modal-body\">\r\n                       \r\n                            <input type=\"text\" placeholder=\"Project Title\" name=\"name\">\r\n                            <input type=\"text\" placeholder=\"Post of Post\" name=\"mail\">\r\n                            <input type=\"text\" placeholder=\"Author\" name=\"passsword\">\r\n                            <textarea placeholder=\"Desicrption\"></textarea>\r\n                    </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"cancel\" data-dismiss=\"modal\">Close</button>\r\n                    <button type=\"button\" class=\"add-project\" data-dismiss=\"modal\">Save</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/cart/detail-money/detail-money.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/cart/detail-money/detail-money.component.ts ***!
  \************************************************************************/
/*! exports provided: DetailMoneyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailMoneyComponent", function() { return DetailMoneyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var ng2_opd_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-opd-popup */ "./node_modules/ng2-opd-popup/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {CommunicationService} from '../../../services/communication.service';


var DetailMoneyComponent = /** @class */ (function () {
    function DetailMoneyComponent(cartService, router) {
        this.cartService = cartService;
        this.router = router;
    }
    // carrega o carrinho de compras ao iniciar o componente
    DetailMoneyComponent.prototype.ngOnInit = function () {
        this.cart = this.cartService.getCart();
    };
    DetailMoneyComponent.prototype.finalizarCompra = function () {
        // this.communicationService.gerarDadosCompra(this.cart);
        // this.communicationService.finalizarCompra(this.cart);
        this.popupFinalizado.options = {
            confirmBtnContent: 'Ok',
            cancleBtnContent: 'Cancelar',
            cancleBtnClass: 'btn btn-default',
            confirmBtnClass: 'btn btn-default',
            color: '#5cb85c',
            header: 'Sucesso!',
            widthProsentage: 60,
            animation: 'fadeInUp'
        };
        this.popupFinalizado.show(this.popupFinalizado.options);
    };
    DetailMoneyComponent.prototype.Cancel = function () {
        /*this.popupEfetuarCompra.hide();*/
    };
    DetailMoneyComponent.prototype.Voltar = function () {
        this.cartService.cleanCart();
        //this.router.navigate(['cart']);
        this.router.navigate(['search-client']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('popupFinalizado'),
        __metadata("design:type", ng2_opd_popup__WEBPACK_IMPORTED_MODULE_2__["Popup"])
    ], DetailMoneyComponent.prototype, "popupFinalizado", void 0);
    DetailMoneyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail-money',
            template: __webpack_require__(/*! ./detail-money.component.html */ "./src/app/components/cart/detail-money/detail-money.component.html"),
            styles: [__webpack_require__(/*! ./detail-money.component.css */ "./src/app/components/cart/detail-money/detail-money.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DetailMoneyComponent);
    return DetailMoneyComponent;
}());



/***/ }),

/***/ "./src/app/components/cart/information/information.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/cart/information/information.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/cart/information/information.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/cart/information/information.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-info\">\r\n  <div class=\"panel-heading text-center\">Informações</div>\r\n  <div class=\"panel-primary\">\r\n    <div class=\"panel-heading text-center col-md-4\">Funcionário</div>\r\n    <div class=\"panel-heading text-center col-md-4\">Cliente</div>\r\n    <div class=\"panel-heading text-center col-md-pull-4\">Data</div>\r\n  </div>\r\n  <div class=\"panel-collapse\">\r\n    <div class=\"panel-heading text-center col-md-4\">{{ employee.name }}</div>\r\n    <div class=\"panel-heading text-center col-md-4\">{{ client }}</div>\r\n    <div class=\"panel-heading text-center col-md-pull-4\">{{ data| date:'dd/MM/yyyy HH:mm:ss'}}</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/cart/information/information.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/cart/information/information.component.ts ***!
  \**********************************************************************/
/*! exports provided: InformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationComponent", function() { return InformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/search.service */ "./src/app/services/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InformationComponent = /** @class */ (function () {
    function InformationComponent(employees, clients, searchService) {
        this.employees = employees;
        this.clients = clients;
        this.searchService = searchService;
    }
    InformationComponent.prototype.ngOnInit = function () {
        this.employee = this.employees.getEmployeeById(1);
        var clientSearch = this.clients.getClientByCpf(this.searchService.getCPF());
        if (clientSearch) {
            this.client = this.clients.getClientByCpf(this.searchService.getCPF()).name;
        }
        else {
            this.client = this.searchService.getCPF();
        }
        this.data = new Date();
    };
    InformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-information',
            template: __webpack_require__(/*! ./information.component.html */ "./src/app/components/cart/information/information.component.html"),
            styles: [__webpack_require__(/*! ./information.component.css */ "./src/app/components/cart/information/information.component.css")]
        }),
        __metadata("design:paramtypes", [_services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"], _services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"], _services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]])
    ], InformationComponent);
    return InformationComponent;
}());



/***/ }),

/***/ "./src/app/components/cart/item/item-cart.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/cart/item/item-cart.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/cart/item/item-cart.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/cart/item/item-cart.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<th>{{cartItem.product.id}}</th>\r\n<td>{{cartItem.product.name}}</td>\r\n<td>{{cartItem.product.description}}</td>\r\n<td>\r\n  R$ {{cartItem.product.price}}\r\n</td>\r\n<td>\r\n  <a><span class=\"glyphicon glyphicon-plus\" (click)=\"addProduct()\"></span></a>\r\n  {{cartItem.quantity}}\r\n  <a><span class=\"glyphicon glyphicon-minus\" (click)=\"removeProduct()\"></span></a>\r\n</td>\r\n<td>\r\n  R$ {{cartItem.total}}\r\n</td>\r\n<td>\r\n  <p>\r\n    <button class=\"btn btn-danger\" (click)=\"removeCartItem()\">\r\n      <span class=\"glyphicon glyphicon-trash\"></span>\r\n    </button>\r\n  </p>\r\n</td>\r\n"

/***/ }),

/***/ "./src/app/components/cart/item/item-cart.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/cart/item/item-cart.component.ts ***!
  \*************************************************************/
/*! exports provided: ItemCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCartComponent", function() { return ItemCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_cart_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/cart-item */ "./src/app/models/cart-item.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/cart.service */ "./src/app/services/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemCartComponent = /** @class */ (function () {
    function ItemCartComponent(cartService) {
        this.cartService = cartService;
    }
    ItemCartComponent.prototype.removeCartItem = function () {
        this.cartService.removeCartItem(this.cartItem);
    };
    ItemCartComponent.prototype.addProduct = function () {
        this.cartItem.total = this.cartItem.product.price * ++this.cartItem.quantity;
        this.cartService.updateCartTotal();
    };
    ItemCartComponent.prototype.removeProduct = function () {
        this.cartItem.total = this.cartItem.product.price * --this.cartItem.quantity;
        if (this.cartItem.total === 0) {
            this.cartService.removeCartItem(this.cartItem);
        }
        else {
            this.cartService.updateCartTotal();
        }
    };
    ItemCartComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_cart_item__WEBPACK_IMPORTED_MODULE_1__["CartItem"])
    ], ItemCartComponent.prototype, "cartItem", void 0);
    ItemCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[app-item-cart]',
            template: __webpack_require__(/*! ./item-cart.component.html */ "./src/app/components/cart/item/item-cart.component.html"),
            styles: [__webpack_require__(/*! ./item-cart.component.css */ "./src/app/components/cart/item/item-cart.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], ItemCartComponent);
    return ItemCartComponent;
}());



/***/ }),

/***/ "./src/app/components/cart/list-itens/list-items-cart.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/cart/list-itens/list-items-cart.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".total {\r\n    padding: 20px;\r\n    background-color: #00C4FF;\r\n}\r\n\r\n.form-item {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.label-item {\r\n    padding-top: 7px;\r\n}\r\n\r\n.action {\r\n    margin-top: 40px;\r\n}\r\n\r\n.image {\r\n    width: 200px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.image-config {\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.action {\r\n    margin-top: 40px;\r\n}\r\n\r\n.dashboard{\r\n    \r\n        position:absolute;\r\n        top:0;\r\n        left:0;\r\n        z-index:11;\r\n        width:100%;\r\n        height:100%;\r\n       \r\n}\r\n\r\n.image {\r\n    width: 200px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.image-config {\r\n    margin-bottom: 40px;\r\n}\r\n\r\n/*Main CSS*/\r\n\r\n/*Login Signup Page*/\r\n\r\na:focus,a:hover,a{\r\n    outline:none;\r\n    text-decoration: none;\r\n}\r\n\r\nli,ul{\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.header-top i {\r\n    font-size: 18px;\r\n}\r\n\r\n.bg-image {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: table;\r\n}\r\n\r\n.login-header {\r\n    display: inline-block;\r\n    width: 100%;\r\n    background: #0e1a35;\r\n}\r\n\r\n.login-signup {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    width: 100%;\r\n}\r\n\r\n.login-logo img {\r\n    cursor: pointer;\r\n    max-width: 171px;\r\n    padding: 23px 15px 22px;\r\n    width: 100%;\r\n}\r\n\r\n.login-header .navbar-right {\r\n    margin-right: 0px;\r\n}\r\n\r\n.login-header .nav-tabs > li.active > a,\r\n.login-header .nav-tabs > li.active > a:focus,\r\n.login-header .nav-tabs > li.active > a:hover {\r\n    background-color: transparent;\r\n    border: none;\r\n    color: #fff;\r\n}\r\n\r\n.login-header .nav-tabs > li > a {\r\n    border: medium none;\r\n    border-radius: 0;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    line-height: 48px;\r\n    padding: 15px 30px;\r\n    color: #fff;\r\n}\r\n\r\n.login-header .nav-tabs {\r\n    border-bottom: none;\r\n}\r\n\r\n.login-header .nav-tabs > li {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.login-header .nav > li > a:focus,\r\n.login-header .nav > li > a:hover {\r\n    background: none;\r\n    text-decoration: none;\r\n}\r\n\r\n.login-header .nav-tabs > li.active {\r\n    border-bottom: 6px solid #5584ff;\r\n}\r\n\r\n.login-inner h1 {\r\n    color: #8492af;\r\n    font-size: 48px;\r\n    font-weight: 300;\r\n    text-align: center;\r\n    margin-top: 0;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.login-inner h1 span {\r\n    color: #5584ff;\r\n}\r\n\r\n.login-form {\r\n    text-align: center;\r\n}\r\n\r\n.login-form input {\r\n    -moz-border-bottom-colors: none;\r\n    -moz-border-left-colors: none;\r\n    -moz-border-right-colors: none;\r\n    -moz-border-top-colors: none;\r\n    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n    border-color: -moz-use-text-color -moz-use-text-color #d4d9e3;\r\n    -o-border-image: none;\r\n       border-image: none;\r\n    border-style: none none solid;\r\n    border-width: medium medium 1px;\r\n    font-size: 13px;\r\n    font-weight: 300;\r\n    width: 100%;\r\n    color: #8492af;\r\n    padding: 15px 50px;\r\n    font-size: 17px;\r\n    max-width: 550px;\r\n}\r\n\r\n.login-form label {\r\n    margin-bottom: 30px;\r\n    width: 100%;\r\n}\r\n\r\n.login-signup .tab-content {\r\n    background: #ffffff none repeat scroll 0 0;\r\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.176);\r\n    display: inline-block;\r\n    margin-top: -8px;\r\n    width: 100%;\r\n}\r\n\r\n.form-btn {\r\n    background: #5584ff none repeat scroll 0 0;\r\n    border: medium none;\r\n    border-radius: 100px;\r\n    color: #ffffff;\r\n    font-weight: 400;\r\n    max-width: 250px;\r\n    padding: 10px 0;\r\n    position: relative;\r\n    width: 100%;\r\n    margin: 40px 0;\r\n    box-shadow: 0 2px 8px #d2d2d2;\r\n    -moz-box-shadow: 0 2px 8px #d2d2d2;\r\n    -webkit-box-shadow: 0 2px 8px #d2d2d2;\r\n}\r\n\r\n.form-btn::before {\r\n    content: \"\";\r\n    font-family: FontAwesome;\r\n    position: absolute;\r\n    right: 17px;\r\n    top: 9px;\r\n}\r\n\r\n.form-details {\r\n    padding: 35px 0;\r\n}\r\n\r\n.tab-content .tab-pane {\r\n    padding: 70px 0;\r\n}\r\n\r\n/*Login Signup Page*/\r\n\r\n/*Home Page*/\r\n\r\n.home {\r\n    background: #f6f7fa;\r\n}\r\n\r\n#navigation {\r\n    background: #0e1a35;\r\n}\r\n\r\n#navigation {\r\n    padding: 0;\r\n}\r\n\r\n.display-table {\r\n    display: table;\r\n    padding: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.display-table-row {\r\n    display: table-row;\r\n    height: 100%;\r\n}\r\n\r\n.display-table-cell {\r\n    display: table-cell;\r\n    float: none;\r\n    height: 100%;\r\n}\r\n\r\n.v-align {\r\n    vertical-align: top;\r\n}\r\n\r\n.logo img {\r\n    max-width: 180px;\r\n    padding: 16px 0 17px;\r\n    width: 100%;\r\n}\r\n\r\n.header-top {\r\n    margin: 0;\r\n    padding-top: 2px;\r\n}\r\n\r\n.header-top img {\r\n    border-radius: 50%;\r\n    max-width: 48px !important;\r\n    width: 100%;\r\n}\r\n\r\n.add-project {\r\n    background: #5584ff none repeat scroll 0 0;\r\n    border-radius: 100px;\r\n    color: #ffffff;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    padding: 10px 27px 10px 45px;\r\n    position: relative;\r\n}\r\n\r\n.header-rightside .nav > li > a:focus,\r\n.header-rightside .nav > li > a:hover {\r\n    background: none;\r\n    text-decoration: none;\r\n}\r\n\r\n.add-project::before {\r\n    content: \"\";\r\n    ;\r\n    height: 12px;\r\n    left: 17px;\r\n    position: absolute;\r\n    top: 12px;\r\n    width: 12px;\r\n}\r\n\r\n.add-project:hover {\r\n    color: #ffffff;\r\n}\r\n\r\n.header-top i {\r\n    color: #0e1a35;\r\n}\r\n\r\n.icon-info {\r\n    position: relative;\r\n}\r\n\r\n.navi i {\r\n    font-size: 20px;\r\n}\r\n\r\n.label.label-primary {\r\n    border-radius: 50%;\r\n    font-size: 9px;\r\n    left: 8px;\r\n    position: absolute;\r\n    top: -9px;\r\n}\r\n\r\n.icon-info .label {\r\n    border: 2px solid #ffffff;\r\n    font-weight: 500;\r\n    padding: 3px 5px;\r\n    text-align: center;\r\n}\r\n\r\n.header-top li {\r\n    display: inline-block;\r\n    text-align: center;\r\n}\r\n\r\n.header-top .dropdown-toggle {\r\n    color: #0e1a35;\r\n}\r\n\r\n.header-top .dropdown-menu {\r\n    border: medium none;\r\n    left: -85px;\r\n    padding: 17px;\r\n}\r\n\r\n.view {\r\n    background: #5584ff none repeat scroll 0 0;\r\n    border-radius: 100px;\r\n    color: #ffffff;\r\n    display: inline-block;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    margin-top: 10px;\r\n    padding: 10px 15px;\r\n}\r\n\r\n.navbar-content > span {\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n}\r\n\r\n.img-responsive {\r\n    width: 100%;\r\n}\r\n\r\n#navigation{\r\n    transition: all 0.5s ease;\r\n}\r\n\r\n.search input {\r\n    border: none;\r\n    font-size: 15px;\r\n    padding: 15px 9px;\r\n    width: 100%;\r\n    color: #8492af;\r\n}\r\n\r\nheader {\r\n    background: #ffffff none repeat scroll 0 0;\r\n    box-shadow: 0 1px 12px rgba(0, 0, 0, 0.04);\r\n    display: inline-block !important;\r\n    line-height: 23px;\r\n    padding: 15px;\r\n    transition: all 0.5s ease 0s;\r\n    width: 100%;\r\n    transition: all 0.5s ease;\r\n}\r\n\r\n.logo {\r\n    text-align: center;\r\n}\r\n\r\n.navi a {\r\n    border-bottom: 1px solid #0d172e;\r\n    border-top: 1px solid #0d172e;\r\n    color: #ffffff;\r\n    display: block;\r\n    font-size: 17px;\r\n    font-weight: 500;\r\n    padding: 28px 20px;\r\n    text-decoration: none;\r\n}\r\n\r\n.navi i {\r\n    margin-right: 15px;\r\n    color: #5584ff;\r\n}\r\n\r\n.navi .active a {\r\n    background: #122143;\r\n    border-left: 5px solid #5584ff;\r\n    padding-left: 15px;\r\n}\r\n\r\n.navi a:hover {\r\n    background: #122143 none repeat scroll 0 0;\r\n    border-left: 5px solid #5584ff;\r\n    display: block;\r\n    padding-left: 15px;\r\n}\r\n\r\n.navbar-default {\r\n    background-color: #ffffff;\r\n    border-color: #ffffff;\r\n}\r\n\r\n.navbar-toggle {\r\n    border: none;\r\n}\r\n\r\n.navbar-default .navbar-toggle:focus,\r\n.navbar-default .navbar-toggle:hover {\r\n    background-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n.navbar-default .navbar-toggle .icon-bar {\r\n    background-color: #0e1a35;\r\n}\r\n\r\n.circle-logo {\r\n    margin: 0 auto;\r\n    max-width: 30px !important;\r\n    text-align: center;\r\n}\r\n\r\n.hidden-xs{\r\n    transition: all 0.5s ease;\r\n}\r\n\r\n.user-dashboard {\r\n    padding: 0 20px;\r\n}\r\n\r\n.user-dashboard h1 {\r\n    color: #0e1a35;\r\n    font-size: 30px;\r\n    font-weight: 500;\r\n    margin: 0;\r\n    padding: 21px 0;\r\n}\r\n\r\n.sales {\r\n    background: #ffffff none repeat scroll 0 0;\r\n    border: 1px solid #d4d9e3;\r\n    display: inline-block;\r\n    padding: 15px;\r\n    width: 100%;\r\n}\r\n\r\n.sales button {\r\n    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n    border: 1px solid #dadee7;\r\n    border-radius: 100px;\r\n    font-size: 15px;\r\n    letter-spacing: 0.5px;\r\n    padding-right: 32px;\r\n    color: #0e1a35;\r\n}\r\n\r\n.sales button::before {\r\n    content: \"\";\r\n    font-family: FontAwesome;\r\n    position: absolute;\r\n    right: 12px;\r\n    top: 11px;\r\n}\r\n\r\n.sales  .btn-group {\r\n    float: right;\r\n}\r\n\r\n.sales h2 {\r\n    color: #8492af;\r\n    float: left;\r\n    font-size: 21px;\r\n    font-weight: 600;\r\n    margin: 0;\r\n    padding: 9px 0 0;\r\n}\r\n\r\n.btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n.sales .dropdown-menu{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    border: 0px;\r\n    border-radius: 8px;\r\n    width: 100%;\r\n    color: #0e1a35;\r\n}\r\n\r\n.sales .btn-group.open .dropdown-toggle, .btn.active, .btn:active{\r\n    box-shadow: none;\r\n}\r\n\r\n.sales .dropdown-menu > a {\r\n    color: #0e1a35;\r\n    display: inline-block;\r\n    font-weight: 800;\r\n    padding: 9px 0;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n\r\n#my-cool-chart svg {\r\n    width: 100%;\r\n}\r\n\r\n.sales .dropdown-menu > a:hover{\r\n    color: #5584FF;   \r\n}\r\n\r\n.shield-buttons {\r\n    display: none;\r\n}\r\n\r\n.close, .close:focus, .close:hover {\r\n    color: #fff;;\r\n    opacity: 1;\r\n    text-shadow: none;\r\n}\r\n\r\n.modal-body input {\r\n    border: 1px solid #d4d9e3;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    margin: 5px 0;\r\n    padding: 14px 10px;\r\n    width: 100%;\r\n    color: #8492af;\r\n}\r\n\r\n.modal-body textarea {\r\n    border: 1px solid #d4d9e3;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    height: 200px;\r\n    margin-top: 5px;\r\n    padding: 9px 10px;\r\n    width: 100%;\r\n    color: #8492af;\r\n}\r\n\r\n.modal-header.login-header h4 {\r\n    color: #ffffff;\r\n}\r\n\r\n.modal-footer .add-project {\r\n    background: #5584ff none repeat scroll 0 0;\r\n    border: medium none;\r\n    border-radius: 100px;\r\n    color: #ffffff;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    padding: 10px 30px;\r\n    position: relative;\r\n}\r\n\r\n.modal-footer .add-project::before{display: none;}\r\n\r\n.modal-footer {\r\n    border: 0 none;\r\n    padding: 10px 15px 26px;\r\n    text-align: right;\r\n}\r\n\r\n.cancel {\r\n    background: #0E1A35     ;\r\n    border: medium none;\r\n    border-radius: 100px;\r\n    color: #ffffff;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    padding: 10px 30px;\r\n    position: relative;\r\n    \r\n}\r\n\r\n.modal{\r\n    top: 20%; \r\n}\r\n\r\n.modal-header .close {\r\n    margin-top: 2px;\r\n}\r\n\r\n.search input:focus{\r\n    border-bottom: 1px solid #BDC4D4;\r\n    line-height:22px;\r\n    transition: 0.1s all;\r\n}\r\n\r\n.modal-header.login-header {\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n}\r\n\r\n/*Main CSS*/\r\n\r\n@media only screen and (max-device-width: 767px) {\r\n    .login-logo img {\r\n        margin: 0 auto;\r\n    }\r\n    .login-details .nav-tabs > li {\r\n        text-align: center;\r\n        width: 50%;\r\n    }\r\n    .login-signup .login-inner h1 {\r\n        font-size: 26px;\r\n        margin-bottom: 0;\r\n        margin-top: 10px;\r\n    }\r\n    .login-inner .login-form input {\r\n        font-size: 15px;\r\n        max-width: 100%;\r\n        padding: 15px 45px;\r\n    }\r\n    .login-inner .form-details {\r\n        padding: 25px;\r\n    }\r\n    .login-inner .login-form label {\r\n        margin-bottom: 20px;\r\n        width: 100%;\r\n    }\r\n    .login-inner .form-btn {\r\n        margin: 0;\r\n        max-width: 180px;\r\n    }\r\n    .tab-content .tab-pane {\r\n        padding: 20px 0;\r\n    }\r\n    #navigation .navi a {\r\n        font-size: 14px;\r\n        padding: 20px;\r\n        text-align: center;\r\n    }\r\n    #navigation .navi i {\r\n        margin-right: 0px;\r\n    }\r\n    #navigation .navi a:hover,\r\n    #navigation .navi .active a {\r\n        background: #122143 none repeat scroll 0 0;\r\n        border-left: none;\r\n        display: block;\r\n        padding-left: 20px;\r\n    }\r\n    header .header-top img {\r\n        max-width: 38px !important;\r\n    }\r\n    .v-align header {\r\n        padding: 12px 15px;\r\n    }\r\n    header .header-top li {\r\n        padding-left: 13px;\r\n        padding-right: 6px;\r\n    }\r\n    .navbar-default .navbar-toggle {\r\n        border-color: rgba(0, 0, 0, 0);\r\n    }\r\n    .navbar-header .navbar-toggle {\r\n        float: left;\r\n        margin: 0;\r\n        padding: 0;\r\n        top: 12px;\r\n    }\r\n    button,\r\n        html [type=\"button\"],\r\n        [type=\"reset\"],\r\n        [type=\"submit\"] {\r\n            outline: medium none;\r\n    }\r\n    .user-dashboard .sales h2 {\r\n        color: #8492af;\r\n        float: left;\r\n        font-size: 14px;\r\n        font-weight: 600;\r\n        margin: 0;\r\n        padding: 13px 0 0;\r\n}\r\n    .user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\n        font-size: 11px;\r\n}\r\n    .user-dashboard .sales button {\r\n        font-size: 11px;\r\n        padding-right: 23px;\r\n}  \r\n    .user-dashboard .sales h2 {\r\n    font-size: 12px;\r\n}\r\n.gutter{\r\n    padding: 0;\r\n}\r\n}\r\n\r\n@media only screen and (max-device-width: 992px) {\r\n    header .header-top li {\r\n        padding-left: 20px !important;\r\n        padding-right: 0;\r\n}\r\n    header .logo img {\r\n        max-width: 125px !important;\r\n}\r\n\r\n}\r\n\r\n@media only screen and (min-device-width: 767px) and (max-device-width: 998px){\r\n      .user-dashboard .header-top {\r\n        padding-top: 5px;\r\n}\r\n    .user-dashboard .header-rightside {\r\n        display: inline-block;\r\n        float: left;\r\n        width: 100%;\r\n}\r\n    .user-dashboard .header-rightside .header-top img {\r\n        max-width: 41px !important;\r\n} \r\n    .user-dashboard .sales button {\r\n    font-size: 10px;\r\n}\r\n    .user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\n    font-size: 12px;\r\n}\r\n    .user-dashboard .sales h2 {\r\n    font-size: 15px;\r\n}\r\n}\r\n\r\n@media only screen and (min-device-width:998px) and (max-device-width: 1350px){\r\n        #navigation .logo img {\r\n    max-width: 130px;\r\n    padding: 16px 0 17px;\r\n    width: 100%;\r\n}\r\n}   "

/***/ }),

/***/ "./src/app/components/cart/list-itens/list-items-cart.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/cart/list-itens/list-items-cart.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\r\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\r\n<meta name=\"viewport\" content=\"width=device-width, user-scalable=no\"> \r\n\r\n\r\n<div  class=\"dashboard\">\r\n<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css\" rel=\"stylesheet\" integrity=\"sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1\" crossorigin=\"anonymous\">\r\n    <div class=\"container-fluid display-table\">\r\n        <div class=\"row display-table-row\">\r\n            <div class=\"col-md-2 col-sm-1 hidden-xs display-table-cell v-align box\" id=\"navigation\">\r\n                <div class=\"logo\">\r\n                    <a hef=\"home.html\"><img src=\"http://automablu.com.br/wp-content/uploads/2018/03/LOGOCOLORIDA.png\" alt=\"merkery_logo\" class=\"hidden-xs hidden-sm\">\r\n                        <img src=\"http://jskrishna.com/work/merkury/images/circle-logo.png\" alt=\"merkery_logo\" class=\"visible-xs visible-sm circle-logo\">\r\n                    </a>\r\n                </div>\r\n                <div class=\"navi\">\r\n                    <ul>\r\n                            <li><a routerLink=\"/home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Home</span></a></li>\r\n                            <li class=\"active\" ><a routerLink=\"/search-client\"> <i class=\"fa fa-tasks\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\"> Iniciar Venda </span></a></li>\r\n                            <li><a routerLink=\"/clients\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Clientes </span></a></li>\r\n                            <li><a routerLink=\"/products\"><i class=\"fa fa-list-ol\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Produtos </span></a></li>\r\n                            <li><a routerLink=\"/employees\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Funcionários </span></a></li>\r\n                            <li><a routerLink=\"/home\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Estatísticas</span></a></li>\r\n                            <li><a routerLink=\"/settings\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\" > Configurações</span></a></li>\r\n                        </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-10 col-sm-11 display-table-cell v-align\">\r\n                <div class=\"row\">\r\n                    <header>\r\n                        <div class=\"col-md-7\">\r\n                            <nav class=\"navbar-default pull-left\">\r\n                                <div class=\"navbar-header\">\r\n                                    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"offcanvas\" data-target=\"#side-menu\" aria-expanded=\"false\">\r\n                                        <span class=\"sr-only\">Toggle navigation</span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                    </button>\r\n                                </div>\r\n                            </nav>\r\n                            <div class=\"search hidden-xs hidden-sm\">\r\n                                <input type=\"text\" placeholder=\"Busca\" id=\"search\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"header-rightside\">\r\n                                <ul class=\"list-inline header-top pull-right\">\r\n                                    <li><a href=\"#\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a></li>\r\n                                    <li>\r\n                                        <a href=\"#\" class=\"icon-info\">\r\n                                            <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\r\n                                            <span class=\"label label-primary\">3</span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li class=\"dropdown\">\r\n                                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">User\r\n                                            <b class=\"caret\"></b></a>\r\n                                        <ul class=\"dropdown-menu\">\r\n                                            <li>\r\n                                                <div class=\"navbar-content\">\r\n                                                    <span>Ivan </span>\r\n                                                    <p class=\"text-muted small\">\r\n                                                        ivanalves94@gmail.com\r\n                                                    </p>\r\n                                                    <div class=\"divider\">\r\n                                                    </div>\r\n                                                    <a href=\"#\" class=\"view btn-sm active\">View Profile</a>\r\n                                                </div>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </header>\r\n                </div>\r\n\r\n                <div class=\"user-dashboard\">\r\n\r\n\r\n\r\n\r\n                        <app-information></app-information>\r\n\r\n                        <popup #popupEfetuarCompra (confirmClick)=\"Confirm()\" (cancelClick)=\"Cancel()\"  style=\"overflow:hidden\">\r\n                            <div class=\"panel panel-success\">\r\n                                <div class=\"panel-heading\">Carrinho de compras</div>\r\n                                <table class=\"table\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>ID</th>\r\n                                            <th>Nome</th>\r\n                                            <th>Imagem</th>\r\n                                            <th>Descrição</th>\r\n                                            <th>Valor Unitário</th>\r\n                                            <th>Quantidade</th>\r\n                                            <th>Valor Total</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr app-confirm-cart *ngFor=\"let cartItem of cart.cartItem;\" [cartItem]=\"cartItem\"></tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                          <div class=\"panel panel-success panel-heading text-center\">Total = R$ {{ cart.total }}</div>\r\n                        </popup>\r\n                        \r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-heading text-center\">Inserir Produto</div>\r\n                            <form class=\"form-inline text-center form-item\" [formGroup]=\"productForm\" (submit)=\"onSubmit()\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"codigo\" class=\"col-sm-3 control-label label-item\">Código:</label>\r\n                                    <div class=\"col-sm-6\">\r\n                                        <input type=\"number\" class=\"form-control\" id=\"codigo\" min='1' placeholder=\"Digite o código\"\r\n                                               formControlName=\"codigo\" oninput=\"validity.valid||(value='');\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"quantidade\" class=\"col-sm-4 control-label label-item\">Quantidade:</label>\r\n                                    <div class=\"col-sm-6\">\r\n                                        <input type=\"number\" class=\"form-control\" id=\"quantidade\" min='1' placeholder=\"Digite a quantidade\"\r\n                                               formControlName=\"quantidade\" oninput=\"validity.valid||(value='');\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"productForm.invalid\">Inserir</button>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                        \r\n                        <div class=\"panel panel-danger\" *ngIf=\"cart.cartItem.length!==0\">\r\n                          <div class=\"panel-heading text-center\">Produto Adicionado</div>\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-2\"><h2>{{cart.cartItem.slice().pop().product.id}}</h2></div>\r\n                            <div class=\"col-md-8\"><h2>{{cart.cartItem.slice().pop().product.description}}</h2></div>\r\n                            <div class=\"col-md-2\"><h2>R$ {{cart.cartItem.slice().pop().product.price}}</h2></div>\r\n                          </div>\r\n                        </div>\r\n                        \r\n                        <div class=\"panel panel-success\">\r\n                          <div class=\"panel-heading text-center\">Carrinho de compras</div>\r\n                          <table class=\"table\">\r\n                            <thead>\r\n                            <tr>\r\n                              <th>ID</th>\r\n                              <th>Nome</th>\r\n                              <th>Imagem</th>\r\n                              <th>Descrição</th>\r\n                              <th>Valor Unitário</th>\r\n                              <th>Quantidade</th>\r\n                              <th>Valor Total</th>\r\n                              <th>Remover</th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                            <tr app-item-cart *ngFor=\"let cartItem of cart.cartItem;\" [cartItem]=\"cartItem\"></tr>\r\n                            </tbody>\r\n                          </table>\r\n                        </div>\r\n                        <div class=\"panel panel-info text-center\">\r\n                            <div class=\"panel-heading\"><h4>Valor total da compra : R$ {{ cart.total }} </h4></div>\r\n                                <button id=\"bt_finaliza\" type=\"button\" class=\"btn btn-success btn-lg form-item\" (click)=\"efetuarPagamento()\"\r\n                                        *ngIf=\"cart.cartItem.length !=0\">\r\n                                    Efetuar Pagamento\r\n                                    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n                                </button>\r\n                        \r\n                                <button id=\"bt_cancel\" type=\"button\" class=\"btn btn-danger btn-lg form-item\" (click)=\"cancelarCompra()\"\r\n                                        *ngIf=\"cart.cartItem.length !=0\">\r\n                                    Cancelar Compra\r\n                                    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n                                </button>\r\n                        </div>\r\n                                        </div>\r\n            </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div id=\"add_project\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n\r\n            <div class=\"modal-content\">\r\n                \r\n                <div class=\"modal-body\">\r\n                       \r\n                            <input type=\"text\" placeholder=\"Project Title\" name=\"name\">\r\n                            <input type=\"text\" placeholder=\"Post of Post\" name=\"mail\">\r\n                            <input type=\"text\" placeholder=\"Author\" name=\"passsword\">\r\n                            <textarea placeholder=\"Desicrption\"></textarea>\r\n                    </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"cancel\" data-dismiss=\"modal\">Close</button>\r\n                    <button type=\"button\" class=\"add-project\" data-dismiss=\"modal\">Save</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/cart/list-itens/list-items-cart.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/cart/list-itens/list-items-cart.component.ts ***!
  \*************************************************************************/
/*! exports provided: ListItemsCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemsCartComponent", function() { return ListItemsCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _models_cart_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/cart-item */ "./src/app/models/cart-item.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_opd_popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-opd-popup */ "./node_modules/ng2-opd-popup/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ListItemsCartComponent = /** @class */ (function () {
    function ListItemsCartComponent(cartService, productService, router, fb) {
        this.cartService = cartService;
        this.productService = productService;
        this.router = router;
        this.fb = fb;
        this.productForm = fb.group({
            'codigo': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'quantidade': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    }
    /**
     * Carrega o carrinho de compras e os produtos ao iniciar o componente
     */
    ListItemsCartComponent.prototype.ngOnInit = function () {
        console.log(this.cart);
        this.products = this.productService.getProducts();
        this.cart = this.cartService.getCart();
    };
    ListItemsCartComponent.prototype.onSubmit = function () {
        var produto = this.productService.getProductById(this.productForm.get('codigo').value);
        if ((produto) != undefined) {
            var cartItem = new _models_cart_item__WEBPACK_IMPORTED_MODULE_2__["CartItem"](produto, this.productForm.get('quantidade').value, produto.price * this.productForm.get('quantidade').value);
            this.cartService.addCartItem(cartItem);
        }
        else {
            alert("Código de produto inexistente!");
        }
    };
    /*Usa o alert para impressao dos dados contidos no pedido que é o vetor de cartItem[]*/
    ListItemsCartComponent.prototype.efetuarPagamento = function () {
        this.popupEfetuarCompra.options = {
            confirmBtnContent: 'Confirmar',
            cancleBtnContent: 'Cancelar',
            cancleBtnClass: 'btn btn-default',
            confirmBtnClass: 'btn btn-default',
            color: '#5cb85c',
            header: 'Conferir Pedido',
            widthProsentage: 60,
            animation: 'fadeInUp'
        };
        this.popupEfetuarCompra.show(this.popupEfetuarCompra.options);
    };
    /*cancelar a compra no carrinho*/
    ListItemsCartComponent.prototype.cancelarCompra = function () {
        if (confirm('Deseja cancelar a compra?')) {
            this.cartService.cleanCart();
            this.router.navigate(['home']);
        }
    };
    ListItemsCartComponent.prototype.Confirm = function () {
        this.router.navigate(['payment']);
    };
    ListItemsCartComponent.prototype.Cancel = function () {
        this.cartService.cleanCart();
        /*this.router.navigate(['cart']);*/
        this.popupEfetuarCompra.hide();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('popupEfetuarCompra'),
        __metadata("design:type", ng2_opd_popup__WEBPACK_IMPORTED_MODULE_6__["Popup"])
    ], ListItemsCartComponent.prototype, "popupEfetuarCompra", void 0);
    ListItemsCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-items-cart',
            template: __webpack_require__(/*! ./list-items-cart.component.html */ "./src/app/components/cart/list-itens/list-items-cart.component.html"),
            styles: [__webpack_require__(/*! ./list-items-cart.component.css */ "./src/app/components/cart/list-itens/list-items-cart.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"], _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], ListItemsCartComponent);
    return ListItemsCartComponent;
}());



/***/ }),

/***/ "./src/app/components/cart/payment/payment.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/cart/payment/payment.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".action{\r\n    margin-top: 40px;\r\n}\r\n\r\n.image-payment{\r\n    width: 200px;\r\n    height: 200px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.image1-cart{\r\n    margin-bottom: 20px;\r\n    margin-top: 20px;\r\n    width: 300px;\r\n}\r\n\r\n.action {\r\n    margin-top: 40px;\r\n}\r\n\r\n.image {\r\n    width: 200px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.image-config {\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.action {\r\n    margin-top: 40px;\r\n}\r\n\r\n.dashboard{\r\n    \r\n        position:absolute;\r\n        top:0;\r\n        left:0;\r\n        z-index:11;\r\n        width:100%;\r\n        height:100%;\r\n       \r\n}\r\n\r\n.image {\r\n    width: 200px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.image-config {\r\n    margin-bottom: 40px;\r\n}\r\n\r\n/*Main CSS*/\r\n\r\n/*Login Signup Page*/\r\n\r\na:focus,a:hover,a{\r\n    outline:none;\r\n    text-decoration: none;\r\n}\r\n\r\nli,ul{\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.header-top i {\r\n    font-size: 18px;\r\n}\r\n\r\n.bg-image {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: table;\r\n}\r\n\r\n.login-header {\r\n    display: inline-block;\r\n    width: 100%;\r\n    background: #0e1a35;\r\n}\r\n\r\n.login-signup {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    width: 100%;\r\n}\r\n\r\n.login-logo img {\r\n    cursor: pointer;\r\n    max-width: 171px;\r\n    padding: 23px 15px 22px;\r\n    width: 100%;\r\n}\r\n\r\n.login-header .navbar-right {\r\n    margin-right: 0px;\r\n}\r\n\r\n.login-header .nav-tabs > li.active > a,\r\n.login-header .nav-tabs > li.active > a:focus,\r\n.login-header .nav-tabs > li.active > a:hover {\r\n    background-color: transparent;\r\n    border: none;\r\n    color: #fff;\r\n}\r\n\r\n.login-header .nav-tabs > li > a {\r\n    border: medium none;\r\n    border-radius: 0;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    line-height: 48px;\r\n    padding: 15px 30px;\r\n    color: #fff;\r\n}\r\n\r\n.login-header .nav-tabs {\r\n    border-bottom: none;\r\n}\r\n\r\n.login-header .nav-tabs > li {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.login-header .nav > li > a:focus,\r\n.login-header .nav > li > a:hover {\r\n    background: none;\r\n    text-decoration: none;\r\n}\r\n\r\n.login-header .nav-tabs > li.active {\r\n    border-bottom: 6px solid #5584ff;\r\n}\r\n\r\n.login-inner h1 {\r\n    color: #8492af;\r\n    font-size: 48px;\r\n    font-weight: 300;\r\n    text-align: center;\r\n    margin-top: 0;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.login-inner h1 span {\r\n    color: #5584ff;\r\n}\r\n\r\n.login-form {\r\n    text-align: center;\r\n}\r\n\r\n.login-form input {\r\n    -moz-border-bottom-colors: none;\r\n    -moz-border-left-colors: none;\r\n    -moz-border-right-colors: none;\r\n    -moz-border-top-colors: none;\r\n    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n    border-color: -moz-use-text-color -moz-use-text-color #d4d9e3;\r\n    -o-border-image: none;\r\n       border-image: none;\r\n    border-style: none none solid;\r\n    border-width: medium medium 1px;\r\n    font-size: 13px;\r\n    font-weight: 300;\r\n    width: 100%;\r\n    color: #8492af;\r\n    padding: 15px 50px;\r\n    font-size: 17px;\r\n    max-width: 550px;\r\n}\r\n\r\n.login-form label {\r\n    margin-bottom: 30px;\r\n    width: 100%;\r\n}\r\n\r\n.login-signup .tab-content {\r\n    background: #ffffff none repeat scroll 0 0;\r\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.176);\r\n    display: inline-block;\r\n    margin-top: -8px;\r\n    width: 100%;\r\n}\r\n\r\n.form-btn {\r\n    background: #5584ff none repeat scroll 0 0;\r\n    border: medium none;\r\n    border-radius: 100px;\r\n    color: #ffffff;\r\n    font-weight: 400;\r\n    max-width: 250px;\r\n    padding: 10px 0;\r\n    position: relative;\r\n    width: 100%;\r\n    margin: 40px 0;\r\n    box-shadow: 0 2px 8px #d2d2d2;\r\n    -moz-box-shadow: 0 2px 8px #d2d2d2;\r\n    -webkit-box-shadow: 0 2px 8px #d2d2d2;\r\n}\r\n\r\n.form-btn::before {\r\n    content: \"\";\r\n    font-family: FontAwesome;\r\n    position: absolute;\r\n    right: 17px;\r\n    top: 9px;\r\n}\r\n\r\n.form-details {\r\n    padding: 35px 0;\r\n}\r\n\r\n.tab-content .tab-pane {\r\n    padding: 70px 0;\r\n}\r\n\r\n/*Login Signup Page*/\r\n\r\n/*Home Page*/\r\n\r\n.home {\r\n    background: #f6f7fa;\r\n}\r\n\r\n#navigation {\r\n    background: #0e1a35;\r\n}\r\n\r\n#navigation {\r\n    padding: 0;\r\n}\r\n\r\n.display-table {\r\n    display: table;\r\n    padding: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.display-table-row {\r\n    display: table-row;\r\n    height: 100%;\r\n}\r\n\r\n.display-table-cell {\r\n    display: table-cell;\r\n    float: none;\r\n    height: 100%;\r\n}\r\n\r\n.v-align {\r\n    vertical-align: top;\r\n}\r\n\r\n.logo img {\r\n    max-width: 180px;\r\n    padding: 16px 0 17px;\r\n    width: 100%;\r\n}\r\n\r\n.header-top {\r\n    margin: 0;\r\n    padding-top: 2px;\r\n}\r\n\r\n.header-top img {\r\n    border-radius: 50%;\r\n    max-width: 48px !important;\r\n    width: 100%;\r\n}\r\n\r\n.add-project {\r\n    background: #5584ff none repeat scroll 0 0;\r\n    border-radius: 100px;\r\n    color: #ffffff;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    padding: 10px 27px 10px 45px;\r\n    position: relative;\r\n}\r\n\r\n.header-rightside .nav > li > a:focus,\r\n.header-rightside .nav > li > a:hover {\r\n    background: none;\r\n    text-decoration: none;\r\n}\r\n\r\n.add-project::before {\r\n    content: \"\";\r\n    ;\r\n    height: 12px;\r\n    left: 17px;\r\n    position: absolute;\r\n    top: 12px;\r\n    width: 12px;\r\n}\r\n\r\n.add-project:hover {\r\n    color: #ffffff;\r\n}\r\n\r\n.header-top i {\r\n    color: #0e1a35;\r\n}\r\n\r\n.icon-info {\r\n    position: relative;\r\n}\r\n\r\n.navi i {\r\n    font-size: 20px;\r\n}\r\n\r\n.label.label-primary {\r\n    border-radius: 50%;\r\n    font-size: 9px;\r\n    left: 8px;\r\n    position: absolute;\r\n    top: -9px;\r\n}\r\n\r\n.icon-info .label {\r\n    border: 2px solid #ffffff;\r\n    font-weight: 500;\r\n    padding: 3px 5px;\r\n    text-align: center;\r\n}\r\n\r\n.header-top li {\r\n    display: inline-block;\r\n    text-align: center;\r\n}\r\n\r\n.header-top .dropdown-toggle {\r\n    color: #0e1a35;\r\n}\r\n\r\n.header-top .dropdown-menu {\r\n    border: medium none;\r\n    left: -85px;\r\n    padding: 17px;\r\n}\r\n\r\n.view {\r\n    background: #5584ff none repeat scroll 0 0;\r\n    border-radius: 100px;\r\n    color: #ffffff;\r\n    display: inline-block;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    margin-top: 10px;\r\n    padding: 10px 15px;\r\n}\r\n\r\n.navbar-content > span {\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n}\r\n\r\n.img-responsive {\r\n    width: 100%;\r\n}\r\n\r\n#navigation{\r\n    transition: all 0.5s ease;\r\n}\r\n\r\n.search input {\r\n    border: none;\r\n    font-size: 15px;\r\n    padding: 15px 9px;\r\n    width: 100%;\r\n    color: #8492af;\r\n}\r\n\r\nheader {\r\n    background: #ffffff none repeat scroll 0 0;\r\n    box-shadow: 0 1px 12px rgba(0, 0, 0, 0.04);\r\n    display: inline-block !important;\r\n    line-height: 23px;\r\n    padding: 15px;\r\n    transition: all 0.5s ease 0s;\r\n    width: 100%;\r\n    transition: all 0.5s ease;\r\n}\r\n\r\n.logo {\r\n    text-align: center;\r\n}\r\n\r\n.navi a {\r\n    border-bottom: 1px solid #0d172e;\r\n    border-top: 1px solid #0d172e;\r\n    color: #ffffff;\r\n    display: block;\r\n    font-size: 17px;\r\n    font-weight: 500;\r\n    padding: 28px 20px;\r\n    text-decoration: none;\r\n}\r\n\r\n.navi i {\r\n    margin-right: 15px;\r\n    color: #5584ff;\r\n}\r\n\r\n.navi .active a {\r\n    background: #122143;\r\n    border-left: 5px solid #5584ff;\r\n    padding-left: 15px;\r\n}\r\n\r\n.navi a:hover {\r\n    background: #122143 none repeat scroll 0 0;\r\n    border-left: 5px solid #5584ff;\r\n    display: block;\r\n    padding-left: 15px;\r\n}\r\n\r\n.navbar-default {\r\n    background-color: #ffffff;\r\n    border-color: #ffffff;\r\n}\r\n\r\n.navbar-toggle {\r\n    border: none;\r\n}\r\n\r\n.navbar-default .navbar-toggle:focus,\r\n.navbar-default .navbar-toggle:hover {\r\n    background-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n.navbar-default .navbar-toggle .icon-bar {\r\n    background-color: #0e1a35;\r\n}\r\n\r\n.circle-logo {\r\n    margin: 0 auto;\r\n    max-width: 30px !important;\r\n    text-align: center;\r\n}\r\n\r\n.hidden-xs{\r\n    transition: all 0.5s ease;\r\n}\r\n\r\n.user-dashboard {\r\n    padding: 0 20px;\r\n}\r\n\r\n.user-dashboard h1 {\r\n    color: #0e1a35;\r\n    font-size: 30px;\r\n    font-weight: 500;\r\n    margin: 0;\r\n    padding: 21px 0;\r\n}\r\n\r\n.sales {\r\n    background: #ffffff none repeat scroll 0 0;\r\n    border: 1px solid #d4d9e3;\r\n    display: inline-block;\r\n    padding: 15px;\r\n    width: 100%;\r\n}\r\n\r\n.sales button {\r\n    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n    border: 1px solid #dadee7;\r\n    border-radius: 100px;\r\n    font-size: 15px;\r\n    letter-spacing: 0.5px;\r\n    padding-right: 32px;\r\n    color: #0e1a35;\r\n}\r\n\r\n.sales button::before {\r\n    content: \"\";\r\n    font-family: FontAwesome;\r\n    position: absolute;\r\n    right: 12px;\r\n    top: 11px;\r\n}\r\n\r\n.sales  .btn-group {\r\n    float: right;\r\n}\r\n\r\n.sales h2 {\r\n    color: #8492af;\r\n    float: left;\r\n    font-size: 21px;\r\n    font-weight: 600;\r\n    margin: 0;\r\n    padding: 9px 0 0;\r\n}\r\n\r\n.btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n.sales .dropdown-menu{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    border: 0px;\r\n    border-radius: 8px;\r\n    width: 100%;\r\n    color: #0e1a35;\r\n}\r\n\r\n.sales .btn-group.open .dropdown-toggle, .btn.active, .btn:active{\r\n    box-shadow: none;\r\n}\r\n\r\n.sales .dropdown-menu > a {\r\n    color: #0e1a35;\r\n    display: inline-block;\r\n    font-weight: 800;\r\n    padding: 9px 0;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n\r\n#my-cool-chart svg {\r\n    width: 100%;\r\n}\r\n\r\n.sales .dropdown-menu > a:hover{\r\n    color: #5584FF;   \r\n}\r\n\r\n.shield-buttons {\r\n    display: none;\r\n}\r\n\r\n.close, .close:focus, .close:hover {\r\n    color: #fff;;\r\n    opacity: 1;\r\n    text-shadow: none;\r\n}\r\n\r\n.modal-body input {\r\n    border: 1px solid #d4d9e3;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    margin: 5px 0;\r\n    padding: 14px 10px;\r\n    width: 100%;\r\n    color: #8492af;\r\n}\r\n\r\n.modal-body textarea {\r\n    border: 1px solid #d4d9e3;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    height: 200px;\r\n    margin-top: 5px;\r\n    padding: 9px 10px;\r\n    width: 100%;\r\n    color: #8492af;\r\n}\r\n\r\n.modal-header.login-header h4 {\r\n    color: #ffffff;\r\n}\r\n\r\n.modal-footer .add-project {\r\n    background: #5584ff none repeat scroll 0 0;\r\n    border: medium none;\r\n    border-radius: 100px;\r\n    color: #ffffff;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    padding: 10px 30px;\r\n    position: relative;\r\n}\r\n\r\n.modal-footer .add-project::before{display: none;}\r\n\r\n.modal-footer {\r\n    border: 0 none;\r\n    padding: 10px 15px 26px;\r\n    text-align: right;\r\n}\r\n\r\n.cancel {\r\n    background: #0E1A35     ;\r\n    border: medium none;\r\n    border-radius: 100px;\r\n    color: #ffffff;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    padding: 10px 30px;\r\n    position: relative;\r\n    \r\n}\r\n\r\n.modal{\r\n    top: 20%; \r\n}\r\n\r\n.modal-header .close {\r\n    margin-top: 2px;\r\n}\r\n\r\n.search input:focus{\r\n    border-bottom: 1px solid #BDC4D4;\r\n    line-height:22px;\r\n    transition: 0.1s all;\r\n}\r\n\r\n.modal-header.login-header {\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n}\r\n\r\n/*Main CSS*/\r\n\r\n@media only screen and (max-device-width: 767px) {\r\n    .login-logo img {\r\n        margin: 0 auto;\r\n    }\r\n    .login-details .nav-tabs > li {\r\n        text-align: center;\r\n        width: 50%;\r\n    }\r\n    .login-signup .login-inner h1 {\r\n        font-size: 26px;\r\n        margin-bottom: 0;\r\n        margin-top: 10px;\r\n    }\r\n    .login-inner .login-form input {\r\n        font-size: 15px;\r\n        max-width: 100%;\r\n        padding: 15px 45px;\r\n    }\r\n    .login-inner .form-details {\r\n        padding: 25px;\r\n    }\r\n    .login-inner .login-form label {\r\n        margin-bottom: 20px;\r\n        width: 100%;\r\n    }\r\n    .login-inner .form-btn {\r\n        margin: 0;\r\n        max-width: 180px;\r\n    }\r\n    .tab-content .tab-pane {\r\n        padding: 20px 0;\r\n    }\r\n    #navigation .navi a {\r\n        font-size: 14px;\r\n        padding: 20px;\r\n        text-align: center;\r\n    }\r\n    #navigation .navi i {\r\n        margin-right: 0px;\r\n    }\r\n    #navigation .navi a:hover,\r\n    #navigation .navi .active a {\r\n        background: #122143 none repeat scroll 0 0;\r\n        border-left: none;\r\n        display: block;\r\n        padding-left: 20px;\r\n    }\r\n    header .header-top img {\r\n        max-width: 38px !important;\r\n    }\r\n    .v-align header {\r\n        padding: 12px 15px;\r\n    }\r\n    header .header-top li {\r\n        padding-left: 13px;\r\n        padding-right: 6px;\r\n    }\r\n    .navbar-default .navbar-toggle {\r\n        border-color: rgba(0, 0, 0, 0);\r\n    }\r\n    .navbar-header .navbar-toggle {\r\n        float: left;\r\n        margin: 0;\r\n        padding: 0;\r\n        top: 12px;\r\n    }\r\n    button,\r\n        html [type=\"button\"],\r\n        [type=\"reset\"],\r\n        [type=\"submit\"] {\r\n            outline: medium none;\r\n    }\r\n    .user-dashboard .sales h2 {\r\n        color: #8492af;\r\n        float: left;\r\n        font-size: 14px;\r\n        font-weight: 600;\r\n        margin: 0;\r\n        padding: 13px 0 0;\r\n}\r\n    .user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\n        font-size: 11px;\r\n}\r\n    .user-dashboard .sales button {\r\n        font-size: 11px;\r\n        padding-right: 23px;\r\n}  \r\n    .user-dashboard .sales h2 {\r\n    font-size: 12px;\r\n}\r\n.gutter{\r\n    padding: 0;\r\n}\r\n}\r\n\r\n@media only screen and (max-device-width: 992px) {\r\n    header .header-top li {\r\n        padding-left: 20px !important;\r\n        padding-right: 0;\r\n}\r\n    header .logo img {\r\n        max-width: 125px !important;\r\n}\r\n\r\n}\r\n\r\n@media only screen and (min-device-width: 767px) and (max-device-width: 998px){\r\n      .user-dashboard .header-top {\r\n        padding-top: 5px;\r\n}\r\n    .user-dashboard .header-rightside {\r\n        display: inline-block;\r\n        float: left;\r\n        width: 100%;\r\n}\r\n    .user-dashboard .header-rightside .header-top img {\r\n        max-width: 41px !important;\r\n} \r\n    .user-dashboard .sales button {\r\n    font-size: 10px;\r\n}\r\n    .user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\n    font-size: 12px;\r\n}\r\n    .user-dashboard .sales h2 {\r\n    font-size: 15px;\r\n}\r\n}\r\n\r\n@media only screen and (min-device-width:998px) and (max-device-width: 1350px){\r\n        #navigation .logo img {\r\n    max-width: 130px;\r\n    padding: 16px 0 17px;\r\n    width: 100%;\r\n}\r\n}"

/***/ }),

/***/ "./src/app/components/cart/payment/payment.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/cart/payment/payment.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\r\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\r\n<meta name=\"viewport\" content=\"width=device-width, user-scalable=no\"> \r\n\r\n\r\n<div  class=\"dashboard\">\r\n<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css\" rel=\"stylesheet\" integrity=\"sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1\" crossorigin=\"anonymous\">\r\n    <div class=\"container-fluid display-table\">\r\n        <div class=\"row display-table-row\">\r\n            <div class=\"col-md-2 col-sm-1 hidden-xs display-table-cell v-align box\" id=\"navigation\">\r\n                <div class=\"logo\">\r\n                    <a hef=\"home.html\"><img src=\"http://automablu.com.br/wp-content/uploads/2018/03/LOGOCOLORIDA.png\" alt=\"merkery_logo\" class=\"hidden-xs hidden-sm\">\r\n                        <img src=\"http://jskrishna.com/work/merkury/images/circle-logo.png\" alt=\"merkery_logo\" class=\"visible-xs visible-sm circle-logo\">\r\n                    </a>\r\n                </div>\r\n                <div class=\"navi\">\r\n                    <ul>\r\n                            <li class=\"active\"><a routerLink=\"/home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Home</span></a></li>\r\n                            <li><a routerLink=\"/search-client\"> <i class=\"fa fa-tasks\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\"> Iniciar Venda </span></a></li>\r\n                            <li><a routerLink=\"/clients\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Clientes </span></a></li>\r\n                            <li><a routerLink=\"/products\"><i class=\"fa fa-list-ol\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Produtos </span></a></li>\r\n                            <li><a routerLink=\"/employees\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Funcionários </span></a></li>\r\n                            <li><a routerLink=\"/home\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Estatísticas</span></a></li>\r\n                            <li><a routerLink=\"/settings\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\" > Configurações</span></a></li>\r\n                            </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-10 col-sm-11 display-table-cell v-align\">\r\n                <div class=\"row\">\r\n                    <header>\r\n                        <div class=\"col-md-7\">\r\n                            <nav class=\"navbar-default pull-left\">\r\n                                <div class=\"navbar-header\">\r\n                                    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"offcanvas\" data-target=\"#side-menu\" aria-expanded=\"false\">\r\n                                        <span class=\"sr-only\">Toggle navigation</span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                    </button>\r\n                                </div>\r\n                            </nav>\r\n                            <div class=\"search hidden-xs hidden-sm\">\r\n                                <input type=\"text\" placeholder=\"Busca\" id=\"search\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"header-rightside\">\r\n                                <ul class=\"list-inline header-top pull-right\">\r\n                                    <li><a href=\"#\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a></li>\r\n                                    <li>\r\n                                        <a href=\"#\" class=\"icon-info\">\r\n                                            <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\r\n                                            <span class=\"label label-primary\">3</span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li class=\"dropdown\">\r\n                                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">User\r\n                                            <b class=\"caret\"></b></a>\r\n                                        <ul class=\"dropdown-menu\">\r\n                                            <li>\r\n                                                <div class=\"navbar-content\">\r\n                                                    <span>Ivan </span>\r\n                                                    <p class=\"text-muted small\">\r\n                                                        ivanalves94@gmail.com\r\n                                                    </p>\r\n                                                    <div class=\"divider\">\r\n                                                    </div>\r\n                                                    <a href=\"#\" class=\"view btn-sm active\">View Profile</a>\r\n                                                </div>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </header>\r\n                </div>\r\n\r\n                <div class=\"user-dashboard\">\r\n                    \r\n\r\n\r\n\r\n\r\n\r\n\r\n<h1 class=\"text-center action\">Formas de Pagamentos</h1>\r\n<div class=\"row action\">\r\n    <div class=\"col-sm-8 col-md-6 text-center\">\r\n        <div class=\"img-circle\">\r\n            <img src=\"assets/imagens/card.png\" class=\"image-payment\">\r\n            <div class=\"caption\">\r\n                <button type=\"button\" class=\"btn btn-info btn-lg\" [routerLink]=\"['/typecard']\">Cartão\r\n                    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-8 col-md-6 text-center\">\r\n        <div class=\"img-circle\">\r\n            <img src=\"assets/imagens/money.png\" class=\"image-payment\">\r\n            <div class=\"caption\">\r\n                <button type=\"button\" class=\"btn btn-success btn-lg\" [routerLink]=\"['/detail-money']\">Dinheiro\r\n                    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-sm-8 col-md-12 text-center\">\r\n        <div class=\"img-circle\">\r\n            <img src=\"assets/imagens/cart.png\" class=\"image-payment\">\r\n            <div class=\"caption\">\r\n                <button type=\"button\" class=\"btn btn-danger btn-lg\" (click)=\"cancelarCompra()\">Cancelar Venda\r\n                    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n                 </div>\r\n            </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div id=\"add_project\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n\r\n            <div class=\"modal-content\">\r\n                \r\n                <div class=\"modal-body\">\r\n                       \r\n                            <input type=\"text\" placeholder=\"Project Title\" name=\"name\">\r\n                            <input type=\"text\" placeholder=\"Post of Post\" name=\"mail\">\r\n                            <input type=\"text\" placeholder=\"Author\" name=\"passsword\">\r\n                            <textarea placeholder=\"Desicrption\"></textarea>\r\n                    </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"cancel\" data-dismiss=\"modal\">Close</button>\r\n                    <button type=\"button\" class=\"add-project\" data-dismiss=\"modal\">Save</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/cart/payment/payment.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/cart/payment/payment.component.ts ***!
  \**************************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/cart.service */ "./src/app/services/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(router, cartService) {
        this.router = router;
        this.cartService = cartService;
    }
    // limpa o carrinho de compras
    PaymentComponent.prototype.cancelarCompra = function () {
        if (confirm('Deseja cancelar a compra?')) {
            this.cartService.cleanCart();
            this.router.navigate(['home']);
        }
    };
    PaymentComponent.prototype.ngOnInit = function () {
    };
    PaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/components/cart/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.css */ "./src/app/components/cart/payment/payment.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/components/cart/typecard/typecard.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/cart/typecard/typecard.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".action {\r\n    margin-top: 40px;\r\n}\r\n\r\n.image {\r\n    width: 200px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.image-cart {\r\n    margin-bottom: 20px;\r\n    margin-top: 20px;\r\n    width: 300px;\r\n}\r\n\r\n.button{\r\n    margin-left: 20px\r\n}\r\n\r\n.action {\r\n    margin-top: 40px;\r\n}\r\n\r\n.image-money {\r\n    width: 50px;\r\n}\r\n\r\n.dashboard{\r\n    \r\n    position:absolute;\r\n    top:0;\r\n    left:0;\r\n    z-index:11;\r\n    width:100%;\r\n    height:100%;\r\n   \r\n}\r\n\r\n.image {\r\nwidth: 200px;\r\nmargin-bottom: 10px;\r\n}\r\n\r\n.image-config {\r\nmargin-bottom: 40px;\r\n}\r\n\r\n/*Main CSS*/\r\n\r\n/*Login Signup Page*/\r\n\r\na:focus,a:hover,a{\r\noutline:none;\r\ntext-decoration: none;\r\n}\r\n\r\nli,ul{\r\nlist-style: none;\r\npadding: 0;\r\nmargin: 0;\r\n}\r\n\r\n.header-top i {\r\nfont-size: 18px;\r\n}\r\n\r\n.bg-image {\r\nposition: relative;\r\nwidth: 100%;\r\nheight: 100vh;\r\ndisplay: table;\r\n}\r\n\r\n.login-header {\r\ndisplay: inline-block;\r\nwidth: 100%;\r\nbackground: #0e1a35;\r\n}\r\n\r\n.login-signup {\r\ndisplay: table-cell;\r\nvertical-align: middle;\r\nwidth: 100%;\r\n}\r\n\r\n.login-logo img {\r\ncursor: pointer;\r\nmax-width: 171px;\r\npadding: 23px 15px 22px;\r\nwidth: 100%;\r\n}\r\n\r\n.login-header .navbar-right {\r\nmargin-right: 0px;\r\n}\r\n\r\n.login-header .nav-tabs > li.active > a,\r\n.login-header .nav-tabs > li.active > a:focus,\r\n.login-header .nav-tabs > li.active > a:hover {\r\nbackground-color: transparent;\r\nborder: none;\r\ncolor: #fff;\r\n}\r\n\r\n.login-header .nav-tabs > li > a {\r\nborder: medium none;\r\nborder-radius: 0;\r\nfont-size: 14px;\r\nfont-weight: 500;\r\nline-height: 48px;\r\npadding: 15px 30px;\r\ncolor: #fff;\r\n}\r\n\r\n.login-header .nav-tabs {\r\nborder-bottom: none;\r\n}\r\n\r\n.login-header .nav-tabs > li {\r\nmargin-bottom: 0px;\r\n}\r\n\r\n.login-header .nav > li > a:focus,\r\n.login-header .nav > li > a:hover {\r\nbackground: none;\r\ntext-decoration: none;\r\n}\r\n\r\n.login-header .nav-tabs > li.active {\r\nborder-bottom: 6px solid #5584ff;\r\n}\r\n\r\n.login-inner h1 {\r\ncolor: #8492af;\r\nfont-size: 48px;\r\nfont-weight: 300;\r\ntext-align: center;\r\nmargin-top: 0;\r\nmargin-bottom: 20px;\r\n}\r\n\r\n.login-inner h1 span {\r\ncolor: #5584ff;\r\n}\r\n\r\n.login-form {\r\ntext-align: center;\r\n}\r\n\r\n.login-form input {\r\n-moz-border-bottom-colors: none;\r\n-moz-border-left-colors: none;\r\n-moz-border-right-colors: none;\r\n-moz-border-top-colors: none;\r\nbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\nborder-color: -moz-use-text-color -moz-use-text-color #d4d9e3;\r\n-o-border-image: none;\r\n   border-image: none;\r\nborder-style: none none solid;\r\nborder-width: medium medium 1px;\r\nfont-size: 13px;\r\nfont-weight: 300;\r\nwidth: 100%;\r\ncolor: #8492af;\r\npadding: 15px 50px;\r\nfont-size: 17px;\r\nmax-width: 550px;\r\n}\r\n\r\n.login-form label {\r\nmargin-bottom: 30px;\r\nwidth: 100%;\r\n}\r\n\r\n.login-signup .tab-content {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nbox-shadow: 0 6px 12px rgba(0, 0, 0, 0.176);\r\ndisplay: inline-block;\r\nmargin-top: -8px;\r\nwidth: 100%;\r\n}\r\n\r\n.form-btn {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-weight: 400;\r\nmax-width: 250px;\r\npadding: 10px 0;\r\nposition: relative;\r\nwidth: 100%;\r\nmargin: 40px 0;\r\nbox-shadow: 0 2px 8px #d2d2d2;\r\n-moz-box-shadow: 0 2px 8px #d2d2d2;\r\n-webkit-box-shadow: 0 2px 8px #d2d2d2;\r\n}\r\n\r\n.form-btn::before {\r\ncontent: \"\";\r\nfont-family: FontAwesome;\r\nposition: absolute;\r\nright: 17px;\r\ntop: 9px;\r\n}\r\n\r\n.form-details {\r\npadding: 35px 0;\r\n}\r\n\r\n.tab-content .tab-pane {\r\npadding: 70px 0;\r\n}\r\n\r\n/*Login Signup Page*/\r\n\r\n/*Home Page*/\r\n\r\n.home {\r\nbackground: #f6f7fa;\r\n}\r\n\r\n#navigation {\r\nbackground: #0e1a35;\r\n}\r\n\r\n#navigation {\r\npadding: 0;\r\n}\r\n\r\n.display-table {\r\ndisplay: table;\r\npadding: 0;\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n\r\n.display-table-row {\r\ndisplay: table-row;\r\nheight: 100%;\r\n}\r\n\r\n.display-table-cell {\r\ndisplay: table-cell;\r\nfloat: none;\r\nheight: 100%;\r\n}\r\n\r\n.v-align {\r\nvertical-align: top;\r\n}\r\n\r\n.logo img {\r\nmax-width: 180px;\r\npadding: 16px 0 17px;\r\nwidth: 100%;\r\n}\r\n\r\n.header-top {\r\nmargin: 0;\r\npadding-top: 2px;\r\n}\r\n\r\n.header-top img {\r\nborder-radius: 50%;\r\nmax-width: 48px !important;\r\nwidth: 100%;\r\n}\r\n\r\n.add-project {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 27px 10px 45px;\r\nposition: relative;\r\n}\r\n\r\n.header-rightside .nav > li > a:focus,\r\n.header-rightside .nav > li > a:hover {\r\nbackground: none;\r\ntext-decoration: none;\r\n}\r\n\r\n.add-project::before {\r\ncontent: \"\";\r\n;\r\nheight: 12px;\r\nleft: 17px;\r\nposition: absolute;\r\ntop: 12px;\r\nwidth: 12px;\r\n}\r\n\r\n.add-project:hover {\r\ncolor: #ffffff;\r\n}\r\n\r\n.header-top i {\r\ncolor: #0e1a35;\r\n}\r\n\r\n.icon-info {\r\nposition: relative;\r\n}\r\n\r\n.navi i {\r\nfont-size: 20px;\r\n}\r\n\r\n.label.label-primary {\r\nborder-radius: 50%;\r\nfont-size: 9px;\r\nleft: 8px;\r\nposition: absolute;\r\ntop: -9px;\r\n}\r\n\r\n.icon-info .label {\r\nborder: 2px solid #ffffff;\r\nfont-weight: 500;\r\npadding: 3px 5px;\r\ntext-align: center;\r\n}\r\n\r\n.header-top li {\r\ndisplay: inline-block;\r\ntext-align: center;\r\n}\r\n\r\n.header-top .dropdown-toggle {\r\ncolor: #0e1a35;\r\n}\r\n\r\n.header-top .dropdown-menu {\r\nborder: medium none;\r\nleft: -85px;\r\npadding: 17px;\r\n}\r\n\r\n.view {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\ndisplay: inline-block;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\nmargin-top: 10px;\r\npadding: 10px 15px;\r\n}\r\n\r\n.navbar-content > span {\r\nfont-size: 13px;\r\nfont-weight: 700;\r\n}\r\n\r\n.img-responsive {\r\nwidth: 100%;\r\n}\r\n\r\n#navigation{\r\ntransition: all 0.5s ease;\r\n}\r\n\r\n.search input {\r\nborder: none;\r\nfont-size: 15px;\r\npadding: 15px 9px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\n\r\nheader {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nbox-shadow: 0 1px 12px rgba(0, 0, 0, 0.04);\r\ndisplay: inline-block !important;\r\nline-height: 23px;\r\npadding: 15px;\r\ntransition: all 0.5s ease 0s;\r\nwidth: 100%;\r\ntransition: all 0.5s ease;\r\n}\r\n\r\n.logo {\r\ntext-align: center;\r\n}\r\n\r\n.navi a {\r\nborder-bottom: 1px solid #0d172e;\r\nborder-top: 1px solid #0d172e;\r\ncolor: #ffffff;\r\ndisplay: block;\r\nfont-size: 17px;\r\nfont-weight: 500;\r\npadding: 28px 20px;\r\ntext-decoration: none;\r\n}\r\n\r\n.navi i {\r\nmargin-right: 15px;\r\ncolor: #5584ff;\r\n}\r\n\r\n.navi .active a {\r\nbackground: #122143;\r\nborder-left: 5px solid #5584ff;\r\npadding-left: 15px;\r\n}\r\n\r\n.navi a:hover {\r\nbackground: #122143 none repeat scroll 0 0;\r\nborder-left: 5px solid #5584ff;\r\ndisplay: block;\r\npadding-left: 15px;\r\n}\r\n\r\n.navbar-default {\r\nbackground-color: #ffffff;\r\nborder-color: #ffffff;\r\n}\r\n\r\n.navbar-toggle {\r\nborder: none;\r\n}\r\n\r\n.navbar-default .navbar-toggle:focus,\r\n.navbar-default .navbar-toggle:hover {\r\nbackground-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n.navbar-default .navbar-toggle .icon-bar {\r\nbackground-color: #0e1a35;\r\n}\r\n\r\n.circle-logo {\r\nmargin: 0 auto;\r\nmax-width: 30px !important;\r\ntext-align: center;\r\n}\r\n\r\n.hidden-xs{\r\ntransition: all 0.5s ease;\r\n}\r\n\r\n.user-dashboard {\r\npadding: 0 20px;\r\n}\r\n\r\n.user-dashboard h1 {\r\ncolor: #0e1a35;\r\nfont-size: 30px;\r\nfont-weight: 500;\r\nmargin: 0;\r\npadding: 21px 0;\r\n}\r\n\r\n.sales {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nborder: 1px solid #d4d9e3;\r\ndisplay: inline-block;\r\npadding: 15px;\r\nwidth: 100%;\r\n}\r\n\r\n.sales button {\r\nbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\nborder: 1px solid #dadee7;\r\nborder-radius: 100px;\r\nfont-size: 15px;\r\nletter-spacing: 0.5px;\r\npadding-right: 32px;\r\ncolor: #0e1a35;\r\n}\r\n\r\n.sales button::before {\r\ncontent: \"\";\r\nfont-family: FontAwesome;\r\nposition: absolute;\r\nright: 12px;\r\ntop: 11px;\r\n}\r\n\r\n.sales  .btn-group {\r\nfloat: right;\r\n}\r\n\r\n.sales h2 {\r\ncolor: #8492af;\r\nfloat: left;\r\nfont-size: 21px;\r\nfont-weight: 600;\r\nmargin: 0;\r\npadding: 9px 0 0;\r\n}\r\n\r\n.btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\nfont-size: 15px;\r\nfont-weight: 600;\r\nletter-spacing: 0.5px;\r\n}\r\n\r\n.sales .dropdown-menu{\r\nmargin: 0px;\r\npadding: 0px;\r\nborder: 0px;\r\nborder-radius: 8px;\r\nwidth: 100%;\r\ncolor: #0e1a35;\r\n}\r\n\r\n.sales .btn-group.open .dropdown-toggle, .btn.active, .btn:active{\r\nbox-shadow: none;\r\n}\r\n\r\n.sales .dropdown-menu > a {\r\ncolor: #0e1a35;\r\ndisplay: inline-block;\r\nfont-weight: 800;\r\npadding: 9px 0;\r\ntext-align: center;\r\nwidth: 100%;\r\n}\r\n\r\n#my-cool-chart svg {\r\nwidth: 100%;\r\n}\r\n\r\n.sales .dropdown-menu > a:hover{\r\ncolor: #5584FF;   \r\n}\r\n\r\n.shield-buttons {\r\ndisplay: none;\r\n}\r\n\r\n.close, .close:focus, .close:hover {\r\ncolor: #fff;;\r\nopacity: 1;\r\ntext-shadow: none;\r\n}\r\n\r\n.modal-body input {\r\nborder: 1px solid #d4d9e3;\r\nfont-size: 14px;\r\nfont-weight: 300;\r\nmargin: 5px 0;\r\npadding: 14px 10px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\n\r\n.modal-body textarea {\r\nborder: 1px solid #d4d9e3;\r\nfont-size: 14px;\r\nfont-weight: 300;\r\nheight: 200px;\r\nmargin-top: 5px;\r\npadding: 9px 10px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\n\r\n.modal-header.login-header h4 {\r\ncolor: #ffffff;\r\n}\r\n\r\n.modal-footer .add-project {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 30px;\r\nposition: relative;\r\n}\r\n\r\n.modal-footer .add-project::before{display: none;}\r\n\r\n.modal-footer {\r\nborder: 0 none;\r\npadding: 10px 15px 26px;\r\ntext-align: right;\r\n}\r\n\r\n.cancel {\r\nbackground: #0E1A35     ;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 30px;\r\nposition: relative;\r\n\r\n}\r\n\r\n.modal{\r\ntop: 20%; \r\n}\r\n\r\n.modal-header .close {\r\nmargin-top: 2px;\r\n}\r\n\r\n.search input:focus{\r\nborder-bottom: 1px solid #BDC4D4;\r\nline-height:22px;\r\ntransition: 0.1s all;\r\n}\r\n\r\n.modal-header.login-header {\r\nborder-top-left-radius: 5px;\r\nborder-top-right-radius: 5px;\r\n}\r\n\r\n/*Main CSS*/\r\n\r\n@media only screen and (max-device-width: 767px) {\r\n.login-logo img {\r\n    margin: 0 auto;\r\n}\r\n.login-details .nav-tabs > li {\r\n    text-align: center;\r\n    width: 50%;\r\n}\r\n.login-signup .login-inner h1 {\r\n    font-size: 26px;\r\n    margin-bottom: 0;\r\n    margin-top: 10px;\r\n}\r\n.login-inner .login-form input {\r\n    font-size: 15px;\r\n    max-width: 100%;\r\n    padding: 15px 45px;\r\n}\r\n.login-inner .form-details {\r\n    padding: 25px;\r\n}\r\n.login-inner .login-form label {\r\n    margin-bottom: 20px;\r\n    width: 100%;\r\n}\r\n.login-inner .form-btn {\r\n    margin: 0;\r\n    max-width: 180px;\r\n}\r\n.tab-content .tab-pane {\r\n    padding: 20px 0;\r\n}\r\n#navigation .navi a {\r\n    font-size: 14px;\r\n    padding: 20px;\r\n    text-align: center;\r\n}\r\n#navigation .navi i {\r\n    margin-right: 0px;\r\n}\r\n#navigation .navi a:hover,\r\n#navigation .navi .active a {\r\n    background: #122143 none repeat scroll 0 0;\r\n    border-left: none;\r\n    display: block;\r\n    padding-left: 20px;\r\n}\r\nheader .header-top img {\r\n    max-width: 38px !important;\r\n}\r\n.v-align header {\r\n    padding: 12px 15px;\r\n}\r\nheader .header-top li {\r\n    padding-left: 13px;\r\n    padding-right: 6px;\r\n}\r\n.navbar-default .navbar-toggle {\r\n    border-color: rgba(0, 0, 0, 0);\r\n}\r\n.navbar-header .navbar-toggle {\r\n    float: left;\r\n    margin: 0;\r\n    padding: 0;\r\n    top: 12px;\r\n}\r\nbutton,\r\n    html [type=\"button\"],\r\n    [type=\"reset\"],\r\n    [type=\"submit\"] {\r\n        outline: medium none;\r\n}\r\n.user-dashboard .sales h2 {\r\n    color: #8492af;\r\n    float: left;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    margin: 0;\r\n    padding: 13px 0 0;\r\n}\r\n.user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\n    font-size: 11px;\r\n}\r\n.user-dashboard .sales button {\r\n    font-size: 11px;\r\n    padding-right: 23px;\r\n}  \r\n.user-dashboard .sales h2 {\r\nfont-size: 12px;\r\n}\r\n.gutter{\r\npadding: 0;\r\n}\r\n}\r\n\r\n@media only screen and (max-device-width: 992px) {\r\nheader .header-top li {\r\n    padding-left: 20px !important;\r\n    padding-right: 0;\r\n}\r\nheader .logo img {\r\n    max-width: 125px !important;\r\n}\r\n\r\n}\r\n\r\n@media only screen and (min-device-width: 767px) and (max-device-width: 998px){\r\n  .user-dashboard .header-top {\r\n    padding-top: 5px;\r\n}\r\n.user-dashboard .header-rightside {\r\n    display: inline-block;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.user-dashboard .header-rightside .header-top img {\r\n    max-width: 41px !important;\r\n} \r\n.user-dashboard .sales button {\r\nfont-size: 10px;\r\n}\r\n.user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\nfont-size: 12px;\r\n}\r\n.user-dashboard .sales h2 {\r\nfont-size: 15px;\r\n}\r\n}\r\n\r\n@media only screen and (min-device-width:998px) and (max-device-width: 1350px){\r\n    #navigation .logo img {\r\nmax-width: 130px;\r\npadding: 16px 0 17px;\r\nwidth: 100%;\r\n}\r\n}   "

/***/ }),

/***/ "./src/app/components/cart/typecard/typecard.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/cart/typecard/typecard.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n\r\n\r\n\r\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\r\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\r\n<meta name=\"viewport\" content=\"width=device-width, user-scalable=no\"> \r\n\r\n\r\n<div  class=\"dashboard\">\r\n<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css\" rel=\"stylesheet\" integrity=\"sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1\" crossorigin=\"anonymous\">\r\n    <div class=\"container-fluid display-table\">\r\n        <div class=\"row display-table-row\">\r\n            <div class=\"col-md-2 col-sm-1 hidden-xs display-table-cell v-align box\" id=\"navigation\">\r\n                <div class=\"logo\">\r\n                    <a hef=\"home.html\"><img src=\"http://automablu.com.br/wp-content/uploads/2018/03/LOGOCOLORIDA.png\" alt=\"merkery_logo\" class=\"hidden-xs hidden-sm\">\r\n                        <img src=\"http://jskrishna.com/work/merkury/images/circle-logo.png\" alt=\"merkery_logo\" class=\"visible-xs visible-sm circle-logo\">\r\n                    </a>\r\n                </div>\r\n                <div class=\"navi\">\r\n                    <ul>\r\n                            <li><a routerLink=\"/home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Home</span></a></li>\r\n                            <li><a routerLink=\"/search-client\"> <i class=\"fa fa-tasks\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\"> Iniciar Venda </span></a></li>\r\n                            <li class=\"active\" ><a routerLink=\"/clients\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Clientes </span></a></li>\r\n                            <li><a routerLink=\"/products\"><i class=\"fa fa-list-ol\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Produtos </span></a></li>\r\n                            <li><a routerLink=\"/employees\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Funcionários </span></a></li>\r\n                            <li><a routerLink=\"/home\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Estatísticas</span></a></li>\r\n                            <li><a routerLink=\"/settings\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\" > Configurações</span></a></li>\r\n                        </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-10 col-sm-11 display-table-cell v-align\">\r\n                <div class=\"row\">\r\n                    <header>\r\n                        <div class=\"col-md-7\">\r\n                            <nav class=\"navbar-default pull-left\">\r\n                                <div class=\"navbar-header\">\r\n                                    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"offcanvas\" data-target=\"#side-menu\" aria-expanded=\"false\">\r\n                                        <span class=\"sr-only\">Toggle navigation</span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                    </button>\r\n                                </div>\r\n                            </nav>\r\n                            <div class=\"search hidden-xs hidden-sm\">\r\n                                <input type=\"text\" placeholder=\"Busca\" id=\"search\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"header-rightside\">\r\n                                <ul class=\"list-inline header-top pull-right\">\r\n                                    <li><a href=\"#\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a></li>\r\n                                    <li>\r\n                                        <a href=\"#\" class=\"icon-info\">\r\n                                            <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\r\n                                            <span class=\"label label-primary\">3</span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li class=\"dropdown\">\r\n                                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">User\r\n                                            <b class=\"caret\"></b></a>\r\n                                        <ul class=\"dropdown-menu\">\r\n                                            <li>\r\n                                                <div class=\"navbar-content\">\r\n                                                    <span>Ivan </span>\r\n                                                    <p class=\"text-muted small\">\r\n                                                        ivanalves94@gmail.com\r\n                                                    </p>\r\n                                                    <div class=\"divider\">\r\n                                                    </div>\r\n                                                    <a href=\"#\" class=\"view btn-sm active\">View Profile</a>\r\n                                                </div>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </header>\r\n                </div>\r\n\r\n                <div class=\"user-dashboard\">\r\n                \r\n\r\n\r\n\r\n\r\n\r\n\r\n<popup #popupCredito (confirmClick)=\"Confirm()\" (cancelClick)=\"Cancel()\">\r\n  Insira o cartão de crédito\r\n</popup>\r\n<popup #popupDebito (confirmClick)=\"Confirm()\" (cancelClick)=\"Cancel()\">\r\nInsira o cartão de crédito\r\n</popup>\r\n<popup #popupFinalizado (confirmClick)=\"Voltar()\" (cancelClick)=\"Cancel()\">\r\n  Compra finalizada com sucesso! Imprimindo nota fiscal . . .\r\n</popup>\r\n\r\n<h1 class=\"text-center action\">Tipo de Pagamento</h1>\r\n<div class=\"col-sm-8 col-md-6 text-center\">\r\n<div class=\"img-circle\">\r\n  <img src=\"assets/imagens/debito.png\" class=\"image image-cart\">\r\n  <div class=\"caption\">\r\n    <button type=\"button\" class=\"btn btn-success btn-lg\" (click)=\"debito()\">Débito\r\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n    </button>\r\n  </div>\r\n</div>\r\n</div>\r\n<div class=\"col-sm-8 col-md-6 text-center\">\r\n<div class=\"img-circle\">\r\n  <img src=\"assets/imagens/credito.png\" class=\"image image-cart\">\r\n  <div class=\"caption\">\r\n    <button type=\"button\" class=\"btn btn-success btn-lg\" (click)=\"credito()\">Crédito\r\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n    </button>\r\n  </div>\r\n</div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-8 col-md-12 text-center\">\r\n      <div class=\"img-circle\">\r\n          <div class=\"caption\">\r\n              <button type=\"button\" class=\"btn btn-success btn-lg\" (click)=\"finalizarCompra()\" *ngIf=\"optionCard\">Finalizar Compra\r\n                  <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n              </button>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n                \r\n                \r\n                \r\n                </div>\r\n                    \r\n            </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div id=\"add_project\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n\r\n            <div class=\"modal-content\">\r\n                \r\n                <div class=\"modal-body\">\r\n                       \r\n                            <input type=\"text\" placeholder=\"Project Title\" name=\"name\">\r\n                            <input type=\"text\" placeholder=\"Post of Post\" name=\"mail\">\r\n                            <input type=\"text\" placeholder=\"Author\" name=\"passsword\">\r\n                            <textarea placeholder=\"Desicrption\"></textarea>\r\n                    </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"cancel\" data-dismiss=\"modal\">Close</button>\r\n                    <button type=\"button\" class=\"add-project\" data-dismiss=\"modal\">Save</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/cart/typecard/typecard.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/cart/typecard/typecard.component.ts ***!
  \****************************************************************/
/*! exports provided: TypecardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypecardComponent", function() { return TypecardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_opd_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-opd-popup */ "./node_modules/ng2-opd-popup/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TypecardComponent = /** @class */ (function () {
    function TypecardComponent(cartService, router) {
        this.cartService = cartService;
        this.router = router;
        this.optionCard = false;
    }
    // carrega o carrinho de compras ao iniciar o componente
    TypecardComponent.prototype.ngOnInit = function () {
        this.cart = this.cartService.getCart();
    };
    TypecardComponent.prototype.credito = function () {
        this.popupCredito.options = {
            confirmBtnContent: 'Ok',
            cancleBtnContent: 'Cancelar',
            cancleBtnClass: 'btn btn-default',
            confirmBtnClass: 'btn btn-default',
            color: '#5cb85c',
            header: 'Cartão de Crédito selecionado.',
            widthProsentage: 60,
            animation: 'fadeInUp'
        };
        this.popupCredito.show(this.popupCredito.options);
    };
    TypecardComponent.prototype.debito = function () {
        this.popupDebito.options = {
            confirmBtnContent: 'Ok',
            cancleBtnContent: 'Cancelar',
            cancleBtnClass: 'btn btn-default',
            confirmBtnClass: 'btn btn-default',
            color: '#5cb85c',
            header: 'Cartão de Débito selecionado.',
            widthProsentage: 60,
            animation: 'fadeInUp'
        };
        this.popupDebito.show(this.popupDebito.options);
    };
    TypecardComponent.prototype.finalizarCompra = function () {
        this.popupFinalizado.options = {
            confirmBtnContent: 'Ok',
            cancleBtnContent: 'Cancelar',
            cancleBtnClass: 'btn btn-default',
            confirmBtnClass: 'btn btn-default',
            color: '#5cb85c',
            header: 'Sucesso!',
            widthProsentage: 60,
            animation: 'fadeInUp'
        };
        this.popupFinalizado.show(this.popupFinalizado.options);
    };
    TypecardComponent.prototype.Confirm = function () {
        this.popupDebito.hide();
        this.popupCredito.hide();
        this.optionCard = true;
    };
    TypecardComponent.prototype.Cancel = function () {
        this.popupDebito.hide();
        this.popupCredito.hide();
        this.optionCard = false;
        /*this.popupEfetuarCompra.hide();*/
    };
    TypecardComponent.prototype.Voltar = function () {
        this.cartService.cleanCart();
        //this.router.navigate(['cart']);
        this.router.navigate(['search-client']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('popupCredito'),
        __metadata("design:type", ng2_opd_popup__WEBPACK_IMPORTED_MODULE_3__["Popup"])
    ], TypecardComponent.prototype, "popupCredito", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('popupDebito'),
        __metadata("design:type", ng2_opd_popup__WEBPACK_IMPORTED_MODULE_3__["Popup"])
    ], TypecardComponent.prototype, "popupDebito", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('popupFinalizado'),
        __metadata("design:type", ng2_opd_popup__WEBPACK_IMPORTED_MODULE_3__["Popup"])
    ], TypecardComponent.prototype, "popupFinalizado", void 0);
    TypecardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typecard',
            template: __webpack_require__(/*! ./typecard.component.html */ "./src/app/components/cart/typecard/typecard.component.html"),
            styles: [__webpack_require__(/*! ./typecard.component.css */ "./src/app/components/cart/typecard/typecard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TypecardComponent);
    return TypecardComponent;
}());



/***/ }),

/***/ "./src/app/components/client/edit-item/edit-item-client.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/client/edit-item/edit-item-client.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.login2background{    \r\n    background-repeat:repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n}\r\n.loginbox{  \r\n    background: white;\r\n    color: black;    \r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-right: -50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%); \r\n    padding: 20px;   \r\n    box-shadow: 0 8px 50px -2px #000;\r\n    border-radius:5px;\r\n\r\n}\r\n.logo{\r\n    width: 130px; \r\n    height: 55px;\r\n    margin-left: 10%;\r\n}\r\n@media (max-width:767px) {\r\n    .loginbox{ \r\n        margin-top: 5%;\r\n    }    \r\n}\r\n.loginbox_content{\r\n    padding:5% 11% 5% 11%;\r\n\r\n}\r\n.singtext{\r\n    font-family: \"Open Sans\",sans-serif;\r\n    font-size: 27px;  \r\n    color:  #42a5f5;\r\n    float: right;\r\n    padding-right: 25%;\r\n}\r\n.submit-btn{\r\n    float: right;\r\n    background-color: #42a5f5;\r\n    margin-right: 28%;\r\n    color: white;\r\n}\r\n.forgotpassword{\r\n    padding-left: 10%;\r\n}\r\n@media (max-width:800px) {\r\n    .submit-btn{\r\n        \r\n        margin-right: 23%;\r\n    }\r\n\r\n   \r\n}\r\n.background-image {\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n  \r\n    display: block;\r\n    background-image: url('http://666a658c624a3c03a6b2-25cda059d975d2f318c03e90bcf17c40.r92.cf1.rackcdn.com/unsplash_527bf56961712_1.JPG');\r\n    width: 1200px;\r\n    height: 800px;\r\n  \r\n    -webkit-filter: blur(5px);\r\n    -moz-filter: blur(5px);\r\n    -o-filter: blur(5px);\r\n    -ms-filter: blur(5px);\r\n    filter: blur(5px);\r\n  }\r\n.dashboard{\r\n    \r\n    position:absolute;\r\n    top:0;\r\n    left:0;\r\n    z-index:11;\r\n    width:100%;\r\n    height:100%;\r\n   \r\n}\r\n.image {\r\nwidth: 200px;\r\nmargin-bottom: 10px;\r\n}\r\n.image-config {\r\nmargin-bottom: 40px;\r\n}\r\n/*Main CSS*/\r\n/*Login Signup Page*/\r\na:focus,a:hover,a{\r\noutline:none;\r\ntext-decoration: none;\r\n}\r\nli,ul{\r\nlist-style: none;\r\npadding: 0;\r\nmargin: 0;\r\n}\r\n.header-top i {\r\nfont-size: 18px;\r\n}\r\n.bg-image {\r\nposition: relative;\r\nwidth: 100%;\r\nheight: 100vh;\r\ndisplay: table;\r\n}\r\n.login-header {\r\ndisplay: inline-block;\r\nwidth: 100%;\r\nbackground: #0e1a35;\r\n}\r\n.login-signup {\r\ndisplay: table-cell;\r\nvertical-align: middle;\r\nwidth: 100%;\r\n}\r\n.login-logo img {\r\ncursor: pointer;\r\nmax-width: 171px;\r\npadding: 23px 15px 22px;\r\nwidth: 100%;\r\n}\r\n.login-header .navbar-right {\r\nmargin-right: 0px;\r\n}\r\n.login-header .nav-tabs > li.active > a,\r\n.login-header .nav-tabs > li.active > a:focus,\r\n.login-header .nav-tabs > li.active > a:hover {\r\nbackground-color: transparent;\r\nborder: none;\r\ncolor: #fff;\r\n}\r\n.login-header .nav-tabs > li > a {\r\nborder: medium none;\r\nborder-radius: 0;\r\nfont-size: 14px;\r\nfont-weight: 500;\r\nline-height: 48px;\r\npadding: 15px 30px;\r\ncolor: #fff;\r\n}\r\n.login-header .nav-tabs {\r\nborder-bottom: none;\r\n}\r\n.login-header .nav-tabs > li {\r\nmargin-bottom: 0px;\r\n}\r\n.login-header .nav > li > a:focus,\r\n.login-header .nav > li > a:hover {\r\nbackground: none;\r\ntext-decoration: none;\r\n}\r\n.login-header .nav-tabs > li.active {\r\nborder-bottom: 6px solid #5584ff;\r\n}\r\n.login-inner h1 {\r\ncolor: #8492af;\r\nfont-size: 48px;\r\nfont-weight: 300;\r\ntext-align: center;\r\nmargin-top: 0;\r\nmargin-bottom: 20px;\r\n}\r\n.login-inner h1 span {\r\ncolor: #5584ff;\r\n}\r\n.login-form {\r\ntext-align: center;\r\n}\r\n.login-form input {\r\n-moz-border-bottom-colors: none;\r\n-moz-border-left-colors: none;\r\n-moz-border-right-colors: none;\r\n-moz-border-top-colors: none;\r\nbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\nborder-color: -moz-use-text-color -moz-use-text-color #d4d9e3;\r\n-o-border-image: none;\r\n   border-image: none;\r\nborder-style: none none solid;\r\nborder-width: medium medium 1px;\r\nfont-size: 13px;\r\nfont-weight: 300;\r\nwidth: 100%;\r\ncolor: #8492af;\r\npadding: 15px 50px;\r\nfont-size: 17px;\r\nmax-width: 550px;\r\n}\r\n.login-form label {\r\nmargin-bottom: 30px;\r\nwidth: 100%;\r\n}\r\n.login-signup .tab-content {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nbox-shadow: 0 6px 12px rgba(0, 0, 0, 0.176);\r\ndisplay: inline-block;\r\nmargin-top: -8px;\r\nwidth: 100%;\r\n}\r\n.form-btn {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-weight: 400;\r\nmax-width: 250px;\r\npadding: 10px 0;\r\nposition: relative;\r\nwidth: 100%;\r\nmargin: 40px 0;\r\nbox-shadow: 0 2px 8px #d2d2d2;\r\n-moz-box-shadow: 0 2px 8px #d2d2d2;\r\n-webkit-box-shadow: 0 2px 8px #d2d2d2;\r\n}\r\n.form-btn::before {\r\ncontent: \"\";\r\nfont-family: FontAwesome;\r\nposition: absolute;\r\nright: 17px;\r\ntop: 9px;\r\n}\r\n.form-details {\r\npadding: 35px 0;\r\n}\r\n.tab-content .tab-pane {\r\npadding: 70px 0;\r\n}\r\n/*Login Signup Page*/\r\n/*Home Page*/\r\n.home {\r\nbackground: #f6f7fa;\r\n}\r\n#navigation {\r\nbackground: #0e1a35;\r\n}\r\n#navigation {\r\npadding: 0;\r\n}\r\n.display-table {\r\ndisplay: table;\r\npadding: 0;\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.display-table-row {\r\ndisplay: table-row;\r\nheight: 100%;\r\n}\r\n.display-table-cell {\r\ndisplay: table-cell;\r\nfloat: none;\r\nheight: 100%;\r\n}\r\n.v-align {\r\nvertical-align: top;\r\n}\r\n.logo img {\r\nmax-width: 180px;\r\npadding: 16px 0 17px;\r\nwidth: 100%;\r\n}\r\n.header-top {\r\nmargin: 0;\r\npadding-top: 2px;\r\n}\r\n.header-top img {\r\nborder-radius: 50%;\r\nmax-width: 48px !important;\r\nwidth: 100%;\r\n}\r\n.add-project {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 27px 10px 45px;\r\nposition: relative;\r\n}\r\n.header-rightside .nav > li > a:focus,\r\n.header-rightside .nav > li > a:hover {\r\nbackground: none;\r\ntext-decoration: none;\r\n}\r\n.add-project::before {\r\ncontent: \"\";\r\n;\r\nheight: 12px;\r\nleft: 17px;\r\nposition: absolute;\r\ntop: 12px;\r\nwidth: 12px;\r\n}\r\n.add-project:hover {\r\ncolor: #ffffff;\r\n}\r\n.header-top i {\r\ncolor: #0e1a35;\r\n}\r\n.icon-info {\r\nposition: relative;\r\n}\r\n.navi i {\r\nfont-size: 20px;\r\n}\r\n.label.label-primary {\r\nborder-radius: 50%;\r\nfont-size: 9px;\r\nleft: 8px;\r\nposition: absolute;\r\ntop: -9px;\r\n}\r\n.icon-info .label {\r\nborder: 2px solid #ffffff;\r\nfont-weight: 500;\r\npadding: 3px 5px;\r\ntext-align: center;\r\n}\r\n.header-top li {\r\ndisplay: inline-block;\r\ntext-align: center;\r\n}\r\n.header-top .dropdown-toggle {\r\ncolor: #0e1a35;\r\n}\r\n.header-top .dropdown-menu {\r\nborder: medium none;\r\nleft: -85px;\r\npadding: 17px;\r\n}\r\n.view {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\ndisplay: inline-block;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\nmargin-top: 10px;\r\npadding: 10px 15px;\r\n}\r\n.navbar-content > span {\r\nfont-size: 13px;\r\nfont-weight: 700;\r\n}\r\n.img-responsive {\r\nwidth: 100%;\r\n}\r\n#navigation{\r\ntransition: all 0.5s ease;\r\n}\r\n.search input {\r\nborder: none;\r\nfont-size: 15px;\r\npadding: 15px 9px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\nheader {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nbox-shadow: 0 1px 12px rgba(0, 0, 0, 0.04);\r\ndisplay: inline-block !important;\r\nline-height: 23px;\r\npadding: 15px;\r\ntransition: all 0.5s ease 0s;\r\nwidth: 100%;\r\ntransition: all 0.5s ease;\r\n}\r\n.logo {\r\ntext-align: center;\r\n}\r\n.navi a {\r\nborder-bottom: 1px solid #0d172e;\r\nborder-top: 1px solid #0d172e;\r\ncolor: #ffffff;\r\ndisplay: block;\r\nfont-size: 17px;\r\nfont-weight: 500;\r\npadding: 28px 20px;\r\ntext-decoration: none;\r\n}\r\n.navi i {\r\nmargin-right: 15px;\r\ncolor: #5584ff;\r\n}\r\n.navi .active a {\r\nbackground: #122143;\r\nborder-left: 5px solid #5584ff;\r\npadding-left: 15px;\r\n}\r\n.navi a:hover {\r\nbackground: #122143 none repeat scroll 0 0;\r\nborder-left: 5px solid #5584ff;\r\ndisplay: block;\r\npadding-left: 15px;\r\n}\r\n.navbar-default {\r\nbackground-color: #ffffff;\r\nborder-color: #ffffff;\r\n}\r\n.navbar-toggle {\r\nborder: none;\r\n}\r\n.navbar-default .navbar-toggle:focus,\r\n.navbar-default .navbar-toggle:hover {\r\nbackground-color: rgba(0, 0, 0, 0);\r\n}\r\n.navbar-default .navbar-toggle .icon-bar {\r\nbackground-color: #0e1a35;\r\n}\r\n.circle-logo {\r\nmargin: 0 auto;\r\nmax-width: 30px !important;\r\ntext-align: center;\r\n}\r\n.hidden-xs{\r\ntransition: all 0.5s ease;\r\n}\r\n.user-dashboard {\r\npadding: 0 20px;\r\n}\r\n.user-dashboard h1 {\r\ncolor: #0e1a35;\r\nfont-size: 30px;\r\nfont-weight: 500;\r\nmargin: 0;\r\npadding: 21px 0;\r\n}\r\n.sales {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nborder: 1px solid #d4d9e3;\r\ndisplay: inline-block;\r\npadding: 15px;\r\nwidth: 100%;\r\n}\r\n.sales button {\r\nbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\nborder: 1px solid #dadee7;\r\nborder-radius: 100px;\r\nfont-size: 15px;\r\nletter-spacing: 0.5px;\r\npadding-right: 32px;\r\ncolor: #0e1a35;\r\n}\r\n.sales button::before {\r\ncontent: \"\";\r\nfont-family: FontAwesome;\r\nposition: absolute;\r\nright: 12px;\r\ntop: 11px;\r\n}\r\n.sales  .btn-group {\r\nfloat: right;\r\n}\r\n.sales h2 {\r\ncolor: #8492af;\r\nfloat: left;\r\nfont-size: 21px;\r\nfont-weight: 600;\r\nmargin: 0;\r\npadding: 9px 0 0;\r\n}\r\n.btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\nfont-size: 15px;\r\nfont-weight: 600;\r\nletter-spacing: 0.5px;\r\n}\r\n.sales .dropdown-menu{\r\nmargin: 0px;\r\npadding: 0px;\r\nborder: 0px;\r\nborder-radius: 8px;\r\nwidth: 100%;\r\ncolor: #0e1a35;\r\n}\r\n.sales .btn-group.open .dropdown-toggle, .btn.active, .btn:active{\r\nbox-shadow: none;\r\n}\r\n.sales .dropdown-menu > a {\r\ncolor: #0e1a35;\r\ndisplay: inline-block;\r\nfont-weight: 800;\r\npadding: 9px 0;\r\ntext-align: center;\r\nwidth: 100%;\r\n}\r\n#my-cool-chart svg {\r\nwidth: 100%;\r\n}\r\n.sales .dropdown-menu > a:hover{\r\ncolor: #5584FF;   \r\n}\r\n.shield-buttons {\r\ndisplay: none;\r\n}\r\n.close, .close:focus, .close:hover {\r\ncolor: #fff;;\r\nopacity: 1;\r\ntext-shadow: none;\r\n}\r\n.modal-body input {\r\nborder: 1px solid #d4d9e3;\r\nfont-size: 14px;\r\nfont-weight: 300;\r\nmargin: 5px 0;\r\npadding: 14px 10px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\n.modal-body textarea {\r\nborder: 1px solid #d4d9e3;\r\nfont-size: 14px;\r\nfont-weight: 300;\r\nheight: 200px;\r\nmargin-top: 5px;\r\npadding: 9px 10px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\n.modal-header.login-header h4 {\r\ncolor: #ffffff;\r\n}\r\n.modal-footer .add-project {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 30px;\r\nposition: relative;\r\n}\r\n.modal-footer .add-project::before{display: none;}\r\n.modal-footer {\r\nborder: 0 none;\r\npadding: 10px 15px 26px;\r\ntext-align: right;\r\n}\r\n.cancel {\r\nbackground: #0E1A35     ;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 30px;\r\nposition: relative;\r\n\r\n}\r\n.modal{\r\ntop: 20%; \r\n}\r\n.modal-header .close {\r\nmargin-top: 2px;\r\n}\r\n.search input:focus{\r\nborder-bottom: 1px solid #BDC4D4;\r\nline-height:22px;\r\ntransition: 0.1s all;\r\n}\r\n.modal-header.login-header {\r\nborder-top-left-radius: 5px;\r\nborder-top-right-radius: 5px;\r\n}\r\n/*Main CSS*/\r\n@media only screen and (max-device-width: 767px) {\r\n.login-logo img {\r\n    margin: 0 auto;\r\n}\r\n.login-details .nav-tabs > li {\r\n    text-align: center;\r\n    width: 50%;\r\n}\r\n.login-signup .login-inner h1 {\r\n    font-size: 26px;\r\n    margin-bottom: 0;\r\n    margin-top: 10px;\r\n}\r\n.login-inner .login-form input {\r\n    font-size: 15px;\r\n    max-width: 100%;\r\n    padding: 15px 45px;\r\n}\r\n.login-inner .form-details {\r\n    padding: 25px;\r\n}\r\n.login-inner .login-form label {\r\n    margin-bottom: 20px;\r\n    width: 100%;\r\n}\r\n.login-inner .form-btn {\r\n    margin: 0;\r\n    max-width: 180px;\r\n}\r\n.tab-content .tab-pane {\r\n    padding: 20px 0;\r\n}\r\n#navigation .navi a {\r\n    font-size: 14px;\r\n    padding: 20px;\r\n    text-align: center;\r\n}\r\n#navigation .navi i {\r\n    margin-right: 0px;\r\n}\r\n#navigation .navi a:hover,\r\n#navigation .navi .active a {\r\n    background: #122143 none repeat scroll 0 0;\r\n    border-left: none;\r\n    display: block;\r\n    padding-left: 20px;\r\n}\r\nheader .header-top img {\r\n    max-width: 38px !important;\r\n}\r\n.v-align header {\r\n    padding: 12px 15px;\r\n}\r\nheader .header-top li {\r\n    padding-left: 13px;\r\n    padding-right: 6px;\r\n}\r\n.navbar-default .navbar-toggle {\r\n    border-color: rgba(0, 0, 0, 0);\r\n}\r\n.navbar-header .navbar-toggle {\r\n    float: left;\r\n    margin: 0;\r\n    padding: 0;\r\n    top: 12px;\r\n}\r\nbutton,\r\n    html [type=\"button\"],\r\n    [type=\"reset\"],\r\n    [type=\"submit\"] {\r\n        outline: medium none;\r\n}\r\n.user-dashboard .sales h2 {\r\n    color: #8492af;\r\n    float: left;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    margin: 0;\r\n    padding: 13px 0 0;\r\n}\r\n.user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\n    font-size: 11px;\r\n}\r\n.user-dashboard .sales button {\r\n    font-size: 11px;\r\n    padding-right: 23px;\r\n}  \r\n.user-dashboard .sales h2 {\r\nfont-size: 12px;\r\n}\r\n.gutter{\r\npadding: 0;\r\n}\r\n}\r\n@media only screen and (max-device-width: 992px) {\r\nheader .header-top li {\r\n    padding-left: 20px !important;\r\n    padding-right: 0;\r\n}\r\nheader .logo img {\r\n    max-width: 125px !important;\r\n}\r\n\r\n}\r\n@media only screen and (min-device-width: 767px) and (max-device-width: 998px){\r\n  .user-dashboard .header-top {\r\n    padding-top: 5px;\r\n}\r\n.user-dashboard .header-rightside {\r\n    display: inline-block;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.user-dashboard .header-rightside .header-top img {\r\n    max-width: 41px !important;\r\n} \r\n.user-dashboard .sales button {\r\nfont-size: 10px;\r\n}\r\n.user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\nfont-size: 12px;\r\n}\r\n.user-dashboard .sales h2 {\r\nfont-size: 15px;\r\n}\r\n}\r\n@media only screen and (min-device-width:998px) and (max-device-width: 1350px){\r\n    #navigation .logo img {\r\nmax-width: 130px;\r\npadding: 16px 0 17px;\r\nwidth: 100%;\r\n}\r\n} "

/***/ }),

/***/ "./src/app/components/client/edit-item/edit-item-client.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/client/edit-item/edit-item-client.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\r\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\r\n<meta name=\"viewport\" content=\"width=device-width, user-scalable=no\"> \r\n\r\n\r\n<div  class=\"dashboard\">\r\n<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css\" rel=\"stylesheet\" integrity=\"sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1\" crossorigin=\"anonymous\">\r\n    <div class=\"container-fluid display-table\">\r\n        <div class=\"row display-table-row\">\r\n            <div class=\"col-md-2 col-sm-1 hidden-xs display-table-cell v-align box\" id=\"navigation\">\r\n                <div class=\"logo\">\r\n                    <a hef=\"home.html\"> \r\n                        <img src=\"http://jskrishna.com/work/merkury/images/circle-logo.png\" alt=\"merkery_logo\" class=\"visible-xs visible-sm circle-logo\">\r\n                    </a>\r\n                </div>\r\n                <div class=\"navi\">\r\n                    <ul>\r\n                        <li><a routerLink=\"/home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Home</span></a></li>\r\n                        <li><a routerLink=\"/search-client\"> <i class=\"fa fa-tasks\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\"> Iniciar Venda </span></a></li>\r\n                        <li class=\"active\"><a routerLink=\"/clients\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Clientes </span></a></li>\r\n                        <li><a routerLink=\"/products\"><i class=\"fa fa-list-ol\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Produtos </span></a></li>\r\n                        <li ><a routerLink=\"/employees\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Funcionários </span></a></li>\r\n                        <li><a routerLink=\"/home\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Estatísticas</span></a></li>\r\n                        <li><a routerLink=\"/settings\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\" > Configurações</span></a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-10 col-sm-11 display-table-cell v-align\">\r\n                <div class=\"row\">\r\n                    <header>\r\n                        <div class=\"col-md-7\">\r\n                            <nav class=\"navbar-default pull-left\">\r\n                                <div class=\"navbar-header\">\r\n                                    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"offcanvas\" data-target=\"#side-menu\" aria-expanded=\"false\">\r\n                                        <span class=\"sr-only\">Toggle navigation</span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                    </button>\r\n                                </div>\r\n                            </nav>\r\n                            <div class=\"search hidden-xs hidden-sm\">\r\n                                <input type=\"text\" placeholder=\"Busca\" id=\"search\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"header-rightside\">\r\n                                <ul class=\"list-inline header-top pull-right\">\r\n                                    <li><a href=\"#\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a></li>\r\n                                    <li>\r\n                                        <a href=\"#\" class=\"icon-info\">\r\n                                            <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\r\n                                            <span class=\"label label-primary\">3</span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li class=\"dropdown\">\r\n                                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">User\r\n                                            <b class=\"caret\"></b></a>\r\n                                        <ul class=\"dropdown-menu\">\r\n                                            <li>\r\n                                                <div class=\"navbar-content\">\r\n                                                    <span>Ivan </span>\r\n                                                    <p class=\"text-muted small\">\r\n                                                        ivanalves94@gmail.com\r\n                                                    </p>\r\n                                                    <div class=\"divider\">\r\n                                                    </div>\r\n                                                    <a href=\"#\" class=\"view btn-sm active\">View Profile</a>\r\n                                                </div>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </header>\r\n                </div>\r\n\r\n                <div class=\"user-dashboard\">\r\n                       \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<h1 class=\"text-center action\">Editar Cliente</h1>\r\n\r\n<form class=\"form-horizontal\" [formGroup]=\"clientForm\" (submit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n        <label for=\"name\" class=\"col-sm-3 control-label\">Nome:</label>\r\n        <div class=\"col-sm-6\">\r\n            <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Digite o Nome\" formControlName=\"name\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"telephone\" class=\"col-sm-3 control-label\">Telefone:</label>\r\n        <div class=\"col-sm-6\">\r\n            <input type=\"text\" class=\"form-control\" id=\"telephone\" placeholder=\"Digite o Telefone\"\r\n                   formControlName=\"telephone\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"cpf\" class=\"col-sm-3 control-label\">CPF/CNPJ:</label>\r\n        <div class=\"col-sm-6\">\r\n            <input type=\"text\" class=\"form-control\" id=\"cpf\" placeholder=\"Digite o CPF/CNPJ\" formControlName=\"cpf\">\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"form-group\">\r\n            <label for=\"address\" class=\"col-sm-3 control-label\">Endereço:</label>\r\n            <div class=\"col-sm-6\">\r\n                <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"Digite o Endereço\"\r\n                       formControlName=address>\r\n            </div>\r\n        </div>\r\n\r\n    <div class=\"form-group\">\r\n        <div >\r\n            <button type=\"submit\" class=\"btn btn-primary btn-center\" [disabled]=\"clientForm.invalid\">\r\n                Atualizar\r\n            </button>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                </div>\r\n            </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div id=\"add_project\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n\r\n            <div class=\"modal-content\">\r\n                \r\n                <div class=\"modal-body\">\r\n                       \r\n                            <input type=\"text\" placeholder=\"Project Title\" name=\"name\">\r\n                            <input type=\"text\" placeholder=\"Post of Post\" name=\"mail\">\r\n                            <input type=\"text\" placeholder=\"Author\" name=\"passsword\">\r\n                            <textarea placeholder=\"Desicrption\"></textarea>\r\n                    </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"cancel\" data-dismiss=\"modal\">Close</button>\r\n                    <button type=\"button\" class=\"add-project\" data-dismiss=\"modal\">Save</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/client/edit-item/edit-item-client.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/client/edit-item/edit-item-client.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditItemClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditItemClientComponent", function() { return EditItemClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/client.service */ "./src/app/services/client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditItemClientComponent = /** @class */ (function () {
    function EditItemClientComponent(fb, clientService, router, activatedRoute) {
        var _this = this;
        this.fb = fb;
        this.clientService = clientService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.params.forEach(function (params) {
            var id = params['id'];
            var client = _this.clientService.getClientById(+id);
            _this.clientForm = fb.group({
                'id': [client.id],
                'name': [client.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                'telephone': [client.telephone, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                'cpf': [client.cpf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                'address': [client.address, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
        });
    }
    // atualiza o cliente
    EditItemClientComponent.prototype.onSubmit = function () {
        this.clientService.updateClient(this.clientForm.value);
        this.router.navigate(['/clients']);
    };
    EditItemClientComponent.prototype.ngOnInit = function () {
    };
    EditItemClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-item-client',
            template: __webpack_require__(/*! ./edit-item-client.component.html */ "./src/app/components/client/edit-item/edit-item-client.component.html"),
            styles: [__webpack_require__(/*! ./edit-item-client.component.css */ "./src/app/components/client/edit-item/edit-item-client.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditItemClientComponent);
    return EditItemClientComponent;
}());



/***/ }),

/***/ "./src/app/components/client/item/item-client.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/client/item/item-client.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/client/item/item-client.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/client/item/item-client.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<td>{{client.name}}</td>\r\n<td>{{client.telephone}}</td>\r\n<td>{{client.cpf}}</td>\r\n<td>{{client.address}}</td>\r\n\r\n<td>\r\n    <button type=\"button\" class=\"btn btn-success\" [routerLink]=\"['/edit-client', client.id]\">\r\n        <span class=\"glyphicon glyphicon-pencil\"></span>\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"removeClient()\">\r\n        <span class=\"glyphicon glyphicon-trash\"></span>\r\n    </button>\r\n</td>"

/***/ }),

/***/ "./src/app/components/client/item/item-client.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/client/item/item-client.component.ts ***!
  \*****************************************************************/
/*! exports provided: ItemClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemClientComponent", function() { return ItemClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/client */ "./src/app/models/client.ts");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/client.service */ "./src/app/services/client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemClientComponent = /** @class */ (function () {
    function ItemClientComponent(clientService) {
        this.clientService = clientService;
        this.removeClientEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ItemClientComponent.prototype.removeClient = function () {
        this.clientService.removeClient(this.client);
        this.removeClientEvent.emit();
    };
    ItemClientComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_client__WEBPACK_IMPORTED_MODULE_1__["Client"])
    ], ItemClientComponent.prototype, "client", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemClientComponent.prototype, "removeClientEvent", void 0);
    ItemClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[app-item-client]',
            template: __webpack_require__(/*! ./item-client.component.html */ "./src/app/components/client/item/item-client.component.html"),
            styles: [__webpack_require__(/*! ./item-client.component.css */ "./src/app/components/client/item/item-client.component.css")]
        }),
        __metadata("design:paramtypes", [_services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"]])
    ], ItemClientComponent);
    return ItemClientComponent;
}());



/***/ }),

/***/ "./src/app/components/client/list-items/list-items-client.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/client/list-items/list-items-client.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-circle {\r\n    border-radius: 50%;\r\n}\r\n.dashboard{\r\n    \r\n    position:absolute;\r\n    top:0;\r\n    left:0;\r\n    z-index:11;\r\n    width:100%;\r\n    height:100%;\r\n   \r\n}\r\n.image {\r\nwidth: 200px;\r\nmargin-bottom: 10px;\r\n}\r\n.image-config {\r\nmargin-bottom: 40px;\r\n}\r\n/*Main CSS*/\r\n/*Login Signup Page*/\r\na:focus,a:hover,a{\r\noutline:none;\r\ntext-decoration: none;\r\n}\r\nli,ul{\r\nlist-style: none;\r\npadding: 0;\r\nmargin: 0;\r\n}\r\n.header-top i {\r\nfont-size: 18px;\r\n}\r\n.bg-image {\r\nposition: relative;\r\nwidth: 100%;\r\nheight: 100vh;\r\ndisplay: table;\r\n}\r\n.login-header {\r\ndisplay: inline-block;\r\nwidth: 100%;\r\nbackground: #0e1a35;\r\n}\r\n.login-signup {\r\ndisplay: table-cell;\r\nvertical-align: middle;\r\nwidth: 100%;\r\n}\r\n.login-logo img {\r\ncursor: pointer;\r\nmax-width: 171px;\r\npadding: 23px 15px 22px;\r\nwidth: 100%;\r\n}\r\n.login-header .navbar-right {\r\nmargin-right: 0px;\r\n}\r\n.login-header .nav-tabs > li.active > a,\r\n.login-header .nav-tabs > li.active > a:focus,\r\n.login-header .nav-tabs > li.active > a:hover {\r\nbackground-color: transparent;\r\nborder: none;\r\ncolor: #fff;\r\n}\r\n.login-header .nav-tabs > li > a {\r\nborder: medium none;\r\nborder-radius: 0;\r\nfont-size: 14px;\r\nfont-weight: 500;\r\nline-height: 48px;\r\npadding: 15px 30px;\r\ncolor: #fff;\r\n}\r\n.login-header .nav-tabs {\r\nborder-bottom: none;\r\n}\r\n.login-header .nav-tabs > li {\r\nmargin-bottom: 0px;\r\n}\r\n.login-header .nav > li > a:focus,\r\n.login-header .nav > li > a:hover {\r\nbackground: none;\r\ntext-decoration: none;\r\n}\r\n.login-header .nav-tabs > li.active {\r\nborder-bottom: 6px solid #5584ff;\r\n}\r\n.login-inner h1 {\r\ncolor: #8492af;\r\nfont-size: 48px;\r\nfont-weight: 300;\r\ntext-align: center;\r\nmargin-top: 0;\r\nmargin-bottom: 20px;\r\n}\r\n.login-inner h1 span {\r\ncolor: #5584ff;\r\n}\r\n.login-form {\r\ntext-align: center;\r\n}\r\n.login-form input {\r\n-moz-border-bottom-colors: none;\r\n-moz-border-left-colors: none;\r\n-moz-border-right-colors: none;\r\n-moz-border-top-colors: none;\r\nbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\nborder-color: -moz-use-text-color -moz-use-text-color #d4d9e3;\r\n-o-border-image: none;\r\n   border-image: none;\r\nborder-style: none none solid;\r\nborder-width: medium medium 1px;\r\nfont-size: 13px;\r\nfont-weight: 300;\r\nwidth: 100%;\r\ncolor: #8492af;\r\npadding: 15px 50px;\r\nfont-size: 17px;\r\nmax-width: 550px;\r\n}\r\n.login-form label {\r\nmargin-bottom: 30px;\r\nwidth: 100%;\r\n}\r\n.login-signup .tab-content {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nbox-shadow: 0 6px 12px rgba(0, 0, 0, 0.176);\r\ndisplay: inline-block;\r\nmargin-top: -8px;\r\nwidth: 100%;\r\n}\r\n.form-btn {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-weight: 400;\r\nmax-width: 250px;\r\npadding: 10px 0;\r\nposition: relative;\r\nwidth: 100%;\r\nmargin: 40px 0;\r\nbox-shadow: 0 2px 8px #d2d2d2;\r\n-moz-box-shadow: 0 2px 8px #d2d2d2;\r\n-webkit-box-shadow: 0 2px 8px #d2d2d2;\r\n}\r\n.form-btn::before {\r\ncontent: \"\";\r\nfont-family: FontAwesome;\r\nposition: absolute;\r\nright: 17px;\r\ntop: 9px;\r\n}\r\n.form-details {\r\npadding: 35px 0;\r\n}\r\n.tab-content .tab-pane {\r\npadding: 70px 0;\r\n}\r\n/*Login Signup Page*/\r\n/*Home Page*/\r\n.home {\r\nbackground: #f6f7fa;\r\n}\r\n#navigation {\r\nbackground: #0e1a35;\r\n}\r\n#navigation {\r\npadding: 0;\r\n}\r\n.display-table {\r\ndisplay: table;\r\npadding: 0;\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.display-table-row {\r\ndisplay: table-row;\r\nheight: 100%;\r\n}\r\n.display-table-cell {\r\ndisplay: table-cell;\r\nfloat: none;\r\nheight: 100%;\r\n}\r\n.v-align {\r\nvertical-align: top;\r\n}\r\n.logo img {\r\nmax-width: 180px;\r\npadding: 16px 0 17px;\r\nwidth: 100%;\r\n}\r\n.header-top {\r\nmargin: 0;\r\npadding-top: 2px;\r\n}\r\n.header-top img {\r\nborder-radius: 50%;\r\nmax-width: 48px !important;\r\nwidth: 100%;\r\n}\r\n.add-project {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 27px 10px 45px;\r\nposition: relative;\r\n}\r\n.header-rightside .nav > li > a:focus,\r\n.header-rightside .nav > li > a:hover {\r\nbackground: none;\r\ntext-decoration: none;\r\n}\r\n.add-project::before {\r\ncontent: \"\";\r\n;\r\nheight: 12px;\r\nleft: 17px;\r\nposition: absolute;\r\ntop: 12px;\r\nwidth: 12px;\r\n}\r\n.add-project:hover {\r\ncolor: #ffffff;\r\n}\r\n.header-top i {\r\ncolor: #0e1a35;\r\n}\r\n.icon-info {\r\nposition: relative;\r\n}\r\n.navi i {\r\nfont-size: 20px;\r\n}\r\n.label.label-primary {\r\nborder-radius: 50%;\r\nfont-size: 9px;\r\nleft: 8px;\r\nposition: absolute;\r\ntop: -9px;\r\n}\r\n.icon-info .label {\r\nborder: 2px solid #ffffff;\r\nfont-weight: 500;\r\npadding: 3px 5px;\r\ntext-align: center;\r\n}\r\n.header-top li {\r\ndisplay: inline-block;\r\ntext-align: center;\r\n}\r\n.header-top .dropdown-toggle {\r\ncolor: #0e1a35;\r\n}\r\n.header-top .dropdown-menu {\r\nborder: medium none;\r\nleft: -85px;\r\npadding: 17px;\r\n}\r\n.view {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\ndisplay: inline-block;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\nmargin-top: 10px;\r\npadding: 10px 15px;\r\n}\r\n.navbar-content > span {\r\nfont-size: 13px;\r\nfont-weight: 700;\r\n}\r\n.img-responsive {\r\nwidth: 100%;\r\n}\r\n#navigation{\r\ntransition: all 0.5s ease;\r\n}\r\n.search input {\r\nborder: none;\r\nfont-size: 15px;\r\npadding: 15px 9px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\nheader {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nbox-shadow: 0 1px 12px rgba(0, 0, 0, 0.04);\r\ndisplay: inline-block !important;\r\nline-height: 23px;\r\npadding: 15px;\r\ntransition: all 0.5s ease 0s;\r\nwidth: 100%;\r\ntransition: all 0.5s ease;\r\n}\r\n.logo {\r\ntext-align: center;\r\n}\r\n.navi a {\r\nborder-bottom: 1px solid #0d172e;\r\nborder-top: 1px solid #0d172e;\r\ncolor: #ffffff;\r\ndisplay: block;\r\nfont-size: 17px;\r\nfont-weight: 500;\r\npadding: 28px 20px;\r\ntext-decoration: none;\r\n}\r\n.navi i {\r\nmargin-right: 15px;\r\ncolor: #5584ff;\r\n}\r\n.navi .active a {\r\nbackground: #122143;\r\nborder-left: 5px solid #5584ff;\r\npadding-left: 15px;\r\n}\r\n.navi a:hover {\r\nbackground: #122143 none repeat scroll 0 0;\r\nborder-left: 5px solid #5584ff;\r\ndisplay: block;\r\npadding-left: 15px;\r\n}\r\n.navbar-default {\r\nbackground-color: #ffffff;\r\nborder-color: #ffffff;\r\n}\r\n.navbar-toggle {\r\nborder: none;\r\n}\r\n.navbar-default .navbar-toggle:focus,\r\n.navbar-default .navbar-toggle:hover {\r\nbackground-color: rgba(0, 0, 0, 0);\r\n}\r\n.navbar-default .navbar-toggle .icon-bar {\r\nbackground-color: #0e1a35;\r\n}\r\n.circle-logo {\r\nmargin: 0 auto;\r\nmax-width: 30px !important;\r\ntext-align: center;\r\n}\r\n.hidden-xs{\r\ntransition: all 0.5s ease;\r\n}\r\n.user-dashboard {\r\npadding: 0 20px;\r\n}\r\n.user-dashboard h1 {\r\ncolor: #0e1a35;\r\nfont-size: 30px;\r\nfont-weight: 500;\r\nmargin: 0;\r\npadding: 21px 0;\r\n}\r\n.sales {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nborder: 1px solid #d4d9e3;\r\ndisplay: inline-block;\r\npadding: 15px;\r\nwidth: 100%;\r\n}\r\n.sales button {\r\nbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\nborder: 1px solid #dadee7;\r\nborder-radius: 100px;\r\nfont-size: 15px;\r\nletter-spacing: 0.5px;\r\npadding-right: 32px;\r\ncolor: #0e1a35;\r\n}\r\n.sales button::before {\r\ncontent: \"\";\r\nfont-family: FontAwesome;\r\nposition: absolute;\r\nright: 12px;\r\ntop: 11px;\r\n}\r\n.sales  .btn-group {\r\nfloat: right;\r\n}\r\n.sales h2 {\r\ncolor: #8492af;\r\nfloat: left;\r\nfont-size: 21px;\r\nfont-weight: 600;\r\nmargin: 0;\r\npadding: 9px 0 0;\r\n}\r\n.btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\nfont-size: 15px;\r\nfont-weight: 600;\r\nletter-spacing: 0.5px;\r\n}\r\n.sales .dropdown-menu{\r\nmargin: 0px;\r\npadding: 0px;\r\nborder: 0px;\r\nborder-radius: 8px;\r\nwidth: 100%;\r\ncolor: #0e1a35;\r\n}\r\n.sales .btn-group.open .dropdown-toggle, .btn.active, .btn:active{\r\nbox-shadow: none;\r\n}\r\n.sales .dropdown-menu > a {\r\ncolor: #0e1a35;\r\ndisplay: inline-block;\r\nfont-weight: 800;\r\npadding: 9px 0;\r\ntext-align: center;\r\nwidth: 100%;\r\n}\r\n#my-cool-chart svg {\r\nwidth: 100%;\r\n}\r\n.sales .dropdown-menu > a:hover{\r\ncolor: #5584FF;   \r\n}\r\n.shield-buttons {\r\ndisplay: none;\r\n}\r\n.close, .close:focus, .close:hover {\r\ncolor: #fff;;\r\nopacity: 1;\r\ntext-shadow: none;\r\n}\r\n.modal-body input {\r\nborder: 1px solid #d4d9e3;\r\nfont-size: 14px;\r\nfont-weight: 300;\r\nmargin: 5px 0;\r\npadding: 14px 10px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\n.modal-body textarea {\r\nborder: 1px solid #d4d9e3;\r\nfont-size: 14px;\r\nfont-weight: 300;\r\nheight: 200px;\r\nmargin-top: 5px;\r\npadding: 9px 10px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\n.modal-header.login-header h4 {\r\ncolor: #ffffff;\r\n}\r\n.modal-footer .add-project {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 30px;\r\nposition: relative;\r\n}\r\n.modal-footer .add-project::before{display: none;}\r\n.modal-footer {\r\nborder: 0 none;\r\npadding: 10px 15px 26px;\r\ntext-align: right;\r\n}\r\n.cancel {\r\nbackground: #0E1A35     ;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 30px;\r\nposition: relative;\r\n\r\n}\r\n.modal{\r\ntop: 20%; \r\n}\r\n.modal-header .close {\r\nmargin-top: 2px;\r\n}\r\n.search input:focus{\r\nborder-bottom: 1px solid #BDC4D4;\r\nline-height:22px;\r\ntransition: 0.1s all;\r\n}\r\n.modal-header.login-header {\r\nborder-top-left-radius: 5px;\r\nborder-top-right-radius: 5px;\r\n}\r\n/*Main CSS*/\r\n@media only screen and (max-device-width: 767px) {\r\n.login-logo img {\r\n    margin: 0 auto;\r\n}\r\n.login-details .nav-tabs > li {\r\n    text-align: center;\r\n    width: 50%;\r\n}\r\n.login-signup .login-inner h1 {\r\n    font-size: 26px;\r\n    margin-bottom: 0;\r\n    margin-top: 10px;\r\n}\r\n.login-inner .login-form input {\r\n    font-size: 15px;\r\n    max-width: 100%;\r\n    padding: 15px 45px;\r\n}\r\n.login-inner .form-details {\r\n    padding: 25px;\r\n}\r\n.login-inner .login-form label {\r\n    margin-bottom: 20px;\r\n    width: 100%;\r\n}\r\n.login-inner .form-btn {\r\n    margin: 0;\r\n    max-width: 180px;\r\n}\r\n.tab-content .tab-pane {\r\n    padding: 20px 0;\r\n}\r\n#navigation .navi a {\r\n    font-size: 14px;\r\n    padding: 20px;\r\n    text-align: center;\r\n}\r\n#navigation .navi i {\r\n    margin-right: 0px;\r\n}\r\n#navigation .navi a:hover,\r\n#navigation .navi .active a {\r\n    background: #122143 none repeat scroll 0 0;\r\n    border-left: none;\r\n    display: block;\r\n    padding-left: 20px;\r\n}\r\nheader .header-top img {\r\n    max-width: 38px !important;\r\n}\r\n.v-align header {\r\n    padding: 12px 15px;\r\n}\r\nheader .header-top li {\r\n    padding-left: 13px;\r\n    padding-right: 6px;\r\n}\r\n.navbar-default .navbar-toggle {\r\n    border-color: rgba(0, 0, 0, 0);\r\n}\r\n.navbar-header .navbar-toggle {\r\n    float: left;\r\n    margin: 0;\r\n    padding: 0;\r\n    top: 12px;\r\n}\r\nbutton,\r\n    html [type=\"button\"],\r\n    [type=\"reset\"],\r\n    [type=\"submit\"] {\r\n        outline: medium none;\r\n}\r\n.user-dashboard .sales h2 {\r\n    color: #8492af;\r\n    float: left;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    margin: 0;\r\n    padding: 13px 0 0;\r\n}\r\n.user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\n    font-size: 11px;\r\n}\r\n.user-dashboard .sales button {\r\n    font-size: 11px;\r\n    padding-right: 23px;\r\n}  \r\n.user-dashboard .sales h2 {\r\nfont-size: 12px;\r\n}\r\n.gutter{\r\npadding: 0;\r\n}\r\n}\r\n@media only screen and (max-device-width: 992px) {\r\nheader .header-top li {\r\n    padding-left: 20px !important;\r\n    padding-right: 0;\r\n}\r\nheader .logo img {\r\n    max-width: 125px !important;\r\n}\r\n\r\n}\r\n@media only screen and (min-device-width: 767px) and (max-device-width: 998px){\r\n  .user-dashboard .header-top {\r\n    padding-top: 5px;\r\n}\r\n.user-dashboard .header-rightside {\r\n    display: inline-block;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.user-dashboard .header-rightside .header-top img {\r\n    max-width: 41px !important;\r\n} \r\n.user-dashboard .sales button {\r\nfont-size: 10px;\r\n}\r\n.user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\nfont-size: 12px;\r\n}\r\n.user-dashboard .sales h2 {\r\nfont-size: 15px;\r\n}\r\n}\r\n@media only screen and (min-device-width:998px) and (max-device-width: 1350px){\r\n    #navigation .logo img {\r\nmax-width: 130px;\r\npadding: 16px 0 17px;\r\nwidth: 100%;\r\n}\r\n} "

/***/ }),

/***/ "./src/app/components/client/list-items/list-items-client.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/client/list-items/list-items-client.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n\r\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\r\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\r\n<meta name=\"viewport\" content=\"width=device-width, user-scalable=no\"> \r\n\r\n\r\n<div  class=\"dashboard\">\r\n<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css\" rel=\"stylesheet\" integrity=\"sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1\" crossorigin=\"anonymous\">\r\n    <div class=\"container-fluid display-table\">\r\n        <div class=\"row display-table-row\">\r\n            <div class=\"col-md-2 col-sm-1 hidden-xs display-table-cell v-align box\" id=\"navigation\">\r\n                <div class=\"logo\">\r\n                    <a hef=\"home.html\"><img src=\"http://automablu.com.br/wp-content/uploads/2018/03/LOGOCOLORIDA.png\" alt=\"merkery_logo\" class=\"hidden-xs hidden-sm\">\r\n                        <img src=\"http://jskrishna.com/work/merkury/images/circle-logo.png\" alt=\"merkery_logo\" class=\"visible-xs visible-sm circle-logo\">\r\n                    </a>\r\n                </div>\r\n                <div class=\"navi\">\r\n                    <ul>\r\n                            <li><a routerLink=\"/home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Home</span></a></li>\r\n                            <li><a routerLink=\"/search-client\"> <i class=\"fa fa-tasks\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\"> Iniciar Venda </span></a></li>\r\n                            <li class=\"active\" ><a routerLink=\"/clients\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Clientes </span></a></li>\r\n                            <li><a routerLink=\"/products\"><i class=\"fa fa-list-ol\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Produtos </span></a></li>\r\n                            <li><a routerLink=\"/employees\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Funcionários </span></a></li>\r\n                            <li><a routerLink=\"/home\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Estatísticas</span></a></li>\r\n                            <li><a routerLink=\"/settings\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\" > Configurações</span></a></li>\r\n                        </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-10 col-sm-11 display-table-cell v-align\">\r\n                <div class=\"row\">\r\n                    <header>\r\n                        <div class=\"col-md-7\">\r\n                            <nav class=\"navbar-default pull-left\">\r\n                                <div class=\"navbar-header\">\r\n                                    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"offcanvas\" data-target=\"#side-menu\" aria-expanded=\"false\">\r\n                                        <span class=\"sr-only\">Toggle navigation</span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                    </button>\r\n                                </div>\r\n                            </nav>\r\n                            <div class=\"search hidden-xs hidden-sm\">\r\n                                <input type=\"text\" placeholder=\"Busca\" id=\"search\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"header-rightside\">\r\n                                <ul class=\"list-inline header-top pull-right\">\r\n                                    <li><a href=\"#\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a></li>\r\n                                    <li>\r\n                                        <a href=\"#\" class=\"icon-info\">\r\n                                            <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\r\n                                            <span class=\"label label-primary\">3</span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li class=\"dropdown\">\r\n                                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">User\r\n                                            <b class=\"caret\"></b></a>\r\n                                        <ul class=\"dropdown-menu\">\r\n                                            <li>\r\n                                                <div class=\"navbar-content\">\r\n                                                    <span>Ivan </span>\r\n                                                    <p class=\"text-muted small\">\r\n                                                        ivanalves94@gmail.com\r\n                                                    </p>\r\n                                                    <div class=\"divider\">\r\n                                                    </div>\r\n                                                    <a href=\"#\" class=\"view btn-sm active\">View Profile</a>\r\n                                                </div>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </header>\r\n                </div>\r\n\r\n                <div class=\"user-dashboard\">\r\n                  \r\n                    <div class=\"panel panel-primary\">\r\n                                <div class=\"panel-heading text-center\">Clientes\r\n                                    <button type=\"button\" class=\"btn btn-warning btn-circle\" [routerLink]=\"['/new-client']\">\r\n                                        <span class=\"glyphicon glyphicon-plus\"></span>\r\n                                    </button>\r\n                                </div>\r\n                                <table class=\"table\">\r\n                                    <thead>\r\n                                    <tr>\r\n                                        <th>Nome</th>\r\n                                        <th>Telefone</th>\r\n                                        <th>CPF/CNPJ</th>\r\n                                        <th>Endereço</th>\r\n                                        <th>Ações</th>\r\n                                    </tr>\r\n                                    </thead>\r\n                                    \r\n                                    <tbody>\r\n                                    \r\n                                        <tr app-item-client *ngFor=\"let client of clients;\" [client]=\"client\"\r\n                                    \r\n                                        (removeClientEvent)=\"onRemoveClient()\"></tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n              \r\n                 </div>\r\n            </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div id=\"add_project\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n\r\n            <div class=\"modal-content\">\r\n                \r\n                <div class=\"modal-body\">\r\n                       \r\n                            <input type=\"text\" placeholder=\"Project Title\" name=\"name\">\r\n                            <input type=\"text\" placeholder=\"Post of Post\" name=\"mail\">\r\n                            <input type=\"text\" placeholder=\"Author\" name=\"passsword\">\r\n                            <textarea placeholder=\"Desicrption\"></textarea>\r\n                    </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"cancel\" data-dismiss=\"modal\">Close</button>\r\n                    <button type=\"button\" class=\"add-project\" data-dismiss=\"modal\">Save</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/client/list-items/list-items-client.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/client/list-items/list-items-client.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ListItemsClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemsClientComponent", function() { return ListItemsClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/client.service */ "./src/app/services/client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListItemsClientComponent = /** @class */ (function () {
    function ListItemsClientComponent(clientService) {
        this.clientService = clientService;
    }
    // carrega os clientes ao iniciar o componente
    ListItemsClientComponent.prototype.ngOnInit = function () {
        this.clients = this.clientService.getClients();
    };
    ListItemsClientComponent.prototype.onRemoveClient = function () {
        this.clients = this.clientService.getClients();
    };
    ListItemsClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-items-client',
            template: __webpack_require__(/*! ./list-items-client.component.html */ "./src/app/components/client/list-items/list-items-client.component.html"),
            styles: [__webpack_require__(/*! ./list-items-client.component.css */ "./src/app/components/client/list-items/list-items-client.component.css")]
        }),
        __metadata("design:paramtypes", [_services_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"]])
    ], ListItemsClientComponent);
    return ListItemsClientComponent;
}());



/***/ }),

/***/ "./src/app/components/client/new-client/new-client.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/client/new-client/new-client.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".action {\r\n  margin-top: 40px;\r\n}\r\n\r\n\r\n\r\n\r\n.image {\r\n  width: 200px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n\r\n\r\n\r\n.image-config {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n\r\n\r\n\r\n.action {\r\n  margin-top: 40px;\r\n}\r\n\r\n\r\n\r\n\r\n.dashboard{\r\n  \r\n  position:absolute;\r\n  top:0;\r\n  left:0;\r\n  z-index:11;\r\n  width:100%;\r\n  height:100%;\r\n \r\n}\r\n\r\n\r\n\r\n\r\n.image {\r\nwidth: 200px;\r\nmargin-bottom: 10px;\r\n}\r\n\r\n\r\n\r\n\r\n.image-config {\r\nmargin-bottom: 40px;\r\n}\r\n\r\n\r\n\r\n\r\n/*Main CSS*/\r\n\r\n\r\n\r\n\r\n/*Login Signup Page*/\r\n\r\n\r\n\r\n\r\na:focus,a:hover,a{\r\noutline:none;\r\ntext-decoration: none;\r\n}\r\n\r\n\r\n\r\n\r\nli,ul{\r\nlist-style: none;\r\npadding: 0;\r\nmargin: 0;\r\n}\r\n\r\n\r\n\r\n\r\n.header-top i {\r\nfont-size: 18px;\r\n}\r\n\r\n\r\n\r\n\r\n.bg-image {\r\nposition: relative;\r\nwidth: 100%;\r\nheight: 100vh;\r\ndisplay: table;\r\n}\r\n\r\n\r\n\r\n\r\n.login-header {\r\ndisplay: inline-block;\r\nwidth: 100%;\r\nbackground: #0e1a35;\r\n}\r\n\r\n\r\n\r\n\r\n.login-signup {\r\ndisplay: table-cell;\r\nvertical-align: middle;\r\nwidth: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n.login-logo img {\r\ncursor: pointer;\r\nmax-width: 171px;\r\npadding: 23px 15px 22px;\r\nwidth: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n.login-header .navbar-right {\r\nmargin-right: 0px;\r\n}\r\n\r\n\r\n\r\n\r\n.login-header .nav-tabs > li.active > a,\r\n.login-header .nav-tabs > li.active > a:focus,\r\n.login-header .nav-tabs > li.active > a:hover {\r\nbackground-color: transparent;\r\nborder: none;\r\ncolor: #fff;\r\n}\r\n\r\n\r\n\r\n\r\n.login-header .nav-tabs > li > a {\r\nborder: medium none;\r\nborder-radius: 0;\r\nfont-size: 14px;\r\nfont-weight: 500;\r\nline-height: 48px;\r\npadding: 15px 30px;\r\ncolor: #fff;\r\n}\r\n\r\n\r\n\r\n\r\n.login-header .nav-tabs {\r\nborder-bottom: none;\r\n}\r\n\r\n\r\n\r\n\r\n.login-header .nav-tabs > li {\r\nmargin-bottom: 0px;\r\n}\r\n\r\n\r\n\r\n\r\n.login-header .nav > li > a:focus,\r\n.login-header .nav > li > a:hover {\r\nbackground: none;\r\ntext-decoration: none;\r\n}\r\n\r\n\r\n\r\n\r\n.login-header .nav-tabs > li.active {\r\nborder-bottom: 6px solid #5584ff;\r\n}\r\n\r\n\r\n\r\n\r\n.login-inner h1 {\r\ncolor: #8492af;\r\nfont-size: 48px;\r\nfont-weight: 300;\r\ntext-align: center;\r\nmargin-top: 0;\r\nmargin-bottom: 20px;\r\n}\r\n\r\n\r\n\r\n\r\n.login-inner h1 span {\r\ncolor: #5584ff;\r\n}\r\n\r\n\r\n\r\n\r\n.login-form {\r\ntext-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n.login-form input {\r\n-moz-border-bottom-colors: none;\r\n-moz-border-left-colors: none;\r\n-moz-border-right-colors: none;\r\n-moz-border-top-colors: none;\r\nbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\nborder-color: -moz-use-text-color -moz-use-text-color #d4d9e3;\r\n-o-border-image: none;\r\n   border-image: none;\r\nborder-style: none none solid;\r\nborder-width: medium medium 1px;\r\nfont-size: 13px;\r\nfont-weight: 300;\r\nwidth: 100%;\r\ncolor: #8492af;\r\npadding: 15px 50px;\r\nfont-size: 17px;\r\nmax-width: 550px;\r\n}\r\n\r\n\r\n\r\n\r\n.login-form label {\r\nmargin-bottom: 30px;\r\nwidth: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n.login-signup .tab-content {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nbox-shadow: 0 6px 12px rgba(0, 0, 0, 0.176);\r\ndisplay: inline-block;\r\nmargin-top: -8px;\r\nwidth: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n.form-btn {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-weight: 400;\r\nmax-width: 250px;\r\npadding: 10px 0;\r\nposition: relative;\r\nwidth: 100%;\r\nmargin: 40px 0;\r\nbox-shadow: 0 2px 8px #d2d2d2;\r\n-moz-box-shadow: 0 2px 8px #d2d2d2;\r\n-webkit-box-shadow: 0 2px 8px #d2d2d2;\r\n}\r\n\r\n\r\n\r\n\r\n.form-btn::before {\r\ncontent: \"\";\r\nfont-family: FontAwesome;\r\nposition: absolute;\r\nright: 17px;\r\ntop: 9px;\r\n}\r\n\r\n\r\n\r\n\r\n.form-details {\r\npadding: 35px 0;\r\n}\r\n\r\n\r\n\r\n\r\n.tab-content .tab-pane {\r\npadding: 70px 0;\r\n}\r\n\r\n\r\n\r\n\r\n/*Login Signup Page*/\r\n\r\n\r\n\r\n\r\n/*Home Page*/\r\n\r\n\r\n\r\n\r\n.home {\r\nbackground: #f6f7fa;\r\n}\r\n\r\n\r\n\r\n\r\n#navigation {\r\nbackground: #0e1a35;\r\n}\r\n\r\n\r\n\r\n\r\n#navigation {\r\npadding: 0;\r\n}\r\n\r\n\r\n\r\n\r\n.display-table {\r\ndisplay: table;\r\npadding: 0;\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n.display-table-row {\r\ndisplay: table-row;\r\nheight: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n.display-table-cell {\r\ndisplay: table-cell;\r\nfloat: none;\r\nheight: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n.v-align {\r\nvertical-align: top;\r\n}\r\n\r\n\r\n\r\n\r\n.logo img {\r\nmax-width: 180px;\r\npadding: 16px 0 17px;\r\nwidth: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n.header-top {\r\nmargin: 0;\r\npadding-top: 2px;\r\n}\r\n\r\n\r\n\r\n\r\n.header-top img {\r\nborder-radius: 50%;\r\nmax-width: 48px !important;\r\nwidth: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n.add-project {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 27px 10px 45px;\r\nposition: relative;\r\n}\r\n\r\n\r\n\r\n\r\n.header-rightside .nav > li > a:focus,\r\n.header-rightside .nav > li > a:hover {\r\nbackground: none;\r\ntext-decoration: none;\r\n}\r\n\r\n\r\n\r\n\r\n.add-project::before {\r\ncontent: \"\";\r\n;\r\nheight: 12px;\r\nleft: 17px;\r\nposition: absolute;\r\ntop: 12px;\r\nwidth: 12px;\r\n}\r\n\r\n\r\n\r\n\r\n.add-project:hover {\r\ncolor: #ffffff;\r\n}\r\n\r\n\r\n\r\n\r\n.header-top i {\r\ncolor: #0e1a35;\r\n}\r\n\r\n\r\n\r\n\r\n.icon-info {\r\nposition: relative;\r\n}\r\n\r\n\r\n\r\n\r\n.navi i {\r\nfont-size: 20px;\r\n}\r\n\r\n\r\n\r\n\r\n.label.label-primary {\r\nborder-radius: 50%;\r\nfont-size: 9px;\r\nleft: 8px;\r\nposition: absolute;\r\ntop: -9px;\r\n}\r\n\r\n\r\n\r\n\r\n.icon-info .label {\r\nborder: 2px solid #ffffff;\r\nfont-weight: 500;\r\npadding: 3px 5px;\r\ntext-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n.header-top li {\r\ndisplay: inline-block;\r\ntext-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n.header-top .dropdown-toggle {\r\ncolor: #0e1a35;\r\n}\r\n\r\n\r\n\r\n\r\n.header-top .dropdown-menu {\r\nborder: medium none;\r\nleft: -85px;\r\npadding: 17px;\r\n}\r\n\r\n\r\n\r\n\r\n.view {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\ndisplay: inline-block;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\nmargin-top: 10px;\r\npadding: 10px 15px;\r\n}\r\n\r\n\r\n\r\n\r\n.navbar-content > span {\r\nfont-size: 13px;\r\nfont-weight: 700;\r\n}\r\n\r\n\r\n\r\n\r\n.img-responsive {\r\nwidth: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n#navigation{\r\ntransition: all 0.5s ease;\r\n}\r\n\r\n\r\n\r\n\r\n.search input {\r\nborder: none;\r\nfont-size: 15px;\r\npadding: 15px 9px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\n\r\n\r\n\r\n\r\nheader {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nbox-shadow: 0 1px 12px rgba(0, 0, 0, 0.04);\r\ndisplay: inline-block !important;\r\nline-height: 23px;\r\npadding: 15px;\r\ntransition: all 0.5s ease 0s;\r\nwidth: 100%;\r\ntransition: all 0.5s ease;\r\n}\r\n\r\n\r\n\r\n\r\n.logo {\r\ntext-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n.navi a {\r\nborder-bottom: 1px solid #0d172e;\r\nborder-top: 1px solid #0d172e;\r\ncolor: #ffffff;\r\ndisplay: block;\r\nfont-size: 17px;\r\nfont-weight: 500;\r\npadding: 28px 20px;\r\ntext-decoration: none;\r\n}\r\n\r\n\r\n\r\n\r\n.navi i {\r\nmargin-right: 15px;\r\ncolor: #5584ff;\r\n}\r\n\r\n\r\n\r\n\r\n.navi .active a {\r\nbackground: #122143;\r\nborder-left: 5px solid #5584ff;\r\npadding-left: 15px;\r\n}\r\n\r\n\r\n\r\n\r\n.navi a:hover {\r\nbackground: #122143 none repeat scroll 0 0;\r\nborder-left: 5px solid #5584ff;\r\ndisplay: block;\r\npadding-left: 15px;\r\n}\r\n\r\n\r\n\r\n\r\n.navbar-default {\r\nbackground-color: #ffffff;\r\nborder-color: #ffffff;\r\n}\r\n\r\n\r\n\r\n\r\n.navbar-toggle {\r\nborder: none;\r\n}\r\n\r\n\r\n\r\n\r\n.navbar-default .navbar-toggle:focus,\r\n.navbar-default .navbar-toggle:hover {\r\nbackground-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n\r\n\r\n\r\n.navbar-default .navbar-toggle .icon-bar {\r\nbackground-color: #0e1a35;\r\n}\r\n\r\n\r\n\r\n\r\n.circle-logo {\r\nmargin: 0 auto;\r\nmax-width: 30px !important;\r\ntext-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n.hidden-xs{\r\ntransition: all 0.5s ease;\r\n}\r\n\r\n\r\n\r\n\r\n.user-dashboard {\r\npadding: 0 20px;\r\n}\r\n\r\n\r\n\r\n\r\n.user-dashboard h1 {\r\ncolor: #0e1a35;\r\nfont-size: 30px;\r\nfont-weight: 500;\r\nmargin: 0;\r\npadding: 21px 0;\r\n}\r\n\r\n\r\n\r\n\r\n.sales {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nborder: 1px solid #d4d9e3;\r\ndisplay: inline-block;\r\npadding: 15px;\r\nwidth: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n.sales button {\r\nbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\nborder: 1px solid #dadee7;\r\nborder-radius: 100px;\r\nfont-size: 15px;\r\nletter-spacing: 0.5px;\r\npadding-right: 32px;\r\ncolor: #0e1a35;\r\n}\r\n\r\n\r\n\r\n\r\n.sales button::before {\r\ncontent: \"\";\r\nfont-family: FontAwesome;\r\nposition: absolute;\r\nright: 12px;\r\ntop: 11px;\r\n}\r\n\r\n\r\n\r\n\r\n.sales  .btn-group {\r\nfloat: right;\r\n}\r\n\r\n\r\n\r\n\r\n.sales h2 {\r\ncolor: #8492af;\r\nfloat: left;\r\nfont-size: 21px;\r\nfont-weight: 600;\r\nmargin: 0;\r\npadding: 9px 0 0;\r\n}\r\n\r\n\r\n\r\n\r\n.btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\nfont-size: 15px;\r\nfont-weight: 600;\r\nletter-spacing: 0.5px;\r\n}\r\n\r\n\r\n\r\n\r\n.sales .dropdown-menu{\r\nmargin: 0px;\r\npadding: 0px;\r\nborder: 0px;\r\nborder-radius: 8px;\r\nwidth: 100%;\r\ncolor: #0e1a35;\r\n}\r\n\r\n\r\n\r\n\r\n.sales .btn-group.open .dropdown-toggle, .btn.active, .btn:active{\r\nbox-shadow: none;\r\n}\r\n\r\n\r\n\r\n\r\n.sales .dropdown-menu > a {\r\ncolor: #0e1a35;\r\ndisplay: inline-block;\r\nfont-weight: 800;\r\npadding: 9px 0;\r\ntext-align: center;\r\nwidth: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n#my-cool-chart svg {\r\nwidth: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n.sales .dropdown-menu > a:hover{\r\ncolor: #5584FF;   \r\n}\r\n\r\n\r\n\r\n\r\n.shield-buttons {\r\ndisplay: none;\r\n}\r\n\r\n\r\n\r\n\r\n.close, .close:focus, .close:hover {\r\ncolor: #fff;;\r\nopacity: 1;\r\ntext-shadow: none;\r\n}\r\n\r\n\r\n\r\n\r\n.modal-body input {\r\nborder: 1px solid #d4d9e3;\r\nfont-size: 14px;\r\nfont-weight: 300;\r\nmargin: 5px 0;\r\npadding: 14px 10px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\n\r\n\r\n\r\n\r\n.modal-body textarea {\r\nborder: 1px solid #d4d9e3;\r\nfont-size: 14px;\r\nfont-weight: 300;\r\nheight: 200px;\r\nmargin-top: 5px;\r\npadding: 9px 10px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\n\r\n\r\n\r\n\r\n.modal-header.login-header h4 {\r\ncolor: #ffffff;\r\n}\r\n\r\n\r\n\r\n\r\n.modal-footer .add-project {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 30px;\r\nposition: relative;\r\n}\r\n\r\n\r\n\r\n\r\n.modal-footer .add-project::before{display: none;}\r\n\r\n\r\n\r\n\r\n.modal-footer {\r\nborder: 0 none;\r\npadding: 10px 15px 26px;\r\ntext-align: right;\r\n}\r\n\r\n\r\n\r\n\r\n.cancel {\r\nbackground: #0E1A35     ;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 30px;\r\nposition: relative;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n.modal{\r\ntop: 20%; \r\n}\r\n\r\n\r\n\r\n\r\n.modal-header .close {\r\nmargin-top: 2px;\r\n}\r\n\r\n\r\n\r\n\r\n.search input:focus{\r\nborder-bottom: 1px solid #BDC4D4;\r\nline-height:22px;\r\ntransition: 0.1s all;\r\n}\r\n\r\n\r\n\r\n\r\n.modal-header.login-header {\r\nborder-top-left-radius: 5px;\r\nborder-top-right-radius: 5px;\r\n}\r\n\r\n\r\n\r\n\r\n/*Main CSS*/\r\n\r\n\r\n\r\n\r\n@media only screen and (max-device-width: 767px) {\r\n.login-logo img {\r\n  margin: 0 auto;\r\n}\r\n.login-details .nav-tabs > li {\r\n  text-align: center;\r\n  width: 50%;\r\n}\r\n.login-signup .login-inner h1 {\r\n  font-size: 26px;\r\n  margin-bottom: 0;\r\n  margin-top: 10px;\r\n}\r\n.login-inner .login-form input {\r\n  font-size: 15px;\r\n  max-width: 100%;\r\n  padding: 15px 45px;\r\n}\r\n.login-inner .form-details {\r\n  padding: 25px;\r\n}\r\n.login-inner .login-form label {\r\n  margin-bottom: 20px;\r\n  width: 100%;\r\n}\r\n.login-inner .form-btn {\r\n  margin: 0;\r\n  max-width: 180px;\r\n}\r\n.tab-content .tab-pane {\r\n  padding: 20px 0;\r\n}\r\n#navigation .navi a {\r\n  font-size: 14px;\r\n  padding: 20px;\r\n  text-align: center;\r\n}\r\n#navigation .navi i {\r\n  margin-right: 0px;\r\n}\r\n#navigation .navi a:hover,\r\n#navigation .navi .active a {\r\n  background: #122143 none repeat scroll 0 0;\r\n  border-left: none;\r\n  display: block;\r\n  padding-left: 20px;\r\n}\r\nheader .header-top img {\r\n  max-width: 38px !important;\r\n}\r\n.v-align header {\r\n  padding: 12px 15px;\r\n}\r\nheader .header-top li {\r\n  padding-left: 13px;\r\n  padding-right: 6px;\r\n}\r\n.navbar-default .navbar-toggle {\r\n  border-color: rgba(0, 0, 0, 0);\r\n}\r\n.navbar-header .navbar-toggle {\r\n  float: left;\r\n  margin: 0;\r\n  padding: 0;\r\n  top: 12px;\r\n}\r\nbutton,\r\n  html [type=\"button\"],\r\n  [type=\"reset\"],\r\n  [type=\"submit\"] {\r\n      outline: medium none;\r\n}\r\n.user-dashboard .sales h2 {\r\n  color: #8492af;\r\n  float: left;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  margin: 0;\r\n  padding: 13px 0 0;\r\n}\r\n.user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\n  font-size: 11px;\r\n}\r\n.user-dashboard .sales button {\r\n  font-size: 11px;\r\n  padding-right: 23px;\r\n}  \r\n.user-dashboard .sales h2 {\r\nfont-size: 12px;\r\n}\r\n.gutter{\r\npadding: 0;\r\n}\r\n}\r\n\r\n\r\n\r\n\r\n@media only screen and (max-device-width: 992px) {\r\nheader .header-top li {\r\n  padding-left: 20px !important;\r\n  padding-right: 0;\r\n}\r\nheader .logo img {\r\n  max-width: 125px !important;\r\n}\r\n\r\n}\r\n\r\n\r\n\r\n\r\n@media only screen and (min-device-width: 767px) and (max-device-width: 998px){\r\n.user-dashboard .header-top {\r\n  padding-top: 5px;\r\n}\r\n.user-dashboard .header-rightside {\r\n  display: inline-block;\r\n  float: left;\r\n  width: 100%;\r\n}\r\n.user-dashboard .header-rightside .header-top img {\r\n  max-width: 41px !important;\r\n} \r\n.user-dashboard .sales button {\r\nfont-size: 10px;\r\n}\r\n.user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\nfont-size: 12px;\r\n}\r\n.user-dashboard .sales h2 {\r\nfont-size: 15px;\r\n}\r\n}\r\n\r\n\r\n\r\n\r\n@media only screen and (min-device-width:998px) and (max-device-width: 1350px){\r\n  #navigation .logo img {\r\nmax-width: 130px;\r\npadding: 16px 0 17px;\r\nwidth: 100%;\r\n}\r\n}\r\n\r\n\r\n\r\n\r\n.loginbox{  \r\n  background: white;\r\n  color: black;    \r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin-right: -50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%); \r\n  padding: 20px;   \r\n  box-shadow: 0 8px 50px -2px #000;\r\n  border-radius:5px;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n.logo{\r\n  width: 130px; \r\n  height: 55px;\r\n  margin-left: 10%;\r\n}\r\n\r\n\r\n\r\n\r\n.loginbox_content{\r\n  padding:5% 11% 5% 11%;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n.singtext{\r\n  font-family: \"Open Sans\",sans-serif;\r\n  font-size: 27px;  \r\n  color:  #42a5f5;\r\n  float: right;\r\n  padding-right: 25%;\r\n}\r\n\r\n\r\n\r\n\r\n.background-image {\r\n  position: fixed;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1;\r\n\r\n  display: block;\r\n  background-color: #42a5f5;\r\n  width: 100%;\r\n  height: 800px;\r\n\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/client/new-client/new-client.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/client/new-client/new-client.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\r\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\r\n<meta name=\"viewport\" content=\"width=device-width, user-scalable=no\"> \r\n\r\n\r\n<div  class=\"dashboard\">\r\n<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css\" rel=\"stylesheet\" integrity=\"sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1\" crossorigin=\"anonymous\">\r\n    <div class=\"container-fluid display-table\">\r\n        <div class=\"row display-table-row\">\r\n            <div class=\"col-md-2 col-sm-1 hidden-xs display-table-cell v-align box\" id=\"navigation\">\r\n                <div class=\"logo\">\r\n                    <a hef=\"home.html\"><img src=\"assets\\imagens\\logo.png\" alt=\"merkery_logo\" class=\"hidden-xs hidden-sm\">\r\n                        <img src=\"http://jskrishna.com/work/merkury/images/circle-logo.png\" alt=\"merkery_logo\" class=\"visible-xs visible-sm circle-logo\">\r\n                    </a>\r\n                </div>\r\n                <div class=\"navi\">\r\n                    <ul>\r\n                        <li><a routerLink=\"/home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Home</span></a></li>\r\n                        <li><a routerLink=\"/search-client\"> <i class=\"fa fa-tasks\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\"> Iniciar Venda </span></a></li>\r\n                        <li class=\"active\" ><a routerLink=\"/clients\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Clientes </span></a></li>\r\n                        <li><a routerLink=\"/products\"><i class=\"fa fa-list-ol\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Produtos </span></a></li>\r\n                        <li ><a routerLink=\"/employees\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Funcionários </span></a></li>\r\n                        <li><a routerLink=\"/home\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Estatísticas</span></a></li>\r\n                        <li><a routerLink=\"/settings\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\" > Configurações</span></a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-10 col-sm-11 display-table-cell v-align\">\r\n                <div class=\"row\">\r\n                    <header>\r\n                        <div class=\"col-md-7\">\r\n                            <nav class=\"navbar-default pull-left\">\r\n                                <div class=\"navbar-header\">\r\n                                    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"offcanvas\" data-target=\"#side-menu\" aria-expanded=\"false\">\r\n                                        <span class=\"sr-only\">Toggle navigation</span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                    </button>\r\n                                </div>\r\n                            </nav>\r\n                            <div class=\"search hidden-xs hidden-sm\">\r\n                                <input type=\"text\" placeholder=\"Busca\" id=\"search\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"header-rightside\">\r\n                                <ul class=\"list-inline header-top pull-right\">\r\n                                    <li><a href=\"#\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a></li>\r\n                                    <li>\r\n                                        <a href=\"#\" class=\"icon-info\">\r\n                                            <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\r\n                                            <span class=\"label label-primary\">3</span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li class=\"dropdown\">\r\n                                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">User\r\n                                            <b class=\"caret\"></b></a>\r\n                                        <ul class=\"dropdown-menu\">\r\n                                            <li>\r\n                                                <div class=\"navbar-content\">\r\n                                                    <span>Ivan </span>\r\n                                                    <p class=\"text-muted small\">\r\n                                                        ivanalves94@gmail.com\r\n                                                    </p>\r\n                                                    <div class=\"divider\">\r\n                                                    </div>\r\n                                                    <a href=\"#\" class=\"view btn-sm active\">View Profile</a>\r\n                                                </div>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </header>\r\n                </div>\r\n\r\n                <div class=\"user-dashboard\">\r\n                       \r\n\r\n\r\n\r\n                    <form [formGroup]=\"clientForm\" (submit)=\"onSubmit()\" >\r\n\r\n\r\n                        <div class=\"container\">  \r\n                        <div class=\"col-lg-6 col-md-6 col-sm-8  loginbox\">\r\n                            <div class=\" row\">\r\n                                <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-6\">\r\n                                    <img src=\"assets\\imagens\\logo.png\" alt=\"Logo\" class=\"logo\"> \r\n                                </div>\r\n                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-6  \">\r\n                                    <span class=\"singtext\" color=\"blue\" > Novo Cliente </span>   \r\n                                </div>\r\n                                             \r\n                            </div>\r\n            \r\n                            \r\n                            <div class=\"row loginbox_content\">                        \r\n                               \r\n                                <label for=\"name\" class=\"control-label\"> Nome: </label>\r\n                                <br>\r\n                                <div class=\"input-group input-group-sm\" >\r\n                                    <span class=\"input-group-addon\">\r\n                                        <span></span>\r\n                                    </span>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"name\"  placeholder=\"Digite nome \"required ngModel name=\"name\" formControlName=\"name\" >\r\n                                </div>\r\n                                <br>\r\n                                <label for=\"telephone\" class=\"control-label\">Telefone:</label>\r\n                                <div class=\"input-group input-group-sm\">\r\n                                    <span class=\"input-group-addon\"> </span>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"telephone\" placeholder=\"Digite o telefone\"\r\n                                    formControlName=\"telephone\">   \r\n                                </div> \r\n                                <br> \r\n                                <label for=\"cpf\" class=\"control-label\">CPF/CNPJ:</label>\r\n                                <div class=\"input-group input-group-sm\">\r\n                                    <span class=\"input-group-addon\"> </span>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"cpf\" value = \"{{frase}}\" placeholder=\"Digite o CPF/CNPJ\"  formControlName=\"cpf\">\r\n                                </div> \r\n                                \r\n                                <br> \r\n                                <label for=\"address\" class=\"control-label\">Endereço:</label>\r\n                                <div class=\"input-group input-group-sm\">\r\n                                    <span class=\"input-group-addon\"> </span>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"Digite o endereço \" formControlName=\"address\">\r\n                                </div> \r\n            \r\n                            </div>\r\n                            <div >\r\n                                    <div>\r\n                                        <button type=\"submit\" class=\"btn btn-primary btn-center\" [disabled]=\"clientForm.invalid\" *ngIf=\"path\">\r\n                                            Cadastrar e\r\n                                            Iniciar Venda\r\n                                        </button>\r\n                                        <button type=\"submit\" class=\"btn btn-primary btn-center\"  *ngIf=\"!path\">\r\n                                            Cadastrar\r\n                                        </button>\r\n                         \r\n                                    </div>\r\n                                </div> \r\n                        </div>\r\n                        <div class=\"col-lg-6 col-md-6 col-sm-4 \"></div>\r\n            \r\n                     </div>       \r\n             \r\n                    \r\n                </form>\r\n\r\n                </div>\r\n            </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div id=\"add_project\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n\r\n            <div class=\"modal-content\">\r\n                \r\n                <div class=\"modal-body\">\r\n                       \r\n                            <input type=\"text\" placeholder=\"Project Title\" name=\"name\">\r\n                            <input type=\"text\" placeholder=\"Post of Post\" name=\"mail\">\r\n                            <input type=\"text\" placeholder=\"Author\" name=\"passsword\">\r\n                            <textarea placeholder=\"Desicrption\"></textarea>\r\n                    </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"cancel\" data-dismiss=\"modal\">Close</button>\r\n                    <button type=\"button\" class=\"add-project\" data-dismiss=\"modal\">Save</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/client/new-client/new-client.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/client/new-client/new-client.component.ts ***!
  \**********************************************************************/
/*! exports provided: NewClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewClientComponent", function() { return NewClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var cpf_cnpj__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cpf_cnpj */ "./node_modules/cpf_cnpj/index.js");
/* harmony import */ var cpf_cnpj__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cpf_cnpj__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/search.service */ "./src/app/services/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewClientComponent = /** @class */ (function () {
    function NewClientComponent(fb, clientService, router, activatedRoute, searchService) {
        this.fb = fb;
        this.clientService = clientService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.searchService = searchService;
        this.clientForm = fb.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'telephone': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'cpf': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'address': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    // salva o cliente
    NewClientComponent.prototype.onSubmit = function () {
        this.clientService.saveClient(this.clientForm.value);
        this.clientService.getClients().forEach(function (client) { return console.log(client); });
        if (this.path) {
            this.router.navigate(['/cart']);
        }
        else {
            this.router.navigate(['/clients']);
        }
    };
    // pega o parametro passado pela rota
    NewClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            _this.path = params['vender'];
        });
        this.frase = this.searchService.getCPF_NCadastrado();
    };
    NewClientComponent.prototype.validateCPF = function () {
        return function (control) {
            var invalid = !cpf_cnpj__WEBPACK_IMPORTED_MODULE_4__["CPF"].isValid(control.value);
            return invalid ? { valid: invalid } : null;
        };
    };
    NewClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-client',
            template: __webpack_require__(/*! ./new-client.component.html */ "./src/app/components/client/new-client/new-client.component.html"),
            styles: [__webpack_require__(/*! ./new-client.component.css */ "./src/app/components/client/new-client/new-client.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"]])
    ], NewClientComponent);
    return NewClientComponent;
}());



/***/ }),

/***/ "./src/app/components/client/search-client/search-client.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/client/search-client/search-client.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".action {\r\n    margin-top: 40px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n\r\n\r\n.dashboard{\r\n    \r\n    position:absolute;\r\n    top:0;\r\n    left:0;\r\n    z-index:11;\r\n    width:100%;\r\n    height:100%;\r\n   \r\n}\r\n\r\n\r\n\r\n.image {\r\nwidth: 200px;\r\nmargin-bottom: 10px;\r\n}\r\n\r\n\r\n\r\n.image-config {\r\nmargin-bottom: 40px;\r\n}\r\n\r\n\r\n\r\n/*Main CSS*/\r\n\r\n\r\n\r\n/*Login Signup Page*/\r\n\r\n\r\n\r\na:focus,a:hover,a{\r\noutline:none;\r\ntext-decoration: none;\r\n}\r\n\r\n\r\n\r\nli,ul{\r\nlist-style: none;\r\npadding: 0;\r\nmargin: 0;\r\n}\r\n\r\n\r\n\r\n.header-top i {\r\nfont-size: 18px;\r\n}\r\n\r\n\r\n\r\n.bg-image {\r\nposition: relative;\r\nwidth: 100%;\r\nheight: 100vh;\r\ndisplay: table;\r\n}\r\n\r\n\r\n\r\n.login-header {\r\ndisplay: inline-block;\r\nwidth: 100%;\r\nbackground: #0e1a35;\r\n}\r\n\r\n\r\n\r\n.login-signup {\r\ndisplay: table-cell;\r\nvertical-align: middle;\r\nwidth: 100%;\r\n}\r\n\r\n\r\n\r\n.login-logo img {\r\ncursor: pointer;\r\nmax-width: 171px;\r\npadding: 23px 15px 22px;\r\nwidth: 100%;\r\n}\r\n\r\n\r\n\r\n.login-header .navbar-right {\r\nmargin-right: 0px;\r\n}\r\n\r\n\r\n\r\n.login-header .nav-tabs > li.active > a,\r\n.login-header .nav-tabs > li.active > a:focus,\r\n.login-header .nav-tabs > li.active > a:hover {\r\nbackground-color: transparent;\r\nborder: none;\r\ncolor: #fff;\r\n}\r\n\r\n\r\n\r\n.login-header .nav-tabs > li > a {\r\nborder: medium none;\r\nborder-radius: 0;\r\nfont-size: 14px;\r\nfont-weight: 500;\r\nline-height: 48px;\r\npadding: 15px 30px;\r\ncolor: #fff;\r\n}\r\n\r\n\r\n\r\n.login-header .nav-tabs {\r\nborder-bottom: none;\r\n}\r\n\r\n\r\n\r\n.login-header .nav-tabs > li {\r\nmargin-bottom: 0px;\r\n}\r\n\r\n\r\n\r\n.login-header .nav > li > a:focus,\r\n.login-header .nav > li > a:hover {\r\nbackground: none;\r\ntext-decoration: none;\r\n}\r\n\r\n\r\n\r\n.login-header .nav-tabs > li.active {\r\nborder-bottom: 6px solid #5584ff;\r\n}\r\n\r\n\r\n\r\n.login-inner h1 {\r\ncolor: #8492af;\r\nfont-size: 48px;\r\nfont-weight: 300;\r\ntext-align: center;\r\nmargin-top: 0;\r\nmargin-bottom: 20px;\r\n}\r\n\r\n\r\n\r\n.login-inner h1 span {\r\ncolor: #5584ff;\r\n}\r\n\r\n\r\n\r\n.login-form {\r\ntext-align: center;\r\n}\r\n\r\n\r\n\r\n.login-form input {\r\n-moz-border-bottom-colors: none;\r\n-moz-border-left-colors: none;\r\n-moz-border-right-colors: none;\r\n-moz-border-top-colors: none;\r\nbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\nborder-color: -moz-use-text-color -moz-use-text-color #d4d9e3;\r\n-o-border-image: none;\r\n   border-image: none;\r\nborder-style: none none solid;\r\nborder-width: medium medium 1px;\r\nfont-size: 13px;\r\nfont-weight: 300;\r\nwidth: 100%;\r\ncolor: #8492af;\r\npadding: 15px 50px;\r\nfont-size: 17px;\r\nmax-width: 550px;\r\n}\r\n\r\n\r\n\r\n.login-form label {\r\nmargin-bottom: 30px;\r\nwidth: 100%;\r\n}\r\n\r\n\r\n\r\n.login-signup .tab-content {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nbox-shadow: 0 6px 12px rgba(0, 0, 0, 0.176);\r\ndisplay: inline-block;\r\nmargin-top: -8px;\r\nwidth: 100%;\r\n}\r\n\r\n\r\n\r\n.form-btn {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-weight: 400;\r\nmax-width: 250px;\r\npadding: 10px 0;\r\nposition: relative;\r\nwidth: 100%;\r\nmargin: 40px 0;\r\nbox-shadow: 0 2px 8px #d2d2d2;\r\n-moz-box-shadow: 0 2px 8px #d2d2d2;\r\n-webkit-box-shadow: 0 2px 8px #d2d2d2;\r\n}\r\n\r\n\r\n\r\n.form-btn::before {\r\ncontent: \"\";\r\nfont-family: FontAwesome;\r\nposition: absolute;\r\nright: 17px;\r\ntop: 9px;\r\n}\r\n\r\n\r\n\r\n.form-details {\r\npadding: 35px 0;\r\n}\r\n\r\n\r\n\r\n.tab-content .tab-pane {\r\npadding: 70px 0;\r\n}\r\n\r\n\r\n\r\n/*Login Signup Page*/\r\n\r\n\r\n\r\n/*Home Page*/\r\n\r\n\r\n\r\n.home {\r\nbackground: #f6f7fa;\r\n}\r\n\r\n\r\n\r\n#navigation {\r\nbackground: #0e1a35;\r\n}\r\n\r\n\r\n\r\n#navigation {\r\npadding: 0;\r\n}\r\n\r\n\r\n\r\n.display-table {\r\ndisplay: table;\r\npadding: 0;\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n\r\n\r\n\r\n.display-table-row {\r\ndisplay: table-row;\r\nheight: 100%;\r\n}\r\n\r\n\r\n\r\n.display-table-cell {\r\ndisplay: table-cell;\r\nfloat: none;\r\nheight: 100%;\r\n}\r\n\r\n\r\n\r\n.v-align {\r\nvertical-align: top;\r\n}\r\n\r\n\r\n\r\n.logo img {\r\nmax-width: 180px;\r\npadding: 16px 0 17px;\r\nwidth: 100%;\r\n}\r\n\r\n\r\n\r\n.header-top {\r\nmargin: 0;\r\npadding-top: 2px;\r\n}\r\n\r\n\r\n\r\n.header-top img {\r\nborder-radius: 50%;\r\nmax-width: 48px !important;\r\nwidth: 100%;\r\n}\r\n\r\n\r\n\r\n.add-project {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 27px 10px 45px;\r\nposition: relative;\r\n}\r\n\r\n\r\n\r\n.header-rightside .nav > li > a:focus,\r\n.header-rightside .nav > li > a:hover {\r\nbackground: none;\r\ntext-decoration: none;\r\n}\r\n\r\n\r\n\r\n.add-project::before {\r\ncontent: \"\";\r\n;\r\nheight: 12px;\r\nleft: 17px;\r\nposition: absolute;\r\ntop: 12px;\r\nwidth: 12px;\r\n}\r\n\r\n\r\n\r\n.add-project:hover {\r\ncolor: #ffffff;\r\n}\r\n\r\n\r\n\r\n.header-top i {\r\ncolor: #0e1a35;\r\n}\r\n\r\n\r\n\r\n.icon-info {\r\nposition: relative;\r\n}\r\n\r\n\r\n\r\n.navi i {\r\nfont-size: 20px;\r\n}\r\n\r\n\r\n\r\n.label.label-primary {\r\nborder-radius: 50%;\r\nfont-size: 9px;\r\nleft: 8px;\r\nposition: absolute;\r\ntop: -9px;\r\n}\r\n\r\n\r\n\r\n.icon-info .label {\r\nborder: 2px solid #ffffff;\r\nfont-weight: 500;\r\npadding: 3px 5px;\r\ntext-align: center;\r\n}\r\n\r\n\r\n\r\n.header-top li {\r\ndisplay: inline-block;\r\ntext-align: center;\r\n}\r\n\r\n\r\n\r\n.header-top .dropdown-toggle {\r\ncolor: #0e1a35;\r\n}\r\n\r\n\r\n\r\n.header-top .dropdown-menu {\r\nborder: medium none;\r\nleft: -85px;\r\npadding: 17px;\r\n}\r\n\r\n\r\n\r\n.view {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\ndisplay: inline-block;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\nmargin-top: 10px;\r\npadding: 10px 15px;\r\n}\r\n\r\n\r\n\r\n.navbar-content > span {\r\nfont-size: 13px;\r\nfont-weight: 700;\r\n}\r\n\r\n\r\n\r\n.img-responsive {\r\nwidth: 100%;\r\n}\r\n\r\n\r\n\r\n#navigation{\r\ntransition: all 0.5s ease;\r\n}\r\n\r\n\r\n\r\n.search input {\r\nborder: none;\r\nfont-size: 15px;\r\npadding: 15px 9px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\n\r\n\r\n\r\nheader {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nbox-shadow: 0 1px 12px rgba(0, 0, 0, 0.04);\r\ndisplay: inline-block !important;\r\nline-height: 23px;\r\npadding: 15px;\r\ntransition: all 0.5s ease 0s;\r\nwidth: 100%;\r\ntransition: all 0.5s ease;\r\n}\r\n\r\n\r\n\r\n.logo {\r\ntext-align: center;\r\n}\r\n\r\n\r\n\r\n.navi a {\r\nborder-bottom: 1px solid #0d172e;\r\nborder-top: 1px solid #0d172e;\r\ncolor: #ffffff;\r\ndisplay: block;\r\nfont-size: 17px;\r\nfont-weight: 500;\r\npadding: 28px 20px;\r\ntext-decoration: none;\r\n}\r\n\r\n\r\n\r\n.navi i {\r\nmargin-right: 15px;\r\ncolor: #5584ff;\r\n}\r\n\r\n\r\n\r\n.navi .active a {\r\nbackground: #122143;\r\nborder-left: 5px solid #5584ff;\r\npadding-left: 15px;\r\n}\r\n\r\n\r\n\r\n.navi a:hover {\r\nbackground: #122143 none repeat scroll 0 0;\r\nborder-left: 5px solid #5584ff;\r\ndisplay: block;\r\npadding-left: 15px;\r\n}\r\n\r\n\r\n\r\n.navbar-default {\r\nbackground-color: #ffffff;\r\nborder-color: #ffffff;\r\n}\r\n\r\n\r\n\r\n.navbar-toggle {\r\nborder: none;\r\n}\r\n\r\n\r\n\r\n.navbar-default .navbar-toggle:focus,\r\n.navbar-default .navbar-toggle:hover {\r\nbackground-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n\r\n\r\n.navbar-default .navbar-toggle .icon-bar {\r\nbackground-color: #0e1a35;\r\n}\r\n\r\n\r\n\r\n.circle-logo {\r\nmargin: 0 auto;\r\nmax-width: 30px !important;\r\ntext-align: center;\r\n}\r\n\r\n\r\n\r\n.hidden-xs{\r\ntransition: all 0.5s ease;\r\n}\r\n\r\n\r\n\r\n.user-dashboard {\r\npadding: 0 20px;\r\n}\r\n\r\n\r\n\r\n.user-dashboard h1 {\r\ncolor: #0e1a35;\r\nfont-size: 30px;\r\nfont-weight: 500;\r\nmargin: 0;\r\npadding: 21px 0;\r\n}\r\n\r\n\r\n\r\n.sales {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nborder: 1px solid #d4d9e3;\r\ndisplay: inline-block;\r\npadding: 15px;\r\nwidth: 100%;\r\n}\r\n\r\n\r\n\r\n.sales button {\r\nbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\nborder: 1px solid #dadee7;\r\nborder-radius: 100px;\r\nfont-size: 15px;\r\nletter-spacing: 0.5px;\r\npadding-right: 32px;\r\ncolor: #0e1a35;\r\n}\r\n\r\n\r\n\r\n.sales button::before {\r\ncontent: \"\";\r\nfont-family: FontAwesome;\r\nposition: absolute;\r\nright: 12px;\r\ntop: 11px;\r\n}\r\n\r\n\r\n\r\n.sales  .btn-group {\r\nfloat: right;\r\n}\r\n\r\n\r\n\r\n.sales h2 {\r\ncolor: #8492af;\r\nfloat: left;\r\nfont-size: 21px;\r\nfont-weight: 600;\r\nmargin: 0;\r\npadding: 9px 0 0;\r\n}\r\n\r\n\r\n\r\n.btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\nfont-size: 15px;\r\nfont-weight: 600;\r\nletter-spacing: 0.5px;\r\n}\r\n\r\n\r\n\r\n.sales .dropdown-menu{\r\nmargin: 0px;\r\npadding: 0px;\r\nborder: 0px;\r\nborder-radius: 8px;\r\nwidth: 100%;\r\ncolor: #0e1a35;\r\n}\r\n\r\n\r\n\r\n.sales .btn-group.open .dropdown-toggle, .btn.active, .btn:active{\r\nbox-shadow: none;\r\n}\r\n\r\n\r\n\r\n.sales .dropdown-menu > a {\r\ncolor: #0e1a35;\r\ndisplay: inline-block;\r\nfont-weight: 800;\r\npadding: 9px 0;\r\ntext-align: center;\r\nwidth: 100%;\r\n}\r\n\r\n\r\n\r\n#my-cool-chart svg {\r\nwidth: 100%;\r\n}\r\n\r\n\r\n\r\n.sales .dropdown-menu > a:hover{\r\ncolor: #5584FF;   \r\n}\r\n\r\n\r\n\r\n.shield-buttons {\r\ndisplay: none;\r\n}\r\n\r\n\r\n\r\n.close, .close:focus, .close:hover {\r\ncolor: #fff;;\r\nopacity: 1;\r\ntext-shadow: none;\r\n}\r\n\r\n\r\n\r\n.modal-body input {\r\nborder: 1px solid #d4d9e3;\r\nfont-size: 14px;\r\nfont-weight: 300;\r\nmargin: 5px 0;\r\npadding: 14px 10px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\n\r\n\r\n\r\n.modal-body textarea {\r\nborder: 1px solid #d4d9e3;\r\nfont-size: 14px;\r\nfont-weight: 300;\r\nheight: 200px;\r\nmargin-top: 5px;\r\npadding: 9px 10px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\n\r\n\r\n\r\n.modal-header.login-header h4 {\r\ncolor: #ffffff;\r\n}\r\n\r\n\r\n\r\n.modal-footer .add-project {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 30px;\r\nposition: relative;\r\n}\r\n\r\n\r\n\r\n.modal-footer .add-project::before{display: none;}\r\n\r\n\r\n\r\n.modal-footer {\r\nborder: 0 none;\r\npadding: 10px 15px 26px;\r\ntext-align: right;\r\n}\r\n\r\n\r\n\r\n.cancel {\r\nbackground: #0E1A35     ;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 30px;\r\nposition: relative;\r\n\r\n}\r\n\r\n\r\n\r\n.modal{\r\ntop: 20%; \r\n}\r\n\r\n\r\n\r\n.modal-header .close {\r\nmargin-top: 2px;\r\n}\r\n\r\n\r\n\r\n.search input:focus{\r\nborder-bottom: 1px solid #BDC4D4;\r\nline-height:22px;\r\ntransition: 0.1s all;\r\n}\r\n\r\n\r\n\r\n.modal-header.login-header {\r\nborder-top-left-radius: 5px;\r\nborder-top-right-radius: 5px;\r\n}\r\n\r\n\r\n\r\n/*Main CSS*/\r\n\r\n\r\n\r\n@media only screen and (max-device-width: 767px) {\r\n.login-logo img {\r\n    margin: 0 auto;\r\n}\r\n.login-details .nav-tabs > li {\r\n    text-align: center;\r\n    width: 50%;\r\n}\r\n.login-signup .login-inner h1 {\r\n    font-size: 26px;\r\n    margin-bottom: 0;\r\n    margin-top: 10px;\r\n}\r\n.login-inner .login-form input {\r\n    font-size: 15px;\r\n    max-width: 100%;\r\n    padding: 15px 45px;\r\n}\r\n.login-inner .form-details {\r\n    padding: 25px;\r\n}\r\n.login-inner .login-form label {\r\n    margin-bottom: 20px;\r\n    width: 100%;\r\n}\r\n.login-inner .form-btn {\r\n    margin: 0;\r\n    max-width: 180px;\r\n}\r\n.tab-content .tab-pane {\r\n    padding: 20px 0;\r\n}\r\n#navigation .navi a {\r\n    font-size: 14px;\r\n    padding: 20px;\r\n    text-align: center;\r\n}\r\n#navigation .navi i {\r\n    margin-right: 0px;\r\n}\r\n#navigation .navi a:hover,\r\n#navigation .navi .active a {\r\n    background: #122143 none repeat scroll 0 0;\r\n    border-left: none;\r\n    display: block;\r\n    padding-left: 20px;\r\n}\r\nheader .header-top img {\r\n    max-width: 38px !important;\r\n}\r\n.v-align header {\r\n    padding: 12px 15px;\r\n}\r\nheader .header-top li {\r\n    padding-left: 13px;\r\n    padding-right: 6px;\r\n}\r\n.navbar-default .navbar-toggle {\r\n    border-color: rgba(0, 0, 0, 0);\r\n}\r\n.navbar-header .navbar-toggle {\r\n    float: left;\r\n    margin: 0;\r\n    padding: 0;\r\n    top: 12px;\r\n}\r\nbutton,\r\n    html [type=\"button\"],\r\n    [type=\"reset\"],\r\n    [type=\"submit\"] {\r\n        outline: medium none;\r\n}\r\n.user-dashboard .sales h2 {\r\n    color: #8492af;\r\n    float: left;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    margin: 0;\r\n    padding: 13px 0 0;\r\n}\r\n.user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\n    font-size: 11px;\r\n}\r\n.user-dashboard .sales button {\r\n    font-size: 11px;\r\n    padding-right: 23px;\r\n}  \r\n.user-dashboard .sales h2 {\r\nfont-size: 12px;\r\n}\r\n.gutter{\r\npadding: 0;\r\n}\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-device-width: 992px) {\r\nheader .header-top li {\r\n    padding-left: 20px !important;\r\n    padding-right: 0;\r\n}\r\nheader .logo img {\r\n    max-width: 125px !important;\r\n}\r\n\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-device-width: 767px) and (max-device-width: 998px){\r\n  .user-dashboard .header-top {\r\n    padding-top: 5px;\r\n}\r\n.user-dashboard .header-rightside {\r\n    display: inline-block;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.user-dashboard .header-rightside .header-top img {\r\n    max-width: 41px !important;\r\n} \r\n.user-dashboard .sales button {\r\nfont-size: 10px;\r\n}\r\n.user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\nfont-size: 12px;\r\n}\r\n.user-dashboard .sales h2 {\r\nfont-size: 15px;\r\n}\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-device-width:998px) and (max-device-width: 1350px){\r\n    #navigation .logo img {\r\nmax-width: 130px;\r\npadding: 16px 0 17px;\r\nwidth: 100%;\r\n}\r\n}   "

/***/ }),

/***/ "./src/app/components/client/search-client/search-client.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/client/search-client/search-client.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\r\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\r\n<meta name=\"viewport\" content=\"width=device-width, user-scalable=no\"> \r\n\r\n\r\n<div  class=\"dashboard\">\r\n<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css\" rel=\"stylesheet\" integrity=\"sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1\" crossorigin=\"anonymous\">\r\n    <div class=\"container-fluid display-table\">\r\n        <div class=\"row display-table-row\">\r\n            <div class=\"col-md-2 col-sm-1 hidden-xs display-table-cell v-align box\" id=\"navigation\">\r\n                <div class=\"logo\">\r\n                    <a hef=\"home.html\"><img src=\"http://automablu.com.br/wp-content/uploads/2018/03/LOGOCOLORIDA.png\" alt=\"merkery_logo\" class=\"hidden-xs hidden-sm\">\r\n                        <img src=\"http://jskrishna.com/work/merkury/images/circle-logo.png\" alt=\"merkery_logo\" class=\"visible-xs visible-sm circle-logo\">\r\n                    </a>\r\n                </div>\r\n                <div class=\"navi\">\r\n                    <ul>\r\n                            <li><a routerLink=\"/home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Home</span></a></li>\r\n                            <li class=\"active\"><a routerLink=\"/search-client\"> <i class=\"fa fa-tasks\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\"> Iniciar Venda </span></a></li>\r\n                            <li><a routerLink=\"/clients\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Clientes </span></a></li>\r\n                            <li><a routerLink=\"/products\"><i class=\"fa fa-list-ol\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Produtos </span></a></li>\r\n                            <li><a routerLink=\"/employees\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Funcionários </span></a></li>\r\n                            <li><a routerLink=\"/home\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Estatísticas</span></a></li>\r\n                            <li><a routerLink=\"/settings\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\" > Configurações</span></a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-10 col-sm-11 display-table-cell v-align\">\r\n                <div class=\"row\">\r\n                    <header>\r\n                        <div class=\"col-md-7\">\r\n                            <nav class=\"navbar-default pull-left\">\r\n                                <div class=\"navbar-header\">\r\n                                    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"offcanvas\" data-target=\"#side-menu\" aria-expanded=\"false\">\r\n                                        <span class=\"sr-only\">Toggle navigation</span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                    </button>\r\n                                </div>\r\n                            </nav>\r\n                            <div class=\"search hidden-xs hidden-sm\">\r\n                                <input type=\"text\" placeholder=\"Busca\" id=\"search\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"header-rightside\">\r\n                                <ul class=\"list-inline header-top pull-right\">\r\n                                    <li><a href=\"#\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a></li>\r\n                                    <li>\r\n                                        <a href=\"#\" class=\"icon-info\">\r\n                                            <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\r\n                                            <span class=\"label label-primary\">3</span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li class=\"dropdown\">\r\n                                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">User\r\n                                            <b class=\"caret\"></b></a>\r\n                                        <ul class=\"dropdown-menu\">\r\n                                            <li>\r\n                                                <div class=\"navbar-content\">\r\n                                                    <span>Ivan </span>\r\n                                                    <p class=\"text-muted small\">\r\n                                                        ivanalves94@gmail.com\r\n                                                    </p>\r\n                                                    <div class=\"divider\">\r\n                                                    </div>\r\n                                                    <a href=\"#\" class=\"view btn-sm active\">View Profile</a>\r\n                                                </div>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </header>\r\n                </div>\r\n\r\n                <div class=\"user-dashboard\">\r\n                    \r\n\r\n\r\n\r\n                        <h1 class=\"text-center action\">Buscar Cliente</h1>\r\n\r\n                        <form class=\"form-horizontal\" [formGroup]=\"searchForm\"\r\n                              [ngClass]=\"{'has-error': searchForm.get('cpf').invalid && searchForm.get('cpf').dirty   }\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"cpf\" class=\"col-sm-3 control-label\">CPF/CNPJ:</label>\r\n                                <div class=\"col-sm-6\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"cpf\" placeholder=\"Digite o CPF/CNPJ\" formControlName=\"cpf\">\r\n                                </div>\r\n                            </div>\r\n                        \r\n                            <div *ngIf=\"clientSearch\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"name\" class=\"col-sm-3 control-label\">Nome:</label>\r\n                                    <div class=\"col-sm-6\">\r\n                                        <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Digite o Nome\" formControlName=\"name\">\r\n                                    </div>\r\n                                </div>\r\n                        \r\n                                <div class=\"form-group\">\r\n                                    <label for=\"telephone\" class=\"col-sm-3 control-label\">Telefone:</label>\r\n                                    <div class=\"col-sm-6\">\r\n                                        <input type=\"text\" class=\"form-control\" id=\"telephone\" placeholder=\"Digite o Telefone\"\r\n                                               formControlName=\"telephone\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"text-center\">\r\n                                    <button type=\"button\" class=\"btn btn-success\" *ngIf=\"clientSearch\" [routerLink]=\"['/cart']\">Iniciar Venda\r\n                                    </button>\r\n                                    <button type=\"button\" class=\"btn btn-success\" *ngIf=\"!clientSearch\" [routerLink]=\"['/cart']\">Iniciar Venda\r\n                                        sem Cadastro\r\n                                    </button>\r\n                                    <button type=\"button\" class=\"btn btn-danger\" *ngIf=\"!clientSearch\" [routerLink]=\"['/new-client/true']\">\r\n                                        Cadastrar\r\n                                        Cliente\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        \r\n                        </form>\r\n\r\n                 </div>\r\n            </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div id=\"add_project\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n\r\n            <div class=\"modal-content\">\r\n                \r\n                <div class=\"modal-body\">\r\n                       \r\n                            <input type=\"text\" placeholder=\"Project Title\" name=\"name\">\r\n                            <input type=\"text\" placeholder=\"Post of Post\" name=\"mail\">\r\n                            <input type=\"text\" placeholder=\"Author\" name=\"passsword\">\r\n                            <textarea placeholder=\"Desicrption\"></textarea>\r\n                    </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"cancel\" data-dismiss=\"modal\">Close</button>\r\n                    <button type=\"button\" class=\"add-project\" data-dismiss=\"modal\">Save</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/client/search-client/search-client.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/client/search-client/search-client.component.ts ***!
  \****************************************************************************/
/*! exports provided: SearchClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchClientComponent", function() { return SearchClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var cpf_cnpj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cpf_cnpj */ "./node_modules/cpf_cnpj/index.js");
/* harmony import */ var cpf_cnpj__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cpf_cnpj__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/search.service */ "./src/app/services/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchClientComponent = /** @class */ (function () {
    function SearchClientComponent(fb, clientService, searchService) {
        this.fb = fb;
        this.clientService = clientService;
        this.searchService = searchService;
        this.searchForm = fb.group({
            'name': [{ value: '', disabled: true }],
            'telephone': [{ value: '', disabled: true }],
            'cpf': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.validateCPFeCNPJ()]],
            'address': [{ value: '', disabled: true }],
        });
        this.search();
    }
    // carrega os clientes ao iniciar o componente
    SearchClientComponent.prototype.ngOnInit = function () {
        this.clients = this.clientService.getClients();
    };
    // realiza a pesquisa por meio do cpf e cnpj
    SearchClientComponent.prototype.search = function () {
        var _this = this;
        this.searchForm.get('cpf').valueChanges.subscribe(function (cpf) {
            var clientSearch = _this.clientService.getClientByCpf(cpf);
            _this.searchService.setCPF(cpf);
            if (clientSearch) {
                _this.clientSearch = true;
                _this.searchForm.patchValue({ name: clientSearch.name, email: clientSearch.telephone });
            }
            else {
                _this.clientSearch = false;
                _this.searchService.setCPF_NCadastrado(cpf);
            }
        });
    };
    // realiza a validação tanto pra CPF quanto para CNPJ
    SearchClientComponent.prototype.validateCPFeCNPJ = function () {
        return function (control) {
            var invalid = cpf_cnpj__WEBPACK_IMPORTED_MODULE_3__["CPF"].isValid(control.value);
            var invalid2 = cpf_cnpj__WEBPACK_IMPORTED_MODULE_3__["CNPJ"].isValid(control.value);
            if (invalid) {
                return !invalid ? { valid: invalid } : null;
            }
            else if (invalid2) {
                return !invalid2 ? { valid: invalid2 } : null;
            }
            else {
                return !invalid ? { valid: invalid } : null;
            }
        };
    };
    SearchClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-client',
            template: __webpack_require__(/*! ./search-client.component.html */ "./src/app/components/client/search-client/search-client.component.html"),
            styles: [__webpack_require__(/*! ./search-client.component.css */ "./src/app/components/client/search-client/search-client.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"], _services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"]])
    ], SearchClientComponent);
    return SearchClientComponent;
}());



/***/ }),

/***/ "./src/app/components/employee/edit-employee/edit-employee.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/employee/edit-employee/edit-employee.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-center{\r\n  margin-left: 45%;\r\n}\r\n\r\n\r\n.action {\r\n    margin-top: 40px;\r\n  }\r\n\r\n\r\n.image {\r\n    width: 200px;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n\r\n.image-config {\r\n    margin-bottom: 40px;\r\n  }\r\n\r\n\r\n.action {\r\n    margin-top: 40px;\r\n  }\r\n\r\n\r\n.dashboard{\r\n    \r\n    position:absolute;\r\n    top:0;\r\n    left:0;\r\n    z-index:11;\r\n    width:100%;\r\n    height:100%;\r\n   \r\n  }\r\n\r\n\r\n.image {\r\n  width: 200px;\r\n  margin-bottom: 10px;\r\n  }\r\n\r\n\r\n.image-config {\r\n  margin-bottom: 40px;\r\n  }\r\n\r\n\r\n/*Main CSS*/\r\n\r\n\r\n/*Login Signup Page*/\r\n\r\n\r\na:focus,a:hover,a{\r\n  outline:none;\r\n  text-decoration: none;\r\n  }\r\n\r\n\r\nli,ul{\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  }\r\n\r\n\r\n.header-top i {\r\n  font-size: 18px;\r\n  }\r\n\r\n\r\n.bg-image {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: table;\r\n  }\r\n\r\n\r\n.login-header {\r\n  display: inline-block;\r\n  width: 100%;\r\n  background: #0e1a35;\r\n  }\r\n\r\n\r\n.login-signup {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n  width: 100%;\r\n  }\r\n\r\n\r\n.login-logo img {\r\n  cursor: pointer;\r\n  max-width: 171px;\r\n  padding: 23px 15px 22px;\r\n  width: 100%;\r\n  }\r\n\r\n\r\n.login-header .navbar-right {\r\n  margin-right: 0px;\r\n  }\r\n\r\n\r\n.login-header .nav-tabs > li.active > a,\r\n  .login-header .nav-tabs > li.active > a:focus,\r\n  .login-header .nav-tabs > li.active > a:hover {\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #fff;\r\n  }\r\n\r\n\r\n.login-header .nav-tabs > li > a {\r\n  border: medium none;\r\n  border-radius: 0;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  line-height: 48px;\r\n  padding: 15px 30px;\r\n  color: #fff;\r\n  }\r\n\r\n\r\n.login-header .nav-tabs {\r\n  border-bottom: none;\r\n  }\r\n\r\n\r\n.login-header .nav-tabs > li {\r\n  margin-bottom: 0px;\r\n  }\r\n\r\n\r\n.login-header .nav > li > a:focus,\r\n  .login-header .nav > li > a:hover {\r\n  background: none;\r\n  text-decoration: none;\r\n  }\r\n\r\n\r\n.login-header .nav-tabs > li.active {\r\n  border-bottom: 6px solid #5584ff;\r\n  }\r\n\r\n\r\n.login-inner h1 {\r\n  color: #8492af;\r\n  font-size: 48px;\r\n  font-weight: 300;\r\n  text-align: center;\r\n  margin-top: 0;\r\n  margin-bottom: 20px;\r\n  }\r\n\r\n\r\n.login-inner h1 span {\r\n  color: #5584ff;\r\n  }\r\n\r\n\r\n.login-form {\r\n  text-align: center;\r\n  }\r\n\r\n\r\n.login-form input {\r\n  -moz-border-bottom-colors: none;\r\n  -moz-border-left-colors: none;\r\n  -moz-border-right-colors: none;\r\n  -moz-border-top-colors: none;\r\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n  border-color: -moz-use-text-color -moz-use-text-color #d4d9e3;\r\n  -o-border-image: none;\r\n     border-image: none;\r\n  border-style: none none solid;\r\n  border-width: medium medium 1px;\r\n  font-size: 13px;\r\n  font-weight: 300;\r\n  width: 100%;\r\n  color: #8492af;\r\n  padding: 15px 50px;\r\n  font-size: 17px;\r\n  max-width: 550px;\r\n  }\r\n\r\n\r\n.login-form label {\r\n  margin-bottom: 30px;\r\n  width: 100%;\r\n  }\r\n\r\n\r\n.login-signup .tab-content {\r\n  background: #ffffff none repeat scroll 0 0;\r\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.176);\r\n  display: inline-block;\r\n  margin-top: -8px;\r\n  width: 100%;\r\n  }\r\n\r\n\r\n.form-btn {\r\n  background: #5584ff none repeat scroll 0 0;\r\n  border: medium none;\r\n  border-radius: 100px;\r\n  color: #ffffff;\r\n  font-weight: 400;\r\n  max-width: 250px;\r\n  padding: 10px 0;\r\n  position: relative;\r\n  width: 100%;\r\n  margin: 40px 0;\r\n  box-shadow: 0 2px 8px #d2d2d2;\r\n  -moz-box-shadow: 0 2px 8px #d2d2d2;\r\n  -webkit-box-shadow: 0 2px 8px #d2d2d2;\r\n  }\r\n\r\n\r\n.form-btn::before {\r\n  content: \"\";\r\n  font-family: FontAwesome;\r\n  position: absolute;\r\n  right: 17px;\r\n  top: 9px;\r\n  }\r\n\r\n\r\n.form-details {\r\n  padding: 35px 0;\r\n  }\r\n\r\n\r\n.tab-content .tab-pane {\r\n  padding: 70px 0;\r\n  }\r\n\r\n\r\n/*Login Signup Page*/\r\n\r\n\r\n/*Home Page*/\r\n\r\n\r\n.home {\r\n  background: #f6f7fa;\r\n  }\r\n\r\n\r\n#navigation {\r\n  background: #0e1a35;\r\n  }\r\n\r\n\r\n#navigation {\r\n  padding: 0;\r\n  }\r\n\r\n\r\n.display-table {\r\n  display: table;\r\n  padding: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  }\r\n\r\n\r\n.display-table-row {\r\n  display: table-row;\r\n  height: 100%;\r\n  }\r\n\r\n\r\n.display-table-cell {\r\n  display: table-cell;\r\n  float: none;\r\n  height: 100%;\r\n  }\r\n\r\n\r\n.v-align {\r\n  vertical-align: top;\r\n  }\r\n\r\n\r\n.logo img {\r\n  max-width: 180px;\r\n  padding: 16px 0 17px;\r\n  width: 100%;\r\n  }\r\n\r\n\r\n.header-top {\r\n  margin: 0;\r\n  padding-top: 2px;\r\n  }\r\n\r\n\r\n.header-top img {\r\n  border-radius: 50%;\r\n  max-width: 48px !important;\r\n  width: 100%;\r\n  }\r\n\r\n\r\n.add-project {\r\n  background: #5584ff none repeat scroll 0 0;\r\n  border-radius: 100px;\r\n  color: #ffffff;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  padding: 10px 27px 10px 45px;\r\n  position: relative;\r\n  }\r\n\r\n\r\n.header-rightside .nav > li > a:focus,\r\n  .header-rightside .nav > li > a:hover {\r\n  background: none;\r\n  text-decoration: none;\r\n  }\r\n\r\n\r\n.add-project::before {\r\n  content: \"\";\r\n  ;\r\n  height: 12px;\r\n  left: 17px;\r\n  position: absolute;\r\n  top: 12px;\r\n  width: 12px;\r\n  }\r\n\r\n\r\n.add-project:hover {\r\n  color: #ffffff;\r\n  }\r\n\r\n\r\n.header-top i {\r\n  color: #0e1a35;\r\n  }\r\n\r\n\r\n.icon-info {\r\n  position: relative;\r\n  }\r\n\r\n\r\n.navi i {\r\n  font-size: 20px;\r\n  }\r\n\r\n\r\n.label.label-primary {\r\n  border-radius: 50%;\r\n  font-size: 9px;\r\n  left: 8px;\r\n  position: absolute;\r\n  top: -9px;\r\n  }\r\n\r\n\r\n.icon-info .label {\r\n  border: 2px solid #ffffff;\r\n  font-weight: 500;\r\n  padding: 3px 5px;\r\n  text-align: center;\r\n  }\r\n\r\n\r\n.header-top li {\r\n  display: inline-block;\r\n  text-align: center;\r\n  }\r\n\r\n\r\n.header-top .dropdown-toggle {\r\n  color: #0e1a35;\r\n  }\r\n\r\n\r\n.header-top .dropdown-menu {\r\n  border: medium none;\r\n  left: -85px;\r\n  padding: 17px;\r\n  }\r\n\r\n\r\n.view {\r\n  background: #5584ff none repeat scroll 0 0;\r\n  border-radius: 100px;\r\n  color: #ffffff;\r\n  display: inline-block;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  margin-top: 10px;\r\n  padding: 10px 15px;\r\n  }\r\n\r\n\r\n.navbar-content > span {\r\n  font-size: 13px;\r\n  font-weight: 700;\r\n  }\r\n\r\n\r\n.img-responsive {\r\n  width: 100%;\r\n  }\r\n\r\n\r\n#navigation{\r\n  transition: all 0.5s ease;\r\n  }\r\n\r\n\r\n.search input {\r\n  border: none;\r\n  font-size: 15px;\r\n  padding: 15px 9px;\r\n  width: 100%;\r\n  color: #8492af;\r\n  }\r\n\r\n\r\nheader {\r\n  background: #ffffff none repeat scroll 0 0;\r\n  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.04);\r\n  display: inline-block !important;\r\n  line-height: 23px;\r\n  padding: 15px;\r\n  transition: all 0.5s ease 0s;\r\n  width: 100%;\r\n  transition: all 0.5s ease;\r\n  }\r\n\r\n\r\n.logo {\r\n  text-align: center;\r\n  }\r\n\r\n\r\n.navi a {\r\n  border-bottom: 1px solid #0d172e;\r\n  border-top: 1px solid #0d172e;\r\n  color: #ffffff;\r\n  display: block;\r\n  font-size: 17px;\r\n  font-weight: 500;\r\n  padding: 28px 20px;\r\n  text-decoration: none;\r\n  }\r\n\r\n\r\n.navi i {\r\n  margin-right: 15px;\r\n  color: #5584ff;\r\n  }\r\n\r\n\r\n.navi .active a {\r\n  background: #122143;\r\n  border-left: 5px solid #5584ff;\r\n  padding-left: 15px;\r\n  }\r\n\r\n\r\n.navi a:hover {\r\n  background: #122143 none repeat scroll 0 0;\r\n  border-left: 5px solid #5584ff;\r\n  display: block;\r\n  padding-left: 15px;\r\n  }\r\n\r\n\r\n.navbar-default {\r\n  background-color: #ffffff;\r\n  border-color: #ffffff;\r\n  }\r\n\r\n\r\n.navbar-toggle {\r\n  border: none;\r\n  }\r\n\r\n\r\n.navbar-default .navbar-toggle:focus,\r\n  .navbar-default .navbar-toggle:hover {\r\n  background-color: rgba(0, 0, 0, 0);\r\n  }\r\n\r\n\r\n.navbar-default .navbar-toggle .icon-bar {\r\n  background-color: #0e1a35;\r\n  }\r\n\r\n\r\n.circle-logo {\r\n  margin: 0 auto;\r\n  max-width: 30px !important;\r\n  text-align: center;\r\n  }\r\n\r\n\r\n.hidden-xs{\r\n  transition: all 0.5s ease;\r\n  }\r\n\r\n\r\n.user-dashboard {\r\n  padding: 0 20px;\r\n  }\r\n\r\n\r\n.user-dashboard h1 {\r\n  color: #0e1a35;\r\n  font-size: 30px;\r\n  font-weight: 500;\r\n  margin: 0;\r\n  padding: 21px 0;\r\n  }\r\n\r\n\r\n.sales {\r\n  background: #ffffff none repeat scroll 0 0;\r\n  border: 1px solid #d4d9e3;\r\n  display: inline-block;\r\n  padding: 15px;\r\n  width: 100%;\r\n  }\r\n\r\n\r\n.sales button {\r\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n  border: 1px solid #dadee7;\r\n  border-radius: 100px;\r\n  font-size: 15px;\r\n  letter-spacing: 0.5px;\r\n  padding-right: 32px;\r\n  color: #0e1a35;\r\n  }\r\n\r\n\r\n.sales button::before {\r\n  content: \"\";\r\n  font-family: FontAwesome;\r\n  position: absolute;\r\n  right: 12px;\r\n  top: 11px;\r\n  }\r\n\r\n\r\n.sales  .btn-group {\r\n  float: right;\r\n  }\r\n\r\n\r\n.sales h2 {\r\n  color: #8492af;\r\n  float: left;\r\n  font-size: 21px;\r\n  font-weight: 600;\r\n  margin: 0;\r\n  padding: 9px 0 0;\r\n  }\r\n\r\n\r\n.btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  letter-spacing: 0.5px;\r\n  }\r\n\r\n\r\n.sales .dropdown-menu{\r\n  margin: 0px;\r\n  padding: 0px;\r\n  border: 0px;\r\n  border-radius: 8px;\r\n  width: 100%;\r\n  color: #0e1a35;\r\n  }\r\n\r\n\r\n.sales .btn-group.open .dropdown-toggle, .btn.active, .btn:active{\r\n  box-shadow: none;\r\n  }\r\n\r\n\r\n.sales .dropdown-menu > a {\r\n  color: #0e1a35;\r\n  display: inline-block;\r\n  font-weight: 800;\r\n  padding: 9px 0;\r\n  text-align: center;\r\n  width: 100%;\r\n  }\r\n\r\n\r\n#my-cool-chart svg {\r\n  width: 100%;\r\n  }\r\n\r\n\r\n.sales .dropdown-menu > a:hover{\r\n  color: #5584FF;   \r\n  }\r\n\r\n\r\n.shield-buttons {\r\n  display: none;\r\n  }\r\n\r\n\r\n.close, .close:focus, .close:hover {\r\n  color: #fff;;\r\n  opacity: 1;\r\n  text-shadow: none;\r\n  }\r\n\r\n\r\n.modal-body input {\r\n  border: 1px solid #d4d9e3;\r\n  font-size: 14px;\r\n  font-weight: 300;\r\n  margin: 5px 0;\r\n  padding: 14px 10px;\r\n  width: 100%;\r\n  color: #8492af;\r\n  }\r\n\r\n\r\n.modal-body textarea {\r\n  border: 1px solid #d4d9e3;\r\n  font-size: 14px;\r\n  font-weight: 300;\r\n  height: 200px;\r\n  margin-top: 5px;\r\n  padding: 9px 10px;\r\n  width: 100%;\r\n  color: #8492af;\r\n  }\r\n\r\n\r\n.modal-header.login-header h4 {\r\n  color: #ffffff;\r\n  }\r\n\r\n\r\n.modal-footer .add-project {\r\n  background: #5584ff none repeat scroll 0 0;\r\n  border: medium none;\r\n  border-radius: 100px;\r\n  color: #ffffff;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  padding: 10px 30px;\r\n  position: relative;\r\n  }\r\n\r\n\r\n.modal-footer .add-project::before{display: none;}\r\n\r\n\r\n.modal-footer {\r\n  border: 0 none;\r\n  padding: 10px 15px 26px;\r\n  text-align: right;\r\n  }\r\n\r\n\r\n.cancel {\r\n  background: #0E1A35     ;\r\n  border: medium none;\r\n  border-radius: 100px;\r\n  color: #ffffff;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  padding: 10px 30px;\r\n  position: relative;\r\n  \r\n  }\r\n\r\n\r\n.modal{\r\n  top: 20%; \r\n  }\r\n\r\n\r\n.modal-header .close {\r\n  margin-top: 2px;\r\n  }\r\n\r\n\r\n.search input:focus{\r\n  border-bottom: 1px solid #BDC4D4;\r\n  line-height:22px;\r\n  transition: 0.1s all;\r\n  }\r\n\r\n\r\n.modal-header.login-header {\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n  }\r\n\r\n\r\n/*Main CSS*/\r\n\r\n\r\n@media only screen and (max-device-width: 767px) {\r\n  .login-logo img {\r\n    margin: 0 auto;\r\n  }\r\n  .login-details .nav-tabs > li {\r\n    text-align: center;\r\n    width: 50%;\r\n  }\r\n  .login-signup .login-inner h1 {\r\n    font-size: 26px;\r\n    margin-bottom: 0;\r\n    margin-top: 10px;\r\n  }\r\n  .login-inner .login-form input {\r\n    font-size: 15px;\r\n    max-width: 100%;\r\n    padding: 15px 45px;\r\n  }\r\n  .login-inner .form-details {\r\n    padding: 25px;\r\n  }\r\n  .login-inner .login-form label {\r\n    margin-bottom: 20px;\r\n    width: 100%;\r\n  }\r\n  .login-inner .form-btn {\r\n    margin: 0;\r\n    max-width: 180px;\r\n  }\r\n  .tab-content .tab-pane {\r\n    padding: 20px 0;\r\n  }\r\n  #navigation .navi a {\r\n    font-size: 14px;\r\n    padding: 20px;\r\n    text-align: center;\r\n  }\r\n  #navigation .navi i {\r\n    margin-right: 0px;\r\n  }\r\n  #navigation .navi a:hover,\r\n  #navigation .navi .active a {\r\n    background: #122143 none repeat scroll 0 0;\r\n    border-left: none;\r\n    display: block;\r\n    padding-left: 20px;\r\n  }\r\n  header .header-top img {\r\n    max-width: 38px !important;\r\n  }\r\n  .v-align header {\r\n    padding: 12px 15px;\r\n  }\r\n  header .header-top li {\r\n    padding-left: 13px;\r\n    padding-right: 6px;\r\n  }\r\n  .navbar-default .navbar-toggle {\r\n    border-color: rgba(0, 0, 0, 0);\r\n  }\r\n  .navbar-header .navbar-toggle {\r\n    float: left;\r\n    margin: 0;\r\n    padding: 0;\r\n    top: 12px;\r\n  }\r\n  button,\r\n    html [type=\"button\"],\r\n    [type=\"reset\"],\r\n    [type=\"submit\"] {\r\n        outline: medium none;\r\n  }\r\n  .user-dashboard .sales h2 {\r\n    color: #8492af;\r\n    float: left;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    margin: 0;\r\n    padding: 13px 0 0;\r\n  }\r\n  .user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\n    font-size: 11px;\r\n  }\r\n  .user-dashboard .sales button {\r\n    font-size: 11px;\r\n    padding-right: 23px;\r\n  }  \r\n  .user-dashboard .sales h2 {\r\n  font-size: 12px;\r\n  }\r\n  .gutter{\r\n  padding: 0;\r\n  }\r\n  }\r\n\r\n\r\n@media only screen and (max-device-width: 992px) {\r\n  header .header-top li {\r\n    padding-left: 20px !important;\r\n    padding-right: 0;\r\n  }\r\n  header .logo img {\r\n    max-width: 125px !important;\r\n  }\r\n  \r\n  }\r\n\r\n\r\n@media only screen and (min-device-width: 767px) and (max-device-width: 998px){\r\n  .user-dashboard .header-top {\r\n    padding-top: 5px;\r\n  }\r\n  .user-dashboard .header-rightside {\r\n    display: inline-block;\r\n    float: left;\r\n    width: 100%;\r\n  }\r\n  .user-dashboard .header-rightside .header-top img {\r\n    max-width: 41px !important;\r\n  } \r\n  .user-dashboard .sales button {\r\n  font-size: 10px;\r\n  }\r\n  .user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\n  font-size: 12px;\r\n  }\r\n  .user-dashboard .sales h2 {\r\n  font-size: 15px;\r\n  }\r\n  }\r\n\r\n\r\n@media only screen and (min-device-width:998px) and (max-device-width: 1350px){\r\n    #navigation .logo img {\r\n  max-width: 130px;\r\n  padding: 16px 0 17px;\r\n  width: 100%;\r\n  }\r\n  }\r\n\r\n\r\n.loginbox{  \r\n    background: white;\r\n    color: black;    \r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-right: -50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%); \r\n    padding: 20px;   \r\n    box-shadow: 0 8px 50px -2px #000;\r\n    border-radius:5px;\r\n  \r\n  }\r\n\r\n\r\n.logo{\r\n    width: 130px; \r\n    height: 55px;\r\n    margin-left: 10%;\r\n  }\r\n\r\n\r\n.loginbox_content{\r\n    padding:5% 11% 5% 11%;\r\n  \r\n  }\r\n\r\n\r\n.singtext{\r\n    font-family: \"Open Sans\",sans-serif;\r\n    font-size: 27px;  \r\n    color:  #42a5f5;\r\n    float: right;\r\n    padding-right: 25%;\r\n  }\r\n\r\n\r\n.background-image {\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n  \r\n    display: block;\r\n    background-color: #42a5f5;\r\n    width: 100%;\r\n    height: 800px;\r\n  \r\n  }\r\n  \r\n  "

/***/ }),

/***/ "./src/app/components/employee/edit-employee/edit-employee.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/employee/edit-employee/edit-employee.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\r\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\r\n<meta name=\"viewport\" content=\"width=device-width, user-scalable=no\"> \r\n\r\n\r\n<div  class=\"dashboard\">\r\n<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css\" rel=\"stylesheet\" integrity=\"sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1\" crossorigin=\"anonymous\">\r\n    <div class=\"container-fluid display-table\">\r\n        <div class=\"row display-table-row\">\r\n            <div class=\"col-md-2 col-sm-1 hidden-xs display-table-cell v-align box\" id=\"navigation\">\r\n                <div class=\"logo\">\r\n                    <a hef=\"home.html\"><img src=\"assets\\imagens\\logo.png\" alt=\"merkery_logo\" class=\"hidden-xs hidden-sm\">\r\n                        <img src=\"http://jskrishna.com/work/merkury/images/circle-logo.png\" alt=\"merkery_logo\" class=\"visible-xs visible-sm circle-logo\">\r\n                    </a>\r\n                </div>\r\n                <div class=\"navi\">\r\n                    <ul>\r\n                        <li><a routerLink=\"/home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Home</span></a></li>\r\n                        <li><a routerLink=\"/search-client\"> <i class=\"fa fa-tasks\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\"> Iniciar Venda </span></a></li>\r\n                        <li><a routerLink=\"/clients\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Clientes </span></a></li>\r\n                        <li><a routerLink=\"/products\"><i class=\"fa fa-list-ol\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Produtos </span></a></li>\r\n                        <li class=\"active\"><a routerLink=\"/employees\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Funcionários </span></a></li>\r\n                        <li><a routerLink=\"/home\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Estatísticas</span></a></li>\r\n                        <li><a routerLink=\"/settings\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\" > Configurações</span></a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-10 col-sm-11 display-table-cell v-align\">\r\n                <div class=\"row\">\r\n                    <header>\r\n                        <div class=\"col-md-7\">\r\n                            <nav class=\"navbar-default pull-left\">\r\n                                <div class=\"navbar-header\">\r\n                                    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"offcanvas\" data-target=\"#side-menu\" aria-expanded=\"false\">\r\n                                        <span class=\"sr-only\">Toggle navigation</span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                    </button>\r\n                                </div>\r\n                            </nav>\r\n                            <div class=\"search hidden-xs hidden-sm\">\r\n                                <input type=\"text\" placeholder=\"Busca\" id=\"search\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"header-rightside\">\r\n                                <ul class=\"list-inline header-top pull-right\">\r\n                                    <li><a href=\"#\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a></li>\r\n                                    <li>\r\n                                        <a href=\"#\" class=\"icon-info\">\r\n                                            <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\r\n                                            <span class=\"label label-primary\">3</span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li class=\"dropdown\">\r\n                                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">User\r\n                                            <b class=\"caret\"></b></a>\r\n                                        <ul class=\"dropdown-menu\">\r\n                                            <li>\r\n                                                <div class=\"navbar-content\">\r\n                                                    <span>Ivan </span>\r\n                                                    <p class=\"text-muted small\">\r\n                                                        ivanalves94@gmail.com\r\n                                                    </p>\r\n                                                    <div class=\"divider\">\r\n                                                    </div>\r\n                                                    <a href=\"#\" class=\"view btn-sm active\">View Profile</a>\r\n                                                </div>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </header>\r\n                </div>\r\n\r\n                <div class=\"user-dashboard\">\r\n                       \r\n\r\n\r\n                  \r\n\r\n                  <popup #popupEditarEmpregadoSucesso (confirmClick)=\"Confirm()\"  style=\"overflow:hidden\">\r\n                    Funcionário Atualizado com Sucesso!\r\n                  </popup>\r\n                  \r\n                  <form [formGroup]=\"employeeForm\" (submit)=\"onSubmit()\" >\r\n\r\n\r\n                    <div class=\"container\">  \r\n                    <div class=\"col-lg-6 col-md-6 col-sm-8  loginbox\">\r\n                        <div class=\" row\">\r\n                            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-6\">\r\n                                <img src=\"assets\\imagens\\logo.png\" alt=\"Logo\" class=\"logo\"> \r\n                            </div>\r\n                            <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-6  \">\r\n                                <span class=\"singtext\" color=\"blue\" > Editar Funcionário </span>   \r\n                            </div>\r\n                                        \r\n                        </div>\r\n        \r\n                        \r\n                        <div class=\" row loginbox_content \">                        \r\n                           \r\n                            <label for=\"name\" class=\" control-label\"> Nome: </label>\r\n                            <br>\r\n                            <div class=\"input-group input-group-sm\" >\r\n                                <span class=\"input-group-addon\">\r\n                                    <span></span>\r\n                                </span>\r\n                                <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Digite o Nome\" formControlName=\"name\">\r\n                            </div>\r\n                            <br>\r\n                            <label for=\"telephone\" class=\"control-label\">Email:</label>\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <span class=\"input-group-addon\"> </span>\r\n                                <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Digite o email\"\r\n                                formControlName=\"email\">   \r\n                            </div> \r\n                            <br> \r\n                            <label for=\"cpf\" class=\"control-label\"> CPF:</label>\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <span class=\"input-group-addon\"> </span>\r\n                                <input type=\"text\" class=\"form-control\" id=\"cpf\" placeholder=\"Digite o CPF\" formControlName=\"cpf\">\r\n                            \r\n                            </div> \r\n                            \r\n                        </div>\r\n                        <div >\r\n                            <div >\r\n                                <button type=\"submit\" class=\"btn btn-primary btn-center\" [disabled]=\"employeeForm.invalid\">\r\n                                        Atualizar\r\n                                </button>\r\n                            </div>\r\n                        </div> \r\n                    </div>\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-4 \"></div>\r\n        \r\n                 </div>       \r\n         \r\n                \r\n            </form>\r\n\r\n\r\n               \r\n            </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div id=\"add_project\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n\r\n            <div class=\"modal-content\">\r\n                \r\n                <div class=\"modal-body\">\r\n                       \r\n                            <input type=\"text\" placeholder=\"Project Title\" name=\"name\">\r\n                            <input type=\"text\" placeholder=\"Post of Post\" name=\"mail\">\r\n                            <input type=\"text\" placeholder=\"Author\" name=\"passsword\">\r\n                            <textarea placeholder=\"Desicrption\"></textarea>\r\n                    </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"cancel\" data-dismiss=\"modal\">Close</button>\r\n                    <button type=\"button\" class=\"add-project\" data-dismiss=\"modal\">Save</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/employee/edit-employee/edit-employee.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/employee/edit-employee/edit-employee.component.ts ***!
  \******************************************************************************/
/*! exports provided: EditEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEmployeeComponent", function() { return EditEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_opd_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-opd-popup */ "./node_modules/ng2-opd-popup/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditEmployeeComponent = /** @class */ (function () {
    function EditEmployeeComponent(fb, employeeService, router, activatedRoute) {
        var _this = this;
        this.fb = fb;
        this.employeeService = employeeService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.params.forEach(function (params) {
            var id = params['id'];
            var employee = _this.employeeService.getEmployeeById(+id);
            _this.employeeForm = fb.group({
                'id': [employee.id],
                'name': [employee.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                'email': [employee.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
                'cpf': [employee.cpf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
        });
    }
    EditEmployeeComponent.prototype.onSubmit = function () {
        this.employeeService.updateEmployee(this.employeeForm.value);
        this.popupEditarEmpregadoSucesso.options = {
            confirmBtnContent: 'Confirmar',
            cancleBtnClass: 'btn btn-default',
            confirmBtnClass: 'btn btn-default',
            color: '#5cb85c',
            header: 'Sucesso',
            widthProsentage: 60,
            animation: 'bounceInDown'
        };
        this.popupEditarEmpregadoSucesso.show(this.popupEditarEmpregadoSucesso.options);
    };
    EditEmployeeComponent.prototype.Confirm = function () {
        this.router.navigate(['employees']);
    };
    EditEmployeeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('popupEditarEmpregadoSucesso'),
        __metadata("design:type", ng2_opd_popup__WEBPACK_IMPORTED_MODULE_4__["Popup"])
    ], EditEmployeeComponent.prototype, "popupEditarEmpregadoSucesso", void 0);
    EditEmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-employee',
            template: __webpack_require__(/*! ./edit-employee.component.html */ "./src/app/components/employee/edit-employee/edit-employee.component.html"),
            styles: [__webpack_require__(/*! ./edit-employee.component.css */ "./src/app/components/employee/edit-employee/edit-employee.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditEmployeeComponent);
    return EditEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/components/employee/item-employee/item-employee.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/employee/item-employee/item-employee.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/employee/item-employee/item-employee.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/employee/item-employee/item-employee.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<td>{{employee.name}}</td>\r\n<td>{{employee.email}}</td>\r\n<td>{{employee.cpf}}</td>\r\n<td>\r\n  <button type=\"button\" class=\"btn btn-success\" [routerLink]=\"['/edit-employee', employee.id]\">\r\n    <span class=\"glyphicon glyphicon-pencil\"></span>\r\n  </button>\r\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"removeEmployee()\">\r\n    <span class=\"glyphicon glyphicon-trash\"></span>\r\n  </button>\r\n</td>\r\n"

/***/ }),

/***/ "./src/app/components/employee/item-employee/item-employee.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/employee/item-employee/item-employee.component.ts ***!
  \******************************************************************************/
/*! exports provided: ItemEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemEmployeeComponent", function() { return ItemEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_employee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/employee */ "./src/app/models/employee.ts");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/employee.service */ "./src/app/services/employee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemEmployeeComponent = /** @class */ (function () {
    function ItemEmployeeComponent(employeeService) {
        this.employeeService = employeeService;
        this.removeEmployeeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ItemEmployeeComponent.prototype.ngOnInit = function () {
        this.employees = this.employeeService.getEmployees();
    };
    // onRemoveEmployee() {
    //   this.employees = this.employeeService.getEmployees();
    // }
    ItemEmployeeComponent.prototype.removeEmployee = function () {
        this.employeeService.removeEmployee(this.employee);
        this.removeEmployeeEvent.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_employee__WEBPACK_IMPORTED_MODULE_1__["Employee"])
    ], ItemEmployeeComponent.prototype, "employee", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemEmployeeComponent.prototype, "removeEmployeeEvent", void 0);
    ItemEmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[app-item-employee]',
            template: __webpack_require__(/*! ./item-employee.component.html */ "./src/app/components/employee/item-employee/item-employee.component.html"),
            styles: [__webpack_require__(/*! ./item-employee.component.css */ "./src/app/components/employee/item-employee/item-employee.component.css")]
        }),
        __metadata("design:paramtypes", [_services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]])
    ], ItemEmployeeComponent);
    return ItemEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/components/employee/list-employees/list-employees.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/employee/list-employees/list-employees.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-circle {\r\n  border-radius: 50%;\r\n}\r\n.action {\r\n  margin-top: 40px;\r\n}\r\n.image {\r\n  width: 200px;\r\n  margin-bottom: 10px;\r\n}\r\n.image-config {\r\n  margin-bottom: 40px;\r\n}\r\n.action {\r\n  margin-top: 40px;\r\n}\r\n.dashboard{\r\n  \r\n  position:absolute;\r\n  top:0;\r\n  left:0;\r\n  z-index:11;\r\n  width:100%;\r\n  height:100%;\r\n \r\n}\r\n.image {\r\nwidth: 200px;\r\nmargin-bottom: 10px;\r\n}\r\n.image-config {\r\nmargin-bottom: 40px;\r\n}\r\n/*Main CSS*/\r\n/*Login Signup Page*/\r\na:focus,a:hover,a{\r\noutline:none;\r\ntext-decoration: none;\r\n}\r\nli,ul{\r\nlist-style: none;\r\npadding: 0;\r\nmargin: 0;\r\n}\r\n.header-top i {\r\nfont-size: 18px;\r\n}\r\n.bg-image {\r\nposition: relative;\r\nwidth: 100%;\r\nheight: 100vh;\r\ndisplay: table;\r\n}\r\n.login-header {\r\ndisplay: inline-block;\r\nwidth: 100%;\r\nbackground: #0e1a35;\r\n}\r\n.login-signup {\r\ndisplay: table-cell;\r\nvertical-align: middle;\r\nwidth: 100%;\r\n}\r\n.login-logo img {\r\ncursor: pointer;\r\nmax-width: 171px;\r\npadding: 23px 15px 22px;\r\nwidth: 100%;\r\n}\r\n.login-header .navbar-right {\r\nmargin-right: 0px;\r\n}\r\n.login-header .nav-tabs > li.active > a,\r\n.login-header .nav-tabs > li.active > a:focus,\r\n.login-header .nav-tabs > li.active > a:hover {\r\nbackground-color: transparent;\r\nborder: none;\r\ncolor: #fff;\r\n}\r\n.login-header .nav-tabs > li > a {\r\nborder: medium none;\r\nborder-radius: 0;\r\nfont-size: 14px;\r\nfont-weight: 500;\r\nline-height: 48px;\r\npadding: 15px 30px;\r\ncolor: #fff;\r\n}\r\n.login-header .nav-tabs {\r\nborder-bottom: none;\r\n}\r\n.login-header .nav-tabs > li {\r\nmargin-bottom: 0px;\r\n}\r\n.login-header .nav > li > a:focus,\r\n.login-header .nav > li > a:hover {\r\nbackground: none;\r\ntext-decoration: none;\r\n}\r\n.login-header .nav-tabs > li.active {\r\nborder-bottom: 6px solid #5584ff;\r\n}\r\n.login-inner h1 {\r\ncolor: #8492af;\r\nfont-size: 48px;\r\nfont-weight: 300;\r\ntext-align: center;\r\nmargin-top: 0;\r\nmargin-bottom: 20px;\r\n}\r\n.login-inner h1 span {\r\ncolor: #5584ff;\r\n}\r\n.login-form {\r\ntext-align: center;\r\n}\r\n.login-form input {\r\n-moz-border-bottom-colors: none;\r\n-moz-border-left-colors: none;\r\n-moz-border-right-colors: none;\r\n-moz-border-top-colors: none;\r\nbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\nborder-color: -moz-use-text-color -moz-use-text-color #d4d9e3;\r\n-o-border-image: none;\r\n   border-image: none;\r\nborder-style: none none solid;\r\nborder-width: medium medium 1px;\r\nfont-size: 13px;\r\nfont-weight: 300;\r\nwidth: 100%;\r\ncolor: #8492af;\r\npadding: 15px 50px;\r\nfont-size: 17px;\r\nmax-width: 550px;\r\n}\r\n.login-form label {\r\nmargin-bottom: 30px;\r\nwidth: 100%;\r\n}\r\n.login-signup .tab-content {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nbox-shadow: 0 6px 12px rgba(0, 0, 0, 0.176);\r\ndisplay: inline-block;\r\nmargin-top: -8px;\r\nwidth: 100%;\r\n}\r\n.form-btn {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-weight: 400;\r\nmax-width: 250px;\r\npadding: 10px 0;\r\nposition: relative;\r\nwidth: 100%;\r\nmargin: 40px 0;\r\nbox-shadow: 0 2px 8px #d2d2d2;\r\n-moz-box-shadow: 0 2px 8px #d2d2d2;\r\n-webkit-box-shadow: 0 2px 8px #d2d2d2;\r\n}\r\n.form-btn::before {\r\ncontent: \"\";\r\nfont-family: FontAwesome;\r\nposition: absolute;\r\nright: 17px;\r\ntop: 9px;\r\n}\r\n.form-details {\r\npadding: 35px 0;\r\n}\r\n.tab-content .tab-pane {\r\npadding: 70px 0;\r\n}\r\n/*Login Signup Page*/\r\n/*Home Page*/\r\n.home {\r\nbackground: #f6f7fa;\r\n}\r\n#navigation {\r\nbackground: #0e1a35;\r\n}\r\n#navigation {\r\npadding: 0;\r\n}\r\n.display-table {\r\ndisplay: table;\r\npadding: 0;\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.display-table-row {\r\ndisplay: table-row;\r\nheight: 100%;\r\n}\r\n.display-table-cell {\r\ndisplay: table-cell;\r\nfloat: none;\r\nheight: 100%;\r\n}\r\n.v-align {\r\nvertical-align: top;\r\n}\r\n.logo img {\r\nmax-width: 180px;\r\npadding: 16px 0 17px;\r\nwidth: 100%;\r\n}\r\n.header-top {\r\nmargin: 0;\r\npadding-top: 2px;\r\n}\r\n.header-top img {\r\nborder-radius: 50%;\r\nmax-width: 48px !important;\r\nwidth: 100%;\r\n}\r\n.add-project {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 27px 10px 45px;\r\nposition: relative;\r\n}\r\n.header-rightside .nav > li > a:focus,\r\n.header-rightside .nav > li > a:hover {\r\nbackground: none;\r\ntext-decoration: none;\r\n}\r\n.add-project::before {\r\ncontent: \"\";\r\n;\r\nheight: 12px;\r\nleft: 17px;\r\nposition: absolute;\r\ntop: 12px;\r\nwidth: 12px;\r\n}\r\n.add-project:hover {\r\ncolor: #ffffff;\r\n}\r\n.header-top i {\r\ncolor: #0e1a35;\r\n}\r\n.icon-info {\r\nposition: relative;\r\n}\r\n.navi i {\r\nfont-size: 20px;\r\n}\r\n.label.label-primary {\r\nborder-radius: 50%;\r\nfont-size: 9px;\r\nleft: 8px;\r\nposition: absolute;\r\ntop: -9px;\r\n}\r\n.icon-info .label {\r\nborder: 2px solid #ffffff;\r\nfont-weight: 500;\r\npadding: 3px 5px;\r\ntext-align: center;\r\n}\r\n.header-top li {\r\ndisplay: inline-block;\r\ntext-align: center;\r\n}\r\n.header-top .dropdown-toggle {\r\ncolor: #0e1a35;\r\n}\r\n.header-top .dropdown-menu {\r\nborder: medium none;\r\nleft: -85px;\r\npadding: 17px;\r\n}\r\n.view {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\ndisplay: inline-block;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\nmargin-top: 10px;\r\npadding: 10px 15px;\r\n}\r\n.navbar-content > span {\r\nfont-size: 13px;\r\nfont-weight: 700;\r\n}\r\n.img-responsive {\r\nwidth: 100%;\r\n}\r\n#navigation{\r\ntransition: all 0.5s ease;\r\n}\r\n.search input {\r\nborder: none;\r\nfont-size: 15px;\r\npadding: 15px 9px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\nheader {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nbox-shadow: 0 1px 12px rgba(0, 0, 0, 0.04);\r\ndisplay: inline-block !important;\r\nline-height: 23px;\r\npadding: 15px;\r\ntransition: all 0.5s ease 0s;\r\nwidth: 100%;\r\ntransition: all 0.5s ease;\r\n}\r\n.logo {\r\ntext-align: center;\r\n}\r\n.navi a {\r\nborder-bottom: 1px solid #0d172e;\r\nborder-top: 1px solid #0d172e;\r\ncolor: #ffffff;\r\ndisplay: block;\r\nfont-size: 17px;\r\nfont-weight: 500;\r\npadding: 28px 20px;\r\ntext-decoration: none;\r\n}\r\n.navi i {\r\nmargin-right: 15px;\r\ncolor: #5584ff;\r\n}\r\n.navi .active a {\r\nbackground: #122143;\r\nborder-left: 5px solid #5584ff;\r\npadding-left: 15px;\r\n}\r\n.navi a:hover {\r\nbackground: #122143 none repeat scroll 0 0;\r\nborder-left: 5px solid #5584ff;\r\ndisplay: block;\r\npadding-left: 15px;\r\n}\r\n.navbar-default {\r\nbackground-color: #ffffff;\r\nborder-color: #ffffff;\r\n}\r\n.navbar-toggle {\r\nborder: none;\r\n}\r\n.navbar-default .navbar-toggle:focus,\r\n.navbar-default .navbar-toggle:hover {\r\nbackground-color: rgba(0, 0, 0, 0);\r\n}\r\n.navbar-default .navbar-toggle .icon-bar {\r\nbackground-color: #0e1a35;\r\n}\r\n.circle-logo {\r\nmargin: 0 auto;\r\nmax-width: 30px !important;\r\ntext-align: center;\r\n}\r\n.hidden-xs{\r\ntransition: all 0.5s ease;\r\n}\r\n.user-dashboard {\r\npadding: 0 20px;\r\n}\r\n.user-dashboard h1 {\r\ncolor: #0e1a35;\r\nfont-size: 30px;\r\nfont-weight: 500;\r\nmargin: 0;\r\npadding: 21px 0;\r\n}\r\n.sales {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nborder: 1px solid #d4d9e3;\r\ndisplay: inline-block;\r\npadding: 15px;\r\nwidth: 100%;\r\n}\r\n.sales button {\r\nbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\nborder: 1px solid #dadee7;\r\nborder-radius: 100px;\r\nfont-size: 15px;\r\nletter-spacing: 0.5px;\r\npadding-right: 32px;\r\ncolor: #0e1a35;\r\n}\r\n.sales button::before {\r\ncontent: \"\";\r\nfont-family: FontAwesome;\r\nposition: absolute;\r\nright: 12px;\r\ntop: 11px;\r\n}\r\n.sales  .btn-group {\r\nfloat: right;\r\n}\r\n.sales h2 {\r\ncolor: #8492af;\r\nfloat: left;\r\nfont-size: 21px;\r\nfont-weight: 600;\r\nmargin: 0;\r\npadding: 9px 0 0;\r\n}\r\n.btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\nfont-size: 15px;\r\nfont-weight: 600;\r\nletter-spacing: 0.5px;\r\n}\r\n.sales .dropdown-menu{\r\nmargin: 0px;\r\npadding: 0px;\r\nborder: 0px;\r\nborder-radius: 8px;\r\nwidth: 100%;\r\ncolor: #0e1a35;\r\n}\r\n.sales .btn-group.open .dropdown-toggle, .btn.active, .btn:active{\r\nbox-shadow: none;\r\n}\r\n.sales .dropdown-menu > a {\r\ncolor: #0e1a35;\r\ndisplay: inline-block;\r\nfont-weight: 800;\r\npadding: 9px 0;\r\ntext-align: center;\r\nwidth: 100%;\r\n}\r\n#my-cool-chart svg {\r\nwidth: 100%;\r\n}\r\n.sales .dropdown-menu > a:hover{\r\ncolor: #5584FF;   \r\n}\r\n.shield-buttons {\r\ndisplay: none;\r\n}\r\n.close, .close:focus, .close:hover {\r\ncolor: #fff;;\r\nopacity: 1;\r\ntext-shadow: none;\r\n}\r\n.modal-body input {\r\nborder: 1px solid #d4d9e3;\r\nfont-size: 14px;\r\nfont-weight: 300;\r\nmargin: 5px 0;\r\npadding: 14px 10px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\n.modal-body textarea {\r\nborder: 1px solid #d4d9e3;\r\nfont-size: 14px;\r\nfont-weight: 300;\r\nheight: 200px;\r\nmargin-top: 5px;\r\npadding: 9px 10px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\n.modal-header.login-header h4 {\r\ncolor: #ffffff;\r\n}\r\n.modal-footer .add-project {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 30px;\r\nposition: relative;\r\n}\r\n.modal-footer .add-project::before{display: none;}\r\n.modal-footer {\r\nborder: 0 none;\r\npadding: 10px 15px 26px;\r\ntext-align: right;\r\n}\r\n.cancel {\r\nbackground: #0E1A35     ;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 30px;\r\nposition: relative;\r\n\r\n}\r\n.modal{\r\ntop: 20%; \r\n}\r\n.modal-header .close {\r\nmargin-top: 2px;\r\n}\r\n.search input:focus{\r\nborder-bottom: 1px solid #BDC4D4;\r\nline-height:22px;\r\ntransition: 0.1s all;\r\n}\r\n.modal-header.login-header {\r\nborder-top-left-radius: 5px;\r\nborder-top-right-radius: 5px;\r\n}\r\n/*Main CSS*/\r\n@media only screen and (max-device-width: 767px) {\r\n.login-logo img {\r\n  margin: 0 auto;\r\n}\r\n.login-details .nav-tabs > li {\r\n  text-align: center;\r\n  width: 50%;\r\n}\r\n.login-signup .login-inner h1 {\r\n  font-size: 26px;\r\n  margin-bottom: 0;\r\n  margin-top: 10px;\r\n}\r\n.login-inner .login-form input {\r\n  font-size: 15px;\r\n  max-width: 100%;\r\n  padding: 15px 45px;\r\n}\r\n.login-inner .form-details {\r\n  padding: 25px;\r\n}\r\n.login-inner .login-form label {\r\n  margin-bottom: 20px;\r\n  width: 100%;\r\n}\r\n.login-inner .form-btn {\r\n  margin: 0;\r\n  max-width: 180px;\r\n}\r\n.tab-content .tab-pane {\r\n  padding: 20px 0;\r\n}\r\n#navigation .navi a {\r\n  font-size: 14px;\r\n  padding: 20px;\r\n  text-align: center;\r\n}\r\n#navigation .navi i {\r\n  margin-right: 0px;\r\n}\r\n#navigation .navi a:hover,\r\n#navigation .navi .active a {\r\n  background: #122143 none repeat scroll 0 0;\r\n  border-left: none;\r\n  display: block;\r\n  padding-left: 20px;\r\n}\r\nheader .header-top img {\r\n  max-width: 38px !important;\r\n}\r\n.v-align header {\r\n  padding: 12px 15px;\r\n}\r\nheader .header-top li {\r\n  padding-left: 13px;\r\n  padding-right: 6px;\r\n}\r\n.navbar-default .navbar-toggle {\r\n  border-color: rgba(0, 0, 0, 0);\r\n}\r\n.navbar-header .navbar-toggle {\r\n  float: left;\r\n  margin: 0;\r\n  padding: 0;\r\n  top: 12px;\r\n}\r\nbutton,\r\n  html [type=\"button\"],\r\n  [type=\"reset\"],\r\n  [type=\"submit\"] {\r\n      outline: medium none;\r\n}\r\n.user-dashboard .sales h2 {\r\n  color: #8492af;\r\n  float: left;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  margin: 0;\r\n  padding: 13px 0 0;\r\n}\r\n.user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\n  font-size: 11px;\r\n}\r\n.user-dashboard .sales button {\r\n  font-size: 11px;\r\n  padding-right: 23px;\r\n}  \r\n.user-dashboard .sales h2 {\r\nfont-size: 12px;\r\n}\r\n.gutter{\r\npadding: 0;\r\n}\r\n}\r\n@media only screen and (max-device-width: 992px) {\r\nheader .header-top li {\r\n  padding-left: 20px !important;\r\n  padding-right: 0;\r\n}\r\nheader .logo img {\r\n  max-width: 125px !important;\r\n}\r\n\r\n}\r\n@media only screen and (min-device-width: 767px) and (max-device-width: 998px){\r\n.user-dashboard .header-top {\r\n  padding-top: 5px;\r\n}\r\n.user-dashboard .header-rightside {\r\n  display: inline-block;\r\n  float: left;\r\n  width: 100%;\r\n}\r\n.user-dashboard .header-rightside .header-top img {\r\n  max-width: 41px !important;\r\n} \r\n.user-dashboard .sales button {\r\nfont-size: 10px;\r\n}\r\n.user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\nfont-size: 12px;\r\n}\r\n.user-dashboard .sales h2 {\r\nfont-size: 15px;\r\n}\r\n}\r\n@media only screen and (min-device-width:998px) and (max-device-width: 1350px){\r\n  #navigation .logo img {\r\nmax-width: 130px;\r\npadding: 16px 0 17px;\r\nwidth: 100%;\r\n}\r\n}"

/***/ }),

/***/ "./src/app/components/employee/list-employees/list-employees.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/employee/list-employees/list-employees.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\r\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\r\n<meta name=\"viewport\" content=\"width=device-width, user-scalable=no\"> \r\n\r\n\r\n<div  class=\"dashboard\">\r\n<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css\" rel=\"stylesheet\" integrity=\"sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1\" crossorigin=\"anonymous\">\r\n    <div class=\"container-fluid display-table\">\r\n        <div class=\"row display-table-row\">\r\n            <div class=\"col-md-2 col-sm-1 hidden-xs display-table-cell v-align box\" id=\"navigation\">\r\n                <div class=\"logo\">\r\n                    <a hef=\"home.html\"><img src=\"http://automablu.com.br/wp-content/uploads/2018/03/LOGOCOLORIDA.png\" alt=\"merkery_logo\" class=\"hidden-xs hidden-sm\">\r\n                        <img src=\"http://jskrishna.com/work/merkury/images/circle-logo.png\" alt=\"merkery_logo\" class=\"visible-xs visible-sm circle-logo\">\r\n                    </a>\r\n                </div>\r\n                <div class=\"navi\">\r\n                    <ul>\r\n                        <li><a routerLink=\"/home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Home</span></a></li>\r\n                        <li><a routerLink=\"/search-client\"> <i class=\"fa fa-tasks\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\"> Iniciar Venda </span></a></li>\r\n                        <li><a routerLink=\"/clients\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Clientes </span></a></li>\r\n                        <li><a routerLink=\"/products\"><i class=\"fa fa-list-ol\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Produtos </span></a></li>\r\n                        <li class=\"active\"><a routerLink=\"/employees\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Funcionários </span></a></li>\r\n                        <li><a routerLink=\"/home\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Estatísticas</span></a></li>\r\n                        <li><a routerLink=\"/settings\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\" > Configurações</span></a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-10 col-sm-11 display-table-cell v-align\">\r\n                <div class=\"row\">\r\n                    <header>\r\n                        <div class=\"col-md-7\">\r\n                            <nav class=\"navbar-default pull-left\">\r\n                                <div class=\"navbar-header\">\r\n                                    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"offcanvas\" data-target=\"#side-menu\" aria-expanded=\"false\">\r\n                                        <span class=\"sr-only\">Toggle navigation</span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                    </button>\r\n                                </div>\r\n                            </nav>\r\n                            <div class=\"search hidden-xs hidden-sm\">\r\n                                <input type=\"text\" placeholder=\"Busca\" id=\"search\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"header-rightside\">\r\n                                <ul class=\"list-inline header-top pull-right\">\r\n                                    <li><a href=\"#\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a></li>\r\n                                    <li>\r\n                                        <a href=\"#\" class=\"icon-info\">\r\n                                            <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\r\n                                            <span class=\"label label-primary\">3</span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li class=\"dropdown\">\r\n                                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">User\r\n                                            <b class=\"caret\"></b></a>\r\n                                        <ul class=\"dropdown-menu\">\r\n                                            <li>\r\n                                                <div class=\"navbar-content\">\r\n                                                    <span>Ivan </span>\r\n                                                    <p class=\"text-muted small\">\r\n                                                        ivanalves94@gmail.com\r\n                                                    </p>\r\n                                                    <div class=\"divider\">\r\n                                                    </div>\r\n                                                    <a href=\"#\" class=\"view btn-sm active\">View Profile</a>\r\n                                                </div>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </header>\r\n                </div>\r\n\r\n                <div class=\"user-dashboard\">\r\n                       \r\n\r\n\r\n\r\n                  <div class=\"panel panel-primary\">\r\n                    <div class=\"panel-heading text-center\">Funcionários\r\n                      <button type=\"button\" class=\"btn btn-warning btn-circle\" [routerLink]=\"['/new-employee']\">\r\n                        <span class=\"glyphicon glyphicon-plus\"></span>\r\n                      </button>\r\n                    </div>\r\n                    <table class=\"table\">\r\n                      <thead>\r\n                      <tr>\r\n                        <th>Nome</th>\r\n                        <th>Email</th>\r\n                        <th>CPF</th>\r\n                        <th>Ações</th>\r\n                      </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                      <tr app-item-employee *ngFor=\"let employee of employees;\" [employee] = \"employee\"\r\n                          (removeEmployeeEvent)=\"onRemoveEmployee()\"></tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                  \r\n\r\n                </div>\r\n            </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div id=\"add_project\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n\r\n            <div class=\"modal-content\">\r\n                \r\n                <div class=\"modal-body\">\r\n                       \r\n                            <input type=\"text\" placeholder=\"Project Title\" name=\"name\">\r\n                            <input type=\"text\" placeholder=\"Post of Post\" name=\"mail\">\r\n                            <input type=\"text\" placeholder=\"Author\" name=\"passsword\">\r\n                            <textarea placeholder=\"Desicrption\"></textarea>\r\n                    </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"cancel\" data-dismiss=\"modal\">Close</button>\r\n                    <button type=\"button\" class=\"add-project\" data-dismiss=\"modal\">Save</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/employee/list-employees/list-employees.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/employee/list-employees/list-employees.component.ts ***!
  \********************************************************************************/
/*! exports provided: ListEmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEmployeesComponent", function() { return ListEmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_employee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/employee */ "./src/app/models/employee.ts");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/employee.service */ "./src/app/services/employee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListEmployeesComponent = /** @class */ (function () {
    function ListEmployeesComponent(employeeService) {
        this.employeeService = employeeService;
        this.removeEmployeeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ListEmployeesComponent.prototype.ngOnInit = function () {
        this.employees = this.employeeService.getEmployees();
    };
    ListEmployeesComponent.prototype.onRemoveEmployee = function () {
        this.employees = this.employeeService.getEmployees();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_employee__WEBPACK_IMPORTED_MODULE_1__["Employee"])
    ], ListEmployeesComponent.prototype, "employee", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ListEmployeesComponent.prototype, "removeEmployeeEvent", void 0);
    ListEmployeesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-employees',
            template: __webpack_require__(/*! ./list-employees.component.html */ "./src/app/components/employee/list-employees/list-employees.component.html"),
            styles: [__webpack_require__(/*! ./list-employees.component.css */ "./src/app/components/employee/list-employees/list-employees.component.css")]
        }),
        __metadata("design:paramtypes", [_services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]])
    ], ListEmployeesComponent);
    return ListEmployeesComponent;
}());



/***/ }),

/***/ "./src/app/components/employee/new-employee/new-employee.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/employee/new-employee/new-employee.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.login2background{    \r\n  background-repeat:repeat;\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n}\r\n.loginbox{  \r\n  background: white;\r\n  color: black;    \r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin-right: -50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%); \r\n  padding: 20px;   \r\n  box-shadow: 0 8px 50px -2px #000;\r\n  border-radius:5px;\r\n\r\n}\r\n.centraliza{\r\n  text-align:center;\r\n}\r\n.logo{\r\n  width: 130px; \r\n  height: 55px;\r\n  margin-left: 10%;\r\n}\r\n@media (max-width:767px) {\r\n  .loginbox{ \r\n      margin-top: 5%;\r\n  }    \r\n}\r\n.loginbox_content{\r\n  padding:5% 11% 5% 11%;\r\n\r\n}\r\n.singtext{\r\n  font-family: \"Open Sans\",sans-serif;\r\n  font-size: 27px;  \r\n  color:  #42a5f5;\r\n  float: right;\r\n  padding-right: 25%;\r\n}\r\n.submit-btn{\r\n  float: right;\r\n  background-color: #42a5f5;\r\n  margin-right: 28%;\r\n  color: white;\r\n}\r\n.forgotpassword{\r\n  padding-left: 10%;\r\n}\r\n@media (max-width:800px) {\r\n  .submit-btn{\r\n      \r\n      margin-right: 23%;\r\n  }\r\n\r\n \r\n}\r\n.background-image {\r\n  position: fixed;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1;\r\n\r\n  display: block;\r\n  background-image: url('http://666a658c624a3c03a6b2-25cda059d975d2f318c03e90bcf17c40.r92.cf1.rackcdn.com/unsplash_527bf56961712_1.JPG');\r\n  width: 1200px;\r\n  height: 800px;\r\n\r\n  -webkit-filter: blur(5px);\r\n  -moz-filter: blur(5px);\r\n  -o-filter: blur(5px);\r\n  -ms-filter: blur(5px);\r\n  filter: blur(5px);\r\n}\r\n.action {\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\r\n}\r\n.login2background{    \r\n  background-repeat:repeat;\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n}\r\n.loginbox{  \r\n  background: white;\r\n  color: black;    \r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin-right: -50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%); \r\n  padding: 20px;   \r\n  box-shadow: 0 8px 50px -2px #000;\r\n  border-radius:5px;\r\n\r\n}\r\n.logo{\r\n  width: 130px; \r\n  height: 55px;\r\n  margin-left: 10%;\r\n}\r\n@media (max-width:767px) {\r\n  .loginbox{ \r\n      margin-top: 5%;\r\n  }    \r\n}\r\n.loginbox_content{\r\n  padding:5% 11% 5% 11%;\r\n\r\n}\r\n.singtext{\r\n  font-family: \"Open Sans\",sans-serif;\r\n  font-size: 27px;  \r\n  color:  #42a5f5;\r\n  float: right;\r\n  padding-right: 25%;\r\n}\r\n.submit-btn{\r\n  float: right;\r\n  background-color: #42a5f5;\r\n  margin-right: 28%;\r\n  color: white;\r\n}\r\n.forgotpassword{\r\n  padding-left: 10%;\r\n}\r\n@media (max-width:800px) {\r\n  .submit-btn{\r\n      \r\n      margin-right: 23%;\r\n  }\r\n\r\n \r\n}\r\n.background-image {\r\n  position: fixed;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1;\r\n\r\n  display: block;\r\n  background-image: url('http://666a658c624a3c03a6b2-25cda059d975d2f318c03e90bcf17c40.r92.cf1.rackcdn.com/unsplash_527bf56961712_1.JPG');\r\n  width: 1200px;\r\n  height: 800px;\r\n\r\n  -webkit-filter: blur(5px);\r\n  -moz-filter: blur(5px);\r\n  -o-filter: blur(5px);\r\n  -ms-filter: blur(5px);\r\n  filter: blur(5px);\r\n}\r\n.action {\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\r\n}\r\n.image {\r\n  width: 200px;\r\n  margin-bottom: 10px;\r\n}\r\n.image-config {\r\n  margin-bottom: 40px;\r\n}\r\n.action {\r\n  margin-top: 40px;\r\n}\r\n.dashboard{\r\n  \r\n  position:absolute;\r\n  top:0;\r\n  left:0;\r\n  z-index:11;\r\n  width:100%;\r\n  height:100%;\r\n \r\n}\r\n.image {\r\nwidth: 200px;\r\nmargin-bottom: 10px;\r\n}\r\n.image-config {\r\nmargin-bottom: 40px;\r\n}\r\n/*Main CSS*/\r\n/*Login Signup Page*/\r\na:focus,a:hover,a{\r\noutline:none;\r\ntext-decoration: none;\r\n}\r\nli,ul{\r\nlist-style: none;\r\npadding: 0;\r\nmargin: 0;\r\n}\r\n.header-top i {\r\nfont-size: 18px;\r\n}\r\n.bg-image {\r\nposition: relative;\r\nwidth: 100%;\r\nheight: 100vh;\r\ndisplay: table;\r\n}\r\n.login-header {\r\ndisplay: inline-block;\r\nwidth: 100%;\r\nbackground: #0e1a35;\r\n}\r\n.login-signup {\r\ndisplay: table-cell;\r\nvertical-align: middle;\r\nwidth: 100%;\r\n}\r\n.login-logo img {\r\ncursor: pointer;\r\nmax-width: 171px;\r\npadding: 23px 15px 22px;\r\nwidth: 100%;\r\n}\r\n.login-header .navbar-right {\r\nmargin-right: 0px;\r\n}\r\n.login-header .nav-tabs > li.active > a,\r\n.login-header .nav-tabs > li.active > a:focus,\r\n.login-header .nav-tabs > li.active > a:hover {\r\nbackground-color: transparent;\r\nborder: none;\r\ncolor: #fff;\r\n}\r\n.login-header .nav-tabs > li > a {\r\nborder: medium none;\r\nborder-radius: 0;\r\nfont-size: 14px;\r\nfont-weight: 500;\r\nline-height: 48px;\r\npadding: 15px 30px;\r\ncolor: #fff;\r\n}\r\n.login-header .nav-tabs {\r\nborder-bottom: none;\r\n}\r\n.login-header .nav-tabs > li {\r\nmargin-bottom: 0px;\r\n}\r\n.login-header .nav > li > a:focus,\r\n.login-header .nav > li > a:hover {\r\nbackground: none;\r\ntext-decoration: none;\r\n}\r\n.login-header .nav-tabs > li.active {\r\nborder-bottom: 6px solid #5584ff;\r\n}\r\n.login-inner h1 {\r\ncolor: #8492af;\r\nfont-size: 48px;\r\nfont-weight: 300;\r\ntext-align: center;\r\nmargin-top: 0;\r\nmargin-bottom: 20px;\r\n}\r\n.login-inner h1 span {\r\ncolor: #5584ff;\r\n}\r\n.login-form {\r\ntext-align: center;\r\n}\r\n.login-form input {\r\n-moz-border-bottom-colors: none;\r\n-moz-border-left-colors: none;\r\n-moz-border-right-colors: none;\r\n-moz-border-top-colors: none;\r\nbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\nborder-color: -moz-use-text-color -moz-use-text-color #d4d9e3;\r\n-o-border-image: none;\r\n   border-image: none;\r\nborder-style: none none solid;\r\nborder-width: medium medium 1px;\r\nfont-size: 13px;\r\nfont-weight: 300;\r\nwidth: 100%;\r\ncolor: #8492af;\r\npadding: 15px 50px;\r\nfont-size: 17px;\r\nmax-width: 550px;\r\n}\r\n.login-form label {\r\nmargin-bottom: 30px;\r\nwidth: 100%;\r\n}\r\n.login-signup .tab-content {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nbox-shadow: 0 6px 12px rgba(0, 0, 0, 0.176);\r\ndisplay: inline-block;\r\nmargin-top: -8px;\r\nwidth: 100%;\r\n}\r\n.form-btn {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-weight: 400;\r\nmax-width: 250px;\r\npadding: 10px 0;\r\nposition: relative;\r\nwidth: 100%;\r\nmargin: 40px 0;\r\nbox-shadow: 0 2px 8px #d2d2d2;\r\n-moz-box-shadow: 0 2px 8px #d2d2d2;\r\n-webkit-box-shadow: 0 2px 8px #d2d2d2;\r\n}\r\n.form-btn::before {\r\ncontent: \"\";\r\nfont-family: FontAwesome;\r\nposition: absolute;\r\nright: 17px;\r\ntop: 9px;\r\n}\r\n.form-details {\r\npadding: 35px 0;\r\n}\r\n.tab-content .tab-pane {\r\npadding: 70px 0;\r\n}\r\n/*Login Signup Page*/\r\n/*Home Page*/\r\n.home {\r\nbackground: #f6f7fa;\r\n}\r\n#navigation {\r\nbackground: #0e1a35;\r\n}\r\n#navigation {\r\npadding: 0;\r\n}\r\n.display-table {\r\ndisplay: table;\r\npadding: 0;\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.display-table-row {\r\ndisplay: table-row;\r\nheight: 100%;\r\n}\r\n.display-table-cell {\r\ndisplay: table-cell;\r\nfloat: none;\r\nheight: 100%;\r\n}\r\n.v-align {\r\nvertical-align: top;\r\n}\r\n.logo img {\r\nmax-width: 180px;\r\npadding: 16px 0 17px;\r\nwidth: 100%;\r\n}\r\n.header-top {\r\nmargin: 0;\r\npadding-top: 2px;\r\n}\r\n.header-top img {\r\nborder-radius: 50%;\r\nmax-width: 48px !important;\r\nwidth: 100%;\r\n}\r\n.add-project {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 27px 10px 45px;\r\nposition: relative;\r\n}\r\n.header-rightside .nav > li > a:focus,\r\n.header-rightside .nav > li > a:hover {\r\nbackground: none;\r\ntext-decoration: none;\r\n}\r\n.add-project::before {\r\ncontent: \"\";\r\n;\r\nheight: 12px;\r\nleft: 17px;\r\nposition: absolute;\r\ntop: 12px;\r\nwidth: 12px;\r\n}\r\n.add-project:hover {\r\ncolor: #ffffff;\r\n}\r\n.header-top i {\r\ncolor: #0e1a35;\r\n}\r\n.icon-info {\r\nposition: relative;\r\n}\r\n.navi i {\r\nfont-size: 20px;\r\n}\r\n.label.label-primary {\r\nborder-radius: 50%;\r\nfont-size: 9px;\r\nleft: 8px;\r\nposition: absolute;\r\ntop: -9px;\r\n}\r\n.icon-info .label {\r\nborder: 2px solid #ffffff;\r\nfont-weight: 500;\r\npadding: 3px 5px;\r\ntext-align: center;\r\n}\r\n.header-top li {\r\ndisplay: inline-block;\r\ntext-align: center;\r\n}\r\n.header-top .dropdown-toggle {\r\ncolor: #0e1a35;\r\n}\r\n.header-top .dropdown-menu {\r\nborder: medium none;\r\nleft: -85px;\r\npadding: 17px;\r\n}\r\n.view {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\ndisplay: inline-block;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\nmargin-top: 10px;\r\npadding: 10px 15px;\r\n}\r\n.navbar-content > span {\r\nfont-size: 13px;\r\nfont-weight: 700;\r\n}\r\n.img-responsive {\r\nwidth: 100%;\r\n}\r\n#navigation{\r\ntransition: all 0.5s ease;\r\n}\r\n.search input {\r\nborder: none;\r\nfont-size: 15px;\r\npadding: 15px 9px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\nheader {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nbox-shadow: 0 1px 12px rgba(0, 0, 0, 0.04);\r\ndisplay: inline-block !important;\r\nline-height: 23px;\r\npadding: 15px;\r\ntransition: all 0.5s ease 0s;\r\nwidth: 100%;\r\ntransition: all 0.5s ease;\r\n}\r\n.logo {\r\ntext-align: center;\r\n}\r\n.navi a {\r\nborder-bottom: 1px solid #0d172e;\r\nborder-top: 1px solid #0d172e;\r\ncolor: #ffffff;\r\ndisplay: block;\r\nfont-size: 17px;\r\nfont-weight: 500;\r\npadding: 28px 20px;\r\ntext-decoration: none;\r\n}\r\n.navi i {\r\nmargin-right: 15px;\r\ncolor: #5584ff;\r\n}\r\n.navi .active a {\r\nbackground: #122143;\r\nborder-left: 5px solid #5584ff;\r\npadding-left: 15px;\r\n}\r\n.navi a:hover {\r\nbackground: #122143 none repeat scroll 0 0;\r\nborder-left: 5px solid #5584ff;\r\ndisplay: block;\r\npadding-left: 15px;\r\n}\r\n.navbar-default {\r\nbackground-color: #ffffff;\r\nborder-color: #ffffff;\r\n}\r\n.navbar-toggle {\r\nborder: none;\r\n}\r\n.navbar-default .navbar-toggle:focus,\r\n.navbar-default .navbar-toggle:hover {\r\nbackground-color: rgba(0, 0, 0, 0);\r\n}\r\n.navbar-default .navbar-toggle .icon-bar {\r\nbackground-color: #0e1a35;\r\n}\r\n.circle-logo {\r\nmargin: 0 auto;\r\nmax-width: 30px !important;\r\ntext-align: center;\r\n}\r\n.hidden-xs{\r\ntransition: all 0.5s ease;\r\n}\r\n.user-dashboard {\r\npadding: 0 20px;\r\n}\r\n.user-dashboard h1 {\r\ncolor: #0e1a35;\r\nfont-size: 30px;\r\nfont-weight: 500;\r\nmargin: 0;\r\npadding: 21px 0;\r\n}\r\n.sales {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nborder: 1px solid #d4d9e3;\r\ndisplay: inline-block;\r\npadding: 15px;\r\nwidth: 100%;\r\n}\r\n.sales button {\r\nbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\nborder: 1px solid #dadee7;\r\nborder-radius: 100px;\r\nfont-size: 15px;\r\nletter-spacing: 0.5px;\r\npadding-right: 32px;\r\ncolor: #0e1a35;\r\n}\r\n.sales button::before {\r\ncontent: \"\";\r\nfont-family: FontAwesome;\r\nposition: absolute;\r\nright: 12px;\r\ntop: 11px;\r\n}\r\n.sales  .btn-group {\r\nfloat: right;\r\n}\r\n.sales h2 {\r\ncolor: #8492af;\r\nfloat: left;\r\nfont-size: 21px;\r\nfont-weight: 600;\r\nmargin: 0;\r\npadding: 9px 0 0;\r\n}\r\n.btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\nfont-size: 15px;\r\nfont-weight: 600;\r\nletter-spacing: 0.5px;\r\n}\r\n.sales .dropdown-menu{\r\nmargin: 0px;\r\npadding: 0px;\r\nborder: 0px;\r\nborder-radius: 8px;\r\nwidth: 100%;\r\ncolor: #0e1a35;\r\n}\r\n.sales .btn-group.open .dropdown-toggle, .btn.active, .btn:active{\r\nbox-shadow: none;\r\n}\r\n.sales .dropdown-menu > a {\r\ncolor: #0e1a35;\r\ndisplay: inline-block;\r\nfont-weight: 800;\r\npadding: 9px 0;\r\ntext-align: center;\r\nwidth: 100%;\r\n}\r\n#my-cool-chart svg {\r\nwidth: 100%;\r\n}\r\n.sales .dropdown-menu > a:hover{\r\ncolor: #5584FF;   \r\n}\r\n.shield-buttons {\r\ndisplay: none;\r\n}\r\n.close, .close:focus, .close:hover {\r\ncolor: #fff;;\r\nopacity: 1;\r\ntext-shadow: none;\r\n}\r\n.modal-body input {\r\nborder: 1px solid #d4d9e3;\r\nfont-size: 14px;\r\nfont-weight: 300;\r\nmargin: 5px 0;\r\npadding: 14px 10px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\n.modal-body textarea {\r\nborder: 1px solid #d4d9e3;\r\nfont-size: 14px;\r\nfont-weight: 300;\r\nheight: 200px;\r\nmargin-top: 5px;\r\npadding: 9px 10px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\n.modal-header.login-header h4 {\r\ncolor: #ffffff;\r\n}\r\n.modal-footer .add-project {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 30px;\r\nposition: relative;\r\n}\r\n.modal-footer .add-project::before{display: none;}\r\n.modal-footer {\r\nborder: 0 none;\r\npadding: 10px 15px 26px;\r\ntext-align: right;\r\n}\r\n.cancel {\r\nbackground: #0E1A35     ;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 30px;\r\nposition: relative;\r\n\r\n}\r\n.modal{\r\ntop: 20%; \r\n}\r\n.modal-header .close {\r\nmargin-top: 2px;\r\n}\r\n.search input:focus{\r\nborder-bottom: 1px solid #BDC4D4;\r\nline-height:22px;\r\ntransition: 0.1s all;\r\n}\r\n.modal-header.login-header {\r\nborder-top-left-radius: 5px;\r\nborder-top-right-radius: 5px;\r\n}\r\n/*Main CSS*/\r\n@media only screen and (max-device-width: 767px) {\r\n.login-logo img {\r\n  margin: 0 auto;\r\n}\r\n.login-details .nav-tabs > li {\r\n  text-align: center;\r\n  width: 50%;\r\n}\r\n.login-signup .login-inner h1 {\r\n  font-size: 26px;\r\n  margin-bottom: 0;\r\n  margin-top: 10px;\r\n}\r\n.login-inner .login-form input {\r\n  font-size: 15px;\r\n  max-width: 100%;\r\n  padding: 15px 45px;\r\n}\r\n.login-inner .form-details {\r\n  padding: 25px;\r\n}\r\n.login-inner .login-form label {\r\n  margin-bottom: 20px;\r\n  width: 100%;\r\n}\r\n.login-inner .form-btn {\r\n  margin: 0;\r\n  max-width: 180px;\r\n}\r\n.tab-content .tab-pane {\r\n  padding: 20px 0;\r\n}\r\n#navigation .navi a {\r\n  font-size: 14px;\r\n  padding: 20px;\r\n  text-align: center;\r\n}\r\n#navigation .navi i {\r\n  margin-right: 0px;\r\n}\r\n#navigation .navi a:hover,\r\n#navigation .navi .active a {\r\n  background: #122143 none repeat scroll 0 0;\r\n  border-left: none;\r\n  display: block;\r\n  padding-left: 20px;\r\n}\r\nheader .header-top img {\r\n  max-width: 38px !important;\r\n}\r\n.v-align header {\r\n  padding: 12px 15px;\r\n}\r\nheader .header-top li {\r\n  padding-left: 13px;\r\n  padding-right: 6px;\r\n}\r\n.navbar-default .navbar-toggle {\r\n  border-color: rgba(0, 0, 0, 0);\r\n}\r\n.navbar-header .navbar-toggle {\r\n  float: left;\r\n  margin: 0;\r\n  padding: 0;\r\n  top: 12px;\r\n}\r\nbutton,\r\n  html [type=\"button\"],\r\n  [type=\"reset\"],\r\n  [type=\"submit\"] {\r\n      outline: medium none;\r\n}\r\n.user-dashboard .sales h2 {\r\n  color: #8492af;\r\n  float: left;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  margin: 0;\r\n  padding: 13px 0 0;\r\n}\r\n.user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\n  font-size: 11px;\r\n}\r\n.user-dashboard .sales button {\r\n  font-size: 11px;\r\n  padding-right: 23px;\r\n}  \r\n.user-dashboard .sales h2 {\r\nfont-size: 12px;\r\n}\r\n.gutter{\r\npadding: 0;\r\n}\r\n}\r\n@media only screen and (max-device-width: 992px) {\r\nheader .header-top li {\r\n  padding-left: 20px !important;\r\n  padding-right: 0;\r\n}\r\nheader .logo img {\r\n  max-width: 125px !important;\r\n}\r\n\r\n}\r\n@media only screen and (min-device-width: 767px) and (max-device-width: 998px){\r\n.user-dashboard .header-top {\r\n  padding-top: 5px;\r\n}\r\n.user-dashboard .header-rightside {\r\n  display: inline-block;\r\n  float: left;\r\n  width: 100%;\r\n}\r\n.user-dashboard .header-rightside .header-top img {\r\n  max-width: 41px !important;\r\n} \r\n.user-dashboard .sales button {\r\nfont-size: 10px;\r\n}\r\n.user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\nfont-size: 12px;\r\n}\r\n.user-dashboard .sales h2 {\r\nfont-size: 15px;\r\n}\r\n}\r\n@media only screen and (min-device-width:998px) and (max-device-width: 1350px){\r\n  #navigation .logo img {\r\nmax-width: 130px;\r\npadding: 16px 0 17px;\r\nwidth: 100%;\r\n}\r\n}\r\n.login2background{    \r\n  background-repeat:repeat;\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n}\r\n.loginbox{  \r\n  background: white;\r\n  color: black;    \r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin-right: -50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%); \r\n  padding: 20px;   \r\n  box-shadow: 0 8px 50px -2px #000;\r\n  border-radius:5px;\r\n\r\n}\r\n.logo{\r\n  width: 130px; \r\n  height: 55px;\r\n  margin-left: 10%;\r\n}\r\n@media (max-width:767px) {\r\n  .loginbox{ \r\n      margin-top: 5%;\r\n  }    \r\n}\r\n.loginbox_content{\r\n  padding:5% 11% 5% 11%;\r\n\r\n}\r\n.singtext{\r\n  font-family: \"Open Sans\",sans-serif;\r\n  font-size: 27px;  \r\n  color:  #42a5f5;\r\n  float: right;\r\n  padding-right: 25%;\r\n}\r\n.submit-btn{\r\n  float: right;\r\n  background-color: #42a5f5;\r\n  margin-right: 28%;\r\n  color: white;\r\n}\r\n.forgotpassword{\r\n  padding-left: 10%;\r\n}\r\n@media (max-width:800px) {\r\n  .submit-btn{\r\n      \r\n      margin-right: 23%;\r\n  }\r\n\r\n \r\n}\r\n.background-image {\r\n  position: fixed;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1;\r\n\r\n  display: block;\r\n  background-image: url('http://666a658c624a3c03a6b2-25cda059d975d2f318c03e90bcf17c40.r92.cf1.rackcdn.com/unsplash_527bf56961712_1.JPG');\r\n  width: 1200px;\r\n  height: 800px;\r\n\r\n  -webkit-filter: blur(5px);\r\n  -moz-filter: blur(5px);\r\n  -o-filter: blur(5px);\r\n  -ms-filter: blur(5px);\r\n  filter: blur(5px);\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/employee/new-employee/new-employee.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/employee/new-employee/new-employee.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\r\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\r\n<meta name=\"viewport\" content=\"width=device-width, user-scalable=no\"> \r\n\r\n\r\n<div  class=\"dashboard\">\r\n<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css\" rel=\"stylesheet\" integrity=\"sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1\" crossorigin=\"anonymous\">\r\n    <div class=\"container-fluid display-table\">\r\n        <div class=\"row display-table-row\">\r\n            <div class=\"col-md-2 col-sm-1 hidden-xs display-table-cell v-align box\" id=\"navigation\">\r\n                <div class=\"logo\">\r\n                    <a hef=\"home.html\"><img src=\"http://automablu.com.br/wp-content/uploads/2018/03/LOGOCOLORIDA.png\" alt=\"merkery_logo\" class=\"hidden-xs hidden-sm\">\r\n                        <img src=\"http://jskrishna.com/work/merkury/images/circle-logo.png\" alt=\"merkery_logo\" class=\"visible-xs visible-sm circle-logo\">\r\n                    </a>\r\n                </div>\r\n                <div class=\"navi\">\r\n                    <ul>\r\n                        <li><a routerLink=\"/home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Home</span></a></li>\r\n                        <li><a routerLink=\"/search-client\"> <i class=\"fa fa-tasks\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\"> Iniciar Venda </span></a></li>\r\n                        <li><a routerLink=\"/clients\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Clientes </span></a></li>\r\n                        <li><a routerLink=\"/products\"><i class=\"fa fa-list-ol\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Produtos </span></a></li>\r\n                        <li class=\"active\"><a routerLink=\"/employees\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Funcionários </span></a></li>\r\n                        <li><a routerLink=\"/home\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Estatísticas</span></a></li>\r\n                        <li><a routerLink=\"/settings\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\" > Configurações</span></a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-10 col-sm-11 display-table-cell v-align\">\r\n                <div class=\"row\">\r\n                    <header>\r\n                        <div class=\"col-md-7\">\r\n                            <nav class=\"navbar-default pull-left\">\r\n                                <div class=\"navbar-header\">\r\n                                    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"offcanvas\" data-target=\"#side-menu\" aria-expanded=\"false\">\r\n                                        <span class=\"sr-only\">Toggle navigation</span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                    </button>\r\n                                </div>\r\n                            </nav>\r\n                            <div class=\"search hidden-xs hidden-sm\">\r\n                                <input type=\"text\" placeholder=\"Busca\" id=\"search\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"header-rightside\">\r\n                                <ul class=\"list-inline header-top pull-right\">\r\n                                    <li><a href=\"#\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a></li>\r\n                                    <li>\r\n                                        <a href=\"#\" class=\"icon-info\">\r\n                                            <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\r\n                                            <span class=\"label label-primary\">3</span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li class=\"dropdown\">\r\n                                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">User\r\n                                            <b class=\"caret\"></b></a>\r\n                                        <ul class=\"dropdown-menu\">\r\n                                            <li>\r\n                                                <div class=\"navbar-content\">\r\n                                                    <span>Ivan </span>\r\n                                                    <p class=\"text-muted small\">\r\n                                                        ivanalves94@gmail.com\r\n                                                    </p>\r\n                                                    <div class=\"divider\">\r\n                                                    </div>\r\n                                                    <a href=\"#\" class=\"view btn-sm active\">View Profile</a>\r\n                                                </div>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </header>\r\n                </div>\r\n\r\n\r\n                <div class=\"user-dashboard\">\r\n                       \r\n\r\n\r\n                  <popup #popupNovoEmpregadoSucesso (confirmClick)=\"Confirm()\"  style=\"overflow:hidden\">\r\n                       Funcionário Cadastrado com Sucesso!\r\n                  </popup>\r\n\r\n\r\n                  <form [formGroup]=\"employeeForm\" (submit)=\"onSubmit()\" >\r\n\r\n\r\n                    <div class=\"container\">  \r\n                    <div class=\"col-lg-6 col-md-6 col-sm-8  loginbox\">\r\n                        <div class=\" row\">\r\n                            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-6\">\r\n                                <img src=\"assets\\imagens\\logo.png\" alt=\"Logo\" class=\"logo\"> \r\n                            </div>\r\n                                        \r\n                        </div>\r\n        \r\n                        \r\n                        <div class=\" row loginbox_content \">                        \r\n                           \r\n                            <label for=\"name\" class=\" control-label\"> Nome: </label>\r\n                            <br>\r\n                            <div class=\"input-group input-group-sm\" >\r\n                                <span class=\"input-group-addon\">\r\n                                    <span></span>\r\n                                </span>\r\n                                <input type=\"text\" class=\"form-control\" id=\"name\"  placeholder=\"Digite nome \"required ngModel name=\"name\" formControlName=\"name\" >\r\n                            </div>\r\n                            <br>\r\n                            <label for=\"telephone\" class=\"control-label\">Email:</label>\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <span class=\"input-group-addon\"> </span>\r\n                                <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Digite o email\"\r\n                                formControlName=\"email\">   \r\n                            </div> \r\n                            <br> \r\n                            <label for=\"cpf\" class=\"control-label\"> CPF:</label>\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <span class=\"input-group-addon\"> </span>\r\n                                <input type=\"text\" class=\"form-control\" id=\"cpf\" placeholder=\"Digite o CPF\" formControlName=\"cpf\">\r\n                            </div> \r\n                            \r\n                        </div>\r\n                        <div>\r\n                                <div>\r\n                                    <button type=\"submit\" class=\"btn btn-primary btn-center\" [disabled]=\"employeeForm.invalid\">\r\n                                        Cadastrar\r\n                                      </button>\r\n                                 </div>\r\n                            </div> \r\n                    </div>\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-4 \"></div>\r\n        \r\n                 </div>       \r\n         \r\n                \r\n            </form>\r\n\r\n\r\n            <div id=\"add_project\" class=\"modal fade\" role=\"dialog\">\r\n                <div class=\"modal-dialog\">\r\n        \r\n                    <div class=\"modal-content\">\r\n                        \r\n                        <div class=\"modal-body\">\r\n                               \r\n                                    <input type=\"text\" placeholder=\"Project Title\" name=\"name\">\r\n                                    <input type=\"text\" placeholder=\"Post of Post\" name=\"mail\">\r\n                                    <input type=\"text\" placeholder=\"Author\" name=\"passsword\">\r\n                                    <textarea placeholder=\"Desicrption\"></textarea>\r\n                            </div>\r\n                        <div class=\"modal-footer\">\r\n                            <button type=\"button\" class=\"cancel\" data-dismiss=\"modal\">Close</button>\r\n                            <button type=\"button\" class=\"add-project\" data-dismiss=\"modal\">Save</button>\r\n                        </div>\r\n                    </div>\r\n        \r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/employee/new-employee/new-employee.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/employee/new-employee/new-employee.component.ts ***!
  \****************************************************************************/
/*! exports provided: NewEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEmployeeComponent", function() { return NewEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var ng2_opd_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-opd-popup */ "./node_modules/ng2-opd-popup/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewEmployeeComponent = /** @class */ (function () {
    function NewEmployeeComponent(fb, employeeService, router) {
        this.fb = fb;
        this.employeeService = employeeService;
        this.router = router;
        this.employeeForm = fb.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            'cpf': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    NewEmployeeComponent.prototype.onSubmit = function () {
        this.employeeService.saveEmployee(this.employeeForm.value);
        this.employeeService.getEmployees().forEach(function (employee) { return console.log(employee); });
        this.popupNovoEmpregadoSucesso.options = {
            confirmBtnContent: 'Confirmar',
            cancleBtnContent: 'Cancelar',
            cancleBtnClass: 'btn btn-default',
            confirmBtnClass: 'btn btn-default',
            color: '#5cb85c',
            header: 'Sucesso',
            widthProsentage: 60,
            animation: 'bounceInDown'
        };
        this.popupNovoEmpregadoSucesso.show(this.popupNovoEmpregadoSucesso.options);
    };
    NewEmployeeComponent.prototype.Confirm = function () {
        this.router.navigate(['employees']);
    };
    NewEmployeeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('popupNovoEmpregadoSucesso'),
        __metadata("design:type", ng2_opd_popup__WEBPACK_IMPORTED_MODULE_4__["Popup"])
    ], NewEmployeeComponent.prototype, "popupNovoEmpregadoSucesso", void 0);
    NewEmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-employee',
            template: __webpack_require__(/*! ./new-employee.component.html */ "./src/app/components/employee/new-employee/new-employee.component.html"),
            styles: [__webpack_require__(/*! ./new-employee.component.css */ "./src/app/components/employee/new-employee/new-employee.component.css")],
            providers: [_services_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NewEmployeeComponent);
    return NewEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".action {\r\n    margin-top: 40px;\r\n}\r\n\r\n.image {\r\n    width: 200px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.image-config {\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.action {\r\n    margin-top: 40px;\r\n}\r\n\r\n.dashboard{\r\n    \r\n    position:absolute;\r\n    top:0;\r\n    left:0;\r\n    z-index:11;\r\n    width:100%;\r\n    height:100%;\r\n   \r\n}\r\n\r\n.image {\r\nwidth: 200px;\r\nmargin-bottom: 10px;\r\n}\r\n\r\n.image-config {\r\nmargin-bottom: 40px;\r\n}\r\n\r\n/*Main CSS*/\r\n\r\n/*Login Signup Page*/\r\n\r\na:focus,a:hover,a{\r\noutline:none;\r\ntext-decoration: none;\r\n}\r\n\r\nli,ul{\r\nlist-style: none;\r\npadding: 0;\r\nmargin: 0;\r\n}\r\n\r\n.header-top i {\r\nfont-size: 18px;\r\n}\r\n\r\n.bg-image {\r\nposition: relative;\r\nwidth: 100%;\r\nheight: 100vh;\r\ndisplay: table;\r\n}\r\n\r\n.login-header {\r\ndisplay: inline-block;\r\nwidth: 100%;\r\nbackground: #0e1a35;\r\n}\r\n\r\n.login-signup {\r\ndisplay: table-cell;\r\nvertical-align: middle;\r\nwidth: 100%;\r\n}\r\n\r\n.login-logo img {\r\ncursor: pointer;\r\nmax-width: 171px;\r\npadding: 23px 15px 22px;\r\nwidth: 100%;\r\n}\r\n\r\n.login-header .navbar-right {\r\nmargin-right: 0px;\r\n}\r\n\r\n.login-header .nav-tabs > li.active > a,\r\n.login-header .nav-tabs > li.active > a:focus,\r\n.login-header .nav-tabs > li.active > a:hover {\r\nbackground-color: transparent;\r\nborder: none;\r\ncolor: #fff;\r\n}\r\n\r\n.login-header .nav-tabs > li > a {\r\nborder: medium none;\r\nborder-radius: 0;\r\nfont-size: 14px;\r\nfont-weight: 500;\r\nline-height: 48px;\r\npadding: 15px 30px;\r\ncolor: #fff;\r\n}\r\n\r\n.login-header .nav-tabs {\r\nborder-bottom: none;\r\n}\r\n\r\n.login-header .nav-tabs > li {\r\nmargin-bottom: 0px;\r\n}\r\n\r\n.login-header .nav > li > a:focus,\r\n.login-header .nav > li > a:hover {\r\nbackground: none;\r\ntext-decoration: none;\r\n}\r\n\r\n.login-header .nav-tabs > li.active {\r\nborder-bottom: 6px solid #5584ff;\r\n}\r\n\r\n.login-inner h1 {\r\ncolor: #8492af;\r\nfont-size: 48px;\r\nfont-weight: 300;\r\ntext-align: center;\r\nmargin-top: 0;\r\nmargin-bottom: 20px;\r\n}\r\n\r\n.login-inner h1 span {\r\ncolor: #5584ff;\r\n}\r\n\r\n.login-form {\r\ntext-align: center;\r\n}\r\n\r\n.login-form input {\r\n-moz-border-bottom-colors: none;\r\n-moz-border-left-colors: none;\r\n-moz-border-right-colors: none;\r\n-moz-border-top-colors: none;\r\nbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\nborder-color: -moz-use-text-color -moz-use-text-color #d4d9e3;\r\n-o-border-image: none;\r\n   border-image: none;\r\nborder-style: none none solid;\r\nborder-width: medium medium 1px;\r\nfont-size: 13px;\r\nfont-weight: 300;\r\nwidth: 100%;\r\ncolor: #8492af;\r\npadding: 15px 50px;\r\nfont-size: 17px;\r\nmax-width: 550px;\r\n}\r\n\r\n.login-form label {\r\nmargin-bottom: 30px;\r\nwidth: 100%;\r\n}\r\n\r\n.login-signup .tab-content {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nbox-shadow: 0 6px 12px rgba(0, 0, 0, 0.176);\r\ndisplay: inline-block;\r\nmargin-top: -8px;\r\nwidth: 100%;\r\n}\r\n\r\n.form-btn {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-weight: 400;\r\nmax-width: 250px;\r\npadding: 10px 0;\r\nposition: relative;\r\nwidth: 100%;\r\nmargin: 40px 0;\r\nbox-shadow: 0 2px 8px #d2d2d2;\r\n-moz-box-shadow: 0 2px 8px #d2d2d2;\r\n-webkit-box-shadow: 0 2px 8px #d2d2d2;\r\n}\r\n\r\n.form-btn::before {\r\ncontent: \"\";\r\nfont-family: FontAwesome;\r\nposition: absolute;\r\nright: 17px;\r\ntop: 9px;\r\n}\r\n\r\n.form-details {\r\npadding: 35px 0;\r\n}\r\n\r\n.tab-content .tab-pane {\r\npadding: 70px 0;\r\n}\r\n\r\n/*Login Signup Page*/\r\n\r\n/*Home Page*/\r\n\r\n.home {\r\nbackground: #f6f7fa;\r\n}\r\n\r\n#navigation {\r\nbackground: #0e1a35;\r\n}\r\n\r\n#navigation {\r\npadding: 0;\r\n}\r\n\r\n.display-table {\r\ndisplay: table;\r\npadding: 0;\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n\r\n.display-table-row {\r\ndisplay: table-row;\r\nheight: 100%;\r\n}\r\n\r\n.display-table-cell {\r\ndisplay: table-cell;\r\nfloat: none;\r\nheight: 100%;\r\n}\r\n\r\n.v-align {\r\nvertical-align: top;\r\n}\r\n\r\n.logo img {\r\nmax-width: 180px;\r\npadding: 16px 0 17px;\r\nwidth: 100%;\r\n}\r\n\r\n.header-top {\r\nmargin: 0;\r\npadding-top: 2px;\r\n}\r\n\r\n.header-top img {\r\nborder-radius: 50%;\r\nmax-width: 48px !important;\r\nwidth: 100%;\r\n}\r\n\r\n.add-project {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 27px 10px 45px;\r\nposition: relative;\r\n}\r\n\r\n.header-rightside .nav > li > a:focus,\r\n.header-rightside .nav > li > a:hover {\r\nbackground: none;\r\ntext-decoration: none;\r\n}\r\n\r\n.add-project::before {\r\ncontent: \"\";\r\n;\r\nheight: 12px;\r\nleft: 17px;\r\nposition: absolute;\r\ntop: 12px;\r\nwidth: 12px;\r\n}\r\n\r\n.add-project:hover {\r\ncolor: #ffffff;\r\n}\r\n\r\n.header-top i {\r\ncolor: #0e1a35;\r\n}\r\n\r\n.icon-info {\r\nposition: relative;\r\n}\r\n\r\n.navi i {\r\nfont-size: 20px;\r\n}\r\n\r\n.label.label-primary {\r\nborder-radius: 50%;\r\nfont-size: 9px;\r\nleft: 8px;\r\nposition: absolute;\r\ntop: -9px;\r\n}\r\n\r\n.icon-info .label {\r\nborder: 2px solid #ffffff;\r\nfont-weight: 500;\r\npadding: 3px 5px;\r\ntext-align: center;\r\n}\r\n\r\n.header-top li {\r\ndisplay: inline-block;\r\ntext-align: center;\r\n}\r\n\r\n.header-top .dropdown-toggle {\r\ncolor: #0e1a35;\r\n}\r\n\r\n.header-top .dropdown-menu {\r\nborder: medium none;\r\nleft: -85px;\r\npadding: 17px;\r\n}\r\n\r\n.view {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\ndisplay: inline-block;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\nmargin-top: 10px;\r\npadding: 10px 15px;\r\n}\r\n\r\n.navbar-content > span {\r\nfont-size: 13px;\r\nfont-weight: 700;\r\n}\r\n\r\n.img-responsive {\r\nwidth: 100%;\r\n}\r\n\r\n#navigation{\r\ntransition: all 0.5s ease;\r\n}\r\n\r\n.search input {\r\nborder: none;\r\nfont-size: 15px;\r\npadding: 15px 9px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\n\r\nheader {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nbox-shadow: 0 1px 12px rgba(0, 0, 0, 0.04);\r\ndisplay: inline-block !important;\r\nline-height: 23px;\r\npadding: 15px;\r\ntransition: all 0.5s ease 0s;\r\nwidth: 100%;\r\ntransition: all 0.5s ease;\r\n}\r\n\r\n.logo {\r\ntext-align: center;\r\n}\r\n\r\n.navi a {\r\nborder-bottom: 1px solid #0d172e;\r\nborder-top: 1px solid #0d172e;\r\ncolor: #ffffff;\r\ndisplay: block;\r\nfont-size: 17px;\r\nfont-weight: 500;\r\npadding: 28px 20px;\r\ntext-decoration: none;\r\n}\r\n\r\n.navi i {\r\nmargin-right: 15px;\r\ncolor: #5584ff;\r\n}\r\n\r\n.navi .active a {\r\nbackground: #122143;\r\nborder-left: 5px solid #5584ff;\r\npadding-left: 15px;\r\n}\r\n\r\n.navi a:hover {\r\nbackground: #122143 none repeat scroll 0 0;\r\nborder-left: 5px solid #5584ff;\r\ndisplay: block;\r\npadding-left: 15px;\r\n}\r\n\r\n.navbar-default {\r\nbackground-color: #ffffff;\r\nborder-color: #ffffff;\r\n}\r\n\r\n.navbar-toggle {\r\nborder: none;\r\n}\r\n\r\n.navbar-default .navbar-toggle:focus,\r\n.navbar-default .navbar-toggle:hover {\r\nbackground-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n.navbar-default .navbar-toggle .icon-bar {\r\nbackground-color: #0e1a35;\r\n}\r\n\r\n.circle-logo {\r\nmargin: 0 auto;\r\nmax-width: 30px !important;\r\ntext-align: center;\r\n}\r\n\r\n.hidden-xs{\r\ntransition: all 0.5s ease;\r\n}\r\n\r\n.user-dashboard {\r\npadding: 0 20px;\r\n}\r\n\r\n.user-dashboard h1 {\r\ncolor: #0e1a35;\r\nfont-size: 30px;\r\nfont-weight: 500;\r\nmargin: 0;\r\npadding: 21px 0;\r\n}\r\n\r\n.sales {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nborder: 1px solid #d4d9e3;\r\ndisplay: inline-block;\r\npadding: 15px;\r\nwidth: 100%;\r\n}\r\n\r\n.sales button {\r\nbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\nborder: 1px solid #dadee7;\r\nborder-radius: 100px;\r\nfont-size: 15px;\r\nletter-spacing: 0.5px;\r\npadding-right: 32px;\r\ncolor: #0e1a35;\r\n}\r\n\r\n.sales button::before {\r\ncontent: \"\";\r\nfont-family: FontAwesome;\r\nposition: absolute;\r\nright: 12px;\r\ntop: 11px;\r\n}\r\n\r\n.sales  .btn-group {\r\nfloat: right;\r\n}\r\n\r\n.sales h2 {\r\ncolor: #8492af;\r\nfloat: left;\r\nfont-size: 21px;\r\nfont-weight: 600;\r\nmargin: 0;\r\npadding: 9px 0 0;\r\n}\r\n\r\n.btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\nfont-size: 15px;\r\nfont-weight: 600;\r\nletter-spacing: 0.5px;\r\n}\r\n\r\n.sales .dropdown-menu{\r\nmargin: 0px;\r\npadding: 0px;\r\nborder: 0px;\r\nborder-radius: 8px;\r\nwidth: 100%;\r\ncolor: #0e1a35;\r\n}\r\n\r\n.sales .btn-group.open .dropdown-toggle, .btn.active, .btn:active{\r\nbox-shadow: none;\r\n}\r\n\r\n.sales .dropdown-menu > a {\r\ncolor: #0e1a35;\r\ndisplay: inline-block;\r\nfont-weight: 800;\r\npadding: 9px 0;\r\ntext-align: center;\r\nwidth: 100%;\r\n}\r\n\r\n#my-cool-chart svg {\r\nwidth: 100%;\r\n}\r\n\r\n.sales .dropdown-menu > a:hover{\r\ncolor: #5584FF;   \r\n}\r\n\r\n.shield-buttons {\r\ndisplay: none;\r\n}\r\n\r\n.close, .close:focus, .close:hover {\r\ncolor: #fff;;\r\nopacity: 1;\r\ntext-shadow: none;\r\n}\r\n\r\n.modal-body input {\r\nborder: 1px solid #d4d9e3;\r\nfont-size: 14px;\r\nfont-weight: 300;\r\nmargin: 5px 0;\r\npadding: 14px 10px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\n\r\n.modal-body textarea {\r\nborder: 1px solid #d4d9e3;\r\nfont-size: 14px;\r\nfont-weight: 300;\r\nheight: 200px;\r\nmargin-top: 5px;\r\npadding: 9px 10px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\n\r\n.modal-header.login-header h4 {\r\ncolor: #ffffff;\r\n}\r\n\r\n.modal-footer .add-project {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 30px;\r\nposition: relative;\r\n}\r\n\r\n.modal-footer .add-project::before{display: none;}\r\n\r\n.modal-footer {\r\nborder: 0 none;\r\npadding: 10px 15px 26px;\r\ntext-align: right;\r\n}\r\n\r\n.cancel {\r\nbackground: #0E1A35     ;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 30px;\r\nposition: relative;\r\n\r\n}\r\n\r\n.modal{\r\ntop: 20%; \r\n}\r\n\r\n.modal-header .close {\r\nmargin-top: 2px;\r\n}\r\n\r\n.search input:focus{\r\nborder-bottom: 1px solid #BDC4D4;\r\nline-height:22px;\r\ntransition: 0.1s all;\r\n}\r\n\r\n.modal-header.login-header {\r\nborder-top-left-radius: 5px;\r\nborder-top-right-radius: 5px;\r\n}\r\n\r\n/*Main CSS*/\r\n\r\n@media only screen and (max-device-width: 767px) {\r\n.login-logo img {\r\n    margin: 0 auto;\r\n}\r\n.login-details .nav-tabs > li {\r\n    text-align: center;\r\n    width: 50%;\r\n}\r\n.login-signup .login-inner h1 {\r\n    font-size: 26px;\r\n    margin-bottom: 0;\r\n    margin-top: 10px;\r\n}\r\n.login-inner .login-form input {\r\n    font-size: 15px;\r\n    max-width: 100%;\r\n    padding: 15px 45px;\r\n}\r\n.login-inner .form-details {\r\n    padding: 25px;\r\n}\r\n.login-inner .login-form label {\r\n    margin-bottom: 20px;\r\n    width: 100%;\r\n}\r\n.login-inner .form-btn {\r\n    margin: 0;\r\n    max-width: 180px;\r\n}\r\n.tab-content .tab-pane {\r\n    padding: 20px 0;\r\n}\r\n#navigation .navi a {\r\n    font-size: 14px;\r\n    padding: 20px;\r\n    text-align: center;\r\n}\r\n#navigation .navi i {\r\n    margin-right: 0px;\r\n}\r\n#navigation .navi a:hover,\r\n#navigation .navi .active a {\r\n    background: #122143 none repeat scroll 0 0;\r\n    border-left: none;\r\n    display: block;\r\n    padding-left: 20px;\r\n}\r\nheader .header-top img {\r\n    max-width: 38px !important;\r\n}\r\n.v-align header {\r\n    padding: 12px 15px;\r\n}\r\nheader .header-top li {\r\n    padding-left: 13px;\r\n    padding-right: 6px;\r\n}\r\n.navbar-default .navbar-toggle {\r\n    border-color: rgba(0, 0, 0, 0);\r\n}\r\n.navbar-header .navbar-toggle {\r\n    float: left;\r\n    margin: 0;\r\n    padding: 0;\r\n    top: 12px;\r\n}\r\nbutton,\r\n    html [type=\"button\"],\r\n    [type=\"reset\"],\r\n    [type=\"submit\"] {\r\n        outline: medium none;\r\n}\r\n.user-dashboard .sales h2 {\r\n    color: #8492af;\r\n    float: left;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    margin: 0;\r\n    padding: 13px 0 0;\r\n}\r\n.user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\n    font-size: 11px;\r\n}\r\n.user-dashboard .sales button {\r\n    font-size: 11px;\r\n    padding-right: 23px;\r\n}  \r\n.user-dashboard .sales h2 {\r\nfont-size: 12px;\r\n}\r\n.gutter{\r\npadding: 0;\r\n}\r\n}\r\n\r\n@media only screen and (max-device-width: 992px) {\r\nheader .header-top li {\r\n    padding-left: 20px !important;\r\n    padding-right: 0;\r\n}\r\nheader .logo img {\r\n    max-width: 125px !important;\r\n}\r\n\r\n}\r\n\r\n@media only screen and (min-device-width: 767px) and (max-device-width: 998px){\r\n  .user-dashboard .header-top {\r\n    padding-top: 5px;\r\n}\r\n.user-dashboard .header-rightside {\r\n    display: inline-block;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.user-dashboard .header-rightside .header-top img {\r\n    max-width: 41px !important;\r\n} \r\n.user-dashboard .sales button {\r\nfont-size: 10px;\r\n}\r\n.user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\nfont-size: 12px;\r\n}\r\n.user-dashboard .sales h2 {\r\nfont-size: 15px;\r\n}\r\n}\r\n\r\n@media only screen and (min-device-width:998px) and (max-device-width: 1350px){\r\n    #navigation .logo img {\r\nmax-width: 130px;\r\npadding: 16px 0 17px;\r\nwidth: 100%;\r\n}\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\r\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\r\n<meta name=\"viewport\" content=\"width=device-width, user-scalable=no\"> \r\n\r\n\r\n<div  class=\"dashboard\">\r\n<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css\" rel=\"stylesheet\" integrity=\"sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1\" crossorigin=\"anonymous\">\r\n    <div class=\"container-fluid display-table\">\r\n        <div class=\"row display-table-row\">\r\n            <div class=\"col-md-2 col-sm-1 hidden-xs display-table-cell v-align box\" id=\"navigation\">\r\n                <div class=\"logo\">\r\n                    <a hef=\"home.html\"><img src=\"http://automablu.com.br/wp-content/uploads/2018/03/LOGOCOLORIDA.png\" alt=\"merkery_logo\" class=\"hidden-xs hidden-sm\">\r\n                        <img src=\"http://jskrishna.com/work/merkury/images/circle-logo.png\" alt=\"merkery_logo\" class=\"visible-xs visible-sm circle-logo\">\r\n                    </a>\r\n                </div>\r\n                <div class=\"navi\">\r\n                    <ul>\r\n                        <li class=\"active\"><a routerLink=\"/home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Home</span></a></li>\r\n                        <li><a routerLink=\"/search-client\"> <i class=\"fa fa-tasks\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\"> Iniciar Venda </span></a></li>\r\n                        <li><a routerLink=\"/clients\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Clientes </span></a></li>\r\n                        <li><a routerLink=\"/products\"><i class=\"fa fa-list-ol\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Produtos </span></a></li>\r\n                        <li><a routerLink=\"/employees\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Funcionários </span></a></li>\r\n                        <li><a routerLink=\"/home\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Estatísticas</span></a></li>\r\n                        <li><a routerLink=\"/settings\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\" > Configurações</span></a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-10 col-sm-11 display-table-cell v-align\">\r\n                <div class=\"row\">\r\n                    <header>\r\n                        <div class=\"col-md-7\">\r\n                            <nav class=\"navbar-default pull-left\">\r\n                                <div class=\"navbar-header\">\r\n                                    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"offcanvas\" data-target=\"#side-menu\" aria-expanded=\"false\">\r\n                                        <span class=\"sr-only\">Toggle navigation</span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                    </button>\r\n                                </div>\r\n                            </nav>\r\n                            <div class=\"search hidden-xs hidden-sm\">\r\n                                <input type=\"text\" placeholder=\"Busca\" id=\"search\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"header-rightside\">\r\n                                <ul class=\"list-inline header-top pull-right\">\r\n                                    <li><a href=\"#\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a></li>\r\n                                    <li>\r\n                                        <a href=\"#\" class=\"icon-info\">\r\n                                            <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\r\n                                            <span class=\"label label-primary\">3</span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li class=\"dropdown\">\r\n                                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">User\r\n                                            <b class=\"caret\"></b></a>\r\n                                        <ul class=\"dropdown-menu\">\r\n                                            <li>\r\n                                                <div class=\"navbar-content\">\r\n                                                    <span>Ivan </span>\r\n                                                    <p class=\"text-muted small\">\r\n                                                       {{email}}\r\n                                                    </p>\r\n                                                    <div class=\"divider\">\r\n                                                    </div>\r\n                                                    <a href=\"#\" class=\"view btn-sm active\">View Profile</a>\r\n                                                </div>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </header>\r\n                </div>\r\n\r\n                <div class=\"user-dashboard\">\r\n                        <h1>Hello,\r\n                        </h1>\r\n                        <h3> Id: {{id}}</h3>\r\n                        <h3> Email: {{email}} </h3>\r\n                </div>\r\n            </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div id=\"add_project\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n\r\n            <div class=\"modal-content\">\r\n                \r\n                <div class=\"modal-body\">\r\n                       \r\n                            <input type=\"text\" placeholder=\"Project Title\" name=\"name\">\r\n                            <input type=\"text\" placeholder=\"Post of Post\" name=\"mail\">\r\n                            <input type=\"text\" placeholder=\"Author\" name=\"passsword\">\r\n                            <textarea placeholder=\"Desicrption\"></textarea>\r\n                    </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"cancel\" data-dismiss=\"modal\">Close</button>\r\n                    <button type=\"button\" class=\"add-project\" data-dismiss=\"modal\">Save</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(afAuth) {
        this.afAuth = afAuth;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            _this.user = "User";
            _this.email = data.email;
            _this.id = data.uid;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.background-login{\r\n\r\n  width: 100px;\r\n  height: 100%;\r\n  padding: 0; /* Chrome 10+, Saf5.1+ */ /* FF3.6+ */ /* IE10 */ /* Opera 11.10+ */\r\n  background:         linear-gradient(90deg, #16222A 10%, #3A6073 90%); /* W3C */\r\nfont-family: 'Raleway', sans-serif;\r\n}\r\n\r\n\r\n.login2background{    \r\n    background-repeat:repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n}\r\n\r\n\r\n.loginbox{  \r\n    background: white;\r\n    color: black;    \r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-right: -50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%); \r\n    padding: 20px;   \r\n    box-shadow: 0 8px 50px -2px #000;\r\n    border-radius:5px;\r\n\r\n}\r\n\r\n\r\n.logo{\r\n    width: 130px; \r\n    height: 55px;\r\n    margin-left: 10%;\r\n}\r\n\r\n\r\n@media (max-width:767px) {\r\n    .loginbox{ \r\n        margin-top: 5%;\r\n    }    \r\n}\r\n\r\n\r\n.loginbox_content{\r\n    padding:5% 11% 5% 11%;\r\n\r\n}\r\n\r\n\r\n.singtext{\r\n    font-family: \"Open Sans\",sans-serif;\r\n    font-size: 27px;  \r\n    color:  #42a5f5;\r\n    float: right;\r\n    padding-right: 25%;\r\n}\r\n\r\n\r\n.submit-btn{\r\n    float: right;\r\n    background-color: #42a5f5;\r\n    margin-right: 28%;\r\n    color: white;\r\n}\r\n\r\n\r\n.forgotpassword{\r\n    padding-left: 10%;\r\n}\r\n\r\n\r\n@media (max-width:800px) {\r\n    .submit-btn{\r\n        \r\n        margin-right: 23%;\r\n    }\r\n\r\n   \r\n}\r\n\r\n\r\n.background-image {\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n  \r\n    display: block;\r\n    background-color: #42a5f5;\r\n    width: 100%;\r\n    height: 800px;\r\n  \r\n  }\r\n  \r\n  "

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n    <link href=\"//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n    <script src=\"//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js\"></script>\r\n    <script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\r\n\r\n\r\n\r\n    <div class=\"login2background\" >\r\n\r\n        <form #f=\"ngForm\" (submit)=\"form_login(f)\" >\r\n            <div class=\"container\">  \r\n            <div class=\"col-lg-6 col-md-6 col-sm-8  loginbox\">\r\n                <div class=\" row\">\r\n                    <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-6\">\r\n                        <img src=\"assets\\imagens\\logo.png\" alt=\"Logo\" class=\"logo\"> \r\n                    </div>\r\n                    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-6  \">\r\n                        <span class=\"singtext\" color=\"blue\" > Login </span>   \r\n                    </div>\r\n                                 \r\n                </div>\r\n                <div class=\" row loginbox_content \">                        \r\n                    <div class=\"input-group input-group-sm\" >\r\n                        <span class=\"input-group-addon\">\r\n                            <span class=\"glyphicon glyphicon-user\"></span>\r\n                        </span>\r\n                        <input type=\"text\" class=\"form-control\" id=\"login\"  required ngModel name=\"email\" placeholder=\"Digite o email\">\r\n                    </div>\r\n                    <br>\r\n                    <br/>\r\n                    <div class=\"input-group input-group-sm\">\r\n                        <span class=\"input-group-addon\">\r\n                            <span class=\"glyphicon glyphicon-lock\"></span>\r\n                        </span>\r\n                        <input type=\"password\" class=\"form-control\" required ngModel name=\"password\" id=\"password\" placeholder=\"Digite sua senha\" >\r\n     \r\n                    </div>              \r\n                </div>\r\n                <div class=\"row \">                   \r\n                    <div class=\"col-lg-8 col-md-8  col-sm-8 col-xs-7 forgotpassword \"> \r\n                        <a [routerLink]=\"['/register']\"  > Cadastro </a>                        \r\n                    </div>\r\n                    <div class=\"col-lg-4 col-md-4 col-sm-4  col-xs-5 \">          \r\n                            <button type=\"submit\" class=\"btn submit-btn\" >\r\n                                    Entrar\r\n                            </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-4 \"></div>\r\n\r\n         </div>        \r\n    </form>\r\n\r\n\r\n</div>\r\n \r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
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



var LoginComponent = /** @class */ (function () {
    function LoginComponent(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    LoginComponent.prototype.form_login = function (f) {
        var _this = this;
        if (!f.valid) {
            return;
        }
        this.afAuth.auth.signInWithEmailAndPassword(f.controls.email.value, f.controls.password.value).then(function (ok) {
            _this.router.navigate(["/home"]);
        }).catch(function (error) {
            alert(error.message);
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[app-login]',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")],
            providers: [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "color{\r\n    background-color: aqua;\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default color\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"\r\n                    data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n         </div>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\"\r\n                       aria-expanded=\"false\">Usuario<span class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a>Minha Conta</a></li>\r\n                        <li role=\"separator\" class=\"divider\"></li>\r\n                        <li><a>Sair</a></li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/product/edit-item/edit-item-product.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/product/edit-item/edit-item-product.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".action {\r\n    margin-top: 40px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n\r\n\r\n.login2background{    \r\n    background-repeat:repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n}\r\n\r\n\r\n\r\n.loginbox{  \r\n    background: white;\r\n    color: black;    \r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-right: -50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%); \r\n    padding: 20px;   \r\n    box-shadow: 0 8px 50px -2px #000;\r\n    border-radius:5px;\r\n\r\n}\r\n\r\n\r\n\r\n.logo{\r\n    width: 130px; \r\n    height: 55px;\r\n    margin-left: 10%;\r\n}\r\n\r\n\r\n\r\n@media (max-width:767px) {\r\n    .loginbox{ \r\n        margin-top: 5%;\r\n    }    \r\n}\r\n\r\n\r\n\r\n.loginbox_content{\r\n    padding:5% 11% 5% 11%;\r\n\r\n}\r\n\r\n\r\n\r\n.singtext{\r\n    font-family: \"Open Sans\",sans-serif;\r\n    font-size: 27px;  \r\n    color:  #42a5f5;\r\n    float: right;\r\n    padding-right: 25%;\r\n}\r\n\r\n\r\n\r\n.submit-btn{\r\n    float: right;\r\n    background-color: #42a5f5;\r\n    margin-right: 28%;\r\n    color: white;\r\n}\r\n\r\n\r\n\r\n.forgotpassword{\r\n    padding-left: 10%;\r\n}\r\n\r\n\r\n\r\n@media (max-width:800px) {\r\n    .submit-btn{\r\n        \r\n        margin-right: 23%;\r\n    }\r\n\r\n   \r\n}\r\n\r\n\r\n\r\n.background-image {\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n  \r\n    display: block;\r\n    background-image: url('http://666a658c624a3c03a6b2-25cda059d975d2f318c03e90bcf17c40.r92.cf1.rackcdn.com/unsplash_527bf56961712_1.JPG');\r\n    width: 1200px;\r\n    height: 800px;\r\n  \r\n    -webkit-filter: blur(5px);\r\n    -moz-filter: blur(5px);\r\n    -o-filter: blur(5px);\r\n    -ms-filter: blur(5px);\r\n    filter: blur(5px);\r\n  }\r\n\r\n\r\n\r\n.action {\r\n    margin-top: 40px;\r\n    margin-bottom: 40px;\r\n  }\r\n\r\n\r\n\r\n.image {\r\n    width: 200px;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n\r\n\r\n.image-config {\r\n    margin-bottom: 40px;\r\n  }\r\n\r\n\r\n\r\n.action {\r\n    margin-top: 40px;\r\n  }\r\n\r\n\r\n\r\n.dashboard{\r\n    \r\n    position:absolute;\r\n    top:0;\r\n    left:0;\r\n    z-index:11;\r\n    width:100%;\r\n    height:100%;\r\n   \r\n  }\r\n\r\n\r\n\r\n.image {\r\n  width: 200px;\r\n  margin-bottom: 10px;\r\n  }\r\n\r\n\r\n\r\n.image-config {\r\n  margin-bottom: 40px;\r\n  }\r\n\r\n\r\n\r\n/*Main CSS*/\r\n\r\n\r\n\r\n/*Login Signup Page*/\r\n\r\n\r\n\r\na:focus,a:hover,a{\r\n  outline:none;\r\n  text-decoration: none;\r\n  }\r\n\r\n\r\n\r\nli,ul{\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  }\r\n\r\n\r\n\r\n.header-top i {\r\n  font-size: 18px;\r\n  }\r\n\r\n\r\n\r\n.bg-image {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: table;\r\n  }\r\n\r\n\r\n\r\n.login-header {\r\n  display: inline-block;\r\n  width: 100%;\r\n  background: #0e1a35;\r\n  }\r\n\r\n\r\n\r\n.login-signup {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n  width: 100%;\r\n  }\r\n\r\n\r\n\r\n.login-logo img {\r\n  cursor: pointer;\r\n  max-width: 171px;\r\n  padding: 23px 15px 22px;\r\n  width: 100%;\r\n  }\r\n\r\n\r\n\r\n.login-header .navbar-right {\r\n  margin-right: 0px;\r\n  }\r\n\r\n\r\n\r\n.login-header .nav-tabs > li.active > a,\r\n  .login-header .nav-tabs > li.active > a:focus,\r\n  .login-header .nav-tabs > li.active > a:hover {\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #fff;\r\n  }\r\n\r\n\r\n\r\n.login-header .nav-tabs > li > a {\r\n  border: medium none;\r\n  border-radius: 0;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  line-height: 48px;\r\n  padding: 15px 30px;\r\n  color: #fff;\r\n  }\r\n\r\n\r\n\r\n.login-header .nav-tabs {\r\n  border-bottom: none;\r\n  }\r\n\r\n\r\n\r\n.login-header .nav-tabs > li {\r\n  margin-bottom: 0px;\r\n  }\r\n\r\n\r\n\r\n.login-header .nav > li > a:focus,\r\n  .login-header .nav > li > a:hover {\r\n  background: none;\r\n  text-decoration: none;\r\n  }\r\n\r\n\r\n\r\n.login-header .nav-tabs > li.active {\r\n  border-bottom: 6px solid #5584ff;\r\n  }\r\n\r\n\r\n\r\n.login-inner h1 {\r\n  color: #8492af;\r\n  font-size: 48px;\r\n  font-weight: 300;\r\n  text-align: center;\r\n  margin-top: 0;\r\n  margin-bottom: 20px;\r\n  }\r\n\r\n\r\n\r\n.login-inner h1 span {\r\n  color: #5584ff;\r\n  }\r\n\r\n\r\n\r\n.login-form {\r\n  text-align: center;\r\n  }\r\n\r\n\r\n\r\n.login-form input {\r\n  -moz-border-bottom-colors: none;\r\n  -moz-border-left-colors: none;\r\n  -moz-border-right-colors: none;\r\n  -moz-border-top-colors: none;\r\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n  border-color: -moz-use-text-color -moz-use-text-color #d4d9e3;\r\n  -o-border-image: none;\r\n     border-image: none;\r\n  border-style: none none solid;\r\n  border-width: medium medium 1px;\r\n  font-size: 13px;\r\n  font-weight: 300;\r\n  width: 100%;\r\n  color: #8492af;\r\n  padding: 15px 50px;\r\n  font-size: 17px;\r\n  max-width: 550px;\r\n  }\r\n\r\n\r\n\r\n.login-form label {\r\n  margin-bottom: 30px;\r\n  width: 100%;\r\n  }\r\n\r\n\r\n\r\n.login-signup .tab-content {\r\n  background: #ffffff none repeat scroll 0 0;\r\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.176);\r\n  display: inline-block;\r\n  margin-top: -8px;\r\n  width: 100%;\r\n  }\r\n\r\n\r\n\r\n.form-btn {\r\n  background: #5584ff none repeat scroll 0 0;\r\n  border: medium none;\r\n  border-radius: 100px;\r\n  color: #ffffff;\r\n  font-weight: 400;\r\n  max-width: 250px;\r\n  padding: 10px 0;\r\n  position: relative;\r\n  width: 100%;\r\n  margin: 40px 0;\r\n  box-shadow: 0 2px 8px #d2d2d2;\r\n  -moz-box-shadow: 0 2px 8px #d2d2d2;\r\n  -webkit-box-shadow: 0 2px 8px #d2d2d2;\r\n  }\r\n\r\n\r\n\r\n.form-btn::before {\r\n  content: \"\";\r\n  font-family: FontAwesome;\r\n  position: absolute;\r\n  right: 17px;\r\n  top: 9px;\r\n  }\r\n\r\n\r\n\r\n.form-details {\r\n  padding: 35px 0;\r\n  }\r\n\r\n\r\n\r\n.tab-content .tab-pane {\r\n  padding: 70px 0;\r\n  }\r\n\r\n\r\n\r\n/*Login Signup Page*/\r\n\r\n\r\n\r\n/*Home Page*/\r\n\r\n\r\n\r\n.home {\r\n  background: #f6f7fa;\r\n  }\r\n\r\n\r\n\r\n#navigation {\r\n  background: #0e1a35;\r\n  }\r\n\r\n\r\n\r\n#navigation {\r\n  padding: 0;\r\n  }\r\n\r\n\r\n\r\n.display-table {\r\n  display: table;\r\n  padding: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  }\r\n\r\n\r\n\r\n.display-table-row {\r\n  display: table-row;\r\n  height: 100%;\r\n  }\r\n\r\n\r\n\r\n.display-table-cell {\r\n  display: table-cell;\r\n  float: none;\r\n  height: 100%;\r\n  }\r\n\r\n\r\n\r\n.v-align {\r\n  vertical-align: top;\r\n  }\r\n\r\n\r\n\r\n.logo img {\r\n  max-width: 180px;\r\n  padding: 16px 0 17px;\r\n  width: 100%;\r\n  }\r\n\r\n\r\n\r\n.header-top {\r\n  margin: 0;\r\n  padding-top: 2px;\r\n  }\r\n\r\n\r\n\r\n.header-top img {\r\n  border-radius: 50%;\r\n  max-width: 48px !important;\r\n  width: 100%;\r\n  }\r\n\r\n\r\n\r\n.add-project {\r\n  background: #5584ff none repeat scroll 0 0;\r\n  border-radius: 100px;\r\n  color: #ffffff;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  padding: 10px 27px 10px 45px;\r\n  position: relative;\r\n  }\r\n\r\n\r\n\r\n.header-rightside .nav > li > a:focus,\r\n  .header-rightside .nav > li > a:hover {\r\n  background: none;\r\n  text-decoration: none;\r\n  }\r\n\r\n\r\n\r\n.add-project::before {\r\n  content: \"\";\r\n  ;\r\n  height: 12px;\r\n  left: 17px;\r\n  position: absolute;\r\n  top: 12px;\r\n  width: 12px;\r\n  }\r\n\r\n\r\n\r\n.add-project:hover {\r\n  color: #ffffff;\r\n  }\r\n\r\n\r\n\r\n.header-top i {\r\n  color: #0e1a35;\r\n  }\r\n\r\n\r\n\r\n.icon-info {\r\n  position: relative;\r\n  }\r\n\r\n\r\n\r\n.navi i {\r\n  font-size: 20px;\r\n  }\r\n\r\n\r\n\r\n.label.label-primary {\r\n  border-radius: 50%;\r\n  font-size: 9px;\r\n  left: 8px;\r\n  position: absolute;\r\n  top: -9px;\r\n  }\r\n\r\n\r\n\r\n.icon-info .label {\r\n  border: 2px solid #ffffff;\r\n  font-weight: 500;\r\n  padding: 3px 5px;\r\n  text-align: center;\r\n  }\r\n\r\n\r\n\r\n.header-top li {\r\n  display: inline-block;\r\n  text-align: center;\r\n  }\r\n\r\n\r\n\r\n.header-top .dropdown-toggle {\r\n  color: #0e1a35;\r\n  }\r\n\r\n\r\n\r\n.header-top .dropdown-menu {\r\n  border: medium none;\r\n  left: -85px;\r\n  padding: 17px;\r\n  }\r\n\r\n\r\n\r\n.view {\r\n  background: #5584ff none repeat scroll 0 0;\r\n  border-radius: 100px;\r\n  color: #ffffff;\r\n  display: inline-block;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  margin-top: 10px;\r\n  padding: 10px 15px;\r\n  }\r\n\r\n\r\n\r\n.navbar-content > span {\r\n  font-size: 13px;\r\n  font-weight: 700;\r\n  }\r\n\r\n\r\n\r\n.img-responsive {\r\n  width: 100%;\r\n  }\r\n\r\n\r\n\r\n#navigation{\r\n  transition: all 0.5s ease;\r\n  }\r\n\r\n\r\n\r\n.search input {\r\n  border: none;\r\n  font-size: 15px;\r\n  padding: 15px 9px;\r\n  width: 100%;\r\n  color: #8492af;\r\n  }\r\n\r\n\r\n\r\nheader {\r\n  background: #ffffff none repeat scroll 0 0;\r\n  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.04);\r\n  display: inline-block !important;\r\n  line-height: 23px;\r\n  padding: 15px;\r\n  transition: all 0.5s ease 0s;\r\n  width: 100%;\r\n  transition: all 0.5s ease;\r\n  }\r\n\r\n\r\n\r\n.logo {\r\n  text-align: center;\r\n  }\r\n\r\n\r\n\r\n.navi a {\r\n  border-bottom: 1px solid #0d172e;\r\n  border-top: 1px solid #0d172e;\r\n  color: #ffffff;\r\n  display: block;\r\n  font-size: 17px;\r\n  font-weight: 500;\r\n  padding: 28px 20px;\r\n  text-decoration: none;\r\n  }\r\n\r\n\r\n\r\n.navi i {\r\n  margin-right: 15px;\r\n  color: #5584ff;\r\n  }\r\n\r\n\r\n\r\n.navi .active a {\r\n  background: #122143;\r\n  border-left: 5px solid #5584ff;\r\n  padding-left: 15px;\r\n  }\r\n\r\n\r\n\r\n.navi a:hover {\r\n  background: #122143 none repeat scroll 0 0;\r\n  border-left: 5px solid #5584ff;\r\n  display: block;\r\n  padding-left: 15px;\r\n  }\r\n\r\n\r\n\r\n.navbar-default {\r\n  background-color: #ffffff;\r\n  border-color: #ffffff;\r\n  }\r\n\r\n\r\n\r\n.navbar-toggle {\r\n  border: none;\r\n  }\r\n\r\n\r\n\r\n.navbar-default .navbar-toggle:focus,\r\n  .navbar-default .navbar-toggle:hover {\r\n  background-color: rgba(0, 0, 0, 0);\r\n  }\r\n\r\n\r\n\r\n.navbar-default .navbar-toggle .icon-bar {\r\n  background-color: #0e1a35;\r\n  }\r\n\r\n\r\n\r\n.circle-logo {\r\n  margin: 0 auto;\r\n  max-width: 30px !important;\r\n  text-align: center;\r\n  }\r\n\r\n\r\n\r\n.hidden-xs{\r\n  transition: all 0.5s ease;\r\n  }\r\n\r\n\r\n\r\n.user-dashboard {\r\n  padding: 0 20px;\r\n  }\r\n\r\n\r\n\r\n.user-dashboard h1 {\r\n  color: #0e1a35;\r\n  font-size: 30px;\r\n  font-weight: 500;\r\n  margin: 0;\r\n  padding: 21px 0;\r\n  }\r\n\r\n\r\n\r\n.sales {\r\n  background: #ffffff none repeat scroll 0 0;\r\n  border: 1px solid #d4d9e3;\r\n  display: inline-block;\r\n  padding: 15px;\r\n  width: 100%;\r\n  }\r\n\r\n\r\n\r\n.sales button {\r\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n  border: 1px solid #dadee7;\r\n  border-radius: 100px;\r\n  font-size: 15px;\r\n  letter-spacing: 0.5px;\r\n  padding-right: 32px;\r\n  color: #0e1a35;\r\n  }\r\n\r\n\r\n\r\n.sales button::before {\r\n  content: \"\";\r\n  font-family: FontAwesome;\r\n  position: absolute;\r\n  right: 12px;\r\n  top: 11px;\r\n  }\r\n\r\n\r\n\r\n.sales  .btn-group {\r\n  float: right;\r\n  }\r\n\r\n\r\n\r\n.sales h2 {\r\n  color: #8492af;\r\n  float: left;\r\n  font-size: 21px;\r\n  font-weight: 600;\r\n  margin: 0;\r\n  padding: 9px 0 0;\r\n  }\r\n\r\n\r\n\r\n.btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  letter-spacing: 0.5px;\r\n  }\r\n\r\n\r\n\r\n.sales .dropdown-menu{\r\n  margin: 0px;\r\n  padding: 0px;\r\n  border: 0px;\r\n  border-radius: 8px;\r\n  width: 100%;\r\n  color: #0e1a35;\r\n  }\r\n\r\n\r\n\r\n.sales .btn-group.open .dropdown-toggle, .btn.active, .btn:active{\r\n  box-shadow: none;\r\n  }\r\n\r\n\r\n\r\n.sales .dropdown-menu > a {\r\n  color: #0e1a35;\r\n  display: inline-block;\r\n  font-weight: 800;\r\n  padding: 9px 0;\r\n  text-align: center;\r\n  width: 100%;\r\n  }\r\n\r\n\r\n\r\n#my-cool-chart svg {\r\n  width: 100%;\r\n  }\r\n\r\n\r\n\r\n.sales .dropdown-menu > a:hover{\r\n  color: #5584FF;   \r\n  }\r\n\r\n\r\n\r\n.shield-buttons {\r\n  display: none;\r\n  }\r\n\r\n\r\n\r\n.close, .close:focus, .close:hover {\r\n  color: #fff;;\r\n  opacity: 1;\r\n  text-shadow: none;\r\n  }\r\n\r\n\r\n\r\n.modal-body input {\r\n  border: 1px solid #d4d9e3;\r\n  font-size: 14px;\r\n  font-weight: 300;\r\n  margin: 5px 0;\r\n  padding: 14px 10px;\r\n  width: 100%;\r\n  color: #8492af;\r\n  }\r\n\r\n\r\n\r\n.modal-body textarea {\r\n  border: 1px solid #d4d9e3;\r\n  font-size: 14px;\r\n  font-weight: 300;\r\n  height: 200px;\r\n  margin-top: 5px;\r\n  padding: 9px 10px;\r\n  width: 100%;\r\n  color: #8492af;\r\n  }\r\n\r\n\r\n\r\n.modal-header.login-header h4 {\r\n  color: #ffffff;\r\n  }\r\n\r\n\r\n\r\n.modal-footer .add-project {\r\n  background: #5584ff none repeat scroll 0 0;\r\n  border: medium none;\r\n  border-radius: 100px;\r\n  color: #ffffff;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  padding: 10px 30px;\r\n  position: relative;\r\n  }\r\n\r\n\r\n\r\n.modal-footer .add-project::before{display: none;}\r\n\r\n\r\n\r\n.modal-footer {\r\n  border: 0 none;\r\n  padding: 10px 15px 26px;\r\n  text-align: right;\r\n  }\r\n\r\n\r\n\r\n.cancel {\r\n  background: #0E1A35     ;\r\n  border: medium none;\r\n  border-radius: 100px;\r\n  color: #ffffff;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  padding: 10px 30px;\r\n  position: relative;\r\n  \r\n  }\r\n\r\n\r\n\r\n.modal{\r\n  top: 20%; \r\n  }\r\n\r\n\r\n\r\n.modal-header .close {\r\n  margin-top: 2px;\r\n  }\r\n\r\n\r\n\r\n.search input:focus{\r\n  border-bottom: 1px solid #BDC4D4;\r\n  line-height:22px;\r\n  transition: 0.1s all;\r\n  }\r\n\r\n\r\n\r\n.modal-header.login-header {\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n  }\r\n\r\n\r\n\r\n/*Main CSS*/\r\n\r\n\r\n\r\n@media only screen and (max-device-width: 767px) {\r\n  .login-logo img {\r\n    margin: 0 auto;\r\n  }\r\n  .login-details .nav-tabs > li {\r\n    text-align: center;\r\n    width: 50%;\r\n  }\r\n  .login-signup .login-inner h1 {\r\n    font-size: 26px;\r\n    margin-bottom: 0;\r\n    margin-top: 10px;\r\n  }\r\n  .login-inner .login-form input {\r\n    font-size: 15px;\r\n    max-width: 100%;\r\n    padding: 15px 45px;\r\n  }\r\n  .login-inner .form-details {\r\n    padding: 25px;\r\n  }\r\n  .login-inner .login-form label {\r\n    margin-bottom: 20px;\r\n    width: 100%;\r\n  }\r\n  .login-inner .form-btn {\r\n    margin: 0;\r\n    max-width: 180px;\r\n  }\r\n  .tab-content .tab-pane {\r\n    padding: 20px 0;\r\n  }\r\n  #navigation .navi a {\r\n    font-size: 14px;\r\n    padding: 20px;\r\n    text-align: center;\r\n  }\r\n  #navigation .navi i {\r\n    margin-right: 0px;\r\n  }\r\n  #navigation .navi a:hover,\r\n  #navigation .navi .active a {\r\n    background: #122143 none repeat scroll 0 0;\r\n    border-left: none;\r\n    display: block;\r\n    padding-left: 20px;\r\n  }\r\n  header .header-top img {\r\n    max-width: 38px !important;\r\n  }\r\n  .v-align header {\r\n    padding: 12px 15px;\r\n  }\r\n  header .header-top li {\r\n    padding-left: 13px;\r\n    padding-right: 6px;\r\n  }\r\n  .navbar-default .navbar-toggle {\r\n    border-color: rgba(0, 0, 0, 0);\r\n  }\r\n  .navbar-header .navbar-toggle {\r\n    float: left;\r\n    margin: 0;\r\n    padding: 0;\r\n    top: 12px;\r\n  }\r\n  button,\r\n    html [type=\"button\"],\r\n    [type=\"reset\"],\r\n    [type=\"submit\"] {\r\n        outline: medium none;\r\n  }\r\n  .user-dashboard .sales h2 {\r\n    color: #8492af;\r\n    float: left;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    margin: 0;\r\n    padding: 13px 0 0;\r\n  }\r\n  .user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\n    font-size: 11px;\r\n  }\r\n  .user-dashboard .sales button {\r\n    font-size: 11px;\r\n    padding-right: 23px;\r\n  }  \r\n  .user-dashboard .sales h2 {\r\n  font-size: 12px;\r\n  }\r\n  .gutter{\r\n  padding: 0;\r\n  }\r\n  }\r\n\r\n\r\n\r\n@media only screen and (max-device-width: 992px) {\r\n  header .header-top li {\r\n    padding-left: 20px !important;\r\n    padding-right: 0;\r\n  }\r\n  header .logo img {\r\n    max-width: 125px !important;\r\n  }\r\n  \r\n  }\r\n\r\n\r\n\r\n@media only screen and (min-device-width: 767px) and (max-device-width: 998px){\r\n  .user-dashboard .header-top {\r\n    padding-top: 5px;\r\n  }\r\n  .user-dashboard .header-rightside {\r\n    display: inline-block;\r\n    float: left;\r\n    width: 100%;\r\n  }\r\n  .user-dashboard .header-rightside .header-top img {\r\n    max-width: 41px !important;\r\n  } \r\n  .user-dashboard .sales button {\r\n  font-size: 10px;\r\n  }\r\n  .user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\n  font-size: 12px;\r\n  }\r\n  .user-dashboard .sales h2 {\r\n  font-size: 15px;\r\n  }\r\n  }\r\n\r\n\r\n\r\n@media only screen and (min-device-width:998px) and (max-device-width: 1350px){\r\n    #navigation .logo img {\r\n  max-width: 130px;\r\n  padding: 16px 0 17px;\r\n  width: 100%;\r\n  }\r\n  }\r\n\r\n\r\n\r\n.login2background{    \r\n    background-repeat:repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n}\r\n\r\n\r\n\r\n.loginbox{  \r\n    background: white;\r\n    color: black;    \r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-right: -50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%); \r\n    padding: 20px;   \r\n    box-shadow: 0 8px 50px -2px #000;\r\n    border-radius:5px;\r\n\r\n}\r\n\r\n\r\n\r\n.logo{\r\n    width: 130px; \r\n    height: 55px;\r\n    margin-left: 10%;\r\n}\r\n\r\n\r\n\r\n@media (max-width:767px) {\r\n    .loginbox{ \r\n        margin-top: 5%;\r\n    }    \r\n}\r\n\r\n\r\n\r\n.loginbox_content{\r\n    padding:5% 11% 5% 11%;\r\n\r\n}\r\n\r\n\r\n\r\n.singtext{\r\n    font-family: \"Open Sans\",sans-serif;\r\n    font-size: 27px;  \r\n    color:  #42a5f5;\r\n    float: right;\r\n    padding-right: 25%;\r\n}\r\n\r\n\r\n\r\n.submit-btn{\r\n    float: right;\r\n    background-color: #42a5f5;\r\n    margin-right: 28%;\r\n    color: white;\r\n}\r\n\r\n\r\n\r\n.forgotpassword{\r\n    padding-left: 10%;\r\n}\r\n\r\n\r\n\r\n@media (max-width:800px) {\r\n    .submit-btn{\r\n        \r\n        margin-right: 23%;\r\n    }\r\n\r\n   \r\n}\r\n\r\n\r\n\r\n.background-image {\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n  \r\n    display: block;\r\n    background-image: url('http://666a658c624a3c03a6b2-25cda059d975d2f318c03e90bcf17c40.r92.cf1.rackcdn.com/unsplash_527bf56961712_1.JPG');\r\n    width: 1200px;\r\n    height: 800px;\r\n  \r\n    -webkit-filter: blur(5px);\r\n    -moz-filter: blur(5px);\r\n    -o-filter: blur(5px);\r\n    -ms-filter: blur(5px);\r\n    filter: blur(5px);\r\n  }\r\n  \r\n  "

/***/ }),

/***/ "./src/app/components/product/edit-item/edit-item-product.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/product/edit-item/edit-item-product.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\r\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\r\n<meta name=\"viewport\" content=\"width=device-width, user-scalable=no\"> \r\n\r\n\r\n<div  class=\"dashboard\">\r\n<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css\" rel=\"stylesheet\" integrity=\"sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1\" crossorigin=\"anonymous\">\r\n    <div class=\"container-fluid display-table\">\r\n        <div class=\"row display-table-row\">\r\n            <div class=\"col-md-2 col-sm-1 hidden-xs display-table-cell v-align box\" id=\"navigation\">\r\n                <div class=\"logo\">\r\n                    <a hef=\"home.html\"><img src=\"http://automablu.com.br/wp-content/uploads/2018/03/LOGOCOLORIDA.png\" alt=\"merkery_logo\" class=\"hidden-xs hidden-sm\">\r\n                        <img src=\"http://jskrishna.com/work/merkury/images/circle-logo.png\" alt=\"merkery_logo\" class=\"visible-xs visible-sm circle-logo\">\r\n                    </a>\r\n                </div>\r\n                <div class=\"navi\">\r\n                    <ul>\r\n                        <li><a routerLink=\"/home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Home</span></a></li>\r\n                        <li><a routerLink=\"/search-client\"> <i class=\"fa fa-tasks\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\"> Iniciar Venda </span></a></li>\r\n                        <li><a routerLink=\"/clients\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Clientes </span></a></li>\r\n                        <li class=\"active\"><a routerLink=\"/products\"><i class=\"fa fa-list-ol\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Produtos </span></a></li>\r\n                        <li ><a routerLink=\"/employees\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Funcionários </span></a></li>\r\n                        <li><a routerLink=\"/home\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Estatísticas</span></a></li>\r\n                        <li><a routerLink=\"/settings\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\" > Configurações</span></a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-10 col-sm-11 display-table-cell v-align\">\r\n                <div class=\"row\">\r\n                    <header>\r\n                        <div class=\"col-md-7\">\r\n                            <nav class=\"navbar-default pull-left\">\r\n                                <div class=\"navbar-header\">\r\n                                    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"offcanvas\" data-target=\"#side-menu\" aria-expanded=\"false\">\r\n                                        <span class=\"sr-only\">Toggle navigation</span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                    </button>\r\n                                </div>\r\n                            </nav>\r\n                            <div class=\"search hidden-xs hidden-sm\">\r\n                                <input type=\"text\" placeholder=\"Busca\" id=\"search\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"header-rightside\">\r\n                                <ul class=\"list-inline header-top pull-right\">\r\n                                    <li><a href=\"#\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a></li>\r\n                                    <li>\r\n                                        <a href=\"#\" class=\"icon-info\">\r\n                                            <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\r\n                                            <span class=\"label label-primary\">3</span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li class=\"dropdown\">\r\n                                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">User\r\n                                            <b class=\"caret\"></b></a>\r\n                                        <ul class=\"dropdown-menu\">\r\n                                            <li>\r\n                                                <div class=\"navbar-content\">\r\n                                                    <span>Ivan </span>\r\n                                                    <p class=\"text-muted small\">\r\n                                                        ivanalves94@gmail.com\r\n                                                    </p>\r\n                                                    <div class=\"divider\">\r\n                                                    </div>\r\n                                                    <a href=\"#\" class=\"view btn-sm active\">View Profile</a>\r\n                                                </div>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </header>\r\n                </div>\r\n\r\n                <div class=\"user-dashboard\">\r\n                       \r\n\r\n\r\n                  <form [formGroup]=\"productForm\" (submit)=\"onSubmit()\" >\r\n                    <div class=\"container\">  \r\n                    <div class=\"col-lg-6 col-md-6 col-sm-8  loginbox\">\r\n                        <div class=\" row\">\r\n                            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-6\">\r\n                                <img src=\"assets\\imagens\\logo.png\" alt=\"Logo\" class=\"logo\"> \r\n                            </div>\r\n                            <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-6  \">\r\n                                <span class=\"singtext\" color=\"blue\" > Editar Produto </span>   \r\n                            </div>\r\n                                         \r\n                        </div>\r\n              \r\n                        \r\n                        <div class=\" row loginbox_content \">                        \r\n                           \r\n                            <label for=\"name\" class=\" control-label\"> Nome: </label>\r\n                            <br>\r\n                            <div class=\"input-group input-group-sm\" >\r\n                                <span class=\"input-group-addon\">\r\n                                    <span></span>\r\n                                </span>\r\n                                <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Digite o Nome\" formControlName=\"name\">\r\n                              </div>\r\n                            <br>\r\n                            <label for=\"description\" class=\"control-label\">Descrição:</label>\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <span class=\"input-group-addon\"> </span>\r\n                                <textarea  class=\"form-control\" id=\"description\" \r\n                                formControlName=\"description\"> </textarea>     \r\n                            </div> \r\n                            <br> \r\n                            <label for=\"price\" class=\"control-label\"> Preço Unitário:</label>       \r\n                            <br>  \r\n                            <div class=\"input-group input-group-sm\">\r\n                                <span class=\"input-group-addon\"> </span>\r\n                                 <input type=\"number\" class=\"form-control\" min=\"0.05\" id=\"price\"  formControlName=\"price\">\r\n                            </div>\r\n                        </div>\r\n                        <div>                   \r\n                            <div>\r\n                                <button type=\"submit\" class=\"btn btn-primary btn-center\" [disabled]=\"productForm.invalid\" >\r\n                                    Atualizar\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-4 \"></div>\r\n              \r\n                 </div>        \r\n              </form>\r\n\r\n                </div>\r\n            </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div id=\"add_project\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n\r\n            <div class=\"modal-content\">\r\n                \r\n                <div class=\"modal-body\">\r\n                       \r\n                            <input type=\"text\" placeholder=\"Project Title\" name=\"name\">\r\n                            <input type=\"text\" placeholder=\"Post of Post\" name=\"mail\">\r\n                            <input type=\"text\" placeholder=\"Author\" name=\"passsword\">\r\n                            <textarea placeholder=\"Desicrption\"></textarea>\r\n                    </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"cancel\" data-dismiss=\"modal\">Close</button>\r\n                    <button type=\"button\" class=\"add-project\" data-dismiss=\"modal\">Save</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--\r\n\r\n\r\n<h1 class=\"text-center action\">Editar Produto</h1>\r\n\r\n<form class=\"form-horizontal\" [formGroup]=\"productForm\" (submit)=\"onSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label for=\"name\" class=\"col-sm-3 control-label\">Nome:</label>\r\n    <div class=\"col-sm-6\">\r\n      <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Digite o Nome\" formControlName=\"name\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"image\" class=\"col-sm-3 control-label\">Imagem:</label>\r\n    <div class=\"col-sm-6\">\r\n      <input type=\"text\" class=\"form-control\" id=\"image\"\r\n             formControlName=\"image\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"description\" class=\"col-sm-3 control-label\">Descrição:</label>\r\n    <div class=\"col-sm-6\">\r\n            <textarea rows=\"4\" cols=\"50\" class=\"form-control\" id=\"description\" placeholder=\"Digite a descrição\"\r\n                      formControlName=\"description\"> </textarea>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"price\" class=\"col-sm-3 control-label\">Preço:</label>\r\n    <div class=\"col-sm-6\">\r\n      <input type=\"number\" class=\"form-control\" id=\"price\" placeholder=\"Digite o preço\"\r\n             formControlName=\"price\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <div class=\"text-center\">\r\n      <button type=\"submit\" class=\"btn btn-danger\" [disabled]=\"productForm.invalid\">\r\n        Atualizar\r\n      </button>\r\n    </div>\r\n  </div>\r\n</form> -->"

/***/ }),

/***/ "./src/app/components/product/edit-item/edit-item-product.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/product/edit-item/edit-item-product.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EditItemProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditItemProductComponent", function() { return EditItemProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditItemProductComponent = /** @class */ (function () {
    function EditItemProductComponent(fb, productService, router, activatedRoute) {
        var _this = this;
        this.fb = fb;
        this.productService = productService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.params.forEach(function (params) {
            var id = params['id'];
            var product = _this.productService.getProductById(+id);
            _this.productForm = fb.group({
                'id': [product.id],
                'name': [product.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                'description': [product.description, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                'price': [product.price, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
        });
    }
    // edita um produto
    EditItemProductComponent.prototype.onSubmit = function () {
        this.productService.updateProduct(this.productForm.value);
        alert('Produto atualizado com sucesso.');
        this.router.navigate(['/products']);
    };
    EditItemProductComponent.prototype.ngOnInit = function () {
    };
    EditItemProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-item-product',
            template: __webpack_require__(/*! ./edit-item-product.component.html */ "./src/app/components/product/edit-item/edit-item-product.component.html"),
            styles: [__webpack_require__(/*! ./edit-item-product.component.css */ "./src/app/components/product/edit-item/edit-item-product.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditItemProductComponent);
    return EditItemProductComponent;
}());



/***/ }),

/***/ "./src/app/components/product/item/item-product.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/product/item/item-product.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/product/item/item-product.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/product/item/item-product.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<td>{{product.id}}</td>\r\n<td>{{product.name}}</td>\r\n<td>{{product.description}}</td>\r\n<td>R$ {{product.price}}</td>\r\n<td>\r\n    <button type=\"button\" class=\"btn btn-success\" [routerLink]=\"['/edit-product', product.id]\">\r\n        <span class=\"glyphicon glyphicon-pencil\"></span>\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"removeProduct()\">\r\n        <span class=\"glyphicon glyphicon-trash\"></span>\r\n    </button>\r\n</td>"

/***/ }),

/***/ "./src/app/components/product/item/item-product.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/product/item/item-product.component.ts ***!
  \*******************************************************************/
/*! exports provided: ItemProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemProductComponent", function() { return ItemProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/product */ "./src/app/models/product.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemProductComponent = /** @class */ (function () {
    function ItemProductComponent(productService) {
        this.productService = productService;
        this.removeProductEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ItemProductComponent.prototype.removeProduct = function () {
        this.productService.removeProduct(this.product);
        this.removeProductEvent.emit();
    };
    ItemProductComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_product__WEBPACK_IMPORTED_MODULE_1__["Product"])
    ], ItemProductComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemProductComponent.prototype, "removeProductEvent", void 0);
    ItemProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[app-item-product]',
            template: __webpack_require__(/*! ./item-product.component.html */ "./src/app/components/product/item/item-product.component.html"),
            styles: [__webpack_require__(/*! ./item-product.component.css */ "./src/app/components/product/item/item-product.component.css")]
        }),
        __metadata("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ItemProductComponent);
    return ItemProductComponent;
}());



/***/ }),

/***/ "./src/app/components/product/list-items/list-items-product.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/product/list-items/list-items-product.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-circle {\r\n    border-radius: 50%;\r\n}\r\n\r\n\r\n.dashboard{\r\n    \r\n    position:absolute;\r\n    top:0;\r\n    left:0;\r\n    z-index:11;\r\n    width:100%;\r\n    height:100%;\r\n   \r\n}\r\n\r\n\r\n.image {\r\nwidth: 200px;\r\nmargin-bottom: 10px;\r\n}\r\n\r\n\r\n.image-config {\r\nmargin-bottom: 40px;\r\n}\r\n\r\n\r\n/*Main CSS*/\r\n\r\n\r\n/*Login Signup Page*/\r\n\r\n\r\na:focus,a:hover,a{\r\noutline:none;\r\ntext-decoration: none;\r\n}\r\n\r\n\r\nli,ul{\r\nlist-style: none;\r\npadding: 0;\r\nmargin: 0;\r\n}\r\n\r\n\r\n.header-top i {\r\nfont-size: 18px;\r\n}\r\n\r\n\r\n.bg-image {\r\nposition: relative;\r\nwidth: 100%;\r\nheight: 100vh;\r\ndisplay: table;\r\n}\r\n\r\n\r\n.login-header {\r\ndisplay: inline-block;\r\nwidth: 100%;\r\nbackground: #0e1a35;\r\n}\r\n\r\n\r\n.login-signup {\r\ndisplay: table-cell;\r\nvertical-align: middle;\r\nwidth: 100%;\r\n}\r\n\r\n\r\n.login-logo img {\r\ncursor: pointer;\r\nmax-width: 171px;\r\npadding: 23px 15px 22px;\r\nwidth: 100%;\r\n}\r\n\r\n\r\n.login-header .navbar-right {\r\nmargin-right: 0px;\r\n}\r\n\r\n\r\n.login-header .nav-tabs > li.active > a,\r\n.login-header .nav-tabs > li.active > a:focus,\r\n.login-header .nav-tabs > li.active > a:hover {\r\nbackground-color: transparent;\r\nborder: none;\r\ncolor: #fff;\r\n}\r\n\r\n\r\n.login-header .nav-tabs > li > a {\r\nborder: medium none;\r\nborder-radius: 0;\r\nfont-size: 14px;\r\nfont-weight: 500;\r\nline-height: 48px;\r\npadding: 15px 30px;\r\ncolor: #fff;\r\n}\r\n\r\n\r\n.login-header .nav-tabs {\r\nborder-bottom: none;\r\n}\r\n\r\n\r\n.login-header .nav-tabs > li {\r\nmargin-bottom: 0px;\r\n}\r\n\r\n\r\n.login-header .nav > li > a:focus,\r\n.login-header .nav > li > a:hover {\r\nbackground: none;\r\ntext-decoration: none;\r\n}\r\n\r\n\r\n.login-header .nav-tabs > li.active {\r\nborder-bottom: 6px solid #5584ff;\r\n}\r\n\r\n\r\n.login-inner h1 {\r\ncolor: #8492af;\r\nfont-size: 48px;\r\nfont-weight: 300;\r\ntext-align: center;\r\nmargin-top: 0;\r\nmargin-bottom: 20px;\r\n}\r\n\r\n\r\n.login-inner h1 span {\r\ncolor: #5584ff;\r\n}\r\n\r\n\r\n.login-form {\r\ntext-align: center;\r\n}\r\n\r\n\r\n.login-form input {\r\n-moz-border-bottom-colors: none;\r\n-moz-border-left-colors: none;\r\n-moz-border-right-colors: none;\r\n-moz-border-top-colors: none;\r\nbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\nborder-color: -moz-use-text-color -moz-use-text-color #d4d9e3;\r\n-o-border-image: none;\r\n   border-image: none;\r\nborder-style: none none solid;\r\nborder-width: medium medium 1px;\r\nfont-size: 13px;\r\nfont-weight: 300;\r\nwidth: 100%;\r\ncolor: #8492af;\r\npadding: 15px 50px;\r\nfont-size: 17px;\r\nmax-width: 550px;\r\n}\r\n\r\n\r\n.login-form label {\r\nmargin-bottom: 30px;\r\nwidth: 100%;\r\n}\r\n\r\n\r\n.login-signup .tab-content {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nbox-shadow: 0 6px 12px rgba(0, 0, 0, 0.176);\r\ndisplay: inline-block;\r\nmargin-top: -8px;\r\nwidth: 100%;\r\n}\r\n\r\n\r\n.form-btn {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-weight: 400;\r\nmax-width: 250px;\r\npadding: 10px 0;\r\nposition: relative;\r\nwidth: 100%;\r\nmargin: 40px 0;\r\nbox-shadow: 0 2px 8px #d2d2d2;\r\n-moz-box-shadow: 0 2px 8px #d2d2d2;\r\n-webkit-box-shadow: 0 2px 8px #d2d2d2;\r\n}\r\n\r\n\r\n.form-btn::before {\r\ncontent: \"\";\r\nfont-family: FontAwesome;\r\nposition: absolute;\r\nright: 17px;\r\ntop: 9px;\r\n}\r\n\r\n\r\n.form-details {\r\npadding: 35px 0;\r\n}\r\n\r\n\r\n.tab-content .tab-pane {\r\npadding: 70px 0;\r\n}\r\n\r\n\r\n/*Login Signup Page*/\r\n\r\n\r\n/*Home Page*/\r\n\r\n\r\n.home {\r\nbackground: #f6f7fa;\r\n}\r\n\r\n\r\n#navigation {\r\nbackground: #0e1a35;\r\n}\r\n\r\n\r\n#navigation {\r\npadding: 0;\r\n}\r\n\r\n\r\n.display-table {\r\ndisplay: table;\r\npadding: 0;\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n\r\n\r\n.display-table-row {\r\ndisplay: table-row;\r\nheight: 100%;\r\n}\r\n\r\n\r\n.display-table-cell {\r\ndisplay: table-cell;\r\nfloat: none;\r\nheight: 100%;\r\n}\r\n\r\n\r\n.v-align {\r\nvertical-align: top;\r\n}\r\n\r\n\r\n.logo img {\r\nmax-width: 180px;\r\npadding: 16px 0 17px;\r\nwidth: 100%;\r\n}\r\n\r\n\r\n.header-top {\r\nmargin: 0;\r\npadding-top: 2px;\r\n}\r\n\r\n\r\n.header-top img {\r\nborder-radius: 50%;\r\nmax-width: 48px !important;\r\nwidth: 100%;\r\n}\r\n\r\n\r\n.add-project {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 27px 10px 45px;\r\nposition: relative;\r\n}\r\n\r\n\r\n.header-rightside .nav > li > a:focus,\r\n.header-rightside .nav > li > a:hover {\r\nbackground: none;\r\ntext-decoration: none;\r\n}\r\n\r\n\r\n.add-project::before {\r\ncontent: \"\";\r\n;\r\nheight: 12px;\r\nleft: 17px;\r\nposition: absolute;\r\ntop: 12px;\r\nwidth: 12px;\r\n}\r\n\r\n\r\n.add-project:hover {\r\ncolor: #ffffff;\r\n}\r\n\r\n\r\n.header-top i {\r\ncolor: #0e1a35;\r\n}\r\n\r\n\r\n.icon-info {\r\nposition: relative;\r\n}\r\n\r\n\r\n.navi i {\r\nfont-size: 20px;\r\n}\r\n\r\n\r\n.label.label-primary {\r\nborder-radius: 50%;\r\nfont-size: 9px;\r\nleft: 8px;\r\nposition: absolute;\r\ntop: -9px;\r\n}\r\n\r\n\r\n.icon-info .label {\r\nborder: 2px solid #ffffff;\r\nfont-weight: 500;\r\npadding: 3px 5px;\r\ntext-align: center;\r\n}\r\n\r\n\r\n.header-top li {\r\ndisplay: inline-block;\r\ntext-align: center;\r\n}\r\n\r\n\r\n.header-top .dropdown-toggle {\r\ncolor: #0e1a35;\r\n}\r\n\r\n\r\n.header-top .dropdown-menu {\r\nborder: medium none;\r\nleft: -85px;\r\npadding: 17px;\r\n}\r\n\r\n\r\n.view {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\ndisplay: inline-block;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\nmargin-top: 10px;\r\npadding: 10px 15px;\r\n}\r\n\r\n\r\n.navbar-content > span {\r\nfont-size: 13px;\r\nfont-weight: 700;\r\n}\r\n\r\n\r\n.img-responsive {\r\nwidth: 100%;\r\n}\r\n\r\n\r\n#navigation{\r\ntransition: all 0.5s ease;\r\n}\r\n\r\n\r\n.search input {\r\nborder: none;\r\nfont-size: 15px;\r\npadding: 15px 9px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\n\r\n\r\nheader {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nbox-shadow: 0 1px 12px rgba(0, 0, 0, 0.04);\r\ndisplay: inline-block !important;\r\nline-height: 23px;\r\npadding: 15px;\r\ntransition: all 0.5s ease 0s;\r\nwidth: 100%;\r\ntransition: all 0.5s ease;\r\n}\r\n\r\n\r\n.logo {\r\ntext-align: center;\r\n}\r\n\r\n\r\n.navi a {\r\nborder-bottom: 1px solid #0d172e;\r\nborder-top: 1px solid #0d172e;\r\ncolor: #ffffff;\r\ndisplay: block;\r\nfont-size: 17px;\r\nfont-weight: 500;\r\npadding: 28px 20px;\r\ntext-decoration: none;\r\n}\r\n\r\n\r\n.navi i {\r\nmargin-right: 15px;\r\ncolor: #5584ff;\r\n}\r\n\r\n\r\n.navi .active a {\r\nbackground: #122143;\r\nborder-left: 5px solid #5584ff;\r\npadding-left: 15px;\r\n}\r\n\r\n\r\n.navi a:hover {\r\nbackground: #122143 none repeat scroll 0 0;\r\nborder-left: 5px solid #5584ff;\r\ndisplay: block;\r\npadding-left: 15px;\r\n}\r\n\r\n\r\n.navbar-default {\r\nbackground-color: #ffffff;\r\nborder-color: #ffffff;\r\n}\r\n\r\n\r\n.navbar-toggle {\r\nborder: none;\r\n}\r\n\r\n\r\n.navbar-default .navbar-toggle:focus,\r\n.navbar-default .navbar-toggle:hover {\r\nbackground-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n\r\n.navbar-default .navbar-toggle .icon-bar {\r\nbackground-color: #0e1a35;\r\n}\r\n\r\n\r\n.circle-logo {\r\nmargin: 0 auto;\r\nmax-width: 30px !important;\r\ntext-align: center;\r\n}\r\n\r\n\r\n.hidden-xs{\r\ntransition: all 0.5s ease;\r\n}\r\n\r\n\r\n.user-dashboard {\r\npadding: 0 20px;\r\n}\r\n\r\n\r\n.user-dashboard h1 {\r\ncolor: #0e1a35;\r\nfont-size: 30px;\r\nfont-weight: 500;\r\nmargin: 0;\r\npadding: 21px 0;\r\n}\r\n\r\n\r\n.sales {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nborder: 1px solid #d4d9e3;\r\ndisplay: inline-block;\r\npadding: 15px;\r\nwidth: 100%;\r\n}\r\n\r\n\r\n.sales button {\r\nbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\nborder: 1px solid #dadee7;\r\nborder-radius: 100px;\r\nfont-size: 15px;\r\nletter-spacing: 0.5px;\r\npadding-right: 32px;\r\ncolor: #0e1a35;\r\n}\r\n\r\n\r\n.sales button::before {\r\ncontent: \"\";\r\nfont-family: FontAwesome;\r\nposition: absolute;\r\nright: 12px;\r\ntop: 11px;\r\n}\r\n\r\n\r\n.sales  .btn-group {\r\nfloat: right;\r\n}\r\n\r\n\r\n.sales h2 {\r\ncolor: #8492af;\r\nfloat: left;\r\nfont-size: 21px;\r\nfont-weight: 600;\r\nmargin: 0;\r\npadding: 9px 0 0;\r\n}\r\n\r\n\r\n.btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\nfont-size: 15px;\r\nfont-weight: 600;\r\nletter-spacing: 0.5px;\r\n}\r\n\r\n\r\n.sales .dropdown-menu{\r\nmargin: 0px;\r\npadding: 0px;\r\nborder: 0px;\r\nborder-radius: 8px;\r\nwidth: 100%;\r\ncolor: #0e1a35;\r\n}\r\n\r\n\r\n.sales .btn-group.open .dropdown-toggle, .btn.active, .btn:active{\r\nbox-shadow: none;\r\n}\r\n\r\n\r\n.sales .dropdown-menu > a {\r\ncolor: #0e1a35;\r\ndisplay: inline-block;\r\nfont-weight: 800;\r\npadding: 9px 0;\r\ntext-align: center;\r\nwidth: 100%;\r\n}\r\n\r\n\r\n#my-cool-chart svg {\r\nwidth: 100%;\r\n}\r\n\r\n\r\n.sales .dropdown-menu > a:hover{\r\ncolor: #5584FF;   \r\n}\r\n\r\n\r\n.shield-buttons {\r\ndisplay: none;\r\n}\r\n\r\n\r\n.close, .close:focus, .close:hover {\r\ncolor: #fff;;\r\nopacity: 1;\r\ntext-shadow: none;\r\n}\r\n\r\n\r\n.modal-body input {\r\nborder: 1px solid #d4d9e3;\r\nfont-size: 14px;\r\nfont-weight: 300;\r\nmargin: 5px 0;\r\npadding: 14px 10px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\n\r\n\r\n.modal-body textarea {\r\nborder: 1px solid #d4d9e3;\r\nfont-size: 14px;\r\nfont-weight: 300;\r\nheight: 200px;\r\nmargin-top: 5px;\r\npadding: 9px 10px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\n\r\n\r\n.modal-header.login-header h4 {\r\ncolor: #ffffff;\r\n}\r\n\r\n\r\n.modal-footer .add-project {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 30px;\r\nposition: relative;\r\n}\r\n\r\n\r\n.modal-footer .add-project::before{display: none;}\r\n\r\n\r\n.modal-footer {\r\nborder: 0 none;\r\npadding: 10px 15px 26px;\r\ntext-align: right;\r\n}\r\n\r\n\r\n.cancel {\r\nbackground: #0E1A35     ;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 30px;\r\nposition: relative;\r\n\r\n}\r\n\r\n\r\n.modal{\r\ntop: 20%; \r\n}\r\n\r\n\r\n.modal-header .close {\r\nmargin-top: 2px;\r\n}\r\n\r\n\r\n.search input:focus{\r\nborder-bottom: 1px solid #BDC4D4;\r\nline-height:22px;\r\ntransition: 0.1s all;\r\n}\r\n\r\n\r\n.modal-header.login-header {\r\nborder-top-left-radius: 5px;\r\nborder-top-right-radius: 5px;\r\n}\r\n\r\n\r\n/*Main CSS*/\r\n\r\n\r\n@media only screen and (max-device-width: 767px) {\r\n.login-logo img {\r\n    margin: 0 auto;\r\n}\r\n.login-details .nav-tabs > li {\r\n    text-align: center;\r\n    width: 50%;\r\n}\r\n.login-signup .login-inner h1 {\r\n    font-size: 26px;\r\n    margin-bottom: 0;\r\n    margin-top: 10px;\r\n}\r\n.login-inner .login-form input {\r\n    font-size: 15px;\r\n    max-width: 100%;\r\n    padding: 15px 45px;\r\n}\r\n.login-inner .form-details {\r\n    padding: 25px;\r\n}\r\n.login-inner .login-form label {\r\n    margin-bottom: 20px;\r\n    width: 100%;\r\n}\r\n.login-inner .form-btn {\r\n    margin: 0;\r\n    max-width: 180px;\r\n}\r\n.tab-content .tab-pane {\r\n    padding: 20px 0;\r\n}\r\n#navigation .navi a {\r\n    font-size: 14px;\r\n    padding: 20px;\r\n    text-align: center;\r\n}\r\n#navigation .navi i {\r\n    margin-right: 0px;\r\n}\r\n#navigation .navi a:hover,\r\n#navigation .navi .active a {\r\n    background: #122143 none repeat scroll 0 0;\r\n    border-left: none;\r\n    display: block;\r\n    padding-left: 20px;\r\n}\r\nheader .header-top img {\r\n    max-width: 38px !important;\r\n}\r\n.v-align header {\r\n    padding: 12px 15px;\r\n}\r\nheader .header-top li {\r\n    padding-left: 13px;\r\n    padding-right: 6px;\r\n}\r\n.navbar-default .navbar-toggle {\r\n    border-color: rgba(0, 0, 0, 0);\r\n}\r\n.navbar-header .navbar-toggle {\r\n    float: left;\r\n    margin: 0;\r\n    padding: 0;\r\n    top: 12px;\r\n}\r\nbutton,\r\n    html [type=\"button\"],\r\n    [type=\"reset\"],\r\n    [type=\"submit\"] {\r\n        outline: medium none;\r\n}\r\n.user-dashboard .sales h2 {\r\n    color: #8492af;\r\n    float: left;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    margin: 0;\r\n    padding: 13px 0 0;\r\n}\r\n.user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\n    font-size: 11px;\r\n}\r\n.user-dashboard .sales button {\r\n    font-size: 11px;\r\n    padding-right: 23px;\r\n}  \r\n.user-dashboard .sales h2 {\r\nfont-size: 12px;\r\n}\r\n.gutter{\r\npadding: 0;\r\n}\r\n}\r\n\r\n\r\n@media only screen and (max-device-width: 992px) {\r\nheader .header-top li {\r\n    padding-left: 20px !important;\r\n    padding-right: 0;\r\n}\r\nheader .logo img {\r\n    max-width: 125px !important;\r\n}\r\n\r\n}\r\n\r\n\r\n@media only screen and (min-device-width: 767px) and (max-device-width: 998px){\r\n  .user-dashboard .header-top {\r\n    padding-top: 5px;\r\n}\r\n.user-dashboard .header-rightside {\r\n    display: inline-block;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.user-dashboard .header-rightside .header-top img {\r\n    max-width: 41px !important;\r\n} \r\n.user-dashboard .sales button {\r\nfont-size: 10px;\r\n}\r\n.user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\nfont-size: 12px;\r\n}\r\n.user-dashboard .sales h2 {\r\nfont-size: 15px;\r\n}\r\n}\r\n\r\n\r\n@media only screen and (min-device-width:998px) and (max-device-width: 1350px){\r\n    #navigation .logo img {\r\nmax-width: 130px;\r\npadding: 16px 0 17px;\r\nwidth: 100%;\r\n}\r\n}   "

/***/ }),

/***/ "./src/app/components/product/list-items/list-items-product.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/product/list-items/list-items-product.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\r\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\r\n<meta name=\"viewport\" content=\"width=device-width, user-scalable=no\"> \r\n\r\n\r\n<div  class=\"dashboard\">\r\n<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css\" rel=\"stylesheet\" integrity=\"sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1\" crossorigin=\"anonymous\">\r\n    <div class=\"container-fluid display-table\">\r\n        <div class=\"row display-table-row\">\r\n            <div class=\"col-md-2 col-sm-1 hidden-xs display-table-cell v-align box\" id=\"navigation\">\r\n                <div class=\"logo\">\r\n                    <a hef=\"home.html\"><img src=\"http://automablu.com.br/wp-content/uploads/2018/03/LOGOCOLORIDA.png\" alt=\"merkery_logo\" class=\"hidden-xs hidden-sm\">\r\n                        <img src=\"http://jskrishna.com/work/merkury/images/circle-logo.png\" alt=\"merkery_logo\" class=\"visible-xs visible-sm circle-logo\">\r\n                    </a>\r\n                </div>\r\n                <div class=\"navi\">\r\n                    <ul>\r\n                            <li><a routerLink=\"/home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Home</span></a></li>\r\n                            <li><a routerLink=\"/search-client\"> <i class=\"fa fa-tasks\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\"> Iniciar Venda </span></a></li>\r\n                            <li><a routerLink=\"/clients\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Clientes </span></a></li>\r\n                            <li class=\"active\" ><a routerLink=\"/products\"><i class=\"fa fa-list-ol\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Produtos </span></a></li>\r\n                            <li><a routerLink=\"/employees\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Funcionários </span></a></li>\r\n                            <li><a routerLink=\"/home\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Estatísticas</span></a></li>\r\n                            <li><a routerLink=\"/settings\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\" > Configurações</span></a></li>\r\n                     </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-10 col-sm-11 display-table-cell v-align\">\r\n                <div class=\"row\">\r\n                    <header>\r\n                        <div class=\"col-md-7\">\r\n                            <nav class=\"navbar-default pull-left\">\r\n                                <div class=\"navbar-header\">\r\n                                    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"offcanvas\" data-target=\"#side-menu\" aria-expanded=\"false\">\r\n                                        <span class=\"sr-only\">Toggle navigation</span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                    </button>\r\n                                </div>\r\n                            </nav>\r\n                            <div class=\"search hidden-xs hidden-sm\">\r\n                                <input type=\"text\" placeholder=\"Busca\" id=\"search\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"header-rightside\">\r\n                                <ul class=\"list-inline header-top pull-right\">\r\n                                    <li><a href=\"#\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a></li>\r\n                                    <li>\r\n                                        <a href=\"#\" class=\"icon-info\">\r\n                                            <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\r\n                                            <span class=\"label label-primary\">3</span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li class=\"dropdown\">\r\n                                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> User\r\n                                            <b class=\"caret\"></b></a>\r\n                                        <ul class=\"dropdown-menu\">\r\n                                            <li>\r\n                                                <div class=\"navbar-content\">\r\n                                                    <span>Ivan </span>\r\n                                                    <p class=\"text-muted small\">\r\n                                                        ivanalves94@gmail.com\r\n                                                    </p>\r\n                                                    <div class=\"divider\">\r\n                                                    </div>\r\n                                                    <a href=\"#\" class=\"view btn-sm active\">View Profile</a>\r\n                                                </div>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </header>\r\n                </div>\r\n\r\n                <div class=\"user-dashboard\">\r\n                  \r\n                  \r\n\r\n\r\n\r\n\r\n\r\n<div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading text-center\">Produtos\r\n            <button type=\"button\" class=\"btn btn-warning btn-circle\" [routerLink]=\"['/new-product']\">\r\n                <span class=\"glyphicon glyphicon-plus\"></span>\r\n            </button>\r\n        </div>\r\n        <table class=\"table\">\r\n            <thead>\r\n            <tr>\r\n                <th>ID</th>\r\n                <th>Nome</th>\r\n                <th>Descrição</th>\r\n                <th>Preço</th>\r\n                <th>Ações</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr app-item-product *ngFor=\"let product of products;\" [product]=\"product\"\r\n                (removeProductEvent)=\"onRemoveProduct()\"></tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    \r\n                 </div>\r\n            </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div id=\"add_project\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n\r\n            <div class=\"modal-content\">\r\n                \r\n                <div class=\"modal-body\">\r\n                       \r\n                            <input type=\"text\" placeholder=\"Project Title\" name=\"name\">\r\n                            <input type=\"text\" placeholder=\"Post of Post\" name=\"mail\">\r\n                            <input type=\"text\" placeholder=\"Author\" name=\"passsword\">\r\n                            <textarea placeholder=\"Desicrption\"></textarea>\r\n                    </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"cancel\" data-dismiss=\"modal\">Close</button>\r\n                    <button type=\"button\" class=\"add-project\" data-dismiss=\"modal\">Save</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/product/list-items/list-items-product.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/product/list-items/list-items-product.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ListItemsProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemsProductComponent", function() { return ListItemsProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListItemsProductComponent = /** @class */ (function () {
    function ListItemsProductComponent(productService) {
        this.productService = productService;
    }
    // carrega os produtos ao iniciar o componente
    ListItemsProductComponent.prototype.ngOnInit = function () {
        this.products = this.productService.getProducts();
    };
    ListItemsProductComponent.prototype.onRemoveProduct = function () {
        this.products = this.productService.getProducts();
    };
    ListItemsProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-items-product',
            template: __webpack_require__(/*! ./list-items-product.component.html */ "./src/app/components/product/list-items/list-items-product.component.html"),
            styles: [__webpack_require__(/*! ./list-items-product.component.css */ "./src/app/components/product/list-items/list-items-product.component.css")]
        }),
        __metadata("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], ListItemsProductComponent);
    return ListItemsProductComponent;
}());



/***/ }),

/***/ "./src/app/components/product/new-product/new-product.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/product/new-product/new-product.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.login2background{    \r\n    background-repeat:repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n}\r\n.loginbox{  \r\n    background: white;\r\n    color: black;    \r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-right: -50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%); \r\n    padding: 20px;   \r\n    box-shadow: 0 8px 50px -2px #000;\r\n    border-radius:5px;\r\n\r\n}\r\n.logo{\r\n    width: 130px; \r\n    height: 55px;\r\n    margin-left: 10%;\r\n}\r\n@media (max-width:767px) {\r\n    .loginbox{ \r\n        margin-top: 5%;\r\n    }    \r\n}\r\n.loginbox_content{\r\n    padding:5% 11% 5% 11%;\r\n\r\n}\r\n.singtext{\r\n    font-family: \"Open Sans\",sans-serif;\r\n    font-size: 27px;  \r\n    color:  #42a5f5;\r\n    float: right;\r\n    padding-right: 25%;\r\n}\r\n.submit-btn{\r\n    float: right;\r\n    background-color: #42a5f5;\r\n    margin-right: 28%;\r\n    color: white;\r\n}\r\n.forgotpassword{\r\n    padding-left: 10%;\r\n}\r\n@media (max-width:800px) {\r\n    .submit-btn{\r\n        \r\n        margin-right: 23%;\r\n    }\r\n\r\n   \r\n}\r\n.background-image {\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n  \r\n    display: block;\r\n    background-image: url('http://666a658c624a3c03a6b2-25cda059d975d2f318c03e90bcf17c40.r92.cf1.rackcdn.com/unsplash_527bf56961712_1.JPG');\r\n    width: 1200px;\r\n    height: 800px;\r\n  \r\n    -webkit-filter: blur(5px);\r\n    -moz-filter: blur(5px);\r\n    -o-filter: blur(5px);\r\n    -ms-filter: blur(5px);\r\n    filter: blur(5px);\r\n  }\r\n.action {\r\n    margin-top: 40px;\r\n    margin-bottom: 40px;\r\n}\r\n.login2background{    \r\n    background-repeat:repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n}\r\n.loginbox{  \r\n    background: white;\r\n    color: black;    \r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-right: -50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%); \r\n    padding: 20px;   \r\n    box-shadow: 0 8px 50px -2px #000;\r\n    border-radius:5px;\r\n\r\n}\r\n.logo{\r\n    width: 130px; \r\n    height: 55px;\r\n    margin-left: 10%;\r\n}\r\n@media (max-width:767px) {\r\n    .loginbox{ \r\n        margin-top: 5%;\r\n    }    \r\n}\r\n.loginbox_content{\r\n    padding:5% 11% 5% 11%;\r\n\r\n}\r\n.singtext{\r\n    font-family: \"Open Sans\",sans-serif;\r\n    font-size: 27px;  \r\n    color:  #42a5f5;\r\n    float: right;\r\n    padding-right: 25%;\r\n}\r\n.submit-btn{\r\n    float: right;\r\n    background-color: #42a5f5;\r\n    margin-right: 28%;\r\n    color: white;\r\n}\r\n.forgotpassword{\r\n    padding-left: 10%;\r\n}\r\n@media (max-width:800px) {\r\n    .submit-btn{\r\n        \r\n        margin-right: 23%;\r\n    }\r\n\r\n   \r\n}\r\n.background-image {\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n  \r\n    display: block;\r\n    background-image: url('http://666a658c624a3c03a6b2-25cda059d975d2f318c03e90bcf17c40.r92.cf1.rackcdn.com/unsplash_527bf56961712_1.JPG');\r\n    width: 1200px;\r\n    height: 800px;\r\n  \r\n    -webkit-filter: blur(5px);\r\n    -moz-filter: blur(5px);\r\n    -o-filter: blur(5px);\r\n    -ms-filter: blur(5px);\r\n    filter: blur(5px);\r\n  }\r\n.action {\r\n    margin-top: 40px;\r\n    margin-bottom: 40px;\r\n  }\r\n.image {\r\n    width: 200px;\r\n    margin-bottom: 10px;\r\n  }\r\n.image-config {\r\n    margin-bottom: 40px;\r\n  }\r\n.action {\r\n    margin-top: 40px;\r\n  }\r\n.dashboard{\r\n    \r\n    position:absolute;\r\n    top:0;\r\n    left:0;\r\n    z-index:11;\r\n    width:100%;\r\n    height:100%;\r\n   \r\n  }\r\n.image {\r\n  width: 200px;\r\n  margin-bottom: 10px;\r\n  }\r\n.image-config {\r\n  margin-bottom: 40px;\r\n  }\r\n/*Main CSS*/\r\n/*Login Signup Page*/\r\na:focus,a:hover,a{\r\n  outline:none;\r\n  text-decoration: none;\r\n  }\r\nli,ul{\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  }\r\n.header-top i {\r\n  font-size: 18px;\r\n  }\r\n.bg-image {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: table;\r\n  }\r\n.login-header {\r\n  display: inline-block;\r\n  width: 100%;\r\n  background: #0e1a35;\r\n  }\r\n.login-signup {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n  width: 100%;\r\n  }\r\n.login-logo img {\r\n  cursor: pointer;\r\n  max-width: 171px;\r\n  padding: 23px 15px 22px;\r\n  width: 100%;\r\n  }\r\n.login-header .navbar-right {\r\n  margin-right: 0px;\r\n  }\r\n.login-header .nav-tabs > li.active > a,\r\n  .login-header .nav-tabs > li.active > a:focus,\r\n  .login-header .nav-tabs > li.active > a:hover {\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #fff;\r\n  }\r\n.login-header .nav-tabs > li > a {\r\n  border: medium none;\r\n  border-radius: 0;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  line-height: 48px;\r\n  padding: 15px 30px;\r\n  color: #fff;\r\n  }\r\n.login-header .nav-tabs {\r\n  border-bottom: none;\r\n  }\r\n.login-header .nav-tabs > li {\r\n  margin-bottom: 0px;\r\n  }\r\n.login-header .nav > li > a:focus,\r\n  .login-header .nav > li > a:hover {\r\n  background: none;\r\n  text-decoration: none;\r\n  }\r\n.login-header .nav-tabs > li.active {\r\n  border-bottom: 6px solid #5584ff;\r\n  }\r\n.login-inner h1 {\r\n  color: #8492af;\r\n  font-size: 48px;\r\n  font-weight: 300;\r\n  text-align: center;\r\n  margin-top: 0;\r\n  margin-bottom: 20px;\r\n  }\r\n.login-inner h1 span {\r\n  color: #5584ff;\r\n  }\r\n.login-form {\r\n  text-align: center;\r\n  }\r\n.login-form input {\r\n  -moz-border-bottom-colors: none;\r\n  -moz-border-left-colors: none;\r\n  -moz-border-right-colors: none;\r\n  -moz-border-top-colors: none;\r\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n  border-color: -moz-use-text-color -moz-use-text-color #d4d9e3;\r\n  -o-border-image: none;\r\n     border-image: none;\r\n  border-style: none none solid;\r\n  border-width: medium medium 1px;\r\n  font-size: 13px;\r\n  font-weight: 300;\r\n  width: 100%;\r\n  color: #8492af;\r\n  padding: 15px 50px;\r\n  font-size: 17px;\r\n  max-width: 550px;\r\n  }\r\n.login-form label {\r\n  margin-bottom: 30px;\r\n  width: 100%;\r\n  }\r\n.login-signup .tab-content {\r\n  background: #ffffff none repeat scroll 0 0;\r\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.176);\r\n  display: inline-block;\r\n  margin-top: -8px;\r\n  width: 100%;\r\n  }\r\n.form-btn {\r\n  background: #5584ff none repeat scroll 0 0;\r\n  border: medium none;\r\n  border-radius: 100px;\r\n  color: #ffffff;\r\n  font-weight: 400;\r\n  max-width: 250px;\r\n  padding: 10px 0;\r\n  position: relative;\r\n  width: 100%;\r\n  margin: 40px 0;\r\n  box-shadow: 0 2px 8px #d2d2d2;\r\n  -moz-box-shadow: 0 2px 8px #d2d2d2;\r\n  -webkit-box-shadow: 0 2px 8px #d2d2d2;\r\n  }\r\n.form-btn::before {\r\n  content: \"\";\r\n  font-family: FontAwesome;\r\n  position: absolute;\r\n  right: 17px;\r\n  top: 9px;\r\n  }\r\n.form-details {\r\n  padding: 35px 0;\r\n  }\r\n.tab-content .tab-pane {\r\n  padding: 70px 0;\r\n  }\r\n/*Login Signup Page*/\r\n/*Home Page*/\r\n.home {\r\n  background: #f6f7fa;\r\n  }\r\n#navigation {\r\n  background: #0e1a35;\r\n  }\r\n#navigation {\r\n  padding: 0;\r\n  }\r\n.display-table {\r\n  display: table;\r\n  padding: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  }\r\n.display-table-row {\r\n  display: table-row;\r\n  height: 100%;\r\n  }\r\n.display-table-cell {\r\n  display: table-cell;\r\n  float: none;\r\n  height: 100%;\r\n  }\r\n.v-align {\r\n  vertical-align: top;\r\n  }\r\n.logo img {\r\n  max-width: 180px;\r\n  padding: 16px 0 17px;\r\n  width: 100%;\r\n  }\r\n.header-top {\r\n  margin: 0;\r\n  padding-top: 2px;\r\n  }\r\n.header-top img {\r\n  border-radius: 50%;\r\n  max-width: 48px !important;\r\n  width: 100%;\r\n  }\r\n.add-project {\r\n  background: #5584ff none repeat scroll 0 0;\r\n  border-radius: 100px;\r\n  color: #ffffff;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  padding: 10px 27px 10px 45px;\r\n  position: relative;\r\n  }\r\n.header-rightside .nav > li > a:focus,\r\n  .header-rightside .nav > li > a:hover {\r\n  background: none;\r\n  text-decoration: none;\r\n  }\r\n.add-project::before {\r\n  content: \"\";\r\n  ;\r\n  height: 12px;\r\n  left: 17px;\r\n  position: absolute;\r\n  top: 12px;\r\n  width: 12px;\r\n  }\r\n.add-project:hover {\r\n  color: #ffffff;\r\n  }\r\n.header-top i {\r\n  color: #0e1a35;\r\n  }\r\n.icon-info {\r\n  position: relative;\r\n  }\r\n.navi i {\r\n  font-size: 20px;\r\n  }\r\n.label.label-primary {\r\n  border-radius: 50%;\r\n  font-size: 9px;\r\n  left: 8px;\r\n  position: absolute;\r\n  top: -9px;\r\n  }\r\n.icon-info .label {\r\n  border: 2px solid #ffffff;\r\n  font-weight: 500;\r\n  padding: 3px 5px;\r\n  text-align: center;\r\n  }\r\n.header-top li {\r\n  display: inline-block;\r\n  text-align: center;\r\n  }\r\n.header-top .dropdown-toggle {\r\n  color: #0e1a35;\r\n  }\r\n.header-top .dropdown-menu {\r\n  border: medium none;\r\n  left: -85px;\r\n  padding: 17px;\r\n  }\r\n.view {\r\n  background: #5584ff none repeat scroll 0 0;\r\n  border-radius: 100px;\r\n  color: #ffffff;\r\n  display: inline-block;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  margin-top: 10px;\r\n  padding: 10px 15px;\r\n  }\r\n.navbar-content > span {\r\n  font-size: 13px;\r\n  font-weight: 700;\r\n  }\r\n.img-responsive {\r\n  width: 100%;\r\n  }\r\n#navigation{\r\n  transition: all 0.5s ease;\r\n  }\r\n.search input {\r\n  border: none;\r\n  font-size: 15px;\r\n  padding: 15px 9px;\r\n  width: 100%;\r\n  color: #8492af;\r\n  }\r\nheader {\r\n  background: #ffffff none repeat scroll 0 0;\r\n  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.04);\r\n  display: inline-block !important;\r\n  line-height: 23px;\r\n  padding: 15px;\r\n  transition: all 0.5s ease 0s;\r\n  width: 100%;\r\n  transition: all 0.5s ease;\r\n  }\r\n.logo {\r\n  text-align: center;\r\n  }\r\n.navi a {\r\n  border-bottom: 1px solid #0d172e;\r\n  border-top: 1px solid #0d172e;\r\n  color: #ffffff;\r\n  display: block;\r\n  font-size: 17px;\r\n  font-weight: 500;\r\n  padding: 28px 20px;\r\n  text-decoration: none;\r\n  }\r\n.navi i {\r\n  margin-right: 15px;\r\n  color: #5584ff;\r\n  }\r\n.navi .active a {\r\n  background: #122143;\r\n  border-left: 5px solid #5584ff;\r\n  padding-left: 15px;\r\n  }\r\n.navi a:hover {\r\n  background: #122143 none repeat scroll 0 0;\r\n  border-left: 5px solid #5584ff;\r\n  display: block;\r\n  padding-left: 15px;\r\n  }\r\n.navbar-default {\r\n  background-color: #ffffff;\r\n  border-color: #ffffff;\r\n  }\r\n.navbar-toggle {\r\n  border: none;\r\n  }\r\n.navbar-default .navbar-toggle:focus,\r\n  .navbar-default .navbar-toggle:hover {\r\n  background-color: rgba(0, 0, 0, 0);\r\n  }\r\n.navbar-default .navbar-toggle .icon-bar {\r\n  background-color: #0e1a35;\r\n  }\r\n.circle-logo {\r\n  margin: 0 auto;\r\n  max-width: 30px !important;\r\n  text-align: center;\r\n  }\r\n.hidden-xs{\r\n  transition: all 0.5s ease;\r\n  }\r\n.user-dashboard {\r\n  padding: 0 20px;\r\n  }\r\n.user-dashboard h1 {\r\n  color: #0e1a35;\r\n  font-size: 30px;\r\n  font-weight: 500;\r\n  margin: 0;\r\n  padding: 21px 0;\r\n  }\r\n.sales {\r\n  background: #ffffff none repeat scroll 0 0;\r\n  border: 1px solid #d4d9e3;\r\n  display: inline-block;\r\n  padding: 15px;\r\n  width: 100%;\r\n  }\r\n.sales button {\r\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n  border: 1px solid #dadee7;\r\n  border-radius: 100px;\r\n  font-size: 15px;\r\n  letter-spacing: 0.5px;\r\n  padding-right: 32px;\r\n  color: #0e1a35;\r\n  }\r\n.sales button::before {\r\n  content: \"\";\r\n  font-family: FontAwesome;\r\n  position: absolute;\r\n  right: 12px;\r\n  top: 11px;\r\n  }\r\n.sales  .btn-group {\r\n  float: right;\r\n  }\r\n.sales h2 {\r\n  color: #8492af;\r\n  float: left;\r\n  font-size: 21px;\r\n  font-weight: 600;\r\n  margin: 0;\r\n  padding: 9px 0 0;\r\n  }\r\n.btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  letter-spacing: 0.5px;\r\n  }\r\n.sales .dropdown-menu{\r\n  margin: 0px;\r\n  padding: 0px;\r\n  border: 0px;\r\n  border-radius: 8px;\r\n  width: 100%;\r\n  color: #0e1a35;\r\n  }\r\n.sales .btn-group.open .dropdown-toggle, .btn.active, .btn:active{\r\n  box-shadow: none;\r\n  }\r\n.sales .dropdown-menu > a {\r\n  color: #0e1a35;\r\n  display: inline-block;\r\n  font-weight: 800;\r\n  padding: 9px 0;\r\n  text-align: center;\r\n  width: 100%;\r\n  }\r\n#my-cool-chart svg {\r\n  width: 100%;\r\n  }\r\n.sales .dropdown-menu > a:hover{\r\n  color: #5584FF;   \r\n  }\r\n.shield-buttons {\r\n  display: none;\r\n  }\r\n.close, .close:focus, .close:hover {\r\n  color: #fff;;\r\n  opacity: 1;\r\n  text-shadow: none;\r\n  }\r\n.modal-body input {\r\n  border: 1px solid #d4d9e3;\r\n  font-size: 14px;\r\n  font-weight: 300;\r\n  margin: 5px 0;\r\n  padding: 14px 10px;\r\n  width: 100%;\r\n  color: #8492af;\r\n  }\r\n.modal-body textarea {\r\n  border: 1px solid #d4d9e3;\r\n  font-size: 14px;\r\n  font-weight: 300;\r\n  height: 200px;\r\n  margin-top: 5px;\r\n  padding: 9px 10px;\r\n  width: 100%;\r\n  color: #8492af;\r\n  }\r\n.modal-header.login-header h4 {\r\n  color: #ffffff;\r\n  }\r\n.modal-footer .add-project {\r\n  background: #5584ff none repeat scroll 0 0;\r\n  border: medium none;\r\n  border-radius: 100px;\r\n  color: #ffffff;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  padding: 10px 30px;\r\n  position: relative;\r\n  }\r\n.modal-footer .add-project::before{display: none;}\r\n.modal-footer {\r\n  border: 0 none;\r\n  padding: 10px 15px 26px;\r\n  text-align: right;\r\n  }\r\n.cancel {\r\n  background: #0E1A35     ;\r\n  border: medium none;\r\n  border-radius: 100px;\r\n  color: #ffffff;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  padding: 10px 30px;\r\n  position: relative;\r\n  \r\n  }\r\n.modal{\r\n  top: 20%; \r\n  }\r\n.modal-header .close {\r\n  margin-top: 2px;\r\n  }\r\n.search input:focus{\r\n  border-bottom: 1px solid #BDC4D4;\r\n  line-height:22px;\r\n  transition: 0.1s all;\r\n  }\r\n.modal-header.login-header {\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n  }\r\n/*Main CSS*/\r\n@media only screen and (max-device-width: 767px) {\r\n  .login-logo img {\r\n    margin: 0 auto;\r\n  }\r\n  .login-details .nav-tabs > li {\r\n    text-align: center;\r\n    width: 50%;\r\n  }\r\n  .login-signup .login-inner h1 {\r\n    font-size: 26px;\r\n    margin-bottom: 0;\r\n    margin-top: 10px;\r\n  }\r\n  .login-inner .login-form input {\r\n    font-size: 15px;\r\n    max-width: 100%;\r\n    padding: 15px 45px;\r\n  }\r\n  .login-inner .form-details {\r\n    padding: 25px;\r\n  }\r\n  .login-inner .login-form label {\r\n    margin-bottom: 20px;\r\n    width: 100%;\r\n  }\r\n  .login-inner .form-btn {\r\n    margin: 0;\r\n    max-width: 180px;\r\n  }\r\n  .tab-content .tab-pane {\r\n    padding: 20px 0;\r\n  }\r\n  #navigation .navi a {\r\n    font-size: 14px;\r\n    padding: 20px;\r\n    text-align: center;\r\n  }\r\n  #navigation .navi i {\r\n    margin-right: 0px;\r\n  }\r\n  #navigation .navi a:hover,\r\n  #navigation .navi .active a {\r\n    background: #122143 none repeat scroll 0 0;\r\n    border-left: none;\r\n    display: block;\r\n    padding-left: 20px;\r\n  }\r\n  header .header-top img {\r\n    max-width: 38px !important;\r\n  }\r\n  .v-align header {\r\n    padding: 12px 15px;\r\n  }\r\n  header .header-top li {\r\n    padding-left: 13px;\r\n    padding-right: 6px;\r\n  }\r\n  .navbar-default .navbar-toggle {\r\n    border-color: rgba(0, 0, 0, 0);\r\n  }\r\n  .navbar-header .navbar-toggle {\r\n    float: left;\r\n    margin: 0;\r\n    padding: 0;\r\n    top: 12px;\r\n  }\r\n  button,\r\n    html [type=\"button\"],\r\n    [type=\"reset\"],\r\n    [type=\"submit\"] {\r\n        outline: medium none;\r\n  }\r\n  .user-dashboard .sales h2 {\r\n    color: #8492af;\r\n    float: left;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    margin: 0;\r\n    padding: 13px 0 0;\r\n  }\r\n  .user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\n    font-size: 11px;\r\n  }\r\n  .user-dashboard .sales button {\r\n    font-size: 11px;\r\n    padding-right: 23px;\r\n  }  \r\n  .user-dashboard .sales h2 {\r\n  font-size: 12px;\r\n  }\r\n  .gutter{\r\n  padding: 0;\r\n  }\r\n  }\r\n@media only screen and (max-device-width: 992px) {\r\n  header .header-top li {\r\n    padding-left: 20px !important;\r\n    padding-right: 0;\r\n  }\r\n  header .logo img {\r\n    max-width: 125px !important;\r\n  }\r\n  \r\n  }\r\n@media only screen and (min-device-width: 767px) and (max-device-width: 998px){\r\n  .user-dashboard .header-top {\r\n    padding-top: 5px;\r\n  }\r\n  .user-dashboard .header-rightside {\r\n    display: inline-block;\r\n    float: left;\r\n    width: 100%;\r\n  }\r\n  .user-dashboard .header-rightside .header-top img {\r\n    max-width: 41px !important;\r\n  } \r\n  .user-dashboard .sales button {\r\n  font-size: 10px;\r\n  }\r\n  .user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\n  font-size: 12px;\r\n  }\r\n  .user-dashboard .sales h2 {\r\n  font-size: 15px;\r\n  }\r\n  }\r\n@media only screen and (min-device-width:998px) and (max-device-width: 1350px){\r\n    #navigation .logo img {\r\n  max-width: 130px;\r\n  padding: 16px 0 17px;\r\n  width: 100%;\r\n  }\r\n  }\r\n.login2background{    \r\n    background-repeat:repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n}\r\n.loginbox{  \r\n    background: white;\r\n    color: black;    \r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-right: -50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%); \r\n    padding: 20px;   \r\n    box-shadow: 0 8px 50px -2px #000;\r\n    border-radius:5px;\r\n\r\n}\r\n.logo{\r\n    width: 130px; \r\n    height: 55px;\r\n    margin-left: 10%;\r\n}\r\n@media (max-width:767px) {\r\n    .loginbox{ \r\n        margin-top: 5%;\r\n    }    \r\n}\r\n.loginbox_content{\r\n    padding:5% 11% 5% 11%;\r\n\r\n}\r\n.singtext{\r\n    font-family: \"Open Sans\",sans-serif;\r\n    font-size: 27px;  \r\n    color:  #42a5f5;\r\n    float: right;\r\n    padding-right: 25%;\r\n}\r\n.submit-btn{\r\n    float: right;\r\n    background-color: #42a5f5;\r\n    margin-right: 28%;\r\n    color: white;\r\n}\r\n.forgotpassword{\r\n    padding-left: 10%;\r\n}\r\n@media (max-width:800px) {\r\n    .submit-btn{\r\n        \r\n        margin-right: 23%;\r\n    }\r\n\r\n   \r\n}\r\n.background-image {\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n  \r\n    display: block;\r\n    background-image: url('http://666a658c624a3c03a6b2-25cda059d975d2f318c03e90bcf17c40.r92.cf1.rackcdn.com/unsplash_527bf56961712_1.JPG');\r\n    width: 1200px;\r\n    height: 800px;\r\n  \r\n    -webkit-filter: blur(5px);\r\n    -moz-filter: blur(5px);\r\n    -o-filter: blur(5px);\r\n    -ms-filter: blur(5px);\r\n    filter: blur(5px);\r\n  }\r\n  \r\n  "

/***/ }),

/***/ "./src/app/components/product/new-product/new-product.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/product/new-product/new-product.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\r\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\r\n<meta name=\"viewport\" content=\"width=device-width, user-scalable=no\"> \r\n\r\n\r\n<div  class=\"dashboard\">\r\n<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css\" rel=\"stylesheet\" integrity=\"sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1\" crossorigin=\"anonymous\">\r\n    <div class=\"container-fluid display-table\">\r\n        <div class=\"row display-table-row\">\r\n            <div class=\"col-md-2 col-sm-1 hidden-xs display-table-cell v-align box\" id=\"navigation\">\r\n                <div class=\"logo\">\r\n                    <a hef=\"home.html\"><img src=\"http://automablu.com.br/wp-content/uploads/2018/03/LOGOCOLORIDA.png\" alt=\"merkery_logo\" class=\"hidden-xs hidden-sm\">\r\n                        <img src=\"http://jskrishna.com/work/merkury/images/circle-logo.png\" alt=\"merkery_logo\" class=\"visible-xs visible-sm circle-logo\">\r\n                    </a>\r\n                </div>\r\n                <div class=\"navi\">\r\n                    <ul>\r\n                        <li><a routerLink=\"/home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Home</span></a></li>\r\n                        <li><a routerLink=\"/search-client\"> <i class=\"fa fa-tasks\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\"> Iniciar Venda </span></a></li>\r\n                        <li><a routerLink=\"/clients\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Clientes </span></a></li>\r\n                        <li class=\"active\"><a routerLink=\"/products\"><i class=\"fa fa-list-ol\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Produtos </span></a></li>\r\n                        <li><a routerLink=\"/employees\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Funcionários </span></a></li>\r\n                        <li><a routerLink=\"/home\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Estatísticas</span></a></li>\r\n                        <li><a routerLink=\"/settings\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\" > Configurações</span></a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-10 col-sm-11 display-table-cell v-align\">\r\n                <div class=\"row\">\r\n                    <header>\r\n                        <div class=\"col-md-7\">\r\n                            <nav class=\"navbar-default pull-left\">\r\n                                <div class=\"navbar-header\">\r\n                                    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"offcanvas\" data-target=\"#side-menu\" aria-expanded=\"false\">\r\n                                        <span class=\"sr-only\">Toggle navigation</span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                    </button>\r\n                                </div>\r\n                            </nav>\r\n                            <div class=\"search hidden-xs hidden-sm\">\r\n                                <input type=\"text\" placeholder=\"Busca\" id=\"search\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"header-rightside\">\r\n                                <ul class=\"list-inline header-top pull-right\">\r\n                                    <li><a href=\"#\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a></li>\r\n                                    <li>\r\n                                        <a href=\"#\" class=\"icon-info\">\r\n                                            <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\r\n                                            <span class=\"label label-primary\">3</span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li class=\"dropdown\">\r\n                                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">User\r\n                                            <b class=\"caret\"></b></a>\r\n                                        <ul class=\"dropdown-menu\">\r\n                                            <li>\r\n                                                <div class=\"navbar-content\">\r\n                                                    <span>Ivan </span>\r\n                                                    <p class=\"text-muted small\">\r\n                                                        ivanalves94@gmail.com\r\n                                                    </p>\r\n                                                    <div class=\"divider\">\r\n                                                    </div>\r\n                                                    <a href=\"#\" class=\"view btn-sm active\">View Profile</a>\r\n                                                </div>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </header>\r\n                </div>\r\n\r\n                <div class=\"user-dashboard\">\r\n                       \r\n\r\n                    <form [formGroup]=\"productForm\" (submit)=\"onSubmit()\" >\r\n                        <div class=\"container\">  \r\n                        <div class=\"col-lg-6 col-md-6 col-sm-8  loginbox\">\r\n                            <div class=\" row\">\r\n                                <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-6\">\r\n                                    <img src=\"assets\\imagens\\logo.png\" alt=\"Logo\" class=\"logo\"> \r\n                                </div>\r\n                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-6  \">\r\n                                    <span class=\"singtext\" color=\"blue\" > Novo Produto </span>   \r\n                                </div>\r\n                                             \r\n                            </div>\r\n            \r\n                            \r\n                            <div class=\" row loginbox_content \">                        \r\n                               \r\n                                <label for=\"name\" class=\" control-label\"> Nome: </label>\r\n                                <br>\r\n                                <div class=\"input-group input-group-sm\" >\r\n                                    <span class=\"input-group-addon\">\r\n                                        <span></span>\r\n                                    </span>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"name\"  required ngModel name=\"name\" formControlName=\"name\" >\r\n                                </div>\r\n                                <br>\r\n                                <label for=\"description\" class=\"control-label\">Descrição:</label>\r\n                                <div class=\"input-group input-group-sm\">\r\n                                    <span class=\"input-group-addon\"> </span>\r\n                                    <textarea  class=\"form-control\" id=\"description\" \r\n                                    formControlName=\"description\"> </textarea>     \r\n                                </div> \r\n                                <br> \r\n                                <label for=\"price\" class=\"control-label\"> Preço Unitário:</label>       \r\n                                <br>  \r\n                                <div class=\"input-group input-group-sm\">\r\n                                    <span class=\"input-group-addon\"> </span>\r\n                                     <input type=\"number\" class=\"form-control\" min=\"0.05\" id=\"price\"  formControlName=\"price\">\r\n                                </div>\r\n                            </div>\r\n                            <div >                   \r\n                                <div >\r\n                                    <button type=\"submit\" class=\"btn btn-primary btn-center\" [disabled]=\"productForm.invalid\" >\r\n                                        Cadastrar\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6 col-md-6 col-sm-4 \"></div>\r\n            \r\n                     </div>        \r\n                </form>\r\n\r\n                </div>\r\n            </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div id=\"add_project\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n\r\n            <div class=\"modal-content\">\r\n                \r\n                <div class=\"modal-body\">\r\n                       \r\n                            <input type=\"text\" placeholder=\"Project Title\" name=\"name\">\r\n                            <input type=\"text\" placeholder=\"Post of Post\" name=\"mail\">\r\n                            <input type=\"text\" placeholder=\"Author\" name=\"passsword\">\r\n                            <textarea placeholder=\"Desicrption\"></textarea>\r\n                    </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"cancel\" data-dismiss=\"modal\">Close</button>\r\n                    <button type=\"button\" class=\"add-project\" data-dismiss=\"modal\">Save</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/product/new-product/new-product.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/product/new-product/new-product.component.ts ***!
  \*************************************************************************/
/*! exports provided: NewProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProductComponent", function() { return NewProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewProductComponent = /** @class */ (function () {
    function NewProductComponent(fb, productService, router) {
        this.fb = fb;
        this.productService = productService;
        this.router = router;
        this.productForm = fb.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'description': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'price': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    // salva um produto no carrinho de compras
    NewProductComponent.prototype.onSubmit = function () {
        this.productService.saveProduct(this.productForm.value);
        this.productService.getProducts().forEach(function (product) { return console.log(product); });
        alert('Produto adicionado com sucesso.');
        this.router.navigate(['/products']);
    };
    NewProductComponent.prototype.ngOnInit = function () {
    };
    NewProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-product',
            template: __webpack_require__(/*! ./new-product.component.html */ "./src/app/components/product/new-product/new-product.component.html"),
            styles: [__webpack_require__(/*! ./new-product.component.css */ "./src/app/components/product/new-product/new-product.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewProductComponent);
    return NewProductComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.login2background{    \r\n    background-repeat:repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n}\r\n\r\n.button-cancel{\r\n    background-color: #e53935;\r\n    margin-right: 28%;\r\n    color: white;\r\n}\r\n\r\n.loginbox{  \r\n    background: white;\r\n    color: black;    \r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-right: -50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%); \r\n    padding: 20px;   \r\n    box-shadow: 0 8px 50px -2px #000;\r\n    border-radius:5px;\r\n\r\n}\r\n\r\n.logo{\r\n    width: 130px; \r\n    height: 55px;\r\n    margin-left: 10%;\r\n}\r\n\r\n@media (max-width:767px) {\r\n    .loginbox{ \r\n        margin-top: 5%;\r\n    }    \r\n}\r\n\r\n.loginbox_content{\r\n    padding:5% 11% 5% 11%;\r\n\r\n}\r\n\r\n.singtext{\r\n    font-family: \"Open Sans\",sans-serif;\r\n    font-size: 27px;  \r\n    color:  #42a5f5;\r\n    float: right;\r\n    padding-right: 25%;\r\n}\r\n\r\n.submit-btn{\r\n    float: right;\r\n    background-color: #42a5f5;\r\n    margin-right: 28%;\r\n    color: white;\r\n}\r\n\r\n.forgotpassword{\r\n    padding-left: 10%;\r\n}\r\n\r\n@media (max-width:800px) {\r\n    .submit-btn{\r\n        \r\n        margin-right: 23%;\r\n    }\r\n\r\n   \r\n}\r\n\r\n.background-image {\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n  \r\n    display: block;\r\n    background-image: url('http://666a658c624a3c03a6b2-25cda059d975d2f318c03e90bcf17c40.r92.cf1.rackcdn.com/unsplash_527bf56961712_1.JPG');\r\n    width: 1200px;\r\n    height: 800px;\r\n  \r\n    -webkit-filter: blur(5px);\r\n    -moz-filter: blur(5px);\r\n    -o-filter: blur(5px);\r\n    -ms-filter: blur(5px);\r\n    filter: blur(5px);\r\n  }\r\n  \r\n  "

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n\n<body class=\"login2background\">\n\n    <form class=\"form-horizontal\" #f=\"ngForm\" (submit)=\"registerForm(f)\">\n\n\n        <div class=\"container\">  \n            <div class=\"col-lg-6 col-md-6 col-sm-8  loginbox\">\n                <div class=\" row\">\n                    <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-6\">\n                        <img src=\"assets\\imagens\\logo.png\" alt=\"Logo\" class=\"logo\"> \n                    </div>\n                    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-6  \">\n                        <span class=\"singtext\" color=\"blue\" > Cadastro </span>   \n                    </div>\n                                 \n                </div>\n                <div class=\" row loginbox_content \">                        \n                    <div class=\"input-group input-group-sm\" >\n                        <span class=\"input-group-addon\">\n                            <span class=\"glyphicon glyphicon-user\"></span>\n                        </span>\n                        <input type=\"text\" class=\"form-control\" id=\"email\" required ngModel placeholder=\"Digite email\" name=\"email\">\n                    </div>\n                    <br>  <br> \n                    <div class=\"input-group input-group-sm\">\n                        <span class=\"input-group-addon\">\n                            <span class=\"glyphicon glyphicon-lock\"></span>\n                        </span>\n                        <input type=\"password\" class=\"form-control\" id=\"password\" required ngModel placeholder=\"Digite sua senha\"    name=\"password\">\n     \n                    </div>     \n                    <br>  <br> \n                    <div class=\"input-group input-group-sm\">\n                            <span class=\"input-group-addon\">\n                                <span class=\"glyphicon glyphicon-lock\"></span>\n                            </span>\n                            <input type=\"password\" class=\"form-control\" id=\"password2\" required ngModel placeholder=\"Repita senha\" name=\"password2\">\n         \n                    </div>    \n                    <br>  <br> \n                    <div class=\"input-group input-group-sm\">\n                            <span class=\"input-group-addon\">\n                                <span class=\"glyphicon glyphicon-user\"></span>\n                            </span>\n                            <input type=\"text\" class=\"form-control\" id=\"cpf\" required ngModel placeholder=\"Digite seu CPF\"  formControlName=\"cpf\">\n                            \n                    </div>  \n                    <br>   <br> \n                    <div class=\"input-group input-group-sm\">\n                            <span class=\"input-group-addon\">\n                                <span class=\"glyphicon glyphicon-user\"></span>\n                            </span>\n                            <input type=\"email\" class=\"form-control\" id=\"rg\" placeholder=\"Digite seu RG\" formControlName=\"rg\">\n                            \n                    </div>  \n                    <br>\n                    <br> \n                  \n                      <!-- Select Basic -->\n                    <div>\n                          <label class=\"col-md-5  control-label\" for=\"idAdmin\"> Tipo de Usuário</label>\n                          <div class=\"col-md-6 \">\n                            <select id=\"typeUser\" name=\"typeUser\">\n                             <option value=\"1\">Gerente </option>\n                              <option value=\"2\">Funcionário</option>\n                          </select>\n                        </div>\n                     </div>\n                \n                \n                \n                </div>\n                <div class=\"row \">                   \n                    <div class=\"col-lg-8 col-md-8  col-sm-8 col-xs-7 forgotpassword \"> \n                        <button type=\"button\" class=\"btn button-cancel\" [routerLink]=\"['/']\" > Cancelar\n                            \n                        </button>                            \n\n                    </div>\n                    <div class=\"col-lg-4 col-md-4 col-sm-4  col-xs-5 \">          \n                            <button type=\"submit\" class=\"btn submit-btn\">\n                                    Cadastrar\n                            </button>\n                          \n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-6 col-md-6 col-sm-4 \"></div>\n\n            </div>        \n    </form>\n    </body>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
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



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.cancel = function () {
        this.router.navigate(["/"]);
    };
    RegisterComponent.prototype.registerForm = function (f) {
        if (!f.valid) {
            return;
        }
        if (f.controls.password.value.length < 6) {
            alert("Senha muito curta");
        }
        else {
            if (f.controls.password2.value === f.controls.password.value) {
                this.afAuth.auth.createUserWithEmailAndPassword(f.controls.email.value, f.controls.password.value).catch(function (error) {
                    alert('Usuario cadastrado com sucesso. ');
                }).catch(function (error) {
                    alert(error.message);
                });
            }
            else {
                alert('Senhas não são iguais');
            }
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/settings.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/settings/settings.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".action {\r\n    margin-top: 40px;\r\n}\r\n\r\n.image {\r\n    width: 200px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.image-config {\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.action {\r\n    margin-top: 40px;\r\n}\r\n\r\n.dashboard{\r\n    \r\n    position:absolute;\r\n    top:0;\r\n    left:0;\r\n    z-index:11;\r\n    width:100%;\r\n    height:100%;\r\n   \r\n}\r\n\r\n.image {\r\nwidth: 200px;\r\nmargin-bottom: 10px;\r\n}\r\n\r\n.image-config {\r\nmargin-bottom: 40px;\r\n}\r\n\r\n/*Main CSS*/\r\n\r\n/*Login Signup Page*/\r\n\r\na:focus,a:hover,a{\r\noutline:none;\r\ntext-decoration: none;\r\n}\r\n\r\nli,ul{\r\nlist-style: none;\r\npadding: 0;\r\nmargin: 0;\r\n}\r\n\r\n.header-top i {\r\nfont-size: 18px;\r\n}\r\n\r\n.bg-image {\r\nposition: relative;\r\nwidth: 100%;\r\nheight: 100vh;\r\ndisplay: table;\r\n}\r\n\r\n.login-header {\r\ndisplay: inline-block;\r\nwidth: 100%;\r\nbackground: #0e1a35;\r\n}\r\n\r\n.login-signup {\r\ndisplay: table-cell;\r\nvertical-align: middle;\r\nwidth: 100%;\r\n}\r\n\r\n.login-logo img {\r\ncursor: pointer;\r\nmax-width: 171px;\r\npadding: 23px 15px 22px;\r\nwidth: 100%;\r\n}\r\n\r\n.login-header .navbar-right {\r\nmargin-right: 0px;\r\n}\r\n\r\n.login-header .nav-tabs > li.active > a,\r\n.login-header .nav-tabs > li.active > a:focus,\r\n.login-header .nav-tabs > li.active > a:hover {\r\nbackground-color: transparent;\r\nborder: none;\r\ncolor: #fff;\r\n}\r\n\r\n.login-header .nav-tabs > li > a {\r\nborder: medium none;\r\nborder-radius: 0;\r\nfont-size: 14px;\r\nfont-weight: 500;\r\nline-height: 48px;\r\npadding: 15px 30px;\r\ncolor: #fff;\r\n}\r\n\r\n.login-header .nav-tabs {\r\nborder-bottom: none;\r\n}\r\n\r\n.login-header .nav-tabs > li {\r\nmargin-bottom: 0px;\r\n}\r\n\r\n.login-header .nav > li > a:focus,\r\n.login-header .nav > li > a:hover {\r\nbackground: none;\r\ntext-decoration: none;\r\n}\r\n\r\n.login-header .nav-tabs > li.active {\r\nborder-bottom: 6px solid #5584ff;\r\n}\r\n\r\n.login-inner h1 {\r\ncolor: #8492af;\r\nfont-size: 48px;\r\nfont-weight: 300;\r\ntext-align: center;\r\nmargin-top: 0;\r\nmargin-bottom: 20px;\r\n}\r\n\r\n.login-inner h1 span {\r\ncolor: #5584ff;\r\n}\r\n\r\n.login-form {\r\ntext-align: center;\r\n}\r\n\r\n.login-form input {\r\n-moz-border-bottom-colors: none;\r\n-moz-border-left-colors: none;\r\n-moz-border-right-colors: none;\r\n-moz-border-top-colors: none;\r\nbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\nborder-color: -moz-use-text-color -moz-use-text-color #d4d9e3;\r\n-o-border-image: none;\r\n   border-image: none;\r\nborder-style: none none solid;\r\nborder-width: medium medium 1px;\r\nfont-size: 13px;\r\nfont-weight: 300;\r\nwidth: 100%;\r\ncolor: #8492af;\r\npadding: 15px 50px;\r\nfont-size: 17px;\r\nmax-width: 550px;\r\n}\r\n\r\n.login-form label {\r\nmargin-bottom: 30px;\r\nwidth: 100%;\r\n}\r\n\r\n.login-signup .tab-content {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nbox-shadow: 0 6px 12px rgba(0, 0, 0, 0.176);\r\ndisplay: inline-block;\r\nmargin-top: -8px;\r\nwidth: 100%;\r\n}\r\n\r\n.form-btn {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-weight: 400;\r\nmax-width: 250px;\r\npadding: 10px 0;\r\nposition: relative;\r\nwidth: 100%;\r\nmargin: 40px 0;\r\nbox-shadow: 0 2px 8px #d2d2d2;\r\n-moz-box-shadow: 0 2px 8px #d2d2d2;\r\n-webkit-box-shadow: 0 2px 8px #d2d2d2;\r\n}\r\n\r\n.form-btn::before {\r\ncontent: \"\";\r\nfont-family: FontAwesome;\r\nposition: absolute;\r\nright: 17px;\r\ntop: 9px;\r\n}\r\n\r\n.form-details {\r\npadding: 35px 0;\r\n}\r\n\r\n.tab-content .tab-pane {\r\npadding: 70px 0;\r\n}\r\n\r\n/*Login Signup Page*/\r\n\r\n/*Home Page*/\r\n\r\n.home {\r\nbackground: #f6f7fa;\r\n}\r\n\r\n#navigation {\r\nbackground: #0e1a35;\r\n}\r\n\r\n#navigation {\r\npadding: 0;\r\n}\r\n\r\n.display-table {\r\ndisplay: table;\r\npadding: 0;\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n\r\n.display-table-row {\r\ndisplay: table-row;\r\nheight: 100%;\r\n}\r\n\r\n.display-table-cell {\r\ndisplay: table-cell;\r\nfloat: none;\r\nheight: 100%;\r\n}\r\n\r\n.v-align {\r\nvertical-align: top;\r\n}\r\n\r\n.logo img {\r\nmax-width: 180px;\r\npadding: 16px 0 17px;\r\nwidth: 100%;\r\n}\r\n\r\n.header-top {\r\nmargin: 0;\r\npadding-top: 2px;\r\n}\r\n\r\n.header-top img {\r\nborder-radius: 50%;\r\nmax-width: 48px !important;\r\nwidth: 100%;\r\n}\r\n\r\n.add-project {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 27px 10px 45px;\r\nposition: relative;\r\n}\r\n\r\n.header-rightside .nav > li > a:focus,\r\n.header-rightside .nav > li > a:hover {\r\nbackground: none;\r\ntext-decoration: none;\r\n}\r\n\r\n.add-project::before {\r\ncontent: \"\";\r\n;\r\nheight: 12px;\r\nleft: 17px;\r\nposition: absolute;\r\ntop: 12px;\r\nwidth: 12px;\r\n}\r\n\r\n.add-project:hover {\r\ncolor: #ffffff;\r\n}\r\n\r\n.header-top i {\r\ncolor: #0e1a35;\r\n}\r\n\r\n.icon-info {\r\nposition: relative;\r\n}\r\n\r\n.navi i {\r\nfont-size: 20px;\r\n}\r\n\r\n.label.label-primary {\r\nborder-radius: 50%;\r\nfont-size: 9px;\r\nleft: 8px;\r\nposition: absolute;\r\ntop: -9px;\r\n}\r\n\r\n.icon-info .label {\r\nborder: 2px solid #ffffff;\r\nfont-weight: 500;\r\npadding: 3px 5px;\r\ntext-align: center;\r\n}\r\n\r\n.header-top li {\r\ndisplay: inline-block;\r\ntext-align: center;\r\n}\r\n\r\n.header-top .dropdown-toggle {\r\ncolor: #0e1a35;\r\n}\r\n\r\n.header-top .dropdown-menu {\r\nborder: medium none;\r\nleft: -85px;\r\npadding: 17px;\r\n}\r\n\r\n.view {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\ndisplay: inline-block;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\nmargin-top: 10px;\r\npadding: 10px 15px;\r\n}\r\n\r\n.navbar-content > span {\r\nfont-size: 13px;\r\nfont-weight: 700;\r\n}\r\n\r\n.img-responsive {\r\nwidth: 100%;\r\n}\r\n\r\n#navigation{\r\ntransition: all 0.5s ease;\r\n}\r\n\r\n.search input {\r\nborder: none;\r\nfont-size: 15px;\r\npadding: 15px 9px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\n\r\nheader {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nbox-shadow: 0 1px 12px rgba(0, 0, 0, 0.04);\r\ndisplay: inline-block !important;\r\nline-height: 23px;\r\npadding: 15px;\r\ntransition: all 0.5s ease 0s;\r\nwidth: 100%;\r\ntransition: all 0.5s ease;\r\n}\r\n\r\n.logo {\r\ntext-align: center;\r\n}\r\n\r\n.navi a {\r\nborder-bottom: 1px solid #0d172e;\r\nborder-top: 1px solid #0d172e;\r\ncolor: #ffffff;\r\ndisplay: block;\r\nfont-size: 17px;\r\nfont-weight: 500;\r\npadding: 28px 20px;\r\ntext-decoration: none;\r\n}\r\n\r\n.navi i {\r\nmargin-right: 15px;\r\ncolor: #5584ff;\r\n}\r\n\r\n.navi .active a {\r\nbackground: #122143;\r\nborder-left: 5px solid #5584ff;\r\npadding-left: 15px;\r\n}\r\n\r\n.navi a:hover {\r\nbackground: #122143 none repeat scroll 0 0;\r\nborder-left: 5px solid #5584ff;\r\ndisplay: block;\r\npadding-left: 15px;\r\n}\r\n\r\n.navbar-default {\r\nbackground-color: #ffffff;\r\nborder-color: #ffffff;\r\n}\r\n\r\n.navbar-toggle {\r\nborder: none;\r\n}\r\n\r\n.navbar-default .navbar-toggle:focus,\r\n.navbar-default .navbar-toggle:hover {\r\nbackground-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n.navbar-default .navbar-toggle .icon-bar {\r\nbackground-color: #0e1a35;\r\n}\r\n\r\n.circle-logo {\r\nmargin: 0 auto;\r\nmax-width: 30px !important;\r\ntext-align: center;\r\n}\r\n\r\n.hidden-xs{\r\ntransition: all 0.5s ease;\r\n}\r\n\r\n.user-dashboard {\r\npadding: 0 20px;\r\n}\r\n\r\n.user-dashboard h1 {\r\ncolor: #0e1a35;\r\nfont-size: 30px;\r\nfont-weight: 500;\r\nmargin: 0;\r\npadding: 21px 0;\r\n}\r\n\r\n.sales {\r\nbackground: #ffffff none repeat scroll 0 0;\r\nborder: 1px solid #d4d9e3;\r\ndisplay: inline-block;\r\npadding: 15px;\r\nwidth: 100%;\r\n}\r\n\r\n.sales button {\r\nbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\nborder: 1px solid #dadee7;\r\nborder-radius: 100px;\r\nfont-size: 15px;\r\nletter-spacing: 0.5px;\r\npadding-right: 32px;\r\ncolor: #0e1a35;\r\n}\r\n\r\n.sales button::before {\r\ncontent: \"\";\r\nfont-family: FontAwesome;\r\nposition: absolute;\r\nright: 12px;\r\ntop: 11px;\r\n}\r\n\r\n.sales  .btn-group {\r\nfloat: right;\r\n}\r\n\r\n.sales h2 {\r\ncolor: #8492af;\r\nfloat: left;\r\nfont-size: 21px;\r\nfont-weight: 600;\r\nmargin: 0;\r\npadding: 9px 0 0;\r\n}\r\n\r\n.btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\nfont-size: 15px;\r\nfont-weight: 600;\r\nletter-spacing: 0.5px;\r\n}\r\n\r\n.sales .dropdown-menu{\r\nmargin: 0px;\r\npadding: 0px;\r\nborder: 0px;\r\nborder-radius: 8px;\r\nwidth: 100%;\r\ncolor: #0e1a35;\r\n}\r\n\r\n.sales .btn-group.open .dropdown-toggle, .btn.active, .btn:active{\r\nbox-shadow: none;\r\n}\r\n\r\n.sales .dropdown-menu > a {\r\ncolor: #0e1a35;\r\ndisplay: inline-block;\r\nfont-weight: 800;\r\npadding: 9px 0;\r\ntext-align: center;\r\nwidth: 100%;\r\n}\r\n\r\n#my-cool-chart svg {\r\nwidth: 100%;\r\n}\r\n\r\n.sales .dropdown-menu > a:hover{\r\ncolor: #5584FF;   \r\n}\r\n\r\n.shield-buttons {\r\ndisplay: none;\r\n}\r\n\r\n.close, .close:focus, .close:hover {\r\ncolor: #fff;;\r\nopacity: 1;\r\ntext-shadow: none;\r\n}\r\n\r\n.modal-body input {\r\nborder: 1px solid #d4d9e3;\r\nfont-size: 14px;\r\nfont-weight: 300;\r\nmargin: 5px 0;\r\npadding: 14px 10px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\n\r\n.modal-body textarea {\r\nborder: 1px solid #d4d9e3;\r\nfont-size: 14px;\r\nfont-weight: 300;\r\nheight: 200px;\r\nmargin-top: 5px;\r\npadding: 9px 10px;\r\nwidth: 100%;\r\ncolor: #8492af;\r\n}\r\n\r\n.modal-header.login-header h4 {\r\ncolor: #ffffff;\r\n}\r\n\r\n.modal-footer .add-project {\r\nbackground: #5584ff none repeat scroll 0 0;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 30px;\r\nposition: relative;\r\n}\r\n\r\n.modal-footer .add-project::before{display: none;}\r\n\r\n.modal-footer {\r\nborder: 0 none;\r\npadding: 10px 15px 26px;\r\ntext-align: right;\r\n}\r\n\r\n.cancel {\r\nbackground: #0E1A35     ;\r\nborder: medium none;\r\nborder-radius: 100px;\r\ncolor: #ffffff;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\npadding: 10px 30px;\r\nposition: relative;\r\n\r\n}\r\n\r\n.modal{\r\ntop: 20%; \r\n}\r\n\r\n.modal-header .close {\r\nmargin-top: 2px;\r\n}\r\n\r\n.search input:focus{\r\nborder-bottom: 1px solid #BDC4D4;\r\nline-height:22px;\r\ntransition: 0.1s all;\r\n}\r\n\r\n.modal-header.login-header {\r\nborder-top-left-radius: 5px;\r\nborder-top-right-radius: 5px;\r\n}\r\n\r\n/*Main CSS*/\r\n\r\n@media only screen and (max-device-width: 767px) {\r\n.login-logo img {\r\n    margin: 0 auto;\r\n}\r\n.login-details .nav-tabs > li {\r\n    text-align: center;\r\n    width: 50%;\r\n}\r\n.login-signup .login-inner h1 {\r\n    font-size: 26px;\r\n    margin-bottom: 0;\r\n    margin-top: 10px;\r\n}\r\n.login-inner .login-form input {\r\n    font-size: 15px;\r\n    max-width: 100%;\r\n    padding: 15px 45px;\r\n}\r\n.login-inner .form-details {\r\n    padding: 25px;\r\n}\r\n.login-inner .login-form label {\r\n    margin-bottom: 20px;\r\n    width: 100%;\r\n}\r\n.login-inner .form-btn {\r\n    margin: 0;\r\n    max-width: 180px;\r\n}\r\n.tab-content .tab-pane {\r\n    padding: 20px 0;\r\n}\r\n#navigation .navi a {\r\n    font-size: 14px;\r\n    padding: 20px;\r\n    text-align: center;\r\n}\r\n#navigation .navi i {\r\n    margin-right: 0px;\r\n}\r\n#navigation .navi a:hover,\r\n#navigation .navi .active a {\r\n    background: #122143 none repeat scroll 0 0;\r\n    border-left: none;\r\n    display: block;\r\n    padding-left: 20px;\r\n}\r\nheader .header-top img {\r\n    max-width: 38px !important;\r\n}\r\n.v-align header {\r\n    padding: 12px 15px;\r\n}\r\nheader .header-top li {\r\n    padding-left: 13px;\r\n    padding-right: 6px;\r\n}\r\n.navbar-default .navbar-toggle {\r\n    border-color: rgba(0, 0, 0, 0);\r\n}\r\n.navbar-header .navbar-toggle {\r\n    float: left;\r\n    margin: 0;\r\n    padding: 0;\r\n    top: 12px;\r\n}\r\nbutton,\r\n    html [type=\"button\"],\r\n    [type=\"reset\"],\r\n    [type=\"submit\"] {\r\n        outline: medium none;\r\n}\r\n.user-dashboard .sales h2 {\r\n    color: #8492af;\r\n    float: left;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    margin: 0;\r\n    padding: 13px 0 0;\r\n}\r\n.user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\n    font-size: 11px;\r\n}\r\n.user-dashboard .sales button {\r\n    font-size: 11px;\r\n    padding-right: 23px;\r\n}  \r\n.user-dashboard .sales h2 {\r\nfont-size: 12px;\r\n}\r\n.gutter{\r\npadding: 0;\r\n}\r\n}\r\n\r\n@media only screen and (max-device-width: 992px) {\r\nheader .header-top li {\r\n    padding-left: 20px !important;\r\n    padding-right: 0;\r\n}\r\nheader .logo img {\r\n    max-width: 125px !important;\r\n}\r\n\r\n}\r\n\r\n@media only screen and (min-device-width: 767px) and (max-device-width: 998px){\r\n  .user-dashboard .header-top {\r\n    padding-top: 5px;\r\n}\r\n.user-dashboard .header-rightside {\r\n    display: inline-block;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.user-dashboard .header-rightside .header-top img {\r\n    max-width: 41px !important;\r\n} \r\n.user-dashboard .sales button {\r\nfont-size: 10px;\r\n}\r\n.user-dashboard .btn.btn-secondary.btn-lg.dropdown-toggle > span {\r\nfont-size: 12px;\r\n}\r\n.user-dashboard .sales h2 {\r\nfont-size: 15px;\r\n}\r\n}\r\n\r\n@media only screen and (min-device-width:998px) and (max-device-width: 1350px){\r\n    #navigation .logo img {\r\nmax-width: 130px;\r\npadding: 16px 0 17px;\r\nwidth: 100%;\r\n}\r\n}"

/***/ }),

/***/ "./src/app/components/settings/settings.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/settings/settings.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<meta name=\"viewport\" content=\"width=device-width, user-scalable=no\"> \n\n\n<div  class=\"dashboard\">\n<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css\" rel=\"stylesheet\" integrity=\"sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1\" crossorigin=\"anonymous\">\n    <div class=\"container-fluid display-table\">\n        <div class=\"row display-table-row\">\n            <div class=\"col-md-2 col-sm-1 hidden-xs display-table-cell v-align box\" id=\"navigation\">\n                <div class=\"logo\">\n                    <a hef=\"home.html\"><img src=\"http://automablu.com.br/wp-content/uploads/2018/03/LOGOCOLORIDA.png\" alt=\"merkery_logo\" class=\"hidden-xs hidden-sm\">\n                        <img src=\"http://jskrishna.com/work/merkury/images/circle-logo.png\" alt=\"merkery_logo\" class=\"visible-xs visible-sm circle-logo\">\n                    </a>\n                </div>\n                <div class=\"navi\">\n                    <ul>\n                        <li><a routerLink=\"/home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Home</span></a></li>\n                        <li><a routerLink=\"/search-client\"> <i class=\"fa fa-tasks\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\"> Iniciar Venda </span></a></li>\n                        <li><a routerLink=\"/clients\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Clientes </span></a></li>\n                        <li><a routerLink=\"/products\"><i class=\"fa fa-list-ol\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Produtos </span></a></li>\n                        <li><a routerLink=\"/employees\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Funcionários </span></a></li>\n                        <li><a routerLink=\"/home\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\">Estatísticas</span></a></li>\n                        <li class=\"active\"><a routerLink=\"/settings\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i><span class=\"hidden-xs hidden-sm\" > Configurações</span></a></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-md-10 col-sm-11 display-table-cell v-align\">\n                <div class=\"row\">\n                    <header>\n                        <div class=\"col-md-7\">\n                            <nav class=\"navbar-default pull-left\">\n                                <div class=\"navbar-header\">\n                                    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"offcanvas\" data-target=\"#side-menu\" aria-expanded=\"false\">\n                                        <span class=\"sr-only\">Toggle navigation</span>\n                                        <span class=\"icon-bar\"></span>\n                                        <span class=\"icon-bar\"></span>\n                                        <span class=\"icon-bar\"></span>\n                                    </button>\n                                </div>\n                            </nav>\n                            <div class=\"search hidden-xs hidden-sm\">\n                                <input type=\"text\" placeholder=\"Busca\" id=\"search\">\n                            </div>\n                        </div>\n                        <div class=\"col-md-5\">\n                            <div class=\"header-rightside\">\n                                <ul class=\"list-inline header-top pull-right\">\n                                    <li><a href=\"#\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a></li>\n                                    <li>\n                                        <a href=\"#\" class=\"icon-info\">\n                                            <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\n                                            <span class=\"label label-primary\">3</span>\n                                        </a>\n                                    </li>\n                                    <li class=\"dropdown\">\n                                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">User\n                                            <b class=\"caret\"></b></a>\n                                        <ul class=\"dropdown-menu\">\n                                            <li>\n                                                <div class=\"navbar-content\">\n                                                    <span>Ivan </span>\n                                                    <p class=\"text-muted small\">\n                                                        ivanalves94@gmail.com\n                                                    </p>\n                                                    <div class=\"divider\">\n                                                    </div>\n                                                    <a href=\"#\" class=\"view btn-sm active\">View Profile</a>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </header>\n                </div>\n\n                <div class=\"user-dashboard\">\n                        <h1>Settings</h1>\n                </div>\n            </div>\n    </div>\n\n\n\n    <div id=\"add_project\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n\n            <div class=\"modal-content\">\n                \n                <div class=\"modal-body\">\n                       \n                            <input type=\"text\" placeholder=\"Project Title\" name=\"name\">\n                            <input type=\"text\" placeholder=\"Post of Post\" name=\"mail\">\n                            <input type=\"text\" placeholder=\"Author\" name=\"passsword\">\n                            <textarea placeholder=\"Desicrption\"></textarea>\n                    </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"cancel\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"button\" class=\"add-project\" data-dismiss=\"modal\">Save</button>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/settings/settings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
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

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/components/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/components/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/data/cart.data.ts":
/*!***********************************!*\
  !*** ./src/app/data/cart.data.ts ***!
  \***********************************/
/*! exports provided: cart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cart", function() { return cart; });
/* harmony import */ var _models_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/cart */ "./src/app/models/cart.ts");

// carrinho de compras
var cart = new _models_cart__WEBPACK_IMPORTED_MODULE_0__["Cart"]([], 0);


/***/ }),

/***/ "./src/app/data/clients.data.ts":
/*!**************************************!*\
  !*** ./src/app/data/clients.data.ts ***!
  \**************************************/
/*! exports provided: clients */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clients", function() { return clients; });
/* harmony import */ var _models_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/client */ "./src/app/models/client.ts");

// clientes de teste
var clients = [
    new _models_client__WEBPACK_IMPORTED_MODULE_0__["Client"](1, 'José João', '995536546', '99999999999', 'Rua 1, numero 10, bairro: 010')
];


/***/ }),

/***/ "./src/app/data/employees.data.ts":
/*!****************************************!*\
  !*** ./src/app/data/employees.data.ts ***!
  \****************************************/
/*! exports provided: employees */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "employees", function() { return employees; });
/* harmony import */ var _models_employee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/employee */ "./src/app/models/employee.ts");

var employees = [
    new _models_employee__WEBPACK_IMPORTED_MODULE_0__["Employee"](1, 'Funcionário 01', 'funcionario1@gmail.com', '123')
];


/***/ }),

/***/ "./src/app/data/products.data.ts":
/*!***************************************!*\
  !*** ./src/app/data/products.data.ts ***!
  \***************************************/
/*! exports provided: products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "products", function() { return products; });
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/product */ "./src/app/models/product.ts");

// produtos de teste
var products = [
    new _models_product__WEBPACK_IMPORTED_MODULE_0__["Product"](1, 'Arroz Urbano ', 'Arroz Urbano - TIPO 1 - 1KG', 3.40),
    new _models_product__WEBPACK_IMPORTED_MODULE_0__["Product"](2, 'Feijão Urbano', 'Feijão Urbano - tipo 1 - 1kg', 4.50),
    new _models_product__WEBPACK_IMPORTED_MODULE_0__["Product"](3, 'Leite Maranguape', 'Leite Maranguape - tipo 1 - 1000 ml', 3.00),
    new _models_product__WEBPACK_IMPORTED_MODULE_0__["Product"](4, 'Arroz Integral Urbano ', 'Arroz Urbano - Integral - 1KG', 5.40),
    new _models_product__WEBPACK_IMPORTED_MODULE_0__["Product"](5, 'Farinha ', 'Farinha - 1KG', 3.00),
];


/***/ }),

/***/ "./src/app/data/settings.data.ts":
/*!***************************************!*\
  !*** ./src/app/data/settings.data.ts ***!
  \***************************************/
/*! exports provided: settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
var settings = [{
        "ip": "192.168.0.115",
        "port": "8080"
    }];


/***/ }),

/***/ "./src/app/models/cart-item.ts":
/*!*************************************!*\
  !*** ./src/app/models/cart-item.ts ***!
  \*************************************/
/*! exports provided: CartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItem", function() { return CartItem; });
var CartItem = /** @class */ (function () {
    function CartItem(product, quantity, total) {
        this.product = product;
        this.quantity = quantity;
        this.total = total;
    }
    return CartItem;
}());



/***/ }),

/***/ "./src/app/models/cart.ts":
/*!********************************!*\
  !*** ./src/app/models/cart.ts ***!
  \********************************/
/*! exports provided: Cart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
var Cart = /** @class */ (function () {
    //status: Status;
    function Cart(cartItem, total) {
        this.cartItem = cartItem;
        this.total = total;
    }
    return Cart;
}());



/***/ }),

/***/ "./src/app/models/client.ts":
/*!**********************************!*\
  !*** ./src/app/models/client.ts ***!
  \**********************************/
/*! exports provided: Client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
var Client = /** @class */ (function () {
    function Client(id, name, telephone, cpf, address) {
        this.id = id;
        this.name = name;
        this.telephone = telephone;
        this.cpf = cpf;
        this.address = address;
    }
    return Client;
}());



/***/ }),

/***/ "./src/app/models/device.ts":
/*!**********************************!*\
  !*** ./src/app/models/device.ts ***!
  \**********************************/
/*! exports provided: Device */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Device", function() { return Device; });
var Device = /** @class */ (function () {
    function Device(id, ip, port, name, mac) {
        this.id = id;
        this.ip = ip;
        this.port = port;
        this.name = name;
        this.mac = mac;
    }
    return Device;
}());



/***/ }),

/***/ "./src/app/models/employee.ts":
/*!************************************!*\
  !*** ./src/app/models/employee.ts ***!
  \************************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
var Employee = /** @class */ (function () {
    function Employee(id, name, email, cpf) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.cpf = cpf;
    }
    return Employee;
}());



/***/ }),

/***/ "./src/app/models/product.ts":
/*!***********************************!*\
  !*** ./src/app/models/product.ts ***!
  \***********************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product(id, name, description, price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/multipopup/multipopup.component.css":
/*!*****************************************************!*\
  !*** ./src/app/multipopup/multipopup.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/multipopup/multipopup.component.html":
/*!******************************************************!*\
  !*** ./src/app/multipopup/multipopup.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<popup #popup1>\r\n  Add your custom html elements here\r\n  <br>\r\n</popup>\r\n\r\n<popup #popup2>\r\n  Add your custom html elements here\r\n  <br>\r\n</popup>\r\n\r\n<popup #popup3>\r\n  <p>You can change your animations by setting this.popup.option</p>\r\n\r\n  <div>\r\n    'fadeInLeft'\r\n    'fadeInRight',\r\n    'fadeInUp',\r\n    'bounceIn',\r\n    'bounceInDown'\r\n  </div>\r\n  <br>\r\n</popup>\r\n\r\n<popup #popup4 (confirmClick)=\"YourConfirmEvent()\">\r\n  You can subscribe to the confirm and cancel button event, or you can hide the buttons and add your own.\r\n  <br>\r\n  <br>\r\n  <p>(confirmClick)=\"YourConfirmEvent()\" </p>\r\n  <p>(cancelClick)=\"YourCancelEvent()\" </p>\r\n\r\n  <br>\r\n</popup>\r\n\r\n<popup #popup5 (confirmClick)=\"login()\">\r\n\r\n  <form class=\"form-horizontal\">\r\n    <div class=\"form-group\">\r\n      <label for=\"inputEmai3\" class=\"col-sm-3 control-label\">Email</label>\r\n      <div class=\"col-sm-7\">\r\n        <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"email\" id=\"email\" placeholder=\"email\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"inputEmai3\" class=\"col-sm-3 control-label\">Password</label>\r\n      <div class=\"col-sm-7\">\r\n        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\" id=\"password\" placeholder=\"password\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <div class=\"form-group text-right\">\r\n        <div class=\"col-sm-offset-3 col-sm-7\">\r\n          <div class=\"checkbox\">\r\n            <label>\r\n              <input type=\"checkbox\" id=\"RequireLogin\" name=\"RequireLogin\"> Remember Me\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</popup>\r\n<br><br>\r\n<div class=\"text-center\">\r\n  <p style=\"font-size: 28px;font-weight: bold;color:#4180ab;\">ng2-opd-popup</p>\r\n  <p style=\"margin-top: -12px;color:#333\">Popup component for Angular 2 with support for aot</p>\r\n  <br>\r\n  <div class=\"row\">\r\n    <span style=\"color: #888;font-size: 12px;\">Test the Popups here...</span><br>\r\n    <button class=\"btn btn-mbe-normal sp\" (click)=\"showPopup1()\">Simple popup</button>\r\n    <button class=\"btn btn-mbe-normal sp\" (click)=\"showPopup2()\">Size & Color</button>\r\n    <button class=\"btn btn-mbe-normal sp\" (click)=\"showPopup3()\">Animations</button>\r\n    <button class=\"btn btn-mbe-normal sp\" (click)=\"showPopup4()\">Events</button>\r\n    <button class=\"btn btn-mbe-normal sp\" (click)=\"showPopup5()\">Forms sample</button>\r\n  </div>\r\n  <br><br><br>\r\n\r\n  <p>You can get the component and instructions <a href=\"https://www.npmjs.com/package/ng2-opd-popup\" target=\"_blank\" style=\"color: #4180ab;font-weight: bold;\">HERE</a> </p>\r\n\r\n  <br>\r\n  <br>\r\n  <div class=\"wrapper\">\r\n    <ul class=\"social-icons icon-flat list-unstyled list-inline\">\r\n      <li> <a href=\"https://www.facebook.com/opdahlmann\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a></li>\r\n      <li> <a href=\"https://github.com/opdahlmann\" target=\"_blank\"><i class=\"fa fa-github\"></i></a></li>\r\n      <li> <a href=\"https://twitter.com/opdahlmann\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a></li>\r\n      <li> <a href=\"https://www.youtube.com/channel/UC_50wEWI-0xFLfAcbuA7Dzw\" target=\"_blank\"><i class=\"fa fa-youtube\"></i></a></li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<script>\r\n  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\r\n    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\r\n    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\r\n  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\r\n  ga('create', 'UA-90231581-1', 'auto');\r\n  ga('send', 'pageview');\r\n</script>\r\n"

/***/ }),

/***/ "./src/app/multipopup/multipopup.component.ts":
/*!****************************************************!*\
  !*** ./src/app/multipopup/multipopup.component.ts ***!
  \****************************************************/
/*! exports provided: MultipopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipopupComponent", function() { return MultipopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_opd_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-opd-popup */ "./node_modules/ng2-opd-popup/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MultipopupComponent = /** @class */ (function () {
    function MultipopupComponent() {
    }
    MultipopupComponent.prototype.ngOnInit = function () {
    };
    MultipopupComponent.prototype.showPopup1 = function () {
        this.popup1.options = {
            cancleBtnClass: 'btn btn-default',
            confirmBtnClass: 'btn btn-default',
            color: '#4180ab',
            header: 'Single Popup on a page'
        };
        this.popup1.show(this.popup1.options);
    };
    MultipopupComponent.prototype.showPopup2 = function () {
        this.popup2.options = {
            cancleBtnClass: 'btn btn-default',
            confirmBtnClass: 'btn btn-default',
            color: '#5cb85c',
            header: 'Size 60% of page - color = #5cb85c',
            widthProsentage: 60,
            animation: 'fadeInUp'
        };
        this.popup2.show(this.popup2.options);
    };
    MultipopupComponent.prototype.showPopup3 = function () {
        this.popup3.options = {
            cancleBtnClass: 'btn btn-default',
            confirmBtnClass: 'btn btn-default',
            color: '#333',
            header: 'Animations...',
            widthProsentage: 60,
            animation: 'bounceIn'
        };
        this.popup3.show(this.popup3.options);
    };
    MultipopupComponent.prototype.showPopup4 = function () {
        this.popup4.options = {
            cancleBtnClass: 'btn btn-default',
            confirmBtnClass: 'btn btn-default',
            color: '#5cb85c',
            header: 'Events...',
            widthProsentage: 50,
            animation: 'bounceInDown'
        };
        this.popup4.show(this.popup4.options);
    };
    MultipopupComponent.prototype.showPopup5 = function () {
        this.popup5.options = {
            cancleBtnClass: 'btn btn-default',
            confirmBtnClass: 'btn btn-mbe-attack',
            color: '#A0DE4F',
            header: 'Login...',
            widthProsentage: 50,
            animation: 'bounceInDown',
            confirmBtnContent: 'Login'
        };
        this.popup5.show(this.popup5.options);
    };
    MultipopupComponent.prototype.YourConfirmEvent = function () {
        alert('You cliked confirm');
        this.popup4.hide();
    };
    MultipopupComponent.prototype.login = function () {
        alert('Email: ' + this.email + '  Password: ' + this.password);
        this.popup5.hide();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('popup1'),
        __metadata("design:type", ng2_opd_popup__WEBPACK_IMPORTED_MODULE_1__["Popup"])
    ], MultipopupComponent.prototype, "popup1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('popup2'),
        __metadata("design:type", ng2_opd_popup__WEBPACK_IMPORTED_MODULE_1__["Popup"])
    ], MultipopupComponent.prototype, "popup2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('popup3'),
        __metadata("design:type", ng2_opd_popup__WEBPACK_IMPORTED_MODULE_1__["Popup"])
    ], MultipopupComponent.prototype, "popup3", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('popup4'),
        __metadata("design:type", ng2_opd_popup__WEBPACK_IMPORTED_MODULE_1__["Popup"])
    ], MultipopupComponent.prototype, "popup4", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('popup5'),
        __metadata("design:type", ng2_opd_popup__WEBPACK_IMPORTED_MODULE_1__["Popup"])
    ], MultipopupComponent.prototype, "popup5", void 0);
    MultipopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multipopup',
            template: __webpack_require__(/*! ./multipopup.component.html */ "./src/app/multipopup/multipopup.component.html"),
            styles: [__webpack_require__(/*! ./multipopup.component.css */ "./src/app/multipopup/multipopup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MultipopupComponent);
    return MultipopupComponent;
}());



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_cart_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/cart.data */ "./src/app/data/cart.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartService = /** @class */ (function () {
    function CartService() {
        this.cart = _data_cart_data__WEBPACK_IMPORTED_MODULE_1__["cart"];
    }
    CartService.prototype.getCart = function () {
        return this.cart;
    };
    CartService.prototype.addCartItem = function (cartItem) {
        var oldCartItem = this.existsProduct(cartItem.product);
        if (!oldCartItem) {
            this.cart.cartItem.push(cartItem);
        }
        else {
            oldCartItem.quantity += cartItem.quantity;
            oldCartItem.total += cartItem.total;
        }
        this.updateCartTotal();
    };
    CartService.prototype.removeCartItem = function (cartItem) {
        this.cart.cartItem = this.cart.cartItem.filter(function (oldCartItem) { return oldCartItem !== cartItem; });
        this.updateCartTotal();
    };
    CartService.prototype.existsProduct = function (product) {
        return this.cart.cartItem.filter(function (cartItem) { return cartItem.product === product; }).pop();
    };
    CartService.prototype.updateCartTotal = function () {
        var total = 0;
        this.cart.cartItem.forEach(function (item) { return total += item.total; });
        this.cart.total = total;
    };
    CartService.prototype.cleanCart = function () {
        this.cart.total = 0;
        this.cart.cartItem = [];
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/services/client.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/client.service.ts ***!
  \********************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_clients_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/clients.data */ "./src/app/data/clients.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientService = /** @class */ (function () {
    function ClientService() {
        this.clients = _data_clients_data__WEBPACK_IMPORTED_MODULE_1__["clients"];
    }
    ClientService.prototype.getClients = function () {
        return this.clients;
    };
    ClientService.prototype.getClientById = function (id) {
        return this.clients.filter(function (client) { return client.id === id; }).pop();
    };
    ClientService.prototype.getClientByCpf = function (cpf) {
        return this.clients.filter(function (client) { return client.cpf === cpf; }).pop();
    };
    ClientService.prototype.updateClient = function (client) {
        var noUpdateClient = this.clients.filter(function (oldClient) { return oldClient.id === client.id; }).pop();
        noUpdateClient.name = client.name;
        noUpdateClient.telephone = client.telephone;
        noUpdateClient.cpf = client.cpf;
        noUpdateClient.address = client.address;
    };
    ClientService.prototype.saveClient = function (client) {
        var id = this.clients.slice().pop().id;
        client.id = ++id;
        this.clients.push(client);
    };
    ClientService.prototype.removeClient = function (client) {
        this.clients = this.clients.filter(function (oldClient) { return oldClient !== client; });
    };
    ClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/services/communication.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/communication.service.ts ***!
  \***************************************************/
/*! exports provided: CommunicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationService", function() { return CommunicationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _data_settings_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/settings.data */ "./src/app/data/settings.data.ts");
/* harmony import */ var _services_devices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/devices.service */ "./src/app/services/devices.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommunicationService = /** @class */ (function () {
    function CommunicationService(http, devicesService) {
        this.http = http;
        this.devicesService = devicesService;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
        this.numeroSessaoList = [];
        this.devicesService = new _services_devices_service__WEBPACK_IMPORTED_MODULE_3__["DevicesService"]();
    }
    CommunicationService.prototype.montarUrl = function (settings) {
        for (var i = 0; i < settings.length; i++) {
            var ip = new String(settings[i].ip);
            var porta = new String(settings[i].port);
            var serverUrl = new String('http://' + ip + ':' + porta + '/');
            return serverUrl;
        }
    };
    CommunicationService.prototype.descobertaDispositivo = function () {
        return this.http.get(this.montarUrl(_data_settings_data__WEBPACK_IMPORTED_MODULE_2__["settings"]) + 'mp4200/descobrir');
    };
    CommunicationService.prototype.imprimir = function (texto) {
        this.devicesService.getDeviceStorage();
        var mac = localStorage.getItem('mac');
        var body = JSON.stringify({ texto: texto, mac: mac });
        return this.http.post(this.montarUrl(_data_settings_data__WEBPACK_IMPORTED_MODULE_2__["settings"]) + 'mp4200/imprimir', body, this.options).subscribe(function (res) { return console.log(res); });
    };
    CommunicationService.prototype.esperaImpressao = function (texto, tempo) {
        var _this = this;
        setTimeout(function () {
            _this.imprimir(texto);
        }, 4000 * tempo);
    };
    CommunicationService.prototype.finalizarCompra = function (cart) {
        var _this = this;
        this.enviarDadosVenda();
        cart.cartItem.forEach(function (cartItem, index) {
            console.log(index);
            _this.esperaImpressao(cartItem.product.name + ' -  R$ ' + cartItem.product.price.toString() + ' - ' + cartItem.quantity.toString() + ' itens - subtotal :  R$ ' + cartItem.total.toString(), index);
        });
        this.esperaImpressao('Total da Venda:' + cart.total.toString(), cart.cartItem.length);
    };
    /**
     * Dados da venda que serão enviados para o SAT no momento da finalização da venda
     * Equivale ao campo dadosVenda no XML que é enviado no enviarDadosVenda     *
     */
    //Deve retornar uma string com o xml dos dados da venda
    CommunicationService.prototype.gerarDadosCompra = function (cart) {
        var totalCompra = cart.total;
        cart.cartItem.forEach(function (cartItem, index) {
            var qCom = cartItem.quantity;
            var vUnCom = cartItem.product.price;
            var cProd = cartItem.product.id;
            var xProd = cartItem.product.description;
            console.log("quatidade: " + qCom);
        });
        /* let xml = this.xml.create('CFe')
         .ele('prod')
           .ele('cProd', {'xProd': 'git'}, 'git://github.com/oozcitak/xmlbuilder-js.git')
         .end({ pretty: true});
       
          console.log(xml);*/
        console.log("total compra: " + totalCompra);
    };
    /**
    * Exporta a função de EnviarDadosVenda do SAT
    *
    * numSessao - Inteiro, com 6 dígitos, contendo o número aleatório gerado pelo AC para controle da comunicação.
    * codAtivacao - String com no mínimo 8 e no máximo 32 caracteres, contendo a senha definida pelo contribuinte no software de ativação.
    * dados - String de tamanho livre porém não nulo, contendo os dados de venda gerados pelo aplicativo comercial e utilizados para compor o CF-e-SAT.
    */
    CommunicationService.prototype.enviarDadosVenda = function () {
        this.gerarNumeroSessao();
        var body = JSON.stringify({ "numeroSessao": 787879, "codigoDeAtivacao": "bilbao123", "dadosVenda": "xml de venda" });
        return this.http.post(this.montarUrl(_data_settings_data__WEBPACK_IMPORTED_MODULE_2__["settings"]) + 'sat/dadosvenda', body, this.options).subscribe(function (res) { return console.log(res); });
    };
    /**
   * Exporta a função de CancelarUltimaVenda do SAT
   *
   * numSessao - Inteiro, com 6 dígitos, contendo o número aleatório gerado pelo AC para controle da comunicação.
   * codAtivacao - String com no mínimo 8 e no máximo 32 caracteres, contendo a senha definida pelo contribuinte no software de ativação.
   * chave - String com 47 caracteres, contendo a chave de acesso do CF-e-SAT a ser cancelado.
   * dados - String de tamanho livre porém não nulo, contendo os dados da venda gerados pelo aplicativo comercial e utilizados para compor o CF-e-SAT de cancelamento.
   */
    CommunicationService.prototype.cancelarUltimaVenda = function () {
        this.gerarNumeroSessao();
        var body = JSON.stringify({ "numeroSessao": 999999, "codigoDeAtivacao": "bilbao123", "chave": "chave", "dadosCancelamento": "xml de cancelamento" });
        return this.http.post(this.montarUrl(_data_settings_data__WEBPACK_IMPORTED_MODULE_2__["settings"]) + 'sat/cancelarultimavenda', body, this.options).subscribe(function (res) { return console.log(res); });
    };
    /**
     * Guardar apenas os últimos 100 números gerados
     * Verificar se existe algum número repetido, em caso afirmativo, gerar outro número
     */
    CommunicationService.prototype.gerarNumeroSessao = function () {
        var _this = this;
        if (this.numeroSessaoList != null) {
            if (this.numeroSessaoList.length <= 100) {
                this.numeroSessao = Math.floor(Math.random() * 999999) + 1;
                if (this.numeroSessaoList.filter(function (numeroSessao) { return numeroSessao === _this.numeroSessao; })[0] == null) {
                    this.numeroSessaoList.push(this.numeroSessao);
                    localStorage.setItem('numeroSessaoList', JSON.stringify(this.numeroSessaoList));
                }
                else {
                    this.numeroSessao = Math.floor(Math.random() * 999999) + 1;
                    this.numeroSessaoList.push(this.numeroSessao);
                    localStorage.setItem('numeroSessaoList', JSON.stringify(this.numeroSessaoList));
                }
            }
            else {
                this.numeroSessaoList = [];
                this.numeroSessao = Math.floor(Math.random() * 999999) + 1;
                this.numeroSessaoList.push(this.numeroSessao);
                localStorage.setItem('numeroSessaoList', JSON.stringify(this.numeroSessaoList));
            }
        }
        else {
            this.numeroSessaoList = [];
            this.numeroSessao = Math.floor(Math.random() * 999999) + 1;
            this.numeroSessaoList.push(this.numeroSessao);
            localStorage.setItem('numeroSessaoList', JSON.stringify(this.numeroSessaoList));
        }
        var lista = JSON.parse(localStorage.getItem('numeroSessaoList'));
        console.log(lista);
        console.log(this.numeroSessaoList);
        console.log(this.numeroSessao);
        return this.numeroSessao;
    };
    CommunicationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _services_devices_service__WEBPACK_IMPORTED_MODULE_3__["DevicesService"]])
    ], CommunicationService);
    return CommunicationService;
}());



/***/ }),

/***/ "./src/app/services/devices.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/devices.service.ts ***!
  \*********************************************/
/*! exports provided: DevicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesService", function() { return DevicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_device__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/device */ "./src/app/models/device.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DevicesService = /** @class */ (function () {
    function DevicesService() {
        this.devices = new Array();
    }
    DevicesService.prototype.setDevice = function (device) {
        this.device = new _models_device__WEBPACK_IMPORTED_MODULE_1__["Device"](device.id, device.ip, '8080', device.name, device.mac);
        console.log(this.device);
        return this.device;
    };
    DevicesService.prototype.getDevice = function () {
        return this.device;
    };
    DevicesService.prototype.getDevices = function () {
        return this.devices;
    };
    DevicesService.prototype.getDeviceById = function (id) {
        return this.devices.filter(function (device) { return device.id === id; }).pop();
    };
    DevicesService.prototype.getDeviceByIP = function (ip) {
        return this.devices.filter(function (device) { return device.ip === ip; }).pop();
    };
    DevicesService.prototype.storeDevice = function (device) {
        localStorage.setItem('id', device.id);
        localStorage.setItem('ip', device.ip);
        localStorage.setItem('port', device.port);
        localStorage.setItem('name', device.name);
        localStorage.setItem('mac', device.mac);
        this.device = new _models_device__WEBPACK_IMPORTED_MODULE_1__["Device"](device.id, device.ip, '8080', device.name, device.mac);
        console.log(this.device);
        return this.device;
    };
    DevicesService.prototype.getDeviceStorage = function () {
        this.device = new _models_device__WEBPACK_IMPORTED_MODULE_1__["Device"](localStorage.getItem('id'), localStorage.getItem('ip'), localStorage.getItem('port'), localStorage.getItem('name'), localStorage.getItem('mac'));
        console.log(this.device);
    };
    DevicesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DevicesService);
    return DevicesService;
}());



/***/ }),

/***/ "./src/app/services/employee.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/employee.service.ts ***!
  \**********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_employees_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/employees.data */ "./src/app/data/employees.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeService = /** @class */ (function () {
    function EmployeeService() {
        this.employees = _data_employees_data__WEBPACK_IMPORTED_MODULE_1__["employees"];
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.employees;
    };
    EmployeeService.prototype.getEmployeeById = function (id) {
        return this.employees.filter(function (employee) { return employee.id === id; }).pop();
    };
    /*
    getClientByCpf(cpf: string): Employee {
      return this.clients.filter(client => client.cpf === cpf).pop();
    }*/
    EmployeeService.prototype.updateEmployee = function (employee) {
        var noUpdateEmployee = this.employees.filter(function (oldEmployee) { return oldEmployee !== employee; }).pop();
        noUpdateEmployee.name = employee.name;
        noUpdateEmployee.email = employee.email;
        noUpdateEmployee.cpf = employee.cpf;
    };
    EmployeeService.prototype.saveEmployee = function (employee) {
        var id = this.employees.slice().pop().id;
        employee.id = ++id;
        this.employees.push(employee);
    };
    EmployeeService.prototype.removeEmployee = function (employee) {
        this.employees = this.employees.filter(function (oldEmployee) { return oldEmployee !== employee; });
    };
    EmployeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_products_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/products.data */ "./src/app/data/products.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = /** @class */ (function () {
    function ProductService() {
        this.products = _data_products_data__WEBPACK_IMPORTED_MODULE_1__["products"];
    }
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService.prototype.getProductById = function (id) {
        return this.products.filter(function (product) { return product.id === id; }).pop();
    };
    ProductService.prototype.saveProduct = function (product) {
        var id = this.products.slice().pop().id;
        product.id = ++id;
        this.products.push(product);
    };
    ProductService.prototype.updateProduct = function (product) {
        var noUpdateProduct = this.products.filter(function (oldProduct) { return oldProduct.id === product.id; }).pop();
        noUpdateProduct.name = product.name;
        noUpdateProduct.description = product.description;
        noUpdateProduct.price = product.price;
    };
    ProductService.prototype.removeProduct = function (product) {
        this.products = this.products.filter(function (oldProduct) { return oldProduct !== product; });
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/search.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
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

var SearchService = /** @class */ (function () {
    function SearchService() {
    }
    SearchService.prototype.setCPF = function (cpf) {
        this.searchCPF = cpf;
    };
    SearchService.prototype.getCPF = function () {
        return this.searchCPF;
    };
    SearchService.prototype.setCPF_NCadastrado = function (cpf) {
        this.cpf_semCadastro = cpf;
    };
    SearchService.prototype.getCPF_NCadastrado = function () {
        return this.cpf_semCadastro;
    };
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SearchService);
    return SearchService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ivan Alves\Documents\pdv 1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map