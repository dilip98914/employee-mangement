const express = require('express');
const router = express.Router();

const employee_controller = require('../controllers/employee.controller');

router.post('/create',employee_controller.employee_create);
router.get('/:id', employee_controller.employee_details);

router.get('/:id/delete', employee_controller.employee_delete);
router.get('/:id/update1', employee_controller.employee_update1);
router.post('/:id/update2', employee_controller.employee_update2);


module.exports = router;