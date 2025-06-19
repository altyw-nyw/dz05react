
import {useState, useMemo,useCallback} from 'react'



export const FilteredList= ()=>{
    const [users, setUsers]=useState(
        [
            {id: 1, name:"Alice"},
            {id: 2, name:"Robert"},
            {id: 3, name:"Nicol"},
    ]);
    const [search,setSearch]=useState('');


    const FilteredUsers=useMemo(()=>{
        console.log("фильтр");
        return users.filter(user=>
            user.name.toLowerCase().includes(search.toLowerCase()))
    },[users,search])



    const handleAddUser=useCallback(()=>{
        setUsers(prev=>{
            const newId=prev.length+1;
            const newUser={id:newId, name: `User${newId}`}
            return [...prev,newUser]})
    },[users]);

    return(
        <div>
        <h1>Список пользователей</h1>
        <input
        type='text'
        placeholder='Поиск'
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        />
        <button onClick={handleAddUser}>Добавить</button>
        <ul>
            {FilteredUsers.length > 0 ? (
                FilteredUsers.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))
            ) : (
                <li>Ничего не найдено</li>
            )}
            </ul>
        </div>
    )
    
   }

