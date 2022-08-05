export const saveUser = (user) => {
    localStorage.setItem('user',user)
}

export const readUser =  () =>{
    const user = localStorage.getItem('user')
    return user
}

export const saveToken = (token) => {
    localStorage.setItem('token',token)
}

export const readToken = () => {
    const token = localStorage.getItem('token')

    return token
}

export const storageRemoveAll = () => {
    localStorage.clear()
}