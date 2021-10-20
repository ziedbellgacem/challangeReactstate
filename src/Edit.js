
import {Component} from 'react'
import {Button,FormControl,Modal} from 'react-bootstrap'

class Edit extends Component {
    constructor(props){
      super(props)
      this.state={
        show:false,
        newTodo:this.props.el.text
      }
      console.log(this.props)
    }
    handleChange=(e)=> {
      this.setState({ newTodo: e.target.value  })
      
    }
 
     handleClose = () => this.setState({show:false});
     handleShow = () => this.setState({show:true});
  render(){
    return(
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Edit
        </Button>
  
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <FormControl type="text" 
              value={this.state.newTodo}
              onChange={this.handleChange}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{this.props.edit(this.props.el.id,this.state.newTodo);this.handleClose()}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  }

  export default Edit;
  
