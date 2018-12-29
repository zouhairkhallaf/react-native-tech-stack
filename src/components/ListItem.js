import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions'

class ListItem extends Component {
    renderDescription(){
        const { library, expanded } = this.props;
        if(expanded){
            return (
                <CardSection>
                    <Text style={{flext: 1}}>
                        {library.item.description}
                    </Text>
                </CardSection> 
            )
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library.item
        return (
            <TouchableWithoutFeedback onPress={()=> this.props.selectLibrary(id) }>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
};

const styles= {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

const mapStateToProps = (state, ownProps) => { // ownProps are all the props if this component. We can user that to do some computations :)
    const expanded = state.selectedLibraryId === ownProps.library.item.id // we do the check here to make clean our component
    return{
        expanded
    }
}

export default connect(mapStateToProps, actions)(ListItem);  // this passed the action as a props called in `this.props.selectLibrary(id)`