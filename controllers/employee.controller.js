const Employee = require('../models/employee.model');


//add employee
exports.employee_create=(req,res)=>{
	let employee=new Employee({
		name:req.body.name,
		age:req.body.age,
		location:req.body.location,
		email:req.body.email,
		joined:Date.now()
	});

	employee.save((err)=>{
		if(err) return res.send(err);
		res.render('pages/employee',{employee});
	})
}


//view employee
exports.employee_details=(req,res)=>{
	Employee.findById(req.params.id,(err,employee)=>{
		if(err) return res.send(err);
		res.render('pages/employee',{employee});
	});
}

//delete employee
exports.employee_delete = (req, res)=>{
    Employee.findByIdAndRemove(req.params.id,(err)=>{
		if(err) return res.send(err);
        res.redirect('/');
    })
};

// update employee in two steps

//step-1:find required employee
exports.employee_update1 = (req, res)=>{
	Employee.findById(req.params.id,(err,employee)=>{
		if(err) return res.send(err);
		res.render('pages/index2',{employee});
	});
};

//step-2:change it's document
exports.employee_update2 = (req, res)=>{
	Employee.findOne({_id:req.params.id},(err,employee)=>{
		employee.name=req.body.name;
		employee.age=req.body.age;
		employee.location=req.body.location;
		employee.email=req.body.email;
		employee.save((err)=>{
			if(err) return res.send(err);
			res.render('pages/employee',{employee});
		});
	});
};