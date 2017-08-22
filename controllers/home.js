const Picture = require('../models/Picture');

/**
 * GET /
 * Home page.
 */
exports.index = async (req, res) => {
   const count = await Picture.count().exec();
   const random = Math.floor(Math.random() * count)
   const pic = await Picture.findOne().skip(random).exec()
   res.render('home', {
      title: 'Home',
      pic: pic
   });
};
