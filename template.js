module.exports = {
  /*********게시판 리스트************/
  list: function (topics) {
    var list = '';
    var i = topics.length - 1;
    while (0 <= i) {
      list = list + `<div class="post-preview">
            <a href="/note/page/${topics[i].id}">
              <h2 class="post-title">
                ${topics[i].title}
              </h2>
            </a>
            <p class="post-meta">Posted by
              <a href="#">Start Bootstrap</a>
              on ${topics[i].date.getHours()}:${topics[i].date.getMinutes()}  [${topics[i].visit} views]</p>
          </div>
          <hr>`;
      i = i - 1;
    }

    list = `
        <!-- Page Header -->
          <header class="masthead" style="background-image: url('https://i.ytimg.com/vi/SIB1xc9I_Ec/maxresdefault.jpg')">
            <div class="overlay"></div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                  <div class="site-heading">
                  <h1>Raymont Edmonds</h1>
                  <span class="subheading">winner of men's physique mr olympia 2019</span>
                  </div>
                </div>
              </div>
            </div>
          </header>
        <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
          <div class="post-preview">
          <h2 class="post-title">
            게시판
          </h2>
      </div>
      <hr>
            ${list}
        <!-- Pager -->
        <div class="clearfix">
          <a class="btn btn-primary float-right" href="/note/create">글쓰기</a>
        </div>
      </div>
        </div>
      </div>
    
      <hr>`

    return list;
  }
  ,
  /*********홈페이지 틀****************/
  head_tail: function (contents) {
    head_tail = `<!DOCTYPE html>
        <html lang="en">
        
        <head>
        
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <meta name="description" content="">
          <meta name="author" content="">
        
          <title>헬스갤러리</title>
        
          <!-- Bootstrap core CSS -->
          <link href="/template/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        
          <!-- Custom fonts for this template -->
          <link href="/template/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
          <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
          <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
        
          <!-- Custom styles for this template -->
          <link href="/template/css/clean-blog.min.css" rel="stylesheet">
        
        </head>
        
        <body>
        
          <!-- Navigation -->
          <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container">
              <a class="navbar-brand" href="/">헬스갤러리</a>
              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="/note">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/note">게시판</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">유튜브</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Login</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        
          

            ${contents}
        
          <!-- Footer -->
          <footer>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                  <ul class="list-inline text-center">
                    <li class="list-inline-item">
                      <a href="#">
                        <span class="fa-stack fa-lg">
                          <i class="fas fa-circle fa-stack-2x"></i>
                          <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <span class="fa-stack fa-lg">
                          <i class="fas fa-circle fa-stack-2x"></i>
                          <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <span class="fa-stack fa-lg">
                          <i class="fas fa-circle fa-stack-2x"></i>
                          <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                  <p class="copyright text-muted">Copyright &copy; Your Website 2020</p>
                </div>
              </div>
            </div>
          </footer>
        
          <!-- Bootstrap core JavaScript -->
          <script src="/template/vendor/jquery/jquery.min.js"></script>
          <script src="/template/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        
          <!-- Custom scripts for this template -->
          <script src="/template/js/clean-blog.min.js"></script>
        
        </body>
        
        </html>
        `
    return head_tail
  }
  ,/*************게시글 보기****************/
  article: function (topics, topic) {
    var list = '';
    var i = topics.length - 1;
    while (0 <= i) {
      list = list + `<div class="post-preview">
            <a href="/note/page/${topics[i].id}">
              <h2 class="post-title">
                ${topics[i].title}
              </h2>
            </a>
            <p class="post-meta">Posted by
              <a href="#">Start Bootstrap</a>
              on ${topics[i].date.getHours()}:${topics[i].date.getMinutes()}  [${topics[i].visit} views]</p>
          </div>
          <hr>`;
      i = i - 1;
    }

    list = `
        <!-- Page Header -->
          <header class="masthead" style="background-image: url('https://i.ytimg.com/vi/SIB1xc9I_Ec/maxresdefault.jpg')">
            <div class="overlay"></div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                  <div class="site-heading">
                    <h1>Raymont Edmonds</h1>
                    <span class="subheading">winner of men's physique mr olympia 2019</span>
                  </div>
                </div>
              </div>
            </div>
          </header>
        <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
          <div class="post-preview">
            <a href="/note/page/${topic[0].id}">
              <h2 class="post-title">
                ${topic[0].title}
              </h2>
            </a>
            <p class="post-meta">Posted by
              <a href="#">Start Bootstrap</a>
              on ${topic[0].date.getHours()}:${topic[0].date.getMinutes()}  [${topic[0].visit} views]</p>
          </div>
      <hr>
      <!-- Post Content -->
      <article>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <p>${topic[0].description}</p>
        </div>
      </div>
    </div>
  </article>
  <hr>
  <a class="btn btn-primary float-right" href="/note/update/page/${topic[0].id}">수정</a>
        <form action="/note/process_delete" method="post" name="sentMessage" id="contactForm" novalidate>
        <input type="hidden" name="id" value="${topic[0].id}">
        <button type="submit" class="btn btn-primary" id="sendMessageButton">삭제</button>
        </form>
        
          
        
  <hr>
            ${list}
        <!-- Pager -->
        
      </div>
        </div>
      </div>
    
      <hr>`

    return list;
  }
  ,/**********게시글 작성***********/
  write_article: function () {
    html = `
      <header class="masthead" style="background-image: url('https://i.ytimg.com/vi/SIB1xc9I_Ec/maxresdefault.jpg')">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="page-heading">
            <h1>Contact Me</h1>
            <span class="subheading">Have questions? I have answers.</span>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
      <form action="/note/process_create" method="post" name="sentMessage" id="contactForm" novalidate>
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>title</label>
              <input type="text" name="title" class="form-control" placeholder="Title" id="name" required data-validation-required-message="Please enter your name.">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>description</label>
              <textarea rows="10" name="description" class="form-control" placeholder="Description" id="message" required data-validation-required-message="Please enter a message."></textarea>
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <br>
          <div id="success"></div>
          <button type="submit" class="btn btn-primary" id="sendMessageButton">Send</button>
        </form>
        </div>
    </div>
  </div>

  <hr>`

    return html
  },
  update_article: function (topic) {
    var html = `<header class="masthead" style="background-image: url('https://i.ytimg.com/vi/SIB1xc9I_Ec/maxresdefault.jpg')">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="page-heading">
            <h1>Contact Me</h1>
            <span class="subheading">Have questions? I have answers.</span>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
      <form action="/note/process_update" method="post" name="sentMessage" id="contactForm" novalidate>
      <input type="hidden" name="id" value="${topic[0].id}">
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>title</label>
              <input type="text" name="title" class="form-control" placeholder="Title" id="name" value="${topic[0].title}" required data-validation-required-message="Please enter your name.">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>description</label>
              <textarea rows="10" name="description" class="form-control" placeholder="Description" id="message" required data-validation-required-message="Please enter a message.">${topic[0].description}</textarea>
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <br>
          <div id="success"></div>
          <button type="submit" class="btn btn-primary" id="sendMessageButton">Send</button>
        </form>
        </div>
    </div>
  </div>

  <hr>`

    return html
  }
}