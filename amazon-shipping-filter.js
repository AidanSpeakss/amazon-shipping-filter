
async function toggleBlocking(){
	let data = await browser.storage.local.get();
	let blocked = data.isBlocking;
	console.log(data)
	if(blocked != false){
		let results = document.querySelectorAll(".s-result-list > div");
		results.forEach(result => {
			if(!(result.innerHTML.match('Climate Pledge Friendly'))){
				result.style.opacity = '.2';
			}
		});
	}
}

toggleBlocking();

