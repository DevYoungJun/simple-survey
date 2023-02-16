## Simple survey

javascript를 기반으로 한 간단한 설문 코드 입니다.

설문 인스턴스를 생성 후 onComplete 콜백함수를 등록하시면 됩니다.

설문 생성시 들어가는 인자에서 선택지 이름(optionLabels)과, 선택지 값(optionValues)의 길이는 동일해야 합니다.

---

const survey = new Survey(설문을 그릴 컨테이너의 ID, 문항 데이터, 선택지 이름, 선택지 값);

survey.setOnComplete((answer) => {...});

survey.setOnChangeQuestion((idx) => {...});
