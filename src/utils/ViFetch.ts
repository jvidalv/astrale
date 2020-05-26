type Config = {
  body?: string;
};

const ViFetch = async (
  method: string,
  url: string,
  params: Array<any>,
  values: object
): Promise<any> => {
  const config = <Config>{
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "josep-is-the-best-programmer-out-there",
    },
  };

  let eUrl = new URL(url);
  Object.keys(values).forEach((key) =>
    eUrl.searchParams.append(key, values[key])
  );

  if (method === "GET") {
    for (let param of params) {
      url = url.replace("{" + param + "}", values[param]);
    }
  }

  if (method === "POST") {
    config.body = JSON.stringify(values);
  }
  console.log(config);
  return fetch(url, config).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw Error("Error while fetching data");
  });
};

export default ViFetch;
