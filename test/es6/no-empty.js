const client = {
  emit(message, data) {
    return `${message} and ${data}`;
  }
};

const data = {};

try {
  client.emit(`message`, JSON.stringify(data));
} catch (e) {
  // ignore it
}
