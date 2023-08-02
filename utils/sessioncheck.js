exports.checksession = (req, res, next) => {

	if (req.session.loggedin) {
		res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
		next();
		// res.render('pages/index',{title:'Admin|Dashboard',userdetials: req.session.user})
	} else {

		res.render('login', { title: 'Login', userdetials: req.session.user });

	}
};