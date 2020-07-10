let id: number = parseInt(window.localStorage.getItem("_id_max") || "0")

function idCreator(){
    id += 1
    window.localStorage.setItem("_id_max",id.toString())
    return id
}

export default idCreator