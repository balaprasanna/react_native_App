class DrawerView extends Component {
    render() {
      return (
      <View style={styles.drawerContent}>
        <View style={styles.leftTop} />
        <View>
          <Text style={styles.nav_text_item}></Text>
        </View>
        <View style={styles.leftBottom}>
          <View style={styles.nav_container}>
            <Text style={styles.nav_text_item}>
              Drawer Content1
          </Text>
          </View>
          <View style={styles.nav_container}>
            <Text style={styles.nav_text_item}>
              Drawer Content2
          </Text>
          </View>
          <View style={styles.nav_container}>
            <Text style={styles.nav_text_item}>
              Drawer Content3
        </Text>
          </View>
        </View>
      </View>
  
      )
    }
  }

  AppRegistry.registerComponent('AwesomeProject1', () => AwesomeProject1);