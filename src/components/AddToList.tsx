import React, {useState} from 'react'
import {IState} from '../interfaces/list';

interface IProps {
    people: IState["people"],
    setPeople: React.Dispatch<React.SetStateAction<IState["people"]>>
}

const AddToList: React.FC<IProps> = ({people, setPeople}) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        url: "https://i.ytimg.com/vi/UBv-GcD3jHE/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLCWxqq8lYRAEH2hTfWnjMF0L9JAyA",
        note: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) : void => {
        setInput(prevState => {
            return {
                ...prevState,
                [e.target.name] : e.target.value
            }
        })
    }

    const handleClick = ():void => {
        setPeople(prevState => {
            return [
                ...prevState,
                {
                    name: input.name,
                    age: Number(parseInt(input.age)) ? parseInt(input.age) : 0,
                    url: input.url,
                    note: input.note
                }
            ]
        })
    }

    const canSave = Boolean(input.name && input.age && input.note);

    return (
        <div className="AddToList">
            <input 
                type="text"
                placeholder="Name"
                className="AddToList-input"
                name="name"
                value={input.name}
                onChange = {handleChange}
            />
             <input 
                type="text"
                placeholder="Age"
                className="AddToList-input"
                name="age"
                value={input.age}
                onChange = {handleChange}
            />
             <input 
                type="text"
                placeholder="Image URL"
                className="AddToList-input"
                name="url"
                value={input.url}
                onChange = {handleChange}
            />
             <textarea
                placeholder="Notes"
                className="AddToList-input"
                name="note"
                value={input.note}
                onChange = {handleChange}
            />
            <button
                className="AddToList-btn"
                name="note"
                value = {input.note}
                onClick={handleClick}
                disabled={!canSave}
            >
                Add To List
            </button>
        </div>
    )
}

export default AddToList;
