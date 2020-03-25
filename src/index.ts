import 'module-alias/register'
import 'reflect-metadata'

import {getConfig} from 'src/config'
const config = getConfig()
import {app} from 'src/app'

app.listen(config.port, () => {
  console.log(`running app on port ${config.port}`)
})
