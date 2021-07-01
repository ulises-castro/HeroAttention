// NOTE: This only works with manifiest 3
// chrome.runtime.onInstalled.addListener((reason) => {
//   if (reason === chrome.runtime.onInstalledReason.INSTALL) {
//     chrome.tabs.create({
//       url: "onboarding.html",
//     });
//   }
// });
//
chrome.tabs.onActivated.addListener((tab) => {
  chrome.tabs.get(tab.tabId, (current_tab_info) => {
    console.log(current_tab_info, "current_tab_info");

    if (/^https:\/\/www\.google/.test(current_tab_info.url)) {
      // chrome.tabs.insertCSS(null, { file: "./mystyles.css" });
      chrome.tabs.executeScript(null, { file: "./foreground.js" }, () =>
        console.log("inyected foreground.js")
      );
    }
  });
});

// chrome.tabs.executeScript(null, { file: "./foreground.js" }, () =>
//   console.log("injected")
// );
