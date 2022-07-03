const controller = {
    getFavicon: function (req, res) {
        res.status(204);
    },

    getIndex: function (req, res) {
        res.render('index');
    },

    getError: function (req, res) {
        var details = {
            title: '404',
            subtitle: 'An error has occured.'
        };
        res.render('error', details);
    }
}

module.exports = controller;
