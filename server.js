const express = require('express');
const app = express();

// 安装html解析器
app.engine('html', require('express-art-template'));

// 解析body的json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 把node_modules开放为公共资源，别名为：/bbb
app.use('/bbb', express.static('node_modules'));

// 把public开放为公共资源，别名为：/aaa
app.use('/aaa', express.static('public'));

app.get('/', (req, res) => {
	res.render('index.html');
});

app.get('/Main', (req, res) => {
	res.render('Main.html');
});

app.get('/Login', (req, res) => {
	res.render('Login.html');
});

app.post('/Login', (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	console.log('账号:', username);
	console.log('密码:', password);

	if (username !== '123456' || password !== '123456') {
		// 返回登录失败信息
		res.send({ code: 400, msg: '登录失败！账号密码错误' });
	} else {
		// 返回登录成功信息
		res.send({ code: 200, msg: '登录成功！账号: ' + username + ', 密码: ' + password  });
	}
});

app.listen(3000, () => {
	console.log("服务器已启动，访问 http://localhost:3000 ");
});