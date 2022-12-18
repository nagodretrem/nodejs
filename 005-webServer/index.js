const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write('<h2>index sayfasina hosgeldiniz.</h2>');
    }
    else if(req.url === '/about') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write('<h2>about sayfasina hosgeldiniz.</h2>');
    }
    else if(req.url === '/contact') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write('<h2>contact sayfasina hosgeldiniz.</h2>');
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write('<h2>404 sayfa bulunamadi.</h2>');
    }
    res.end();
});

const port = 5000;

server.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı.`);
});
