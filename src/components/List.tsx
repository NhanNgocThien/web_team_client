import React, { useEffect, useState } from 'react'
import { RouteComponentProps, withRouter} from 'react-router-dom';
import {IState, IRouteParams} from '../interfaces/list';
import IPage from '../interfaces/page';
import AddToList from './AddToList';

const List: React.FC<IPage & RouteComponentProps<IRouteParams>> = (props) => {

    const [people, setPeople] = useState<IState["people"]>([
        {
          name: "Lebrone James",
          age: 36,
          url: "https://i.ytimg.com/vi/UBv-GcD3jHE/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLCWxqq8lYRAEH2hTfWnjMF0L9JAyA",
          note: "TBU"
        }
      ]);

    useEffect(() => {
        console.log(props.name);
        console.log(props.match.params.id);        
    })

    const renderedLists = () : JSX.Element[] => {
        return people.map((person,index) => {
            return(
                <li className="List" key={index}>
                    <div className="List-header">
                        <img className="List-img" src={person.url} />
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age}</p>
                    <p className="List-note">{person.note}</p>
                </li>
            )
        })
    }

    return (
        <ul>
            {renderedLists()}
            <AddToList people={people} setPeople={setPeople}/>
        </ul>
    )
}

export default withRouter(List);
