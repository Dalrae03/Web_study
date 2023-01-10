**⦁ display속성**

block요소 : 화면의 한 줄 차지

inline요소 : 요소의 크기만큼

<br>

**⦁ 박스 영역**

콘텐츠 영역: width, height

안쪽 여백: padding (-right, -left, -bottom, -top)

테두리: border-width

바깥쪽 여백: margin (-right, -left, -bottom, - top)

solid:

<div></div>: 블럭요소

<span></span>: 인라인요소, width, height가 적용되지 않는다.

display: inline-block : 요소를 인라인으로 배치하되 블록요소의 속성을 가질 수 있다.

상하좌우 여백 개별정의 가능

CSS속성 – 같은 속성이 있는 경우 마지막에 작성한 설정을 따른다.

padding과 margin - 위 우 하 좌 순으로 한번에 속성을 지정할 수 있다. (단축속성가능)

요소의 크기 – 테두리까지 포함

<br>

**⦁ box-sizing**

content-box -> 기본값. 너비와 높이가 콘텐츠 영역만을 포함

border-box -> 너비와 높이가 안쪽 여백과 테두리까지 포함 (콘텐츠 사이즈가 줄어듬)

<br>

**⦁ background (단축속성가능)**

background-color -> 배경 색 지정

background-image -> 배경 이미지 지정

background-position -> 배경 이미지의 초기위치 지정

=> 기본값 left top (center, bottom, left, right, top 다섯가지 속성)

background-size -> 배경 이미지의 크기 정의

=> cover - 이미지의 비율이 깨지지않는 상에서 최대크기로 지정됨, contain – 이미지가 찌그러지거나 잘리지않는상에서 최대사이즈

background-repeat -> 배경 이미지의 반복방법 정의

=> 기본값 repeat (바둑판식반복원하지않으면 no-repeat)

url() -> 괄호안에 url적용하도록 제공되는 함수

<br>

**⦁ float**

요소가 문서의 일반적인 흐름(먼저 선언된것부터 차례로 제시)에 제외되어 자신을 포함하고있는 컨테이너의 왼쪽이나 오른쪽에 배치되게 함

사이트의 크기를 줄이거나 늘리면 따라 움직임

요소는 문서의 흐름에선 제외되지만, 필요한 만큼의 공간은 차지함

none - 기본값

left – 자신을 포함하고 있는 박스의 왼편에 떠있음

right – 자신을 포함하고 있는 박스의 오른편에 떠있음

<br>

**⦁ clear**

none – 기본값, 아래로 이동되지 않음을 나타냄

left – float이 left인 요소의 아래로 내려감

right – float이 right인 요소의 아래로 내려감

both – float이 left 및 right인 요소의 아래로 내려감

=> clear: both;를 사용하면 편하게 모두의 아래에서 시작 할 수 있음

<br>

**⦁ position**

position -> 요소의 배치방법 정의

top, right, bottom, left -> 최종위치 결정

static – 기본값. 요소를 일반적인 문서 흐름에 따라 배치함

relative – 일반적인 문서흐름(다른요소를 추가하면 원래 위치해야했던 위치 밑에 배치된다)에 따라 배치하되, 상하좌우 위치값에 따라 오프셋 적용

absolute – 일반적인 문서 흐름에서 제거하고(그냥 원래 있어야하는 곳을 빈공간 취급, 겹치기 가능), 자기의 상위요소중에서 가장가까운 포지션 요소에 대해서 상대적인 지정한 위치에 고정. 포지션을 지정하는 상위요소가 없다면 브라우저 화면을 기준으로 위치를 잡는다

fixed – 일반적인 문서흐름에서 제거(absolute와 유사), 지정한 위치에 고정(스크롤을 내려도 화면에서 정해진 위치에서 움직이지 않는다)

sticky – 일반적인 문서흐름에 따라 배치(이동이되어도 원래 위치는 공백으로 남겨둠), 스크롤 동작이 존재하는 가장 가까운 상위요소에 대해 오프셋 적용, 스크롤이동으로 요소가 움직여도 스티키요소는 고정된 상태를 유지함. 정해진 위치에 도달한다면 움직이지않는다.

=> 상위요소가 스크롤 될 때 자기가 오프셋적용한 곳에만 착 달라붙고 평소에는 일반적인 흐름대로 움직인다.

<br>

**⦁ flexbox**

박스 내 요소 간의 공간 배분과 정렬 기능을 제공하기 위한 1차원 레이아웃 모델.

flexbox를 1차원 모델이라 부르는 이유는. 레이아웃을 다룰 때 한번에 하나의 차원(행, 열)만을 다룬다는 특성 때문

display:flex; -> 기본 행 방향(가로)설정

주축(main-axis) - 기본적 가로(행)방향

교차축(cross-axis)

주죽, 교차축 변경가능

flex-direction -> flexbox 내 요소를 배치할 때 사용할 주축 및 방향(정방향, 역방향)지정, flex-container을 위한 속성

row -> 기본값. 주축은 행(가로)이고 방향은 콘텐츠의 방향과 동일

row-reverse -> 주축은 행(가로)이고 방향은 콘텐츠의 방향과 반대

column -> 주축은 열(세로)이고 방향은 콘텐츠의 방향과 동일

column-reverse -> 주축은 열(세로)이고 방향은 콘텐츠의 방향과 반대

<br>

**⦁ flex-container안에서 위치방법**

justify-content : 주축 배치 방법

- > flex-start, end
- > center
- > space-around : 주축에서 요소들간의 여백을 동일하게 맞추겠다
- > space-between :　첫번째 요소와 마지막요소를 양 끝에 붙이고 나머지는 동일한 공백을 두고 위치한다.

align-items : 교차축 배치 방법

- > flex-start,end
- > center

align-self : 교차축 개별요소하나하나 배치 방법

- > flex-start,end

flex-wrap : 줄바꿈 여부 – flex-container의 하위 요소들이 flex-container보다 커져버렸을 때의 처리방법을 결정하는 속성

- > nowrap : 기본값
- > wrap : 커져버렸을 때 2행이상으로 처리한다 (요소 개수에 따라서 행의 개수는 늘어날 수 있다.)
- > wrap-reverse : 거꾸로 정렬 (위아래 반전느낌)

flex-container에서 자식요소가 자신요소보다 커져버리게되면 자식요소를 줄여버린다.