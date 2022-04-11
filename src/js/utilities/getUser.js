const getUser = callback => {
    fetch('/user')
    .then(res => res.json())
    .then(({ user }) => {
        if(user) {
            callback(user);
        }
    })
    .catch(err => console.log(err));
};

export default getUser;