# TodoMVC

## 최종 구현화면 이미지 및 동영상, 배포 주소
 - 최종 구현 화면
 ![최종구현](https://github.com/ganeodolu/TodoMVC/assets/52700427/53d87a25-5bd7-4c95-9a3a-8fa9b3b42226)

 - 배포주소 : [https://ganeodolu.github.io/TodoMVC/](https://ganeodolu.github.io/TodoMVC/)
## 환경 세팅

### VSCode
```sh
npm install -g yarn # npm i -g yarn

yarn install # yarn

yarn set version berry

yarn dlx @yarnpkg/sdks vscode

// 실행

cd assignments/ganeodolu

yarn dev
```

## 구현 요구사항
- [x] 할일 추가
- [x] 할일 삭제
- [x] 할일 토글
- [x] 할일 필터

## 사용한 프레임워크 및 라이브러리
- React.js
- Context API 
- nanoid : 고유 id 생성
- vite

## 과제 진행시 주안점
  - 기본 프로젝트인 Todo에 타입스크립트를 적용하여 구현
  - Context API를 사용하여 props를 최소화

## PR 리뷰
 - [PR링크](https://github.com/pagers-org/TodoMVC/pull/2)
 - 자주 쓰이는 filterType 상수화
 - input 값 접근방법
   - (React) useRef
   - (JS) namedItem
   - onChange 이벤트의 필요성
 - 타입범위 최소화

## 한계점 및 개선사항 작성
 - ContextAPI 메소드 any 사용

