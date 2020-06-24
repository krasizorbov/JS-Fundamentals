function browserHistory(obj, arr) {
  for (let i = 0; i < arr.length; i++) {
    let [command, browser] = arr[i].split(" ");
    if (obj["Open Tabs"].includes(browser) && command === "Close") {
      let index = obj["Open Tabs"].indexOf(browser);
      let removedBrowser = obj["Open Tabs"].splice(index, 1).toString();
      obj["Recently Closed"].push(removedBrowser);
      obj["Browser Logs"].push(arr[i]);
    } else if (command === "Open") {
      obj["Open Tabs"].push(browser);
      obj["Browser Logs"].push(arr[i]);
    } else if (command === "Clear") {
      obj["Open Tabs"] = [];
      obj["Recently Closed"] = [];
      obj["Browser Logs"] = [];
    }
  }
  console.log(obj["Browser Name"]);
  console.log(`Open Tabs: ${obj["Open Tabs"].join(", ")}`);
  console.log(`Recently Closed: ${obj["Recently Closed"].join(", ")}`);
  console.log(`Browser Logs: ${obj["Browser Logs"].join(", ")}`);
}
browserHistory(
  {
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": [
      "Open Gmail",
      "Close Gmail",
      "Open Dropbox",
      "Open YouTube",
      "Close Dropbox",
    ],
  },
  ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);
