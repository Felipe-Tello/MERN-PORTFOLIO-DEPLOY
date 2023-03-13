const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema( {
    firstName: {
        type: String,
        required: [true, "First Name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last Name is required"]
    },
    email: {
        type: String,
        required: [true, "E-mail is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Enter a valid e-mail"
        },
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must have at least 8 characters"]
    }
}, {timestamps: true, versionKey: false})

//Se realiza cuando no queremos guardarlo en BD (.virtual)
UserSchema.virtual('confirmPassword')
    .get( ()=> this._confirmPassword )
    .set( value => this._confirmPassword = value )

//Antes (.pre) de validar el esquema de usuario se comprueba que las contraseñas coincidan
UserSchema.pre('validate', function(next){
    if(this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Passwords do not match');
    }
    next();
})

//Antes (.pre) de guardar usuario, encriptamos contraseña
UserSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

const User = mongoose.model("users", UserSchema);
module.exports = User;

