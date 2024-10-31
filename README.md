# 카드리스트 만들기

## 1. 주의사항

```
a 태그는 너비와 높이를 줄 수 없다.
왜? 초기값이 display : inline 이라서
```

```
a 태그에 너비, 높이, 마진, 패딩을 주려면
display : block을 적어준다.
Tip! display : flex 사용해준다.
```

## 2. 정말 중요한 내용

### 2.1 position

### 2.1.1 position:fixed

```
웹브라우저 기준으로 위치 고정
스크롤이 되든 화면이 넓든 화면이 좁든 화면이 짧아도 위치 고정
```

- 주의사항

```
position : fixed 를 하면 웹브라우저 기준이라서
화면에 보이는 내용의 레이아웃에서 높이가 반영이 안된다.
```

```
position : fixed 를 하면 넓이를 줘야한다.
background-color 를 주어야 한다.
웹브라우저 기준으로 left, top, bottom, right도 설정
```

```
position : fixed 하면 우선 전체 너비를 기준으로 내용과 구분해서 div 구성하기를 추천!
```

```
화면 즉, z-index 값을 많이 줍니다.
z-index : 999999
```

### 2.1.2 position:absolute

    - fixed 와 똑같다.
    - 차이점은 body를 기준으로 한다
    - 반드시 원하는 css에 relative가 있으면 기준이 바뀐다.

### 2.1.3 position:relative

    - absolute 의 기준점
