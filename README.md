# nodejs-opentutorials

## 추가 작업-모듈 분리

fs 모듈과 querystring 모듈을 다른 자바스크립트 파일로 빼서 모듈로 사용함.

본문을 아래와 같이 줄이고 pathname과 queryData의 id에 대한 if 분기는 다른 자바스크립트 파일에서 처리함.
``` javascript
var app = http.createServer(function (request, response) {
    var queryData = url.parse(request.url, true).query;
    var pathname = url.parse(request.url, true).pathname;

    template.readfile(template, request, response, queryData, pathname);
});
app.listen(1337);
```

## Node.js-45.App 제작-모듈의 활용
강의 출처 : https://youtu.be/WwZIozqFti8

다른 자바스크립트 파일을 만들고 이 파일 내의 객체를 가져와서 사용함.
```
module.exports = {
    HTML: ... ,
    list: ...
}
```
```
var template = require('./lib/template.js');
```

## Node.js-43.App 제작-템플릿 기능 정리정돈하기
강의 출처 : https://youtu.be/WwZIozqFti8

객체를 새로 선언하고 본문을 구성하는 함수와 파일들을 불러오는 함수를 객체 내의 키에 선언.
```
var template = {
    HTML: function(title, list, body, control) { ... },
    list: function(filelist) { ... }
}
```

리팩토링 : 외부동작을 바꾸지 않으면서 내부 구조를 개선하는 방법.
