![예시 이미지](./public/example.png)
![모바일 예시 이미지](./public/example_mobile.png)


## 작성자: 김도현
<br/>

## Yarn 설치가 안되어 있는 경우
```
npm i yarn -g
```

## 의존성 설치
```
yarn
```

## typescript error 발생 시
```
Ctrl + Shift + P 누른 후
Select Typescript Version 클릭
Use Workspace Version 클릭
```

### root/.env => Naver developers API keys
```
REACT_APP_ClientID=YourID
REACT_APP_Client_Secret=YourSecret
```

## 앱 시작
```
yarn start

```

## 프로젝트 설명
- Select, DatePicker는 바뀔 때마다 새로 검색한다. <br/>
- 카테고리와 키워드는 입력 후 돋보기 버튼을 누르거나 Input이 포커싱된 상태에서 Enter를 누르면 새로 검색한다.<br/>
- 반응형으로 화면이 1260px보다 작아지면 SearchBar가 작아진다. <br/>

## 선택 사항
Redux - persist , atnd, ant-chart , emotion 적용<br/>


## Naver-developers API CORS 이슈 해결 방법
```
yarn add http-proxy-middleware


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


