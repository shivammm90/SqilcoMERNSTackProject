module.exports.ValidName = (Name)=>{
    const nameRegex = /^([a-z A-Z])+$/;
    return nameRegex.test(Name)
}

module.exports.Validemail = (email)=>{
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email)
}

module.exports.Validpass = (pass)=>{
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(pass)
}