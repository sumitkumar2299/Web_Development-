function Todo({todoData}){
    return (
        <>
        <input type="checkbox" />
        {todoData}
        <button>Edit</button>
        <button>Delete</button>
        </>
    )

}
export default Todo;