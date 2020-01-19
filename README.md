# nodejs-opentutorials

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
