const express = require('express')
const app = express()
const http = require('http');
const url = require('url');
const fs = require('fs');
var qs = require('querystring');
var template = require('./template');
var mysql = require('mysql');
// 비밀번호는 별도의 파일로 분리해서 버전관리에 포함시키지 않아야 합니다. 
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'wjdwogns',
    database: 'project'
});

db.connect();

app.use(express.static('public'));
/********************메인화면*****************/
app.get('/', function (request, response) {
    db.query(`select * from note`, function (error, topics) {
        var list = template.list(topics);
        var html = template.head_tail(list);

        response.send(html);
    });
});

/*****************게시판*************************/
app.get('/note', function (request, response) {
    db.query(`select * from note`, function (error, topics) {
        var list = template.list(topics);
        var html = template.head_tail(list);

        response.send(html);
    });

});

/********************게시판 세부내용************************/
app.get('/note/page/:pageId', function (request, response) {
    db.query(`select * from note`, function (error, topics) {
        db.query(`select * from note where id = '${request.params.pageId}'`, function (error2, topic) {
            var article = template.article(topics, topic);
            var html = template.head_tail(article);
            response.send(html);
        });
    });

});


/*************create************ */
app.get('/note/create', function (request, response) {
    var content = template.write_article();
    var html = template.head_tail(content);
    response.send(html);

});

app.post('/note/process_create', function (request, response) {
    var body = '';
    request.on('data', function (data) {
        body = body + data;
    });
    request.on('end', function () {
        var post = qs.parse(body);
        db.query(`
            INSERT INTO note (title, description, author,visit) 
              VALUES(?, ?, ?, ?)`,
            [post.title, post.description, '정재훈', 1],
            function (error, result) {
                if (error) {
                    throw error;
                }
                response.writeHead(302, { Location: `/note` });
                response.end();
            }
        )
    });
});

/*************update************ */
app.get('/note/update/page/:pageId', function (request, response) {
    db.query(`select * from note`, function (error, topics) {
        db.query(`select * from note where id = '${request.params.pageId}'`, function (error2, topic) {
            var content = template.update_article(topic);
            var html = template.head_tail(content);
            response.send(html);
        });
    });

});

app.post('/note/process_update', function (request, response) {
    var body = '';
    request.on('data', function (data) {
        body = body + data;
    });
    request.on('end', function () {
        var post = qs.parse(body);
        db.query('UPDATE note SET title=?, description=?, author=?, visit=? WHERE id=?', [post.title, post.description, '정재훈', 1, post.id], function (error, result) {
            response.writeHead(302, { Location: `/note/page/${post.id}` });
            response.end();
        })
    });
});

app.post('/note/process_delete', function (request, response) {
    var body = '';
    request.on('data', function (data) {
        body = body + data;
    });
    request.on('end', function () {
        var post = qs.parse(body);
        db.query('DELETE FROM note WHERE id = ?', [post.id], function (error, result) {
            if (error) {
                throw error;
            }
            response.writeHead(302, { Location: `/note` });
            response.end();
        });
    });
});

app.get('/template', function (request, response) {
    db.query(`select * from note`, function (error, topics) {
        var list = template.list(topics);
        var html = template.head_tail(list);

        response.send(html);
    });

});

app.listen(8080, () => console.log('Example app listening on port 3000!'))
