import bcrypt from 'bcryptjs'

const users = [
    {
        name:'Admin User',
        email:'admin@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'Rohit',
        email:'rohit@example.com',
        password:bcrypt.hashSync('123456',10),
    },
    {
        name:'Harsh',
        email:'harsh@example.com',
        password:bcrypt.hashSync('123456',10),
    },
    
]

export default users