const Message = require('../models/Message');

class MessageManager {
  async createMessage(data) {
    return await Message.create(data);
  }

  async getMessages() {
    return await Message.find().sort({ timestamp: -1 });
  }
}

module.exports = new MessageManager();
