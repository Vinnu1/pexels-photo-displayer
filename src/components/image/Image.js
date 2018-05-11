import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import ZoomIn from 'material-ui/svg-icons/action/zoom-in'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'

class Image extends Component{
    state = {
        open: false,
        currImg: ""
    }

    levelOpen = img => {
        this.setState({open:true,currImg:img})
    }

    levelClose = ()=>this.setState({open:false})

    render(){
        let imageList;
        const {images} = this.props
        if(images){
            imageList = (
                <GridList cols={2}>
                {images.map(img => (
                    <GridTile
                    title="By"
                    key={img.id}
                    subtitle={img.photographer}
                    actionIcon = {
                        <IconButton onClick={()=>this.levelOpen(img.src.original)}>
                         <ZoomIn color="white" />
                        </IconButton>     
                    }
                    >
                     <img src={img.src.original} alt=""/>
                    </GridTile>
                ))}
                </GridList>
            )
        }else{
            imageList = null
        }
        const actions = [
            <RaisedButton label="Close" secondary={true} onClick = {this.levelClose} />
        ]
        return(
            <div>
            {imageList}
            <Dialog 
             actions={actions}
             modal={false}
             open={this.state.open}
             onRequestClose={this.levelClose}>
             <img src={this.state.currImg} alt="" style={{width:'100%'}} />
             </Dialog>
            </div>    
        )
    }
}
Image.propTypes = {
    images: PropTypes.array.isRequired
}
export default Image