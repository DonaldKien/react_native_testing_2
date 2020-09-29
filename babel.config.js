module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  'plugins': [
    ["module-resolver", {
      'root': ["./src"],
      'alias': {
        "@containers": "./src/containers",
        "@components": "./src/components",
        "@redux": "./src/redux",
        "@routing": "./src/routing",
        "@styling": "./src/styling",
        "@assets": "./src/assets"
      }
    }]
  ]
};
