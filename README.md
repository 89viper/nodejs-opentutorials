# nodejs-opentutorials

## Node.js-32.App 제작-POST 방식으로 전송된 데이터 받기
강의 출처 : https://youtu.be/WMX5zcalAM0

입력 폼 중에서, 아래의 태그는 ... 의 내용을 /create_process 이라는 pathname으로 전달함.
```
<form action="http://localhost:1337/create_process" method="post"> ... </form>
```

따라서 /create_process가 들어오는 경우의 else if문을 추가함.
```
else if (pathname === '/create_process') { ... }
```

데이터가 들어오는 경우의 콜백함수와 데이터를 받는 것이 끝났을 때 각각의 경우에 호출할 콜백함수를 사용.
```
request.on('data', function (data) { ... } // 데이터가 들어올 때 호출하는 콜백함수
request.on('end', function () { ... } // 데이터 받는 것이 끝났을 때 호출하는 콜백함수
```
