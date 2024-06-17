const User = require('../../modules/User/users')

const onboardUser = async (req, res) => {

    const { username, number, bio, location  } = req.body;
    const userId = req.params.userId;

    try{
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user.username = username;
        user.number = number;
        user.bio = bio;
        user.location = location;

        // Save the updated user object to the database
        await user.save();

        return res.status(200).json({ message: 'User details updated successfully', user });
    

    }

    catch(error){

        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    onboardUser,
};