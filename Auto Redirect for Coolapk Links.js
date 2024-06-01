// ==UserScript==
// @name         Auto Redirect for Coolapk Links
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically remove the prefix from Coolapk links and redirect to the target URL as fast as possible.
// @match        *://www.coolapk.com/link?url=*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // 获取当前页面的URL
    const currentUrl = window.location.href;

    // 检查URL是否符合条件
    const prefix = 'https://www.coolapk.com/link?url=';
    if (currentUrl.startsWith(prefix)) {
        // 获取实际的目标URL并解码
        const targetUrl = decodeURIComponent(currentUrl.substring(prefix.length));

        // 重定向到目标URL
        window.location.replace(targetUrl);
    }
})();