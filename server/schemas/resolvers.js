const { User, Book } = require('../models');
const { AuthenticationError } = require('apollo-server-express'); 
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
         await User.findOne({ _id: context.user._id })
          .select('-__v -password') 
      }

      throw new AuthenticationError('Not logged in');
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
    
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
    
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
    
      const correctPw = await user.isCorrectPassword(password);
    
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
    
      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, {input}, context) => {
      if (context.user) {
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: input } },
          { new: true }  
        );
        
      }I
      throw new AuthenticationError('You need to be logged in!');
    },
    removeBook: async (parent, {bookId}, context) => {
      if (context.user) {
        const bookSaved = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: input } },
          { new: true }  
        );

        return bookSaved;
      }I
      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;