const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/css/style.css"/>
                <h1>{ data.place.name }</h1>
                <div>
                    <h1>Rating</h1>
                    <p>Not Rated</p>
                </div>
                <div>
                    <h1>Description</h1>
                    <p>Located in </p>
                </div>
               <div>
                    <h1>Comments</h1>
                    <p>No comments yet!</p>
               </div>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    )
}

module.exports = show