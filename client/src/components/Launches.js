import React, {Component, Fragment} from 'react'
import { Query } from '@apollo/client/react/components';
import { gql } from '@apollo/client'
import LaunchItem from './LaunchItem'


const LAUNCHES_QUERY = gql`
    query getLanuchesQuery {
        launches {
            flight_number
            mission_name
            launch_success
            launch_date_local
            rocket {
                rocket_id
                rocket_name
                launch_year
              }
        }
    }
`;  
class Launches extends Component  {
    // const { loading, error, data } = useQuery(LAUNCHES_QUERY);
    render () { 
    return (
        <React.Fragment>
            <h1 className="display-4 my-3">Launches</h1>
            <Query query ={LAUNCHES_QUERY}>
                {
                    ({ loading, error, data }) => {
                        if(loading) return <h3>Loading...</h3>;
                        if(error) return <h4>There was an Error</h4>;
                        else if(data) {
                            return <Fragment>
                                {
                                    data.launches.map((launch)=> {
                                        return <LaunchItem key={launch.flight_number} launch={launch} />
                                    })
                                }
                            </Fragment>;
                        }
                    }
                }
            </Query>
        </React.Fragment>
    )}
}
// export const Launches = () => {
//     const { loading, error, data } = useQuery(LAUNCHES_QUERY);
//     return (
//         <div>
//             <h1 className="display-4 my-3">Launches</h1>
//             <h2>
//                 {
                    
//                 }
//             </h2>
//         </div>
//     )
// }
export default Launches;
