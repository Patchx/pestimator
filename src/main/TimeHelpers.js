// ---------------------
// - Private Functions -
// ---------------------

// Eventually we'll need to factor in more types of pluralization
// --
function pluralizeIfNecessary (label, value) {
  if (value < 2) {
    return label
  }

  return label + 's'
}

export default {
  formattedTimeSpent (seconds) {
    var hourLabel = ''
    var minuteLabel = ''

    if (seconds > 3599) {
      const hours = Math.floor(seconds % 216000 / 3600)
      hourLabel = pluralizeIfNecessary('hour', hours)
      hourLabel = hours + hourLabel + ' '
    }

    if (seconds > 59) {
      const minutes = Math.floor(seconds % 3600 / 60)
      minuteLabel = pluralizeIfNecessary('min', minutes)
      minuteLabel = minutes + minuteLabel + ' '
    }

    const leftoverSeconds = seconds % 60

    return hourLabel + minuteLabel + leftoverSeconds + 's'
  }
}
