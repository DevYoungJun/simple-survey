const d = document;

/**
 * Initialize
 */
const survey = new Survey('surveyContainer', surveyData, optionLabels, optionValues);
survey.setOnComplete((answer) => {
  alert(answer);
});
survey.setOnChangeQuestion((idx) => {
  const rate = (idx + 1) * 5;
  d.querySelector('.survey-content .box-index .line>div').style.width = rate + '%';
});
