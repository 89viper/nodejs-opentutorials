# nodejs-opentutorials

## Node.js-31.App 제작-글생성 UI 만들기
강의 출처 : https://youtu.be/rm1rIN1DSfw

메인 페이지에 글쓰기 폼을 연결할 링크 추가.
> ``<a href="/create">create</a>

위의 링크를 클릭했을 때 반환되는 pathname(/create)을 인식하면 처리할 else if문 추가.
> else if (pathname === '/create') { ... }

본문 내용을 구성하는 함수에 이터럴 형식의 HTML 폼을 파라미터로 대입.
> var template = templateHTML(title, list, `` ... HTML 폼 ...   ``);
