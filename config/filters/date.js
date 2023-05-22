const moment = require('moment')

module.exports = {
  formatDateYYYYMMDD: (date) => (moment(date).format('YYYY-MM-DD'))
}