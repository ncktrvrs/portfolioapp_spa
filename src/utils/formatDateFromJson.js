const { format } = require("date-fns");

  // Formatting project date from JSON file
  export function formatDateFromJson(dateJSON, dateFormat) {
    let date = new Date(dateJSON.slice("-"));
    return format(date, dateFormat);
  }