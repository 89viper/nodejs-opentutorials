# nodejs-opentutorials

## Node.js-37.App 제작-글 삭제-삭제 버튼 구현
강의 출처 : https://youtu.be/yn5VtLGbyAE

삭제의 경우, 단순한 하이퍼링크 사용을 지양하고\
form 형태에서 post 메소드를 이용한 전송을 하는 것이 권장됨.\
```
<form action="delete_process" method="post" onsubmit=">
    <input type="hidden" name="id" value="${title}">
    <input type="submit" value="delete">
</form>
```
