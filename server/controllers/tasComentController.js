import {TasComent} from '../models/models.js'
import ApiError from '../error/ApiError.js'
import { generatePublicId } from "../utils/public_id.js";

class TasComentController {
  async create(req, res) {
    const {tascom_crdate, tas_id, tascom_descr} = req.body
    const tascom_id = generatePublicId()
    const tasComent = await TasComent.create({tascom_id, tascom_crdate, tas_id, tascom_descr})
    return res.json(tasComent)
  }

  async getall(req, res) {
      const tasComents = await TasComent.findAll()
      return res.json(tasComents)
  }
}

export default new TasComentController()