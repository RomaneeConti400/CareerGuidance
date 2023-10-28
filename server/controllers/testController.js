import { Test, Answer, Question } from "../models/models.js";
import ApiError from "../error/ApiError.js";
import { generatePublicId } from "../utils/public_id.js";

class TestController {
  async create(req, res) {
    try {
      const { test_name, test_desc, psychotype, test_content } = req.body;
      const test_id = generatePublicId();
      const test = await Test.create({
        test_id,
        test_name,
        test_desc,
        psychotype,
      });

      for (const item of test_content) {
        const { question, answers } = item;
        const question_id = generatePublicId();
        const questionData = await Question.create({
          question_id,
          test_id: test_id,
          question_text: question,
        });
        const questionId = questionData.question_id;

        for (const answer of answers) {
          const answer_id = generatePublicId();
          await Answer.create({
            answer_id,
            question_id: question_id,
            answer_text: answer,
          });
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
    function filterResults(results) {
      let biggestValue = 0;
      for (let i = 0; i < results.length; i++) {
        results[i].value > biggestValue
          ? (biggestValue = results[i].value)
          : false;
      }
      // лучше filter, т.к. резы могут быть равны в двух категориях
      results = results.filter((item) => item.value === biggestValue);
      return results;
    }
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
        results = filterResults(results);
        // просто возвращаю резы, пока не появится структура для их хранения
        return res.json(results);
      }
      case "Тест Голланда": {
        let results = [
          { name: "realistic", value: 0 },
          { name: "intelligent", value: 0 },
          { name: "social", value: 0 },
          { name: "conventional", value: 0 },
          { name: "enterprising", value: 0 },
          { name: "artistic", value: 0 },
        ];
        let currentType = 0;

        // answers хранит массив из 42 элементов, что равны 0 или 1 (а или б соотв.)
        try {
          for (let i = 0, j = 1; i < answers.length; i++) {
            if (j < results.length) {
              answers[i] === 0
                ? results[currentType].value++
                : results[j].value++;
              j++;
            } else {
              if (currentType + 1 < results.length - 1) {
                currentType++;
                j = currentType + 1;
              } else {
                currentType = 0;
                j = 1;
              }
            }
          }
          results = filterResults(results);
          return res.json(results);
        } catch (e) {
          return next(ApiError.internal(e.message));
        }
      }
      case "Тест Томаса Кеннета": {
        // answers хранит массив из 30 элементов, что равны 0 или 1 (а или б соотв.)
        let rivalry = 0; // соперничество
        let cooperation = 0;
        let compromise = 0;
        let avoidance = 0;
        let adaptation = 0;
        // к сожалению, лучше варианта не придумала. зато работает.
        answers[0] === 0 ? avoidance++ : adaptation++;
        answers[1] === 0 ? compromise++ : cooperation++;
        answers[2] === 0 ? rivalry++ : adaptation++;
        answers[3] === 0 ? compromise++ : adaptation++;
        answers[5] === 0 ? avoidance++ : rivalry++;
        answers[6] === 0 ? avoidance++ : compromise++;
        answers[7] === 0 ? rivalry++ : cooperation++;
        answers[8] === 0 ? avoidance++ : rivalry++;
        answers[9] === 0 ? rivalry++ : compromise++;
        answers[10] === 0 ? rivalry++ : adaptation++;
        answers[11] === 0 ? adaptation++ : avoidance++;
        answers[12] === 0 ? compromise++ : rivalry++;
        answers[13] === 0 ? cooperation++ : rivalry++;
        answers[14] === 0 ? adaptation++ : avoidance++;
        answers[15] === 0 ? adaptation++ : rivalry++;
        answers[16] === 0 ? rivalry++ : avoidance++;
        answers[17] === 0 ? adaptation++ : compromise++;
        answers[18] === 0 ? cooperation++ : avoidance++;
        answers[19] === 0 ? cooperation++ : compromise++;
        answers[20] === 0 ? adaptation++ : cooperation++;
        answers[21] === 0 ? compromise++ : rivalry++;
        answers[22] === 0 ? cooperation++ : avoidance++;
        answers[23] === 0 ? adaptation++ : compromise++;
        answers[24] === 0 ? rivalry++ : adaptation++;
        answers[25] === 0 ? compromise++ : cooperation++;
        answers[26] === 0 ? avoidance++ : adaptation++;
        answers[27] === 0 ? rivalry++ : cooperation++;
        answers[28] === 0 ? compromise++ : avoidance++;
        answers[29] === 0 ? adaptation++ : cooperation++;

        let results = [
          { name: "rivalry", value: rivalry },
          { name: "cooperation", value: cooperation },
          { name: "compromise", value: compromise },
          { name: "avoidance", value: avoidance },
          { name: "adaptation", value: adaptation },
        ];
        results = filterResults(results);
        // просто возвращаю резы, пока не появится структура для их хранения
        return res.json(results);
      }
      default: {
        return res.json("no results");
      }
    }
  }

  async fill(req, res) {
    let test_name = klimovQuestionare.test_name,
      test_desc = klimovQuestionare.test_desc,
      psychotype = klimovQuestionare.psychotype,
      test_content = klimovQuestionare.test_content;
    const klimov = await Test.findOne({ where: { test_name } });
    if (!klimov) {
      const test_id = generatePublicId();
      const test = await Test.create({
        test_id,
        test_name,
        test_desc,
        psychotype,
      });
      const testId = test.test_id;

      for (const item of test_content) {
        const { question, answers } = item;
        let question_id = generatePublicId();
        let questionData = await Question.create({
          question_id,
          test_id: testId,
          question_text: question,
        });
        const questionId = questionData.question_id;

        for (const answer of answers) {
          let answer_id = generatePublicId();
          await Answer.create({
            answer_id,
            question_id: questionId,
            answer_text: answer,
          });
        }
      }
    }

    (test_name = hollandTest.test_name),
      (test_desc = hollandTest.test_desc),
      (psychotype = hollandTest.psychotype),
      (test_content = hollandTest.test_content);
    const holland = await Test.findOne({ where: { test_name } });
    if (!holland) {
      const test_id = generatePublicId();
      const test = await Test.create({
        test_id,
        test_name,
        test_desc,
        psychotype,
      });
      const testId = test.test_id;

      for (const item of test_content) {
        const { question, answers } = item;
        let question_id = generatePublicId();
        let questionData = await Question.create({
          question_id,
          test_id: testId,
          question_text: question,
        });
        const questionId = questionData.question_id;

        for (const answer of answers) {
          let answer_id = generatePublicId();
          await Answer.create({
            answer_id,
            question_id: questionId,
            answer_text: answer,
          });
        }
      }
    }

    (test_name = thomasKennethTest.test_name),
      (test_desc = thomasKennethTest.test_desc),
      (psychotype = thomasKennethTest.psychotype),
      (test_content = thomasKennethTest.test_content);
    const kenneth = await Test.findOne({ where: { test_name } });
    if (!kenneth) {
      const test_id = generatePublicId();
      const test = await Test.create({
        test_id,
        test_name,
        test_desc,
        psychotype,
      });
      const testId = test.test_id;

      for (const item of test_content) {
        const { question, answers } = item;
        let question_id = generatePublicId();
        let questionData = await Question.create({
          question_id,
          test_id: testId,
          question_text: question,
        });
        const questionId = questionData.question_id;

        for (const answer of answers) {
          let answer_id = generatePublicId();
          await Answer.create({
            answer_id,
            question_id: questionId,
            answer_text: answer,
          });
        }
      }
    }
    return res;
  }
}

export default new TestController();
