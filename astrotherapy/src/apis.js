const LOCAL_HOSTNAME = "http://localhost:5000";

export async function getResult(arg) {
  const result = await makeRequest("", arg ? arg : "arg");
  return result;
}

async function makeRequest(path, query) {
  try {
    const res = await fetch(`${LOCAL_HOSTNAME}/${path}${query ? query : ""}`, {
      method: "GET",
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(`[API ERROR] path: ${path}`, err);
    return null;
  }
}