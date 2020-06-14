db.createUser(
    {
    user    :   "Sergio",
    pwd     :   "Password",
    roles   :   [
        {
            role    :   "readWrite",
            db      :   "database-name"
        }
    ]
});