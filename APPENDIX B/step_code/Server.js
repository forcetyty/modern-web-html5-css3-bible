// 모듈을 추출
var http = require('http');
var fs = require('fs');
var less = require('less');

// 서버를 생성 및 실행합니다.
http.createServer(function(request, response) {
    // 파일을 읽습니다.
    fs.readFile('LessStyleSheet.less', 'utf8', function(error, data) {
        // 스타일시트를 변환합니다.
        less.render(data, function(error, style) {
            //응답합니다.
            response.writeHead(200, { 'Content-Type': 'text/css' });
            response.end(style);
        });
    });
}).listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});