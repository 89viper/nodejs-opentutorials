# nodejs-opentutorials

## Node.js-34.App 제작-글수정-수정할 정보 전송
강의 출처 : https://youtu.be/kKbW16TZkYY

pathname이 /update일 경우 처리할 else if문 작성.
```
else if (pathname === '/update') { ... }
```

form 형식을 만들고 파일의 내용을 form에 채움.\
(title은 value 속성, description은 내용에 불러옴)

파일의 이름이 변할 경우 연결이 안되는 문제가 생길 수 있음. 아래와 같이 hidden type의 입력을 추가하여 비교 가능.
```
<input type="hidden" name="id" value="${title}"> //바뀌기 전 title
<input type="text" name="title" placeholder="title" value="${title}"/> //변경된 후 title
```

## Node.js-34.App 제작-글수정-수정링크생성
강의 출처 : https://youtu.be/CSQfZz3UshE

수정을 위한 하이퍼링크 생성.\
'/' 일 경우 : create버튼만 생성.\
'/?id=${title}'일 경우 : create버튼과 update버튼.\
'/create'일 경우 : 공백.

update버튼을 눌렀을 때, 해당 항목의 타이틀을 쿼리 id로 대입함.
```
<a href="/update?id=${title}">update</a>
```
