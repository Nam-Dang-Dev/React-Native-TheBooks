import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import CircleUserItem from './CircleUserItem';

export default class FlatListCircle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {passData, title, type} = this.props;

    const data = passData ? Array.isArray(passData) : undefined;

    return data ? (
      <View>
        <Text style={styles.title}>{title}</Text>
        <FlatList
          data={passData}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <CircleUserItem item={item} type={type} />}
        />
      </View>
    ) : null;
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 10,
  },
});
