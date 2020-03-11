import React, { Component } from 'react'
import axios from "axios"
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

class BlogInterface extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            post: ""
         };
    }

    createPost = async () => {
        try {
            let response = await axios.post("http://localhost:3000/blog_posts")
            console.log(response)
            this.setState({
                post: response.data,
                postCreated: true
            });
        }
        catch (error) {
            console.log(error)
        }
    };

    handleFormChange = (e) => {
        const { entry, value } = e.target;
        this.setState({
            post:
                { [entry]: value }
        })
        console.log(value)
    }




    render() {
        return (
            <div>

                <Jumbotron fluid>
                    <Container>
                        {/* {players} */}
                        {/* {props.players} */}
                        <p>Comments get appended and printed here.</p>
                    </Container>
                </Jumbotron>

                <>

                    <InputGroup className="mb-3">
                        <FormControl
                            onChange={this.handleFormChange}
                            entry="post_text"
                            placeholder="Type Comments Here."
                            aria-label="Post your thought's here"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary">Create Post (Button)</Button>
                        </InputGroup.Append>
                    </InputGroup>

                </>

            </div>
            
        );
    }
}

export default BlogInterface;

