const express = require('express')
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

const manageClient = require('./manageClient');

app.use(express.static(__dirname + '/public'));

//io.emit('chat message', msg);

io.on('connection', manageClient(io))/*

function(socket){
  console.log('a user connected');

  socket.on('offer', function(offer){
    console.log('offer: ' + offer);
    socket.broadcast.emit('offer', offer)
  });

  socket.on('answer', function(answer){
    console.log('answer: ' + answer);
    socket.broadcast.emit('answer', answer)
  });

  socket.on('candidate', function(candidate){
    console.log('candidate: ' + candidate);
    socket.broadcast.emit('candidate', candidate)
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});*/

http.listen(process.env.PORT || 5000, function(){
  console.log('listening on *:5000');
});
/*const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db');
const auth = require('./auth');

const PORT = process.env.PORT || 5000

const successResponse = (data) => ({status: 'success', data});
const errorResponse = ({message}) => ({status: 'error', message});

express()
	.use(cors())

	.use(bodyParser.json())

	.use(express.static(path.join(__dirname, 'public')))

	.post('/auth/register', async (req, res) => {
		try {
			const {username, password} = req.body;
			const result = await auth.register(username, password);
			res.json(successResponse(result));
		} catch (e) {
			console.error(e);
			res.json(errorResponse(e));
		}
	})

	.post('/auth/login', async (req, res) => {
		try {
			const {username, password} = req.body;
			const result = await auth.login(username, password);
			res.json(successResponse(result));
		} catch (e) {
			console.error(e);
			res.json(errorResponse(e));
		}
	})

	.post('/intake', async ({body: {students, intakeName}}, res) => {
		try {
			await db.create('student', students.map((student) => ({
				sid: student['SID'],
				name: student['Name'],
				quranTeacher: student['Teacher for Quran'],
				islamiayatTeacher: student['Teacher for Islamiayat'],
				grade: student['Islamiyat Grade'],
				intake: intakeName
			})));

			students = await db.find('student', {intake: [intakeName]});

			const buildStudentMarks = (student) => [
				'Fiqh',
				'Seerah',
				'History',
				'Aqaaid',
				'Tajweed',
				'Duaa',
				'Hadith',
				'Surah',
				'100 Sunnats',
			].map((subject, i) => ({
				class: i,
				student: student.id, 
			}));

			await db.create('mark', students.reduce((marks, student) => [
				...marks,
				...buildStudentMarks(student),
			], []));

			res.json(successResponse());
		} catch (e) {
			console.error(e);
			res.json(errorResponse(e));
		} 
	})

	.post('/mark', async ({body}, res) => {
		try {
			await db.update('mark', body);
			res.json(successResponse());
		} catch (e) {
			console.error(e);
			res.json(errorResponse(e));
		} 
	})

	.post('/query/intake', async (req, res) => {
		try {
			const intakes = await db.groups('student', 'intake');
			res.json(successResponse(intakes));
		} catch(e) {
			console.error(e)
			res.json(errorResponse(e))
		}
	})

	.post('/query/student', async ({body}, res) => {
		try {
			const students = await db.find('student', body);
			res.json(successResponse(students));
		} catch(e) {
			console.error(e)
			res.json(errorResponse(e))
		}
	})

	.post('/query/mark', async ({body}, res) => {
		try {
			const students = await db.find('mark', body);
			res.json(successResponse(students));
		} catch(e) {
			console.error(e)
			res.json(errorResponse(e))
		}	
	})

	.listen(PORT, () => console.log(`Listening on ${ PORT }`))
*/