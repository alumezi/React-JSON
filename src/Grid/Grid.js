import React, { Component } from 'react';
import GridElement from './components/GridElements/GridElement';
import GridDetail from './components/GridDetails/GridDetail';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      displayOverlay : 'none',
      displayId : ''
    }

    this.openOverlay = this.openOverlay.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
    this.toggleOverlay = this.toggleOverlay.bind(this);
  }

  openOverlay(displayId){
    this.setState({displayId : displayId, displayOverlay : 'block'})
  }

  closeOverlay(){
    this.setState({displayOverlay : 'none'})
  }
  
  toggleOverlay(displayId){
    this.setState({displayId})
  }



  render() {

    const { GridElements, GridDetails } = this.props.section;
    let { Children : ElementsChildren } = GridElements;
    let { Children : DetailsChildren } = GridDetails;

    let ElementsKeys = Object.keys(ElementsChildren);
    let DetailsKeys = Object.keys(DetailsChildren);
    

    
      return (
        <div className="App">
             {ElementsKeys.map(key => <GridElement  data={ElementsChildren[key]} key={key} openOverlay={this.openOverlay} id={key} /> )}
             {this.state.displayId ? 
              <GridDetail  
                data={DetailsChildren} 
                keys={DetailsKeys} 
                closeOverlay={this.closeOverlay} 
                toggleOverlay={this.toggleOverlay}
                display={this.state.displayOverlay} 
                id={this.state.displayId}  />
                :
                null
              }
        </div>
      );
  }
}

export default App;
