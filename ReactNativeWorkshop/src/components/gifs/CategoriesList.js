import React, {Component, PropTypes} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import Category from './Category';

class CategoriesList extends Component{

  constructor(props) {
    super(props);
    this.getCategories = this.getCategories.bind(this);
  }

  render(){
    return(
      <View style={styles.container}>
        <ScrollView>
          {this.getCategories()}
        </ScrollView>
      </View>
    )
  }


  getCategories() {

    let { categories, onSelect } = this.props;

    return categories.map((category, i) => {
      return (<Category key={i} category={category} onSelect={onSelect} />);
    });

  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 40
  }
})

CategoriesList.propTypes = {
  categories: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default CategoriesList;
