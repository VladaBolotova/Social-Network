const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

const thoughtSchema = new Schema(
{

    thoughtText: {
        type: String,
        required: true,
        length: [1,280]
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
    
username: {
    type: String,
    required: true,
},
reactions: [Reaction], 
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
}
);


thoughtSchema.set('toJSON', { getters: true });

thoughtSchema.virtual('formattedCreatedAt').get(function() {
  return this.createdAt.toLocaleString();
});

// Creating a virtual property "reactionCount" that retrieves the kength of the thought's reactions array field on query.
thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
})


// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
