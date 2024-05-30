const messageManager = require('../dao/mongoDb/MessageManager');

class MessageService {
  async createMessage(data) {
    return await messageManager.createMessage(data);
  }

  async getMessages() {
    return await messageManager.getMessages();
  }
}

module.exports = new MessageService();
