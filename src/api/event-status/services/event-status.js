'use strict';

/**
 * event-status service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::event-status.event-status');
