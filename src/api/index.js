export default {
  fetch(request, env) {
    const url = new URL(request.url);

    return env.ASSETS.fetch(request);
  }
}