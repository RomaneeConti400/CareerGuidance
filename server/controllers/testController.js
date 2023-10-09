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
}

module.exports = new TestController();
