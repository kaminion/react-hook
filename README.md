js 

in문
~~~js
// 배열
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
0 in trees         // true를 반환합니다.
3 in trees         // true를 반환합니다.
(1 + 2) in trees   // true를 반환합니다. 연산자 우선 순위에 의하여 이 구문의 괄호는 없어도 됩니다.
6 in trees         // false를 반환합니다.
"bay" in trees     // false를 반환합니다. 당신은 배열의 내용이 아닌, 인덱스 값을 명시하여야 합니다.
"length" in trees  // true를 반환합니다. length는 Array(배열) 객체의 속성입니다.

// 미리 정의된 객체
"PI" in Math       // true를 반환합니다.
"P" + "I" in Math  // true를 반환합니다.

// 사용자가 정의한 객체
var myCar = {company: "Lamborghini", model: "Lamborghini Veneno Roadster", year: 2014};
"company" in myCar // true를 반환합니다.
"model" in myCar   // true를 반환합니다.
~~~

# useState
state의 이름은 자유,
useState(초기값)
변경함수의 이름은 관습을 따라 prefix로 set이 오고, CamelCase를 적용한다.
~~~js 



~~~


# useEffect

컴포넌트의 sideEffect를 위해 사용
(화면 렌더링에 포함되지않는 별개의 작업)


# Nooks 
# N1은 useState에 대한 내용 

- N1-1은 class Component로 상태관리를 나타내는 것을 의미한다.

- N1-2는 state로 useInput 컴포넌트를 만들고 함수형 프로그래밍을 이용한 것이다.

- N1-3은 클릭이벤트로 어떤 내용을 선택하였는지 나타내는 이벤트를 나타내는 것이다.

# N2는 useEffect에 대한 내용

- N2-0은 useEffect의 LifeCycle에 대한 내용이다. (class -> functional)

- N2-1은 useEffect의 dependency 별 호출 상태를 나타내는 것이다.

- N2-2는 useEffect의 unMount와 useRef 그리고 함수형 프로그래밍을 설명한다.

- N2-3은 윈도우 이벤트 후 객체로 반환하였을 때를 설명한다.

- N2-4는 앱 벗어날 때 실행하는 함수형 프로그래밍을 실현

- N2-5는 useRef를 이용하여 스타일 변경과 네트워크 이벤트를 제어하는 것

- N2-6은 스크롤 이벤트와 웹 브라우저 별 스크린 이벤트를 제어하는 것

- N2-7은 웹 Notification 이벤트를 함수형 프로그래밍으로 제어하는 것이다.

- N2-8은 Axios를 이용한 hook이다.
(blocked by Cors에러 시 대응)

blocked by CORS policy 에러가 뜨는 분은 url 앞에 proxy url로 "https://cors-anywhere.herokuapp.com/"를 붙이시면 되네요. 쉽게 예를 들면

~~~js
const { loading, data, error, refetch } = useAxios({
url:
"https://cors-anywhere.herokuapp.com/https://yts.am/api/v2/list_movies.json"
});
~~~