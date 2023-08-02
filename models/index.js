'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config, {  
    dialect: 'mysql',
  
    logging: false
  });
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//define table here
db.superadmin = require("../models/superadmin.js")(sequelize, Sequelize);

db.banner = require("../models/banner.js")(sequelize, Sequelize);
db.bannerContent = require("../models/bannercontent")(sequelize, Sequelize);
db.partner = require("../models/partner")(sequelize, Sequelize);
db.security_service = require("../models/security_service")(sequelize, Sequelize);
db.main_service = require("../models/main_service")(sequelize, Sequelize);
db.testimonial = require("../models/testimonial")(sequelize, Sequelize);
db.contact = require("../models/contact")(sequelize, Sequelize);
db.blog = require("../models/blog")(sequelize, Sequelize);
db.news_letter = require("./news_letter")(sequelize, Sequelize);
db.we_are = require("./we_are")(sequelize, Sequelize);
db.our_vision = require("../models/our_vision")(sequelize, Sequelize);
db.our_mission = require("../models/our_mission")(sequelize, Sequelize);
db.faq = require("../models/faq")(sequelize, Sequelize);
db.slug = require("../models/slug")(sequelize, Sequelize);
db.why_we = require("../models/why_we")(sequelize, Sequelize);
db.why_we_count= require("../models/why_we_count")(sequelize, Sequelize);
db.contact_us= require("../models/contact_us")(sequelize, Sequelize);
db.career= require("../models/career")(sequelize, Sequelize);
db.faq_contact= require("../models/faq_contact")(sequelize, Sequelize);
db.our_approach= require("../models/our_approach")(sequelize, Sequelize);
db.innovative= require("../models/innovative")(sequelize, Sequelize);
db.operation= require("../models/operation")(sequelize, Sequelize);
db.most_complete= require("../models/most_complete")(sequelize, Sequelize);
db.comman_banner= require("../models/comman_banner.js")(sequelize, Sequelize);
db.career_info= require("../models/career_info.js")(sequelize, Sequelize);
db.about_us= require("../models/about_us.js")(sequelize, Sequelize);





db.securityservicemaintitle= require("../models/securityservicemaintitle.js")(sequelize, Sequelize);
db.main_service_main_titledesc= require("../models/main_service_main_titledesc.js")(sequelize, Sequelize);
db.our_approach_main_titledesc= require("../models/our_approach_main_titledesc.js")(sequelize, Sequelize);
db.testimonial_main_titledesc= require("../models/testimonial_main_titledesc.js")(sequelize, Sequelize);
db.operation_main_titledesc= require("../models/operation_main_titledesc.js")(sequelize, Sequelize);
db.blog_main_titledesc= require("../models/blog_main_titledesc.js")(sequelize, Sequelize);
db.our_vision_main_titledesc= require("../models/our_vision_main_titledesc.js")(sequelize, Sequelize);
db.most_completed_main_titledesc= require("../models/most_completed_main_titledesc.js")(sequelize, Sequelize);
db.career_main_titledesc= require("../models/career_main_titledesc.js")(sequelize, Sequelize);
db.industry_main_titledesc= require("../models/industry_main_titledesc.js")(sequelize, Sequelize);
db.innovation_main_titledesc= require("../models/innovation_main_titledesc.js")(sequelize, Sequelize);






db.industry_details= require("../models/industry_details.js")(sequelize, Sequelize);
db.industry_images= require("../models/industry_images.js")(sequelize, Sequelize);


db.industry_details.hasMany(db.industry_images,{foreignKey: 'industryId',as:"industry_image" });
db.industry_images.belongsTo(db.industry_details,{foreignKey: 'industryId',as:"industry"});















module.exports = db;

