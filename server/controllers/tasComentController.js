const {TasComent} = require('../models/models');
const ApiError = require('../error/ApiError');

class TasComentController {
  async create(req, res) {
    const {tascom_crdate, tas_id, tascom_descr} = req.body
    const tasComent = await TasComent.create({tascom_crdate, tas_id, tascom_descr})
    return res.json(tasComent)
  }

  async getall(req, res) {
      const tasComents = await TasComent.findAll()
      return res.json(tasComents)
  }
}

module.exports = new TasComentController()