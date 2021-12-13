import Datastore from 'nedb'
import path from 'path'
import { remote } from 'electron'

// Uncomment to see where vuex and data.db data are persisted
// console.log(remote.app.getPath('userData'))

export default new Datastore({
  autoload: true,
  filename: path.join(remote.app.getPath('userData'), '/data.db')
})
