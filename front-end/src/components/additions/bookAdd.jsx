import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'react-apollo'
import Tips from '../_components/tiPs'
import {addNewBook} from '../../queries/queries'
import {Grid, Form, Button} from 'semantic-ui-react'
import Title from '../_components/TopHead'
import {TopNavigation} from '..'

class AddBook extends React.Component{
        constructor(){
            super()
            this.state = {
                book_title:'',
                book_price:'',
                book_genre:'',
                date_published:'',
                name_of_author:'',
                number_available:1,
                book_description:''
            }
        }
        
postBook = event => {
    event.preventDefault()
    this.props.addNewBook({
        variables:this.state
    })
}
    render(){
        const GENRES = [
        { value:'romance', text:'Romance'},
        {value:'history', text:'History'},
        {value:'sci-fi', text:'Sci-Fi'},
        {value:'religion', text:'Religion'},
        {value:'mystery', text:'Mystery'},
        {value:'philosophy', text:'Philosophy'},
        {value:'drama', text:'Drama'}]
        return(
            <>
            {this.props.location.state === undefined ?
            this.props.history.push({pathname:'/sign-up'}):
            <>
            <TopNavigation is_authenticated={this.props.location.state.is_authenticated}/>
            <Grid padded>
            <Title content='Publish Book on Market' subheader='Explore by Reading' icon='book' />
            
           
            <Grid.Column computer={16} tablet={16} mobile={16}>
                 <Grid centered>
                 <Grid.Column computer={10} tablet={10} mobile={14}>
                    <Form onSubmit={this.postBook}>
                    <Form.Group widths='equal'>
                        <Form.Input
                        onChange={(e) => this.setState({book_title:e.target.value})}
                        required
                        label='Book Title'
                        placeholder='Book Title'
                        />
                        
                        <Form.Input
                        required
                        onChange={(e) => this.setState({book_price:e.target.value})}
                        placeholder='Price'
                        label='Price'
                        />
                        </Form.Group>
                        
                        <Form.Group widths='equal'>
                        
                         <Form.Input
                         label='Name of Author'
                         onChange={(e) => this.setState({name_of_author:e.target.value})}
                         required
                         placeholder='Author'
                         />
                         
                         
                        <Form.Input
                         onChange={(e) => this.setState({date_published:e.target.value})}
                         label='Date Publish'
                         type='date'
                         />
                         
                        
                         </Form.Group>
                         
                         <Form.Group widths='equal'>
                         <Form.Input
                         type='number'
                         onChange={(e) => this.setState({number_available:parseInt(e.target.value)})}
                         min={1}
                         required
                         label='Number Available'
                         />
                         
                         <Form.Select
                         label='Genre'
                         required
                        onChange={(e, node) => this.setState({book_genre:node.value})}
                         placeholder='Select Genre'
                         options={GENRES}
                         />
                         </Form.Group>
                         
                         <Form.TextArea
                         required
                          onChange={(e) => this.setState({book_description:e.target.value})}
                          label='Description'
                          placeholder='Description'
                          />
                          
                          <Button type='submit' circular> Advertise</Button>
                         
                    </Form>
                    </Grid.Column>
                    <Grid.Column computer={4} tablet={4} only='computer and tablet'>
                        <Tips />
                    </Grid.Column>
            </Grid>
            </Grid.Column>
            
  
            </Grid>
            </>}
            </>
        )
    }
}

AddBook.propTypes = {
    is_authenticated:PropTypes.bool.isRequired
}
export default graphql(addNewBook, {name:'addNewBook'})(AddBook)