module.exports = {
    project:{
      ios:{},
      android:{}
    },
    dependencies: {
      "react-native-vector-icons": {
        platforms: {
          android: null,
          ios: null
          // add more platform to disable auto-linking for them too
        }
      }
    },
    assets:['./src/assets/fonts/']
  }