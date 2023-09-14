const {TasChange} = require('../models/models');
const ApiError = require('../error/ApiError');

class TasChangeController {
  async create(req, res) {
    const {tasch_changedate, tas_id, tasch_descr, tasch_status} = req.body
    const tasChange = await TasChange.create({tasch_changedate, tas_id, tasch_descr, tasch_status})
    return res.json(tasChange)
  }

  async getall(req, res) {
      const tasChanges = await TasChange.findAll()
      return res.json(tasChanges)
  }
}

module.exports = new TasChangeController()