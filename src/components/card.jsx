function Card(props) {
    return (
        <div onMouseMove={(elem)=>{
            console.log(elem.clientX);  
        }} className="card">
            <img src="https://images.unsplash.com/photo-1780726624500-8de106966b6f?q=80&w=729&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1>{props.user}</h1>
            <p> {props.pos} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque soluta magnam aspernatur repellendus quo reprehenderit assumenda facilis asperiores molestiae aut.</p>
            <button>view profile</button>
        </div>
    )
}

export default Card;