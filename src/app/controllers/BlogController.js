class BlogController {
    // [GET] /news
    index(red, res) {
        res.render('blog');
    };

    // GET /detail/:id
    detail(req, res) {
        res.send('BLOG DETAIL');
    }
}

module.exports = new BlogController();