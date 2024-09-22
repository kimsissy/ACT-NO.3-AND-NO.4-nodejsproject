const comments = []; // Array to store comments

const page = {
    home: (req, res) => {
        res.render('index');
    },
    content: (req, res) => {
        res.render('content');
    },
    message: (req, res) => {
        if (req.method === 'POST') {
            const comment = req.body.comment;
            comments.push(comment); // Store the comment
            res.redirect('/message'); // Redirect after submission
        } else {
            res.render('message', { comments }); // Pass comments to the view
        }
    },
    contact: (req, res) => {
        res.render('contact');
    },
    about: (req, res) => {
        res.render('about');
    }
};

module.exports = page;
