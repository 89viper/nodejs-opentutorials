# nodejs-opentutorials


## Node.js-19.1.App 제작-Not found 구현
https://youtu.be/pteR5pUpn2k

사용자가 요청한 url을 parse
> url.parse(request.url, true)

parse한 url에서 pathname만 추출(쿼리문 이후 문자는 무시)
> url.parse(request.url, true).pathname

pathname이 '/'일 때만 페이지 출력,
'/'이 아닐 경우 'Not found' 메시지 출력. (if문 사용)