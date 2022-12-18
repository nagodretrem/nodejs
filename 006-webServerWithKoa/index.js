const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    if (ctx.url === '/') {
        ctx.body = '<h1>Index page </h1>';
    } else if (ctx.url === '/about') {
        ctx.body = '<h1>About page </h1>';
    } else if (ctx.url === '/contact') {
        ctx.body = '<h1>Contact page </h1>';
    } else {
        ctx.body = '<h1>404 Page not found </h1>';        
    }

});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});