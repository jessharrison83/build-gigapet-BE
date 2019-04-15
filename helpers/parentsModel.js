async function get(id) {
    try {
        const parent = {
            id: 1,
            name: "string",
            username: "string",
            email: "string",
            img_url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
            children: [
                {}, {},
            ]
        };
        return parent;
    } catch (error) {
        return error;
    }
}

module.exports = { get };