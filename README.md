## 👩🏻‍💻 Tetris Game

### ▪️ 기술 스택

- ReactJS / React-Hooks
- PostCss / Styled-Components
- JavaScript(ES6) / HTML

### ▪️ 구현한 기능

- React-hooks, CSS(PostCSS, styled-components) 사용
- start 버튼 클릭 후 게임 시작 가능
- 키보드 이벤트로 **좌/우/아래** 로 블럭 이동 구현 
- 마우스 이벤트를 이용하여 **좌/우** 블럭 이동 구현
- 충돌 감지 기능 구현
- 자동으로 일정 시간(1초) 간격을 두고 1칸씩 이동, 키보드로 아래 이동시 자동으로 시간 간격당 움직이는 기능 멈춤
- 1줄이 블럭으로 빠짐없이 메워진 경우, 해당 줄의 블럭 삭제/ 사라진 줄만큼 채워지는 기능 구현
- 점수 확인가능, 삭제된 줄 갯수 확인 가능, 레벨 확인 가능 
- 일정 점수 달성시, level 상승하며 블럭이 내려오는 속도가 빨라지는 기능 구현 
- 블럭이 더이상 내려올 공간이 없으면 Game Over

### ▪️ useInterval 레퍼런스 참고
- [useInterval](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)
