import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class RowBookItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.shadowView}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&w=1000&q=80',
            }}
          />
        </View>

        <View style={styles.bookDescription}>
          <Text style={styles.bookTitle}>
            Gửi thời đơn thuần đẹp đẽ của chúng ta
          </Text>
          <Text style={styles.bookAuthor}>Amy Nguyen</Text>
          <View style={styles.viewFlexDirection}>
            <Icon style={styles.iconRankChecked} name="star" />
            <Icon style={styles.iconRankChecked} name="star" />
            <Icon style={styles.iconRankChecked} name="star" />
            <Icon style={styles.iconRankChecked} name="star" />
            <Icon style={styles.iconRankUnchecked} name="star" />
            <Text style={styles.bookLike}> 342</Text>
          </View>

          <View style={styles.viewFlexDirection}>
            <View style={[styles.viewFlexDirection, styles.bottom]}>
              <Icon style={styles.iconDirection} name="book" />
              <Text style={styles.bookGrey}> 4 Quyển</Text>
            </View>
            <View
              style={[
                styles.viewFlexDirection,
                styles.iconBottom,
                styles.bottom,
              ]}>
              <Icon style={styles.iconDirection} name="tag" />
              <Text style={[styles.bookGrey, styles.bookPrice]}>36.000</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 75.5,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 2,
  },
  viewFlexDirection: {
    flexDirection: 'row',
  },
  image: {
    width: 130,
    height: 210,
    borderRadius: 5,
  },
  shadowView: {
    height: 210,
    width: 135,
    borderRadius: 5,
    marginVertical: 15,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {width: 3, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  bookTitle: {
    // fontFamily: 'SVN-ProximaNova',
    color: '#4a4a4a',
    fontSize: 18,
    width: 240,
  },
  bookAuthor: {
    // fontFamily: 'SVN-ProximaNova',
    color: '#bcbcbc',
    fontSize: 17,
    width: 230,
    top: 1,
  },
  bookGrey: {
    color: '#bcbcbc',
    fontSize: 17,
  },

  bookPrice: {
    left: 5,
  },
  iconDirection: {
    color: '#fda942',
    borderColor: '#000',
    fontSize: 20,
    right: 3,
    top: 2,
  },
  bookDescription: {
    marginHorizontal: 17,
    textAlign: 'center',
    top: 45,
  },

  iconBottom: {
    left: 35,
  },

  bottom: {
    top: 32,
  },
  iconRankChecked: {
    color: '#fda942',
    marginRight: 3,
    top: 10,
  },
  iconRankUnchecked: {
    color: '#bcbcbc',
    marginRight: 3,
    top: 10,
  },
  bookLike: {
    color: '#bcbcbc',
    left: 10,
    top: 5,
  },
});
