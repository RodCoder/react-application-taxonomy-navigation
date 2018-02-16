"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var AppCustomizer_module_scss_1 = require("../AppCustomizer.module.scss");
var react_tabs_1 = require("react-tabs");
var TenantMegaMenu = (function (_super) {
    __extends(TenantMegaMenu, _super);
    function TenantMegaMenu() {
        var _this = _super.call(this) || this;
        _this.state = {
            tabIndex: -1,
            panelHeight: {
                height: 0,
                opacity: 0.3
            }
        };
        return _this;
    }
    TenantMegaMenu.prototype._tabsListItemtMenuItem = function (menuItem) {
        var tab = null;
        tab = (menuItem.terms.length > 0) ? React.createElement(react_tabs_1.Tab, { className: AppCustomizer_module_scss_1.default.tab }, menuItem.name) :
            React.createElement("li", { className: AppCustomizer_module_scss_1.default.tab },
                React.createElement("a", { href: menuItem.localCustomProperties["_Sys_Nav_SimpleLinkUrl"] }, menuItem.name));
        return tab;
    };
    TenantMegaMenu.prototype._tabsPanelMenuItems = function (menuItem) {
        return (React.createElement(react_tabs_1.TabPanel, { className: AppCustomizer_module_scss_1.default.tabPanel, selectedClassName: AppCustomizer_module_scss_1.default.tabPanelSelected },
            React.createElement("ul", null, menuItem.terms.map(function (t) {
                return React.createElement("li", null, t.name);
            }))));
    };
    TenantMegaMenu.prototype._handleSelect = function (index, lastIndex) {
        if (index != lastIndex) {
            this.setState({
                tabIndex: index,
                panelHeight: {
                    height: 200,
                    opacity: 1
                }
            });
        }
        else {
            this.setState({
                tabIndex: -1,
                panelHeight: {
                    height: 0,
                    opacity: 0.3
                }
            });
        }
    };
    TenantMegaMenu.prototype.render = function () {
        var _this = this;
        var tabListItems = this.props.menuItems.map(function (i) {
            return (_this._tabsListItemtMenuItem(i));
        });
        var tabPanelItems = this.props.menuItems.map(function (i) {
            return ((i.terms.length > 0) ? _this._tabsPanelMenuItems(i) : null);
        });
        return (React.createElement(react_tabs_1.Tabs, { className: AppCustomizer_module_scss_1.default.reactTabs, selectedIndex: this.state.tabIndex, onSelect: function (index, lastIndex) { return _this._handleSelect(index, lastIndex); } },
            React.createElement(react_tabs_1.TabList, { className: AppCustomizer_module_scss_1.default.tabList }, tabListItems),
            React.createElement("div", { className: AppCustomizer_module_scss_1.default.tabPanelOuter, style: this.state.panelHeight }, tabPanelItems)));
    };
    return TenantMegaMenu;
}(React.Component));
exports.default = TenantMegaMenu;

//# sourceMappingURL=TenantMegaMenu.js.map
