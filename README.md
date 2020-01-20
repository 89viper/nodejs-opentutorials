# nodejs-opentutorials

## Node.js-46.App 제작-입력 정보에 대한 보안
강의 출처 : https://youtu.be/xZztZWYuoo0

사용자가 쿼리를 입력하여 처리할 수 있는 부분에서는 ..을 이용한 상위 폴더 탐색을 주의해야 함.\
아래와 같이 path 모듈의 파싱 기능을 이용하여 상위 폴더에 접근할 수 없도록 필터링을 해야 함.
``` javascript
var path = require('path');

var filteredId = path.parse(queryData.id).base;
    fs.readFile(`data/${filteredId}`, 'utf8', function (err, description) { ... }
}
```
