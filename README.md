# nodejs-opentutorials

## Node.js-33.App 제작-파일 생성과 리다이렉션
강의 출처 : https://youtu.be/dBZDJloj9xk

fs 모듈의 writeFile 함수를 이용하여 파일을 생성함.
> fs.writeFile(`data/${title}`, description, 'utf8', function (err) { ... }

파일 생성 후, writeHead 함수로 생성한 파일 이름의 쿼리로 이동함.
> response.writeHead(302, { Location: `/?id=${title}` });
