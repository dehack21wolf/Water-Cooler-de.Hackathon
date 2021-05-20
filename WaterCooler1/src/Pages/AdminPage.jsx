import React, { Component } from 'react'
import ReactTable from 'react-table'
import apis from '../Api/index'

import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departments: [],
            columns: [],
            isLoading: false,
        };
    }

    componentDidMount = async () => {
        await apis.getAllDepartments().then(departments => {
            this.setState({
                departments: departments.data,
                isLoading: true,
            })
        })
    }

    render() {
        const departments = this.state;
        const isLoading = this.state;

        const columns = [
        {},
        {},
        {},

        ]
        return (
            <Wrapper>
                <ReactTable
                        data={departments}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                
            </Wrapper>
        )
    }
}

export default AdminPage