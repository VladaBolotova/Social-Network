const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
    {
      username: {
        type: String,
      required: true,
      trimmed:true,
    },
    
      email: {
        type: String,
      required: true,
      unique: true,
      validator: function(value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
      },
      message: '{VALUE} is not a valid email address!'
    },
    

      thought: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        },
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
    },
    {

      // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );

  //  creating a virtual property "friendCount" that retrieves the length of the user's friends array field on query.
  userSchema.virtual('friendCount').get(function() {
        return this.friends.length;
  });

  // Initialize our User model
const User = model('user', userSchema);

module.exports = User;