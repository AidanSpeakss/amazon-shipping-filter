async function initSetting() {
    let data1 = await browser.storage.local.get();
    if(!data1.isBlocking){
        browser.storage.local.set({isBlocking: true});
    }
}
async function toggleBlocking() {
    let data = await browser.storage.local.get();
    let blocked = !data.isBlocking;
    if (blocked) {
        browser.browserAction.setIcon({path: "icons/icon-96.png"});
    } else {
        browser.browserAction.setIcon({path: "icons/icon-96-disabled.png"});
    }

    browser.storage.local.set({isBlocking: blocked});

}
initSetting();
browser.browserAction.onClicked.addListener(toggleBlocking);
