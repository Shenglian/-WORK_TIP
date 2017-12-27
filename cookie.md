# Cookie

| Name | Value | Domain | Path | Expire/Max-Age | Size | HTTP | Secure | SameSite |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| cookie 的名稱 | cookie 的值 | 可以訪問此 cookie 的域名，通過 `setDomain()` 設置 | 可以訪問此 cookie 的頁面路徑。比如 domain 是 abc.com. path 是 /test，那麼只有 /test 路徑下的頁面可以讀取此 cookie. 通過 `setPath()` 設置, "/" 表示根路徑 | cookie超時時間。若設置其值為一個時間，那麼當到達此時間後，此 cookie 失效。不設置的話默認值是 Session，意思是 cookie 會和 session 一起失效。當瀏覽器關閉(不是瀏覽器標籤頁，而是整個瀏覽器)後，此 cookie 失效 | cookie 大小 | cookie 的 `http only` 屬性。若此屬性為 true，則只有在 http 請求頭中會帶有此 cookie 的信息，而不能通過 document.cookie 來訪問此 cookie | 是否只能通過 https 來傳遞此條 cookie |  |

> 跨域共享 cookie 的方法：
- 這個參數必須以“.”開始。

