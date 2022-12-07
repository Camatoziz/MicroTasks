
type NewComponentType={
    students: Array<ArrayStudentsType>
}
type ArrayStudentsType={
    id: number
    name:string
    age:number
}

export const NewComponent=(props: NewComponentType)=>{
    debugger
    return (
    <div>
        <ul>
            {props.students.map(el=>{
                return <div>
                    <li>Name {el.name} Age {el.age}</li>
                    </div>
            })}
        </ul>
    </div>
    )}