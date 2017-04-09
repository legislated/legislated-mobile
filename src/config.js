// @flow
// set this to your desired env key; try not to check in changes to this value
const debugEnv = null

type Config = {|
  graphUrl: string,
|}

export function loadConfig () {
  const configs: { [key: string]: Config } = {
    development: {
      graphUrl: 'http://localhost:5000/graphql'
    },
    staging: {
      graphUrl: 'https://witness-slips.herokuapp.com/graphql'
    },
    production: {
      graphUrl: 'https://witness-slips.herokuapp.com/graphql'
    }
  }

  // TODO: add a native module that allows us to specify build environment, maybe
  // something like: https://github.com/luggit/react-native-config
  const env = __DEV__ ? debugEnv || 'development' : 'production'
  if (!env) {
    throw new Error('No build environment specified!')
  }

  const config = configs[env]
  if (!config) {
    throw new Error(`No config for build environment: ${env}!`)
  }

  return config
}

export default loadConfig()
