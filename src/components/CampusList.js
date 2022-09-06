import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Campus from './Campus';
import { connect } from 'react-redux';
import { fetchCampuses } from '../actions/campus-actions';

const CampusList = (props) => {

    const [campuses, setCampuses] = useState([])
    useEffect(() => {
        const fetchCampuses = async() => {
            const response = await axios.get('/campuses')
            setCampuses(response.data)
            props.dispatchFetchCampuses()
        }
        fetchCampuses()
    }, []);

    return (
        <div id='campuses'>
            <h2>Campuses</h2>
            {
                campuses.map(campus => <Campus campus={campus} key={campus.id} />)
            }
        </div>
    )
}

function mapStateToProps (state){
    return {
        //campuses: state.campuses.campuses
        state
    }
}
function mapDispatchToProps (dispatch) {
    return {
      dispatchFetchCampuses: function() {
        dispatch(fetchCampuses());
      }
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(CampusList);