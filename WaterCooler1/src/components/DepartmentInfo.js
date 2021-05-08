import React, { Component } from 'react'
import api from '../api'
import Department from "./Department"

class DepartmentInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departments: []
        }
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id;
        await api.getDepartments.then(department => {
            this.setState({
                departments = department.data.allDepartments
            })
        })
    }
    
    render() {
        return (
            <div>
                {/* Map function that will */}

            </div>
        
        )
        
    }
}

export default DepartmentInfo