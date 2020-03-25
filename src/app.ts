import 'reflect-metadata'

import {createExpressServer} from 'routing-controllers'
import {getConfig} from 'src/config'
import {UserController} from 'src/controllers/userController'
import {RootController} from 'src/controllers/rootController'

const config = getConfig()

export const app = createExpressServer({
  controllers: [RootController, UserController], // we specify controllers we want to use
})
