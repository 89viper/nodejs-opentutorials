# nodejs-opentutorials

## Node.js-24.App 제작-글목록 출력하기
강의 출처 : https://youtu.be/ibz2gaW-tyQ

fs.readdir 함수를 이용하여\
특정 폴더에 있는 파일 목록을 배열로 가져옴.
> fs.readdir('./data', function (error, filelist) { ... });

반복문과 파일 목록이 저장된 배열로 파일 개수만큼 내용을 출력하기 위해 변수에 저장.
> while (i < filelist.length) {\
&nbsp;&nbsp;&nbsp;list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;\
&nbsp;&nbsp;&nbsp;i = i + 1;\
}

위의 링크를 클릭했을 때의 쿼리 id를 이용하여 파일 열기.
> fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) { ... });
