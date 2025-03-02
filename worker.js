const messages = []; // Хранилище сообщений в памяти

export default {
  async email(message, env, ctx) {
    const rawMessage = await message.text(); // Получаем текст сообщения
    messages.push(rawMessage); // Сохраняем в массив
    await message.forward("bigratmonster362@gmail.com"); // Пересылаем сообщение
  },

  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/messages") {
      // Возвращаем сохраненные сообщения
      return Response.json({ messages });
    }

    console.log(`Hello ${request.headers.get("User-Agent")} at path ${url.pathname}!`);
    return Response.json({ hello: "world" });
  }
};
