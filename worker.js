export default {
  async email(message, env, ctx) {
    const blockList = ["hacker@example.com", "spammer@example.com"]
    if (blockList.includes(message.from)) {
      message.setReject("Address is blocked");
      return;
    }
    await message.forward("inbox@corp");
  },
  async fetch(request, env, ctx) {
		const url = new URL(request.url);
		console.log(`Hello ${navigator.userAgent} at path ${url.pathname}!`);

		return Response.json({"hello": "world"});
	}
}
