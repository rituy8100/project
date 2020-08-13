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
    var html = `<!DOCTYPE html>
    <html>
        <head>
            <title>헬스 갤러리</title>
            <link rel="stylesheet"
            href="/css/main.css"/>
        </head>
        <body>
            <h1><div id="logo" onclick="location.href='/'" style="cursor: pointer;">헬스 갤러리</div></h1>
            <nav id="main_nav">
                    <li class='menu'><a href="note">게시판</a></li>
                    <li class='menu'><a href="a">몸평</a></li>
                    <li class='menu'><a href="a">legend</a></li>
                    <li class='menu'><a href="youtube.html">youtube</a></li>
                    <li class='menu'><a href="a">instagram</a></li>
                    <li class='menu'><a href="a">store</a></li>
                    <li class='menu'><a href="a">about me</a></li>
            </nav>
            <div id="slider-wrap">
                <ul id="slider">
                    <li>
                        <div>
                            <h3>Slide #1</h3>
                            <span>Sub-title #1</span>
                        </div>
                        <img src="https://i.ytimg.com/vi/SIB1xc9I_Ec/maxresdefault.jpg">
                    </li>
            
                    <li>
                        <div>
                            <h3>Slide #2</h3>
                            <span>Sub-title #2</span>
                        </div>
                        <img src="https://wallpapercave.com/wp/wp2483045.jpg">
                    </li>
            
                    <li>
                        <div>
                            <h3>Slide #3</h3>
                            <span>Sub-title #3</span>
                        </div>
                        <img src="https://wallpapercave.com/wp/wp2593564.jpg">
                    </li>
            
                    <li>
                        <div>
                            <h3>Slide #4</h3>
                            <span>Sub-title #4</span>
                        </div>
                        <img src="https://wallpapercave.com/wp/wp2639541.jpg">
                    </li>
            
                    <li>
                        <div>
                            <h3>Slide #5</h3>
                            <span>Sub-title #5</span>
                        </div>
                        <img src="https://wallpapercave.com/wp/wp2593581.jpg">
                    </li>
                </ul>
            
                <div class="slider-btns" id="next"><span>▶</span></div>
                <div class="slider-btns" id="previous"><span>◀</span></div>
            
                <div id="slider-pagination-wrap">
                    <ul>
                    </ul>
                </div>
            </div>
            <script src="/javascript/main.js"></script>
        </body>
        <footer class="foot">
            <p>rituy8100@naver.com(정재훈)</p>

        </footer>
    </html>`;
    response.send(html);
});

/*****************게시판*************************/
app.get('/note', function (request, response) {
    db.query(`select * from note`, function (error, topics) {
        var list = template.list(topics);
        var html = `<!DOCTYPE html>
    <html>
        <head>
            <title>헬스 갤러리</title>
            <link rel="stylesheet"
            href="/css/main.css"/>
        </head>
        <body>
            <h1><div id="logo" onclick="location.href='/'" style="cursor: pointer;">헬스 갤러리</div></h1>
            <nav id="main_nav">
                    <li class='menu'><a href="/note">게시판</a></li>
                    <li class='menu'><a href="a">몸평</a></li>
                    <li class='menu'><a href="a">legend</a></li>
                    <li class='menu'><a href="youtube.html">youtube</a></li>
                    <li class='menu'><a href="a">instagram</a></li>
                    <li class='menu'><a href="a">store</a></li>
                    <li class='menu'><a href="a">about me</a></li>
            </nav>
            
            <div class="table_div">
                <table class="table">
                    <tr class="table_top">
                      <th>번호</th>
                      <th>제목</th>
                      <th>작성자</th>
                      <th>날짜</th>
                      <th>조회수</th>
                    </tr>
                    ${list}
                  </table>
                  <div class="create_button">
                <button onclick="location.href='/note/create'">
                    글쓰기
                </button>
            </div>
            </div>

            

            <script src="/javascript/main.js"></script>
        </body>
        <footer class="foot">
            <p>rituy8100@naver.com(정재훈)</p>

        </footer>
    </html>`;
        response.send(html);
    });

});

/********************게시판 세부내용************************/
app.get('/note/page/:pageId', function (request, response) {
    db.query(`select * from note`, function (error, topics) {
        db.query(`select * from note where id = '${request.params.pageId}'`, function (error2, topic) {
            var list = template.list(topics);
            var html = `<!DOCTYPE html>
    <html>
        <head>
            <title>헬스 갤러리</title>
            <link rel="stylesheet"
            href="/css/main.css"/>
        </head>
        <body>
            <h1><div id="logo" onclick="location.href='/'" style="cursor: pointer;">헬스 갤러리</div></h1>
            <nav id="main_nav">
                    <li class='menu'><a href="/note">게시판</a></li>
                    <li class='menu'><a href="a">몸평</a></li>
                    <li class='menu'><a href="a">legend</a></li>
                    <li class='menu'><a href="youtube.html">youtube</a></li>
                    <li class='menu'><a href="a">instagram</a></li>
                    <li class='menu'><a href="a">store</a></li>
                    <li class='menu'><a href="a">about me</a></li>
            </nav>

            <div class="note_description">
                <h2>${topic[0].title}</h2>
                <p>${topic[0].description}</p>
            </div>

            <div class="delete_fix_button">
            <form action="/note/process_delete" method="post">
            <input type="hidden" name="id" value="${topic[0].id}">
            <input type="submit" value="삭제"class="delete_button">
          </form>
                <button onclick="location.href='/note/update/page/${topic[0].id}'">
                    수정
                </button>
            </div>
            
            <div class="table_div">
                <table class="table">
                    <tr class="table_top">
                      <th>번호</th>
                      <th>제목</th>
                      <th>작성자</th>
                      <th>날짜</th>
                      <th>조회수</th>
                    </tr>
                    ${list}
                  </table>
            </div>

            <script src="/javascript/main.js"></script>
        </body>
        <footer class="foot">
            <p>rituy8100@naver.com(정재훈)</p>

        </footer>
    </html>`;

            response.send(html);
        });
    });

});


