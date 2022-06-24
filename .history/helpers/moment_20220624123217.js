'use strict';
module.exports.register = function(Handlebars, options, params) {
    var moment = require('moment-timezone');
    var _ = require('lodash');

    Handlebars.registerHelper('moment', function(context, block) {
        if (context && context.hash) {
            block = _.cloneDeep(context);
            context = undefined;
        }
        var date = moment(context);

        if (block.hash.timezone) {
            date.tz(block.hash.timezone);
        }

        var hasFormat = false;

        // Reset the language back to default before doing anything else
        date.lang('en');

        for (var i in block.hash) {
            if (i === 'format') {
                hasFormat = true;
            } else if (date[i]) {
                date = date[i](block.hash[i]);
            } else {
                console.log('moment.js does not support "' + i + '"');
            }
        }

        if (hasFormat) {
            date = date.format(block.hash.format);
        }
        return date;
    });

    Handlebars.registerHelper('duration', function(context, block) {
        if (context && context.hash) {
            block = _.cloneDeep(context);
            context = 0;
        }
        var duration = moment.duration(context);
        var hasFormat = false;

        // Reset the language back to default before doing anything else
        duration = duration.lang('en');

        for (var i in block.hash) {
            if (i === 'format') {
                hasFormat = true;
            } else if (duration[i]) {
                duration = duration[i](block.hash[i]);
            } else {
                console.log('moment.js duration does not support "' + i + '"');
            }
        }

        if (hasFormat) {
            duration = duration.format(block.hash.format);
        }
        return duration;
    });
};