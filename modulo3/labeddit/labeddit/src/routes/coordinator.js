export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToFeed = (navigate) => {
    navigate("/")
}

export const goToPost = (navigate, id) => {
    navigate(`/post/${id}`)
}

export const goToSignUp = (navigate) => {
    navigate("/cadastro")
}
