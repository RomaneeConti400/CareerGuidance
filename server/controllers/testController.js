const { Test, Answer, Question } = require("../models/models");
const ApiError = require("../error/ApiError");

class TestController {
  async create(req, res) {
    try {
      const { test_name, test_desc, psychotype, test_content } = req.body;

      const test = await Test.create({ test_name, test_desc, psychotype });
      const testId = test.test_id;

      for (const item of test_content) {
        const { question, answers } = item;
        const questionData = await Question.create({
          test_id: testId,
          question_text: question,
        });
        const questionId = questionData.question_id;

        for (const answer of answers) {
          await Answer.create({ question_id: questionId, answer_text: answer });
        }
      }
    } catch (e) {
      console.log(e);
    }

    return res;
  }

  async getall(req, res) {
    const tests = await Test.findAll();
    return res.json(tests);
  }

  // название метода временное, т.к. сам-то он post, а не get...
  async gettestresult(req, res) {
    const { test_name, answers } = req.body;
    switch (test_name) {
      case "Опросник Климова": {
        // answers хранит массив из 20 элементов, что равны 0 или 1 (а или б соотв.)
        let human_nature = 0;
        let human_tech = 0;
        let human_human = 0;
        let human_sign = 0;
        let human_art = 0;
        answers[0] === 0 ? human_nature++ : human_tech++;
        answers[1] === 0 ? human_human++ : human_sign++;
        answers[2] === 0 ? human_art++ : human_nature++;
        answers[3] === 0 ? human_tech++ : human_human++;
        answers[4] === 0 ? human_sign++ : human_art++;
        answers[5] === 0 ? human_nature++ : human_human++;
        answers[6] === 0 ? human_art++ : human_tech++;
        answers[7] === 0 ? human_human++ : human_art++;
        answers[8] === 0 ? human_tech++ : human_sign++;
        answers[9] === 0 ? human_nature++ : human_sign++;
        answers[10] === 0 ? human_nature++ : human_tech++;
        answers[11] === 0 ? human_human++ : human_sign++;
        answers[12] === 0 ? human_art++ : human_nature++;
        answers[13] === 0 ? human_tech++ : human_human++;
        answers[14] === 0 ? human_sign++ : human_art++;
        answers[15] === 0 ? human_nature++ : human_human++;
        answers[16] === 0 ? human_art++ : human_tech++;
        answers[17] === 0 ? human_human++ : human_art++;
        answers[18] === 0 ? human_tech++ : human_sign++;
        answers[19] === 0 ? human_nature++ : human_sign++;
        let results = [
          { name: "human_nature", value: human_nature },
          { name: "human_tech", value: human_tech },
          { name: "human_human", value: human_human },
          { name: "human_sign", value: human_sign },
          { name: "human_art", value: human_art },
        ];
        let biggestValue = 0;
        for (let i = 0; i < results.length; i++) {
          results[i].value > biggestValue
            ? (biggestValue = results[i].value)
            : false;
        }
        // лучше filter, т.к. резы могут быть равны в двух категориях
        results = results.filter((item) => item.value === biggestValue);
        // просто возвращаю резы, пока не появится структура для их хранения
        return res.json(results);
      }
      default: {
        return res.json("no results");
      }
    }
  }
}

module.exports = new TestController();
