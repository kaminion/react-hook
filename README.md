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
# N2는 useEffect에 대한 내용