// 监听扩展图标的点击事件
chrome.action.onClicked.addListener(() => {
  // 打开新标签页，加载ReqSmith的主界面
  chrome.tabs.create({
    url: chrome.runtime.getURL('popup.html'),
    active: true
  });
});