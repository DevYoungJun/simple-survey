class Survey {
  #questions = [];
  #answer = [];
  #currentIndex = 0;
  #optionLabels = [];
  #optionValues = [];
  #buttons = [];
  #onComplete = (result) => {};
  #onChangeQuestion = (index) => {};

  #surveyBox = null;
  #buttonClassName = 'survey-button';

  /**
   * Constructor
   * @param {string} surveyContainerId
   * @param {string[]} questions
   * @param {string[]} optionLabels
   * @param {string[]} optionValues
   */
  constructor(surveyContainerId, questions, optionLabels, optionValues) {
    this.#surveyBox = document.getElementById(surveyContainerId);
    this.#questions = questions;
    this.#optionLabels = optionLabels;
    this.#optionValues = optionValues;

    if (this.#surveyBox === null) {
      throw Error('Survey container is not exist.');
    }
    if (optionLabels.length !== optionValues.length) {
      throw Error('Label과 Value의 길이가 일치하지 않습니다.');
    }

    this.#renderQuestion();
    this.#renderButton();
  }

  /**
   * get current question index number
   * @returns {number}
   */
  getCurrentIndex() {
    return this.#currentIndex;
  }

  /**
   * set callback function on survey complete
   * @param {function} onComplete
   */
  setOnComplete(onComplete) {
    this.#onComplete = onComplete;
  }

  /**
   * set callback function on question change
   * @param {function} onChangeQuestion
   */
  setOnChangeQuestion(onChangeQuestion) {
    this.#onChangeQuestion = onChangeQuestion;
  }

  /**
   * reset survey
   */
  reset() {
    this.#currentIndex = 0;
    this.#answer = [];
    this.#renderQuestion();
    this.#onChangeQuestion(this.#currentIndex);
  }

  #next() {
    if (this.#currentIndex < this.#questions.length-1) {
      this.#currentIndex += 1;
      this.#renderQuestion();
    } else {
      this.#onComplete(this.#answer);
    }
    this.#onChangeQuestion(this.#currentIndex);
  }

  /**
   * go to previous question
   */
  prev() {
    if (0 < this.#currentIndex) {
      this.#currentIndex -= 1;
    }
    this.#renderQuestion();
    this.#onChangeQuestion(this.#currentIndex);
  }

  #selectAnswer(value) {
    this.#answer[this.#currentIndex] = value;
    this.#next();
  }

  #renderQuestion() {
    // Set dom
    this.#surveyBox.querySelector('.index').innerHTML
        = this.#questions[this.#currentIndex].index;
    this.#surveyBox.querySelector('.question').innerHTML
        = this.#questions[this.#currentIndex].question;
  }

  #renderButton() {
    // Make button
    const baseButton = document.createElement('button');
    baseButton.classList.add(this.#buttonClassName);
    const buttonFrag = document.createDocumentFragment();

    this.#optionLabels.forEach((element, i) => {
      this.#buttons[i] = baseButton.cloneNode(true);
      this.#buttons[i].dataset.value = this.#optionValues[i];
      this.#buttons[i].innerText = this.#optionLabels[i];

      this.#buttons[i].addEventListener('click', () => {
        this.#selectAnswer(this.#optionValues[i]);
      });

      buttonFrag.appendChild(this.#buttons[i]);
    });

    // Set dom
    this.#surveyBox.querySelector('.survey-box-button').appendChild(buttonFrag);
  }

}
