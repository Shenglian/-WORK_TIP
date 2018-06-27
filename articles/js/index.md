[TOC]

# JavaScript 引擎基础：Shapes 和 Inline Caches

[JavaScript 引擎基础：Shapes 和 Inline Caches](https://hijiangtao.github.io/2018/06/17/Shapes-ICs/)

> 心得：會有剛好這麼多相同的 shapes 嗎 :<



# 前端跨域請求解決方案匯總

[前端跨域請求解決方案匯總](https://hijiangtao.github.io/2017/06/13/Cross-Origin-Resource-Sharing-Solutions/)

> 心得：

1. document.name

2. location.hash

3. window.name

4. window.postMessage

5. jsonp

6. webSocket

   > WebSocket 協議不實行同源政策，只要服務器支持，就可以通過它進行跨源通信。

7. CORS

   > CORS是一個W3C標準，全稱是”跨域資源共享”（Cross-origin resource sharing）。它允許瀏覽器向跨源服務器，發出XMLHttpRequest請求，從而克服了AJAX只能同源使用的限制。

   1. 簡單請求

      - 只使用 `GET` `HEAD` `POST` 
      - 除CORS安全的首部字段集合外 `Accept` `Accept-Language` `Content-Language` `Content-Type` `DPR` `Downlink` `Save-Data` `Viewport-Width` `Width`
      - Content-type: `application/x-www-form-urlencoded`||`multpart/from-data`||`text/plain`
      - Server response `Access-Control-Allow-Origin: *`

   2. 預檢請求 ( 必須首先使用OPTIONS方法發起一個預檢請求到服務器 )：

      - 使用了`PUT` `DELETE` `CONNECT` `OPTIONS` `TRACE` `PATCH` 中任一的HTTP 方法
      - 人為設置了對CORS 安全的首部字段集合之外的其他首部字段
      - Exclude Content-type: `application/x-www-form-urlencoded`||`multpart/from-data`||`text/plain`

   3. 附帶身份憑證的請求（跨域請求時向服務器發送憑證請求, ex: Cookies (withCredentials標誌設置為true）：

      - 對於附帶身份憑證的請求，服務器不得設置Access-Control-Allow-Origin 的值為“*”。

        這是因為請求的首部中攜帶了Cookie 信息，如果Access-Control-Allow-Origin 的值為“*”，請求將會失敗。而將Access-Control-Allow-Origin 的值設置為 http://foo.example，則請求將成功執行。

        另外，響應首部中也攜帶了Set-Cookie 字段，嘗試對Cookie 進行修改。如果操作失敗，將會拋出異常。