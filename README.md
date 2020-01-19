# nodejs-opentutorials

## Node.js-38.App 제작-글 삭제-글 삭제 기능 완성
강의 출처 : https://youtu.be/RDj4Hns1Qnk

delete 버튼을 눌렀을 때의 pathname을 처리할 else if문 작성.
```
else if (pathname == '/delete_process') { ... }
```

fs.unlink 함수를 사용하여 선택한 id에 해당하는 파일을 삭제.
```
request.on('end', function () {
    var post = qs.parse(body);
    var id = post.id;
    fs.unlink(`data/${id}`, function (err) {
        response.writeHead(302, { Location: `/` });
        response.end();
    });
});
```

## Node.js-37.App 제작-글 삭제-삭제 버튼 구현
강의 출처 : https://youtu.be/yn5VtLGbyAE

삭제의 경우, 단순한 하이퍼링크 사용을 지양하고\
form 형태에서 post 메소드를 이용한 전송을 하는 것이 권장됨.\
(크롤링같이 웹페이지를 탐색하는 경우 접근이 가능할 수 있기 때문)
```
<form action="delete_process" method="post">
    <input type="hidden" name="id" value="${title}">
    <input type="submit" value="delete">
</form>
```
