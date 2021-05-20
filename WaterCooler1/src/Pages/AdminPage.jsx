import React, { Component } from 'react'
import ReactTable from 'react-table-6'
import "react-table-6/react-table.css";  
import apis from '../Api/index'
import styled from 'styled-components'
import CreateDepartment from './CreateDepartment'

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`
const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`


class ViewAndUpdate extends Component {
    updateName = event => {
        event.preventDefault()

        window.location.href = `/departments/${this.props.id}/updateName`
    }

    render() {
        return <Update onClick={this.updateName}>View/Update</Update>
    }
}


class DeleteDepartment extends Component {
    deleteDepartment = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do you want to delete this department permanently?`,
            )
        ) {
            apis.deleteDepartment(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteDepartment}>Delete</Delete>
    }
}



class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            departments: [],
            employees: [],
            isLoading: false,
        };
    }

    componentDidMount = async () => {
        await apis.getAllDepartments().then(departments => {
            this.setState({
                departments: departments.data,
                employees: departments.data.members,
                isLoading: true
            })
        })
    }

    render() {
        const {departments, isLoading} = this.state;
        
        const columns = [
        {
        Header: 'ID',
        accessor: '_id'
        },
        {
        Header: 'Name',
        accessor: 'name'
        },
        {
            Header: '',
            accessor: '',
            Cell: function(props) {
                return (
                    <span>
                        <ViewAndUpdate id={props.original._id} />
                    </span>
                )
            },
        },
        {
            Header: '',
            accessor: '',
            Cell: function(props) {
                return (
                    <span>
                        <DeleteDepartment id={props.original._id} />
                    </span>
                )
            },
        }]
        return (
            <div>
                <ReactTable
                        data={departments}
                        columns={columns}
                        defaultPageSize={10}
                        pageSizeOptions={[2,4,6,10]}
                    />
                    <CreateDepartment />
                
            </div>
        )
    }
}

export default AdminPage