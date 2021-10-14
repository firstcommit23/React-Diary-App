<h1 align='middle'>일기장 어플리케이션</h1>
<p align='middle'>
  <img src="https://img.shields.io/github/languages/top/jemizem/React-Diary-App?color=blue&logo=typescript"> </img>
<img src="https://img.shields.io/github/repo-size/jemizem/React-Diary-App?color=%23&logo=Github"> </img>
</p>

## 기술 스텍 (안)

리액트(함수형), styled component, redux (redux-saga), firebase, typescript

## 화면 기능 상세

`일기장 목록` (/)

-   (1차) 작성한 일기장 목록 조회화면
-   (1차) 조회 항목 : 일자, 제목, 날씨, 기분, 작성내용(5줄 이상일 경우 생략), 태그 목록, 삭제버튼, 수정버튼
-   (1차) 제목, 작성내용 클릭 시 상세 페이지로 이동
-   (1차) 페이지네이션 기능 추가 (1page 10개 게시글 표시)
-   (2차) 삭제 기능 : 삭제 확인 팝업 open 후 삭제 실행
-   (2차) 수정 기능 : 수정 페이지로 이동
-   (2차) 필터 기능 : 검색어, 연도별, 월별, 기분, 날씨, 태그목록

`일기장 작성` (/write)

-   (1차) 날짜 직접 입력, 날짜 선택 기능
-   (1차) 제목, 글 작성
-   (1차) 날씨, 기분 선택 기능 (문자 or 이모티콘 or SVG)
-   (2차) 태그 입력 (태그 검색 시 추천 태그 표시하기)
-   (2차) 입력 유효성 검사와 에러 메세지
-   (2차) JEST 사용해보기
-   (추가) 사진 업로드
-   (추가) 작성한 위치, 함께한 친구 기능

`일기장 상세화면` (/detail/:id)

-   (1차) 조회 항목 : 일자, 제목, 날씨, 기분, 작성내용(5줄 이상일 경우 생략), 태그 목록, 삭제버튼, 수정버튼
-   (2차) 날씨와 기분에 따른 배경 애니메이션 추가

`로그인/회원가입` (/login, /join)

-   (추가) 이메일, 비민벌호 로그인 인증
-   (추가) 로그인 후 내가 작성한 글만 수정, 삭제 가능하도록
-   (추가) 작성글 숨김, 공개 기능
-   (추가) SNS 기능 (팔로우, 좋아요, 댓글)

## 프로젝트 구조

-   src
    -   api
    -   components
    -   containers
    -   modules
    -   pages
    -   styles

## 일정

-   1차 스프린트 (2021.10.07 ~ 14)
-   2차 스프린트 (2021.10.15 ~ 22)
