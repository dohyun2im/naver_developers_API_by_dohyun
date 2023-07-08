## 김도현 ehehwhdwhd@naver.com
Yarn Berry 버전을 사용하여 패키지 설치가 필요 없습니다.

## Yarn 설치가 안되어 있는 경우.
```
npm i yarn -g
```


### root/.env
```
REACT_APP_ClientID=YourID
REACT_APP_Client_Secret=YourSecret
```

## 앱 시작
```
yarn start

```

## Select, DatePicker들은 바뀔때마다 새로 검색하고 카테고리와 키워드는 입력 후 돋보기 버튼을 누르거나 키워드 Input이 포커싱된 상태에서 Enter를 누른다.

## Redux - persist , atnd, ant-chart , emotion 적용


## CORS 이슈 해결 방법
yarn add http-proxy-middleware\
```
root/src/setupProxy.js

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://openapi.naver.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
```


