import React, { Component } from "react";
import { View, Text, StyleSheet, Platform, ListView, Keyboard } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import Row from "./Row";

const filterItems = (filter, items) => {
  console.log(filter);
  return items.filter((item) => {
    if (filter === "ALL") return true;
    if (filter === "COMPLETED") return item.complete;
    if (filter === "ACTIVE") return !item.complete;
  });
}

class App extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      allComplete: false,
      filter: "ALL",
      value: "",
      items: [],
      dataSource: ds.cloneWithRows([])
    }
    this.setSource = this.setSource.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleToggleAllComplete = this.handleToggleAllComplete.bind(this);
    this.handleToggleComplete = this.handleToggleComplete.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  //drying up the code
  setSource(items, itemsDatasource, otherState = {}) {
    this.setState({
      items,
      dataSource: this.state.dataSource.cloneWithRows(itemsDatasource),
      ...otherState //this means it'll take all of the properties : values in the otherState argument and throw them in here
    })
  }

  handleFilter(filter){
    this.setSource(this.state.items, filterItems(filter, this.state.items));
    //------CHECK THE CODE ON GITHUB
    this.state.filter = filter; //had to add this here
    //------CHECK THE CODE ON GITHUB

  }

  handleRemoveItem(key){
    const newItems = this.state.items.filter((item) => {
      return item.key != key;
    });

    this.setSource(newItems, newItems);
  }

  handleToggleComplete(key, complete){
    const newItems = this.state.items.map((item) => {
      if (item.key != key) return item;

      return {
        ...item,
        complete
      }
    });

    this.setSource(newItems, newItems)
  }

  handleToggleAllComplete() {    
    const complete = !this.state.allComplete;
    const newItems = this.state.items.map((item) => ({
      ...item, //put all of the properties and values of item into this object
      complete //also throw complete in there, es6 will default to doing complete : the value of complete
    }))

    this.setSource(newItems, newItems, { allComplete: complete })
  }

  handleAddItem() {
    if (!this.state.value) return; //don't add items that are blank

    const newItems = [
      ...this.state.items,
      {
        key: Date.now(),
        text: this.state.value,
        complete: false
      }
    ]

    console.log(newItems);

    this.setSource(newItems, newItems, { value: "" })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header 
          value={this.state.value}
          onAddItem={this.handleAddItem}
          onChange={(value) => this.setState({ value })}
          onToggleAllComplete={this.handleToggleAllComplete}
        />

        <View style={styles.content}>
          {/*whenever someone scrolls it will hide the keyboard*/}
          <ListView
            style={styles.list}
            enableEmptySections
            dataSource={this.state.dataSource}
            onScroll={() => Keyboard.dismiss()}
            renderRow={({ key, ...value}) => {
              return (
                <Row
                  key={key}
                  onRemove={() => this.handleRemoveItem(key)}
                  onComplete={(complete) => this.handleToggleComplete(key, complete)}
                  {...value}
                />
              )
            }}
            renderSeparator={(sectionId, rowId) => {
              return <View key={rowId} style={styles.separator}/>
            }}
          />
        </View>

        <Footer
          count={filterItems("ACTIVE", this.state.items).length}
          onFilter={this.handleFilter}
          filter={this.state.filter}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    ...Platform.select({
      ios: { paddingTop: 30 }
    })
  },
  content: {
    flex: 1
  },
  list: {
    backgroundColor: '#FFF'
  },
  separator: {
    borderWidth: 1,
    borderColor: "#F5F5F5"
  }
})

export default App;