const express=require('express');
const bodyParser=require('body-parser');
const mongoose = require('mongoose');


//we are using remote mongo database

//mongodb setup
let dev_db_url = 'mongodb://dilip:dilip123@ds161144.mlab.com:61144/employee';
let mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error',(err)=>{
	console.log(err);
});

//models
const Employee=require('./models/employee.model');

//routes
const employee=require('./routes/employee.route');



const app=express();

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//view engine as ejs
app.set('view engine','ejs');

//employee API
app.use('/employee',employee);

app.get('/',(req,res)=>{
	res.render('pages/index',()=>{
		Employee.find({},(err,emps)=>{
			if(err){
				console.log(err);
			}
			res.render('pages/index',{employees:emps});
		})
	});
});

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
	console.log(`server is listening on port: ${PORT}`)
})