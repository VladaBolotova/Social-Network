const { Schema, model } = require('mongoose');

const reactionSchema = new Schema (
    {
        reactionId: {

        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true,

        },
        createdAt: {
            type: DataView,
            default: Date.now,
            dob: {
                type: Date,
                get: (date) => {
                    if (date) return date.toISOString().split("T") [0];
                }
            },
            timestamp: true,
        }

    }
);

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;