# nodejs-opentutorials

## Node.js-34.App 제작-글수정-수정링크생성
강의 출처 : https://youtu.be/CSQfZz3UshE

수정을 위한 하이퍼링크 생성.\
'/' 일 경우 : create버튼만 생성.\
'/?id=${title}'일 경우 : create버튼과 update버튼.\
'/create'일 경우 : 공백.

update버튼을 눌렀을 때, 해당 항목의 타이틀을 쿼리 id로 대입함.
'''
<a href="/update?id=${title}">update</a>
'''
