const iframeWrapper = document.createElement("div");
const target = document.querySelector("#centercontainer");
iframeWrapper.innerHTML = `<iframe name="shibaIframe" id="shibaIframe" style="width: 100%; height:850px; border: none; overflow:hidden;" scrollable="no" src="https://slhd.smartschool.be/index.php?module=Agenda"></iframe>`;
target.prepend(iframeWrapper); // adding iframe to the page
