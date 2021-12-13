export default {
  formattedTimeSpent (seconds) {
    if (seconds < 60) {
      return seconds + 's'
    }

    const minutes = Math.floor(seconds / 60)
    const leftoverSeconds = seconds % 60
    var minuteLabel = ''

    if (minutes > 1) {
      minuteLabel = 'mins '
    } else {
      minuteLabel = 'min '
    }

    return minutes + minuteLabel + leftoverSeconds + 's'
  }
}
