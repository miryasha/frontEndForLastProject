import React from 'react'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

const ListOfClasses = () => {
    return (
        <Container>
            <Table striped bordered hover variant="primary">
                <thead>
                    <tr>
                        <th >Class Id</th>
                        <th>Class Name</th>
                        <th>Location</th>
                        <th>Description</th>
                        <th>Sensei</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Dan</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>Dan</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>Dan</td>
                    </tr>
                    
                </tbody>
            </Table>
        </Container>
    )
}

export default ListOfClasses
