export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToList = (navigate) => {
    navigate("/trips/list")
}

export const goToApplication = (navigate) => {
    navigate("/trips/application")
}

export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToAdmin = (navigate) => {
    navigate("/admin/trips/list")
}

export const goToCreate = (navigate) => {
    navigate("/admin/trips/create")
}

export const goToDetails = (navigate, id) => {
    navigate(`/admin/trips/${id}`)
}

export const goReturn = (navigate) => {
    navigate(-1)
}