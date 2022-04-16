const Handlebars = require("handlebars");
export helper = Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
})

module.exports.helper = helper;