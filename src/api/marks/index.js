import { Router } from 'express'

import {
  create,
  index,
  show,
  update,
  destroy,
  marksDetails
} from './controller'

const router = new Router()

router.post('/',create)

router.put('/:id',update)

router.get('/', index)

router.get('/details', marksDetails)

router.get('/:id', show)

router.delete('/:id', destroy)

export default router
