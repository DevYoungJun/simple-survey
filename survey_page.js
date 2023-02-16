const d = document;

/**
 * Initialize
 */
const optionLabels = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
const optionValues = [1, 2, 3, 4, 5];
const surveyData = [
  {
    index: 1,
    question: 'Content of question 1',
  },
  {
    index: 2,
    question: 'Content of question 2',
  },
  {
    index: 3,
    question: 'Content of question 3',
  },
  {
    index: 4,
    question: 'Content of question 4',
  },
  {
    index: 5,
    question: 'Content of question 5',
  },
  {
    index: 6,
    question: 'Content of question 6',
  },
  {
    index: 7,
    question: 'Content of question 7',
  },
  {
    index: 8,
    question: 'Content of question 8',
  },
  {
    index: 9,
    question: 'Content of question 9',
  },
  {
    index: 10,
    question: 'Content of question 10',
  },
];

const survey = new Survey('surveyContainer', surveyData, optionLabels, optionValues);
survey.setOnComplete((answer) => {
  alert(answer);
});
survey.setOnChangeQuestion((idx) => {
  const rate = (idx + 1) * 5;
  d.querySelector('.survey-content .box-index .line>div').style.width = rate + '%';
});
