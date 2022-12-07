
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
    <div>New component</div>
    )}