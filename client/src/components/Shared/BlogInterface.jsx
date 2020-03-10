import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const BlogInterface = (props) => {
    console.log(props)
    // const players = props.players.map((player, index) => (
    //     <div>
    //         {player.first_name}
    //     </div>
    // ))
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
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">Button</Button>
                    </InputGroup.Append>
                </InputGroup>

            </>

        </div>
    )
}

export default BlogInterface