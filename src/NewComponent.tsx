/*

type NewComponentType={
    students: Array<ArrayStudentsType>
}
type ArrayStudentsType={
    id: number
    name:string
    age:number
}

export const NewComponent=(props: NewComponentType)=>{
    return (
    <div>
        <ul>
            {props.students.map(el=>{
                return <div>
                    <li key={el.id}>Name: {el.name} Age: {el.age}</li>
                    </div>
            })}
        </ul>
    </div>
    )}*/
type NewComponentType = {
    cars: ArrayCars[]
}

type ArrayCars = {
    manufacturer: string
    model: string
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <div>
            <table>

                {props.cars.map((el, index) => {
                    return (
                        <tr key={index}>
                            <td>{el.manufacturer}</td>
                            <td>{el.model}</td>
                        </tr>
                    )
                })}
                <td>January</td>
                <td>$100</td>


            </table>
        </div>
    )
}