import React,{Component} from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import axios from 'axios'
import SearchButton from 'material-ui/svg-icons/action/search'
import Image from '../image/Image.js'

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};

class Search extends Component{
    state = {
        searchQuery:'',
        numb:15,
        url:'https://api.pexels.com/v1/search',
        key:'your_api_key',
        images:[],
    }

    

    onSearchClick =()=> {
    const search = this.state.searchQuery;
    if(search !== ''){
        axios.get(`${this.state.url}?query=${search}&per_page=${this.state.numb}&page=1`,{headers:{
                Authorization:this.state.key
        }
        })
        .then(result => {
            this.setState({
                images:result.data.photos
            })
        })
        .catch(error => console.log(error))
        }
    }

    onTextChange = (event)=>{
            this.setState({
                searchQuery:event.target.value
            })
        }

    onNumberChange = (event,index,value)=>{
        this.setState({
            numb:value
        })
    }    

    render(){
        return(
            <div>
                <TextField
                    value={this.state.searchQuery}
                    onChange = {this.onTextChange}
                    floatingLabelText = "Search for Pics"
                    fullWidth = {true}
                 /><br/>
           <SelectField
             name = "numb"
             floatingLabelText = "No. Of Pics"
             value={this.state.numb}
             onChange={this.onNumberChange} 
           >
             <MenuItem value={15} primaryText = "15" />
             <MenuItem value={20} primaryText = "20" />
             <MenuItem value={25} primaryText = "25" />
             <MenuItem value={30} primaryText = "30" />
             <MenuItem value={35} primaryText = "35" />
             <MenuItem value={40} primaryText = "40" />
             </SelectField>
           <br/>
           {this.state.images.length > 0 ? <Image images={this.state.images}/> : null}
                <FloatingActionButton style={style} onClick = {this.onSearchClick}>
                <SearchButton color="white"/>
                </FloatingActionButton>
                </div>
        )
    }
}

export default Search
    