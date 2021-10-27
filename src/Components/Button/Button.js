import './Button.css'

export  function Button({title = ''}) {
    return (
        <button className="btn btn-light">
            {title}
        </button>
    )
}
