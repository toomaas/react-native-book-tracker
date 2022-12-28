import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  bookCover: {
    marginTop: 20,
  },
  title: {fontWeight: 'bold', fontSize: 20, marginVertical: 10},
  author: {fontSize: 15, marginBottom: 10},
});

export default styles;