/*************create************ */
app.get('/note/create', function (request, response) {
        var html = `<!DOCTYPE html>
    <html>
        <head>
            <title>헬스 갤러리</title>
            <link rel="stylesheet"
            href="/css/main.css"/>
        </head>
        <body>
            <h1><div id="logo" onclick="location.href='/'" style="cursor: pointer;">헬스 갤러리</div></h1>
            <nav id="main_nav">
                    <li class='menu'><a href="/note">게시판</a></li>
                    <li class='menu'><a href="a">몸평</a></li>
                    <li class='menu'><a href="a">legend</a></li>
                    <li class='menu'><a href="youtube.html">youtube</a></li>
                    <li class='menu'><a href="a">instagram</a></li>
                    <li class='menu'><a href="a">store</a></li>
                    <li class='menu'><a href="a">about me</a></li>
            </nav>
            
            <div class="create_div">
                <form action="/note/process_create" method="post">
                    <p class="create_title"><input type="text" name="title" placeholder="title"></p>
                    <p class="create_description">
                      <textarea name="description" placeholder="description"></textarea>
                    </p>
                    <p class="create_submit">
                      <input type="submit">
                    </p>
                  </form>
            </div>

            <script src="/javascript/main.js"></script>
        </body>
        <footer class="foot">
            <p>rituy8100@naver.com(정재훈)</p>

        </footer>
    </html>`;
        response.send(html);

});

app.post('/note/process_create', function (request, response){
    var body = '';
      request.on('data', function(data){
          body = body + data;
      });
      request.on('end', function(){
          var post = qs.parse(body);
          db.query(`
            INSERT INTO note (title, description, author,visit) 
              VALUES(?, ?, ?, ?)`,
            [post.title, post.description, '정재훈',1], 
            function(error, result){
              if(error){
                throw error;
              }
              response.writeHead(302, {Location: `/note`});
              response.end();
            }
          )
      });
});

/*************update************ */
app.get('/note/update/page/:pageId', function (request, response) {
    db.query(`select * from note`, function (error, topics) {
        db.query(`select * from note where id = '${request.params.pageId}'`, function (error2, topic) {
    var html = `<!DOCTYPE html>
<html>
    <head>
        <title>헬스 갤러리</title>
        <link rel="stylesheet"
        href="/css/main.css"/>
    </head>
    <body>
        <h1><div id="logo" onclick="location.href='/'" style="cursor: pointer;">헬스 갤러리</div></h1>
        <nav id="main_nav">
                <li class='menu'><a href="/note">게시판</a></li>
                <li class='menu'><a href="a">몸평</a></li>
                <li class='menu'><a href="a">legend</a></li>
                <li class='menu'><a href="youtube.html">youtube</a></li>
                <li class='menu'><a href="a">instagram</a></li>
                <li class='menu'><a href="a">store</a></li>
                <li class='menu'><a href="a">about me</a></li>
        </nav>
        
        <div class=update_div>
            <form action="/note/process_update" method="post">
                
                <input type="hidden" name="id" value="${topic[0].id}">
              <p><input type="text" name="title" placeholder="title" value="${topic[0].title}" class="update_title"></p>
              <p >
                <textarea name="description" placeholder="description" class="update_description">${topic[0].description}</textarea>
              </p>
              <p  class="update_button">
                  <input type="submit">
                </p>
              </form>
        </div>

        <script src="/javascript/main.js"></script>
    </body>
    <footer class="foot">
        <p>rituy8100@naver.com(정재훈)</p>

    </footer>
</html>`;
    response.send(html);
});
});

});

app.post('/note/process_update', function (request, response){
    var body='';
    request.on('data', function(data){
        body = body + data;
    });
    request.on('end', function(){
        var post = qs.parse(body);
        db.query('UPDATE note SET title=?, description=?, author=?, visit=? WHERE id=?', [post.title, post.description,'정재훈',1,post.id], function(error, result){
          response.writeHead(302, {Location: `/note/page/${post.id}`});
          response.end();
        })
    });
});

app.post('/note/process_delete', function (request, response){
    var body = '';
      request.on('data', function(data){
          body = body + data;
      });
      request.on('end', function(){
          var post = qs.parse(body);
          db.query('DELETE FROM note WHERE id = ?', [post.id], function(error, result){
            if(error){
              throw error;
            }
            response.writeHead(302, {Location: `/note`});
            response.end();
          });
      });
});


app.listen(8080, () => console.log('Example app listening on port 3000!'))
