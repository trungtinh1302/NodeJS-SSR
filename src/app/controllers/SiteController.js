class SiteController {
    index (red, res) {
        res.render('home');
    };

    contact (red, res) {
        res.render('contact');
    };
};

module.exports = new SiteController;