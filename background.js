chrome.webRequest.onBeforeRequest.addEventListener("change", function(details) {
    return {redirectUrl: "https://www.youtube.com/watch?v=tyu92s0cuCk"};
},  {
    urls: ["https://youtube.com/*"],
    types: ["main_frame", "sub_frame"],
},  [
    "blocking"
]);